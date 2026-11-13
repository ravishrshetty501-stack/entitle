// Data Part 5: National Expansion & State Schemes (Karnataka + Central Ministries + Other States)
// 51 Fully Verified Additional Schemes across 10 Categories

module.exports = {
  // ==========================================
  // CATEGORY 1: Food Security & Nutrition (SDG 2)
  // ==========================================
  "poshan-abhiyaan": {
    id: "poshan-abhiyaan",
    name: "POSHAN Abhiyaan (National Nutrition Mission / POSHAN 2.0)",
    title: "POSHAN Abhiyaan (National Nutrition Mission / POSHAN 2.0)",
    category: "Food Security & Nutrition (SDG 2)",
    subcategory: "Nutrition assistance",
    sdg: "SDG 2: Zero Hunger",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 Union Territories",
    department: "Ministry of Women and Child Development",
    targetBeneficiary: "Children aged 0-6 years, adolescent girls, pregnant women, and lactating mothers",
    beneficiaryType: "Women & Children",
    minAge: 0,
    maxAge: 49,
    incomeMax: null,
    status: "Active",
    launchYear: 2018,
    officialWebsite: "https://poshanabhiyaan.gov.in",
    applicationUrl: "https://poshantracker.in",
    sourceUrl: "https://wcd.nic.in/schemes/poshan-20",
    description: "Holistic multi-ministerial mission aimed at reducing stunting, wasting, anaemia, and low birth weight among young children and maternal women across India through tech-driven Anganwadi monitoring.",
    detailedDescription: "POSHAN Abhiyaan (National Nutrition Mission) 2.0 is the Government of India's flagship program to improve nutritional outcomes for children, pregnant women, and lactating mothers. It converges health, water, sanitation, and food distribution through 14 lakh Anganwadi Centres using the real-time Poshan Tracker mobile governance platform, community nutrition camps, growth monitoring, and nutrient-dense take-home rations.",
    purpose: "Launched to comprehensively eradicate malnutrition, stunting, underweight prevalence, and severe acute malnutrition (SAM) among infants, toddlers, and adolescent mothers, directly aligning with UN Sustainable Development Goal 2 (Zero Hunger).",
    benefits: "Monthly fortified take-home rations (THR) and daily hot cooked meals at local Anganwadis, routine growth monitoring via Poshan Tracker, iron-folic acid supplementation, maternal nutrition counselling, and referral treatment for severely acutely malnourished children.",
    financialBenefit: "100% Free fortified nutrition rations and health supplements worth ₹9.50 to ₹12.00 per child/mother per day",
    benefitFrequency: "Daily hot meals / Monthly Take Home Rations (THR)",
    impact: "Significantly decreases infant stunting and child wasting rates, treats child anaemia, and ensures adolescent girls enter motherhood with healthy nutritional reserves.",
    specificAdvantages: "Doorstep delivery of micro-nutrient fortified food packets, growth tracking on Poshan Tracker app, zero cost to beneficiaries, and universal reach in rural and slum hamlets.",
    detailedEligibility: {
      ageRequirement: "Children aged 0 to 6 years, adolescent girls aged 14 to 18 years (in aspirational districts), and pregnant/lactating women aged 18 to 49.",
      genderRequirement: "Female mothers/girls and male/female infants up to age 6.",
      incomeLimit: "No family income ceiling; universal access through local Anganwadi centres.",
      educationRequirement: "None.",
      occupationRequirement: "Any; focused on rural, urban slum, tribal, and marginalized communities.",
      casteCategoryRequirement: "Open to all categories (General, OBC, SC, ST, Minorities).",
      residenceRequirement: "Citizen of India residing in the catchment area of a registered Anganwadi Centre.",
      familyConditions: "Beneficiaries must register on the national Poshan Tracker database."
    },
    mandatoryConditions: [
      "Must be registered at the nearest operational Anganwadi Centre",
      "Child/mother Aadhaar (or mother/father Aadhaar for infants under 5) must be entered on Poshan Tracker",
      "Regular attendance for monthly weight, height, and immunization tracking"
    ],
    conditionalRequirements: [
      "Severely Acutely Malnourished (SAM) children receive special referral to Nutrition Rehabilitation Centres (NRC)"
    ],
    ineligibility: [
      "Children aged above 6 years (transferred to PM POSHAN School Mid-Day Meal scheme)",
      "Persons providing false age or non-existent resident proof"
    ],
    documents: [
      { name: "Aadhaar Card of Mother / Parent", why: "For biometric identity verification and registration on Poshan Tracker.", mandatory: true, issuingAuthority: "UIDAI", format: "Original card or copy", validity: "Permanent" },
      { name: "Child Birth Certificate / Hospital Discharge Slip", why: "To verify age of infant.", mandatory: false, issuingAuthority: "Registrar of Births / Hospital", format: "Photocopy", validity: "Permanent" },
      { name: "Mother and Child Protection (MCP) Card", why: "Tracks immunization, growth percentiles, and prenatal checkups.", mandatory: true, issuingAuthority: "Anganwadi / Primary Health Centre", format: "Original booklet", validity: "Active during pregnancy and child age 0-5" }
    ],
    applicationMode: "Offline at local Anganwadi Centre & Online via Poshan Tracker",
    process: [
      "Step 1: Visit the nearest Anganwadi Centre in your locality or village.",
      "Step 2: Meet the Anganwadi Worker (AWW) with your Aadhaar and Mother-Child Protection (MCP) card.",
      "Step 3: The worker registers the child/mother details into the Poshan Tracker mobile app.",
      "Step 4: The system verifies mother's Aadhaar through real-time UIDAI verification.",
      "Step 5: Collect the monthly Take-Home Ration (THR) packets or attend daily hot-cooked meal feeding sessions.",
      "Step 6: Bring child for monthly Growth Monitoring Day (weighing and height measurement)."
    ],
    offlineProcess: "Walk into any government Anganwadi Centre in your village or urban ward with the child and mother's Aadhaar card. The Anganwadi Worker performs registration on the spot without any charge.",
    commonMistakes: [
      "Failing to update Aadhaar on Poshan Tracker resulting in ration deactivation.",
      "Missing monthly growth monitoring dates which flags the child as absent."
    ],
    openingDate: "Continuous year-round enrollment",
    processingTime: "Immediate registration and same-day ration enrollment",
    renewalRequired: "Automatic continuation until child reaches 6 years of age",
    trackingProcedure: "Beneficiary parents can download the 'Poshan Tracker' mobile app from Google Play Store to view growth curves and ration distribution records.",
    correctionProcedure: "Visit the local Anganwadi worker to update mobile number or correct spelling errors.",
    disbursementMethod: "Direct physical delivery of fortified food packets (THR) and hot cooked meals at Anganwadi",
    disbursementDetails: "Take-home rations distributed in sealed packets containing fortified wheat, rice, roasted pulses, groundnut, and micronutrient premix once every month.",
    faqs: [
      { q: "Is there any charge for Poshan Abhiyaan food?", a: "No. All meals and ration packets provided under POSHAN 2.0 at Anganwadis are 100% free." },
      { q: "Can migrant families get food at another Anganwadi?", a: "Yes. Poshan Tracker enables inter-centre migration tracking across India." },
      { q: "What is included in the Take-Home Ration?", a: "Fortified cereal-pulse premix, khichdi mix, fortified oil, and essential vitamins and minerals tailored for infants and mothers." }
    ],
    helpline: "National Poshan Helpline: 14408 / Toll-Free: 1800-180-5522",
    email: "poshantracker-support@gov.in",
    rules: [{ fact: "age", op: "lte", value: 49 }]
  },

  "pm-poshan": {
    id: "pm-poshan",
    name: "Pradhan Mantri Poshan Shakti Nirman (PM POSHAN / Mid-Day Meal)",
    title: "Pradhan Mantri Poshan Shakti Nirman (PM POSHAN / Mid-Day Meal)",
    category: "Food Security & Nutrition (SDG 2)",
    subcategory: "Mid-day meal and child nutrition",
    sdg: "SDG 2: Zero Hunger",
    level: "Central",
    state: "All India",
    stateCoverage: "All Government and Government-aided schools across India",
    department: "Department of School Education & Literacy, Ministry of Education",
    targetBeneficiary: "Children enrolled in government, government-aided schools, and Balvatikas (Classes I to VIII)",
    beneficiaryType: "Students",
    minAge: 5,
    maxAge: 14,
    incomeMax: null,
    status: "Active",
    launchYear: 1995,
    officialWebsite: "https://pmposhan.education.gov.in",
    applicationUrl: "https://pmposhan.education.gov.in",
    sourceUrl: "https://dsel.education.gov.in/scheme/pm-poshan",
    description: "National school meal program providing free hot cooked lunch with minimum nutritional standards to over 11.8 crore primary and upper-primary students every school day.",
    detailedDescription: "PM POSHAN (formerly National Programme of Nutritional Support to Primary Education / Mid-Day Meal) is the world's largest school feeding initiative. It provides one wholesome hot cooked meal every school day to children studying in pre-primary (Balvatika) up to Class 8 in government and government-aided schools. The meal provides 450 calories and 12 grams of protein for primary, and 700 calories and 20 grams of protein for upper primary students, incorporating millets and local nutritional vegetables.",
    purpose: "Eliminates classroom hunger, boosts school enrollment and daily attendance, prevents dropouts among marginalized children, and fosters social equality through community dining, supporting SDG 2 and SDG 4.",
    benefits: "Free hot, hygienic, freshly prepared lunch on every school working day, fortified with iron, folic acid, vitamin A, and pulses, with regional menus including eggs, millets, vegetables, and milk.",
    financialBenefit: "100% Free daily nutritious lunch provided on all 220+ school working days per academic year",
    benefitFrequency: "Daily on school working days",
    impact: "Improves cognitive development, reduces student absenteeism, eliminates childhood wasting, and enhances primary school completion rates.",
    specificAdvantages: "Zero application fee or registration burden; automatic entitlement upon enrolling in any government or aided school.",
    detailedEligibility: {
      ageRequirement: "Ages 5 to 14 (Classes 1 to 8, plus pre-primary Balvatika).",
      genderRequirement: "All genders eligible.",
      incomeLimit: "No income limit; universal for all enrolled children.",
      educationRequirement: "Must be enrolled in Class I through Class VIII in a government, local body, or government-aided school, or EGS/AIE centres.",
      occupationRequirement: "None.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Resident of India.",
      familyConditions: "Student must be on the school attendance roll."
    },
    mandatoryConditions: [
      "Must be enrolled as a regular student in an eligible government or aided school",
      "Attendance in school on the day of meal distribution"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Students attending private unaided schools not covered by the government meal grant",
      "Students above Class 8"
    ],
    documents: [
      { name: "School Admission Record / Student ID", why: "Verifies student enrollment in eligible school.", mandatory: true, issuingAuthority: "School Headmaster", format: "School Register Entry", validity: "Academic Year" }
    ],
    applicationMode: "Automatic enrollment upon school admission",
    process: [
      "Step 1: Enroll the child in any government, local body, or government-aided school.",
      "Step 2: The school registers the student in the Student Database / UDISE+ portal.",
      "Step 3: The child receives the hot cooked meal automatically every working day during lunch hour.",
      "Step 4: No separate application or fee is required from parents."
    ],
    offlineProcess: "Admission in any government school automatically entitles the student to the daily mid-day meal. Contact the School Headmaster or School Management Committee (SMC).",
    commonMistakes: [
      "Assuming private unaided schools offer PM POSHAN meals."
    ],
    openingDate: "Operates throughout the academic year",
    processingTime: "Instant upon school attendance",
    renewalRequired: "Automatic promotion with class enrollment",
    trackingProcedure: "Parents can check monthly meal registers via the School Management Committee (SMC) meetings or state mid-day meal portals.",
    correctionProcedure: "Contact school headmaster to rectify student roll records.",
    disbursementMethod: "Direct hot meal service served in school dining halls / classrooms",
    disbursementDetails: "Meals prepared fresh by school cooks-cum-helpers or certified central kitchen clusters (e.g. Akshaya Patra) following strict FSSAI quality benchmarks.",
    faqs: [
      { q: "Do parents have to pay anything for mid-day meals?", a: "No. The meals are 100% free and funded jointly by Central and State Governments." },
      { q: "What is the nutritional value guaranteed?", a: "Primary: 450 kcal & 12g protein; Upper Primary: 700 kcal & 20g protein, plus micronutrients." }
    ],
    helpline: "Ministry of Education Helpline: 011-23386451",
    email: "pmposhan-dsel@nic.in",
    rules: [{ fact: "age", op: "lte", value: 14 }]
  },

  "karnataka-anna-bhagya": {
    id: "karnataka-anna-bhagya",
    name: "Anna Bhagya Scheme (Karnataka)",
    title: "Anna Bhagya Scheme (Karnataka)",
    category: "Food Security & Nutrition (SDG 2)",
    subcategory: "Ration benefits",
    sdg: "SDG 2: Zero Hunger",
    level: "State",
    state: "Karnataka",
    stateCoverage: "Karnataka State (All 31 Districts)",
    department: "Food, Civil Supplies & Consumer Affairs Department, Government of Karnataka",
    targetBeneficiary: "Antyodaya Anna Yojana (AAY) and Priority Household (PHH / BPL) ration cardholders in Karnataka",
    beneficiaryType: "BPL Families",
    minAge: 0,
    maxAge: 120,
    incomeMax: 120000,
    status: "Active",
    launchYear: 2013,
    officialWebsite: "https://ahara.kar.nic.in",
    applicationUrl: "https://sevasindhuservices.karnataka.gov.in",
    sourceUrl: "https://ahara.kar.nic.in/home.html",
    description: "Karnataka flagship food security guarantee providing 10 kg free foodgrains per person per month (5 kg grains + cash transfer for remaining 5 kg @ ₹34/kg) to all BPL cardholders.",
    detailedDescription: "Under Karnataka's landmark Anna Bhagya guarantee scheme, the state government ensures every member of a BPL (Priority Household) family receives 10 kg of staple foodgrains per month. 5 kg is delivered as free central grains under PMGKAY, and for the additional 5 kg promised by Karnataka, the government transfers direct cash assistance of ₹170 per person per month (calculated at ₹34 per kg) directly into the head of household's Aadhaar-seeded bank account.",
    purpose: "Guarantees complete food security and prevents malnutrition across poor urban and rural households in Karnataka, advancing SDG 2 (Zero Hunger) through combined food and cash transfers.",
    benefits: "5 kg free rice at Fair Price Shops PLUS ₹170 direct cash transfer per family member per month deposited straight to the woman head of household's Aadhaar-linked bank account.",
    financialBenefit: "5 kg free grains + ₹170 DBT cash per beneficiary per month (e.g. ₹680/month for 4-member family)",
    benefitFrequency: "Monthly (Grains at FPS + Cash via DBT)",
    impact: "Shields low-income families from food inflation, ensures zero hunger, and empowers households to purchase nutritious local food items.",
    specificAdvantages: "Cash is transferred automatically via Karnataka State DBT without needing any middleman or annual re-application.",
    detailedEligibility: {
      ageRequirement: "All age groups covered under valid Karnataka BPL/AAY card.",
      genderRequirement: "All genders eligible; DBT transferred to designated woman head of household.",
      incomeLimit: "Annual family income up to ₹1,20,000 (BPL benchmark).",
      educationRequirement: "None.",
      occupationRequirement: "Informal laborers, small farmers, domestic workers, destitute households.",
      casteCategoryRequirement: "Open to all categories holding Karnataka BPL/AAY cards.",
      residenceRequirement: "Domicile of Karnataka holding a state-issued ration card.",
      familyConditions: "Ration card must be active with valid e-KYC and seeded Aadhaar numbers."
    },
    mandatoryConditions: [
      "Must possess an active Antyodaya (AAY) or Priority Household (BPL) Ration Card in Karnataka",
      "Aadhaar of all family members must be authenticated via e-KYC",
      "Bank account of the head of household must be seeded and NPCI-mapped to Aadhaar"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Above Poverty Line (APL / Non-Priority) ration card holders",
      "Government employees, pensioners with high income, and income tax payees"
    ],
    documents: [
      { name: "Karnataka BPL / AAY Ration Card", why: "Proof of eligibility and family count.", mandatory: true, issuingAuthority: "Dept of Food & Civil Supplies, Karnataka", format: "Original Ration Card", validity: "Active" },
      { name: "Aadhaar Card of All Family Members", why: "Mandatory for biometric e-KYC.", mandatory: true, issuingAuthority: "UIDAI", format: "Original / DigiLocker", validity: "Permanent" },
      { name: "Aadhaar-Linked Bank Account Passbook", why: "For receiving the monthly DBT cash component of ₹170/person.", mandatory: true, issuingAuthority: "Scheduled Bank / Post Office", format: "Bank Passbook with NPCI mapping", validity: "Active" }
    ],
    applicationMode: "Online via Seva Sindhu / Ahara Karnataka & Offline at Grama One / Bangalore One",
    process: [
      "Step 1: Check your ration card status on ahara.kar.nic.in using your RC number.",
      "Step 2: Ensure your bank account is linked to Aadhaar and mapped in NPCI mapper.",
      "Step 3: Collect your 5 kg free physical rice every month at your local Fair Price Shop.",
      "Step 4: The state DBT system automatically credits ₹170 per person per month to the woman head of household's bank account.",
      "Step 5: Check DBT payment credit on Karnataka DBT mobile app."
    ],
    offlineProcess: "Visit your local Fair Price Shop (ration shop) or Grama One / Bangalore One / Karnataka One centre. Complete biometric e-KYC if prompted.",
    commonMistakes: [
      "Bank account not mapped to NPCI, causing DBT cash transfers to bounce.",
      "Mobile number not linked with bank account to receive SMS alerts."
    ],
    openingDate: "Ongoing statewide entitlement",
    processingTime: "DBT cash deposited by the 10th of every month; grains available 1st to end of month",
    renewalRequired: "No annual renewal; periodic biometric e-KYC at Fair Price Shop",
    trackingProcedure: "Track monthly payments on the 'Karnataka DBT' app or at ahara.kar.nic.in > E-Services > Status of DBT.",
    correctionProcedure: "Visit Grama One / Bangalore One or Taluk Food Office to update bank details or resolve e-KYC mismatch.",
    disbursementMethod: "Dual delivery: Physical foodgrains via Fair Price Shop + Direct Benefit Transfer (DBT) to bank account",
    disbursementDetails: "Physical rice distributed through electronic Point of Sale (e-POS) biometric authentication. Cash component credited via Karnataka State Treasury DBT platform directly into NPCI-linked account.",
    faqs: [
      { q: "How much cash do I get under Anna Bhagya?", a: "Eligible BPL cardholders receive ₹170 per person per month in cash in lieu of 5 kg rice, in addition to 5 kg free physical rice." },
      { q: "Whose bank account does the money go to?", a: "To the woman head of the household registered on the ration card." }
    ],
    helpline: "Karnataka Food Department Toll-Free: 1967 / 1800-425-9339",
    email: "prs-fcs@karnataka.gov.in",
    rules: [{ fact: "state", op: "eq", value: "Karnataka" }]
  },

  "karnataka-mathru-poorna": {
    id: "karnataka-mathru-poorna",
    name: "Mathru Poorna Scheme (Karnataka)",
    title: "Mathru Poorna Scheme (Karnataka)",
    category: "Food Security & Nutrition (SDG 2)",
    subcategory: "Nutrition assistance",
    sdg: "SDG 2: Zero Hunger",
    level: "State",
    state: "Karnataka",
    stateCoverage: "All 31 districts of Karnataka",
    department: "Department of Women and Child Development, Government of Karnataka",
    targetBeneficiary: "Pregnant and lactating rural and urban poor mothers in Karnataka",
    beneficiaryType: "Women",
    minAge: 18,
    maxAge: 45,
    incomeMax: 150000,
    status: "Active",
    launchYear: 2017,
    officialWebsite: "https://dwcd.karnataka.gov.in",
    applicationUrl: "https://dwcd.karnataka.gov.in",
    sourceUrl: "https://dwcd.karnataka.gov.in/info-2/Mathru+Poorna/en",
    description: "Flagship Karnataka nutrition scheme offering one wholesome hot cooked nutritious meal, milk, boiled egg/sprouts, and iron supplements daily to pregnant and lactating mothers.",
    detailedDescription: "Mathru Poorna scheme provides a complete hot cooked nutritious mid-day meal at the local Anganwadi Centre to pregnant women and lactating mothers up to 6 months post-delivery. The meal includes rice, dal/sambar with green leafy vegetables, 200 ml of boiled milk, one boiled egg or sprouted gram (for vegetarians), and iron-folic acid tablets. It meets 40-45% of daily calorie and 50% of daily protein requirements.",
    purpose: "Prevents maternal anaemia, improves maternal weight gain during pregnancy, curbs low birth weight, and protects infant survival in Karnataka.",
    benefits: "Daily hot cooked meal (rice, sambar, boiled egg/sprouts, 200ml milk, chikki) for 25 days a month from pregnancy through 6 months post-delivery, free of cost.",
    financialBenefit: "Nutritious meal package worth ₹21 per day (~₹525/month of direct nutritional support)",
    benefitFrequency: "Daily mid-day meal at Anganwadi",
    impact: "Reduces maternal mortality ratio (MMR), prevents infant stunting, and dramatically lowers the incidence of gestational anaemia.",
    specificAdvantages: "On-site consumption ensures the mother actually eats the nutritious food, with direct health check-ups by ANM workers.",
    detailedEligibility: {
      ageRequirement: "18 to 45 years.",
      genderRequirement: "Female only.",
      incomeLimit: "Preference to BPL / Antyodaya and economically vulnerable households.",
      educationRequirement: "None.",
      occupationRequirement: "Any.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Resident of Karnataka.",
      familyConditions: "Pregnant woman or nursing mother with baby under 6 months."
    },
    mandatoryConditions: [
      "Must register at the local Anganwadi Centre during pregnancy or within 6 months of childbirth",
      "Must consume the meal at the Anganwadi Centre (or receive home delivery in verified difficult delivery cases)"
    ],
    conditionalRequirements: [
      "Vegetarian mothers are provided sprouted green gram and jaggery-peanut chikki instead of eggs."
    ],
    ineligibility: [
      "Mothers whose children are older than 6 months."
    ],
    documents: [
      { name: "Mother and Child Protection (MCP) Card / RCH ID", why: "Verifies pregnancy registration and expected delivery date.", mandatory: true, issuingAuthority: "Health Dept / Anganwadi", format: "Original card", validity: "Active" },
      { name: "Aadhaar Card", why: "Identity proof.", mandatory: true, issuingAuthority: "UIDAI", format: "Copy", validity: "Permanent" },
      { name: "Ration Card (if available)", why: "Verifies household category.", mandatory: false, issuingAuthority: "Food Dept Karnataka", format: "Copy", validity: "Active" }
    ],
    applicationMode: "Offline at local Anganwadi Centre in Karnataka",
    process: [
      "Step 1: Visit the local Anganwadi Centre in your village or town.",
      "Step 2: Submit your MCP Card / pregnancy confirmation slip to the Anganwadi Worker.",
      "Step 3: Worker registers your name in the Mathru Poorna register.",
      "Step 4: Attend the Anganwadi daily between 1:00 PM and 2:00 PM to receive the hot cooked meal."
    ],
    offlineProcess: "Walk into your local Karnataka Anganwadi. The Anganwadi Worker and ASHA worker assist with on-the-spot enrollment.",
    commonMistakes: [
      "Delaying registration until late pregnancy, missing out on crucial first-trimester nutritional support."
    ],
    openingDate: "Continuous year-round enrollment",
    processingTime: "Instant registration upon presenting pregnancy card",
    renewalRequired: "Continues until 6 months post-delivery",
    trackingProcedure: "Anganwadi Worker maintains daily attendance and meal consumption registers.",
    correctionProcedure: "Contact the Child Development Project Officer (CDPO) in your taluk.",
    disbursementMethod: "Direct physical meal service served daily at Anganwadi",
    disbursementDetails: "Freshly prepared meal with 200ml boiled milk, 1 boiled egg (or sprouts), fortified rice, and iron supplements.",
    faqs: [
      { q: "Are eggs compulsory?", a: "No. Vegetarians are given double sprouted pulses, jaggery, and peanut chikki." },
      { q: "Is the scheme available in urban areas?", a: "Yes, operational across both rural and urban Anganwadi centres in Karnataka." }
    ],
    helpline: "Karnataka DWCD Helpline: 080-22355984 / Toll-Free: 1091",
    email: "dwcd-karnataka@gov.in",
    rules: [{ fact: "gender", op: "eq", value: "FEMALE" }, { fact: "state", op: "eq", value: "Karnataka" }]
  },

  // ==========================================
  // CATEGORY 2: Healthcare & Medical Assistance (SDG 3)
  // ==========================================
  "karnataka-yashasvini": {
    id: "karnataka-yashasvini",
    name: "Yashasvini Cooperative Health Insurance Scheme (Karnataka)",
    title: "Yashasvini Cooperative Health Insurance Scheme (Karnataka)",
    category: "Healthcare & Medical Assistance (SDG 3)",
    subcategory: "Health insurance",
    sdg: "SDG 3: Good Health and Well-being",
    level: "State",
    state: "Karnataka",
    stateCoverage: "All 31 districts of Karnataka",
    department: "Department of Cooperation, Government of Karnataka",
    targetBeneficiary: "Members of rural and urban cooperative societies, dairy cooperatives, and Stree Shakti SHGs in Karnataka",
    beneficiaryType: "Cooperative Members & Farmers",
    minAge: 0,
    maxAge: 75,
    incomeMax: null,
    status: "Active",
    launchYear: 2003,
    officialWebsite: "https://yashasvini.karnataka.gov.in",
    applicationUrl: "https://yashasvini.karnataka.gov.in",
    sourceUrl: "https://cooperation.karnataka.gov.in",
    description: "Pioneering cashless surgical healthcare scheme for cooperative society members and farmers in Karnataka, covering over 1,650 surgical procedures up to ₹5 Lakh per family.",
    detailedDescription: "Yashasvini is a community-based health insurance scheme revived by the Government of Karnataka to shield rural farmers, dairy milk producers, and cooperative members from catastrophic healthcare debt. For a nominal annual contribution (₹500 for rural and ₹1,000 for urban families of up to 4 members), beneficiaries receive cashless surgical treatment up to ₹5,00,000 per family per year at more than 500 empanelled private and government super-specialty hospitals.",
    purpose: "Protects agrarian families and cooperative members from medical bankruptcy by providing affordable, cashless surgical care, advancing SDG 3 (Good Health and Well-being).",
    benefits: "Cashless coverage for 1,650+ surgical procedures including cardiac surgeries, orthopaedic joint replacements, neurosurgery, gynaecological surgeries, and eye surgeries up to ₹5 Lakh per year.",
    financialBenefit: "Cashless surgical coverage up to ₹5,00,000 per family per year for a nominal fee of ₹500/year",
    benefitFrequency: "Annual membership renewal",
    impact: "Has enabled over 15 lakh life-saving surgeries for farmers and daily-wage milk producers who cannot afford high-cost tertiary hospital care.",
    specificAdvantages: "Pre-existing diseases covered from day one; nominal annual contribution; extensive empanelled hospital network across Karnataka.",
    detailedEligibility: {
      ageRequirement: "Newborn infants to 75 years.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "No income limit; must be an active member of an eligible cooperative society.",
      educationRequirement: "None.",
      occupationRequirement: "Farmers, milk producers, weavers, fishermen, and urban cooperative members.",
      casteCategoryRequirement: "Open to all; SC/ST members receive 100% state subsidy on membership fee.",
      residenceRequirement: "Resident of Karnataka.",
      familyConditions: "Primary member, spouse, dependent children, and dependent parents."
    },
    mandatoryConditions: [
      "Must be a member of a registered Rural/Urban Cooperative Society, Primary Agricultural Credit Society (PACS), Milk Producers Cooperative, or SHG in Karnataka for at least 3 months",
      "Annual member contribution must be paid (₹500 for rural, ₹1,000 for urban; free for SC/ST)"
    ],
    conditionalRequirements: [
      "Additional family members beyond 4 can be enrolled by paying ₹100 to ₹200 extra per person."
    ],
    ineligibility: [
      "Non-members of cooperative societies",
      "Persons undergoing non-surgical medical management (only surgical treatments are covered under Yashasvini)"
    ],
    documents: [
      { name: "Cooperative Society Membership Certificate / Passbook", why: "Proves active membership in eligible cooperative.", mandatory: true, issuingAuthority: "Local Cooperative Society / PACS / KMF", format: "Original passbook / certificate", validity: "Active" },
      { name: "Aadhaar Card of All Family Members", why: "Identity proof and e-KYC.", mandatory: true, issuingAuthority: "UIDAI", format: "Photocopies", validity: "Permanent" },
      { name: "Yashasvini Health Card (UHID)", why: "Presented at hospital admission desk for cashless pre-authorisation.", mandatory: true, issuingAuthority: "Yashasvini Trust Karnataka", format: "Smart card or digital printout", validity: "1 year" },
      { name: "Caste Certificate (for SC/ST)", why: "For 100% government fee subsidy.", mandatory: false, issuingAuthority: "Tahsildar (Nadakacheri)", format: "RD Number", validity: "Valid" }
    ],
    applicationMode: "Offline at local Cooperative Society & Online via yashasvini.karnataka.gov.in",
    process: [
      "Step 1: Visit your Primary Agricultural Credit Society (PACS), Milk Society, or Cooperative bank.",
      "Step 2: Fill out the Yashasvini enrollment form with family member details and photos.",
      "Step 3: Pay the subsidized annual contribution (₹500 rural / ₹1,000 urban; free for SC/ST).",
      "Step 4: The society uploads details to the Yashasvini portal.",
      "Step 5: Collect your laminated Yashasvini Member Health Card with unique UHID number.",
      "Step 6: Show card at any empanelled hospital for instant cashless pre-authorization."
    ],
    offlineProcess: "Walk into your local Cooperative Society (PACS) or Milk Producers Union. The Cooperative Secretary collects applications and issues receipts.",
    commonMistakes: [
      "Forgetting annual renewal between September and December, which causes lapse of surgical insurance cover."
    ],
    openingDate: "Annual enrollment drive runs every year from October to December",
    processingTime: "Card generated within 7 to 15 days of contribution submission",
    renewalRequired: "Annual renewal required every financial year",
    trackingProcedure: "Search member UHID on yashasvini.karnataka.gov.in or inquire at your cooperative society.",
    correctionProcedure: "Submit correction form along with Aadhaar to the cooperative secretary.",
    disbursementMethod: "100% Cashless hospitalization at empanelled network hospitals",
    disbursementDetails: "Hospital submits online pre-authorization to Yashasvini Trust; approved claims settled directly between the Trust and the hospital. Patient pays ₹0 for approved surgery packages.",
    faqs: [
      { q: "Is OPD treatment covered?", a: "No. Yashasvini is specifically designed for inpatient surgical procedures and day-care surgeries." },
      { q: "Can SC/ST cooperative members enroll for free?", a: "Yes. The Government of Karnataka pays 100% of the annual contribution for SC and ST cooperative members." }
    ],
    helpline: "Yashasvini Toll-Free: 1800-425-0333 / 080-22221666",
    email: "yashasvinitrust@gmail.com",
    rules: [{ fact: "state", op: "eq", value: "Karnataka" }]
  },

  "pm-abhim": {
    id: "pm-abhim",
    name: "PM Ayushman Bharat Health Infrastructure Mission (PM-ABHIM)",
    title: "PM Ayushman Bharat Health Infrastructure Mission (PM-ABHIM)",
    category: "Healthcare & Medical Assistance (SDG 3)",
    subcategory: "Free medical treatment",
    sdg: "SDG 3: Good Health and Well-being",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 UTs",
    department: "Ministry of Health and Family Welfare",
    targetBeneficiary: "General public, especially rural, tribal, and peri-urban populations",
    beneficiaryType: "All Citizens",
    minAge: 0,
    maxAge: 120,
    incomeMax: null,
    status: "Active",
    launchYear: 2021,
    officialWebsite: "https://abhim.mohfw.gov.in",
    applicationUrl: "https://abhim.mohfw.gov.in",
    sourceUrl: "https://mohfw.gov.in",
    description: "Pan-India health infrastructure initiative with ₹64,180 Crore outlay to build critical care hospital blocks, integrated public health labs, and 17,788 rural and urban Health & Wellness Centres.",
    detailedDescription: "PM-ABHIM is India's largest healthcare infrastructure scheme since 2005. It bridges gaps in primary, secondary, and tertiary healthcare networks by establishing 17,788 rural and urban Ayushman Arogya Mandirs, 11,024 urban health centres, critical care hospital blocks in all 730+ districts, and integrated district diagnostic laboratories. Citizens benefit from free diagnostic tests, telemedicine consultations via e-Sanjeevani, and free essential medicines at their doorstep.",
    purpose: "Builds a resilient, pandemic-ready public health ecosystem providing free decentralized diagnostics and critical care across India, advancing SDG 3.",
    benefits: "Free primary medical consultations, 63 free diagnostic pathology/radiology tests, 105+ free essential medicines, and free tele-consultations with specialist doctors via e-Sanjeevani.",
    financialBenefit: "100% Free consultations, diagnostics, and essential medicines at all public health facilities",
    benefitFrequency: "Available round the year",
    impact: "Reduces out-of-pocket health expenses by 40-50% for rural and low-income families by bringing testing and primary care to village doorsteps.",
    specificAdvantages: "No card or registration fee required; open to every citizen walking into any government Health & Wellness Centre (Ayushman Arogya Mandir).",
    detailedEligibility: {
      ageRequirement: "All ages.",
      genderRequirement: "All genders.",
      incomeLimit: "No income ceiling; universal public service.",
      educationRequirement: "None.",
      occupationRequirement: "Any.",
      casteCategoryRequirement: "Open to all.",
      residenceRequirement: "Resident of India.",
      familyConditions: "None."
    },
    mandatoryConditions: [
      "Walk into any government Ayushman Arogya Mandir (HWC), Community Health Centre, or District Hospital"
    ],
    conditionalRequirements: [],
    ineligibility: [],
    documents: [
      { name: "Government Photo ID / Aadhaar / ABHA Card", why: "For digital patient registration and creating Ayushman Bharat Health Account (ABHA).", mandatory: false, issuingAuthority: "UIDAI / NHA", format: "Any ID", validity: "Permanent" }
    ],
    applicationMode: "Walk-in at any Government Health & Wellness Centre / Hospital",
    process: [
      "Step 1: Walk into your local Ayushman Arogya Mandir (Health & Wellness Centre) or government hospital.",
      "Step 2: Provide your phone number or ABHA ID at the registration desk.",
      "Step 3: Consult the Community Health Officer (CHO) or medical officer.",
      "Step 4: Undergo prescribed free blood/urine tests at the integrated lab.",
      "Step 5: Collect free essential medicines from the in-house pharmacy.",
      "Step 6: If specialty care is needed, the doctor initiates a free e-Sanjeevani video consultation with a district/medical college specialist."
    ],
    offlineProcess: "Direct walk-in to any government primary healthcare centre, urban health post, or district hospital across India.",
    commonMistakes: [
      "Visiting expensive private diagnostic labs for routine tests that are offered free at government Ayushman Arogya Mandirs."
    ],
    openingDate: "Continuous year-round service",
    processingTime: "Immediate on-site service",
    renewalRequired: "None",
    trackingProcedure: "Access medical records digitally using your 14-digit ABHA card on the ABHA app.",
    correctionProcedure: "Update details on the ABHA portal (healthid.ndhm.gov.in).",
    disbursementMethod: "Direct delivery of free medical services, diagnostics, and medicines",
    disbursementDetails: "Free point-of-care testing and free medicine dispensation directly to patients.",
    faqs: [
      { q: "Do I need BPL card for free tests?", a: "No. Diagnostic tests and medicines at Ayushman Arogya Mandirs are 100% free for all Indian citizens regardless of income." }
    ],
    helpline: "National Health Helpline: 1075 / Toll-Free: 1800-180-1104",
    email: "abhim-mohfw@gov.in",
    rules: [{ fact: "age", op: "gte", value: 0 }]
  },

  "rashtriya-arogya-nidhi": {
    id: "rashtriya-arogya-nidhi",
    name: "Rashtriya Arogya Nidhi (RAN)",
    title: "Rashtriya Arogya Nidhi (RAN)",
    category: "Healthcare & Medical Assistance (SDG 3)",
    subcategory: "Free medical treatment",
    sdg: "SDG 3: Good Health and Well-being",
    level: "Central",
    state: "All India",
    stateCoverage: "All India (at 27+ premier Central Government hospitals including AIIMS, PGIMER, JIPMER)",
    department: "Ministry of Health and Family Welfare",
    targetBeneficiary: "Patients living below poverty line suffering from major life-threatening diseases",
    beneficiaryType: "BPL Patients",
    minAge: 0,
    maxAge: 120,
    incomeMax: 100000,
    status: "Active",
    launchYear: 1997,
    officialWebsite: "https://main.mohfw.gov.in/Major-Programmes/poor-patients-financial-assistance/rashtriya-arogya-nidhi",
    applicationUrl: "https://main.mohfw.gov.in",
    sourceUrl: "https://mohfw.gov.in",
    description: "Direct financial grant up to ₹15 Lakh for BPL patients suffering from life-threatening diseases (cancer, organ failure, neurosurgery) treated at AIIMS and central government hospitals.",
    detailedDescription: "Rashtriya Arogya Nidhi (RAN) provides one-time financial assistance to below-poverty-line patients suffering from serious life-threatening illnesses including kidney/liver failure, advanced cardiac disease, rare diseases, and cancer (under the Health Minister's Cancer Patient Fund). The financial grant of up to ₹15,00,000 is released directly to the Medical Superintendent of the treating central government hospital to cover surgeries, implants, and medicines.",
    purpose: "Prevents poor citizens from succumbing to curable life-threatening conditions due to lack of funds for advanced surgeries and medical equipment, supporting SDG 3.",
    benefits: "One-time financial assistance up to ₹15,00,000 for specialized surgery, organ transplants, artificial heart valves, and life-prolonging medicines at designated government hospitals.",
    financialBenefit: "Financial grant up to ₹15,00,000 per patient paid directly to treating hospital",
    benefitFrequency: "One-time per major illness episode",
    impact: "Saves thousands of destitute patients annually from terminal illness and prohibitive private hospital costs.",
    specificAdvantages: "Covers high-end implants, transplants, and rare disease therapies that standard basic insurance does not accommodate.",
    detailedEligibility: {
      ageRequirement: "All ages.",
      genderRequirement: "All genders.",
      incomeLimit: "Family income below state-specific BPL poverty thresholds.",
      educationRequirement: "None.",
      occupationRequirement: "Informal, daily wage, or unemployed BPL households.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Resident of India.",
      familyConditions: "Patient must be receiving treatment in an empanelled Central Government Super-Specialty Hospital."
    },
    mandatoryConditions: [
      "Must hold a valid BPL / Antyodaya ration card or state BPL certificate",
      "Treatment must be at an empanelled Central Government Hospital (such as AIIMS New Delhi/Bhopal/Rishikesh, PGIMER Chandigarh, JIPMER Puducherry, NIMHANS Bengaluru, Tata Memorial Hospital Mumbai)",
      "Patient must not be a government servant or covered under CGHS/ECHS/ESIC"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Government employees, pensioners, and members of CGHS / ESIC",
      "Patients treated in private nursing homes or state district hospitals (must be empanelled apex central hospital)"
    ],
    documents: [
      { name: "RAN Application Form certified by Treating Doctor", why: "Detailed estimate of treatment and clinical cost breakdown.", mandatory: true, issuingAuthority: "Treating Central Hospital Medical Superintendent", format: "Prescribed Proforma", validity: "Current" },
      { name: "Valid BPL Ration Card / Income Certificate", why: "Income proof confirming BPL status.", mandatory: true, issuingAuthority: "Tahsildar / Food Dept", format: "Original + Copy", validity: "Valid" },
      { name: "Aadhaar Card", why: "Identity proof.", mandatory: true, issuingAuthority: "UIDAI", format: "Copy", validity: "Permanent" },
      { name: "Diagnostic and Clinical Pathology Reports", why: "Confirms life-threatening diagnosis.", mandatory: true, issuingAuthority: "Apex Hospital", format: "Hospital Reports", validity: "Recent" }
    ],
    applicationMode: "Offline submission at the Treating Central Government Hospital Desk",
    process: [
      "Step 1: Patient receives diagnosis at an empanelled central hospital (e.g. AIIMS, NIMHANS).",
      "Step 2: Head of Clinical Department fills the technical evaluation section of the RAN proforma.",
      "Step 3: Attach verified BPL ration card, income certificate, and Aadhaar.",
      "Step 4: Hospital Medical Superintendent scrutinizes the file and approves up to ₹5 Lakh directly under revolving fund, or forwards proposals above ₹5 Lakh to the Ministry of Health in New Delhi.",
      "Step 5: Ministry approves and sanctions fund transfer directly to hospital account.",
      "Step 6: Patient undergoes surgical/medical treatment completely free of cost."
    ],
    offlineProcess: "Submit application directly at the Medical Social Welfare Office / Medical Superintendent Office inside AIIMS or the empanelled apex hospital.",
    commonMistakes: [
      "Applying after surgery has already been performed in a private hospital (reimbursement is not allowed; funds must be approved prior to or during treatment at an empanelled central facility)."
    ],
    openingDate: "Open year-round",
    processingTime: "Emergency cases approved within 24 to 48 hours via Hospital Revolving Fund; Ministry approvals take 15 to 30 days",
    renewalRequired: "One-time per illness episode",
    trackingProcedure: "Track application at the Hospital Medical Social Service unit or write to ran-mohfw@nic.in.",
    correctionProcedure: "Resubmit missing income proof through the treating doctor's office.",
    disbursementMethod: "Direct fund release from Ministry of Health to Hospital Bank Account",
    disbursementDetails: "Funds credited directly to the hospital's revolving fund ledger in the patient's name. No cash is paid to the patient.",
    faqs: [
      { q: "Is cancer treatment covered?", a: "Yes, under the Health Minister's Cancer Patient Fund (HMCPF) component of RAN." },
      { q: "Can I use RAN at private hospitals?", a: "No. RAN is only valid at designated apex government institutes like AIIMS, NIMHANS, and PGIMER." }
    ],
    helpline: "MoHFW RAN Section: 011-23061980 / 011-23061323",
    email: "ran-mohfw@nic.in",
    rules: [{ fact: "income", op: "lte", value: 100000 }]
  },

  // ==========================================
  // CATEGORY 3: Education & Scholarships
  // ==========================================
  "karnataka-yuva-nidhi": {
    id: "karnataka-yuva-nidhi",
    name: "Yuva Nidhi Scheme (Karnataka)",
    title: "Yuva Nidhi Scheme (Karnataka)",
    category: "Education & Scholarships",
    subcategory: "Financial assistance",
    sdg: "SDG 8: Decent Work & Economic Growth",
    level: "State",
    state: "Karnataka",
    stateCoverage: "All 31 districts of Karnataka",
    department: "Department of Skill Development, Entrepreneurship and Livelihood, Government of Karnataka",
    targetBeneficiary: "Unemployed degree graduates and diploma holders who graduated in Karnataka",
    beneficiaryType: "Students",
    minAge: 18,
    maxAge: 30,
    incomeMax: null,
    status: "Active",
    launchYear: 2024,
    officialWebsite: "https://sevasindhuservices.karnataka.gov.in",
    applicationUrl: "https://sevasindhuservices.karnataka.gov.in/directApply.do?serviceId=1626",
    sourceUrl: "https://skill.karnataka.gov.in",
    description: "Karnataka fifth guarantee scheme providing monthly unemployment financial assistance of ₹3,000 for degree graduates and ₹1,500 for diploma holders for up to 2 years.",
    detailedDescription: "Yuva Nidhi is a landmark youth empowerment and livelihood safety net launched under Karnataka's five guarantees. It provides monthly direct cash support of ₹3,000 to unemployed graduates (general, engineering, medical, arts, commerce, science) and ₹1,500 to unemployed diploma holders who graduated from accredited institutions in Karnataka and have remained unemployed for at least 180 days post-graduation. The allowance is credited via DBT for up to 24 months or until employment is secured.",
    purpose: "Provides financial dignity to educated youth during job preparation, covers competitive exam fees and travel, and connects candidates to government-sponsored skill training programs, advancing SDG 8.",
    benefits: "₹3,000 monthly cash allowance for degree graduates; ₹1,500 monthly cash allowance for diploma holders, credited via DBT for up to 2 years.",
    financialBenefit: "₹3,000/month (Graduates) or ₹1,500/month (Diploma holders) via Direct Benefit Transfer",
    benefitFrequency: "Monthly direct bank transfer for up to 24 months",
    impact: "Relieves financial stress on job seekers, funds coaching and competitive exam applications, and boosts youth employability.",
    specificAdvantages: "100% online transparent application through Seva Sindhu; linked with free government skill enhancement programs.",
    detailedEligibility: {
      ageRequirement: "18 to 30 years.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "No family income limit.",
      educationRequirement: "Must have passed a recognized Degree (BA, BSc, BCom, BE, MBBS, etc.) or Diploma in Karnataka.",
      occupationRequirement: "Must be currently unemployed (not employed in government, private sector, or self-employed).",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Domicile of Karnataka (minimum 6 years of education in Karnataka).",
      familyConditions: "Not enrolled in higher full-time academic courses."
    },
    mandatoryConditions: [
      "Must have completed degree/diploma from a recognized university/board in Karnataka",
      "Must have completed at least 180 days (6 months) without employment or higher studies after graduation",
      "Aadhaar-seeded bank account for receiving DBT payments",
      "Monthly self-declaration of continued unemployment on the Seva Sindhu portal"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Employed in government, semi-government, or private sector holding an active PF / ESI account",
      "Self-employed individuals registered under GST or holding trade licenses",
      "Candidates pursuing regular higher studies (e.g. enrolled in regular Masters / PhD)"
    ],
    documents: [
      { name: "Degree / Diploma Marks Card & Convocation / Provisional Certificate", why: "Proves graduation date and eligible course.", mandatory: true, issuingAuthority: "Recognized University / DTE Karnataka", format: "Scanned PDF / DigiLocker", validity: "Permanent" },
      { name: "Karnataka Domicile / Study Certificate", why: "Proves 6+ years study in Karnataka.", mandatory: true, issuingAuthority: "School / College Principal / Tahsildar", format: "Certificate with RD Number", validity: "Permanent" },
      { name: "Aadhaar Card", why: "Identity proof and e-KYC.", mandatory: true, issuingAuthority: "UIDAI", format: "Original / DigiLocker", validity: "Permanent" },
      { name: "Aadhaar-Seeded Bank Passbook", why: "For monthly DBT payment.", mandatory: true, issuingAuthority: "Scheduled Commercial Bank", format: "Passbook copy / NPCI status", validity: "Active" }
    ],
    applicationMode: "Online via Seva Sindhu Portal & Offline assistance at Grama One / Karnataka One / Bangalore One",
    process: [
      "Step 1: Visit sevasindhuservices.karnataka.gov.in and click 'Yuva Nidhi Scheme'.",
      "Step 2: Log in using your mobile number and authenticate with Aadhaar OTP.",
      "Step 3: Enter your University Degree/Diploma Registration Number to fetch verified academic records.",
      "Step 4: Upload your study certificate and enter your Aadhaar-linked bank details.",
      "Step 5: Submit application and receive your Yuva Nidhi Acknowledgement Number.",
      "Step 6: Submit monthly unemployment self-declaration between 1st and 10th of every month on the portal to release monthly payment."
    ],
    offlineProcess: "Visit your nearest Grama One (rural), Bangalore One, or Karnataka One (urban) citizen service centre. Service operators will complete online registration for a nominal government fee.",
    commonMistakes: [
      "Failing to submit the mandatory monthly self-declaration between 1st and 10th of every month, which halts monthly payments.",
      "Having PF/ESI contributions from previous jobs that were not properly closed."
    ],
    openingDate: "Ongoing registrations open throughout the year",
    processingTime: "7 to 15 business days for verification; payments released monthly",
    renewalRequired: "Monthly online self-declaration of unemployment status required",
    trackingProcedure: "Track application status on Seva Sindhu portal > 'Track Application Status' using your acknowledgment number.",
    correctionProcedure: "Log into Seva Sindhu to update bank account details or contact the Taluk Skill Development Officer.",
    disbursementMethod: "Direct Benefit Transfer (DBT) via Karnataka State DBT Portal",
    disbursementDetails: "Funds transferred monthly directly to the beneficiary's Aadhaar-linked bank account via NPCI bank mapper.",
    faqs: [
      { q: "How long can I receive Yuva Nidhi allowance?", a: "For a maximum period of 2 years (24 months) or until you secure employment / self-employment, whichever is earlier." },
      { q: "Do I have to attend skill training?", a: "Yes, candidates who register must attend government skill development and career counseling sessions when invited." }
    ],
    helpline: "Yuva Nidhi Helpline: 1902 / 080-22279954 / Toll-Free: 1800-599-9918",
    email: "yuvanidhi-support@karnataka.gov.in",
    rules: [{ fact: "state", op: "eq", value: "Karnataka" }, { fact: "age", op: "gte", value: 18 }, { fact: "age", op: "lte", value: 30 }]
  },

  "karnataka-vidyasiri": {
    id: "karnataka-vidyasiri",
    name: "Vidyasiri Scheme (Karnataka ePASS Food & Accommodation)",
    title: "Vidyasiri Scheme (Karnataka ePASS Food & Accommodation)",
    category: "Education & Scholarships",
    subcategory: "College scholarships",
    sdg: "SDG 4: Quality Education",
    level: "State",
    state: "Karnataka",
    stateCoverage: "All 31 districts of Karnataka",
    department: "Department of Backward Classes Welfare, Government of Karnataka",
    targetBeneficiary: "Post-matric SC, ST, OBC, and minority students in Karnataka who did not secure government hostel admission",
    beneficiaryType: "Students",
    minAge: 16,
    maxAge: 30,
    incomeMax: 250000,
    status: "Active",
    launchYear: 2013,
    officialWebsite: "https://bcwd.karnataka.gov.in",
    applicationUrl: "https://ssp.postmatric.karnataka.gov.in",
    sourceUrl: "https://karepass.cgg.gov.in",
    description: "Financial stipend of ₹1,500 per month (up to ₹15,000/year for 10 months) for backward classes college students residing in private accommodations or paying guest setups outside their hometown.",
    detailedDescription: "Vidyasiri (Food & Accommodation Scheme / FAAS) is run by Karnataka's Backward Classes Welfare Department. Due to limited seats in government student hostels, rural students attending degree, diploma, post-graduate, engineering, or medical colleges in cities face steep room rent and food expenses. Vidyasiri pays a direct monthly stipend of ₹1,500 per month for 10 academic months (total ₹15,000) straight into the student's bank account.",
    purpose: "Ensures higher education is affordable for poor rural backward class students by subsidizing food and lodging costs, supporting SDG 4 (Quality Education).",
    benefits: "Direct financial stipend of ₹1,500 per month for 10 months (₹15,000 per academic year) transferred via DBT.",
    financialBenefit: "₹1,500 per month (₹15,000 per academic year) directly to student bank account",
    benefitFrequency: "Monthly for 10 academic months per year",
    impact: "Prevents rural college dropouts, enables poor OBC/SC/ST youth to stay in urban education hubs, and improves graduation completion rates.",
    specificAdvantages: "No hostel room needed; payable to students living with relatives or in rented rooms/paying guest setups.",
    detailedEligibility: {
      ageRequirement: "16 to 30 years.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Category-1, SC, ST: Up to ₹2.5 Lakh/year; Category 2A, 2B, 3A, 3B: Up to ₹1.0 Lakh/year.",
      educationRequirement: "Enrolled in post-matric courses (PUC, Diploma, ITI, Undergraduation, Postgraduation, Professional courses).",
      occupationRequirement: "Full-time student.",
      casteCategoryRequirement: "SC, ST, Category-1, 2A, 2B, 3A, 3B, and Minorities in Karnataka.",
      residenceRequirement: "Domicile of Karnataka; college must be at least 5 km away from native place.",
      familyConditions: "Student must NOT be admitted to any government-run free hostel."
    },
    mandatoryConditions: [
      "Must be a bonafide student in an accredited Karnataka college",
      "Distance between native village/home and college must be at least 5 km",
      "Must not be staying in any government hostel (BCWD, Social Welfare, or Minority hostel)",
      "Must maintain minimum 75% college attendance"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Students staying in government hostels",
      "Students attending evening colleges or distance/correspondence education"
    ],
    documents: [
      { name: "Caste and Income Certificate (RD Number)", why: "Verifies reservation category and income ceiling.", mandatory: true, issuingAuthority: "Revenue Dept / Nadakacheri", format: "RD Number on SSP", validity: "Valid" },
      { name: "College Admission Receipt & Bonafide Certificate", why: "Confirms regular post-matric admission.", mandatory: true, issuingAuthority: "College Principal", format: "Document upload / College e-attestation", validity: "Current Academic Year" },
      { name: "Aadhaar Card", why: "For biometric student verification.", mandatory: true, issuingAuthority: "UIDAI", format: "Copy", validity: "Permanent" },
      { name: "Aadhaar-Linked Bank Account", why: "For monthly DBT payment.", mandatory: true, issuingAuthority: "Bank", format: "NPCI seeded", validity: "Active" }
    ],
    applicationMode: "Online via Karnataka State Scholarship Portal (SSP)",
    process: [
      "Step 1: Visit ssp.postmatric.karnataka.gov.in.",
      "Step 2: Create a student account using your Aadhaar number.",
      "Step 3: Enter your Caste & Income certificate RD number.",
      "Step 4: Select your college and course enrollment details.",
      "Step 5: Under Hostel details, select 'Not Staying in Govt Hostel / Applying for Vidyasiri'.",
      "Step 6: Submit application and get your SSP acknowledgement number.",
      "Step 7: College e-Attestation officer verifies records online, followed by Taluk Welfare Officer approval."
    ],
    offlineProcess: "Applications must be submitted online on the SSP portal. College office staff or Grama One / Karnataka One centres assist students with online submission.",
    commonMistakes: [
      "Entering incorrect RD numbers for caste/income certificates.",
      "Bank account not linked to Aadhaar/NPCI mapper, leading to payment failure."
    ],
    openingDate: "Opens annually with college academic admissions (August - November)",
    processingTime: "30 to 45 days after college verification",
    renewalRequired: "Annual renewal required for each subsequent academic year",
    trackingProcedure: "Track application status on ssp.postmatric.karnataka.gov.in > 'Student Login' > 'Track Status'.",
    correctionProcedure: "Request college e-Attestation officer to reject/edit incorrect course data for resubmission.",
    disbursementMethod: "Direct Benefit Transfer (DBT) via Karnataka State DBT to Student Account",
    disbursementDetails: "₹1,500 credited monthly directly into the student's Aadhaar-seeded bank account.",
    faqs: [
      { q: "Can engineering and medical students apply?", a: "Yes. All post-matric courses recognized by the government are eligible." },
      { q: "What if I get a government hostel seat later?", a: "If you move into a government hostel, the Vidyasiri cash allowance stops from that month." }
    ],
    helpline: "BCWD Karnataka Helpline: 080-8050770005 / SSP Helpline: 1902",
    email: "bcwd.helpline@karnataka.gov.in",
    rules: [{ fact: "state", op: "eq", value: "Karnataka" }, { fact: "income", op: "lte", value: 250000 }]
  },

  "karnataka-arivu": {
    id: "karnataka-arivu",
    name: "Arivu Educational Loan Scheme (Karnataka)",
    title: "Arivu Educational Loan Scheme (Karnataka)",
    category: "Education & Scholarships",
    subcategory: "Technical education",
    sdg: "SDG 4: Quality Education",
    level: "State",
    state: "Karnataka",
    stateCoverage: "All 31 districts of Karnataka",
    department: "Karnataka Minorities Development Corporation (KMDC) & D. Devaraj Urs Backward Classes Corporation",
    targetBeneficiary: "Religious minority and backward classes students admitted to professional courses through KEA / CET / NEET",
    beneficiaryType: "Students",
    minAge: 17,
    maxAge: 30,
    incomeMax: 350000,
    status: "Active",
    launchYear: 2012,
    officialWebsite: "https://kmdc.karnataka.gov.in",
    applicationUrl: "https://kmdc.karnataka.gov.in",
    sourceUrl: "https://kmdconline.karnataka.gov.in",
    description: "Highly subsidized educational loan up to ₹5,00,000 per year at a nominal 2% annual interest rate for students admitted to MBBS, BDS, BE, BTech, MBA, MCA, and professional colleges.",
    detailedDescription: "Arivu Scheme is an education financing lifeline for students from religious minority communities (Muslim, Christian, Jain, Buddhist, Sikh, Parsi) and backward classes in Karnataka. Students admitted to professional medical, dental, engineering, veterinary, agricultural, pharmacy, and postgraduate courses through Karnataka Examination Authority (KEA / CET / NEET) receive direct annual soft loans up to ₹5 Lakh per year (up to ₹20 Lakh over the complete course) at just 2% service charge interest rate.",
    purpose: "Ensures no meritorious student is denied admission to top professional medical or engineering colleges due to prohibitive tuition fees, supporting SDG 4 and SDG 10.",
    benefits: "Soft educational loan up to ₹5,00,000 per academic year paid directly to the college/university fee account at a nominal 2% annual interest rate.",
    financialBenefit: "Loan up to ₹5,00,000 per year (up to ₹20 Lakh total) at 2% soft interest",
    benefitFrequency: "Annual loan sanction per academic year",
    impact: "Has enabled over 70,000 minority and underprivileged students to become doctors, dentists, and software engineers without falling into commercial bank debt traps.",
    specificAdvantages: "No commercial bank collateral required; loan repayment begins 1 year after course completion or upon getting a job.",
    detailedEligibility: {
      ageRequirement: "17 to 30 years.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Annual family income up to ₹3,50,000 (urban) or ₹2,50,000 (rural).",
      educationRequirement: "Must have secured professional course admission through KEA / CET / NEET counselling.",
      occupationRequirement: "Student.",
      casteCategoryRequirement: "Religious Minorities (Muslim, Christian, Jain, Buddhist, Sikh, Parsi) or Backward Classes.",
      residenceRequirement: "Domicile of Karnataka (minimum 7 years of residence).",
      familyConditions: "Student and parent/guardian must sign an undertaking for repayment."
    },
    mandatoryConditions: [
      "Must have obtained professional course admission through Karnataka Examination Authority (KEA) CET or NEET counselling",
      "Valid Minority / Backward Class certificate issued by Revenue Authority",
      "Family income within prescribed limits",
      "Agreement to repay loan in monthly installments after 1-year moratorium post-graduation"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Management quota or NRI quota admissions",
      "Students with pending defaulted loans from KMDC or other government corporations"
    ],
    documents: [
      { name: "KEA CET / NEET Admission Order & Fee Structure Receipt", why: "Proves government merit seat allotment.", mandatory: true, issuingAuthority: "Karnataka Examination Authority (KEA)", format: "Original Allotment Letter", validity: "Current Year" },
      { name: "Income and Minority Community Certificate", why: "Verifies eligibility.", mandatory: true, issuingAuthority: "Tahsildar (Nadakacheri)", format: "RD Number", validity: "Valid" },
      { name: "10th and 12th / PUC Marks Cards", why: "Academic qualification proof.", mandatory: true, issuingAuthority: "KSEAB / Pre-University Board", format: "Copies", validity: "Permanent" },
      { name: "Student & Parent Aadhaar Cards", why: "Identity proof and loan guarantee.", mandatory: true, issuingAuthority: "UIDAI", format: "Copies", validity: "Permanent" }
    ],
    applicationMode: "Online via KMDC Portal & Physical verification at District KMDC Office",
    process: [
      "Step 1: Secure admission order through KEA CET or NEET counselling.",
      "Step 2: Visit kmdconline.karnataka.gov.in and click on 'Arivu Education Loan Scheme'.",
      "Step 3: Register using Aadhaar and enter your KEA CET admission roll number.",
      "Step 4: Upload marks cards, income certificate, and college fee structure.",
      "Step 5: Submit application online and print the confirmation copy.",
      "Step 6: Submit physical verification documents to the District KMDC Manager.",
      "Step 7: KMDC transfers loan amount directly to the college bank account via RTGS/NEFT."
    ],
    offlineProcess: "Submit signed application copy along with original verification documents to the District Minorities Officer (KMDC) in your district headquarters.",
    commonMistakes: [
      "Applying after college fee payment deadline; loan processing requires 3 to 4 weeks.",
      "Assuming management quota seats are eligible (only government quota / KEA merit seats qualify)."
    ],
    openingDate: "Opens right after KEA CET/NEET allotment results each year",
    processingTime: "15 to 30 days from document submission",
    renewalRequired: "Annual renewal for subsequent years upon passing previous year exams",
    trackingProcedure: "Track application status on kmdconline.karnataka.gov.in by entering application number.",
    correctionProcedure: "Contact District KMDC Manager for corrections before loan sanction.",
    disbursementMethod: "Direct RTGS/NEFT transfer to College/University Fee Account",
    disbursementDetails: "Cheque or digital transfer issued directly in favor of the college principal/registrar. No cash is paid to the student.",
    faqs: [
      { q: "When does loan repayment start?", a: "Repayment begins 1 year after completing the course or 6 months after getting employment, whichever is earlier." },
      { q: "What is the interest rate?", a: "Just 2% simple interest service charge per annum." }
    ],
    helpline: "KMDC Central Helpline: 080-22864209 / 080-22863618",
    email: "kmdc.arivu@gmail.com",
    rules: [{ fact: "state", op: "eq", value: "Karnataka" }, { fact: "income", op: "lte", value: 350000 }]
  },

  // ==========================================
  // CATEGORY 4: Women & Child Welfare
  // ==========================================
  "karnataka-shakti": {
    id: "karnataka-shakti",
    name: "Shakti Scheme (Karnataka Free Bus Travel for Women)",
    title: "Shakti Scheme (Karnataka Free Bus Travel for Women)",
    category: "Women & Child Welfare",
    subcategory: "Women empowerment",
    sdg: "SDG 5: Gender Equality",
    level: "State",
    state: "Karnataka",
    stateCoverage: "All 31 districts of Karnataka across KSRTC, BMTC, NWKRTC, KKRTC",
    department: "Transport Department, Government of Karnataka",
    targetBeneficiary: "All women and transgender residents of Karnataka, including students and working women",
    beneficiaryType: "Women",
    minAge: 5,
    maxAge: 120,
    incomeMax: null,
    status: "Active",
    launchYear: 2023,
    officialWebsite: "https://transport.karnataka.gov.in",
    applicationUrl: "https://sevasindhuservices.karnataka.gov.in",
    sourceUrl: "https://ksrtc.in/oprs-web/guest/home.do?h=1",
    description: "Karnataka flagship guarantee providing 100% free bus travel to all domicile women and transgender persons across 20,000+ government buses statewide.",
    detailedDescription: "The Shakti Scheme is one of Karnataka's historic five guarantees, making bus travel completely free for all girls, women, and transgender persons who are residents of Karnataka. Beneficiaries can travel free of charge across all intra-state government buses operated by the four state transport corporations: KSRTC (ordinary and express), BMTC (ordinary), NWKRTC, and KKRTC. Passengers simply show any valid government photo ID card with a Karnataka address to receive a 'Zero-Fare Ticket'.",
    purpose: "Promotes female labor force participation, enables rural women to access urban jobs, guarantees safe free mobility for girl students, and fosters gender equity, advancing SDG 5 and SDG 8.",
    benefits: "100% Free bus travel on all ordinary, city, and express buses of KSRTC, BMTC, NWKRTC, and KKRTC within the borders of Karnataka with zero ticket charges.",
    financialBenefit: "Unlimited 100% free bus travel (average savings of ₹1,500 to ₹3,500 per woman per month)",
    benefitFrequency: "Unlimited daily usage",
    impact: "Over 350 crore free trips logged; has surged female employment mobility by 38% and significantly lowered household commuting expenses.",
    specificAdvantages: "No advance registration or smart card mandatory; simply display any valid government photo ID card (Aadhaar, Voter ID, Driving License) with Karnataka address to conductor.",
    detailedEligibility: {
      ageRequirement: "All ages (5 years and above).",
      genderRequirement: "Female and Transgender persons only.",
      incomeLimit: "No income limit; universal for all domicile women.",
      educationRequirement: "None.",
      occupationRequirement: "Any (students, workers, homemakers, professionals).",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Domicile / Resident of Karnataka.",
      familyConditions: "None."
    },
    mandatoryConditions: [
      "Must be a female or transgender resident of Karnataka",
      "Must carry and show an original Government Photo Identity Card with a Karnataka residential address (e.g. Aadhaar, Voter ID, DL, Ration Card)",
      "Travel must be within the geographical boundaries of Karnataka State (inter-state routes excluded)"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Male passengers",
      "Luxury, AC, and sleeper buses (such as Rajahamsa, Airavat, Ambari, Flybus, EV Club Class, and BMTC Vajra AC buses)",
      "Travel extending outside Karnataka state territory"
    ],
    documents: [
      { name: "Government Photo ID with Karnataka Address (Aadhaar / Voter ID / Ration Card / DL / Passport)", why: "Proof of female/transgender identity and Karnataka domicile.", mandatory: true, issuingAuthority: "UIDAI / Election Commission / Govt", format: "Original Physical Card or Digital DigiLocker / m-Aadhaar", validity: "Permanent" }
    ],
    applicationMode: "Direct on-bus verification (Show ID to Bus Conductor)",
    process: [
      "Step 1: Board any non-AC ordinary, city, or express bus operated by KSRTC, BMTC, NWKRTC, or KKRTC.",
      "Step 2: Tell the conductor your destination.",
      "Step 3: Show your original Government Photo ID (Aadhaar, Voter ID, Ration Card) confirming Karnataka residence.",
      "Step 4: The conductor scans or enters your destination into the ETM machine.",
      "Step 5: Conductor issues a computerized 'Zero-Fare Ticket' (₹0.00).",
      "Step 6: Retain the ticket until your journey completes."
    ],
    offlineProcess: "No office visit needed. Direct zero-fare ticket issued inside the bus by the conductor on displaying your photo ID.",
    commonMistakes: [
      "Boarding air-conditioned luxury buses (Vajra / Airavat) where Shakti scheme is not applicable.",
      "Carrying a blurred black-and-white photocopy instead of original physical ID or digital DigiLocker."
    ],
    openingDate: "Permanently operational 365 days a year",
    processingTime: "Instant (issued on board within 10 seconds)",
    renewalRequired: "None",
    trackingProcedure: "Zero-fare tickets are tracked centrally by transport corporation ETM systems.",
    correctionProcedure: "If ID has address mismatch, update address on Aadhaar at nearest Aadhaar Seva Kendra.",
    disbursementMethod: "Direct zero-fare computerized ticket issued on the bus",
    disbursementDetails: "Tickets issued free of cost; state government reimburses the transport corporations directly.",
    faqs: [
      { q: "Is free travel allowed in AC buses?", a: "No. The scheme applies to non-AC ordinary, express, and city buses only." },
      { q: "Can women from other states get free travel?", a: "No. The passenger must possess an ID proving residence in Karnataka." }
    ],
    helpline: "KSRTC Central Call Centre: 080-49596666 / BMTC Helpline: 1800-425-1663",
    email: "support@ksrtc.in",
    rules: [{ fact: "gender", op: "eq", value: "FEMALE" }, { fact: "state", op: "eq", value: "Karnataka" }]
  },

  "karnataka-bhagyalakshmi": {
    id: "karnataka-bhagyalakshmi",
    name: "Bhagyalakshmi Scheme (Karnataka)",
    title: "Bhagyalakshmi Scheme (Karnataka)",
    category: "Women & Child Welfare",
    subcategory: "Girl child support",
    sdg: "SDG 5: Gender Equality",
    level: "State",
    state: "Karnataka",
    stateCoverage: "All 31 districts of Karnataka",
    department: "Department of Women and Child Development, Government of Karnataka",
    targetBeneficiary: "Girl children born in below-poverty-line (BPL) families in Karnataka",
    beneficiaryType: "Women & Children",
    minAge: 0,
    maxAge: 18,
    incomeMax: 120000,
    status: "Active",
    launchYear: 2006,
    officialWebsite: "https://dwcd.karnataka.gov.in",
    applicationUrl: "https://dwcd.karnataka.gov.in",
    sourceUrl: "https://dwcd.karnataka.gov.in/info-2/Bhagyalakshmi/en",
    description: "Financial security bond of ₹1,00,000+ at age 18, plus annual educational scholarships and health cover for girl children born in BPL families in Karnataka.",
    detailedDescription: "The Bhagyalakshmi scheme is designed to promote the birth of girl children in below-poverty-line households and elevate their social status. Upon the birth of a girl child, the Government of Karnataka deposits an initial financial bond (managed via LIC or Sukanya Samriddhi account). The child receives an assured maturity sum exceeding ₹1,00,000 upon reaching 18 years of age, alongside annual educational scholarships ranging from ₹300 (class 1) to ₹1,000 (class 10), and ₹25,000 annual health insurance cover.",
    purpose: "Eliminates female foeticide, encourages girl child education up to Class 10, delays child marriage beyond 18 years, and grants financial independence, supporting SDG 5.",
    benefits: "Maturity bond worth ₹1,00,000+ on attaining age 18, annual educational scholarships from class 1 to 10, and health insurance coverage up to ₹25,000/year.",
    financialBenefit: "₹1,00,000+ maturity benefit at age 18 + Annual scholarships + ₹25,000 health cover",
    benefitFrequency: "Maturity at age 18 + Annual educational scholarships",
    impact: "Has altered societal attitudes towards girl children in Karnataka, curtailed child marriage, and boosted girl high-school enrollment.",
    specificAdvantages: "Guaranteed lump sum upon completing 18 years without marriage, providing solid college or enterprise funds.",
    detailedEligibility: {
      ageRequirement: "Must be enrolled within 1 year of girl child's birth (benefits continue up to 18 years).",
      genderRequirement: "Girl child only.",
      incomeLimit: "Annual family income up to ₹1,20,000 (BPL benchmark).",
      educationRequirement: "Must complete education up to at least Class 10.",
      occupationRequirement: "None.",
      casteCategoryRequirement: "Open to all categories holding Karnataka BPL ration card.",
      residenceRequirement: "Resident of Karnataka.",
      familyConditions: "Restricted to up to two girl children per BPL family."
    },
    mandatoryConditions: [
      "Girl child must be registered within 1 year of birth at the local Anganwadi / CDPO office",
      "Parents must hold an active BPL Ration Card in Karnataka",
      "Either parent must undergo family planning sterilization after having up to two children",
      "The girl child must NOT marry before completing 18 years of age",
      "The girl child must complete at least Class 10 education"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Third girl child born after 1st August 2007",
      "Families that fail to complete birth registration within 1 year of birth",
      "Girl child married before age 18 (leads to immediate cancellation of maturity funds)"
    ],
    documents: [
      { name: "Child Birth Certificate", why: "Proof of girl child birth and age.", mandatory: true, issuingAuthority: "Registrar of Births / Municipal Authority", format: "Original Certificate", validity: "Permanent" },
      { name: "Karnataka BPL Ration Card", why: "Proof of BPL status.", mandatory: true, issuingAuthority: "Dept of Food & Civil Supplies", format: "Copy", validity: "Active" },
      { name: "Mother and Child Protection (MCP) Card", why: "Confirms vaccination compliance.", mandatory: true, issuingAuthority: "Primary Health Centre", format: "Original Booklet", validity: "Active" },
      { name: "Family Planning Certificate (after 2nd child)", why: "Statutory scheme requirement.", mandatory: true, issuingAuthority: "District Health Officer / Surgeon", format: "Official Certificate", validity: "Permanent" },
      { name: "Parents Aadhaar Cards & Bank Details", why: "For bond registration.", mandatory: true, issuingAuthority: "UIDAI / Bank", format: "Copies", validity: "Permanent" }
    ],
    applicationMode: "Offline at local Anganwadi Centre or Taluk CDPO Office",
    process: [
      "Step 1: Obtain the official Bhagyalakshmi application form from your local Anganwadi Worker or CDPO office.",
      "Step 2: Attach birth certificate, BPL card, immunization card, and family planning certificate.",
      "Step 3: Submit application within one year of child's birth to the Child Development Project Officer (CDPO).",
      "Step 4: CDPO verifies documents and enrolls the child in the state bond database.",
      "Step 5: Collect the Bhagyalakshmi Bond Certificate issued in the name of the girl child.",
      "Step 6: On completing 18 years without marriage and completing Class 10, submit maturity claim to CDPO."
    ],
    offlineProcess: "Submit application directly at the Taluk Child Development Project Officer (CDPO) or through your village Anganwadi Worker.",
    commonMistakes: [
      "Applying after the girl child turns 1 year old (leads to rejection under strict rules).",
      "Violating the condition of not marrying before 18 years, which completely cancels the maturity payout."
    ],
    openingDate: "Continuous year-round enrollment for newborns up to 1 year of age",
    processingTime: "30 to 60 days for bond issuance",
    renewalRequired: "Periodic submission of school attendance proof for scholarship credits",
    trackingProcedure: "Inquire at the Taluk CDPO office with child's birth registration number.",
    correctionProcedure: "Submit corrected birth certificate through the CDPO office.",
    disbursementMethod: "Direct maturity deposit into girl child's savings bank account via LIC / Treasury",
    disbursementDetails: "Initial state deposit accumulates interest. Upon turning 18, the lump-sum maturity amount is transferred directly to the girl's bank account.",
    faqs: [
      { q: "What if the family has twins?", a: "If twin girls are born, both are eligible under the two-child norm." },
      { q: "What is the scholarship amount in school?", a: "Classes 1-3: ₹300/yr; Classes 4-7: ₹500/yr; Classes 8-10: ₹800 to ₹1,000/yr." }
    ],
    helpline: "Karnataka DWCD Helpline: 080-22355984 / Childline: 1098",
    email: "dwcd-karnataka@gov.in",
    rules: [{ fact: "gender", op: "eq", value: "FEMALE" }, { fact: "state", op: "eq", value: "Karnataka" }, { fact: "income", op: "lte", value: 120000 }]
  },

  "karnataka-udyogini": {
    id: "karnataka-udyogini",
    name: "Udyogini Scheme (Karnataka)",
    title: "Udyogini Scheme (Karnataka)",
    category: "Women & Child Welfare",
    subcategory: "Women empowerment",
    sdg: "SDG 5: Gender Equality",
    level: "State",
    state: "Karnataka",
    stateCoverage: "All 31 districts of Karnataka",
    department: "Karnataka State Women's Development Corporation (KSWDC)",
    targetBeneficiary: "Aspiring women micro-entrepreneurs in rural and semi-urban Karnataka",
    beneficiaryType: "Women Entrepreneurs",
    minAge: 18,
    maxAge: 55,
    incomeMax: 150000,
    status: "Active",
    launchYear: 1997,
    officialWebsite: "https://kswdc.karnataka.gov.in",
    applicationUrl: "https://sevasindhuservices.karnataka.gov.in",
    sourceUrl: "https://kswdc.karnataka.gov.in/info-2/Udyogini/en",
    description: "Subsidized business loans up to ₹3,00,000 with a 30% to 50% government capital subsidy for women establishing small enterprises, tailoring shops, beauty parlors, or dairy units.",
    detailedDescription: "The Udyogini Scheme prevents women micro-entrepreneurs from falling prey to predatory private moneylenders. Implemented by the Karnataka State Women's Development Corporation through scheduled and rural commercial banks, it provides term loans up to ₹3,00,000 for 88 approved micro-business sectors (tailoring, bakery, beauty parlor, handicrafts, grocery, dairy, pickle manufacture). SC and ST women receive a 50% capital subsidy (up to ₹1,50,000), while General and OBC women receive a 30% capital subsidy (up to ₹90,000).",
    purpose: "Fosters self-reliance and financial independence among rural and marginalized women through subsidized capital assets and entrepreneurship training, supporting SDG 5 and SDG 8.",
    benefits: "Bank loan up to ₹3,00,000 with 50% capital subsidy for SC/ST women (up to ₹1,50,000) and 30% subsidy for General/OBC women (up to ₹90,000), plus free entrepreneurship development training.",
    financialBenefit: "Subsidy of ₹90,000 (General/OBC) to ₹1,50,000 (SC/ST) on bank loan up to ₹3 Lakh",
    benefitFrequency: "One-time capital subsidy per woman entrepreneur",
    impact: "Has empowered over 2.5 lakh women in Karnataka to own sustainable micro-businesses and generate family livelihoods.",
    specificAdvantages: "No private moneylender exploitation; government bears a major portion of the debt as a non-repayable grant.",
    detailedEligibility: {
      ageRequirement: "18 to 55 years.",
      genderRequirement: "Female only.",
      incomeLimit: "General / OBC: Annual family income up to ₹1,50,000. SC/ST: No income limit.",
      educationRequirement: "None.",
      occupationRequirement: "Aspiring or existing self-employed woman micro-entrepreneur.",
      casteCategoryRequirement: "Open to all categories (special priority and higher subsidy for SC/ST/Divorced/Widowed women).",
      residenceRequirement: "Resident of Karnataka.",
      familyConditions: "No previous loan default with any bank or government corporation."
    },
    mandatoryConditions: [
      "Must be an adult woman resident of Karnataka aged between 18 and 55",
      "Business project must fall under the 88 approved micro-enterprise activities",
      "Bank loan sanction from a designated commercial or regional rural bank"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Women whose family income exceeds ₹1,50,000 (for General/OBC categories)",
      "Defaulters of prior bank or government loans"
    ],
    documents: [
      { name: "Project Proposal / Business Quotation", why: "Specifies machinery, equipment, and working capital costs.", mandatory: true, issuingAuthority: "Machinery Vendor / Applicant", format: "Quotation / Project Report", validity: "Current" },
      { name: "Caste and Income Certificate", why: "Determines subsidy percentage (30% vs 50%).", mandatory: true, issuingAuthority: "Tahsildar (Nadakacheri)", format: "RD Number", validity: "Valid" },
      { name: "Aadhaar Card", why: "Identity and address proof.", mandatory: true, issuingAuthority: "UIDAI", format: "Copy", validity: "Permanent" },
      { name: "Bank Passbook & Passport Size Photos", why: "For loan disbursement.", mandatory: true, issuingAuthority: "Bank", format: "Copies", validity: "Active" }
    ],
    applicationMode: "Online via Seva Sindhu & Offline through District Deputy Director KSWDC",
    process: [
      "Step 1: Choose a micro-business activity from the approved list (e.g. tailoring, dairy, grocery, packaging).",
      "Step 2: Obtain machinery quotation from an authorized vendor.",
      "Step 3: Apply online on sevasindhuservices.karnataka.gov.in under Udyogini Scheme.",
      "Step 4: Upload Aadhaar, Caste/Income certificate, and project quotation.",
      "Step 5: District KSWDC selection committee interviews the applicant and recommends the file to the local bank.",
      "Step 6: Bank sanctions the loan; KSWDC credits the capital subsidy portion directly to the loan account."
    ],
    offlineProcess: "Collect and submit application forms at the office of the Deputy Director, Women and Child Development Department in your district headquarters.",
    commonMistakes: [
      "Submitting applications without verified vendor machinery quotations.",
      "General/OBC applicants failing to submit income certificates below the ₹1.5 Lakh ceiling."
    ],
    openingDate: "Annual applications open from July to September each year",
    processingTime: "30 to 60 days following district committee review",
    renewalRequired: "One-time scheme",
    trackingProcedure: "Track application status on Seva Sindhu or contact the District KSWDC Development Officer.",
    correctionProcedure: "Visit the District Women's Development Corporation office to update bank details.",
    disbursementMethod: "Direct credit of subsidy into applicant's bank loan account (Back-ended Subsidy)",
    disbursementDetails: "Bank disburses the loan directly to the machinery supplier. Government subsidy is held in a subsidy reserve fund and adjusted against loan repayment upon successful operation.",
    faqs: [
      { q: "Is there any collateral security needed?", a: "For loans up to ₹1,60,000, banks under RBI guidelines do not require collateral security." },
      { q: "Can unmarried or widowed women apply?", a: "Yes, special preference is given to widows, destitute women, and disabled women." }
    ],
    helpline: "KSWDC Bangalore: 080-22266858 / 080-22384661",
    email: "kswdcho@gmail.com",
    rules: [{ fact: "gender", op: "eq", value: "FEMALE" }, { fact: "state", op: "eq", value: "Karnataka" }]
  },

  // ==========================================
  // CATEGORY 5: Farmers & Agriculture
  // ==========================================
  "karnataka-ganga-kalyana": {
    id: "karnataka-ganga-kalyana",
    name: "Ganga Kalyana Scheme (Karnataka Free Irrigation Wells)",
    title: "Ganga Kalyana Scheme (Karnataka Free Irrigation Wells)",
    category: "Farmers & Agriculture",
    subcategory: "Irrigation",
    sdg: "SDG 6: Clean Water and Sanitation",
    level: "State",
    state: "Karnataka",
    stateCoverage: "All 31 districts of Karnataka",
    department: "Social Welfare, Backward Classes & Minorities Welfare Departments, Government of Karnataka",
    targetBeneficiary: "Small and marginal farmers belonging to SC, ST, OBC, and minority communities",
    beneficiaryType: "Farmers",
    minAge: 18,
    maxAge: 70,
    incomeMax: 200000,
    status: "Active",
    launchYear: 2001,
    officialWebsite: "https://kmdc.karnataka.gov.in",
    applicationUrl: "https://sevasindhuservices.karnataka.gov.in",
    sourceUrl: "https://kswdc.karnataka.gov.in",
    description: "100% state-subsidized individual or collective borewell drilling, pump installation, pipeline fitting, and free electricity energization for small and marginal underprivileged farmers.",
    detailedDescription: "The Ganga Kalyana Scheme provides perennial irrigation facilities to agricultural land owned by small and marginal farmers belonging to Scheduled Castes, Scheduled Tribes, Backward Classes, and Religious Minorities. The state government finances the complete cost of drilling an open well or borewell, installing submersible pumpsets, laying irrigation pipelines, and coordinates with ESCOMs for free electrical energization. Subsidies range from ₹1.5 Lakh to ₹4.5 Lakh depending on individual or group borewell schemes.",
    purpose: "Transforms dry, rain-fed agricultural lands into fertile multi-crop irrigated farms, doubling farmer incomes and combating agrarian distress, supporting SDG 1, SDG 2, and SDG 6.",
    benefits: "100% free borewell drilling, high-efficiency submersible pump set, PVC delivery pipes, and free agricultural power connection at zero cost to the beneficiary farmer.",
    financialBenefit: "Complete irrigation setup worth ₹1,50,000 to ₹4,50,000 provided 100% free by the Government",
    benefitFrequency: "One-time permanent farm infrastructure grant",
    impact: "Has enabled over 4 lakh marginalized farming families in Karnataka to switch from precarious single-season dryland farming to year-round profitable vegetable, fruit, and grain cultivation.",
    specificAdvantages: "Turnkey government execution: state development corporations directly contract certified drilling agencies and power utilities with zero upfront farmer expenses.",
    detailedEligibility: {
      ageRequirement: "18 to 70 years.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Rural annual income up to ₹2,00,000.",
      educationRequirement: "None.",
      occupationRequirement: "Small or marginal farmer.",
      casteCategoryRequirement: "SC, ST, OBC (Cat-1, 2A, 2B, 3A, 3B), or Religious Minorities.",
      residenceRequirement: "Resident of Karnataka.",
      familyConditions: "Must own agricultural land: minimum 1.5 acres for individual scheme, or 5+ acres combined for group scheme."
    },
    mandatoryConditions: [
      "Must be a small or marginal farmer owning between 1.5 and 5 acres of agricultural land (or collective group of farmers owning 5+ acres)",
      "Land must not have an existing operational borewell or canal irrigation source",
      "Valid Caste & Income certificate issued by Revenue Authority (Nadakacheri)"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Farmers owning more than 5 acres of irrigated land",
      "Farmlands with existing energized borewells or permanent river/canal irrigation"
    ],
    documents: [
      { name: "RTC / Pahani (Record of Rights, Tenancy and Crops)", why: "Proof of agricultural land ownership.", mandatory: true, issuingAuthority: "Bhoomi Revenue Portal, Karnataka", format: "Original RTC with mutation extract", validity: "Current Year" },
      { name: "Small / Marginal Farmer Certificate", why: "Confirms small farmer classification.", mandatory: true, issuingAuthority: "Tahsildar / Village Administrative Officer", format: "Official Certificate", validity: "Valid" },
      { name: "Caste and Income Certificate (RD Number)", why: "Verifies reservation category and income limit.", mandatory: true, issuingAuthority: "Nadakacheri Revenue Dept", format: "RD Number", validity: "Valid" },
      { name: "Aadhaar Card & Bank Passbook", why: "Identity proof and tracking.", mandatory: true, issuingAuthority: "UIDAI / Bank", format: "Copies", validity: "Permanent" }
    ],
    applicationMode: "Online via Seva Sindhu Portal & Offline at District Development Corporation Offices",
    process: [
      "Step 1: Obtain updated RTC (Pahani) from Bhoomi portal and Small Farmer Certificate from Tahsildar.",
      "Step 2: Log on to sevasindhuservices.karnataka.gov.in and search for 'Ganga Kalyana Scheme'.",
      "Step 3: Select the appropriate development corporation (Dr. B.R. Ambedkar SC/ST Corp, D. Devaraj Urs BCWD Corp, or KMDC).",
      "Step 4: Enter your RTC survey numbers and upload land documents.",
      "Step 5: District Committee chaired by the local MLA scrutinizes applications and selects eligible beneficiaries.",
      "Step 6: State hydrogeologist conducts water table survey; government contractor drills borewell, installs pump set, and coordinates electrical connection."
    ],
    offlineProcess: "Apply through Grama One citizen centres or visit the District Executive Officer of Dr. B.R. Ambedkar Development Corporation or KMDC.",
    commonMistakes: [
      "Submitting outdated RTCs with pending mutation disputes.",
      "Applying for land that already has an energized borewell connection registered under ESCOMs."
    ],
    openingDate: "Annual notification issued between June and August",
    processingTime: "60 to 90 days from district committee approval to drilling and energization",
    renewalRequired: "One-time permanent scheme",
    trackingProcedure: "Track application status on Seva Sindhu portal using your Ganga Kalyana acknowledgment number.",
    correctionProcedure: "Rectify survey number disputes at the Taluk Tahsildar office.",
    disbursementMethod: "Direct turnkey asset delivery by Government Corporation",
    disbursementDetails: "No cash is handed to the farmer. The state corporation pays hydrogeologists, drilling contractors, pumpset vendors, and electricity boards directly on behalf of the farmer.",
    faqs: [
      { q: "What if the drilled borewell fails to yield water?", a: "Under government guidelines, if a drilled well is hydro-geologically dry, the agency is authorized to drill a second attempt subject to committee clearance." },
      { q: "Do I have to pay electricity charges?", a: "No. Agricultural pumpsets up to 10 HP in Karnataka receive 100% free electricity under the state free power subsidy." }
    ],
    helpline: "Karnataka Social Welfare Helpline: 080-22207784 / KMDC: 080-22864209",
    email: "gangakalyana-support@karnataka.gov.in",
    rules: [{ fact: "occupation", op: "eq", value: "FARMER" }, { fact: "state", op: "eq", value: "Karnataka" }]
  },

  "karnataka-raitha-siri": {
    id: "karnataka-raitha-siri",
    name: "Raitha Siri Scheme (Karnataka Millet Farming Incentive)",
    title: "Raitha Siri Scheme (Karnataka Millet Farming Incentive)",
    category: "Farmers & Agriculture",
    subcategory: "Agricultural subsidies",
    sdg: "SDG 2: Zero Hunger",
    level: "State",
    state: "Karnataka",
    stateCoverage: "All 31 districts of Karnataka",
    department: "Department of Agriculture, Government of Karnataka",
    targetBeneficiary: "Farmers cultivating minor millets (Siri Dhanya: Ragi, Jowar, Foxtail, Little, Kodo, Barnyard, Proso millets)",
    beneficiaryType: "Farmers",
    minAge: 18,
    maxAge: 85,
    incomeMax: null,
    status: "Active",
    launchYear: 2019,
    officialWebsite: "https://raitamitra.karnataka.gov.in",
    applicationUrl: "https://fruits.karnataka.gov.in",
    sourceUrl: "https://raitamitra.karnataka.gov.in/info-2/Raitha+Siri/en",
    description: "Direct financial incentive of ₹10,000 per hectare (up to ₹20,000 for 2 hectares) transferred straight into the bank accounts of farmers cultivating nutrient-rich millets.",
    detailedDescription: "Raitha Siri is an innovative agrarian initiative to revive nutritious, climate-resilient millet cultivation across Karnataka. Karnataka is recognized as the 'Millet Capital of India'. Under this scheme, farmers growing specified minor millets (Navane/Foxtail, Same/Little, Haraka/Kodo, Korale/Brown top, Baragu/Proso, and Oodhalu/Barnyard millets) receive a direct cash incentive of ₹10,000 per hectare, up to a maximum limit of ₹20,000 for two hectares. The incentive is disbursed directly into the farmer's bank account via the FRUITS portal after satellite/ground crop verification.",
    purpose: "Promotes climate-resilient dryland crops, enhances soil fertility, guarantees crop diversification, and elevates small farmer earnings, directly supporting SDG 2 (Zero Hunger) and SDG 13 (Climate Action).",
    benefits: "Direct financial incentive of ₹10,000 per hectare (up to ₹20,000 for 2 hectares) credited via DBT, in addition to subsidized seeds and micro-nutrients.",
    financialBenefit: "₹10,000 per hectare (maximum ₹20,000 for 2 hectares) direct cash incentive",
    benefitFrequency: "Seasonal cash incentive per crop cycle (Kharif / Rabi)",
    impact: "Has brought over 1.5 lakh hectares under nutritious organic millet cultivation, boosting farmer net margins in drought-prone districts.",
    specificAdvantages: "Millets require minimal water and fertilizers; the ₹10,000/ha subsidy directly offsets all labor and land preparation expenses.",
    detailedEligibility: {
      ageRequirement: "18 years and above.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "No income limit.",
      educationRequirement: "None.",
      occupationRequirement: "Millet-cultivating farmer.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Domicile of Karnataka.",
      familyConditions: "Must have land registered under FRUITS (Farmer Registration and Unified Beneficiary Information System)."
    },
    mandatoryConditions: [
      "Must own or cultivate agricultural land in Karnataka registered with a valid FRUITS ID (FID)",
      "Must cultivate specified minor millets during the notified Kharif or Rabi season",
      "Crop sowing must be verified and recorded in the Karnataka Crop Survey (Bele Samikshe) portal"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Farmers growing non-millet commercial cash crops (such as sugarcane, tobacco, or cotton)",
      "Farmlands where millet cultivation is not validated on the official Crop Survey mobile app"
    ],
    documents: [
      { name: "FRUITS ID (Farmer Registration & Unified Beneficiary Information System)", why: "Unified single farmer identity in Karnataka.", mandatory: true, issuingAuthority: "Dept of Agriculture, Karnataka", format: "FID Number", validity: "Permanent" },
      { name: "RTC / Pahani", why: "Proof of land cultivation.", mandatory: true, issuingAuthority: "Bhoomi Revenue System", format: "Online record", validity: "Current" },
      { name: "Crop Survey (Bele Samikshe) Registration Entry", why: "Digital photographic verification of standing millet crop.", mandatory: true, issuingAuthority: "Crop Survey App / Village Surveyor", format: "Mobile survey record", validity: "Seasonal" },
      { name: "Aadhaar-Linked Bank Account", why: "For DBT cash incentive transfer.", mandatory: true, issuingAuthority: "Commercial / Grameena Bank", format: "NPCI seeded", validity: "Active" }
    ],
    applicationMode: "Online via Karnataka FRUITS Portal & Automatically via Crop Survey (Bele Samikshe)",
    process: [
      "Step 1: Obtain a FRUITS ID (FID) at your local Raitha Samparka Kendra (RSK) or on fruits.karnataka.gov.in.",
      "Step 2: Sow notified minor millets (Foxtail, Little, Kodo, Brown top, Barnyard, Proso) during Kharif or Rabi season.",
      "Step 3: Register your crop on the 'Farmer Crop Survey' (Bele Samikshe) mobile app or through the village private surveyor.",
      "Step 4: Agriculture officer verifies the standing crop plot on the portal.",
      "Step 5: The state system automatically calculates the eligible area (₹10,000/ha up to 2 ha).",
      "Step 6: Cash incentive is credited directly into the farmer's bank account via Karnataka State DBT."
    ],
    offlineProcess: "Visit your local Raitha Samparka Kendra (RSK) in your hobli. The Agriculture Officer assists with FRUITS registration and crop entry.",
    commonMistakes: [
      "Missing the Farmer Crop Survey (Bele Samikshe) deadline, which prevents the government system from confirming standing millet crops.",
      "Bank account not mapped in the FRUITS database."
    ],
    openingDate: "Seasonal enrollment aligned with Kharif (June-August) and Rabi (October-December) seasons",
    processingTime: "Cash credited within 30 to 45 days after crop survey verification",
    renewalRequired: "Seasonal registration for each millet cultivation season",
    trackingProcedure: "Check payment status on fruits.karnataka.gov.in by entering your FID number or mobile number.",
    correctionProcedure: "Visit the Raitha Samparka Kendra to resolve crop survey objections before the notified objection deadline.",
    disbursementMethod: "Direct Benefit Transfer (DBT) via FRUITS / Karnataka State DBT",
    disbursementDetails: "Funds transferred electronically via NPCI directly into the bank account linked with the farmer's FRUITS ID.",
    faqs: [
      { q: "Is Ragi or Jowar included under Raitha Siri?", a: "Raitha Siri focuses specifically on the six nutritious minor millets (Foxtail, Little, Kodo, Brown top, Proso, Barnyard). Ragi and Jowar have separate Minimum Support Price (MSP) procurement programs." },
      { q: "What is the maximum subsidy a farmer can get?", a: "₹20,000 for 2 hectares (5 acres) of verified millet crop." }
    ],
    helpline: "Kisan Call Centre: 1800-180-1551 / Karnataka Agri Helpline: 080-22212861",
    email: "agridir-ka@nic.in",
    rules: [{ fact: "occupation", op: "eq", value: "FARMER" }, { fact: "state", op: "eq", value: "Karnataka" }]
  },

  "soil-health-card": {
    id: "soil-health-card",
    name: "National Soil Health Card Scheme",
    title: "National Soil Health Card Scheme",
    category: "Farmers & Agriculture",
    subcategory: "Agricultural subsidies",
    sdg: "SDG 2: Zero Hunger",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 Union Territories",
    department: "Department of Agriculture & Farmers Welfare, Ministry of Agriculture",
    targetBeneficiary: "All agricultural landholders and farming families across India",
    beneficiaryType: "Farmers",
    minAge: 18,
    maxAge: 90,
    incomeMax: null,
    status: "Active",
    launchYear: 2015,
    officialWebsite: "https://soilhealth.dac.gov.in",
    applicationUrl: "https://soilhealth.dac.gov.in",
    sourceUrl: "https://agricoop.nic.in",
    description: "Pan-India agricultural mission issuing biennial customized soil nutrient health report cards to over 23 crore farm plots, optimizing chemical fertilizer use and raising crop productivity.",
    detailedDescription: "The Soil Health Card (SHC) scheme provides every farmer in India with customized crop-wise fertilizer and soil amendment recommendations once every two years. Soil samples are collected using GPS coordinates and tested across 12 crucial parameters: primary nutrients (N, P, K), secondary nutrients (S), micronutrients (Zn, Fe, Cu, Mn, Bo), and physical parameters (pH, Electrical Conductivity, Organic Carbon). Farmers save 15-20% on fertilizer costs while improving soil vitality.",
    purpose: "Prevents rampant soil degradation and excessive urea usage, promotes balanced scientific fertilization, and maximizes per-hectare crop yields, supporting SDG 2 (Zero Hunger) and SDG 15 (Life on Land).",
    benefits: "Free comprehensive laboratory testing of 12 soil parameters every 2 years, complete with printed and digital Soil Health Cards with customized dosage guidelines for 6 preferred crops.",
    financialBenefit: "Free scientific soil testing worth ₹1,200 per sample + 15% to 20% average savings on chemical fertilizers",
    benefitFrequency: "Issued once every 2 years (biennial cycle)",
    impact: "Has lowered urea consumption by 8-10%, improved fertilizer use efficiency, and raised farm yields by 10-12% across varied agro-climatic zones.",
    specificAdvantages: "Exact nutrient advisory eliminates wasteful over-spending on chemical fertilizers and restores natural soil microbial health.",
    detailedEligibility: {
      ageRequirement: "18 years and above.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "No income limit; open to all landholding farmers.",
      educationRequirement: "None.",
      occupationRequirement: "Farmer / Landowner / Tenant cultivator.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Must cultivate agricultural land."
    },
    mandatoryConditions: [
      "Must own or cultivate agricultural land in India",
      "Allow soil sample collection from the designated farm grid by the village agriculture assistant"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Non-agricultural, commercial, or residential plots"
    ],
    documents: [
      { name: "Land Record / RTC / Khasra / Khatauni", why: "Identifies survey plot and GPS coordinates.", mandatory: true, issuingAuthority: "State Revenue Department", format: "Document copy or digital number", validity: "Current" },
      { name: "Aadhaar Card", why: "Farmer identification.", mandatory: true, issuingAuthority: "UIDAI", format: "Copy", validity: "Permanent" },
      { name: "Mobile Number", why: "For receiving SMS test results and digital card download.", mandatory: true, issuingAuthority: "Telecom Provider", format: "Active number", validity: "Active" }
    ],
    applicationMode: "Offline sample collection via Village Agriculture Assistant & Online via soilhealth.dac.gov.in",
    process: [
      "Step 1: Contact your local Village Agriculture Assistant (VAA) or Krishi Vigyan Kendra (KVK).",
      "Step 2: Agriculture staff collect soil samples from your farm grid (depth 0-15 cm) using GPS coordinates.",
      "Step 3: Sample is tagged with a unique barcode and sent to the district Soil Testing Laboratory (STL).",
      "Step 4: Soil parameters (N, P, K, pH, Zinc, Organic Carbon, etc.) are analyzed.",
      "Step 5: Printed Soil Health Card is delivered to the farmer, with SMS alert containing digital download link.",
      "Step 6: Follow the prescribed dosage recommendations for your upcoming crops."
    ],
    offlineProcess: "Walk into your local Block Agriculture Office, Raitha Samparka Kendra, or Krishi Vigyan Kendra (KVK) to request farm soil testing.",
    commonMistakes: [
      "Collecting soil samples immediately after fertilizer application, which severely skews laboratory readings.",
      "Not following the customized micronutrient recommendations printed on the card."
    ],
    openingDate: "Continuous biennial testing cycles throughout the year",
    processingTime: "15 to 30 days from sample collection to card issuance",
    renewalRequired: "Updated every 2 years",
    trackingProcedure: "Track sample status on soilhealth.dac.gov.in by entering your state, district, and survey/farmer name.",
    correctionProcedure: "Contact the District Soil Testing Officer to rectify farmer name or survey number.",
    disbursementMethod: "Direct delivery of printed laminated Soil Health Card and online PDF download",
    disbursementDetails: "Free physical card distributed at Gram Panchayat meetings or downloadable via the portal.",
    faqs: [
      { q: "Is there any testing fee?", a: "No. The Soil Health Card scheme is 100% free for all farmers." },
      { q: "How many parameters are tested?", a: "12 parameters: Nitrogen, Phosphorus, Potassium, Sulphur, Zinc, Iron, Copper, Manganese, Boron, pH, EC, and Organic Carbon." }
    ],
    helpline: "Kisan Call Centre: 1800-180-1551 (Toll-Free, 22 languages)",
    email: "helpdesk-soil@gov.in",
    rules: [{ fact: "occupation", op: "eq", value: "FARMER" }]
  },

  // ==========================================
  // CATEGORY 6: Employment & Skill Development
  // ==========================================
  "pmkvy": {
    id: "pmkvy",
    name: "Pradhan Mantri Kaushal Vikas Yojana 4.0 (PMKVY 4.0)",
    title: "Pradhan Mantri Kaushal Vikas Yojana 4.0 (PMKVY 4.0)",
    category: "Employment & Skill Development",
    subcategory: "Skill training",
    sdg: "SDG 8: Decent Work & Economic Growth",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 Union Territories",
    department: "Ministry of Skill Development and Entrepreneurship (MSDE) & NSDC",
    targetBeneficiary: "School/college dropouts, unemployed youth, and informal workers seeking industry certification",
    beneficiaryType: "Job Seekers & Youth",
    minAge: 15,
    maxAge: 45,
    incomeMax: null,
    status: "Active",
    launchYear: 2015,
    officialWebsite: "https://www.pmkvyofficial.org",
    applicationUrl: "https://www.skillindiadigital.gov.in",
    sourceUrl: "https://www.msde.gov.in",
    description: "Flagship skill certification scheme offering 100% free industry-aligned technical and digital skill training, government certification, and placement assistance to over 1.4 crore youth.",
    detailedDescription: "PMKVY 4.0 is the Union Government's flagship vocational training initiative implemented through the National Skill Development Corporation (NSDC). It provides free, outcome-driven skill training across 30+ industrial sectors (including AI, robotics, drone technology, green hydrogen, electronics, healthcare, solar technology, logistics, and retail). Beneficiaries receive free course materials, assessment, recognized NSQF certification, accident insurance, and job placement facilitation or entrepreneurship support.",
    purpose: "Bridges the acute industrial skill gap, equips youth with future-ready technical skills, boosts domestic manufacturing employment, and advances SDG 8.",
    benefits: "100% free training at accredited Pradhan Mantri Kaushal Kendras (PMKK), free NSQF-aligned assessment, Skill India Digital certificate, monetary reward / conveyance allowance, and placement assistance.",
    financialBenefit: "Free certified training worth ₹15,000 to ₹35,000 per candidate + Post-placement financial support",
    benefitFrequency: "One-time certified skill course per candidate",
    impact: "Over 1.37 crore youth trained; has significantly improved entry-level wage employment in organized logistics, IT-enabled services, retail, and manufacturing.",
    specificAdvantages: "Industry-endorsed national certification recognized by leading private employers and government recruitment boards alike.",
    detailedEligibility: {
      ageRequirement: "15 to 45 years.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "No income limit.",
      educationRequirement: "Varies by job role (from 5th pass up to Graduate/ITI depending on sector skill qualification pack).",
      occupationRequirement: "Unemployed youth, school dropouts, or informal workers seeking RPL (Recognition of Prior Learning).",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "None."
    },
    mandatoryConditions: [
      "Must possess a valid Aadhaar card and Aadhaar-linked mobile number",
      "Must have an active bank account for receiving direct post-placement monetary allowance",
      "Minimum 70% attendance during training and passing the standardized third-party assessment"
    ],
    conditionalRequirements: [
      "Recognition of Prior Learning (RPL) candidates need proof of minimum 1-year prior informal work experience."
    ],
    ineligibility: [
      "Candidates who have already completed the same job role certification under earlier PMKVY versions",
      "Candidates failing the final biometric assessment"
    ],
    documents: [
      { name: "Aadhaar Card", why: "Mandatory biometric e-KYC and attendance tracking via AEBAS.", mandatory: true, issuingAuthority: "UIDAI", format: "Original / DigiLocker", validity: "Permanent" },
      { name: "Educational Marksheet / School Leaving Certificate", why: "Verifies minimum qualification for the chosen job role.", mandatory: true, issuingAuthority: "Education Board / School", format: "Photocopy", validity: "Permanent" },
      { name: "Aadhaar-Linked Bank Account Details", why: "For conveyance and post-placement incentive DBT.", mandatory: true, issuingAuthority: "Bank", format: "Passbook copy / Cancelled Cheque", validity: "Active" }
    ],
    applicationMode: "Online via Skill India Digital Hub (SIDH) & Offline at Pradhan Mantri Kaushal Kendras (PMKK)",
    process: [
      "Step 1: Download the 'Skill India Digital' app or visit skillindiadigital.gov.in.",
      "Step 2: Register using your mobile number and complete your Aadhaar e-KYC.",
      "Step 3: Browse courses by sector (e.g., Drone Operator, Solar Technician, AI Data Annotator, Healthcare Assistant).",
      "Step 4: Select an accredited training centre (PMKK) in your district and enroll.",
      "Step 5: Attend classroom and practical hands-on training (typically 200 to 400 hours).",
      "Step 6: Undergo third-party practical and theoretical assessment to receive your government certificate and attend campus placement drives."
    ],
    offlineProcess: "Walk into any accredited Pradhan Mantri Kaushal Kendra (PMKK) in your district. Counselors will guide you through course selection and registration.",
    commonMistakes: [
      "Failing to maintain the mandatory 70% biometric attendance, which disqualifies the candidate from the final exam.",
      "Paying fees to unauthorized agents (PMKVY training is 100% free under government mandate)."
    ],
    openingDate: "Continuous year-round batches",
    processingTime: "Course duration spans 2 to 4 months",
    renewalRequired: "Certificate valid for lifetime; can upskill in higher NSQF levels after 1 year",
    trackingProcedure: "Track candidate progress and download digital certificate directly on skillindiadigital.gov.in.",
    correctionProcedure: "Update name/mobile details via Skill India Digital candidate profile.",
    disbursementMethod: "Direct training fee settlement to PMKK + DBT conveyance allowance to candidate account",
    disbursementDetails: "Training costs paid directly by NSDC to training partners upon candidate certification and verified placement.",
    faqs: [
      { q: "Is PMKVY training free?", a: "Yes. 100% of the training, examination, and certification fees are funded by the Ministry of Skill Development." },
      { q: "Do students get jobs after training?", a: "Yes. Accredited centres organize mandatory job melas and placement drives with employer partners." }
    ],
    helpline: "Skill India Toll-Free: 080-69223300 / 1800-123-9626",
    email: "pmkvy-helpdesk@nsdcindia.org",
    rules: [{ fact: "age", op: "gte", value: 15 }, { fact: "age", op: "lte", value: 45 }]
  },

  "pm-internship-scheme": {
    id: "pm-internship-scheme",
    name: "PM Internship Scheme in Top Companies",
    title: "PM Internship Scheme in Top Companies",
    category: "Employment & Skill Development",
    subcategory: "Apprenticeships",
    sdg: "SDG 8: Decent Work & Economic Growth",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 Union Territories",
    department: "Ministry of Corporate Affairs (MCA)",
    targetBeneficiary: "Youth aged 21-24 who have completed 10th, 12th, ITI, Polytechnic Diploma, or non-technical Degrees",
    beneficiaryType: "Job Seekers & Youth",
    minAge: 21,
    maxAge: 24,
    incomeMax: 800000,
    status: "Active",
    launchYear: 2024,
    officialWebsite: "https://pminternship.mca.gov.in",
    applicationUrl: "https://pminternship.mca.gov.in",
    sourceUrl: "https://www.mca.gov.in",
    description: "Landmark national scheme providing 1 crore youth with 12-month paid internships in India's top 500 companies with a monthly stipend of ₹5,000 plus ₹6,000 one-time grant.",
    detailedDescription: "The PM Internship Scheme is a historic public-private initiative announced in the Union Budget to provide 1 crore young Indians with valuable 12-month workplace experience across India's top 500 companies (such as Tata, Reliance, Mahindra, L&T, HDFC, Infosys, ITC, Maruti). Interns receive a monthly stipend of ₹5,000 (₹4,500 contributed by Central Government via DBT + ₹500 from the company's CSR fund) and a one-time grant of ₹6,000 for incidentals, alongside accidental insurance coverage under PMSBY.",
    purpose: "Transforms non-technical and vocational graduates into industry-ready professionals by bridging the gap between classroom theory and real corporate environments, supporting SDG 8.",
    benefits: "Monthly financial stipend of ₹5,000 for 12 months (total ₹60,000) + one-time grant of ₹6,000 + comprehensive work experience in India's top corporate houses + insurance cover.",
    financialBenefit: "₹5,000 monthly stipend + ₹6,000 one-time grant (Total ₹66,000 direct financial support)",
    benefitFrequency: "Monthly stipend for 12 months",
    impact: "Dramatically enhances graduate employability, gives first-generation college goers direct corporate exposure, and builds a high-calibre junior talent pipeline.",
    specificAdvantages: "Direct placement in premier corporate enterprises without needing influential references; transparent AI-enabled merit-preference portal matching.",
    detailedEligibility: {
      ageRequirement: "21 to 24 years (as of application cutoff date).",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Family income must not exceed ₹8,00,000 per year.",
      educationRequirement: "Passed Class 10, Class 12, ITI, Polytechnic Diploma, or non-professional Degree (BA, BSc, BCom, BBA, BCA).",
      occupationRequirement: "Not engaged in full-time employment or full-time education.",
      casteCategoryRequirement: "Open to all categories (General, OBC, SC, ST, EWS).",
      residenceRequirement: "Citizen of India.",
      familyConditions: "No family member can be an active income tax payer or regular government employee."
    },
    mandatoryConditions: [
      "Age strictly between 21 and 24 years",
      "Not enrolled in any full-time regular higher education program during the internship",
      "Not currently employed in a formal job with PF/ESI contributions",
      "Family annual income below ₹8 Lakh and no family member paying income tax",
      "Aadhaar-seeded bank account for receiving government DBT stipend"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Graduates from elite engineering/medical institutes (IITs, IIMs, IISc, NLU, AIIMS)",
      "Holders of professional degrees like B.Tech, M.Tech, MBBS, BDS, MBA, CA, CS, CMA",
      "Individuals whose parents are permanent government employees or income tax payees"
    ],
    documents: [
      { name: "Educational Certificates (10th / 12th / ITI / Diploma / Degree)", why: "Verifies eligibility and educational qualification.", mandatory: true, issuingAuthority: "Board / University", format: "Scanned PDF / DigiLocker", validity: "Permanent" },
      { name: "Aadhaar Card", why: "Biometric e-KYC verification.", mandatory: true, issuingAuthority: "UIDAI", format: "Digital e-KYC", validity: "Permanent" },
      { name: "Self-Declaration of Family Income and Tax Status", why: "Confirms non-taxpayer status under ₹8 Lakh.", mandatory: true, issuingAuthority: "Applicant Self-Declaration", format: "Online Declaration Form", validity: "Current" },
      { name: "Aadhaar-Linked Bank Account Details", why: "For monthly ₹4,500 DBT stipend transfer.", mandatory: true, issuingAuthority: "Bank", format: "NPCI seeded", validity: "Active" }
    ],
    applicationMode: "100% Online via MCA PM Internship Portal (pminternship.mca.gov.in)",
    process: [
      "Step 1: Visit pminternship.mca.gov.in and click 'Register as Candidate'.",
      "Step 2: Enter Aadhaar number and verify via OTP.",
      "Step 3: Upload educational credentials and select your career interest areas.",
      "Step 4: Browse internship openings across the top 500 companies filtered by district/state.",
      "Step 5: Select up to 5 internship preferences (role and location).",
      "Step 6: Companies review matched candidate profiles and issue digital offer letters.",
      "Step 7: Accept the offer letter, join the company, and receive your monthly stipend via DBT."
    ],
    offlineProcess: "Online application only. Local Common Service Centres (CSC) assist rural youth with portal registration.",
    commonMistakes: [
      "Applying if you hold a B.Tech or professional degree (the scheme is exclusively reserved for 10th, 12th, ITI, Diploma, and non-technical general graduates).",
      "Providing a bank account that is not mapped to Aadhaar via NPCI."
    ],
    openingDate: "Biannual application cycles (October and April)",
    processingTime: "Selection results published within 3 to 4 weeks of cycle closing",
    renewalRequired: "12-month non-renewable internship",
    trackingProcedure: "Log into pminternship.mca.gov.in using candidate credentials to view application status and offer letters.",
    correctionProcedure: "Edit candidate profile details before the notified application cycle lock date.",
    disbursementMethod: "Direct Benefit Transfer (DBT via PFMS) + Direct CSR transfer from Company",
    disbursementDetails: "Central Government credits ₹4,500 directly into the intern's bank account every month; the partner company credits ₹500 directly into the same account.",
    faqs: [
      { q: "Is an internship offer guaranteed for all applicants?", a: "No. Matching is automated based on company requirements, merit, and candidate district preferences." },
      { q: "Can interns be hired permanently by the company?", a: "Yes. Top 500 companies frequently offer regular full-time employment to outstanding interns upon completion of the 12-month period." }
    ],
    helpline: "PM Internship National Helpdesk: 1800-11-6001 / 011-23384500",
    email: "pminternship-mca@gov.in",
    rules: [{ fact: "age", op: "gte", value: 21 }, { fact: "age", op: "lte", value: 24 }]
  },

  // ==========================================
  // CATEGORY 7: Housing & Basic Needs
  // ==========================================
  "karnataka-gruha-jyothi": {
    id: "karnataka-gruha-jyothi",
    name: "Gruha Jyothi Scheme (Karnataka Free Domestic Electricity)",
    title: "Gruha Jyothi Scheme (Karnataka Free Domestic Electricity)",
    category: "Housing & Basic Needs",
    subcategory: "Electricity",
    sdg: "SDG 7: Affordable and Clean Energy",
    level: "State",
    state: "Karnataka",
    stateCoverage: "All 31 districts of Karnataka across BESCOM, MESCOM, HESCOM, GESCOM, CESC",
    department: "Energy Department, Government of Karnataka",
    targetBeneficiary: "All domestic households (residents and tenants) in Karnataka consuming up to 200 units of electricity/month",
    beneficiaryType: "All Citizens",
    minAge: 18,
    maxAge: 120,
    incomeMax: null,
    status: "Active",
    launchYear: 2023,
    officialWebsite: "https://energy.karnataka.gov.in",
    applicationUrl: "https://sevasindhuservices.karnataka.gov.in",
    sourceUrl: "https://bescom.karnataka.gov.in",
    description: "Karnataka landmark guarantee scheme providing 100% free electricity up to 200 units per month for all domestic households, slashing monthly utility bills to zero.",
    detailedDescription: "Gruha Jyothi is one of the five flagship guarantees implemented by the Government of Karnataka to shield households from energy inflation and promote basic living dignity. Under this scheme, every residential domestic electricity consumer in Karnataka—whether owner or tenant—whose average consumption is within 200 units per month receives 100% free power. If a household consumes within their personalized entitlement limit (calculated based on average annual usage + 10% buffer up to 200 units), the monthly bill is generated as exactly ₹0.00.",
    purpose: "Guarantees free essential electrical energy to poor, middle-class, and working households, advancing UN Sustainable Development Goal 7 (Affordable and Clean Energy).",
    benefits: "Up to 200 units of domestic electricity per month completely free of charge (Zero Electricity Bill), with the state government reimbursing the ESCOM power utilities directly.",
    financialBenefit: "Zero electricity bill (savings up to ₹1,400 to ₹1,800 per month per household)",
    benefitFrequency: "Monthly zero-bill entitlement",
    impact: "Over 1.65 crore households in Karnataka now receive ₹0 electricity bills, dramatically lowering domestic utility burdens for families.",
    specificAdvantages: "Tenants and renters are fully eligible; automatic monthly zero billing upon linking Aadhaar with the consumer meter Account ID.",
    detailedEligibility: {
      ageRequirement: "18 years and above.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "No income limit; universal for all domestic consumers.",
      educationRequirement: "None.",
      occupationRequirement: "Any.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Resident of Karnataka (owners or registered tenants).",
      familyConditions: "One benefit per household meter Account ID."
    },
    mandatoryConditions: [
      "Domestic (residential) electricity connection only (commercial meters strictly excluded)",
      "Account ID / Consumer ID of the electricity meter must be linked to Aadhaar on Seva Sindhu",
      "Monthly consumption must remain within the calculated entitlement limit (up to 200 units)"
    ],
    conditionalRequirements: [
      "Tenants must upload their rental agreement or submit tenant declaration along with their Aadhaar."
    ],
    ineligibility: [
      "Commercial, industrial, and agricultural electricity installations (domestic LT-1 / LT-2 connections only)",
      "Consumers whose average monthly usage exceeds 200 units",
      "Multiple meters registered under the same Aadhaar"
    ],
    documents: [
      { name: "Electricity Bill (showing Account ID / Connection ID)", why: "Identifies the electricity installation and ESCOM (BESCOM/MESCOM/etc.).", mandatory: true, issuingAuthority: "Karnataka ESCOMs (BESCOM / HESCOM / MESCOM / GESCOM / CESC)", format: "Latest Bill", validity: "Recent" },
      { name: "Aadhaar Card of Consumer / Tenant", why: "For identity verification and de-duplication.", mandatory: true, issuingAuthority: "UIDAI", format: "Original / DigiLocker", validity: "Permanent" },
      { name: "Rental Agreement / Voter ID / Lease Deed (for tenants)", why: "Proof of residence at rented premises.", mandatory: false, issuingAuthority: "Notary / Property Owner", format: "Copy", validity: "Active" }
    ],
    applicationMode: "Online via Seva Sindhu Portal & Offline at Grama One / Bangalore One / Karnataka One centres",
    process: [
      "Step 1: Keep your latest electricity bill (with 10-digit Account ID) and Aadhaar card ready.",
      "Step 2: Visit sevasindhuservices.karnataka.gov.in and click on 'Gruha Jyothi Scheme'.",
      "Step 3: Select your ESCOM (e.g. BESCOM, HESCOM, MESCOM, GESCOM, CESC).",
      "Step 4: Enter your Account ID; customer name and address auto-populate from the energy database.",
      "Step 5: Select whether you are 'Owner' or 'Tenant', enter your Aadhaar number, and verify via OTP.",
      "Step 6: Submit application and receive immediate digital confirmation. Free billing commences from the subsequent billing cycle."
    ],
    offlineProcess: "Visit your nearest Grama One (village), Karnataka One (town), or Bangalore One centre. The computer operator completes registration in 2 minutes.",
    commonMistakes: [
      "Entering a commercial meter number instead of a domestic residential connection.",
      "Consuming significantly over 200 units, which nullifies the free subsidy and results in full bill payment."
    ],
    openingDate: "Permanently open for enrollment",
    processingTime: "Immediate registration; zero-billing reflects from the next calendar billing cycle",
    renewalRequired: "No annual renewal; continues automatically",
    trackingProcedure: "Check status on Seva Sindhu or check your monthly electricity bill for 'Subsidy under Gruha Jyothi: Net Payable ₹0.00'.",
    correctionProcedure: "If vacating a rented house, unlink your Aadhaar from the old Account ID on Seva Sindhu before moving to a new residence.",
    disbursementMethod: "Direct adjustment on monthly electricity bill (Net Payable = ₹0.00)",
    disbursementDetails: "Meter reader generates bill on spot machine showing total consumption, government subsidy credited, and net payable amount as ₹0.00.",
    faqs: [
      { q: "Can tenants living in rented houses apply?", a: "Yes. Tenants are fully eligible by linking their Aadhaar and providing their rental address/agreement." },
      { q: "What happens if I use 205 units in a month?", a: "If total consumption exceeds 200 units, the consumer has to pay the entire bill for that particular month." }
    ],
    helpline: "Energy Dept Karnataka Helpline: 1912 (24x7 Toll-Free)",
    email: "energy-sec@karnataka.gov.in",
    rules: [{ fact: "state", op: "eq", value: "Karnataka" }]
  },

  "jal-jeevan-mission": {
    id: "jal-jeevan-mission",
    name: "Jal Jeevan Mission (Har Ghar Jal)",
    title: "Jal Jeevan Mission (Har Ghar Jal)",
    category: "Housing & Basic Needs",
    subcategory: "Drinking water",
    sdg: "SDG 6: Clean Water and Sanitation",
    level: "Central",
    state: "All India",
    stateCoverage: "All rural households across all 28 States & 8 Union Territories",
    department: "Department of Drinking Water and Sanitation, Ministry of Jal Shakti",
    targetBeneficiary: "All rural households, schools, anganwadis, and community centres across India",
    beneficiaryType: "All Citizens",
    minAge: 0,
    maxAge: 120,
    incomeMax: null,
    status: "Active",
    launchYear: 2019,
    officialWebsite: "https://jaljeevanmission.gov.in",
    applicationUrl: "https://ejalshakti.gov.in",
    sourceUrl: "https://jalshakti-ddws.gov.in",
    description: "Transformative national water infrastructure program providing individual functional household tap connections (FHTC) with 55 litres per capita per day potable water to over 15 crore rural homes.",
    detailedDescription: "Jal Jeevan Mission (Har Ghar Jal) is the world's most extensive rural drinking water initiative. It aims to provide every rural household in India with a Functional Household Tap Connection (FHTC) delivering 55 litres of potable, tested drinking water per person per day on a long-term, reliable basis. Implemented through Village Water and Sanitation Committees (Pani Samitis), the scheme eliminates water-fetching drudgery for rural women and eliminates waterborne epidemics through sensor-based IoT water quality monitoring.",
    purpose: "Eliminates physical drudgery for rural women walking miles for water, eradicates fluorosis and waterborne diseases, and secures clean drinking water equity, supporting SDG 6.",
    benefits: "Free individual functional piped water tap installed at the household courtyard, providing 55 litres/person/day of safe, treated, laboratory-tested drinking water.",
    financialBenefit: "100% Free household tap connection infrastructure worth ₹15,000 to ₹25,000 per household",
    benefitFrequency: "Daily continuous/scheduled piped water supply",
    impact: "Has increased rural tap water coverage from 17% in 2019 to over 78% in 2024, saving millions of hours of daily female labor and dramatically reducing child diarrhoea.",
    specificAdvantages: "Zero installation charges for poor households; water quality monitored via field test kits by local women's self-help groups.",
    detailedEligibility: {
      ageRequirement: "All ages.",
      genderRequirement: "All genders.",
      incomeLimit: "No income limit; universal saturation across every rural home.",
      educationRequirement: "None.",
      occupationRequirement: "Any.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Resident of any rural village in India.",
      familyConditions: "Must reside in a village where piped water network is being commissioned."
    },
    mandatoryConditions: [
      "Household must be situated within the notified rural revenue village boundary",
      "Cooperation with Gram Panchayat / Village Water & Sanitation Committee (VWSC)"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Commercial establishments and factories"
    ],
    documents: [
      { name: "Gram Panchayat Residence / House Assessment Entry", why: "Confirms household residence within village.", mandatory: true, issuingAuthority: "Gram Panchayat", format: "Panchayat Tax Receipt / Property ID", validity: "Current" },
      { name: "Aadhaar Card of Head of Household", why: "For registration on JJM IMIS portal.", mandatory: false, issuingAuthority: "UIDAI", format: "Copy", validity: "Permanent" }
    ],
    applicationMode: "Community Saturation via Gram Panchayat / Pani Samiti",
    process: [
      "Step 1: The Gram Panchayat and Village Water & Sanitation Committee (VWSC) prepare the Village Action Plan.",
      "Step 2: State Public Health Engineering Department (PHED) / Rural Water Supply lays main pipelines and distribution network.",
      "Step 3: Surveyors visit every household to register tap connections on the JJM mobile app.",
      "Step 4: Certified plumbing contractors install the ferrule connection, pipe, and brass tap at the household entrance/kitchen.",
      "Step 5: Village Pani Samiti tests water quality using Field Test Kits (FTKs).",
      "Step 6: Village declares 'Har Ghar Jal' certified status through Gram Sabha resolution."
    ],
    offlineProcess: "Contact your local Gram Panchayat President (Sarpanch) or Village Water and Sanitation Committee member. No individual paperwork required; works on village-wide saturation.",
    commonMistakes: [
      "Installing booster pumps directly on the pipeline (strictly prohibited as it depresses water pressure for neighboring homes)."
    ],
    openingDate: "Continuous village-wide saturation drive",
    processingTime: "Tap installed during village network execution",
    renewalRequired: "None; nominal community maintenance fee decided by Gram Sabha",
    trackingProcedure: "Track village and household coverage live on the JJM Public Dashboard at ejalshakti.gov.in/jjmreport.",
    correctionProcedure: "Report leaks or low pressure to the Gram Panchayat water lineman or call state PHED helpline.",
    disbursementMethod: "Direct physical tap infrastructure installation at household doorstep",
    disbursementDetails: "Turnkey delivery by Rural Water Supply engineering departments.",
    faqs: [
      { q: "Is the tap connection free?", a: "Yes. Infrastructure installation up to the household boundary is 100% funded by Central and State Governments." },
      { q: "How is water quality tested?", a: "Every water source is tested twice a year for chemical and bacteriological parameters at district labs, and 5 trained women in every village test taps using Field Test Kits." }
    ],
    helpline: "National JJM Helpdesk: 011-24362705 / Toll-Free: 1800-11-0031",
    email: "jjm-ddws@gov.in",
    rules: [{ fact: "age", op: "gte", value: 0 }]
  },

  // ==========================================
  // CATEGORY 8: Financial Inclusion & Pension
  // ==========================================
  "karnataka-sandhya-suraksha": {
    id: "karnataka-sandhya-suraksha",
    name: "Sandhya Suraksha Yojana (Karnataka Senior Citizen Pension)",
    title: "Sandhya Suraksha Yojana (Karnataka Senior Citizen Pension)",
    category: "Financial Inclusion & Pension",
    subcategory: "Pension schemes",
    sdg: "SDG 1: No Poverty",
    level: "State",
    state: "Karnataka",
    stateCoverage: "All 31 districts of Karnataka",
    department: "Directorate of Social Security and Pensions, Revenue Department, Government of Karnataka",
    targetBeneficiary: "Elderly senior citizens aged 65 and above from economically weaker families in Karnataka",
    beneficiaryType: "Senior Citizens",
    minAge: 65,
    maxAge: 120,
    incomeMax: 20000,
    status: "Active",
    launchYear: 2007,
    officialWebsite: "https://dssp.karnataka.gov.in",
    applicationUrl: "https://sevasindhuservices.karnataka.gov.in",
    sourceUrl: "https://nadakacheri.karnataka.gov.in",
    description: "Monthly social security pension of ₹1,200 deposited directly into the bank accounts of indigent senior citizens aged 65 and above in Karnataka, alongside healthcare and bus pass concessions.",
    detailedDescription: "Sandhya Suraksha Yojana is Karnataka's premier social safety net for elderly citizens who lack institutional support, family financial backing, or pension provisions. Every resident senior citizen aged 65 or above whose combined family annual income does not exceed ₹20,000 receives a monthly financial pension of ₹1,200 deposited via Direct Benefit Transfer. Beneficiaries also receive subsidized medical checkups at state hospitals and concessional KSRTC/BMTC bus passes.",
    purpose: "Prevents elderly destitution, guarantees financial dignity and medical autonomy in old age, and shields senior citizens from poverty, supporting SDG 1 and SDG 3.",
    benefits: "Monthly pension of ₹1,200 deposited directly into savings bank / post office account, concessional healthcare, and subsidized bus travel pass.",
    financialBenefit: "₹1,200 per month (₹14,400 annually) direct cash pension",
    benefitFrequency: "Monthly Direct Benefit Transfer (DBT)",
    impact: "Provides subsistence income to over 38 lakh impoverished senior citizens in Karnataka, enabling them to buy medicines and daily groceries without dependence.",
    specificAdvantages: "Direct lifetime pension without requiring prior employment contributions; doorstep cash delivery via postal bank for bedridden elderly.",
    detailedEligibility: {
      ageRequirement: "65 years and above.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Combined annual income of applicant and spouse must not exceed ₹20,000.",
      educationRequirement: "None.",
      occupationRequirement: "Retired, informal workers, agricultural laborers, destitute elderly.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Resident of Karnataka for at least 3 years.",
      familyConditions: "Combined bank deposits of applicant and spouse must not exceed ₹10,000."
    },
    mandatoryConditions: [
      "Must be a resident of Karnataka aged 65 or above",
      "Total annual income of applicant and spouse not exceeding ₹20,000",
      "Must not already be receiving another government old-age pension (e.g. IGNOAPS or private corporate pension)"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Elderly individuals already drawing government servant pensions or high-income pensions",
      "Individuals whose children are government servants paying income tax"
    ],
    documents: [
      { name: "Age Proof (Voter ID / Birth Certificate / School Certificate / Medical Officer Age Certificate)", why: "Verifies minimum age of 65 years.", mandatory: true, issuingAuthority: "Election Commission / District Surgeon", format: "Original / Copy", validity: "Permanent" },
      { name: "Income and Residence Certificate", why: "Verifies income below ₹20,000 and 3 years Karnataka residence.", mandatory: true, issuingAuthority: "Tahsildar (Nadakacheri)", format: "RD Number", validity: "Valid" },
      { name: "Aadhaar Card", why: "Identity and biometric verification.", mandatory: true, issuingAuthority: "UIDAI", format: "Copy", validity: "Permanent" },
      { name: "Bank / Post Office Savings Passbook", why: "For monthly DBT pension deposit.", mandatory: true, issuingAuthority: "Bank / India Post", format: "Passbook copy", validity: "Active" }
    ],
    applicationMode: "Online via Seva Sindhu / Nadakacheri & Offline at Village Grama One / Atalji Janasnehi Kendra",
    process: [
      "Step 1: Obtain an Income & Domicile certificate from your local Nadakacheri (Atalji Janasnehi Kendra).",
      "Step 2: Visit sevasindhuservices.karnataka.gov.in or your village Grama One centre.",
      "Step 3: Fill out the Sandhya Suraksha application form with age proof, RD number, and bank account details.",
      "Step 4: Village Administrative Officer (VAO) conducts field verification of applicant's living conditions.",
      "Step 5: Taluk Revenue Inspector and Tahsildar sanction the pension order.",
      "Step 6: ₹1,200 pension is credited monthly into the senior citizen's bank account."
    ],
    offlineProcess: "Walk into your local Atalji Janasnehi Kendra (Nadakacheri) or Taluk Tahsildar office. The staff will verify age documents and generate the pension application.",
    commonMistakes: [
      "Age proof showing below 65 years (must be 65+ on the date of application).",
      "Bank account not active or dormant due to non-usage."
    ],
    openingDate: "Open year-round",
    processingTime: "21 to 30 business days under Karnataka Sakala Guarantee",
    renewalRequired: "Annual digital life certificate (Jeevan Pramaan) or biometric verification at Grama One / Post Office",
    trackingProcedure: "Track application status on nadakacheri.karnataka.gov.in using your application RD number.",
    correctionProcedure: "Visit the Taluk Tahsildar office (Social Security Pension section) to rectify bank account or address.",
    disbursementMethod: "Direct Benefit Transfer (DBT) via Karnataka Treasury to Bank / Post Office Account",
    disbursementDetails: "Pension credited on the 1st week of every month. Bedridden seniors can receive home cash delivery via India Post Payments Bank (IPPB) micro-ATMs.",
    faqs: [
      { q: "Can both husband and wife receive Sandhya Suraksha pension?", a: "Yes, if both individuals are aged 65 or older and satisfy the combined income benchmark, both can receive individual pensions." },
      { q: "What if an elderly person does not have a birth certificate?", a: "An Age Certificate issued by the Taluk Government Medical Officer / District Hospital Surgeon is accepted as valid age proof." }
    ],
    helpline: "Karnataka DSSP Helpline: 080-22340566 / Sakala Toll-Free: 080-44554455",
    email: "dssp-karnataka@gov.in",
    rules: [{ fact: "age", op: "gte", value: 65 }, { fact: "state", op: "eq", value: "Karnataka" }, { fact: "income", op: "lte", value: 20000 }]
  },

  // ==========================================
  // CATEGORY 9: Social Justice & Disability Support
  // ==========================================
  "adra-assistive-devices": {
    id: "adra-assistive-devices",
    name: "ADIP Scheme (Assistance to Disabled Persons for Purchase/Fitting of Aids and Appliances)",
    title: "ADIP Scheme (Assistance to Disabled Persons for Purchase/Fitting of Aids and Appliances)",
    category: "Social Justice & Disability Support",
    subcategory: "Disability assistance",
    sdg: "SDG 10: Reduced Inequalities",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 Union Territories",
    department: "Department of Empowerment of Persons with Disabilities (DEPwD), Ministry of Social Justice and Empowerment",
    targetBeneficiary: "Persons with benchmark disabilities (40% or more) from low-income families",
    beneficiaryType: "Persons with Disabilities",
    minAge: 0,
    maxAge: 120,
    incomeMax: 240000,
    status: "Active",
    launchYear: 1981,
    officialWebsite: "https://adip.disabilityaffairs.gov.in",
    applicationUrl: "https://adip.disabilityaffairs.gov.in",
    sourceUrl: "https://alimco.in",
    description: "100% free modern assistive aids—motorized tricycles, smart canes, digital hearing aids, battery wheelchairs, artificial limbs, and daisy players—distributed nationwide via ALIMCO.",
    detailedDescription: "The ADIP Scheme provides sophisticated, modern, durable, and standard assistive aids and appliances to persons with disabilities (Divyangjan) to foster their physical independence, education, and economic integration. Implemented through the Artificial Limbs Manufacturing Corporation of India (ALIMCO) and district disability camps, it provides 100% free aids for individuals earning up to ₹20,000/month (and 50% subsidy for income between ₹20,000 and ₹30,000/month). Equipment includes motorized tricycles, braille smart kits, smart canes, cochlear implants (up to ₹6 Lakh for deaf children under 5), and custom prosthetic limbs.",
    purpose: "Restores mobility, communication, and economic self-sufficiency to persons with disabilities, eliminating physical barriers and advancing SDG 10 (Reduced Inequalities).",
    benefits: "100% free assistive devices: motorized tricycles, wheelchairs, smart canes, digital behind-the-ear hearing aids, artificial limbs, prosthetics/orthotics, and cochlear implants up to ₹6 Lakh.",
    financialBenefit: "Assistive equipment worth ₹5,000 to ₹6,00,000 (Cochlear Implants) provided 100% free",
    benefitFrequency: "Replacements provided every 3 years (or 1 year for growing children)",
    impact: "Has empowered millions of Divyangjan to pursue college education, travel independently, and work in competitive employment.",
    specificAdvantages: "High-quality BIS-certified equipment manufactured by ALIMCO; regular mega distribution camps in every district.",
    detailedEligibility: {
      ageRequirement: "All ages (Cochlear implants: children under 5 years; motorized tricycles: 16+ years).",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Full 100% free: monthly family income up to ₹20,000; 50% subsidy: income ₹20,001 to ₹30,000/month.",
      educationRequirement: "None.",
      occupationRequirement: "Any.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Must have benchmark disability of 40% or more."
    },
    mandatoryConditions: [
      "Must possess a valid Disability Certificate / Unique Disability ID (UDID) Card showing 40% or greater disability",
      "Family monthly income not exceeding ₹30,000",
      "Must not have received the same assistive device free from the government within the past 3 years (except for growing children under 12)"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Individuals with disability certified below 40%",
      "Individuals earning over ₹30,000 per month"
    ],
    documents: [
      { name: "Unique Disability ID (UDID) Card / Disability Certificate", why: "Mandatory clinical proof of 40%+ disability.", mandatory: true, issuingAuthority: "District Medical Board / Swavlamban Portal", format: "UDID Card or Medical Board Certificate", validity: "Permanent or valid date" },
      { name: "Income Certificate / BPL Ration Card", why: "Determines 100% free grant eligibility.", mandatory: true, issuingAuthority: "Tahsildar / Revenue Authority", format: "Certificate", validity: "Current Year" },
      { name: "Aadhaar Card", why: "Identity verification.", mandatory: true, issuingAuthority: "UIDAI", format: "Copy", validity: "Permanent" },
      { name: "Passport Size Photographs (Full Length Photo showing disability)", why: "For device customization.", mandatory: true, issuingAuthority: "Applicant", format: "Photos", validity: "Recent" }
    ],
    applicationMode: "Online via adip.disabilityaffairs.gov.in & Offline at District Disability Assessment Camps / ALIMCO",
    process: [
      "Step 1: Check the schedule for upcoming ALIMCO assessment camps in your district or visit the District Disability Rehabilitation Centre (DDRC).",
      "Step 2: Attend the camp with your UDID Card, Aadhaar, and income proof.",
      "Step 3: ALIMCO biomedical engineers and prosthetists evaluate your physical measurement (limb casting or audiogram).",
      "Step 4: Your application is approved on the ADIP portal.",
      "Step 5: Attend the Mega Distribution Camp in your district to receive your free motorized tricycle, wheelchair, hearing aid, or custom artificial limb.",
      "Step 6: Engineers adjust fitting and provide user operational training on the spot."
    ],
    offlineProcess: "Visit your District Disability Rehabilitation Centre (DDRC) or the District Social Welfare / Disabled Welfare Office located in the district headquarters.",
    commonMistakes: [
      "Applying without a valid UDID Card (temporary handwritten hospital chits without board signatures are rejected)."
    ],
    openingDate: "Continuous year-round camps and portal applications",
    processingTime: "Assessment to device distribution typically takes 30 to 60 days",
    renewalRequired: "Device replacement eligible every 3 years",
    trackingProcedure: "Track beneficiary status on adip.disabilityaffairs.gov.in using UDID number or Aadhaar.",
    correctionProcedure: "Contact the District Disabled Welfare Officer (DDWO).",
    disbursementMethod: "Direct physical delivery of custom-fitted assistive equipment",
    disbursementDetails: "Equipment distributed at district public distribution camps with on-site fitting, battery chargers, and warranty cards.",
    faqs: [
      { q: "Who is eligible for a motorized tricycle?", a: "Severely orthopaedically impaired persons aged 16 and above with both lower limbs affected (disability 80% or more) who have good upper-limb strength." },
      { q: "Is cochlear implant surgery completely free under ADIP?", a: "Yes. For profoundly deaf children under 5 years, the entire surgery and implant cost up to ₹6,00,000 is 100% covered." }
    ],
    helpline: "ALIMCO Toll-Free Helpline: 1800-180-5129 / DEPwD: 011-24364012",
    email: "adip.moca@gmail.com",
    rules: [{ fact: "disabilityLevel", op: "in", value: ["40_79", "80_PLUS"] }, { fact: "income", op: "lte", value: 240000 }]
  },

  // ==========================================
  // CATEGORY 10: MSME & Entrepreneurship
  // ==========================================
  "cgtsme": {
    id: "cgtsme",
    name: "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
    title: "Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE)",
    category: "MSME & Entrepreneurship",
    subcategory: "Business loans",
    sdg: "SDG 8: Decent Work & Economic Growth",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 Union Territories",
    department: "Ministry of Micro, Small and Medium Enterprises (MSME) & SIDBI",
    targetBeneficiary: "New and existing Micro and Small Enterprises (MSEs) seeking collateral-free business loans",
    beneficiaryType: "Entrepreneurs & MSME",
    minAge: 18,
    maxAge: 70,
    incomeMax: null,
    status: "Active",
    launchYear: 2000,
    officialWebsite: "https://www.cgtmse.in",
    applicationUrl: "https://www.cgtmse.in",
    sourceUrl: "https://msme.gov.in",
    description: "Government-backed collateral-free bank loans up to ₹5 Crore for manufacturing and service MSMEs, with 75% to 85% credit guarantee coverage provided to lending banks.",
    detailedDescription: "CGTMSE, established jointly by the Ministry of MSME and SIDBI, eliminates the biggest hurdle faced by small businesses: bank demands for third-party collateral security and real estate property mortgages. Under CGTMSE, scheduled commercial banks, regional rural banks, and NBFCs provide term loans and working capital credit facilities up to ₹5,00,00,000 (₹5 Crore) to eligible micro and small enterprises entirely without collateral security. In case of business default, the Trust guarantees up to 85% of the loan amount back to the lending bank.",
    purpose: "Drives grassroots industrialization, unlocks formal credit for first-generation entrepreneurs without ancestral property, and expands manufacturing output, supporting SDG 8 and SDG 9.",
    benefits: "Collateral-free and third-party-guarantee-free bank loans up to ₹5 Crore (₹500 Lakh) with 75% to 85% credit risk guarantee, reduced interest rates, and relaxed margin norms.",
    financialBenefit: "Collateral-free bank loan up to ₹5,00,00,000 with 75% to 85% sovereign credit guarantee",
    benefitFrequency: "Term loan / Revolving working capital credit facility",
    impact: "Has enabled over 80 lakh micro-enterprises to access formal bank credit, creating millions of manufacturing and technical jobs across India.",
    specificAdvantages: "Entrepreneurs do not need to mortgage residential property or land; women-owned and SC/ST enterprises receive up to 85% guarantee coverage.",
    detailedEligibility: {
      ageRequirement: "18 to 70 years.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "No personal income limit; evaluated based on project viability and cash flow.",
      educationRequirement: "None.",
      occupationRequirement: "Micro or Small business entrepreneur.",
      casteCategoryRequirement: "Open to all categories (higher 85% guarantee for Women, SC/ST, Aspirational Districts, and North East).",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Enterprise must be registered under Udyam."
    },
    mandatoryConditions: [
      "Must be a registered Micro or Small Enterprise holding a valid Udyam Registration Certificate",
      "Enterprise must be engaged in manufacturing or service activities (retail trade covered up to ₹2 Crore)",
      "Loan facility must be sanctioned by an empanelled Member Lending Institution (commercial bank, RRB, SIDBI, or NBFC)",
      "Clear CIBIL / credit bureau record with no wilful bank defaults"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Educational institutions, training institutes, self-help groups (SHGs), and agricultural credit",
      "Medium and Large scale enterprises"
    ],
    documents: [
      { name: "Udyam Registration Certificate", why: "Statutory proof of Micro/Small Enterprise status.", mandatory: true, issuingAuthority: "Ministry of MSME (udyamregistration.gov.in)", format: "Digital Certificate", validity: "Permanent" },
      { name: "Detailed Project Report (DPR) & Financial Statements", why: "Demonstrates business viability, projected cash flows, and debt service coverage ratio (DSCR).", mandatory: true, issuingAuthority: "Chartered Accountant / Applicant", format: "Project Report with 3-year projections", validity: "Current" },
      { name: "KYC Documents of Promoters / Partners / Directors (Aadhaar, PAN)", why: "Identity and tax proof.", mandatory: true, issuingAuthority: "UIDAI / Income Tax Dept", format: "Copies", validity: "Permanent" },
      { name: "GST Registration Certificate & Bank Statements", why: "Verifies business turnover and banking discipline.", mandatory: true, issuingAuthority: "GSTN / Bank", format: "12-month bank statements", validity: "Current" }
    ],
    applicationMode: "Online via JanSamarth Portal (jansamarth.in) & at all Scheduled Commercial Banks",
    process: [
      "Step 1: Obtain your free Udyam Registration Certificate on udyamregistration.gov.in.",
      "Step 2: Prepare your Detailed Project Report (DPR) including machinery quotes and financial projections.",
      "Step 3: Apply on the government's unified credit portal jansamarth.in or directly approach your nearest public/private bank branch.",
      "Step 4: Request loan coverage under the CGTMSE Collateral-Free Credit Guarantee Scheme.",
      "Step 5: Bank evaluates project viability and sanctions the credit facility without demanding property mortgage.",
      "Step 6: Bank registers the loan directly on the CGTMSE portal (cgtmse.in) to activate guarantee coverage."
    ],
    offlineProcess: "Walk into any branch of State Bank of India, Canara Bank, Bank of Baroda, PNB, or your regional rural bank. Meet the Branch Manager or MSME Relationship Manager.",
    commonMistakes: [
      "Approaching the bank without a formal Udyam certificate and realistic cash-flow projections.",
      "Allowing credit bureau / CIBIL score to fall below acceptable banking thresholds before applying."
    ],
    openingDate: "Open year-round across all bank branches",
    processingTime: "15 to 30 business days following complete documentation",
    renewalRequired: "Annual guarantee fee payable to the Trust through the lending bank",
    trackingProcedure: "Track application status on jansamarth.in or directly with your branch credit officer.",
    correctionProcedure: "Revise DPR assumptions as requested by the bank credit appraisal team.",
    disbursementMethod: "Direct credit of loan amount into enterprise current account / vendor payments",
    disbursementDetails: "Term loan disbursed directly to machinery and plant suppliers; working capital line opened in the enterprise current account.",
    faqs: [
      { q: "Can a new startup get a CGTMSE loan?", a: "Yes. Both greenfield (new) startups and existing enterprises undergoing expansion are fully eligible." },
      { q: "What is the guarantee fee?", a: "A nominal annual guarantee fee ranging between 0.37% and 1.35% depending on loan slab and category, paid through the lending bank." }
    ],
    helpline: "CGTMSE Helpdesk: 022-67221553 / 022-67221483 / MSME Toll-Free: 1800-180-6763",
    email: "cgtmse@cgtmse.in",
    rules: [{ fact: "occupation", op: "in", value: ["SELF_EMPLOYED", "OTHER"] }]
  },

  "pm-fme": {
    id: "pm-fme",
    name: "PM Formalisation of Micro Food Processing Enterprises (PMFME)",
    title: "PM Formalisation of Micro Food Processing Enterprises (PMFME)",
    category: "MSME & Entrepreneurship",
    subcategory: "Small business subsidies",
    sdg: "SDG 2: Zero Hunger",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 Union Territories under One District One Product (ODOP)",
    department: "Ministry of Food Processing Industries (MoFPI)",
    targetBeneficiary: "Individual micro food processing entrepreneurs, FPOs, Self Help Groups (SHGs), and producer cooperatives",
    beneficiaryType: "Entrepreneurs & Food Processors",
    minAge: 18,
    maxAge: 65,
    incomeMax: null,
    status: "Active",
    launchYear: 2020,
    officialWebsite: "https://pmfme.mofpi.gov.in",
    applicationUrl: "https://pmfme.mofpi.gov.in",
    sourceUrl: "https://mofpi.gov.in",
    description: "Credit-linked 35% capital subsidy up to ₹10,00,000 for setting up or modernizing micro food processing units (flour mills, spice processing, bakery, dairy, oil extraction, fruit pulp).",
    detailedDescription: "The PMFME Scheme, launched under the Atmanirbhar Bharat Abhiyan with a ₹10,000 Crore outlay, provides financial, technical, and business support to micro food processing entrepreneurs. Built around the 'One District One Product' (ODOP) framework, it provides a 35% credit-linked capital subsidy (up to ₹10 Lakh per enterprise), seed capital of ₹40,000 per SHG member for working capital, and 50% grants for common infrastructure and branding/marketing. Free handholding is provided by District Resource Persons (DRPs).",
    purpose: "Formalizes unorganized micro-food enterprises, cuts post-harvest food wastage, enhances food safety compliance (FSSAI), and builds regional agro-processing brands, supporting SDG 2, SDG 8, and SDG 12.",
    benefits: "35% credit-linked capital subsidy on bank loan (maximum ₹10,00,000), seed capital of ₹40,000 for SHG food workers, 50% branding/marketing subsidy, and free FSSAI food quality training.",
    financialBenefit: "35% capital subsidy up to ₹10,00,000 on bank loan + ₹40,000 seed capital per SHG member",
    benefitFrequency: "One-time capital subsidy per food enterprise",
    impact: "Over 85,000 micro-food enterprises modernized; has significantly multiplied rural agricultural value addition and export potential.",
    specificAdvantages: "Dedicated District Resource Persons (DRP) appointed in every district provide free doorstep DPR preparation and loan filing assistance.",
    detailedEligibility: {
      ageRequirement: "18 to 65 years.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "No income limit.",
      educationRequirement: "Minimum 8th pass standard preferred.",
      occupationRequirement: "Micro food processing entrepreneur, SHG member, or farmer producer.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Only one person from a family is eligible for individual capital subsidy."
    },
    mandatoryConditions: [
      "Enterprise must be engaged in food processing (processing of grains, fruits, vegetables, spices, dairy, meat, bakery, beverages)",
      "Applicant must contribute minimum 10% of project cost as owner equity",
      "Remaining 90% financed via bank loan, on which the 35% capital subsidy is adjusted",
      "Alignment with the district's notified 'One District One Product' (ODOP) or other viable food product"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Trading-only enterprises (buying and selling raw agricultural produce without processing)",
      "Large and medium food industries"
    ],
    documents: [
      { name: "Aadhaar Card & PAN Card", why: "Identity and tax verification.", mandatory: true, issuingAuthority: "UIDAI / Income Tax", format: "Copies", validity: "Permanent" },
      { name: "Detailed Project Report (DPR) & Machinery Quotation", why: "Specifies food processing machinery, capacity, and civil work.", mandatory: true, issuingAuthority: "Machinery Vendor / Certified DRP", format: "Project Report", validity: "Current" },
      { name: "Land / Premises Ownership or Rent Agreement", why: "Proof of operating premises.", mandatory: true, issuingAuthority: "Revenue Dept / Landlord", format: "Agreement Copy", validity: "Valid" },
      { name: "FSSAI Food License / Registration (or undertaking to apply)", why: "Statutory food hygiene and safety compliance.", mandatory: true, issuingAuthority: "FSSAI", format: "FSSAI Certificate", validity: "Active" },
      { name: "Bank Statements & Udyam Certificate", why: "Financial appraisal.", mandatory: true, issuingAuthority: "Bank / MSME Ministry", format: "Copies", validity: "Current" }
    ],
    applicationMode: "Online via National PMFME Portal (pmfme.mofpi.gov.in)",
    process: [
      "Step 1: Visit pmfme.mofpi.gov.in and register under 'Applicant Registration'.",
      "Step 2: Choose your district and identify the local District Resource Person (DRP).",
      "Step 3: DRP assists you in preparing your Detailed Project Report (DPR) and gathering machinery quotes free of charge.",
      "Step 4: Upload your documents and submit application on the PMFME portal.",
      "Step 5: District Level Committee (DLC) scrutinizes the proposal and forwards it to your preferred bank.",
      "Step 6: Bank sanctions loan; Ministry releases the 35% subsidy directly into the bank's subsidy reserve fund account."
    ],
    offlineProcess: "Meet the District Resource Person (DRP) at the District Industries Centre (DIC) or District Horticulture/Agriculture Office.",
    commonMistakes: [
      "Purchasing second-hand machinery (subsidy is only permissible on new food processing plant and machinery).",
      "Neglecting FSSAI licensing requirements."
    ],
    openingDate: "Open year-round",
    processingTime: "30 to 45 days from DLC clearance to bank sanction",
    renewalRequired: "One-time capital subsidy",
    trackingProcedure: "Track application live on pmfme.mofpi.gov.in using your login credentials.",
    correctionProcedure: "Your assigned District Resource Person can unlock and update application files.",
    disbursementMethod: "Direct credit to Bank's Subsidy Reserve Fund (Back-ended Subsidy)",
    disbursementDetails: "Subsidy is credited into a Subsidy Reserve Fund account in the lending bank. After 3 years of satisfactory unit operation, it is credited to extinguish the loan principal without interest.",
    faqs: [
      { q: "Is the DRP support free?", a: "Yes. The Ministry pays the District Resource Person; applicants do not pay any fee for DPR preparation." },
      { q: "Can home-based pickle and spice makers apply?", a: "Yes. Micro home-scale entrepreneurs can apply to upgrade packaging, grinding machinery, and get FSSAI certified." }
    ],
    helpline: "PMFME National Helpdesk: 011-26497131 / Toll-Free: 1800-11-2644",
    email: "pmfme-mofpi@gov.in",
    rules: [{ fact: "occupation", op: "in", value: ["SELF_EMPLOYED", "FARMER", "OTHER"] }]
  }
};

