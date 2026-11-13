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
import java.util.stream.Collectors;

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
        if (!n.hasNonNull("subcategory") && s.getSubcategory() != null) {
            n.put("subcategory", s.getSubcategory());
        }
        if (!n.hasNonNull("sdg") && s.getSdg() != null) {
            n.put("sdg", s.getSdg());
        }
        if (!n.hasNonNull("beneficiaryType") && s.getBeneficiaryType() != null) {
            n.put("beneficiaryType", s.getBeneficiaryType());
        }
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

    public List<JsonNode> search(String q, String category, String subcategory, String state, String level, String sdg,
            String beneficiaryType, Integer age, Long income, String incomeRange, String provider, String status) {
        String query = q == null ? "" : q.toLowerCase().trim();
        return schemes.findAll().stream()
                .filter(s -> matchesCategory(s, category))
                .filter(s -> matchesSubcategory(s, subcategory))
                .filter(s -> matchesState(s, state))
                .filter(s -> matchesLevel(s, level))
                .filter(s -> matchesSdg(s, sdg))
                .filter(s -> matchesBeneficiary(s, beneficiaryType))
                .filter(s -> matchesAge(s, age))
                .filter(s -> matchesIncome(s, income, incomeRange))
                .filter(s -> matchesProvider(s, provider))
                .filter(s -> matchesStatus(s, status))
                .filter(s -> matchesQuery(s, query))
                .sorted(Comparator.comparing(Scheme::getName))
                .map(this::view).toList();
    }

    private boolean matchesCategory(Scheme s, String category) {
        if (category == null || category.isBlank() || "all".equalsIgnoreCase(category)) {
            return true;
        }
        String c = category.trim().toLowerCase();
        String sc = (s.getCategory() == null ? "" : s.getCategory()).toLowerCase();
        return sc.contains(c) || c.contains(sc);
    }

    private boolean matchesSubcategory(Scheme s, String subcategory) {
        if (subcategory == null || subcategory.isBlank() || "all".equalsIgnoreCase(subcategory)) {
            return true;
        }
        String sub = subcategory.trim().toLowerCase();
        String sSub = (s.getSubcategory() == null ? "" : s.getSubcategory()).toLowerCase();
        return sSub.contains(sub) || sub.contains(sSub);
    }

    private boolean matchesLevel(Scheme s, String level) {
        if (level == null || level.isBlank() || "all".equalsIgnoreCase(level)) {
            return true;
        }
        String l = level.trim().toLowerCase();
        String sl = (s.getLevel() == null ? "" : s.getLevel()).toLowerCase();
        return sl.contains(l) || l.contains(sl);
    }

    private boolean matchesSdg(Scheme s, String sdg) {
        if (sdg == null || sdg.isBlank() || "all".equalsIgnoreCase(sdg)) {
            return true;
        }
        String reqSdg = sdg.trim().toLowerCase();
        String sSdg = (s.getSdg() == null ? "" : s.getSdg()).toLowerCase();
        return sSdg.contains(reqSdg);
    }

    private boolean matchesBeneficiary(Scheme s, String beneficiaryType) {
        if (beneficiaryType == null || beneficiaryType.isBlank() || "all".equalsIgnoreCase(beneficiaryType)) {
            return true;
        }
        String reqB = beneficiaryType.trim().toLowerCase();
        String sB = (s.getBeneficiaryType() == null ? "" : s.getBeneficiaryType()).toLowerCase();
        return sB.contains(reqB) || reqB.contains(sB);
    }

    private boolean matchesStatus(Scheme s, String status) {
        if (status == null || status.isBlank() || "all".equalsIgnoreCase(status)) {
            return true;
        }
        String reqSt = status.trim().toLowerCase();
        String sSt = (s.getStatus() == null ? "active" : s.getStatus()).toLowerCase();
        return sSt.equals(reqSt);
    }

    private boolean matchesState(Scheme s, String state) {
        if (state == null || state.isBlank() || "all".equalsIgnoreCase(state)) {
            return true;
        }
        String st = state.trim().toLowerCase();
        if ("central".equalsIgnoreCase(st) || "national".equalsIgnoreCase(st) || "central (all india)".equalsIgnoreCase(st)) {
            return "National".equalsIgnoreCase(s.getLevel()) || "Central".equalsIgnoreCase(s.getLevel()) || s.getState() == null || "All India".equalsIgnoreCase(s.getState());
        }
        // Specific state selection: show schemes of this state plus national schemes
        boolean matchesSpecific = s.getState() != null && s.getState().equalsIgnoreCase(state);
        boolean isNational = s.getState() == null || "All India".equalsIgnoreCase(s.getState()) || "National".equalsIgnoreCase(s.getLevel()) || "Central".equalsIgnoreCase(s.getLevel());
        return matchesSpecific || isNational;
    }

    private boolean matchesAge(Scheme s, Integer age) {
        if (age == null) {
            return true;
        }
        boolean minOk = s.getMinAge() == null || age >= s.getMinAge();
        boolean maxOk = s.getMaxAge() == null || age <= s.getMaxAge();
        return minOk && maxOk;
    }

    private boolean matchesIncome(Scheme s, Long income, String incomeRange) {
        if (income != null) {
            if (s.getIncomeMax() != null && income > s.getIncomeMax()) {
                return false;
            }
        }
        if (incomeRange != null && !incomeRange.isBlank() && !"all".equalsIgnoreCase(incomeRange)) {
            long lower = incomeLower(incomeRange);
            if (s.getIncomeMax() != null && lower > s.getIncomeMax()) {
                return false;
            }
        }
        return true;
    }

    private boolean matchesProvider(Scheme s, String provider) {
        if (provider == null || provider.isBlank() || "all".equalsIgnoreCase(provider)) {
            return true;
        }
        return ("private".equalsIgnoreCase(provider) == "Private".equals(s.getLevel()));
    }

    private boolean matchesQuery(Scheme s, String query) {
        if (query == null || query.isBlank()) {
            return true;
        }
        String hay = (s.getName() + " " + (s.getCategory() == null ? "" : s.getCategory()) + " "
                + (s.getSubcategory() == null ? "" : s.getSubcategory()) + " "
                + (s.getSdg() == null ? "" : s.getSdg()) + " "
                + (s.getBeneficiaryType() == null ? "" : s.getBeneficiaryType()) + " "
                + (s.getDepartment() == null ? "" : s.getDepartment()) + " "
                + (s.getState() == null ? "" : s.getState()) + " "
                + (s.getData() == null ? "" : s.getData())).toLowerCase();
        return hay.contains(query);
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

    public Map<String, Object> getCategoryStats() {
        List<Scheme> all = schemes.findAll();
        long total = all.size();

        Map<String, Long> byCat = all.stream()
                .filter(s -> s.getCategory() != null)
                .collect(Collectors.groupingBy(Scheme::getCategory, Collectors.counting()));

        Map<String, Long> byLevel = all.stream()
                .filter(s -> s.getLevel() != null)
                .collect(Collectors.groupingBy(Scheme::getLevel, Collectors.counting()));

        Map<String, Long> bySdg = all.stream()
                .filter(s -> s.getSdg() != null)
                .collect(Collectors.groupingBy(Scheme::getSdg, Collectors.counting()));

        Map<String, Long> byBeneficiary = all.stream()
                .filter(s -> s.getBeneficiaryType() != null)
                .collect(Collectors.groupingBy(Scheme::getBeneficiaryType, Collectors.counting()));

        Map<String, Long> byState = all.stream()
                .filter(s -> s.getState() != null)
                .collect(Collectors.groupingBy(Scheme::getState, Collectors.counting()));

        Map<String, Object> res = new LinkedHashMap<>();
        res.put("totalSchemes", total);
        res.put("categories", byCat);
        res.put("levels", byLevel);
        res.put("sdgs", bySdg);
        res.put("beneficiaries", byBeneficiary);
        res.put("states", byState);
        return res;
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
