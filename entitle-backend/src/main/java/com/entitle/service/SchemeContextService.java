package com.entitle.service;

import com.entitle.model.Scheme;
import com.entitle.repo.SchemeRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@Slf4j
@Service
@RequiredArgsConstructor
public class SchemeContextService {
    private final SchemeRepository schemes;

    public enum QueryType {
        SCHEME_SPECIFIC,
        SCHEME_FOLLOWUP,
        SCHEME_DISCOVERY,
        GOVERNMENT_SERVICE,
        GENERAL_KNOWLEDGE,
        GREETING,
        TRANSLATION_REQUEST
    }

    // Static curated aliases for key national and state schemes
    private static final Map<String, String> CURATED_ALIASES = new HashMap<>();

    static {
        // ADIP Scheme
        CURATED_ALIASES.put("adip", "adra-assistive-devices");
        CURATED_ALIASES.put("adip scheme", "adra-assistive-devices");
        CURATED_ALIASES.put("assistive aids", "adra-assistive-devices");
        CURATED_ALIASES.put("assistive devices", "adra-assistive-devices");
        CURATED_ALIASES.put("tricycle scheme", "adra-assistive-devices");
        CURATED_ALIASES.put("motorized tricycle", "adra-assistive-devices");
        CURATED_ALIASES.put("alimco", "adra-assistive-devices");

        // Disability & UDID
        CURATED_ALIASES.put("udid", "udid");
        CURATED_ALIASES.put("udid card", "udid");
        CURATED_ALIASES.put("swavlamban", "udid");
        CURATED_ALIASES.put("disability certificate", "udid");
        CURATED_ALIASES.put("disability pension", "igndps");
        CURATED_ALIASES.put("igndps", "igndps");
        CURATED_ALIASES.put("saksham scholarship", "aicte-saksham");

        // PM-KISAN
        CURATED_ALIASES.put("pm kisan", "pm-kisan");
        CURATED_ALIASES.put("pmkisan", "pm-kisan");
        CURATED_ALIASES.put("pm-kisan", "pm-kisan");
        CURATED_ALIASES.put("kisan samman", "pm-kisan");
        CURATED_ALIASES.put("kisan samman nidhi", "pm-kisan");
        CURATED_ALIASES.put("farmer 6000", "pm-kisan");
        CURATED_ALIASES.put("ಕಿಸಾನ್", "pm-kisan");
        CURATED_ALIASES.put("किसान सम्मान", "pm-kisan");

        // Ayushman Bharat / PM-JAY
        CURATED_ALIASES.put("ayushman bharat", "pm-jay");
        CURATED_ALIASES.put("ayushman", "pm-jay");
        CURATED_ALIASES.put("pm jay", "pm-jay");
        CURATED_ALIASES.put("pmjay", "pm-jay");
        CURATED_ALIASES.put("pm-jay", "pm-jay");
        CURATED_ALIASES.put("golden card", "pm-jay");
        CURATED_ALIASES.put("5 lakh health", "pm-jay");
        CURATED_ALIASES.put("vay vandana", "ayushman-vay-vandana");
        CURATED_ALIASES.put("senior citizen ayushman", "ayushman-vay-vandana");
        CURATED_ALIASES.put("ಆಯುಷ್ಮಾನ್", "pm-jay");
        CURATED_ALIASES.put("आयुष्मान", "pm-jay");

        // Karnataka Flagship Schemes
        CURATED_ALIASES.put("gruha lakshmi", "karnataka-gruha-lakshmi");
        CURATED_ALIASES.put("gruhalakshmi", "karnataka-gruha-lakshmi");
        CURATED_ALIASES.put("2000 women", "karnataka-gruha-lakshmi");
        CURATED_ALIASES.put("ಗೃಹ ಲಕ್ಷ್ಮಿ", "karnataka-gruha-lakshmi");
        CURATED_ALIASES.put("ಗೃಹಲಕ್ಷ್ಮಿ", "karnataka-gruha-lakshmi");
        CURATED_ALIASES.put("गृह लक्ष्मी", "karnataka-gruha-lakshmi");

        CURATED_ALIASES.put("gruha jyothi", "karnataka-gruha-jyothi");
        CURATED_ALIASES.put("gruhajyothi", "karnataka-gruha-jyothi");
        CURATED_ALIASES.put("free electricity", "karnataka-gruha-jyothi");
        CURATED_ALIASES.put("ಗೃಹ ಜ್ಯೋತಿ", "karnataka-gruha-jyothi");

        CURATED_ALIASES.put("yuva nidhi", "karnataka-yuva-nidhi");
        CURATED_ALIASES.put("yuvanidhi", "karnataka-yuva-nidhi");
        CURATED_ALIASES.put("unemployment allowance", "karnataka-yuva-nidhi");
        CURATED_ALIASES.put("ಯುವ ನಿಧಿ", "karnataka-yuva-nidhi");
        CURATED_ALIASES.put("ಯುವನಿಧಿ", "karnataka-yuva-nidhi");
        CURATED_ALIASES.put("युवा निधि", "karnataka-yuva-nidhi");

        CURATED_ALIASES.put("shakti", "karnataka-shakti");
        CURATED_ALIASES.put("shakti scheme", "karnataka-shakti");
        CURATED_ALIASES.put("free bus", "karnataka-shakti");
        CURATED_ALIASES.put("women bus pass", "karnataka-shakti");
        CURATED_ALIASES.put("ಶಕ್ತಿ ಯೋಜನೆ", "karnataka-shakti");

        CURATED_ALIASES.put("anna bhagya", "karnataka-anna-bhagya");
        CURATED_ALIASES.put("annabhagya", "karnataka-anna-bhagya");
        CURATED_ALIASES.put("10kg rice", "karnataka-anna-bhagya");
        CURATED_ALIASES.put("ಅನ್ನ ಭಾಗ್ಯ", "karnataka-anna-bhagya");

        CURATED_ALIASES.put("yashasvini", "karnataka-yashasvini");
        CURATED_ALIASES.put("vidyasiri", "karnataka-vidyasiri");
        CURATED_ALIASES.put("arivu", "karnataka-arivu");
        CURATED_ALIASES.put("ganga kalyana", "karnataka-ganga-kalyana");

        // Central Welfare Schemes
        CURATED_ALIASES.put("pm mudra", "pm-mudra");
        CURATED_ALIASES.put("mudra loan", "pm-mudra");
        CURATED_ALIASES.put("mudra", "pm-mudra");
        CURATED_ALIASES.put("pmmy", "pm-mudra");

        CURATED_ALIASES.put("svanidhi", "pm-svanidhi");
        CURATED_ALIASES.put("pm svanidhi", "pm-svanidhi");
        CURATED_ALIASES.put("street vendor loan", "pm-svanidhi");

        CURATED_ALIASES.put("vishwakarma", "pm-vishwakarma");
        CURATED_ALIASES.put("pm vishwakarma", "pm-vishwakarma");
        CURATED_ALIASES.put("artisan loan", "pm-vishwakarma");

        CURATED_ALIASES.put("pm awas", "pmay-urban");
        CURATED_ALIASES.put("pmay", "pmay-urban");
        CURATED_ALIASES.put("pmay gramin", "pmay-gramin");
        CURATED_ALIASES.put("housing scheme", "pmay-urban");

        CURATED_ALIASES.put("sukanya", "sukanya-samriddhi");
        CURATED_ALIASES.put("sukanya samriddhi", "sukanya-samriddhi");
        CURATED_ALIASES.put("ssy", "sukanya-samriddhi");

        CURATED_ALIASES.put("atal pension", "apy");
        CURATED_ALIASES.put("apy", "apy");

        CURATED_ALIASES.put("jan dhan", "pmjdy");
        CURATED_ALIASES.put("pmjdy", "pmjdy");

        CURATED_ALIASES.put("suraksha bima", "pmsby");
        CURATED_ALIASES.put("pmsby", "pmsby");

        CURATED_ALIASES.put("jeevan jyoti", "pmjjby");
        CURATED_ALIASES.put("pmjjby", "pmjjby");

        CURATED_ALIASES.put("mgnrega", "mgnrega");
        CURATED_ALIASES.put("nrega", "mgnrega");
        CURATED_ALIASES.put("100 days work", "mgnrega");

        CURATED_ALIASES.put("poshan", "pm-poshan");
        CURATED_ALIASES.put("mid day meal", "pm-poshan");
        CURATED_ALIASES.put("midday meal", "pm-poshan");

        CURATED_ALIASES.put("garib kalyan", "pmgkay");
        CURATED_ALIASES.put("pmgkay", "pmgkay");
        CURATED_ALIASES.put("free ration", "pmgkay");

        CURATED_ALIASES.put("ujjwala", "pmuy");
        CURATED_ALIASES.put("pmuy", "pmuy");
        CURATED_ALIASES.put("free gas cylinder", "pmuy");

        CURATED_ALIASES.put("fasal bima", "pmfby");
        CURATED_ALIASES.put("pmfby", "pmfby");
        CURATED_ALIASES.put("crop insurance", "pmfby");

        CURATED_ALIASES.put("kcc", "kcc");
        CURATED_ALIASES.put("kisan credit card", "kcc");

        CURATED_ALIASES.put("eshram", "eshram");
        CURATED_ALIASES.put("e-shram", "eshram");
        CURATED_ALIASES.put("shram card", "eshram");

        CURATED_ALIASES.put("pmegp", "pmegp");
        CURATED_ALIASES.put("stand up india", "stand-up-india");
        CURATED_ALIASES.put("startup india", "startup-india-seed-fund");

        // State Schemes
        CURATED_ALIASES.put("chiranjeevi", "rj-chiranjeevi");
        CURATED_ALIASES.put("rythu bandhu", "ts-rythu-bandhu");
        CURATED_ALIASES.put("rythu bharosa", "ts-rythu-bandhu");
        CURATED_ALIASES.put("cheyutha", "ap-ysr-cheyutha");
        CURATED_ALIASES.put("ysr cheyutha", "ap-ysr-cheyutha");
        CURATED_ALIASES.put("kalia", "od-kalia-scheme");
        CURATED_ALIASES.put("arunodoi", "as-arunodoi");
        CURATED_ALIASES.put("orunodoi", "as-arunodoi");
        CURATED_ALIASES.put("ladli behna", "mp-ladli-behna");
        CURATED_ALIASES.put("ladki bahin", "mh-ladki-bahin");
        CURATED_ALIASES.put("lakshmir bhandar", "wb-lakshmir-bhandar");
        CURATED_ALIASES.put("kanyashree", "wb-kanyashree");
        CURATED_ALIASES.put("swasthya sathi", "wb-swasthya-sathi");
        CURATED_ALIASES.put("aarogyasri", "ts-aarogyasri");
        CURATED_ALIASES.put("cmchis", "tn-cmchis");
    }

    public QueryType classifyQuery(String query, String activeSchemeId) {
        if (query == null || query.isBlank()) {
            return QueryType.GREETING;
        }
        String q = query.toLowerCase().trim();

        // 1. Translation / Language Request for previous answer
        if (q.contains("explain it in simple hindi") || q.contains("explain in hindi") || q.contains("in hindi")
                || q.contains("hindi me") || q.contains("hindi mein") || q.contains("translate in hindi")
                || q.contains("explain in kannada") || q.contains("in kannada") || q.contains("kannada dalli")) {
            return QueryType.TRANSLATION_REQUEST;
        }

        // 2. Greetings
        if (q.matches("^(hi|hello|hey|namaste|vanakkam|namaskara|greetings|good (morning|afternoon|evening)|who are you|what can you do)[.!?]*$")) {
            return QueryType.GREETING;
        }

        // 3. Explicit Scheme Mention or locked context
        Optional<Scheme> detected = resolveScheme(null, q, null);
        if (detected.isPresent()) {
            return QueryType.SCHEME_SPECIFIC;
        }

        // 4. Follow-up query on previous scheme
        if (activeSchemeId != null && !activeSchemeId.isBlank() && isFollowUpQuery(q)) {
            return QueryType.SCHEME_FOLLOWUP;
        }

        // 5. Scheme Discovery Queries (e.g. "schemes for disabled people", "farmer schemes", "scholarships")
        if (isDiscoveryQuery(q)) {
            return QueryType.SCHEME_DISCOVERY;
        }

        // 6. Civic / Government Services (non-scheme specific procedures)
        if (isCivicServiceQuery(q)) {
            return QueryType.GOVERNMENT_SERVICE;
        }

        // 7. General Knowledge (photosynthesis, AI vs ML, science, everyday questions)
        return QueryType.GENERAL_KNOWLEDGE;
    }

    public boolean isFollowUpQuery(String q) {
        return q.contains("who can apply") || q.contains("eligib") || q.contains("who is eligible")
                || q.contains("what is the age") || q.contains("income limit") || q.contains("criteria")
                || q.contains("what document") || q.contains("documents needed") || q.contains("papers needed")
                || q.contains("documents required") || q.contains("what documents are required")
                || q.contains("how do i apply") || q.contains("how to apply") || q.contains("how can i apply")
                || q.contains("application step") || q.contains("where to apply") || q.contains("application process")
                || q.contains("what are the benefits") || q.contains("how much money") || q.contains("benefit")
                || q.contains("amount") || q.contains("subsidy") || q.contains("payout") || q.contains("who cannot apply")
                || q.contains("ineligib") || q.contains("disqualif") || q.contains("is this available in")
                || q.contains("karnataka") || q.contains("official portal") || q.contains("website")
                || q.contains("helpline") || q.contains("contact") || q.contains("tell me more")
                || q.contains("explain more") || q.contains("details") || q.contains("explain it in simple hindi");
    }

    public boolean isDiscoveryQuery(String q) {
        return q.contains("schemes for") || q.contains("scheme for") || q.contains("welfare scheme")
                || q.contains("government scheme") || q.contains("central scheme") || q.contains("state scheme")
                || q.contains("karnataka scheme") || q.contains("disabled people") || q.contains("disabled persons")
                || q.contains("for disabled") || q.contains("disability scheme") || q.contains("divyangjan")
                || q.contains("health scheme") || q.contains("farmer scheme") || q.contains("student scholarship")
                || q.contains("women scheme") || q.contains("pension scheme") || q.contains("business loan scheme")
                || q.contains("startup scheme") || q.contains("housing scheme");
    }

    private boolean isCivicServiceQuery(String q) {
        return (q.contains("aadhaar") && !q.contains("pm-"))
                || (q.contains("pan card") || q.contains("apply pan"))
                || (q.contains("passport") && !q.contains("photo"))
                || (q.contains("voter id") || q.contains("epic card"))
                || (q.contains("driving license") || q.contains("learner license") || q.contains("parivahan"))
                || (q.contains("digilocker") || q.contains("digi locker"))
                || (q.contains("epfo") || q.contains("uan") || q.contains("provident fund"))
                || (q.contains("ration card") && !q.contains("anna bhagya") && !q.contains("pmgkay"));
    }

    public Optional<Scheme> resolveScheme(String schemeId, String query, String previousSchemeId) {
        // Direct ID lookup if explicitly passed
        if (schemeId != null && !schemeId.isBlank()) {
            Optional<Scheme> direct = schemes.findById(schemeId.trim());
            if (direct.isPresent()) {
                return direct;
            }
        }

        if (query == null || query.isBlank()) {
            if (previousSchemeId != null && !previousSchemeId.isBlank()) {
                return schemes.findById(previousSchemeId.trim());
            }
            return Optional.empty();
        }

        String q = query.toLowerCase().trim();

        // 1. Check curated aliases using word boundaries or contains
        for (Map.Entry<String, String> entry : CURATED_ALIASES.entrySet()) {
            String alias = entry.getKey();
            // Word boundary match for short aliases (e.g. \badip\b, \bkcc\b, \bapy\b)
            if (alias.length() <= 5) {
                Pattern p = Pattern.compile("\\b" + Pattern.quote(alias) + "\\b", Pattern.CASE_INSENSITIVE | Pattern.UNICODE_CHARACTER_CLASS);
                if (p.matcher(q).find()) {
                    Optional<Scheme> s = schemes.findById(entry.getValue());
                    if (s.isPresent()) return s;
                }
            } else if (q.contains(alias)) {
                Optional<Scheme> s = schemes.findById(entry.getValue());
                if (s.isPresent()) return s;
            }
        }

        // 2. Scan all database schemes dynamically for acronyms and name tokens
        List<Scheme> all = schemes.findAll();
        for (Scheme s : all) {
            String id = s.getId().toLowerCase();
            String name = s.getName().toLowerCase();

            // Direct ID match
            if (q.contains(id)) {
                return Optional.of(s);
            }

            // Extract uppercase acronym from scheme name (e.g. "ADIP Scheme...", "(PM-KISAN)", "(UDID)")
            String acronym = extractAcronym(s.getName());
            if (acronym != null && !acronym.isBlank() && acronym.length() >= 3) {
                Pattern p = Pattern.compile("\\b" + Pattern.quote(acronym.toLowerCase()) + "\\b", Pattern.CASE_INSENSITIVE);
                if (p.matcher(q).find()) {
                    return Optional.of(s);
                }
            }

            // Check primary title keyword if specific (e.g. "gatidhara", "kanyashree", "mumkin")
            String firstWord = name.split("[\\s(]+")[0].trim();
            if (firstWord.length() >= 5 && q.contains(firstWord)) {
                return Optional.of(s);
            }
        }

        // 3. If this is a follow-up query without a new scheme mention, retain previousSchemeId
        if (isFollowUpQuery(q) && previousSchemeId != null && !previousSchemeId.isBlank()) {
            return schemes.findById(previousSchemeId.trim());
        }

        return Optional.empty();
    }

    private String extractAcronym(String schemeName) {
        if (schemeName == null) return null;

        // Check if name starts with an acronym (e.g. "ADIP Scheme...", "AICTE Pragati...", "KALIA Scheme...")
        String[] words = schemeName.split("\\s+");
        if (words.length > 0) {
            String first = words[0].replaceAll("[^a-zA-Z0-9-]", "");
            if (first.length() >= 3 && first.length() <= 8 && first.equals(first.toUpperCase())) {
                return first;
            }
        }

        // Check parentheses (e.g. "(PM-KISAN)", "(PM-JAY)", "(UDID)", "(APY)")
        Matcher m = Pattern.compile("\\(([A-Z0-9-]{2,12})\\)").matcher(schemeName);
        if (m.find()) {
            return m.group(1);
        }

        return null;
    }

    public List<Scheme> findRelatedSchemes(String query, int limit) {
        if (query == null || query.isBlank()) {
            return schemes.findAll().stream().limit(limit).toList();
        }
        String q = query.toLowerCase();

        // Specific targeted queries: Disabled / Disability
        if (q.contains("disabled") || q.contains("disability") || q.contains("divyang") || q.contains("handicap") || q.contains("specially abled")) {
            return schemes.findAll().stream()
                    .filter(s -> s.getId().equals("adra-assistive-devices")
                            || s.getId().equals("udid")
                            || s.getId().equals("aicte-saksham")
                            || s.getId().equals("igndps"))
                    .toList();
        }

        // General topical search
        return schemes.findAll().stream()
                .filter(s -> {
                    String hay = (s.getName() + " " + (s.getCategory() == null ? "" : s.getCategory()) + " "
                            + (s.getSubcategory() == null ? "" : s.getSubcategory()) + " "
                            + (s.getSdg() == null ? "" : s.getSdg()) + " "
                            + (s.getBeneficiaryType() == null ? "" : s.getBeneficiaryType()) + " "
                            + (s.getState() == null ? "" : s.getState()) + " "
                            + (s.getDepartment() == null ? "" : s.getDepartment())).toLowerCase();

                    if (q.contains("karnataka") && ("karnataka".equalsIgnoreCase(s.getState()) || s.getId().startsWith("karnataka-"))) {
                        return true;
                    }
                    if (q.contains("health") && hay.contains("health")) return true;
                    if (q.contains("food") && (hay.contains("food") || hay.contains("ration") || hay.contains("nutrition"))) return true;
                    if (q.contains("scholarship") && (hay.contains("scholarship") || hay.contains("student"))) return true;
                    if (q.contains("farmer") && (hay.contains("farmer") || hay.contains("agri") || hay.contains("kisan"))) return true;
                    if (q.contains("pension") && (hay.contains("pension") || hay.contains("senior"))) return true;
                    if (q.contains("women") && (hay.contains("women") || hay.contains("girl") || hay.contains("mother"))) return true;
                    if (q.contains("business") && (hay.contains("business") || hay.contains("loan") || hay.contains("msme") || hay.contains("mudra"))) return true;
                    if (q.contains("housing") && (hay.contains("housing") || hay.contains("house") || hay.contains("pmay"))) return true;

                    for (String word : q.split("\\s+")) {
                        if (word.length() > 3 && hay.contains(word)) {
                            return true;
                        }
                    }
                    return false;
                })
                .sorted(Comparator.comparing(Scheme::getName))
                .limit(limit)
                .toList();
    }
}
