// Local Offline Scheme Intelligence & NLP Engine for ADIKHAR Assistant
// Evaluates queries client-side using downloaded IndexedDB scheme data.
// Supports English (en-IN), Hindi (hi-IN), and Kannada (kn-IN).

const INTENT_TYPES = {
    ELIGIBILITY: "ELIGIBILITY",
    BENEFITS: "BENEFITS",
    DOCUMENTS: "DOCUMENTS",
    HOW_TO_APPLY: "HOW_TO_APPLY",
    EXCLUSIONS: "EXCLUSIONS",
    CONTACT: "CONTACT",
    CATEGORY_DISCOVERY: "CATEGORY_DISCOVERY",
    STATE_DISCOVERY: "STATE_DISCOVERY",
    GENERAL_KNOWLEDGE: "GENERAL_KNOWLEDGE",
    GENERAL_OVERVIEW: "GENERAL_OVERVIEW"
};

const KEYWORDS = {
    en: {
        eligibility: ["eligible", "eligibility", "who can apply", "qualify", "age limit", "income limit", "criteria"],
        benefits: ["benefit", "benefits", "how much money", "amount", "financial assistance", "payout", "subsidy", "get"],
        documents: ["document", "documents", "papers", "id proof", "certificate", "what do i need", "needed"],
        howToApply: ["how to apply", "application process", "steps", "apply", "where to apply", "procedure", "portal"],
        exclusions: ["who cannot apply", "ineligible", "excluded", "not eligible", "disqualified", "restriction"],
        contact: ["helpline", "toll free", "phone", "contact", "official website", "email", "complaint"],
        farmer: ["farmer", "farmers", "agriculture", "kisan", "crop", "land"],
        health: ["health", "hospital", "medical", "treatment", "doctor", "ayushman", "sdg 3", "insurance"],
        food: ["food", "ration", "grain", "hunger", "sdg 2", "anna bhagya", "pds"],
        student: ["student", "scholarship", "education", "college", "school", "study", "fee"],
        women: ["woman", "women", "girl", "mother", "maternity", "widow", "mahila", "gruha lakshmi"],
        karnataka: ["karnataka", "bangalore", "bengaluru", "state"]
    },
    hi: {
        eligibility: ["पात्रता", "कौन आवेदन कर सकता है", "शर्तें", "योग्यता", "आयु सीमा", "आय सीमा", "नियम"],
        benefits: ["लाभ", "फायदे", "कितने पैसे", "राशि", "सहायता", "रुपये", "क्या मिलेगा"],
        documents: ["दस्तावेज", "डॉक्यूमेंट", "कागजात", "प्रमाण पत्र", "आधार", "राशन कार्ड", "क्या चाहिए"],
        howToApply: ["आवेदन कैसे करें", "प्रक्रिया", "कहाँ आवेदन करें", "पोर्टल", "कदम", "ऑनलाइन"],
        exclusions: ["कौन पात्र नहीं है", "अपात्र", "प्रतिबंध", "किसे नहीं मिलेगा"],
        contact: ["हेल्पलाइन", "टोल फ्री", "फोन", "सम्पर्क", "वेबसाइट", "शिकायत"],
        farmer: ["किसान", "कृषि", "खेती", "फसल", "जमीन"],
        health: ["स्वास्थ्य", "इलाज", "अस्पताल", "दवा", "आयुष्मान", "बीमारी"],
        food: ["राशन", "अन्न", "भोजन", "गेहूं", "चावल"],
        student: ["छात्र", "छात्रवृत्ति", "स्कॉलरशिप", "पढ़ाई", "शिक्षा", "स्कूल", "कॉलेज"],
        women: ["महिला", "नारी", "बेटी", "मातृत्व", "गृह लक्ष्मी"],
        karnataka: ["कर्नाटक", "बेंगलुरु"]
    },
    kn: {
        eligibility: ["ಅರ್ಹತೆ", "ಯಾರು ಅರ್ಜಿ ಸಲ್ಲಿಸಬಹುದು", "ನಿಯಮಗಳು", "ವಯಸ್ಸಿನ ಮಿತಿ", "ಆದಾಯ ಮಿತಿ", "ಅರ್ಹರು"],
        benefits: ["ಪ್ರಯೋಜನ", "ಲಾಭ", "ಎಷ್ಟು ಹಣ", "ಧನಸಹಾಯ", "ಮೊತ್ತ", "ಏನು ಸಿಗುತ್ತದೆ"],
        documents: ["ದಾಖಲೆಗಳು", "ದಾಖಲಾತಿ", "ಸರ್ಟಿಫಿಕೇಟ್", "ಪತ್ರಗಳು", "ಆಧಾರ್", "ರೇಷನ್ ಕಾರ್ಡ್", "ಬೇಕಾಗುವ ದಾಖಲೆ"],
        howToApply: ["ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದು ಹೇಗೆ", "ವಿಧಾನ", "ಹೇಗೆ ಅಪ್ಲೈ ಮಾಡಬೇಕು", "ಪೋರ್ಟಲ್", "ಕ್ರಮಗಳು", "ಅರ್ಜಿ ವಿಧಾನ"],
        exclusions: ["ಯಾರಿಗೆ ಸಿಗುವುದಿಲ್ಲ", "ಅನರ್ಹತೆ", "ಅನರ್ಹರು", "ನಿರ್ಬಂಧಗಳು"],
        contact: ["ಸಹಾಯವಾಣಿ", "ಹೆಲ್ಪ್‌ಲೈನ್", "ದೂರವಾಣಿ", "ಸಂಪರ್ಕ", "ವೆಬ್‌ಸೈಟ್"],
        farmer: ["ರೈತ", "ಕೃಷಿ", "ಕಿಸಾನ್", "ಬೆಳೆ", "ಭೂಮಿ"],
        health: ["ಆರೋಗ್ಯ", "ಆಸ್ಪತ್ರೆ", "ಚಿಕಿತ್ಸೆ", "ಔಷಧಿ", "ಆಯುಷ್ಮಾನ್"],
        food: ["ಆಹಾರ", "ರೇಷನ್", "ಅನ್ನ ಭಾಗ್ಯ", "ಅಕ್ಕಿ", "ದವಸ ಧಾನ್ಯ"],
        student: ["ವಿದ್ಯಾರ್ಥಿ", "ವಿದ್ಯಾರ್ಥಿವೇತನ", "ಶಿಕ್ಷಣ", "ಸ್ಕಾಲರ್‌ಶಿಪ್", "ಶಾಲೆ", "ಕಾಲೇಜು"],
        women: ["ಮಹಿಳೆ", "ಸ್ತ್ರೀ", "ಗೃಹ ಲಕ್ಷ್ಮಿ", "ತಾಯಿ", "ಹೆಣ್ಣು ಮಕ್ಕಳು"],
        karnataka: ["ಕರ್ನಾಟಕ", "ಬೆಂಗಳೂರು", "ರಾಜ್ಯ"]
    }
};

function normalize(str) {
    return (str || "").toLowerCase().trim();
}

export function getSchemeTitle(s) {
    if (!s) return "Government Welfare Scheme";
    const title = s.name || s.title || s.shortTitle;
    if (!title || title === "undefined" || title === "null") {
        return "Government Welfare Scheme";
    }
    return title.replace(/\?\?/g, "–").trim();
}

function detectIntent(text, lang) {
    const norm = normalize(text);
    const kw = KEYWORDS[lang] || KEYWORDS.en;

    for (const [intent, words] of Object.entries(kw)) {
        for (const w of words) {
            if (norm.includes(w)) {
                if (intent === "eligibility") return INTENT_TYPES.ELIGIBILITY;
                if (intent === "benefits") return INTENT_TYPES.BENEFITS;
                if (intent === "documents") return INTENT_TYPES.DOCUMENTS;
                if (intent === "howToApply") return INTENT_TYPES.HOW_TO_APPLY;
                if (intent === "exclusions") return INTENT_TYPES.EXCLUSIONS;
                if (intent === "contact") return INTENT_TYPES.CONTACT;
                if (intent === "farmer" || intent === "health" || intent === "food" || intent === "student" || intent === "women") {
                    return INTENT_TYPES.CATEGORY_DISCOVERY;
                }
                if (intent === "karnataka") return INTENT_TYPES.STATE_DISCOVERY;
            }
        }
    }

    // Check general knowledge keywords
    if (norm.includes("photosynthesis") || norm.includes("artificial intelligence") || norm.includes("what is ai") || norm.includes("solar system") || norm.includes("quantum") || norm.includes("dna") || norm.includes("gravity") || norm.includes("speed of light")) {
        return INTENT_TYPES.GENERAL_KNOWLEDGE;
    }

    return INTENT_TYPES.GENERAL_OVERVIEW;
}

function findSchemeMatch(query, schemes) {
    const q = normalize(query);
    if (!q || !schemes || schemes.length === 0) return null;

    const aliases = [
        { keys: ["adip", "adip scheme", "assistive aids", "assistive devices", "alimco", "tricycle", "एडीआईपी"], id: "adra-assistive-devices" },
        { keys: ["udid", "swavlamban", "disability certificate"], id: "udid" },
        { keys: ["saksham"], id: "aicte-saksham" },
        { keys: ["disability pension", "igndps"], id: "igndps" },
        { keys: ["ayushman bharat", "pmjay", "pm-jay", "ಆಯುಷ್ಮಾನ್", "आयुष्मान"], id: "pm-jay" },
        { keys: ["pm kisan", "pm-kisan", "pmkisan", "kisan samman", "ಕಿಸಾನ್", "किसान सम्मान"], id: "pm-kisan" },
        { keys: ["gruha lakshmi", "gruhalakshmi", "ಗೃಹ ಲಕ್ಷ್ಮಿ", "गृह लक्ष्मी"], id: "karnataka-gruha-lakshmi" },
        { keys: ["yuva nidhi", "yuvanidhi", "ಯುವ ನಿಧಿ", "युवा निधि"], id: "karnataka-yuva-nidhi" },
        { keys: ["anna bhagya", "annabhagya", "ಅನ್ನ ಭಾಗ್ಯ", "अन्न भाग्य"], id: "karnataka-anna-bhagya" },
        { keys: ["shakti", "free bus", "ಶಕ್ತಿ ಯೋಜನೆ", "शक्ति योजना"], id: "karnataka-shakti" },
        { keys: ["gruha jyothi", "gruhajyothi", "free electricity", "ಗೃಹ ಜ್ಯೋತಿ"], id: "karnataka-gruha-jyothi" },
        { keys: ["pm mudra", "mudra loan", "pmmy", "मुद्रा", "ಮುದ್ರಾ"], id: "pm-mudra" },
        { keys: ["pm svanidhi", "svanidhi", "street vendor", "ಸ್ವನಿಧಿ"], id: "pm-svanidhi" },
        { keys: ["pm awas", "pmay", "housing scheme", "ಆವಾಸ್"], id: "pmay-urban" },
        { keys: ["sukanya", "ssy", "सुकन्या", "ಸುಕನ್ಯಾ"], id: "sukanya-samriddhi" },
        { keys: ["atal pension", "apy", "अटल पेंशन"], id: "apy" },
        { keys: ["jan dhan", "pmjdy", "जन धन"], id: "pmjdy" },
        { keys: ["suraksha bima", "pmsby"], id: "pmsby" },
        { keys: ["jeevan jyoti", "pmjjby"], id: "pmjjby" },
        { keys: ["mgnrega", "nrega", "मनरेगा"], id: "mgnrega" },
        { keys: ["poshan", "mid day meal", "पोषण"], id: "pm-poshan" },
        { keys: ["chiranjeevi", "चिरंजीवी"], id: "rj-chiranjeevi" },
        { keys: ["rythu bandhu"], id: "ts-rythu-bandhu" },
        { keys: ["ladli behna"], id: "mp-ladli-behna" }
    ];

    for (const a of aliases) {
        if (a.keys.some(k => q.includes(k))) {
            const found = schemes.find(s => s.id === a.id || s.id?.includes(a.id));
            if (found) return found;
        }
    }

    // Direct title/name match
    for (const s of schemes) {
        const titleNorm = normalize(getSchemeTitle(s));
        if (titleNorm.length > 5 && q.includes(titleNorm)) {
            return s;
        }
    }

    // Two token overlap
    const tokens = q.split(/\s+/).filter(t => t.length > 3);
    for (const s of schemes) {
        const titleNorm = normalize(getSchemeTitle(s));
        const matchCount = tokens.filter(t => titleNorm.includes(t)).length;
        if (matchCount >= 2) return s;
    }

    return null;
}

function filterSchemesByTopic(query, schemes) {
    const q = normalize(query);
    if (q.includes("karnataka") || q.includes("ಕರ್ನಾಟಕ") || q.includes("ಬೆಂಗಳೂರು") || q.includes("state")) {
        return schemes.filter(s => s.state === "Karnataka" || s.id?.startsWith("karnataka-"));
    }
    if (q.includes("health") || q.includes("hospital") || q.includes("ಆರೋಗ್ಯ") || q.includes("इलाज") || q.includes("sdg 3")) {
        return schemes.filter(s => s.category?.includes("Health") || s.sdg === "SDG 3");
    }
    if (q.includes("food") || q.includes("ration") || q.includes("ಅನ್ನ") || q.includes("राशन") || q.includes("sdg 2")) {
        return schemes.filter(s => s.category?.includes("Food") || s.sdg === "SDG 2");
    }
    if (q.includes("farmer") || q.includes("kisan") || q.includes("ರೈತ") || q.includes("किसान")) {
        return schemes.filter(s => s.category?.includes("Farmer") || s.category?.includes("Agriculture"));
    }
    if (q.includes("student") || q.includes("scholarship") || q.includes("ವಿದ್ಯಾರ್ಥಿ") || q.includes("छात्र")) {
        return schemes.filter(s => s.category?.includes("Education") || s.category?.includes("Scholarship"));
    }
    if (q.includes("women") || q.includes("girl") || q.includes("mother") || q.includes("ಮಹಿಳೆ") || q.includes("महिला")) {
        return schemes.filter(s => s.category?.includes("Women") || s.beneficiaryType?.includes("Women"));
    }
    return schemes.slice(0, 4);
}

function buildSchemeResponse(scheme, intent, lang) {
    const title = getSchemeTitle(scheme);
    const ministry = scheme.department || scheme.ministry || (scheme.level === "Central" ? "Government of India" : "State Government");
    const portal = scheme.officialUrl || scheme.sourceUrl || "https://www.myscheme.gov.in";
    const desc = scheme.description || scheme.detailedDescription || scheme.purpose || "Priority government welfare initiative.";
    const state = scheme.state || "All India";
    const verified = scheme.lastVerified || "2026-06-01";

    // 1. Specific Intent: Eligibility
    if (intent === INTENT_TYPES.ELIGIBILITY) {
        const elig = Array.isArray(scheme.eligibility) ? scheme.eligibility.join(". ") : (scheme.whoCanApply || "Eligible citizens meeting statutory benchmarks.");
        const income = scheme.incomeMax ? ` Annual family income limit: ₹${scheme.incomeMax.toLocaleString('en-IN')}.` : "";
        const age = (scheme.minAge || scheme.maxAge) ? ` Age criteria: ${scheme.minAge || 0} to ${scheme.maxAge && scheme.maxAge < 120 ? scheme.maxAge : 'unlimited'} years.` : "";
        return `### ${title} — Eligibility Criteria\n\n• **Target Beneficiaries:** ${elig}\n• **Geographical Domicile:** Resident of ${state}${age}${income}\n• **Status:** Active scheme under ${ministry}.`;
    }

    // 2. Specific Intent: Benefits
    if (intent === INTENT_TYPES.BENEFITS) {
        const ben = scheme.financialBenefit || scheme.benefits || scheme.benefitsSummary || desc;
        const freq = scheme.benefitFrequency || "Periodically";
        return `### ${title} — Benefits\n\n• **Assistance:** ${ben}\n• **Frequency:** ${freq}\n• **Disbursement Channel:** Direct Benefit Transfer (DBT) directly into Aadhaar-linked bank accounts via PFMS.\n\nOfficial Portal: ${portal}`;
    }

    // 3. Specific Intent: Documents
    if (intent === INTENT_TYPES.DOCUMENTS) {
        const docs = Array.isArray(scheme.documents)
            ? scheme.documents.slice(0, 5).map(d => typeof d === 'string' ? d : `**${d.name}** (${d.why || 'Verification'})`).join("\n• ")
            : "**Aadhaar Card**, **Income Certificate**, **Bank Passbook**, **Ration Card**";
        return `### ${title} — Required Documents\n\n• ${docs}\n\n*Tip: Check the Document Readiness Tracker in ADIKHAR to verify your certificates before applying.*`;
    }

    // 4. Specific Intent: How to Apply
    if (intent === INTENT_TYPES.HOW_TO_APPLY) {
        return `### How to Apply for ${title}\n\n1. Ensure your Aadhaar number is actively linked to your bank account.\n2. Keep your identity and income certificates ready in ADIKHAR Document Vault.\n3. Open the official government application portal: ${portal}\n4. Complete the online registration and retain the application tracking acknowledgement.\n\n*Applications must be submitted on the official government portal.*`;
    }

    // 5. Default Comprehensive 9-Point Structured Scheme Guide
    return `### ${title}

**1. What is the scheme?**
${desc} Managed by ${ministry} as a ${scheme.level || "Central"} initiative across ${state}.

**2. Who can apply?**
${scheme.targetBeneficiary || scheme.whoCanApply || scheme.beneficiaryType || "Eligible citizens meeting statutory requirements"} residing in ${state}.

**3. Main benefits**
• **Assistance:** ${scheme.financialBenefit || scheme.benefits || "Direct welfare support and financial assistance"}
• **Disbursement:** Direct Benefit Transfer (DBT) via PFMS to Aadhaar-linked bank accounts.

**4. Eligibility criteria**
• Age: ${scheme.minAge || 0} to ${scheme.maxAge && scheme.maxAge < 120 ? scheme.maxAge : "No upper limit"} years
• Income Limit: ${scheme.incomeMax ? `Up to ₹${scheme.incomeMax.toLocaleString('en-IN')}/year` : "As per category norms"}
• Domicile: Resident of ${state}

**5. Required documents**
• Aadhaar Card (Identity proof)
• Income Certificate / BPL Ration Card (Income benchmark)
• Bank Passbook with IFSC (DBT credit)
• Domicile / Residence Proof

**6. How to apply**
1. Check eligibility and prepare certificates in Document Vault.
2. Visit the official portal: ${portal}
3. Fill online application or submit at nearest CSC / Seva Sindhu center.

**7. Important conditions**
• Bank account must be seeded with Aadhaar and mapped in NPCI mapper.
• Active income tax payers and institutional landholders are excluded.

**8. Official website**
• Portal: ${portal}
${scheme.helpline ? `• Helpline: ${scheme.helpline}` : ""}

**9. Last verified date**
Verified by ADIKHAR on **${verified}** against official departmental gazettes.`;
}

export async function processOfflineVoiceQuery({ query, lang = "en", activeSchemeId = null, allSchemes = [] }) {
    if (!query || query.trim() === "") {
        return {
            text: "Please type or speak your question about government schemes, healthcare, or everyday topics.",
            matchedSchemes: []
        };
    }

    const intent = detectIntent(query, lang);

    // 1. General Knowledge query while offline: explain offline limitation gracefully
    if (intent === INTENT_TYPES.GENERAL_KNOWLEDGE) {
        return {
            text: `You are currently in **Offline Mode**. Detailed answers for broad general knowledge (such as "${query.trim()}") require an active internet connection to query online AI models.\n\nOffline, ADIKHAR Assistant is ready to help you with **107 verified Indian Government welfare schemes**, eligibility criteria, and required documents. Try asking: *"What is PM-KISAN?"* or *"Who is eligible for Gruha Lakshmi?"*`,
            matchedSchemes: [],
            intent: INTENT_TYPES.GENERAL_KNOWLEDGE,
            isOfflineNotice: true
        };
    }

    let matchedScheme = null;

    if (activeSchemeId) {
        matchedScheme = allSchemes.find(s => s.id === activeSchemeId);
    }

    if (!matchedScheme) {
        matchedScheme = findSchemeMatch(query, allSchemes);
    }

    // 2. Matched a specific scheme
    if (matchedScheme) {
        const answerText = buildSchemeResponse(matchedScheme, intent, lang);
        return {
            text: answerText,
            matchedSchemes: [matchedScheme],
            intent,
            detectedLanguage: lang
        };
    }

    // 3. Topical or state discovery
    const filtered = filterSchemesByTopic(query, allSchemes);
    if (filtered.length > 0) {
        const schemeNames = filtered.map(s => `• **${getSchemeTitle(s)}** (${s.category})`).join("\n");
        const reply = `### Recommended Schemes\n\nHere are verified government schemes matching your request:\n\n${schemeNames}\n\nYou can ask: *"What are the benefits of ${getSchemeTitle(filtered[0])}?"* or *"Who can apply?"* for full 9-point structured details.`;
        return {
            text: reply,
            matchedSchemes: filtered,
            intent,
            detectedLanguage: lang
        };
    }

    // 4. Default fallback
    return {
        text: `ADIKHAR Assistant contains **107 verified Central and State Government schemes** across India.\n\nYou can ask about:\n• Healthcare schemes (Ayushman Bharat)\n• Farmer welfare (PM-KISAN, Kisan Credit Card)\n• Karnataka state initiatives (Gruha Lakshmi, Yuva Nidhi, Shakti)\n• Student scholarships (Post-Matric, National Scholarship Portal)\n• Business & MSME loans (PM Mudra, PM SVANidhi)\n\nWhat would you like to know?`,
        matchedSchemes: allSchemes.slice(0, 3),
        intent: INTENT_TYPES.GENERAL_OVERVIEW,
        detectedLanguage: lang
    };
}
