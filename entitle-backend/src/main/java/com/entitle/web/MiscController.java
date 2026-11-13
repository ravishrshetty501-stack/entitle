package com.entitle.web;

import com.entitle.model.ChatMessage;
import com.entitle.model.Scheme;
import com.entitle.model.User;
import com.entitle.repo.*;
import com.entitle.service.ApiException;
import com.entitle.service.GuideService;
import com.entitle.service.Json;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.io.InputStream;
import java.util.*;
import java.util.stream.Collectors;

@Slf4j
@RestController
@RequiredArgsConstructor
public class MiscController {
    private final EligibilityAssessmentRepository assessments;
    private final ChecklistProgressRepository checklists;
    private final ApplicationRepository applications;
    private final SavedSchemeRepository savedSchemes;
    private final SchemeRepository schemes;
    private final GuideService guideService;
    private final Json json;

    @GetMapping("/api/health")
    public ResponseEntity<Map<String, String>> health() {
        return ResponseEntity.ok(Map.of("status", "ok"));
    }

    @GetMapping("/api/demo/personas")
    public ResponseEntity<JsonNode> personas() {
        try (InputStream in = new ClassPathResource("seed/personas.json").getInputStream()) {
            return ResponseEntity.ok(json.mapper().readTree(in));
        } catch (Exception e) {
            log.error("Failed reading personas.json: {}", e.getMessage());
            return ResponseEntity.ok(json.mapper().createArrayNode());
        }
    }

    @GetMapping("/api/analytics/impact")
    public ResponseEntity<Map<String, Object>> impact() {
        Map<String, Object> prototype = new LinkedHashMap<>();
        prototype.put("profilesAssessed", Math.max(1, assessments.countDistinctUsers()));
        prototype.put("potentialMatchesSurfaced", Math.max(1, assessments.countByAssessmentStatusNot("NOT_ELIGIBLE")));
        prototype.put("checklistsStarted", checklists.count());
        prototype.put("applicationsTracked", applications.count());
        prototype.put("schemesSaved", savedSchemes.count());
        prototype.put("schemesInCatalogue", schemes.count());

        Map<String, Long> cat = schemes.findAll().stream()
                .filter(s -> s.getCategory() != null)
                .collect(Collectors.groupingBy(Scheme::getCategory, Collectors.counting()));

        Map<String, Object> sim = new LinkedHashMap<>();
        sim.put("label", "SIMULATED DATA (illustrative only)");
        sim.put("monthly", List.of(
                Map.of("month", "Jan", "discovered", 140, "checklists", 45, "tracked", 28),
                Map.of("month", "Feb", "discovered", 210, "checklists", 72, "tracked", 45),
                Map.of("month", "Mar", "discovered", 350, "checklists", 120, "tracked", 80),
                Map.of("month", "Apr", "discovered", 490, "checklists", 195, "tracked", 130),
                Map.of("month", "May", "discovered", 620, "checklists", 260, "tracked", 185),
                Map.of("month", "Jun", "discovered", 780, "checklists", 340, "tracked", 240)
        ));

        Map<String, Object> res = new LinkedHashMap<>();
        res.put("prototype", prototype);
        res.put("catalogueByCategory", cat);
        res.put("simulated", sim);
        return ResponseEntity.ok(res);
    }

    @PostMapping("/api/guide/chat")
    public ResponseEntity<Map<String, Object>> guideChat(
            @AuthenticationPrincipal User user,
            @RequestBody Map<String, String> body) {
        String message = body.get("message");
        if (message == null || message.trim().isEmpty()) {
            throw ApiException.bad("Message cannot be empty");
        }
        String schemeId = body.get("schemeId");
        String previousSchemeId = body.get("previousSchemeId");
        String language = body.getOrDefault("language", "en");
        return ResponseEntity.ok(guideService.chat(user, message, schemeId, language, previousSchemeId));
    }

    @GetMapping("/api/guide/history")
    public ResponseEntity<List<ChatMessage>> guideHistory(@AuthenticationPrincipal User user) {
        if (user == null) {
            return ResponseEntity.ok(List.of());
        }
        return ResponseEntity.ok(guideService.history(user.getId()));
    }

    @DeleteMapping("/api/guide/history")
    public ResponseEntity<Map<String, String>> clearHistory(@AuthenticationPrincipal User user) {
        if (user != null) {
            guideService.clearHistory(user.getId());
        }
        return ResponseEntity.ok(Map.of("status", "cleared"));
    }
}
