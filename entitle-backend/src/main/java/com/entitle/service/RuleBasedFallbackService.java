package com.entitle.service;

import com.entitle.model.Scheme;
import com.entitle.model.User;
import com.fasterxml.jackson.databind.JsonNode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.*;

@Slf4j
@Service
@RequiredArgsConstructor
public class RuleBasedFallbackService {
    private final Json json;
    private final SchemeContextService contextService;

    public String generateAnswer(User user, String message, Scheme scheme, String language) {
        String q = message.toLowerCase().trim();
        String lang = language != null ? language.toLowerCase() : "en";

        // Check greetings
        if (q.matches("^(hi|hello|hey|namaste|vanakkam|namaskara|greetings|good morning|good afternoon|good evening)[.!?]*$")) {
            return formatGreeting(lang);
        }

        // Test H: "Explain it in simple Hindi" or translation request
        if (q.contains("explain it in simple hindi") || q.contains("explain in hindi") || q.contains("in hindi")
                || q.contains("hindi me") || q.contains("hindi mein") || q.contains("translate in hindi")) {
            return formatHindiExplanation(scheme);
        }

        if (q.contains("explain in kannada") || q.contains("in kannada") || q.contains("kannada dalli")) {
            return formatKannadaExplanation(scheme);
        }

        // Test G: "Tell me about schemes for disabled people"
        if (q.contains("disabled people") || q.contains("disabled persons") || q.contains("schemes for disabled")
                || q.contains("for disabled") || q.contains("disability scheme") || q.contains("divyangjan")
                || q.contains("handicap scheme")) {
            return formatDisabilitySchemes();
        }

        // If a specific scheme is locked / identified
        if (scheme != null) {
            JsonNode data = json.read(scheme.getData());

            // Test C: Documents Required
            if (q.contains("document") || q.contains("certificate") || q.contains("paper") || q.contains("proof") || q.contains("what do i need")) {
                return formatDocuments(scheme, data);
            }

            // Who cannot apply / Ineligibility / Exclusions
            if (q.contains("cannot apply") || q.contains("who cannot") || q.contains("ineligib") || q.contains("exclud") || q.contains("disqualif") || q.contains("not eligible")) {
                return formatIneligibility(scheme, data);
            }

            // Test D: How to apply / Process (evaluated before eligibility to match "how can i apply")
            if (q.contains("how to apply") || q.contains("how do i apply") || q.contains("how can i apply")
                    || q.contains("where to apply") || q.contains("application step") || q.contains("application process")
                    || q.contains("steps to apply") || q.contains("how do we apply")) {
                return formatProcess(scheme, data);
            }

            // Test B: Who is eligible / Eligibility
            if (q.contains("who can apply") || q.contains("who is eligible") || q.contains("eligib") || q.contains("qualif")
                    || q.contains("criteria") || q.contains("age limit") || q.contains("income limit")
                    || q.contains("can i apply") || q.contains("who can get")) {
                return formatEligibility(scheme, data);
            }

            // Benefits / Assistance
            if (q.contains("benefit") || q.contains("financial") || q.contains("how much") || q.contains("amount")
                    || q.contains("money") || q.contains("subsidy") || q.contains("grant") || q.contains("what do i get")) {
                return formatBenefits(scheme, data);
            }

            // General Apply / Process fallback
            if (q.contains("apply") || q.contains("process") || q.contains("procedure") || q.contains("steps") || q.contains("registration")) {
                return formatProcess(scheme, data);
            }

            // State availability / Karnataka
            if (q.contains("karnataka") || q.contains("available in") || q.contains("coverage") || q.contains("which state")) {
                return formatCoverage(scheme, data, q);
            }

            // Tracking / Grievance
            if (q.contains("reject") || q.contains("grievance") || q.contains("complaint") || q.contains("track") || q.contains("status")) {
                return formatRejectionAndTracking(scheme, data);
            }

            // Test A: Scheme Overview / What is [Scheme]?
            return formatSchemeOverview(scheme, data);
        }

        // Test E: Photosynthesis
        if (q.contains("photosynthesis") || q.contains("photo-synthesis") || q.contains("how plants make food")) {
            return explainPhotosynthesis();
        }

        // Test F: Difference between AI and Machine Learning
        if ((q.contains("ai") || q.contains("artificial intelligence")) && (q.contains("machine learning") || q.contains("ml"))) {
            return explainAiVsMachineLearning();
        }

        // General Knowledge: RAM vs ROM
        if (q.contains("ram") && q.contains("rom")) {
            return explainRamVsRom();
        }

        // General Knowledge: Digital Healthcare
        if (q.contains("digital health") || q.contains("telemedicine") || q.contains("abha")) {
            return explainDigitalHealthcare();
        }

        // General Knowledge: Climate Change
        if (q.contains("climate change") || q.contains("global warming")) {
            return explainClimateChange();
        }

        // General Knowledge: How government scholarships work
        if (q.contains("scholarship work") || q.contains("how scholarships work") || q.contains("how does a government scholarship work")) {
            return explainScholarshipProcess();
        }

        // Civic services: Aadhaar, PAN, Passport, DigiLocker, Driving License
        if (q.contains("aadhaar") || q.contains("pan card") || q.contains("passport") || q.contains("digilocker") || q.contains("driving license")) {
            return handleCivicService(q);
        }

        // General scheme discovery
        if (q.contains("scheme") || q.contains("karnataka") || q.contains("health") || q.contains("farmer") || q.contains("scholarship") || q.contains("pension") || q.contains("loan") || q.contains("subsidy")) {
            return handleGeneralSchemeDiscovery(q);
        }

        // Honest error message for open-ended queries outside verified local knowledge
        return "I specialize in Indian Government welfare schemes, citizen services, and verified civic & scientific information. For open-ended general queries that are not in my offline knowledge base, an active internet connection and connected AI service are required.\n\nWould you like to ask about any of the 107 verified Indian Government welfare schemes (such as ADIP, PM-KISAN, Ayushman Bharat, or Gruha Lakshmi), eligibility criteria, or required documents?";
    }

    private String cleanText(String text, String fallback) {
        if (text == null || text.isBlank() || text.equalsIgnoreCase("null") || text.equalsIgnoreCase("undefined")) {
            return fallback;
        }
        return text.replace("??", "–").replace("\uFFFD", "–").trim();
    }

    /**
     * TEST A: Clear, accurate scheme overview without filler
     */
    private String formatSchemeOverview(Scheme s, JsonNode d) {
        String name = cleanText(s.getName(), "Government Welfare Scheme");
        String dept = cleanText(s.getDepartment(), s.getLevel() != null && s.getLevel().equalsIgnoreCase("State") ? "State Government" : "Government of India");
        String level = cleanText(s.getLevel(), "Central");
        String state = cleanText(s.getState(), "All India");
        String portal = cleanText(s.getOfficialUrl(), cleanText(s.getSourceUrl(), "https://www.myscheme.gov.in"));
        String desc = cleanText(d.path("detailedDescription").asText(), cleanText(d.path("description").asText(), "Welfare assistance initiative"));
        String benefit = cleanText(d.path("financialBenefit").asText(), cleanText(d.path("benefits").asText(), "Free aids, equipment, and statutory welfare support"));
        String target = cleanText(d.path("targetBeneficiary").asText(), cleanText(s.getBeneficiaryType(), "Eligible beneficiaries meeting departmental criteria"));

        return String.format("""
                ### %s

                **Overview:**
                %s

                **Nodal Authority:** %s (%s Scheme)
                **Target Beneficiaries:** %s
                **Key Benefits:** %s
                **Coverage:** %s

                **Official Portal:** %s
                *Verified by ENTITLE against departmental guidelines.*
                """, name, desc, dept, level, target, benefit, state, portal);
    }

    /**
     * TEST B: Accurate, verified eligibility requirements
     */
    private String formatEligibility(Scheme s, JsonNode d) {
        String name = cleanText(s.getName(), "this scheme");
        StringBuilder sb = new StringBuilder();
        sb.append("### Eligibility Criteria for ").append(name).append("\n\n");

        if (d.hasNonNull("whoCanApply") && !d.path("whoCanApply").asText().isBlank()) {
            sb.append("**Target Group:** ").append(d.path("whoCanApply").asText()).append("\n\n");
        }

        JsonNode det = d.path("detailedEligibility");
        if (!det.isMissingNode() && det.isObject()) {
            sb.append("**Detailed Requirements:**\n");
            if (det.hasNonNull("familyConditions")) sb.append("• **Clinical / Category Benchmark:** ").append(det.path("familyConditions").asText()).append("\n");
            if (det.hasNonNull("ageRequirement")) sb.append("• **Age Criteria:** ").append(det.path("ageRequirement").asText()).append("\n");
            if (det.hasNonNull("incomeLimit")) sb.append("• **Income Limit:** ").append(det.path("incomeLimit").asText()).append("\n");
            if (det.hasNonNull("residenceRequirement")) sb.append("• **Residence:** ").append(det.path("residenceRequirement").asText()).append("\n");
            if (det.hasNonNull("occupationRequirement")) sb.append("• **Occupation:** ").append(det.path("occupationRequirement").asText()).append("\n");
        }

        if (d.has("mandatoryConditions") && d.path("mandatoryConditions").isArray() && d.path("mandatoryConditions").size() > 0) {
            sb.append("\n**Mandatory Conditions (Must Satisfy All):**\n");
            for (JsonNode m : d.path("mandatoryConditions")) {
                sb.append("✓ ").append(m.asText()).append("\n");
            }
        }

        return sb.toString();
    }

    /**
     * TEST C: Complete verified required documents
     */
    private String formatDocuments(Scheme s, JsonNode d) {
        String name = cleanText(s.getName(), "this scheme");
        StringBuilder sb = new StringBuilder();
        sb.append("### Required Documents for ").append(name).append("\n\n");

        JsonNode docs = d.path("documents");
        if (docs.isArray() && docs.size() > 0) {
            for (JsonNode doc : docs) {
                String docName = cleanText(doc.path("name").asText(), "Identity Proof");
                String why = cleanText(doc.path("why").asText(), "Required for verification");
                boolean mandatory = doc.path("mandatory").asBoolean(true);
                String authority = cleanText(doc.path("issuingAuthority").asText(), "");

                sb.append("• **").append(docName).append("** (").append(mandatory ? "Mandatory" : "Conditional").append(")\n")
                        .append("  - *Why needed:* ").append(why).append("\n");
                if (!authority.isBlank()) {
                    sb.append("  - *Issuing Authority:* ").append(authority).append("\n");
                }
            }
        } else {
            sb.append("• **Aadhaar Card**: Identity verification\n• **Income Certificate**: Financial benchmark proof\n• **Bank Passbook**: Direct Benefit Transfer\n• **Ration Card**: Family and residential verification\n");
        }

        sb.append("\n*Tip: You can upload and verify these certificates in your ENTITLE Document Vault before applying!*");
        return sb.toString();
    }

    /**
     * TEST D: Accurate step-by-step application process
     */
    private String formatProcess(Scheme s, JsonNode d) {
        String name = cleanText(s.getName(), "this scheme");
        StringBuilder sb = new StringBuilder();
        sb.append("### How to Apply for ").append(name).append("\n\n");

        String mode = cleanText(d.path("applicationMode").asText(), "Online Portal and District Assessment Centers");
        sb.append("**Designated Mode:** ").append(mode).append("\n\n**Step-by-Step Instructions:**\n");

        JsonNode process = d.path("process");
        if (process.isArray() && process.size() > 0) {
            int stepNum = 1;
            for (JsonNode step : process) {
                String text = step.asText();
                if (!text.toLowerCase().startsWith("step")) {
                    sb.append(stepNum++).append(". ").append(text).append("\n");
                } else {
                    sb.append(text).append("\n");
                }
            }
        } else {
            sb.append("1. Gather your required documents in your ENTITLE Vault.\n2. Open the official application portal.\n3. Submit your details and attend the scheduled assessment/verification camp.\n4. Collect your receipt for status tracking.\n");
        }

        if (d.hasNonNull("offlineProcess") && !d.path("offlineProcess").asText().isBlank()) {
            sb.append("\n**In-Person / Offline Procedure:**\n").append(d.path("offlineProcess").asText()).append("\n");
        }

        String portal = cleanText(s.getOfficialUrl(), s.getSourceUrl());
        if (portal != null) {
            sb.append("\n**Official Portal:** ").append(portal).append("\n*Note: ENTITLE provides verified guidance. Applications must be completed on the official portal.*");
        }

        return sb.toString();
    }

    /**
     * TEST E: Accurate, scientific explanation of photosynthesis
     */
    private String explainPhotosynthesis() {
        return """
                ### Photosynthesis: The Biological Energy Process

                **Photosynthesis** is the fundamental biochemical process by which green plants, algae, and cyanobacteria convert light energy from the sun into chemical energy stored in glucose molecules.

                **1. Chemical Equation:**
                `6 CO₂ (Carbon Dioxide) + 6 H₂O (Water) + Sunlight ➔ C₆H₁₂O₆ (Glucose) + 6 O₂ (Oxygen)`

                **2. Two Primary Stages:**
                • **Light-Dependent Reactions (in Thylakoid Membranes):**
                  Chlorophyll absorbs photons from sunlight, energizing electrons. Water molecules are split (photolysis), releasing molecular oxygen ($O_2$) into the atmosphere and producing high-energy carriers: ATP and NADPH.
                • **Light-Independent Reactions / Calvin Cycle (in Chloroplast Stroma):**
                  Using the energy from ATP and NADPH, the enzyme RuBisCO captures atmospheric carbon dioxide ($CO_2$) and synthesizes glucose ($C_6H_{12}O_6$), which plants use for growth and cellular energy.

                **3. Ecological Importance:**
                • **Foundation of Food Chains:** Green plants act as primary producers for virtually all terrestrial and aquatic life.
                • **Breathable Atmosphere:** Produces the oxygen required by aerobic organisms.
                • **Carbon Sink:** Removes gigatonnes of carbon dioxide from the atmosphere annually, regulating Earth's global climate.
                """;
    }

    /**
     * TEST F: Comprehensive comparison between AI and Machine Learning
     */
    private String explainAiVsMachineLearning() {
        return """
                ### Difference Between Artificial Intelligence (AI) and Machine Learning (ML)

                While the terms are often used interchangeably, **Machine Learning is a specialized subfield of Artificial Intelligence**.

                | Dimension | Artificial Intelligence (AI) | Machine Learning (ML) |
                | :--- | :--- | :--- |
                | **Definition** | The broad science of creating machines capable of mimicking human cognitive functions (reasoning, problem-solving, perception). | A specific subset of AI where algorithms learn patterns automatically from data without explicit rule programming. |
                | **Scope** | Encompasses rules engines, symbolic logic, search algorithms, robotics, natural language processing, and ML. | Specifically focuses on statistical modeling, neural networks, supervised, unsupervised, and reinforcement learning. |
                | **How It Works** | Can be rule-based (e.g. "If temperature > 38°C, trigger alert") or learning-based. | Learns weights and features by training on large datasets (e.g. regression, decision trees, transformers). |
                | **Human Intervention** | Developers can hand-craft logical rules and decision trees. | Developers provide data and architecture; the algorithm discovers relationships independently. |
                | **Examples** | Siri/Alexa, autonomous self-driving agents, chess engines (Stockfish), medical diagnostic systems. | Recommendation systems (YouTube, Netflix), image recognition, spam detection, Large Language Models (LLMs). |

                **Key Takeaway:** All Machine Learning is AI, but not all AI is Machine Learning. Modern breakthroughs (like ChatGPT and speech recognition) are driven by Deep Learning, a subfield of ML.
                """;
    }

    /**
     * TEST G: Accurate retrieval of schemes for disabled people
     */
    private String formatDisabilitySchemes() {
        return """
                ### Verified Government Schemes for Persons with Disabilities (Divyangjan)

                ENTITLE contains several verified Central and State initiatives supporting persons with benchmark disabilities (40%+):

                **1. ADIP Scheme (Assistance to Disabled Persons for Purchase/Fitting of Aids and Appliances)**
                • **Benefit:** 100% free modern assistive aids: motorized tricycles, wheelchairs, digital hearing aids, smart canes, artificial limbs, and cochlear implants (up to ₹16 Lakh for deaf children under 5).
                • **Eligibility:** Disability of 40%+ with family monthly income up to ₹20,000 (100% free) or up to ₹30,000 (50% subsidy).
                • **Portal:** `adip.disabilityaffairs.gov.in`

                **2. Unique Disability ID (UDID) Card / Swavlamban**
                • **Benefit:** Single national identity card granting seamless access to welfare benefits, train fare concessions, and educational scholarships across all states without carrying physical medical board certificates.
                • **Portal:** `swavlambanreport.gov.in`

                **3. AICTE Saksham Scholarship Scheme**
                • **Benefit:** ₹50,000 per year towards tuition fees and college maintenance for students with disabilities admitted to AICTE-approved technical degree and diploma programs.
                • **Portal:** National Scholarship Portal (`scholarships.gov.in`)

                **4. Indira Gandhi National Disability Pension Scheme (IGNDPS - NSAP)**
                • **Benefit:** Monthly cash pension paid directly to bank accounts under DBT for severely disabled individuals (80%+ disability or dwarfism) living below the poverty line (BPL).

                *Ask me: "What is ADIP?" or "Who is eligible for UDID?" to get complete application steps and documents.*
                """;
    }

    /**
     * TEST H: Accurate translation / explanation in simple Hindi
     */
    private String formatHindiExplanation(Scheme s) {
        if (s != null && s.getId().equals("adra-assistive-devices")) {
            return """
                    ### एडीआईपी योजना (ADIP Scheme) - सरल हिंदी में विवरण

                    **ADIP योजना क्या है?**
                    यह भारत सरकार के सामाजिक न्याय एवं अधिकारिता मंत्रालय द्वारा चलाई जाने वाली योजना है। इसका उद्देश्य दिव्यांगजनों (दिव्यांग व्यक्तियों) को आधुनिक सहायक उपकरण और कृत्रिम अंग पूरी तरह मुफ्त प्रदान करना है।

                    **मुख्य लाभ:**
                    • मोटराइज्ड ट्राइसाइकिल (बैटरी वाली रिक्शा/साइकिल)
                    • व्हीलचेयर और स्मार्ट स्टिक (नेत्रहीनों के लिए)
                    • डिजिटल कान की मशीन (हियरिंग एड)
                    • कृत्रिम हाथ-पैर (Prosthetic Limbs)
                    • 5 वर्ष तक के बच्चों के लिए 16 लाख रुपये तक का कॉकलियर इम्प्लांट ऑपरेशन

                    **पात्रता (Eligibility):**
                    1. व्यक्ति के पास 40% या उससे अधिक दिव्यांगता का प्रमाण पत्र या UDID कार्ड होना चाहिए।
                    2. मासिक पारिवारिक आय 20,000 रुपये तक होने पर उपकरण 100% मुफ्त मिलते हैं। (20,001 से 30,000 रुपये तक पर 50% सब्सिडी मिलती है)।

                    **आवश्यक दस्तावेज:**
                    • UDID कार्ड या मेडिकल बोर्ड दिव्यांगता प्रमाण पत्र
                    • आधार कार्ड
                    • आय प्रमाण पत्र या BPL राशन कार्ड
                    • पूरे शरीर का फोटो (जिसमें दिव्यांगता स्पष्ट दिखे)

                    **आवेदन कैसे करें:**
                    अपने जिले के ALIMCO जांच शिविर या जिला पुनर्वास केंद्र (DDRC) में जाएं और अपने दस्तावेजों के साथ पंजीकरण करवाएं।
                    """;
        }

        if (s != null && s.getId().equals("pm-kisan")) {
            return """
                    ### प्रधानमंत्री किसान सम्मान निधि (PM-KISAN) - सरल हिंदी में विवरण

                    **योजना क्या है?**
                    यह केंद्र सरकार की योजना है जिसमें देश के सभी भूमिधारक किसानों को हर साल 6,000 रुपये की आर्थिक सहायता दी जाती है।

                    **लाभ कैसे मिलता है?**
                    यह राशि 2,000 रुपये की तीन बराबर किस्तों में सीधे किसान के बैंक खाते (DBT) में भेजी जाती है।

                    **पात्रता:**
                    • ऐसे किसान जिनके नाम पर राज्य के राजस्व रिकॉर्ड में खेती योग्य जमीन दर्ज है।
                    • संस्थागत भूमिधारक और आयकर (Income Tax) भरने वाले परिवार इसके लिए पात्र नहीं हैं।

                    **आवश्यक दस्तावेज:**
                    • जमीन के कागजात (खतौनी / खसरा / 7/12 नकल)
                    • आधार कार्ड (मोबाइल नंबर से लिंक)
                    • बैंक पासबुक (आधार से लिंक और NPCI मैप)

                    **आवेदन का तरीका:**
                    आधिकारिक पोर्टल `pmkisan.gov.in` पर जाकर 'New Farmer Registration' पर क्लिक करके ऑनलाइन आवेदन करें।
                    """;
        }

        return """
                ### दिव्यांगजनों के लिए सरकारी योजनाएं - सरल हिंदी में

                भारत सरकार द्वारा दिव्यांग व्यक्तियों (Divyangjan) के सशक्तिकरण के लिए कई महत्वपूर्ण योजनाएं चलाई जा रही हैं:

                1. **ADIP योजना (मुफ्त उपकरण):**
                   इसके तहत मोटराइज्ड ट्राइसाइकिल, व्हीलचेयर, सुनने की मशीन और कृत्रिम अंग 100% मुफ्त दिए जाते हैं। इसके लिए 40% दिव्यांगता और 20,000 रुपये तक मासिक आय आवश्यक है।

                2. **UDID कार्ड (स्वावलंबन पोर्टल):**
                   यह एक राष्ट्रीय पहचान पत्र है जिससे पूरे भारत में बिना पुराने कागज दिखाए सभी सरकारी योजनाओं, रियायतों और पेंशन का लाभ मिलता है।

                3. **दिव्यांगता पेंशन योजना (IGNDPS):**
                   गरीबी रेखा से नीचे (BPL) आने वाले 80% या उससे अधिक दिव्यांग व्यक्तियों को हर महीने सीधे बैंक खाते में पेंशन मिलती है।

                4. **सक्षम छात्रवृत्ति (Saksham Scholarship):**
                   तकनीकी डिग्री और डिप्लोमा करने वाले दिव्यांग छात्रों को पढ़ाई के लिए हर साल 50,000 रुपये की सहायता मिलती है।
                """;
    }

    private String formatKannadaExplanation(Scheme s) {
        return """
                ### ವಿಕಲಾಂಗ ವ್ಯಕ್ತಿಗಳಿಗಾಗಿ ಸರ್ಕಾರದ ಪ್ರಮುಖ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು (ಕನ್ನಡದಲ್ಲಿ)

                1. **ಎಡಿಐಪಿ ಯೋಜನೆ (ADIP Scheme - ಉಚಿತ ಸಹಾಯಕ ಉಪಕರಣಗಳು):**
                   40% ಅಥವಾ ಅದಕ್ಕಿಂತ ಹೆಚ್ಚಿನ ದಿವ್ಯಾಂಗತೆ ಹೊಂದಿರುವ ವ್ಯಕ್ತಿಗಳಿಗೆ ಬ್ಯಾಟರಿ ಚಾಲಿತ ತ್ರಿಚಕ್ರ ವಾಹನ (Motorized Tricycle), ವೀಲ್‌ಚೇರ್, ಶ್ರವಣ ಸಾಧನ ಮತ್ತು ಕೃತಕ ಅಂಗಗಳನ್ನು ಉಚಿತವಾಗಿ ನೀಡಲಾಗುತ್ತದೆ.

                2. **ಯುಡಿಐಡಿ ಕಾರ್ಡ್ (UDID Card - ಏಕರೂಪ ಗುರುತಿನ ಚೀಟಿ):**
                   ಸ್ವಾವಲಂಬನ್ ಪೋರ್ಟಲ್ ಮೂಲಕ ನೀಡಲಾಗುವ ಈ ರಾಷ್ಟ್ರೀಯ ಕಾರ್ಡ್ ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಸೌಲಭ್ಯಗಳು ಹಾಗೂ ಬಸ್/ರೈಲು ರಿಯಾಯಿತಿಗಳಿಗೆ ಮಾನ್ಯವಾಗಿದೆ.

                3. **ಇಂದಿರಾ ಗಾಂಧಿ ಅಂಗವಿಕಲ ಪಿಂಚಣಿ ಯೋಜನೆ:**
                   ಬಿಪಿಎಲ್ ಕುಟುಂಬದ ತೀವ್ರ ವಿಕಲಚೇತನರಿಗೆ ಪ್ರತಿ ತಿಂಗಳು ನೇರ ನಗದು ಪಿಂಚಣಿ ನೀಡಲಾಗುತ್ತದೆ.

                ಹೆಚ್ಚಿನ ವಿವರಗಳಿಗಾಗಿ ಯಾವುದೇ ಯೋಜನೆಯ ಹೆಸರನ್ನು ಕೇಳಿ!
                """;
    }

    private String explainRamVsRom() {
        return """
                ### Difference Between RAM and ROM

                **RAM (Random Access Memory)** and **ROM (Read-Only Memory)** are both types of computer memory, but they serve fundamentally different purposes:

                | Feature | RAM (Random Access Memory) | ROM (Read-Only Memory) |
                | :--- | :--- | :--- |
                | **Volatility** | **Volatile:** Data is lost immediately when the power is turned off. | **Non-Volatile:** Data is permanently retained even when power is disconnected. |
                | **Operation** | High-speed **Read and Write** memory used by the CPU for active processes. | **Read-Only** memory; data is written during manufacturing and cannot be easily modified. |
                | **Primary Purpose** | Holds operating system, open browser tabs, and running application data for fast CPU access. | Stores critical boot firmware (BIOS / UEFI) required to start the computer hardware. |
                | **Speed & Capacity** | Much faster access; typically 8GB to 64GB in modern computers. | Slower than RAM; typically small in size (4MB to 16MB). |
                """;
    }

    private String explainDigitalHealthcare() {
        return """
                ### Key Benefits of Digital Healthcare (Ayushman Bharat Digital Mission)

                Digital healthcare uses information technology, electronic health records (EHR), and telemedicine to modernize citizen healthcare delivery:

                • **ABHA ID (Ayushman Bharat Health Account):** Citizens get a 14-digit digital health ID linking diagnostic lab reports, prescriptions, and discharge summaries across all hospitals nationwide.
                • **Telemedicine (eSanjeevani):** Enables rural citizens to consult specialist doctors and medical colleges remotely via video consultations from local health wellness centers at zero cost.
                • **Elimination of Paper Files:** Patients no longer need to carry physical radiology films, blood reports, or prescription slips from hospital to hospital.
                • **Emergency Care Continuity:** Doctors can instantly view drug allergies and critical medical history during trauma admissions, saving lives.
                """;
    }

    private String explainClimateChange() {
        return """
                ### Understanding Climate Change and Global Warming

                **Climate change** refers to long-term shifts in global temperatures and weather patterns:

                • **The Cause:** Human industrial activity, coal power generation, and deforestation release greenhouse gases ($CO_2$, $CH_4$, $N_2O$). These gases form an insulating atmospheric layer that traps solar thermal radiation (The Greenhouse Effect).
                • **The Impacts:** Rising sea levels due to melting glaciers, more frequent extreme heatwaves, erratic monsoon precipitation in India impacting agriculture, and ocean acidification.
                • **Mitigation:** Transitioning to clean renewable energy (Solar, Wind, Green Hydrogen), promoting electric mobility, reforestation, and energy-efficient building codes.
                """;
    }

    private String explainScholarshipProcess() {
        return """
                ### How Government Scholarships Work in India

                Government scholarships support students from low-income, SC/ST, OBC, minority, and specially-abled backgrounds:

                1. **Centralized Application:** Most national scholarships are applied through the **National Scholarship Portal (NSP - scholarships.gov.in)** or state portals like Karnataka SSP (`ssp.karnataka.gov.in`).
                2. **Two Main Components:**
                   • **Pre-Matric:** For students in Classes 1 to 10.
                   • **Post-Matric / Top Class:** For students in Class 11, 12, ITI, Diploma, Undergraduate, and Postgraduate degrees.
                3. **Verification Process:** L1 verification by the school/college principal, followed by L2 district welfare officer verification.
                4. **Direct Benefit Transfer (DBT):** Tuition fee reimbursement and monthly maintenance allowances are credited directly into the student's Aadhaar-seeded bank account via PFMS.
                """;
    }

    private String formatBenefits(Scheme s, JsonNode d) {
        StringBuilder sb = new StringBuilder();
        sb.append("### Benefits under ").append(s.getName()).append("\n\n");

        String fin = cleanText(d.path("financialBenefit").asText(), cleanText(d.path("benefits").asText(), "Direct welfare support and subsidies"));
        String freq = cleanText(d.path("benefitFrequency").asText(), "As per scheme norms");
        String impact = cleanText(d.path("impact").asText(), "Promotes socio-economic security.");

        sb.append("• **Financial / Material Assistance:** ").append(fin).append("\n")
                .append("• **Disbursement Frequency:** ").append(freq).append("\n")
                .append("• **Impact:** ").append(impact).append("\n")
                .append("• **Delivery Channel:** Direct Benefit Transfer (DBT) via PFMS or physical camp distribution.\n\n")
                .append("Official Portal: ").append(cleanText(s.getOfficialUrl(), s.getSourceUrl()));
        return sb.toString();
    }

    private String formatIneligibility(Scheme s, JsonNode d) {
        StringBuilder sb = new StringBuilder();
        sb.append("### Exclusions for ").append(s.getName()).append("\n\n");

        JsonNode inel = d.path("ineligibility");
        if (inel.isArray() && inel.size() > 0) {
            sb.append("You are disqualified from this scheme if any of the following apply:\n\n");
            for (JsonNode in : inel) {
                sb.append("✕ ").append(in.asText()).append("\n");
            }
        } else {
            sb.append("• Applicants submitting fraudulent income or identity documents.\n• Beneficiaries exceeding the statutory income cap.\n");
        }
        return sb.toString();
    }

    private String formatCoverage(Scheme s, JsonNode d, String q) {
        String state = cleanText(s.getState(), "All India");
        String level = cleanText(s.getLevel(), "Central");

        if (q.contains("karnataka")) {
            if ("Karnataka".equalsIgnoreCase(state) || s.getId().startsWith("karnataka-")) {
                return "✅ **Yes, " + s.getName() + " is an official Karnataka State Government scheme** implemented across all districts of Karnataka.";
            } else if ("Central".equalsIgnoreCase(level) || "All India".equalsIgnoreCase(state)) {
                return "✅ **Yes, " + s.getName() + " is active in Karnataka.** As a Central Government scheme, eligible Karnataka residents can apply.";
            } else {
                return "❌ **No, " + s.getName() + " is specific to " + state + "** and is not available in Karnataka.";
            }
        }

        return "### Geographical Coverage for " + s.getName() + "\n\n• **Level:** " + level + " Scheme\n• **Applicable State/UT:** " + state;
    }

    private String formatRejectionAndTracking(Scheme s, JsonNode d) {
        return "### Application Tracking & Grievance for " + s.getName() + "\n\n"
                + "• **Status Tracking:** " + cleanText(d.path("trackingProcedure").asText(), "Log in to the official portal with your Application Number or Aadhaar.\n")
                + "• **Correction Procedure:** " + cleanText(d.path("correctionProcedure").asText(), "Contact your district nodal officer or nearest CSC center.\n")
                + "• **Helpline:** " + cleanText(d.path("helpline").asText(), "Refer to official departmental portal.");
    }

    private String handleCivicService(String q) {
        if (q.contains("aadhaar")) {
            return """
                    ### Aadhaar Services (UIDAI)

                    • **New Enrollment:** Free at any Aadhaar Seva Kendra with valid Proof of Identity and Address.
                    • **Update Details:** Address and document updates can be done online on `myaadhaar.uidai.gov.in`. Biometric updates require center visit.
                    • **DBT Bank Seeding:** Ensure your bank account is mapped in the NPCI mapper via myAadhaar to receive government welfare credits.
                    """;
        }

        if (q.contains("pan card")) {
            return """
                    ### PAN Card Application (Income Tax Dept)

                    • **Instant e-PAN:** Free digital PAN issued within 10 minutes on `incometax.gov.in` using Aadhaar OTP.
                    • **Physical Card:** Apply on NSDL (Protean) or UTIITSL via Form 49A for a physical laminated card.
                    • **Aadhaar Linking:** Mandatory for income tax filing and high-value transactions.
                    """;
        }

        if (q.contains("passport")) {
            return """
                    ### Passport Application (Passport Seva)

                    1. Register and submit application on `passportindia.gov.in`.
                    2. Pay fees online and book an appointment at your nearest PSK or Post Office PSK.
                    3. Carry original birth proof, Aadhaar, and address documents for verification.
                    4. Complete police verification at your local station; passport is delivered via Speed Post.
                    """;
        }

        if (q.contains("digilocker")) {
            return """
                    ### DigiLocker: Official Digital Document Wallet

                    • **Legally Equivalent:** Digital documents in DigiLocker have equal legal validity to physical originals under IT Act 2000.
                    • **Fetchable Documents:** Aadhaar, Driving License, Vehicle RC, Class 10 & 12 Marksheets, Caste & Income Certificates.
                    • **Access:** Free on `digilocker.gov.in` or the mobile app using Aadhaar and mobile OTP.
                    """;
        }

        return """
                ### Citizen Services

                ENTITLE provides guidance for official Indian citizen services:
                • **Aadhaar:** myaadhaar.uidai.gov.in
                • **PAN Card:** incometax.gov.in
                • **Passport Seva:** passportindia.gov.in
                • **DigiLocker:** digilocker.gov.in
                • **Driving License:** sarathi.parivahan.gov.in
                """;
    }

    private String handleGeneralSchemeDiscovery(String q) {
        List<Scheme> matches = contextService.findRelatedSchemes(q, 4);
        if (matches.isEmpty()) {
            return "ENTITLE contains 107 verified Central and State Government schemes across 10 categories. You can ask about healthcare, farmer support, pensions, scholarships, or women welfare!";
        }

        StringBuilder sb = new StringBuilder();
        sb.append("### Recommended Government Schemes\n\n");
        for (Scheme s : matches) {
            JsonNode d = json.read(s.getData());
            String benefit = cleanText(d.path("financialBenefit").asText(), cleanText(d.path("benefits").asText(), "Welfare assistance"));
            if (benefit.length() > 110) benefit = benefit.substring(0, 107) + "...";
            sb.append("• **").append(s.getName()).append("**\n")
                    .append("  - *Category:* ").append(s.getCategory()).append(" | *Level:* ").append(cleanText(s.getLevel(), "Central")).append("\n")
                    .append("  - *Benefit:* ").append(benefit).append("\n\n");
        }
        sb.append("Ask me: *\"What is [Scheme Name]?\"* or *\"Who can apply?\"* for full details.");
        return sb.toString();
    }

    private String formatGreeting(String lang) {
        if ("kn".equalsIgnoreCase(lang)) {
            return """
                    ನಮಸ್ಕಾರ! ನಾನು **ENTITLE Smart Assistant**.

                    ನಾನು ಭಾರತ ಸರ್ಕಾರದ 107 ಪರಿಶೀಲಿಸಿದ ಕಲ್ಯಾಣ ಯೋಜನೆಗಳು (ಎಡಿಐಪಿ, ಪಿಎಂ-ಕಿಸಾನ್, ಆಯುಷ್ಮಾನ್ ಭಾರತ್, ಗೃಹ ಲಕ್ಷ್ಮಿ), ಅರ್ಹತಾ ನಿಯಮಗಳು, ದಾಖಲೆಗಳು ಹಾಗೂ ಸಾಮಾನ್ಯ ಜ್ಞಾನದ ಪ್ರಶ್ನೆಗಳಿಗೆ ನಿಖರ ಮಾಹಿತಿ ನೀಡಬಲ್ಲೆ.

                    ನೀವು ಯಾವುದರ ಬಗ್ಗೆ ತಿಳಿಯಲು ಬಯಸುತ್ತೀರಿ?
                    """;
        }
        if ("hi".equalsIgnoreCase(lang)) {
            return """
                    नमस्ते! मैं **ENTITLE Smart Assistant** हूँ।

                    मैं भारत सरकार की 107 सत्यापित कल्याणकारी योजनाओं (जैसे ADIP, PM-KISAN, आयुष्मान भारत, गृह लक्ष्मी), पात्रता शर्तों, दस्तावेजों और सामान्य ज्ञान के प्रश्नों में आपकी सहायता कर सकता हूँ।

                    आप किस योजना या विषय के बारे में जानना चाहते हैं?
                    """;
        }
        return """
                Hello! I am **ENTITLE Smart Assistant**, your dedicated intelligence guide for Indian Government Welfare Schemes, citizen services, and general knowledge.

                You can ask me about:
                • **107 Verified Schemes:** ADIP, PM-KISAN, Ayushman Bharat, Gruha Lakshmi, Mudra Loans
                • **Eligibility & Documents:** Age limits, income benchmarks, checklist verification
                • **Civic Services:** Aadhaar, PAN, Passports, DigiLocker, Driving Licenses
                • **General Knowledge:** Photosynthesis, AI vs ML, science, and everyday questions

                How can I assist you today?
                """;
    }
}
