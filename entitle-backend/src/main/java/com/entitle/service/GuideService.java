package com.entitle.service;

import com.entitle.model.ChatMessage;
import com.entitle.model.Scheme;
import com.entitle.model.User;
import com.entitle.repo.ChatMessageRepository;
import com.entitle.repo.SchemeRepository;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.client.SimpleClientHttpRequestFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestClient;

import java.time.Instant;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class GuideService {
    private final SchemeRepository schemes;
    private final SchemeService schemeService;
    private final SchemeContextService contextService;
    private final RuleBasedFallbackService fallbackService;
    private final ChatMessageRepository chats;
    private final Json json;

    @Value("${entitle.llm.base-url:https://api.openai.com/v1}")
    private String baseUrl;
    @Value("${entitle.llm.api-key:}")
    private String apiKey;
    @Value("${entitle.llm.model:claude-sonnet-5-5}")
    private String model;
    @Value("${entitle.llm.app-id:}")
    private String appId;

    private static final String SYSTEM_PROMPT = """
            You are ENTITLE Smart Assistant, an advanced, highly intelligent civic assistant with deep expertise in Indian Government welfare schemes (Central & State), citizen services, documents, and broad general knowledge.

            Core Instructions:
            1. For Government Scheme Inquiries:
               - Use the factual scheme information provided in CONTEXT. Never invent eligibility rules, amounts, or URLs.
               - Format answers cleanly with clear bold headers, bullet points, and numbered steps.
               - Highlight key benefits, eligibility benchmarks, required documents, and the official portal.
               - Clearly state that applications are completed on the official government portal.
            2. For General Knowledge / Everyday Inquiries (e.g. Science, Photosynthesis, Technology, Civics, Education, Healthcare, Agriculture):
               - Answer thoroughly, accurately, and naturally.
               - Explain concepts in accessible, educational language with real-world examples.
               - Do not force government scheme templates onto general knowledge questions.
            3. Contextual Awareness:
               - If the user asks a follow-up question (e.g. "Who can apply?", "What documents are needed?"), answer in the context of the scheme previously discussed.
            4. Language:
               - Reply fluently in the user's requested language (English, Hindi, or Kannada).
            5. Safety & Privacy:
               - Never request sensitive personal identifiers like Aadhaar numbers or bank passwords.
            """;

    public Map<String, Object> chat(User user, String message, String schemeId, String language, String previousSchemeId) {
        String lang = (language != null && !language.isBlank()) ? language : "en";
        String effectiveApiKey = resolveApiKey();

        // 1. Resolve scheme with contextual awareness
        Optional<Scheme> targetScheme = contextService.resolveScheme(schemeId, message, previousSchemeId);
        Scheme s = targetScheme.orElse(null);

        // 2. Classify query intent
        SchemeContextService.QueryType queryType = contextService.classifyQuery(message, s != null ? s.getId() : previousSchemeId);

        // If translation request or follow-up and s is null, check previousSchemeId
        if (s == null && previousSchemeId != null && !previousSchemeId.isBlank()) {
            s = schemes.findById(previousSchemeId.trim()).orElse(null);
        }

        log.info("ENTITLE Assistant Request -> message: '{}', resolvedScheme: {}, queryType: {}, lang: {}, hasApiKey: {}",
                message, s != null ? s.getId() : null, queryType, lang, (effectiveApiKey != null && !effectiveApiKey.isBlank()));

        String reply;
        String source = "verified_knowledge";

        // 3. Attempt external LLM if key is configured and online
        if (effectiveApiKey != null && !effectiveApiKey.isBlank() && !effectiveApiKey.equalsIgnoreCase("none")) {
            try {
                String context = buildContext(user, s, queryType);
                reply = callLlm(user, message, context, lang, s != null ? s.getId() : previousSchemeId, effectiveApiKey);
                source = "ai";
            } catch (Exception e) {
                log.warn("Online LLM call failed or timed out ({}), falling back to intelligent knowledge base", e.getMessage());
                reply = fallbackService.generateAnswer(user, message, s, lang);
                source = "verified_knowledge";
            }
        } else {
            // High-precision fallback engine covering 107 schemes + General Knowledge + Civic Services
            reply = fallbackService.generateAnswer(user, message, s, lang);
            source = "verified_knowledge";
        }

        // Clean up response string to prevent any stray characters or undefined tokens
        reply = sanitizeReply(reply);

        String effectiveSchemeId = s != null ? s.getId() : (queryType == SchemeContextService.QueryType.SCHEME_FOLLOWUP ? previousSchemeId : null);
        if (user != null) {
            save(user.getId(), "user", message, effectiveSchemeId, source);
            save(user.getId(), "assistant", reply, effectiveSchemeId, source);
        }

        Map<String, Object> response = new HashMap<>();
        response.put("reply", reply);
        response.put("source", source);
        response.put("queryType", queryType.name());

        if (s != null) {
            response.put("schemeId", s.getId());
            response.put("schemeName", s.getName());
            response.put("category", s.getCategory());
            response.put("officialUrl", s.getOfficialUrl() != null ? s.getOfficialUrl() : s.getSourceUrl());
            response.put("suggestions", generateSuggestions(s));
        } else {
            response.put("suggestions", List.of(
                    "What is PM-KISAN?",
                    "Gruha Lakshmi Karnataka",
                    "Ayushman Bharat eligibility",
                    "Tell me about photosynthesis"
            ));
        }

        return response;
    }

    private String resolveApiKey() {
        if (apiKey != null && !apiKey.isBlank() && !apiKey.equalsIgnoreCase("none")) {
            return apiKey;
        }
        String envKey = System.getenv("OPENAI_API_KEY");
        if (envKey != null && !envKey.isBlank()) return envKey;
        envKey = System.getenv("GEMINI_API_KEY");
        if (envKey != null && !envKey.isBlank()) return envKey;
        envKey = System.getenv("EMERGENT_LLM_KEY");
        if (envKey != null && !envKey.isBlank()) return envKey;
        envKey = System.getenv("AI_API_KEY");
        if (envKey != null && !envKey.isBlank()) return envKey;
        return null;
    }

    private String sanitizeReply(String reply) {
        if (reply == null) return "";
        return reply.replace("??", "–")
                .replace("undefined", "")
                .trim();
    }

    private List<String> generateSuggestions(Scheme s) {
        List<String> list = new ArrayList<>();
        list.add("Who can apply for " + s.getName() + "?");
        list.add("What documents are needed?");
        list.add("How do I apply?");
        if (s.getState() != null && s.getState().equalsIgnoreCase("Karnataka")) {
            list.add("Is this available in Karnataka?");
        }
        return list;
    }

    private void save(String userId, String role, String content, String schemeId, String source) {
        ChatMessage m = new ChatMessage();
        m.setUserId(userId);
        m.setRole(role);
        m.setContent(content);
        m.setSchemeId(schemeId);
        m.setSource(source);
        m.setCreatedAt(Instant.now());
        chats.save(m);
    }

    private String buildContext(User user, Scheme s, SchemeContextService.QueryType queryType) {
        if (queryType == SchemeContextService.QueryType.GENERAL_KNOWLEDGE) {
            return "GENERAL KNOWLEDGE MODE: The user is asking a broad question outside specific welfare schemes. Provide an accurate, comprehensive, and helpful answer.";
        }

        StringBuilder sb = new StringBuilder();
        if (s != null) {
            JsonNode d = json.read(s.getData());
            sb.append("SPECIFIC SCHEME CONTEXT:\n")
                    .append("### ").append(s.getName()).append(" [id=").append(s.getId()).append("]\n")
                    .append("Category: ").append(s.getCategory()).append(" | Level: ").append(s.getLevel())
                    .append(s.getState() != null ? " (" + s.getState() + ")" : "").append("\n")
                    .append("Summary: ").append(d.path("description").asText()).append("\n")
                    .append("Benefits: ").append(d.path("financialBenefit").asText(d.path("benefits").asText())).append("\n")
                    .append("Who can apply: ").append(d.path("whoCanApply").asText()).append("\n")
                    .append("Documents: ");
            d.path("documents").forEach(x -> sb.append(x.path("name").asText()).append("; "));
            sb.append("\nProcess: ");
            d.path("process").forEach(x -> sb.append(x.asText()).append(" "));
            sb.append("\nExclusions: ");
            d.path("ineligibility").forEach(x -> sb.append(x.asText()).append("; "));
            sb.append("\nOfficial source: ").append(s.getOfficialUrl() != null ? s.getOfficialUrl() : s.getSourceUrl()).append("\n");
            sb.append("Verified Date: ").append(s.getLastVerified()).append("\n\n");
        } else {
            List<Scheme> list = schemes.findAll().stream().limit(8).toList();
            sb.append("AVAILABLE SCHEMES IN CATALOG:\n");
            for (Scheme sc : list) {
                sb.append("• ").append(sc.getName()).append(" (").append(sc.getCategory()).append(", ").append(sc.getState() != null ? sc.getState() : "All India").append(")\n");
            }
        }

        if (user != null && s != null) {
            List<Map<String, Object>> results = schemeService.storedResults(user.getId());
            results.stream().filter(r -> s.getId().equals(r.get("schemeId"))).findFirst().ifPresent(r -> {
                sb.append("USER ELIGIBILITY ASSESSMENT FOR THIS SCHEME:\n")
                        .append("Status: ").append(r.get("status")).append("\n")
                        .append("Match score: ").append(r.get("matchScore")).append("%\n\n");
            });
        }
        return sb.toString();
    }

    private String callLlm(User user, String message, String context, String language, String schemeId, String authKey) {
        List<Map<String, String>> messages = new ArrayList<>();
        messages.add(Map.of("role", "system", "content",
                SYSTEM_PROMPT + "\nPreferred Response Language: " + language + "\n\nCONTEXT:\n" + context));

        if (user != null) {
            List<ChatMessage> recent = new ArrayList<>(schemeId == null || schemeId.isBlank()
                    ? chats.findTop10ByUserIdAndSchemeIdIsNullOrderByCreatedAtDesc(user.getId())
                    : chats.findTop10ByUserIdAndSchemeIdOrderByCreatedAtDesc(user.getId(), schemeId));
            Collections.reverse(recent);
            recent.forEach(m -> messages.add(Map.of("role", m.getRole(), "content", m.getContent())));
        }

        messages.add(Map.of("role", "user", "content", message));

        SimpleClientHttpRequestFactory f = new SimpleClientHttpRequestFactory();
        f.setConnectTimeout(8_000);
        f.setReadTimeout(25_000);

        RestClient.RequestBodySpec req = RestClient.builder().requestFactory(f).build()
                .post().uri(baseUrl + "/chat/completions")
                .contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", "Bearer " + authKey);

        if (appId != null && !appId.isBlank()) {
            req = req.header("X-App-ID", appId);
        }

        JsonNode res = req.body(Map.of("model", model, "messages", messages, "max_tokens", 850))
                .retrieve().body(JsonNode.class);

        String text = res.path("choices").path(0).path("message").path("content").asText("");
        if (text.isBlank()) {
            throw new IllegalStateException("Empty LLM response");
        }
        return text;
    }

    public List<ChatMessage> history(String userId) {
        List<ChatMessage> list = new ArrayList<>(chats.findTop40ByUserIdOrderByCreatedAtDesc(userId));
        Collections.reverse(list);
        return list;
    }

    @Transactional
    public void clearHistory(String userId) {
        chats.deleteByUserId(userId);
    }
}
