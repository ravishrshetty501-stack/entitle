package com.entitle.service;

import com.entitle.engine.EligibilityEngine;
import com.entitle.model.*;
import com.entitle.repo.*;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.node.ObjectNode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.*;

@Service
@RequiredArgsConstructor
public class SchemeService {
    private final SchemeRepository schemes;
    private final UserProfileRepository profiles;
    private final EligibilityAssessmentRepository assessments;
    private final EligibilityEngine engine;
    private final Json json;

    public Scheme get(String id) {
        return schemes.findById(id).orElseThrow(() -> ApiException.notFound("Scheme"));
    }

    public JsonNode view(Scheme s) {
        ObjectNode n = (ObjectNode) json.read(s.getData());
        n.remove("rules");
        n.set("criteria", criteriaLabels(json.read(s.getData())));
        return n;
    }

    private JsonNode criteriaLabels(JsonNode data) {
        var arr = json.mapper().createArrayNode();
        for (JsonNode r : data.path("rules")) {
            ObjectNode c = arr.addObject();
            c.put("label", r.path("label").asText());
            c.put("mandatory", r.path("mandatory").asBoolean(true));
            c.put("officialOnly", "official".equals(r.path("op").asText()));
        }
        return arr;
    }

    public List<JsonNode> search(String q, String category, String state, Integer age, String incomeRange,
            String provider) {
        String query = q == null ? "" : q.toLowerCase().trim();
        return schemes.findAll().stream()
                .filter(s -> category == null || category.isBlank() || s.getCategory().equalsIgnoreCase(category))
                .filter(s -> state == null || state.isBlank() || s.getState() == null
                        || s.getState().equalsIgnoreCase(state))
                .filter(s -> age == null || ((s.getMinAge() == null || age >= s.getMinAge())
                        && (s.getMaxAge() == null || age <= s.getMaxAge())))
                .filter(s -> incomeRange == null || incomeRange.isBlank() || s.getIncomeMax() == null
                        || incomeLower(incomeRange) <= s.getIncomeMax())
                .filter(s -> provider == null || provider.isBlank()
                        || ("private".equalsIgnoreCase(provider) == "Private".equals(s.getLevel())))
                .filter(s -> query.isEmpty() || s.getData().toLowerCase().contains(query))
                .sorted(Comparator.comparing(Scheme::getName))
                .map(this::view).toList();
    }

    private long incomeLower(String range) {
        return switch (range) {
            case "BELOW_1L" -> 0;
            case "1L_2_5L" -> 100_001;
            case "2_5L_4_5L" -> 250_001;
            case "4_5L_8L" -> 450_001;
            case "8L_18L" -> 800_001;
            default -> 1_800_001;
        };
    }

    public List<Map<String, Object>> evaluateAll(Map<String, Object> profile) {
        List<Map<String, Object>> out = new ArrayList<>();
        for (Scheme s : schemes.findAll()) {
            Map<String, Object> r = engine.evaluate(json.read(s.getData()), profile);
            r.put("department", s.getDepartment());
            r.put("level", s.getLevel());
            r.put("officialUrl", s.getOfficialUrl());
            r.put("estimatedBenefit", json.read(s.getData()).path("estimatedBenefit").asText());
            out.add(r);
        }
        List<String> order = List.of(EligibilityEngine.LIKELY, EligibilityEngine.VERIFY, EligibilityEngine.POTENTIAL,
                EligibilityEngine.NOT_ELIGIBLE);
        out.sort(Comparator.comparingInt((Map<String, Object> r) -> order.indexOf(r.get("status")))
                .thenComparing(r -> -((Number) r.get("matchScore")).intValue()));
        return out;
    }

    public UserProfile profileOf(String userId) {
        return profiles.findById(userId).orElseGet(() -> {
            UserProfile p = new UserProfile();
            p.setUserId(userId);
            return p;
        });
    }

    @Transactional
    public List<Map<String, Object>> assessAndStore(String userId) {
        List<Map<String, Object>> results = evaluateAll(profileOf(userId).eligibilityFields());
        assessments.deleteByUserId(userId);
        assessments.flush();
        for (Map<String, Object> r : results) {
            EligibilityAssessment a = new EligibilityAssessment();
            a.setUserId(userId);
            a.setSchemeId((String) r.get("schemeId"));
            a.setAssessmentStatus((String) r.get("status"));
            a.setMatchScore(((Number) r.get("matchScore")).intValue());
            a.setMatchedCriteria(json.write(r.get("satisfied")));
            a.setMissingCriteria(json.write(r.get("missing")));
            a.setResultJson(json.write(r));
            a.setAssessedAt(Instant.now());
            assessments.save(a);
        }
        return results;
    }

    public List<Map<String, Object>> storedResults(String userId) {
        List<Map<String, Object>> rows = new ArrayList<>();
        List<String> order = List.of(EligibilityEngine.LIKELY, EligibilityEngine.VERIFY, EligibilityEngine.POTENTIAL,
                EligibilityEngine.NOT_ELIGIBLE);
        for (EligibilityAssessment a : assessments.findByUserId(userId)) {
            @SuppressWarnings("unchecked")
            Map<String, Object> r = json.mapper().convertValue(json.read(a.getResultJson()), Map.class);
            r.put("assessedAt", a.getAssessedAt().toString());
            rows.add(r);
        }
        rows.sort(Comparator.comparingInt((Map<String, Object> r) -> order.indexOf(r.get("status")))
                .thenComparing(r -> -((Number) r.get("matchScore")).intValue()));
        return rows;
    }

    public List<Map<String, String>> documentsFor(String schemeId, String userId) {
        return engine.documentsFor(json.read(get(schemeId).getData()), profileOf(userId).eligibilityFields());
    }
}
