package com.entitle.engine;

import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.stereotype.Component;

import java.util.*;

@Component
public class EligibilityEngine {

    public static final String LIKELY = "LIKELY_ELIGIBLE";
    public static final String VERIFY = "NEEDS_VERIFICATION";
    public static final String POTENTIAL = "POTENTIALLY_ELIGIBLE";
    public static final String NOT_ELIGIBLE = "NOT_ELIGIBLE";

    private static final Map<String, long[]> INCOME = Map.of(
            "BELOW_1L", new long[] { 0, 100_000 },
            "1L_2_5L", new long[] { 100_001, 250_000 },
            "2_5L_4_5L", new long[] { 250_001, 450_000 },
            "4_5L_8L", new long[] { 450_001, 800_000 },
            "8L_18L", new long[] { 800_001, 1_800_000 },
            "ABOVE_18L", new long[] { 1_800_001, Long.MAX_VALUE });

    private static final Map<String, String> QUESTIONS = Map.ofEntries(
            Map.entry("age", "your age"), Map.entry("state", "your state"),
            Map.entry("area", "whether you live in a rural or urban area"),
            Map.entry("occupation", "your occupation"), Map.entry("education", "your education level"),
            Map.entry("incomeRange", "your annual household income range"),
            Map.entry("householdCategory", "your social category"),
            Map.entry("gender", "your gender"), Map.entry("student", "whether you are currently studying"),
            Map.entry("farmer", "whether you are a farmer"),
            Map.entry("ownsLand", "whether your family owns cultivable land"),
            Map.entry("disability", "whether you have a disability"),
            Map.entry("disabilityLevel", "your certified disability level"),
            Map.entry("rationCard", "whether your household holds a BPL / priority ration card"),
            Map.entry("incomeTaxPayer", "whether anyone in your family pays income tax"),
            Map.entry("hasBankAccount", "whether you have a savings bank account"),
            Map.entry("ownsPuccaHouse", "whether your family owns a pucca (permanent) house"),
            Map.entry("hasLpg", "whether your household has an LPG connection"),
            Map.entry("pregnant", "whether you are pregnant or a new mother"),
            Map.entry("hasGirlChildUnder10", "whether you have a daughter below 10 years"),
            Map.entry("healthcareNeed", "whether you need healthcare support"));

    public Map<String, Object> evaluate(JsonNode scheme, Map<String, Object> profile) {
        List<Map<String, String>> satisfied = new ArrayList<>(), failed = new ArrayList<>(),
                missing = new ArrayList<>(), verification = new ArrayList<>();
        boolean mandatoryFail = false, softFail = false;
        int total = 0, matched = 0;

        for (JsonNode r : scheme.path("rules")) {
            total++;
            String label = r.path("label").asText();
            boolean mandatory = r.path("mandatory").asBoolean(true);
            String outcome = check(r, profile);
            switch (outcome) {
                case "SATISFIED" -> {
                    matched++;
                    satisfied.add(item(label, "Matches what you told us."));
                }
                case "VERIFY" -> {
                    matched++;
                    String doc = r.path("doc").asText("");
                    String detail = "official".equals(r.path("op").asText())
                            ? "Can only be confirmed by the issuing authority."
                            : "Your answers suggest this is met, but it must be proven"
                                    + (doc.isEmpty() ? "." : " with: " + doc + ".");
                    verification.add(item(label, detail));
                }
                case "UNCLEAR" -> verification.add(
                        item(label, "Your income range spans this limit. Your exact income certificate will decide."));
                case "MISSING" -> missing
                        .add(item(label, "Tell us " + QUESTIONS.getOrDefault(r.path("field").asText(), "more") + "."));
                default -> {
                    failed.add(item(label, mandatory ? "Does not match your current profile."
                            : "Not met (this is an indicator, not a strict rule)."));
                    if (mandatory)
                        mandatoryFail = true;
                    else
                        softFail = true;
                }
            }
        }

        String status;
        if (mandatoryFail)
            status = NOT_ELIGIBLE;
        else if (!missing.isEmpty() || softFail)
            status = POTENTIAL;
        else if (!verification.isEmpty())
            status = VERIFY;
        else
            status = LIKELY;

        Map<String, Object> res = new LinkedHashMap<>();
        res.put("schemeId", scheme.path("id").asText());
        res.put("schemeName", scheme.path("name").asText());
        res.put("category", scheme.path("category").asText());
        res.put("status", status);
        res.put("matchScore", total == 0 ? 0 : Math.round(matched * 100f / total));
        res.put("satisfied", satisfied);
        res.put("notSatisfied", failed);
        res.put("missing", missing);
        res.put("verification", verification);
        res.put("documents", documentsFor(scheme, profile).stream().map(d -> d.get("name")).toList());
        res.put("nextAction", nextAction(status, failed, missing, verification, scheme));
        return res;
    }

    public List<Map<String, String>> documentsFor(JsonNode scheme, Map<String, Object> profile) {
        List<Map<String, String>> docs = new ArrayList<>();
        for (JsonNode d : scheme.path("documents")) {
            JsonNode cond = d.path("condition");
            boolean conditional = !cond.isMissingNode();
            if (conditional) {
                Object v = profile.get(cond.path("field").asText());
                if (v != null && !inValues(v, cond.path("values")))
                    continue;
            }
            Map<String, String> m = new LinkedHashMap<>();
            m.put("name", d.path("name").asText());
            m.put("why", d.path("why").asText());
            m.put("conditional", String.valueOf(conditional && profile.get(cond.path("field").asText()) == null));
            docs.add(m);
        }
        return docs;
    }

    private String check(JsonNode r, Map<String, Object> p) {
        String op = r.path("op").asText();
        if ("official".equals(op))
            return "VERIFY";
        Object v = p.get(r.path("field").asText());
        if (v == null || "".equals(v) || "PREFER_NOT".equals(v))
            return "MISSING";
        boolean ok;
        switch (op) {
            case "between" -> {
                int n = ((Number) v).intValue();
                ok = n >= r.path("min").asInt() && n <= r.path("max").asInt();
            }
            case "gte" -> ok = ((Number) v).doubleValue() >= r.path("value").asDouble();
            case "lte" -> ok = ((Number) v).doubleValue() <= r.path("value").asDouble();
            case "eq" -> ok = r.path("value").isBoolean() ? Objects.equals(v, r.path("value").asBoolean())
                    : String.valueOf(v).equals(r.path("value").asText());
            case "in" -> ok = inValues(v, r.path("values"));
            case "income_lte" -> {
                long[] range = INCOME.get(String.valueOf(v));
                if (range == null)
                    return "MISSING";
                long limit = r.path("value").asLong();
                if (range[0] > limit)
                    return "FAILED";
                if (range[1] > limit)
                    return "UNCLEAR";
                ok = true;
            }
            default -> ok = false;
        }
        if (!ok)
            return "FAILED";
        return r.path("verify").asBoolean(false) ? "VERIFY" : "SATISFIED";
    }

    private boolean inValues(Object v, JsonNode values) {
        for (JsonNode x : values)
            if (x.asText().equals(String.valueOf(v)))
                return true;
        return false;
    }

    private Map<String, String> item(String label, String detail) {
        Map<String, String> m = new LinkedHashMap<>();
        m.put("label", label);
        m.put("detail", detail);
        return m;
    }

    private String nextAction(String status, List<Map<String, String>> failed, List<Map<String, String>> missing,
            List<Map<String, String>> verification, JsonNode scheme) {
        return switch (status) {
            case NOT_ELIGIBLE -> "This scheme does not match your current profile (" + failed.get(0).get("label")
                    + "). If your circumstances change, re-run the assessment.";
            case POTENTIAL -> missing.isEmpty()
                    ? "Some indicators are not met. Check the official guidelines before investing time in an application."
                    : "Answer " + missing.size() + " more question(s) in your profile to complete screening: "
                            + missing.get(0).get("detail");
            case VERIFY -> "Prepare your documents and confirm \"" + verification.get(0).get("label")
                    + "\" with the official source before applying.";
            default -> "Prepare the document checklist and apply through the official channel: "
                    + scheme.path("applyChannel").asText("official portal") + ".";
        };
    }
}
