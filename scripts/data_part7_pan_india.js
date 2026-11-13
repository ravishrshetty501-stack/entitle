// Data Part 7: Pan-India Additional Verified Flagship Schemes
// 8 Highly Impactful Central Programs

module.exports = {
  "shreshtha-scheme": {
    id: "shreshtha-scheme",
    name: "SHRESHTA Scheme (Residential Education for High School Students in Targeted Areas)",
    title: "SHRESHTA Scheme (Residential Education for High School Students in Targeted Areas)",
    category: "Education & Scholarships",
    subcategory: "School scholarships",
    sdg: "SDG 4: Quality Education",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 Union Territories",
    department: "Ministry of Social Justice and Empowerment",
    targetBeneficiary: "Meritorious Scheduled Caste (SC) students studying in Class 8 and Class 10",
    beneficiaryType: "Students",
    minAge: 12,
    maxAge: 17,
    incomeMax: 250000,
    status: "Active",
    launchYear: 2021,
    officialWebsite: "https://shreshta.nta.nic.in",
    applicationUrl: "https://shreshta.nta.nic.in",
    sourceUrl: "https://socialjustice.gov.in",
    description: "100% government-funded residential schooling in India's top CBSE private residential schools for meritorious SC students, covering full school fees, hostel fees, and mess charges.",
    detailedDescription: "SHRESHTA provides high-quality residential education to meritorious Scheduled Caste students from poor backgrounds. Around 3,000 students are selected annually through the National Entrance Test for SHRESHTA (NETS) conducted by the National Testing Agency (NTA). Selected students are admitted into Class 9 and Class 11 in top-ranking private residential schools across India, with the Central Government covering all tuition fees, hostel expenses, uniforms, books, and mess fees up to Class 12.",
    purpose: "Bridges the educational quality gap for marginalized Dalit students by granting access to elite CBSE residential schools, supporting SDG 4 and SDG 10.",
    benefits: "100% free education in top CBSE residential schools (school fee, hostel, mess, books, uniform up to ₹1,35,000 per student per year paid by the Central Government).",
    financialBenefit: "Full scholarship up to ₹1,35,000/year (covering 100% school, hostel & mess charges)",
    benefitFrequency: "Annual recurring scholarship through Class 12 completion",
    impact: "Enables thousands of underprivileged SC students from rural and small-town backgrounds to enter premier IITs, AIIMS, and national universities.",
    specificAdvantages: "No out-of-pocket costs for poor families; government reimburses schools directly through DBT/e-grant mode.",
    detailedEligibility: {
      ageRequirement: "Class 9 entry: Born between 01-04-2007 and 31-03-2011; Class 11 entry: Born between 01-04-2005 and 31-03-2009.",
      genderRequirement: "All genders eligible (girls and boys).",
      incomeLimit: "Annual parental income from all sources must not exceed ₹2,50,000.",
      educationRequirement: "Currently studying in Class 8 (for admission in Class 9) or Class 10 (for admission in Class 11).",
      occupationRequirement: "Student.",
      casteCategoryRequirement: "Scheduled Caste (SC) community only.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Must qualify in the National Entrance Test for SHRESHTA (NETS)."
    },
    mandatoryConditions: [
      "Must belong to the Scheduled Caste (SC) category verified via valid Caste Certificate",
      "Family annual income below ₹2,50,000 per year",
      "Must appear and qualify in the National Entrance Test for SHRESHTA (NETS) conducted by NTA"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Non-SC category students",
      "Students whose parental income exceeds ₹2.5 Lakh/year"
    ],
    documents: [
      { name: "Caste Certificate (SC)", why: "Proof of Scheduled Caste status.", mandatory: true, issuingAuthority: "Competent Revenue Authority (Tahsildar/SDM)", format: "Official Certificate", validity: "Permanent" },
      { name: "Income Certificate (Below ₹2.5 Lakh)", why: "Confirms income ceiling.", mandatory: true, issuingAuthority: "Tahsildar / Competent Authority", format: "Current Year Certificate", validity: "Valid" },
      { name: "Class 8 / Class 10 Marksheet & Bonafide Certificate", why: "Academic qualification proof.", mandatory: true, issuingAuthority: "Current School Headmaster", format: "Marksheet Copy", validity: "Current Year" },
      { name: "Aadhaar Card", why: "Biometric student identification.", mandatory: true, issuingAuthority: "UIDAI", format: "Copy", validity: "Permanent" }
    ],
    applicationMode: "100% Online via NTA Portal (shreshta.nta.nic.in)",
    process: [
      "Step 1: Visit shreshta.nta.nic.in when annual NETS exam registration opens in February/March.",
      "Step 2: Register online and fill the NETS application form with academic details and caste certificate.",
      "Step 3: Download admit card and appear for the computer-based entrance examination.",
      "Step 4: NTA declares all-India merit list based on test scores.",
      "Step 5: Attend online web-counselling and select preferred top CBSE residential schools.",
      "Step 6: School verifies documents and admits student into Class 9 or 11 with 100% free boarding and education."
    ],
    offlineProcess: "Online application through NTA portal only. School principals and CSC centres assist students with online filing.",
    commonMistakes: [
      "Missing the NTA exam application deadline in March.",
      "Income certificate not issued in the name of the parent."
    ],
    openingDate: "Annual entrance exam registration opens in February/March each year",
    processingTime: "Entrance exam held in May; school admissions completed by July",
    renewalRequired: "Automatic continuation from Class 9 to 12 upon securing passing marks",
    trackingProcedure: "Track application and test rank on shreshta.nta.nic.in using application number.",
    correctionProcedure: "Use NTA application correction window to edit exam centre or personal details.",
    disbursementMethod: "Direct payment from Ministry of Social Justice to CBSE Residential School",
    disbursementDetails: "Tuition fee, hostel charges, mess bill, and stationery allowance disbursed directly to the school account.",
    faqs: [
      { q: "Is there any exam fee for NETS?", a: "No. The National Entrance Test for SHRESHTA is 100% free with zero application fee." },
      { q: "Which schools can students study in?", a: "Top-ranking private residential schools affiliated to CBSE identified by the Ministry based on academic performance." }
    ],
    helpline: "NTA SHRESHTA Helpdesk: 011-40759000 / 011-69227700",
    email: "shreshta@nta.ac.in",
    rules: [{ fact: "householdCategory", op: "eq", value: "SC" }, { fact: "income", op: "lte", value: 250000 }]
  },

  "pm-yasasvi": {
    id: "pm-yasasvi",
    name: "PM Young Achievers Scholarship Award Scheme for Vibrant India (PM-YASASVI)",
    title: "PM Young Achievers Scholarship Award Scheme for Vibrant India (PM-YASASVI)",
    category: "Education & Scholarships",
    subcategory: "School scholarships",
    sdg: "SDG 4: Quality Education",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 Union Territories",
    department: "Department of Social Justice and Empowerment, Ministry of Social Justice",
    targetBeneficiary: "Other Backward Class (OBC), Economically Backward Class (EBC), and De-Notified Tribe (DNT) students in Classes 9 to 12",
    beneficiaryType: "Students",
    minAge: 13,
    maxAge: 19,
    incomeMax: 250000,
    status: "Active",
    launchYear: 2022,
    officialWebsite: "https://yet.nta.ac.in",
    applicationUrl: "https://scholarships.gov.in",
    sourceUrl: "https://socialjustice.gov.in",
    description: "Pre-matric and Top-Class school scholarship providing ₹75,000/year (Class 9-10) and ₹1,25,000/year (Class 11-12) to meritorious OBC, EBC, and DNT students studying in identified top schools.",
    detailedDescription: "PM-YASASVI is a premier umbrella scholarship for marginalized Other Backward Classes (OBC), Economically Backward Classes (EBC), and Nomadic/De-Notified Tribes (DNT). It offers Top-Class School Education scholarships of ₹75,000 per annum for Class 9 and 10 students, and ₹1,25,000 per annum for Class 11 and 12 students admitted to identified top-performing schools across India. Funds are credited straight into the student's Aadhaar-seeded bank account via the National Scholarship Portal (NSP).",
    purpose: "Promotes educational excellence and prevents dropouts among disadvantaged backward class students, supporting SDG 4 and SDG 10.",
    benefits: "Direct scholarship of ₹75,000 per year for Class 9-10 and ₹1,25,000 per year for Class 11-12 covering tuition fee, hostel charges, books, and computer equipment.",
    financialBenefit: "₹75,000/year (Class 9-10) or ₹1,25,000/year (Class 11-12) via DBT",
    benefitFrequency: "Annual recurring scholarship",
    impact: "Over 3.5 lakh OBC/EBC/DNT students supported annually, enabling top high school completion.",
    specificAdvantages: "Direct scholarship credit via PFMS without state intermediary delays.",
    detailedEligibility: {
      ageRequirement: "13 to 19 years.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Annual parental income not exceeding ₹2,50,000.",
      educationRequirement: "Studying in Class 9, 10, 11, or 12 in an identified top school.",
      occupationRequirement: "Student.",
      casteCategoryRequirement: "OBC, EBC, or DNT/SNT categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Family income within benchmark."
    },
    mandatoryConditions: [
      "Must belong to OBC, EBC, or DNT category with valid community certificate",
      "Annual family income must not exceed ₹2.5 Lakh per year",
      "Must be studying in an identified top school listed on the National Scholarship Portal"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Students receiving other central scholarship grants",
      "Family income exceeding ₹2.5 Lakh/year"
    ],
    documents: [
      { name: "OBC / EBC / DNT Caste Certificate", why: "Community eligibility proof.", mandatory: true, issuingAuthority: "Competent Revenue Authority", format: "Official Certificate", validity: "Valid" },
      { name: "Income Certificate (Below ₹2.5 Lakh)", why: "Confirms income limit.", mandatory: true, issuingAuthority: "Tahsildar", format: "Current Certificate", validity: "Valid" },
      { name: "Previous Year Marksheet (Minimum 60% marks)", why: "Academic merit proof.", mandatory: true, issuingAuthority: "School Principal", format: "Marksheet", validity: "Permanent" },
      { name: "Aadhaar-Linked Bank Account", why: "For DBT scholarship transfer.", mandatory: true, issuingAuthority: "Bank", format: "NPCI seeded", validity: "Active" }
    ],
    applicationMode: "Online via National Scholarship Portal (scholarships.gov.in)",
    process: [
      "Step 1: Visit scholarships.gov.in and register with One-Time Registration (OTR).",
      "Step 2: Under Ministry of Social Justice schemes, select 'PM-YASASVI Top Class School Education'.",
      "Step 3: Enter academic records, caste certificate, and income details.",
      "Step 4: School verifies student details on the NSP portal.",
      "Step 5: District Nodal Officer (DNO) and Ministry approve the merit list.",
      "Step 6: Scholarship amount (₹75,000 or ₹1,25,000) is credited directly via PFMS DBT."
    ],
    offlineProcess: "Apply online on NSP. School nodal officer assists students with online portal submission.",
    commonMistakes: [
      "Applying for a school that is not on the Ministry's identified top school roster.",
      "Bank account not active or not in the student's name."
    ],
    openingDate: "Opens annually on NSP between July and October",
    processingTime: "Sanctioned within 60 to 90 days after school verification",
    renewalRequired: "Annual renewal on NSP upon promotion to subsequent class",
    trackingProcedure: "Track application status on scholarships.gov.in using your OTR application ID.",
    correctionProcedure: "Request school verification officer to mark application for correction on NSP.",
    disbursementMethod: "Direct Benefit Transfer (DBT via PFMS) to Student Bank Account",
    disbursementDetails: "Funds transferred electronically through PFMS into the student's Aadhaar-linked savings account.",
    faqs: [
      { q: "Is an entrance exam compulsory?", a: "Selection for top schools is based on Class 8 or Class 10 academic merit scores and merit lists prepared on the National Scholarship Portal." }
    ],
    helpline: "NSP National Helpdesk: 0120-6619540 / MoSJE: 011-23388277",
    email: "helpdesk-nsp@gov.in",
    rules: [{ fact: "householdCategory", op: "in", value: ["OBC", "EWS"] }, { fact: "income", op: "lte", value: 250000 }]
  },

  "namaste-scheme": {
    id: "namaste-scheme",
    name: "NAMASTE Scheme (National Action for Mechanised Sanitation Ecosystem)",
    title: "NAMASTE Scheme (National Action for Mechanised Sanitation Ecosystem)",
    category: "Social Justice & Disability Support",
    subcategory: "SC/ST welfare",
    sdg: "SDG 8: Decent Work & Economic Growth",
    level: "Central",
    state: "All India",
    stateCoverage: "All 4,800+ Urban Local Bodies (ULBs) across India",
    department: "Ministry of Housing and Urban Affairs & Ministry of Social Justice and Empowerment",
    targetBeneficiary: "Sewer and septic tank sanitation workers (SSWs) and manual scavengers",
    beneficiaryType: "Sanitation Workers",
    minAge: 18,
    maxAge: 60,
    incomeMax: null,
    status: "Active",
    launchYear: 2022,
    officialWebsite: "https://namaste.gov.in",
    applicationUrl: "https://namaste.gov.in",
    sourceUrl: "https://socialjustice.gov.in",
    description: "Mission to achieve zero fatalities in sanitation work by providing sewer workers with free PPE safety gear, mechanised cleaning machine capital subsidies up to ₹5 Lakh, and Ayushman Bharat health insurance.",
    detailedDescription: "The NAMASTE Scheme is a joint national initiative to eliminate hazardous manual entry into sewers and septic tanks. Every identified sewer and septic tank worker receives free digital profiling (NAMASTE photo ID card), free PPE kits with gas detectors, free Ayushman Bharat PM-JAY health insurance cards, and skill training with a ₹3,000 stipend. To turn sewer workers into sanitation entrepreneurs ('Sanipreneurs'), the government provides up to 50% capital subsidy (up to ₹5,00,000) for procuring modern mechanised desilting machines and sewer vacuum trucks.",
    purpose: "Achieves zero sanitation fatalities, eradicates hazardous manual scavenging, and provides economic dignity and mechanized equipment to sanitation workers, supporting SDG 3, SDG 6, and SDG 8.",
    benefits: "Free Personal Protective Equipment (PPE) safety kit, free Ayushman Bharat health insurance, certified skill training with ₹3,000 stipend, and up to ₹5,00,000 capital subsidy for purchasing sewer cleaning machines.",
    financialBenefit: "Capital subsidy up to ₹5,00,000 for sewer machines + Free ₹5 Lakh health cover + Free PPE kits",
    benefitFrequency: "One-time asset subsidy + Annual health insurance coverage",
    impact: "Over 85,000 sewer workers profiled; hazardous entry deaths curtailed through complete machine-led desilting.",
    specificAdvantages: "Transforms manual scavengers into mechanized contractors ('Sanipreneurs') with guaranteed urban municipal contracts.",
    detailedEligibility: {
      ageRequirement: "18 to 60 years.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "No income limit.",
      educationRequirement: "None.",
      occupationRequirement: "Sewer and septic tank worker / sanitation worker.",
      casteCategoryRequirement: "Open to all categories (majority SC/ST workers).",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Identified during Urban Local Body (ULB) sanitation worker profiling."
    },
    mandatoryConditions: [
      "Must be engaged in sewer or septic tank cleaning work verified by the local Urban Local Body (ULB)",
      "Must participate in the NAMASTE profiling survey and receive a NAMASTE ID card",
      "For machinery loans, must form a group or register as an enterprise under NSKFDC"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Non-sanitation workers"
    ],
    documents: [
      { name: "NAMASTE Worker ID Card / ULB Verification Certificate", why: "Proof of sewer/sanitation work.", mandatory: true, issuingAuthority: "Urban Local Body (Municipality) / NSKFDC", format: "NAMASTE Smart Card", validity: "Permanent" },
      { name: "Aadhaar Card & Bank Account Passbook", why: "Identity and DBT subsidy credit.", mandatory: true, issuingAuthority: "UIDAI / Bank", format: "Copies", validity: "Permanent" },
      { name: "Quotation for Mechanised Sewer Cleaning Equipment", why: "Required for claiming capital machine subsidy.", mandatory: false, issuingAuthority: "Certified Machine Manufacturer", format: "Proforma Invoice", validity: "Current" }
    ],
    applicationMode: "Profiling through local Municipal Corporation / ULB & Online via namaste.gov.in",
    process: [
      "Step 1: Participate in the NAMASTE mobile profiling camp conducted by your local Municipal Corporation.",
      "Step 2: Provide your biometric Aadhaar and photograph to receive your NAMASTE Sanitation Worker ID Card.",
      "Step 3: Collect your free PPE safety equipment kit and Ayushman Bharat health card.",
      "Step 4: Attend the 3-day mechanized sanitation safety training and receive ₹3,000 stipend.",
      "Step 5: If applying to buy a desilting machine/suction truck, submit project proposal to National Safai Karamcharis Finance & Development Corporation (NSKFDC).",
      "Step 6: Bank sanctions machine loan; government credits up to ₹5 Lakh capital subsidy directly to the vendor."
    ],
    offlineProcess: "Meet the Health Officer / Sanitary Inspector at your Municipal Corporation or Municipality office.",
    commonMistakes: [
      "Cleaning sewers without the mandatory PPE gas-detector kit (strictly penalized under law).",
      "Not registering during the Urban Local Body profiling drive."
    ],
    openingDate: "Continuous profiling active across all Indian cities and towns",
    processingTime: "Immediate profiling and kit handover; machinery loans approved in 30 days",
    renewalRequired: "Safety equipment kits replaced every 2 years",
    trackingProcedure: "Track worker ID on namaste.gov.in or inquire at the Municipal Corporation health section.",
    correctionProcedure: "Contact Municipal Nodal Officer for NAMASTE.",
    disbursementMethod: "Direct asset delivery (PPE kits) + DBT subsidy to machine manufacturer / loan account",
    disbursementDetails: "Safety gear distributed directly; capital machine subsidies credited to the lending bank account via NSKFDC.",
    faqs: [
      { q: "Is manual entry into sewers allowed?", a: "No. Hazardous manual entry is strictly illegal under the MS Act 2013; all cleaning must be 100% mechanized under NAMASTE." }
    ],
    helpline: "NSKFDC Toll-Free: 1800-11-0505 / MoSJE: 011-23388277",
    email: "namaste-sw@gov.in",
    rules: [{ fact: "occupation", op: "in", value: ["DAILY_WAGE", "OTHER"] }]
  },

  "ddu-gky": {
    id: "ddu-gky",
    name: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)",
    title: "Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)",
    category: "Employment & Skill Development",
    subcategory: "Skill training",
    sdg: "SDG 8: Decent Work & Economic Growth",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 Union Territories",
    department: "Ministry of Rural Development (MoRD)",
    targetBeneficiary: "Poor rural youth aged 15-35 from MGNREGA, BPL, and Antyodaya households",
    beneficiaryType: "Job Seekers & Rural Youth",
    minAge: 15,
    maxAge: 35,
    incomeMax: null,
    status: "Active",
    launchYear: 2014,
    officialWebsite: "https://ddugky.gov.in",
    applicationUrl: "https://kaushalpanjee.nic.in",
    sourceUrl: "https://rural.nic.in",
    description: "Placement-linked residential skill training program for rural poor youth guaranteeing minimum 70% job placement in formal private sector companies with monthly salaries.",
    detailedDescription: "DDU-GKY is a market-led, placement-linked skill initiative under the National Rural Livelihoods Mission (NRLM). It trains rural poor youth in demand-driven skills (hospitality, retail, healthcare, logistics, electronics, automotive, BPO) through fully residential training centres. Training, boarding, lodging, uniforms, books, and tablets are 100% free. The scheme mandates that training partners must place at least 70% of certified candidates into formal jobs with wages above minimum statutory benchmarks, followed by 6 months of post-placement retention support.",
    purpose: "Transforms rural youth from subsistence labor into productive formal economic contributors, bridging the rural-urban wage divide, supporting SDG 1 and SDG 8.",
    benefits: "100% free residential training with boarding and lodging, free uniforms, tablets, study materials, recognized national certification, and guaranteed job placement with post-placement financial support.",
    financialBenefit: "Free residential training worth ₹35,000 to ₹70,000 per youth + Monthly post-placement allowance",
    benefitFrequency: "One-time residential training course (3 to 12 months duration)",
    impact: "Over 14 lakh rural youth trained and placed in corporate jobs, creating sustainable remittances for rural poor families.",
    specificAdvantages: "Mandatory 70% corporate placement guarantee; residential boarding eliminates rural commuting difficulties.",
    detailedEligibility: {
      ageRequirement: "15 to 35 years (up to 45 years for Women, SC/ST, Persons with Disabilities, Transgender).",
      genderRequirement: "All genders eligible (minimum 33% female reservation).",
      incomeLimit: "Must belong to rural poor families (MGNREGA household with 15+ days work, BPL, SECC, or RSBY).",
      educationRequirement: "Minimum Class 5 pass up to 12th/Graduate depending on job role.",
      occupationRequirement: "Unemployed rural youth.",
      casteCategoryRequirement: "Open to all categories (minimum 50% SC/ST, 15% Minorities).",
      residenceRequirement: "Resident of rural India.",
      familyConditions: "Member of a verified rural poor household."
    },
    mandatoryConditions: [
      "Must be a rural resident aged between 15 and 35 years",
      "Family must be identified under rural deprivation criteria (MGNREGA job card, BPL card, or SHG member family)",
      "Must commit to full-time residential training and relocation for formal corporate employment"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Urban residents",
      "Youth already placed in formal sector jobs with active PF accounts"
    ],
    documents: [
      { name: "Aadhaar Card", why: "Mandatory biometric identification.", mandatory: true, issuingAuthority: "UIDAI", format: "Original / Copy", validity: "Permanent" },
      { name: "Rural Poor Proof (MGNREGA Job Card / BPL Ration Card / SECC / SHG Letter)", why: "Confirms rural poor status.", mandatory: true, issuingAuthority: "Gram Panchayat / BDO / NRLM", format: "Copy", validity: "Active" },
      { name: "Educational Certificate / Marksheet", why: "Qualifies for specific sector trade.", mandatory: true, issuingAuthority: "School / College", format: "Marksheet Copy", validity: "Permanent" },
      { name: "Bank Account Passbook", why: "For receiving post-placement retention allowance.", mandatory: true, issuingAuthority: "Bank", format: "Passbook copy", validity: "Active" }
    ],
    applicationMode: "Online via Kaushal Panjee (kaushalpanjee.nic.in) & Offline at Block Development Office / Rozgar Melas",
    process: [
      "Step 1: Register on kaushalpanjee.nic.in using your mobile number and Aadhaar.",
      "Step 2: Attend the local Mobilization Camp or Rozgar Mela organized by the State Rural Livelihood Mission (SRLM).",
      "Step 3: Undergo career counseling and choose your training sector (e.g. Retail, IT-BPO, Healthcare, Hospitality).",
      "Step 4: Join the accredited residential training centre with 100% free food and accommodation.",
      "Step 5: Complete technical, computer, and soft-skill English communication training.",
      "Step 6: Attend campus recruitment interviews and join your formal corporate employer."
    ],
    offlineProcess: "Meet the Block Mission Manager (NRLM) at your local Block Development Office (BDO) or attend village mobilization camps.",
    commonMistakes: [
      "Leaving the residential training midway before completing assessment.",
      "Providing an urban address (DDU-GKY is exclusively for rural residents)."
    ],
    openingDate: "Continuous enrollment with monthly new residential batches",
    processingTime: "Course duration spans 3 to 12 months depending on trade",
    renewalRequired: "One-time training; post-placement tracking for 6 to 12 months",
    trackingProcedure: "Track candidate progress on ddugky.gov.in using candidate PRN number.",
    correctionProcedure: "Contact Project Implementing Agency (PIA) centre coordinator.",
    disbursementMethod: "Direct training and boarding funding to training partner + DBT post-placement support to youth",
    disbursementDetails: "Training and boarding costs funded by Ministry of Rural Development; monthly post-placement allowance credited directly via DBT to candidate.",
    faqs: [
      { q: "Is boarding and food completely free?", a: "Yes. Food, AC/clean hostel accommodation, uniforms, and learning materials are 100% free." },
      { q: "What is the post-placement allowance?", a: "Candidates placed within their home district receive ₹1,000/month for 2 months; placed outside district: ₹1,000/month for 3 months; placed outside state: ₹1,000/month for 6 months." }
    ],
    helpline: "MoRD DDU-GKY Helpdesk: 011-24601138 / Toll-Free: 1800-11-6446",
    email: "support.ddugky@gov.in",
    rules: [{ fact: "area", op: "eq", value: "RURAL" }, { fact: "age", op: "gte", value: 15 }, { fact: "age", op: "lte", value: 35 }]
  },

  "national-career-service": {
    id: "national-career-service",
    name: "National Career Service (NCS)",
    title: "National Career Service (NCS)",
    category: "Employment & Skill Development",
    subcategory: "Employment assistance",
    sdg: "SDG 8: Decent Work & Economic Growth",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 Union Territories",
    department: "Ministry of Labour and Employment",
    targetBeneficiary: "All job seekers, fresh graduates, skilled professionals, and gig workers",
    beneficiaryType: "Job Seekers & Youth",
    minAge: 18,
    maxAge: 65,
    incomeMax: null,
    status: "Active",
    launchYear: 2015,
    officialWebsite: "https://www.ncs.gov.in",
    applicationUrl: "https://www.ncs.gov.in",
    sourceUrl: "https://labour.gov.in",
    description: "National employment exchange digital platform connecting over 3.5 crore job seekers with 38 lakh verified employers, offering free job listings, career counseling, and job melas.",
    detailedDescription: "National Career Service (NCS) is India's official public employment platform, modernizing erstwhile physical employment exchanges into a nationwide digital ecosystem. Job seekers access thousands of verified active vacancies in Central Government, State Governments, public sector undertakings, and leading private corporate enterprises with zero fees. The platform integrates career counseling, psychometric aptitude testing, free vocational courses via Microsoft and TCS iON, and regular online/offline Job Fairs (Rozgar Melas) in every district.",
    purpose: "Connects employers and job seekers on a verified, transparent, fee-free national platform, eliminating fraudulent recruitment agencies and advancing SDG 8.",
    benefits: "Free job application across thousands of public and private vacancies, verified employer profiles, free career counseling, psychometric assessments, digital employment cards, and job mela participation.",
    financialBenefit: "100% Free career matchmaking, counseling, and interview scheduling (Zero recruitment fee)",
    benefitFrequency: "Continuous ongoing service",
    impact: "Over 3.5 crore registered job seekers; millions of verified placements facilitated across healthcare, logistics, manufacturing, IT, banking, and public sectors.",
    specificAdvantages: "Completely scam-free and verified by the Ministry of Labour; integrated with DigiLocker and e-Shram portals.",
    detailedEligibility: {
      ageRequirement: "18 to 65 years.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "No income limit.",
      educationRequirement: "All qualification levels (from literate, Class 10, Diploma, up to Ph.D.).",
      occupationRequirement: "Any job seeker (freshers, experienced, gig workers).",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "None."
    },
    mandatoryConditions: [
      "Must register on the NCS portal (ncs.gov.in) with valid Aadhaar or government photo ID",
      "Completion of candidate profile with educational qualifications and skills"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Fraudulent candidate profiles"
    ],
    documents: [
      { name: "Government Photo ID (Aadhaar / PAN / Voter ID)", why: "Identity verification.", mandatory: true, issuingAuthority: "UIDAI / Govt", format: "Digital ID", validity: "Permanent" },
      { name: "Resume / Curriculum Vitae", why: "Specifies work experience and skills.", mandatory: false, issuingAuthority: "Candidate", format: "PDF / Word upload", validity: "Current" },
      { name: "Educational Marksheets & Degrees", why: "Verification of educational qualifications.", mandatory: false, issuingAuthority: "University / Board", format: "DigiLocker / Scans", validity: "Permanent" }
    ],
    applicationMode: "100% Online via ncs.gov.in & Offline at Model Career Centres (MCC)",
    process: [
      "Step 1: Visit ncs.gov.in and click 'Jobseeker' > 'Register'.",
      "Step 2: Enter Aadhaar / PAN for instant e-KYC authentication.",
      "Step 3: Complete your educational history, technical skills, and preferred work locations.",
      "Step 4: Download your official National Career Service (NCS) Jobseeker ID Card.",
      "Step 5: Search and filter thousands of verified active vacancies by state, salary, and job role.",
      "Step 6: Apply with one click; verified employers contact you directly for interview schedules."
    ],
    offlineProcess: "Walk into any Model Career Centre (MCC) or District Employment Exchange across India for in-person counseling and offline job mela registration.",
    commonMistakes: [
      "Paying fees to unauthorized third-party job agents (NCS and government job applications are strictly 100% free under law).",
      "Not updating skills and mobile numbers on the candidate profile."
    ],
    openingDate: "Permanently operational 24x7x365",
    processingTime: "Instant registration and immediate job application",
    renewalRequired: "Profile remains active; periodic updates recommended",
    trackingProcedure: "Track applied jobs and interview invitations in the 'Candidate Dashboard' on ncs.gov.in.",
    correctionProcedure: "Edit candidate profile directly on ncs.gov.in.",
    disbursementMethod: "Direct employer-to-candidate recruitment matching",
    disbursementDetails: "Employers schedule online or in-person interviews; successful candidates receive direct employment offer letters.",
    faqs: [
      { q: "Is there any charge to register or apply for jobs on NCS?", a: "No. National Career Service is 100% free for both job seekers and employers." },
      { q: "Are government jobs listed on NCS?", a: "Yes. Major Central Ministries, State Departments, and PSUs list their official recruitment openings on NCS." }
    ],
    helpline: "NCS National Toll-Free Helpline: 1514 (Available Tuesday to Sunday, 8 AM - 8 PM)",
    email: "support.ncs@gov.in",
    rules: [{ fact: "age", op: "gte", value: 18 }]
  },

  "paramparagat-krishi": {
    id: "paramparagat-krishi",
    name: "Paramparagat Krishi Vikas Yojana (PKVY)",
    title: "Paramparagat Krishi Vikas Yojana (PKVY)",
    category: "Farmers & Agriculture",
    subcategory: "Agricultural subsidies",
    sdg: "SDG 2: Zero Hunger",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 Union Territories",
    department: "Department of Agriculture and Farmers Welfare, Ministry of Agriculture",
    targetBeneficiary: "Farmers cultivating in clusters adopting chemical-free traditional organic farming",
    beneficiaryType: "Farmers",
    minAge: 18,
    maxAge: 85,
    incomeMax: null,
    status: "Active",
    launchYear: 2015,
    officialWebsite: "https://pgsindia-ncof.gov.in",
    applicationUrl: "https://jaivikkheti.in",
    sourceUrl: "https://agricoop.nic.in",
    description: "Financial assistance of ₹50,000 per hectare over 3 years (₹31,000 direct DBT to farmer for organic inputs + ₹19,000 for PGS organic certification, packaging, and marketing).",
    detailedDescription: "Paramparagat Krishi Vikas Yojana (PKVY) promotes traditional, sustainable, and chemical-free organic farming across India. Implemented on a cluster basis (clusters of 20 or more farmers holding 20 hectares combined), the government provides financial assistance of ₹50,000 per hectare over 3 years. ₹31,000 per hectare is transferred directly to the farmer via DBT for organic seeds, bio-fertilizers, vermicompost, and botanical extracts. The remaining ₹19,000 covers free Participatory Guarantee System (PGS-India) organic certification, testing, and marketing on the Jaivik Kheti e-commerce portal.",
    purpose: "Restores soil biological fertility, eliminates dangerous chemical pesticide residues, lowers cultivation costs for dryland farmers, and opens premium organic market prices, supporting SDG 2 and SDG 12.",
    benefits: "Direct financial assistance of ₹31,000/ha for organic inputs + free PGS-India organic certification + free soil testing + direct onboarding to the Jaivik Kheti national marketplace.",
    financialBenefit: "Financial assistance of ₹50,000 per hectare over 3 years (₹31,000 direct DBT to farmer)",
    benefitFrequency: "Annual phased installments over 3-year organic conversion cycle",
    impact: "Over 12 lakh hectares certified under zero-budget natural and organic farming, raising net farmer profits by 20-30% through organic price premiums.",
    specificAdvantages: "Zero certification charges under PGS-India; farmer-to-consumer direct selling without middlemen on jaivikkheti.in.",
    detailedEligibility: {
      ageRequirement: "18 years and above.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "No income limit.",
      educationRequirement: "None.",
      occupationRequirement: "Farmer cultivating agricultural land.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Must join or form a local farmer cluster of minimum 20 farmers (20 hectares)."
    },
    mandatoryConditions: [
      "Must own or cultivate agricultural land within an identified 20-hectare organic farming cluster",
      "Must commit to complete stoppage of synthetic chemical fertilizers and chemical pesticides",
      "Must adopt Participatory Guarantee System (PGS-India) peer inspection protocols"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Individual scattered farm plots not part of any recognized farming cluster",
      "Farms continuing chemical pesticide applications"
    ],
    documents: [
      { name: "Agricultural Land Records (RTC / Khasra / Khatauni)", why: "Proof of land acreage and survey boundary.", mandatory: true, issuingAuthority: "State Revenue Department", format: "Document copy", validity: "Current" },
      { name: "Aadhaar Card", why: "Farmer identification and e-KYC.", mandatory: true, issuingAuthority: "UIDAI", format: "Copy", validity: "Permanent" },
      { name: "Aadhaar-Linked Bank Passbook", why: "For receiving ₹31,000/ha DBT organic input grant.", mandatory: true, issuingAuthority: "Bank", format: "NPCI seeded", validity: "Active" }
    ],
    applicationMode: "Cluster Formation via Block Agriculture Office & Online via pgsindia-ncof.gov.in",
    process: [
      "Step 1: Form a group of 20 or more interested farmers holding 20 hectares contiguous farmland in your village.",
      "Step 2: Approach your Block Agriculture Officer (BAO) or District Horticulture Officer.",
      "Step 3: Register the cluster under the Participatory Guarantee System on pgsindia-ncof.gov.in.",
      "Step 4: Regional Council approves the cluster and registers farmers.",
      "Step 5: First installment of input subsidy is transferred directly via DBT to each farmer's bank account.",
      "Step 6: Follow organic protocols, undergo peer inspection, receive green PGS organic certification, and sell on jaivikkheti.in."
    ],
    offlineProcess: "Meet your local Agriculture Extension Officer or Raitha Samparka Kendra / Krishi Vigyan Kendra (KVK).",
    commonMistakes: [
      "Applying individually without forming a cluster (minimum 20 farmers holding 20 ha is required).",
      "Using non-approved synthetic weedicides during the 3-year conversion period."
    ],
    openingDate: "Continuous cluster sanctioning throughout the financial year",
    processingTime: "Cluster approved in 30 days; 3-year phased organic certification",
    renewalRequired: "Annual PGS peer review certification",
    trackingProcedure: "Track cluster and farmer certification status on pgsindia-ncof.gov.in by entering state and district.",
    correctionProcedure: "Contact Regional Council nodal agency for cluster updates.",
    disbursementMethod: "Direct Benefit Transfer (DBT) to Farmer Bank Account + Certification Grants",
    disbursementDetails: "Input subsidy credited directly into the farmer's bank account via PFMS across 3 years. Certification and testing expenses settled by the state nodal agency.",
    faqs: [
      { q: "What is the PGS-India organic certificate?", a: "A decentralized organic certification recognized by FSSAI for domestic organic food sales, operated at zero cost to farmers." },
      { q: "Where can farmers sell their organic produce?", a: "Directly on the Government Jaivik Kheti e-commerce portal (jaivikkheti.in) or at local organic mandis at premium prices." }
    ],
    helpline: "National Centre of Organic Farming (NCOF): 0120-2764906 / Kisan Helpline: 1800-180-1551",
    email: "ncof@nic.in",
    rules: [{ fact: "occupation", op: "eq", value: "FARMER" }]
  },

  "pm-matsya-sampada": {
    id: "pm-matsya-sampada",
    name: "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
    title: "Pradhan Mantri Matsya Sampada Yojana (PMMSY)",
    category: "Farmers & Agriculture",
    subcategory: "Equipment assistance",
    sdg: "SDG 14: Life Below Water",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 Union Territories (Marine and Inland)",
    department: "Department of Fisheries, Ministry of Fisheries, Animal Husbandry and Dairying",
    targetBeneficiary: "Fishers, fish farmers, fish workers, fisheries cooperatives, and entrepreneurs",
    beneficiaryType: "Fishers & Aquaculture Farmers",
    minAge: 18,
    maxAge: 70,
    incomeMax: null,
    status: "Active",
    launchYear: 2020,
    officialWebsite: "https://pmmsy.dof.gov.in",
    applicationUrl: "https://pmmsy.dof.gov.in",
    sourceUrl: "https://dof.gov.in",
    description: "Flagship fisheries and aquaculture scheme with ₹20,050 Crore outlay providing 40% to 60% government subsidy for fish ponds, biofloc units, RAS, deep-sea fishing vessels, and cold storage.",
    detailedDescription: "PMMSY is the highest-ever investment in Indian fisheries history. It modernizes marine and inland aquaculture by offering 40% government subsidy (for General category) and 60% government subsidy (for SC, ST, and Women beneficiaries) on a wide spectrum of fisheries projects. Covered activities include new freshwater/saline fish and shrimp pond construction, Recirculating Aquaculture Systems (RAS), Biofloc units, modern fishing boats, marine cages, insulated fish vans, live fish retail kiosks, and ice plants.",
    purpose: "Drives the Blue Revolution, doubles fishers' incomes, cuts post-harvest marine losses from 20% to under 10%, and boosts seafood exports, supporting SDG 1, SDG 8, and SDG 14.",
    benefits: "Direct capital subsidy of 40% (General) to 60% (Women / SC / ST) on project costs ranging from ₹50,000 (small fish retail kiosk) up to ₹50,00,000+ (commercial RAS/biofloc units and deep-sea vessels).",
    financialBenefit: "40% to 60% capital subsidy on commercial fisheries and aquaculture projects",
    benefitFrequency: "Milestone-based project capital subsidy",
    impact: "Fish production has surged past 175 lakh tonnes; over 55 lakh direct and indirect employment opportunities generated across coastal and inland regions.",
    specificAdvantages: "Women entrepreneurs and SC/ST farmers receive an enhanced 60% subsidy; covers both small backyard ponds and large export processing facilities.",
    detailedEligibility: {
      ageRequirement: "18 to 70 years.",
      genderRequirement: "All genders eligible (women receive enhanced 60% subsidy).",
      incomeLimit: "No income limit.",
      educationRequirement: "None.",
      occupationRequirement: "Fisher, fish farmer, self-help group, or fisheries entrepreneur.",
      casteCategoryRequirement: "Open to all (60% subsidy for SC/ST/Women; 40% for General/OBC men).",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Must own or hold on lease suitable land or water body for the project period (minimum 7 years for land lease)."
    },
    mandatoryConditions: [
      "Must have land/water body ownership documents or registered long-term lease agreement (minimum 7 to 10 years)",
      "Must contribute minimum 40% to 60% balance project cost through personal equity or bank loan",
      "Detailed Project Report (DPR) approved by the District Fisheries Development Officer"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Projects without registered land/water access",
      "Applicants defaulting on earlier fisheries corporation loans"
    ],
    documents: [
      { name: "Land / Waterbody Ownership Document or Registered Lease Deed", why: "Proof of site where aquaculture pond / RAS / biofloc unit will be built.", mandatory: true, issuingAuthority: "Sub-Registrar / Revenue Authority", format: "Registered Deed", validity: "Minimum 7-10 years" },
      { name: "Detailed Project Report (DPR) with Technical Estimates", why: "Specifies engineering civil work, aerators, seed, feed, and capital costs.", mandatory: true, issuingAuthority: "Certified Aquaculture Consultant / Applicant", format: "DPR Document", validity: "Current" },
      { name: "Caste Certificate (for SC/ST) & Gender Proof", why: "Determines 60% subsidy eligibility.", mandatory: false, issuingAuthority: "Competent Revenue Authority", format: "Certificate", validity: "Valid" },
      { name: "Bank Passbook & Consent Letter from Bank (for loan component)", why: "For subsidy disbursement.", mandatory: true, issuingAuthority: "Bank", format: "Bank letter", validity: "Current" }
    ],
    applicationMode: "Online via pmmsy.dof.gov.in & Offline through District Fisheries Office",
    process: [
      "Step 1: Choose an eligible fisheries activity (e.g. Biofloc, RAS, pond excavation, ice plant, motorcycle with icebox).",
      "Step 2: Prepare a Detailed Project Report (DPR) with certified quotations for equipment.",
      "Step 3: Register and submit application on pmmsy.dof.gov.in.",
      "Step 4: District Level Committee (DLC) headed by the District Magistrate scrutinizes the proposal.",
      "Step 5: State Fisheries Directorate sanctions administrative approval.",
      "Step 6: Construct the unit / buy equipment; Fisheries officer inspects site and releases subsidy in installments via DBT."
    ],
    offlineProcess: "Submit application at the office of the Assistant Director / District Fisheries Development Officer in your district headquarters.",
    commonMistakes: [
      "Commencing civil construction before receiving formal administrative approval from the Fisheries Department.",
      "Submitting an unregistered lease agreement (lease MUST be registered at the Sub-Registrar office)."
    ],
    openingDate: "Continuous year-round portal window with quarterly DLC review meetings",
    processingTime: "45 to 60 business days from DLC submission to sanction",
    renewalRequired: "One-time project capital subsidy",
    trackingProcedure: "Track application status on pmmsy.dof.gov.in using application number.",
    correctionProcedure: "Revise DPR or lease documents as directed by the District Fisheries Officer.",
    disbursementMethod: "Direct Benefit Transfer (DBT) to Beneficiary Bank Account / Bank Subsidy Reserve",
    disbursementDetails: "Disbursed in 2 to 3 milestone installments: 1st after initial civil work, 2nd after equipment installation, 3rd after physical geo-tagged inspection.",
    faqs: [
      { q: "Can women entrepreneurs apply for 60% subsidy?", a: "Yes. All individual women applicants and women SHGs/cooperatives receive the enhanced 60% government subsidy." },
      { q: "What is the subsidy for a motorcycle with an insulated ice box?", a: "Total unit cost is ₹75,000; General beneficiaries receive ₹30,000 (40%) and SC/ST/Women receive ₹45,000 (60%) subsidy." }
    ],
    helpline: "National Fisheries Development Board (NFDB) Helpline: 1800-425-1660 / DoF: 011-23381977",
    email: "pmmsy-dof@gov.in",
    rules: [{ fact: "occupation", op: "in", value: ["FARMER", "SELF_EMPLOYED", "OTHER"] }]
  },

  "mission-vatsalya": {
    id: "mission-vatsalya",
    name: "Mission Vatsalya (Child Protection and Sponsorship Scheme)",
    title: "Mission Vatsalya (Child Protection and Sponsorship Scheme)",
    category: "Women & Child Welfare",
    subcategory: "Child protection",
    sdg: "SDG 10: Reduced Inequalities",
    level: "Central",
    state: "All India",
    stateCoverage: "All 28 States & 8 Union Territories",
    department: "Ministry of Women and Child Development",
    targetBeneficiary: "Children in difficult circumstances: orphans, children of single/destitute parents, child survivors, and children at risk of dropping out",
    beneficiaryType: "Women & Children",
    minAge: 0,
    maxAge: 18,
    incomeMax: 96000,
    status: "Active",
    launchYear: 2021,
    officialWebsite: "https://missionvatsalya.wcd.gov.in",
    applicationUrl: "https://wcd.nic.in",
    sourceUrl: "https://wcd.nic.in/schemes/mission-vatsalya",
    description: "Monthly financial sponsorship of ₹4,000 per child transferred directly via DBT to destitute single parents, foster families, or kin to keep vulnerable children in family care and schooling.",
    detailedDescription: "Mission Vatsalya (formerly Child Protection Services / ICPS) provides non-institutional family-based care to children in need of care and protection. Under its Family-Based Sponsorship component, the government deposits ₹4,000 per month per child directly into the bank account of a widowed mother, divorced mother, single destitute parent, or kinship caregiver. This ensures the child is not abandoned into child care institutions or forced into child labor, and can continue regular schooling.",
    purpose: "Prevents family separation, child labor, and institutionalization by providing direct financial survival grants to kinship caregivers, supporting SDG 1, SDG 4, and SDG 10.",
    benefits: "Direct financial cash assistance of ₹4,000 per child per month transferred via DBT, plus complete child protection, counseling, and school enrollment assistance.",
    financialBenefit: "₹4,00,0 per child per month (₹48,000 per year) direct cash sponsorship",
    benefitFrequency: "Monthly Direct Benefit Transfer until child attains 18 years of age",
    impact: "Over 1.8 lakh destitute children shielded from orphanages and street begging, enabling them to grow within their biological families with dignity.",
    specificAdvantages: "Money paid straight to biological mother/caregiver; allows children to stay in their own homes instead of institutional orphanages.",
    detailedEligibility: {
      ageRequirement: "0 to 18 years.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Family annual income up to ₹72,000 (rural) or ₹96,000 (urban).",
      educationRequirement: "Must be enrolled in school (regular attendance required).",
      occupationRequirement: "None.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Child of a widow, divorced/abandoned mother, parents suffering from terminal illness, or orphan living with grandparents/kin."
    },
    mandatoryConditions: [
      "Child must be under 18 years of age and enrolled in a regular school with minimum 75% attendance",
      "Family annual income below ₹72,000 (rural) or ₹96,000 (urban)",
      "Child Welfare Committee (CWC) recommendation and District Child Protection Unit (DCPU) home inquiry verification"
    ],
    conditionalRequirements: [],
    ineligibility: [
      "Families whose annual income exceeds ₹96,000",
      "Children who drop out of school without medical justification"
    ],
    documents: [
      { name: "Child Birth Certificate / School Bonafide Certificate", why: "Verifies child age under 18 and regular school attendance.", mandatory: true, issuingAuthority: "Municipal Authority / School Principal", format: "Original / Copy", validity: "Permanent" },
      { name: "Income Certificate (Below ₹72k rural / ₹96k urban)", why: "Confirms income eligibility.", mandatory: true, issuingAuthority: "Tahsildar / Competent Revenue Officer", format: "Official Certificate", validity: "Current Year" },
      { name: "Death Certificate of Parent / Medical Proof (if applicable)", why: "Proves orphan/single-parent/terminal-illness status.", mandatory: false, issuingAuthority: "Registrar of Deaths / Hospital", format: "Copy", validity: "Permanent" },
      { name: "Joint Bank Account Passbook (Mother/Guardian and Child)", why: "For receiving ₹4,000 monthly DBT sponsorship.", mandatory: true, issuingAuthority: "Scheduled Bank / Post Office", format: "Passbook copy", validity: "Active" }
    ],
    applicationMode: "Offline submission at District Child Protection Unit (DCPU) / Child Welfare Committee (CWC)",
    process: [
      "Step 1: Obtain the Mission Vatsalya Sponsorship application proforma from your District Child Protection Unit (DCPU).",
      "Step 2: Attach child birth proof, school study certificate, death certificate of father (if widowed), and income proof.",
      "Step 3: District Child Protection Officer (DCPO) conducts a social home investigation.",
      "Step 4: The Sponsorship and Foster Care Approval Committee (SFCAC) chaired by the District Magistrate / CWC approves the case.",
      "Step 5: ₹4,000 per month is deposited via DBT directly into the mother's / guardian's joint bank account.",
      "Step 6: Submit annual school progress report to maintain uninterrupted monthly sponsorship."
    ],
    offlineProcess: "Visit the District Child Protection Unit (DCPU) located in the District Collectorate / Social Welfare complex in your district.",
    commonMistakes: [
      "Child dropping out of school (school attendance is mandatory to receive monthly sponsorship).",
      "Applying without an income certificate."
    ],
    openingDate: "Continuous year-round applications",
    processingTime: "30 to 45 business days for CWC and DCPU inquiry and sanction",
    renewalRequired: "Annual review by CWC based on school progress report",
    trackingProcedure: "Inquire at the District Child Protection Unit (DCPU) with your application registration number.",
    correctionProcedure: "Contact District Child Protection Officer (DCPO).",
    disbursementMethod: "Direct Benefit Transfer (DBT) to Joint Bank Account (Parent/Guardian & Child)",
    disbursementDetails: "₹4,000 per month deposited via state treasury electronic DBT into the beneficiary's bank account on the first week of every month.",
    faqs: [
      { q: "How many children per family can receive sponsorship?", a: "Maximum two children per family can receive the ₹4,000/month sponsorship grant." },
      { q: "What happens when the child turns 18?", a: "Sponsorship ceases at age 18; youth can then transition to the Aftercare Financial Support program up to age 21." }
    ],
    helpline: "National Childline: 1098 (24x7 Emergency Child Helpline) / MWCD: 011-23386451",
    email: "missionvatsalya-wcd@nic.in",
    rules: [{ fact: "age", op: "lte", value: 18 }, { fact: "income", op: "lte", value: 96000 }]
  }
};

