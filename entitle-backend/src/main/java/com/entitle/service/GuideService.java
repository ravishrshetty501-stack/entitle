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
import org.springframework.web.client.RestClient;

import java.time.Instant;
import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class GuideService {
    private final SchemeRepository schemes;
    private final SchemeService schemeService;
    private final ChatMessageRepository chats;
    private final Json json;

    @Value("${entitle.llm.base-url}")
    private String baseUrl;
    @Value("${entitle.llm.api-key}")
    private String apiKey;
    @Value("${entitle.llm.model}")
    private String model;
    @Value("${entitle.llm.app-id}")
    private String appId;

    private static final String SYSTEM = """
            You are ENTITLE Guide, a friendly assistant that explains Indian government welfare schemes in simple language.
            Rules you must follow:
            - Use ONLY the scheme information provided in CONTEXT. Never invent eligibility conditions, amounts, dates or URLs.
            - Never guarantee approval. ENTITLE screening is informational, not an official government decision.
            - If the context does not contain the answer, say you are not sure and recommend the official source URL.
            - Do not ask for Aadhaar numbers, bank account numbers or other sensitive identifiers. If the user shares them, tell them not to.
            - Keep answers short (under 150 words), use plain words and short bullet points.
            - Reply in the same language the user writes in (English, Kannada or Hindi).
            """;

    public Map<String, Object> chat(User user, String message, String schemeId, String language) {
        String context = buildContext(user, schemeId);
        String reply;
        String source = "ai";
        try {
            reply = callLlm(user, message, context, language, schemeId);
        } catch (Exception e) {
            log.warn("LLM unavailable, using FAQ fallback: {}", e.getMessage());
            reply = faqAnswer(user, message, schemeId);
            source = "faq";
        }
        if (schemeId != null && schemeId.isBlank())
            schemeId = null;
        if (user != null) {
            save(user.getId(), "user", message, schemeId, source);
            save(user.getId(), "assistant", reply, schemeId, source);
        }
        return Map.of("reply", reply, "source", source);
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

    private String buildContext(User user, String schemeId) {
        StringBuilder sb = new StringBuilder();
        List<Scheme> list = schemeId != null && !schemeId.isBlank()
                ? schemes.findById(schemeId).map(List::of).orElse(List.of())
                : schemes.findAll();
        for (Scheme s : list) {
            JsonNode d = json.read(s.getData());
            sb.append("### ").append(s.getName()).append(" [id=").append(s.getId()).append("]\n")
                    .append("Category: ").append(s.getCategory()).append(" | Level: ").append(s.getLevel())
                    .append(s.getState() != null ? " (" + s.getState() + ")" : "").append("\n")
                    .append("Summary: ").append(d.path("description").asText()).append("\n")
                    .append("Benefits: ").append(d.path("benefits").asText()).append("\n")
                    .append("Who can apply: ").append(d.path("whoCanApply").asText()).append("\n");
            if (list.size() == 1) {
                sb.append("Documents: ");
                d.path("documents").forEach(x -> sb.append(x.path("name").asText()).append("; "));
                sb.append("\nProcess: ");
                d.path("process").forEach(x -> sb.append(x.asText()).append(" "));
                sb.append("\nDeadline info: ").append(d.path("deadlineInfo").asText());
            }
            sb.append("\nOfficial source: ").append(s.getSourceUrl()).append("\n\n");
        }
        if (user != null) {
            List<Map<String, Object>> results = schemeService.storedResults(user.getId());
            if (!results.isEmpty()) {
                sb.append("USER'S ENTITLE SCREENING RESULTS (informational):\n");
                results.stream()
                        .filter(r -> schemeId == null || schemeId.isBlank() || schemeId.equals(r.get("schemeId")))
                        .limit(schemeId == null || schemeId.isBlank() ? 21 : 1)
                        .forEach(r -> sb.append("- ").append(r.get("schemeName")).append(": ").append(r.get("status"))
                                .append(". Missing: ").append(json.write(r.get("missing")))
                                .append(". Needs verification: ").append(json.write(r.get("verification")))
                                .append(". Next action: ").append(r.get("nextAction")).append("\n"));
            }
        }
        return sb.toString();
    }

    private String callLlm(User user, String message, String context, String language, String schemeId) {
        List<Map<String, String>> messages = new ArrayList<>();
        messages.add(Map.of("role", "system", "content",
                SYSTEM + "\nPreferred UI language: " + language + "\n\nCONTEXT:\n" + context));
        if (user != null) {
            List<ChatMessage> recent = new ArrayList<>(schemeId == null || schemeId.isBlank()
                    ? chats.findTop10ByUserIdAndSchemeIdIsNullOrderByCreatedAtDesc(user.getId())
                    : chats.findTop10ByUserIdAndSchemeIdOrderByCreatedAtDesc(user.getId(), schemeId));
            Collections.reverse(recent);
            recent.forEach(m -> messages.add(Map.of("role", m.getRole(), "content", m.getContent())));
        }
        messages.add(Map.of("role", "user", "content", message));

        SimpleClientHttpRequestFactory f = new SimpleClientHttpRequestFactory();
        f.setConnectTimeout(10_000);
        f.setReadTimeout(60_000);
        RestClient.RequestBodySpec req = RestClient.builder().requestFactory(f).build()
                .post().uri(baseUrl + "/chat/completions")
                .contentType(MediaType.APPLICATION_JSON)
                .header("Authorization", "Bearer " + apiKey);
        if (appId != null && !appId.isBlank())
            req = req.header("X-App-ID", appId);
        JsonNode res = req.body(Map.of("model", model, "messages", messages, "max_tokens", 600))
                .retrieve().body(JsonNode.class);
        String text = res.path("choices").path(0).path("message").path("content").asText("");
        if (text.isBlank())
            throw new IllegalStateException("Empty LLM response");
        return text;
    }

    public String faqAnswer(User user, String message, String schemeId) {
        String q = message.toLowerCase();
        Optional<Scheme> s = schemeId == null ? Optional.empty() : schemes.findById(schemeId);
        if (s.isEmpty()) {
            return "I can explain any scheme listed on ENTITLE. Open a scheme and ask me about its benefits, documents, "
                    + "or why you were matched. ENTITLE results are screening guidance only — always confirm on the official government website.";
        }
        JsonNode d = json.read(s.get().getData());
        if (q.contains("document") || q.contains("certificate") || q.contains("ದಾಖಲೆ") || q.contains("दस्तावेज")) {
            StringBuilder sb = new StringBuilder("Documents usually needed for " + s.get().getName() + ":\n");
            d.path("documents").forEach(x -> sb.append("• ").append(x.path("name").asText()).append(" — ")
                    .append(x.path("why").asText()).append("\n"));
            return sb.append("Confirm the final list on the official source: ").append(s.get().getSourceUrl())
                    .toString();
        }
        if (q.contains("why") || q.contains("eligible") || q.contains("qualify") || q.contains("next")) {
            if (user != null) {
                Optional<Map<String, Object>> r = schemeService.storedResults(user.getId()).stream()
                        .filter(x -> schemeId.equals(x.get("schemeId"))).findFirst();
                if (r.isPresent())
                    return "Your screening status is "
                            + r.get().get("status").toString().replace('_', ' ').toLowerCase()
                            + ". Next step: " + r.get().get("nextAction") + " This is not an official decision.";
            }
            return "Who can apply: " + d.path("whoCanApply").asText()
                    + " Run the eligibility assessment to see how your profile matches.";
        }
        if (q.contains("apply") || q.contains("how")) {
            StringBuilder sb = new StringBuilder("How to apply:\n");
            d.path("process").forEach(x -> sb.append("• ").append(x.asText()).append("\n"));
            return sb.toString();
        }
        return s.get().getName() + ": " + d.path("description").asText() + "\nBenefits: " + d.path("benefits").asText()
                + "\nOfficial source: " + s.get().getSourceUrl();
    }

    public List<ChatMessage> history(String userId) {
        List<ChatMessage> list = new ArrayList<>(chats.findTop40ByUserIdOrderByCreatedAtDesc(userId));
        Collections.reverse(list);
        return list;
    }
}
