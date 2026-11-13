// Part 4: Entrepreneurship, Employment, Housing, Solar, and Insurance Schemes
module.exports = {
  "pm-mudra": {
    launchYear: 2015,
    purpose: "Pradhan Mantri MUDRA Yojana (PMMY), launched by the Ministry of Finance, provides collateral-free institutional business loans up to ₹20,00,000 to non-corporate, non-farm small and micro enterprises, funding the unfunded and fueling grassroots entrepreneurship across India.",
    targetBeneficiary: "Micro-entrepreneurs, small shopkeepers, artisans, street vendors, small manufacturing units, service sector enterprises, and allied agricultural business owners.",
    benefits: "100% collateral-free institutional business loans categorized into 4 tiers: 1) Shishu (loans up to ₹50,000 for starting a venture); 2) Kishore (loans above ₹50,000 to ₹5,00,000 for purchasing equipment/raw materials); 3) Tarun (loans above ₹5,00,000 to ₹10,00,000 for business expansion); and 4) Tarun Plus (enhanced in Budget 2024 up to ₹20,00,000 for entrepreneurs who have successfully repaid previous Tarun loans). No processing fees for Shishu loans.",
    financialBenefit: "Collateral-free business loans up to ₹20,00,000 (Shishu up to ₹50K, Kishore up to ₹5L, Tarun up to ₹10L, Tarun Plus up to ₹20L) with zero third-party guarantee",
    benefitFrequency: "Term loan or overdraft working capital credit line (repayable over 3 to 7 years)",
    impact: "Has sanctioned over 48 crore loans totaling more than ₹27 lakh crore across India, with over 68% of loans sanctioned to women entrepreneurs, generating massive self-employment in manufacturing, trading, and services.",
    detailedEligibility: {
      ageRequirement: "18 to 65 years of age.",
      genderRequirement: "All genders eligible; special concessions and priority for women entrepreneurs under Mahila Udyami scheme.",
      incomeLimit: "NO family income ceiling; loan eligibility is evaluated on business viability and cash flow.",
      educationRequirement: "None for Shishu; basic literacy/technical knowledge for technical enterprises.",
      occupationRequirement: "Micro-entrepreneurs, shopkeepers, fruit/vegetable sellers, artisans, transporters, small manufacturers, salon owners, and repair workshops.",
      casteCategoryRequirement: "Open to all categories (General, OBC, SC, ST, EWS).",
      residenceRequirement: "Citizen of India residing in bank's operational area.",
      familyConditions: "Individual, proprietorship, partnership, or private limited enterprise."
    },
    mandatoryConditions: [
      "Must be an Indian citizen with a viable non-farm business or allied agricultural project proposal",
      "Must not be a defaulter on any previous loan with any bank or financial institution",
      "Must possess valid identity and address proof (Aadhaar, PAN Card, Business Registration/Udyam if applicable)"
    ],
    conditionalRequirements: [
      "Udyam Registration Certificate and project report mandatory for loans exceeding ₹50,000 (Kishore and Tarun)."
    ],
    ineligibility: [
      "Large corporate houses or educational institutions",
      "Direct crop cultivation (covered under Kisan Credit Card)",
      "Willful defaulters with impaired CIBIL/credit records",
      "Non-Indian citizens"
    ],
    documents: [
      {
        name: "Aadhaar Card & PAN Card",
        why: "Identity, age, and individual tax KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI / Income Tax Department",
        format: "Original + self-attested photocopies",
        validity: "Permanent"
      },
      {
        name: "Proof of Business Address & Enterprise Registration (Udyam / Trade License / Shop Act)",
        why: "Establishes existence and physical premises of the enterprise.",
        mandatory: false,
        issuingAuthority: "Ministry of MSME (Udyam) / Municipal Corporation",
        format: "Udyam Registration Certificate or Shop & Establishment License",
        validity: "Active"
      },
      {
        name: "Bank Statement of Last 6 Months",
        why: "To evaluate cash flow and turnover for working capital assessment.",
        mandatory: true,
        issuingAuthority: "Current / Savings Account Bank",
        format: "Bank-attested statement of last 6 months",
        validity: "Recent within 30 days"
      },
      {
        name: "Project Report / Quotations of Machinery to be Purchased",
        why: "Details estimated cost of equipment, working capital requirement, and sales projections.",
        mandatory: false,
        issuingAuthority: "Prepared by entrepreneur / chartered accountant / equipment vendor",
        format: "Written project report + vendor quotation for machinery",
        validity: "Current"
      },
      {
        name: "Passport Size Photographs",
        why: "Loan file and Mudra Card generation.",
        mandatory: true,
        issuingAuthority: "Self",
        format: "2 recent colour photographs",
        validity: "Recent"
      }
    ],
    applicationMode: "Online via Udyamimitra Portal (udyamimitra.in) / JanSamarth Portal (jansamarth.in) or Offline at any Bank Branch",
    process: [
      "Step 1: Prepare your business plan and machinery quotations (if purchasing equipment).",
      "Step 2: Visit jansamarth.in or udyamimitra.in, or walk into your nearest commercial/Gramin bank branch.",
      "Step 3: Register and select 'Business Activity Loan' -> 'Pradhan Mantri MUDRA Yojana'.",
      "Step 4: Choose your loan tier: Shishu (up to ₹50K), Kishore (₹50K–₹5L), or Tarun (₹5L–₹20L).",
      "Step 5: Fill in Personal Details, Udyam Number, Business Nature, and Projected Sales.",
      "Step 6: Upload PAN Card, Aadhaar, Bank Statement, and Machinery Quotations.",
      "Step 7: The portal matches your proposal with multiple lenders (SBI, PNB, Canara, Bank of Baroda, NBFCs, etc.).",
      "Step 8: Selected bank reviews the application and conducts a brief field inspection of your shop/factory.",
      "Step 9: Bank sanctions the loan and issues the Sanction Letter.",
      "Step 10: Term loan is disbursed directly to the machinery vendor, and working capital is credited to a MUDRA RuPay Debit Card account."
    ],
    offlineProcess: "Walk into any branch of a Public Sector Bank, Private Bank, Regional Rural Bank (RRB), or Small Finance Bank (SFB). Ask for the Mudra Loan Desk. Submit the standard Mudra loan application form with your KYC and business quotation.",
    commonMistakes: [
      "Banks asking for collateral: By law, MUDRA loans are 100% COLLATERAL-FREE; banks cannot demand mortgage of property or gold.",
      "Applying without a clear business proposal: Stating a vague purpose leads to branch-level rejection; provide clear vendor quotations for machinery or stock.",
      "Having unpaid credit card/personal loan defaults: A severely impaired CIBIL score halts institutional loan sanction."
    ],
    deadlineInfo: "Continuous national lending scheme. Applications accepted year-round.",
    openingDate: "Continuous year-round service",
    processingTime: "7 to 14 working days for Shishu loans; 15 to 25 working days for Kishore/Tarun loans.",
    renewalRequired: "Working capital overdraft renewed annually; term loans repayable over 36 to 84 months.",
    trackingProcedure: "Track application status on jansamarth.in or udyamimitra.in using your Application Number.",
    correctionProcedure: "Visit the lending bank branch to rectify missing documents or update project estimates.",
    disbursementMethod: "Direct Disbursement to Equipment Vendor (Term Loan) & MUDRA RuPay Card (Working Capital)",
    disbursementDetails: "For capital machinery, the bank pays the equipment supplier directly via RTGS/NEFT. For working capital, the borrower receives a MUDRA RuPay Debit Card to withdraw cash at ATMs or swipe for raw material purchases.",
    faqs: [
      { q: "What is the new maximum loan limit under MUDRA?", a: "In Union Budget 2024, the central government created a new 'Tarun Plus' category, raising the maximum MUDRA loan ceiling from ₹10 Lakh to ₹20,00,000 for entrepreneurs who have previously taken and successfully repaid Tarun loans." },
      { q: "Do I have to pledge any property or land as security?", a: "No! All MUDRA loans are 100% collateral-free and third-party guarantee-free. Loans are backed by the Credit Guarantee Fund for Micro Units (CGFMU) managed by NCGTC." },
      { q: "What are the 4 categories of MUDRA loans?", a: "1) Shishu: up to ₹50,000; 2) Kishore: above ₹50,000 to ₹5,00,000; 3) Tarun: above ₹5,00,000 to ₹10,00,000; 4) Tarun Plus: above ₹10,00,000 to ₹20,00,000." },
      { q: "What is a MUDRA Card?", a: "A MUDRA Card is a RuPay debit card linked to your working capital cash credit account, allowing you to withdraw money as needed and pay interest only on the utilized amount." },
      { q: "Can a vegetable vendor, tailor, or tea stall owner apply?", a: "Yes! MUDRA was created specifically for micro-enterprises like tea stalls, tailoring units, kirana stores, beauty salons, and artisan workshops." },
      { q: "What should I do if a bank manager refuses to accept my MUDRA form?", a: "Escalate to the Bank's Lead District Manager (LDM), call the State MUDRA Nodal Helpline, or lodge a formal complaint on the JanSamarth portal or RBI CMS portal." }
    ],
    helpline: "National MUDRA Toll-Free: 1800-180-1111 / 1800-11-0001",
    email: "help@mudra.org.in"
  },

  "stand-up-india": {
    launchYear: 2016,
    purpose: "The Stand-Up India Scheme, administered by the Department of Financial Services, Ministry of Finance, promotes entrepreneurship among women and Scheduled Caste (SC) & Scheduled Tribe (ST) communities by facilitating bank loans between ₹10,00,000 and ₹1,00,00,000 for setting up greenfield (first-time) enterprises in manufacturing, services, trading, or agri-allied sectors.",
    targetBeneficiary: "SC, ST, and Women entrepreneurs setting up a greenfield enterprise (first-time venture).",
    benefits: "Composite bank loan (term loan + working capital) between ₹10,00,000 and ₹1,00,00,000 covering up to 85% of total project cost. Margin money requirement is reduced to just 15% (which can be converged with eligible state/central subsidy schemes). No collateral required if covered under the Credit Guarantee Fund for Stand-Up India (CGFSI).",
    financialBenefit: "Bank credit between ₹10,00,000 and ₹1,00,00,000 covering up to 85% of greenfield project cost",
    benefitFrequency: "Composite term loan + working capital facility repayable over up to 7 years with 18-month moratorium",
    impact: "Creates institutional wealth and high-value business ownership among historically under-represented communities, transforming job seekers into major job creators.",
    detailedEligibility: {
      ageRequirement: "18 years and above.",
      genderRequirement: "Women of any category, OR male/female entrepreneurs belonging to SC or ST communities.",
      incomeLimit: "NO family income ceiling.",
      educationRequirement: "None mandated; entrepreneurial capability assessed on project feasibility.",
      occupationRequirement: "First-time greenfield enterprise founder.",
      casteCategoryRequirement: "SC, ST, or Women of all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "In non-individual enterprises, at least 51% shareholding and controlling stake must be held by an SC, ST, or Woman entrepreneur."
    },
    mandatoryConditions: [
      "Borrower must be an SC, ST, or Woman entrepreneur aged 18 years or older",
      "The venture must be a 'Greenfield' project (first-time venture in manufacturing, services, trading, or agri-allied sector)",
      "Borrower must not be in default to any bank or financial institution",
      "Borrower contribution (margin money) must be at least 15% of project cost (inclusive of state subsidies)"
    ],
    conditionalRequirements: [
      "In private limited companies or LLPs, 51%+ shareholding must be in the hands of the eligible SC/ST/Woman promoter."
    ],
    ineligibility: [
      "Existing brownfield businesses seeking expansion (scheme is strictly for first-time greenfield ventures)",
      "Male entrepreneurs belonging to General or OBC categories (unless entering as minority partner under 49% with SC/ST/Woman as 51%+ lead)",
      "Willful loan defaulters"
    ],
    documents: [
      {
        name: "Caste Certificate (for SC/ST applicants)",
        why: "Proves constitutional category eligibility (not required for women of General/OBC).",
        mandatory: false,
        issuingAuthority: "Competent Revenue Authority (Tahsildar / SDM)",
        format: "Digitally verified Caste Certificate",
        validity: "Permanent"
      },
      {
        name: "Aadhaar Card & PAN Card",
        why: "Identity, age, and individual KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI / Income Tax Department",
        format: "Originals + photocopies",
        validity: "Permanent"
      },
      {
        name: "Comprehensive Detailed Project Report (DPR)",
        why: "Explains business model, technical feasibility, market viability, financial projections, and payback schedule.",
        mandatory: true,
        issuingAuthority: "Prepared by Chartered Accountant / Project Consultant / SIDBI Handholding Agency",
        format: "Bound project report with financial balance sheets and cash flows",
        validity: "Current"
      },
      {
        name: "Rent Agreement / Lease Deed / Land Ownership of Factory Premises",
        why: "Confirms location and physical premises for the greenfield project.",
        mandatory: true,
        issuingAuthority: "Sub-Registrar / Landlord",
        format: "Registered Lease / Rent Agreement",
        validity: "Current"
      },
      {
        name: "Machinery & Equipment Quotations from Vendors",
        why: "Validates capital expenditure requirement for term loan disbursement.",
        mandatory: true,
        issuingAuthority: "Certified Machinery Suppliers / Manufacturers",
        format: "Proforma Invoices with GST numbers",
        validity: "Valid within 90 days"
      }
    ],
    applicationMode: "Online via Stand-Up Mitra Portal (standupmitra.in) or In-person at any Commercial Bank branch",
    process: [
      "Step 1: Visit standupmitra.in and click 'Register as Entrepreneur'.",
      "Step 2: Complete user registration and choose whether you need 'Handholding Support' (from SIDBI, NABARD, DIC) or are 'Ready to Apply'.",
      "Step 3: Fill in Project Profile: Nature of Business (Manufacturing, Service, Trading, or Agri-Allied), Total Project Cost, and Desired Loan Amount.",
      "Step 4: Upload PAN Card, Aadhaar, Caste Certificate (if SC/ST), Project Report, and Machinery Quotations.",
      "Step 5: Select your preferred bank branch or choose automated allocation across scheduled commercial banks.",
      "Step 6: Submit application online. An Application Reference Number is generated.",
      "Step 7: Bank branch manager receives the file, examines the Detailed Project Report, and calls the entrepreneur for an interview.",
      "Step 8: Bank conducts site inspection and approves the loan sanction under CGFSI guarantee.",
      "Step 9: Entrepreneur deposits the 15% margin money; term loan is released directly to machinery vendors.",
      "Step 10: Working capital limit is activated to commence commercial production."
    ],
    offlineProcess: "Every scheduled commercial bank branch in India is mandated under government directives to facilitate at least one SC/ST borrower and at least one Woman borrower under Stand-Up India. Walk into any bank branch and request the Branch Manager directly for Stand-Up India facilitation.",
    commonMistakes: [
      "Applying for existing business expansion: Stand-Up India strictly finances 'Greenfield' (first-time) ventures; existing units are directed to normal MSME schemes.",
      "Submitting an incomplete Project Report: A professional Detailed Project Report (DPR) detailing break-even analysis is essential for loans between ₹10L and ₹1 Crore."
    ],
    deadlineInfo: "Union Government extended the Stand-Up India scheme through 2025; open year-round.",
    openingDate: "Continuous year-round service",
    processingTime: "Sanctioned within 30 to 45 working days following DPR scrutiny and interview.",
    renewalRequired: "Term loan repayable over up to 7 years with up to 18 months moratorium; working capital reviewed annually.",
    trackingProcedure: "Track application progress on standupmitra.in using your login credentials.",
    correctionProcedure: "Handholding agencies (SIDBI/NABARD) assist with refining project reports if rejected by banks.",
    disbursementMethod: "Direct RTGS/NEFT to Machinery Vendors (Term Loan) & Overdraft Facility (Working Capital)",
    disbursementDetails: "Term loan component is disbursed directly into verified bank accounts of equipment manufacturers upon submission of purchase orders. Working capital is disbursed into the enterprise current account.",
    faqs: [
      { q: "What is the minimum and maximum loan amount under Stand-Up India?", a: "The loan amount ranges from a minimum of ₹10,00,000 (Ten Lakh Rupees) up to a maximum of ₹1,00,00,000 (One Crore Rupees)." },
      { q: "Who is eligible to apply for Stand-Up India?", a: "SC entrepreneurs, ST entrepreneurs, and ALL Women entrepreneurs (including General, OBC, Minority, SC, and ST women) aged 18+ setting up a first-time greenfield business." },
      { q: "What is meant by a 'Greenfield' enterprise?", a: "Greenfield enterprise means the first-time venture of the beneficiary in manufacturing, services, trading, or agri-allied sectors." },
      { q: "How much margin money does the entrepreneur have to arrange?", a: "Borrowers need to bring in only 15% margin money of the total project cost, which can also be converged with eligible central or state subsidy schemes." },
      { q: "What is the repayment tenure?", a: "The loan is repayable in up to 7 years with an initial moratorium period of up to 18 months." },
      { q: "Can a partnership firm apply?", a: "Yes, provided at least 51% of the shareholding and controlling stake is held by the SC, ST, or Woman entrepreneur." }
    ],
    helpline: "Stand-Up Mitra National Helpline: 1800-180-1159 / 022-67531300",
    email: "help@standupmitra.in"
  },

  "pmegp": {
    launchYear: 2008,
    purpose: "Prime Minister's Employment Generation Programme (PMEGP), administered by the Ministry of MSME through the Khadi and Village Industries Commission (KVIC), is a major credit-linked capital subsidy scheme designed to generate sustainable non-farm self-employment opportunities by financing new micro-enterprises across India.",
    targetBeneficiary: "Individual entrepreneurs, Self-Help Groups (SHGs), cooperative societies, and trusts seeking to establish new micro-enterprises in manufacturing or service sectors.",
    benefits: "Substantial non-refundable government capital subsidy: 35% subsidy for Special Categories (SC, ST, OBC, Women, Minorities, Ex-Servicemen, Differently Abled) in rural areas; 25% subsidy for Special Categories in urban areas. General category beneficiaries receive 25% subsidy in rural areas and 15% in urban areas. Maximum project cost is ₹50,00,000 for Manufacturing and ₹20,00,000 for Service sector units.",
    financialBenefit: "Government subsidy of 15% to 35% on project cost (Up to ₹17.5 Lakh subsidy for Manufacturing; up to ₹7.0 Lakh subsidy for Services)",
    benefitFrequency: "One-time capital margin money subsidy locked in bank TDR for 3 years, then credited against loan",
    impact: "Has established over 9 lakh micro-enterprises and generated more than 75 lakh jobs across rural and semi-urban India, creating small food processing factories, garment manufacturing units, and repair service centers.",
    detailedEligibility: {
      ageRequirement: "18 years and above (no upper age limit).",
      genderRequirement: "All genders eligible; women classified as Special Category eligible for 35% rural subsidy.",
      incomeLimit: "NO family income ceiling.",
      educationRequirement: "Class 8 pass mandatory for projects costing above ₹10 Lakh in manufacturing and above ₹5 Lakh in services; no educational qualification required below these thresholds.",
      occupationRequirement: "Aspiring entrepreneur starting a new micro-enterprise.",
      casteCategoryRequirement: "Open to all categories (SC, ST, OBC, Minorities receive higher 35% rural subsidy).",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Only one person per family can receive PMEGP assistance."
    },
    mandatoryConditions: [
      "Applicant must be an Indian citizen aged 18 years or older",
      "Project must be a NEW enterprise (existing units cannot apply for 1st loan)",
      "Applicant must contribute 5% (Special Category) or 10% (General Category) of project cost from own resources",
      "Must undergo mandatory Entrepreneurship Development Programme (EDP) training before final subsidy release",
      "Must pass Class 8 if project exceeds ₹10 Lakh (Manufacturing) or ₹5 Lakh (Services)"
    ],
    conditionalRequirements: [
      "Second loan up to ₹1 Crore available for upgrading high-performing existing PMEGP units with 15% subsidy."
    ],
    ineligibility: [
      "Units involved in production/processing of meat, slaughterhouses, intoxicant liquor, tobacco products (bidi, pan, cigar)",
      "Units manufacturing polythene carry bags of thickness less than statutory norms",
      "Rural transport vehicles (except three-wheelers in Andaman/NE)",
      "Existing units that have already availed government capital subsidy under another scheme"
    ],
    documents: [
      {
        name: "Aadhaar Card & PAN Card",
        why: "Identity, age, and individual KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI / Income Tax Department",
        format: "Originals + photocopies",
        validity: "Permanent"
      },
      {
        name: "Detailed Project Report (DPR)",
        why: "Outlines capital expenditure (machinery), working capital requirement, sales projections, and employment potential.",
        mandatory: true,
        issuingAuthority: "Prepared by entrepreneur / MSME consultant",
        format: "Detailed PDF document",
        validity: "Current"
      },
      {
        name: "Caste / Special Category Certificate (if claiming 25%–35% subsidy)",
        why: "Confirms eligibility for higher special subsidy rate.",
        mandatory: false,
        issuingAuthority: "Competent Revenue Authority (Tahsildar / SDM)",
        format: "Digitally signed certificate",
        validity: "Permanent"
      },
      {
        name: "Educational Qualification Certificate (Class 8 Marksheet or higher)",
        why: "Mandatory if project cost exceeds ₹10L (Mfg) or ₹5L (Services).",
        mandatory: false,
        issuingAuthority: "Recognized School Board",
        format: "Certified marksheet",
        validity: "Permanent"
      },
      {
        name: "Rural Area Certificate",
        why: "Confirms project location is in rural territory to claim the higher 35% subsidy rate.",
        mandatory: false,
        issuingAuthority: "Gram Panchayat Secretary / Block Development Officer",
        format: "Official certificate on letterhead",
        validity: "Current"
      }
    ],
    applicationMode: "Online via PMEGP e-Portal (kviconline.gov.in/pmegpeportal)",
    process: [
      "Step 1: Visit kviconline.gov.in/pmegpeportal and click 'Application for New Unit'.",
      "Step 2: Enter Aadhaar Number, Name, Sponsoring Agency (KVIC, KVIB, or DIC), and Project Location (Rural or Urban).",
      "Step 3: Select Social Category (SC/ST/OBC/Woman/General) to determine your eligible subsidy percentage (15% to 35%).",
      "Step 4: Enter Education qualification, Project cost breakdown (Capital Expenditure + Working Capital), and choose Financing Bank.",
      "Step 5: Upload Project Report (DPR), Aadhaar, Caste certificate, Photo, and Rural certificate.",
      "Step 6: Submit online. An Application Reference ID is generated immediately.",
      "Step 7: Sponsoring agency (DIC/KVIC) screens application and forwards it electronically to your selected bank.",
      "Step 8: Bank examines credit viability, conducts site inspection, and issues loan sanction letter.",
      "Step 9: Complete mandatory 5 to 10 days Entrepreneurship Development Programme (EDP) training (online or offline).",
      "Step 10: Bank releases first loan installment; KVIC deposits the Margin Money (subsidy) into a Term Deposit Receipt (TDR) in your bank account, which is adjusted after 3 years of successful operation."
    ],
    offlineProcess: "Entrepreneurs can visit their District Industries Centre (DIC) at the district headquarters, or the state Khadi and Village Industries Commission (KVIC) office. Officers help applicants prepare project reports and submit the online application.",
    commonMistakes: [
      "Applying for negative list industries: Projects involving tobacco, alcohol, poultry meat processing, or thin plastic bags are strictly prohibited.",
      "Not completing EDP training: The subsidy (Margin Money) cannot be credited by KVIC until the entrepreneur finishes the online/offline EDP training.",
      "Claiming rural subsidy for urban location: Location is verified by GPS; claiming rural rates for municipal areas causes rejection."
    ],
    deadlineInfo: "Continuous national program. Applications processed in monthly agency batches year-round.",
    openingDate: "Continuous year-round service",
    processingTime: "Sanctioned within 45 to 60 days following bank and agency review.",
    renewalRequired: "One-time setup subsidy; successful entrepreneurs can apply for a Second Loan up to ₹1 Crore after 3 years.",
    trackingProcedure: "Track application progress on kviconline.gov.in using Application ID and Password.",
    correctionProcedure: "District Task Force Committee / Bank allows re-upload of modified project reports if returned.",
    disbursementMethod: "Direct Bank Loan + Government Margin Money Subsidy Credited to 3-Year Locked TDR Account",
    disbursementDetails: "The bank finances the project via Term Loan and Working Capital. The government subsidy (15% to 35%) is credited into a separate interest-free Term Deposit Receipt (TDR) in the entrepreneur's name. After 3 years of successful enterprise inspection, the subsidy is credited against the loan principal.",
    faqs: [
      { q: "What is the maximum subsidy under PMEGP?", a: "For a Special Category entrepreneur (Woman, SC, ST, OBC, Minority) starting a manufacturing unit in a rural area, the government provides 35% subsidy on project costs up to ₹50 Lakh, which amounts to up to ₹17,50,000 in free government subsidy." },
      { q: "What is the maximum project cost allowed?", a: "The maximum project cost is ₹50,00,000 (Fifty Lakh Rupees) for manufacturing enterprises and ₹20,00,000 (Twenty Lakh Rupees) for service/business enterprises." },
      { q: "How much own contribution does the applicant need to invest?", a: "Special category entrepreneurs (including all women) invest only 5% of the project cost from their own pocket; General category entrepreneurs invest 10%." },
      { q: "What is EDP training under PMEGP?", a: "Entrepreneurship Development Programme (EDP) is a mandatory 5 to 10-day training covering business management, accounting, marketing, and taxation, which can be completed online via the PMEGP e-learning portal." },
      { q: "Can an existing business get a PMEGP loan?", a: "The first PMEGP loan is strictly for new ventures. However, existing PMEGP units that have repaid their first loan successfully and achieved profit can apply for a Second Loan of up to ₹1 Crore for expansion with 15% subsidy." },
      { q: "Is collateral required for PMEGP loans?", a: "Under RBI guidelines, no collateral security is required for PMEGP loans up to ₹10 Lakh. Loans between ₹10L and ₹50L are covered under the CGTMSE credit guarantee scheme without third-party guarantee." }
    ],
    helpline: "KVIC PMEGP Toll-Free: 1800-3000-0034 / 022-26711003",
    email: "pmegp.kvic@gov.in"
  },

  "pm-svanidhi": {
    launchYear: 2020,
    purpose: "PM Street Vendor's AtmaNirbhar Nidhi (PM SVANidhi), launched by the Ministry of Housing and Urban Affairs, provides working capital micro-credit to urban street vendors, hawkers, and thelas to restart their livelihoods, integrate into formal banking channels, and progress toward digital financial empowerment.",
    targetBeneficiary: "Street vendors, hawkers, thelawalas, rehriwalas, and mobile food stall operators vending in urban, peri-urban, and rural areas surrounding urban centers.",
    benefits: "Progressive collateral-free working capital micro-loans across 3 tranches: 1st Tranche of up to ₹10,000 (repayable in 12 monthly installments); on timely repayment, 2nd Tranche of up to ₹20,000 (repayable in 18 months); and on successful repayment, 3rd Tranche of up to ₹50,000. Beneficiaries receive a 7% interest subsidy credited directly to their bank accounts via DBT, plus cashback up to ₹1,200 per year for conducting digital UPI transactions.",
    financialBenefit: "Collateral-free working capital loan up to ₹50,000 (₹10K -> ₹20K -> ₹50K) + 7% interest subsidy + ₹1,200 annual digital cashback",
    benefitFrequency: "Term micro-credit tranches with monthly installments",
    impact: "Liberates millions of street vendors from high-interest informal moneylenders charging 5% to 10% daily interest, creates digital credit scores, and integrates street vendors into formal retail banking.",
    detailedEligibility: {
      ageRequirement: "18 years and above.",
      genderRequirement: "All vendors eligible.",
      incomeLimit: "NO income ceiling.",
      educationRequirement: "None.",
      occupationRequirement: "Street vendor vending goods, wares, food items, vegetables, fruits, tea, handicrafts, clothing, or services on streets, pavements, or footpaths.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Urban local body / peri-urban area vendor.",
      familyConditions: "Covered per individual street vendor."
    },
    mandatoryConditions: [
      "Must be engaged in street vending in urban/peri-urban areas",
      "Must possess a Certificate of Vending (CoV) / Identity Card issued by the Urban Local Body (ULB) / Town Vending Committee (TVC), or a Letter of Recommendation (LoR)",
      "Must possess an Aadhaar card linked with active mobile number",
      "Must have an active savings bank account"
    ],
    conditionalRequirements: [
      "Letter of Recommendation (LoR) from Town Vending Committee / ULB required for vendors who were left out of initial town surveys."
    ],
    ineligibility: [
      "Vendors operating permanent brick-and-mortar commercial shops",
      "Willful defaulters on prior banking facilities",
      "Persons not engaged in street vending activities"
    ],
    documents: [
      {
        name: "Certificate of Vending / Vendor Identity Card / Letter of Recommendation (LoR)",
        why: "Confirms recognized street vendor status by the local municipal body.",
        mandatory: true,
        issuingAuthority: "Town Vending Committee (TVC) / Municipal Corporation / ULB",
        format: "Certificate of Vending or Digital LoR number",
        validity: "Active"
      },
      {
        name: "Aadhaar Card",
        why: "Identity verification and biometric e-KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Bank Passbook Copy",
        why: "Account details for loan credit and interest subsidy DBT.",
        mandatory: true,
        issuingAuthority: "Scheduled Bank or Post Office Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via PM SVANidhi Portal (pmsvanidhi.mohua.gov.in) / PM SVANidhi App or Offline at Common Service Centres (CSCs) / Municipal Offices",
    process: [
      "Step 1: Check your vendor survey status on pmsvanidhi.mohua.gov.in using your Mobile Number or Aadhaar.",
      "Step 2: If not in the survey, apply for a Letter of Recommendation (LoR) from your local Urban Local Body / Municipality.",
      "Step 3: Click 'Apply for Loan' and enter your Aadhaar-linked Mobile Number.",
      "Step 4: Enter the 12-digit Aadhaar number and verify via Aadhaar OTP.",
      "Step 5: Verify your Vendor Details (Vending category, Vending location/ward, and Average daily sales).",
      "Step 6: Enter your Bank Account details and select your preferred lending bank branch.",
      "Step 7: Choose your loan tranche (1st Loan: ₹10,000).",
      "Step 8: Submit the application. Your Application ID is generated.",
      "Step 9: Selected bank branch processes the application; no physical branch visit or collateral is needed.",
      "Step 10: Loan amount (₹10,000) is credited directly into your bank account within 7 to 10 days."
    ],
    offlineProcess: "Visit your local Municipal Corporation / Municipality office or nearest Common Service Centre (CSC). Staff will check your name on the Town Vending Committee survey list, help you get an LoR if needed, and submit the loan application on your behalf free of charge.",
    commonMistakes: [
      "Repaying late: Timely repayment unlocks the 7% interest subsidy AND qualifies you for the 2nd tranche of ₹20,000 and 3rd tranche of ₹50,000.",
      "Not activating digital UPI QR code: Conducting digital UPI payments through your vendor QR code earns up to ₹1,200 annual cashback directly into your account.",
      "Aadhaar not linked with mobile: Required for instant OTP authentication on the portal."
    ],
    deadlineInfo: "Union Cabinet extended the PM SVANidhi scheme through December 2024 with ongoing tranches; active year-round.",
    openingDate: "Continuous year-round service",
    processingTime: "Disbursed within 7 to 14 working days of online submission.",
    renewalRequired: "Graduating tranches: repay 1st tranche to unlock ₹20,000; repay 2nd tranche to unlock ₹50,000.",
    trackingProcedure: "Check loan status on pmsvanidhi.mohua.gov.in using your Application Number or Mobile number.",
    correctionProcedure: "Municipal Town Vending Committee assists in updating mobile number or bank details.",
    disbursementMethod: "Direct Electronic Credit to Vendor's Savings Bank Account via Direct Benefit Transfer",
    disbursementDetails: "The lending bank deposits the ₹10,000 / ₹20,000 / ₹50,000 loan directly into the vendor's savings account. Repayment is collected via monthly automated standing instructions or UPI.",
    faqs: [
      { q: "Is collateral or security required for a PM SVANidhi loan?", a: "No! All loans under PM SVANidhi are 100% collateral-free. You do not need to pledge any property, gold, or third-party guarantee." },
      { q: "How much interest subsidy does the vendor receive?", a: "Vendors who repay their monthly installments on time receive a 7% interest subsidy per annum credited directly into their bank account on a quarterly basis." },
      { q: "How do I qualify for the 2nd loan of ₹20,000 and 3rd loan of ₹50,000?", a: "Simply repay your 1st loan of ₹10,000 in monthly installments on or before the due date. Once fully repaid, the portal automatically unlocks your 2nd tranche of ₹20,000. Repaying the 2nd tranche unlocks ₹50,000." },
      { q: "What is the digital transaction cashback?", a: "If you accept payments through any UPI QR code (PhonePe, Google Pay, Paytm, BHIM), the government credits up to ₹100 per month (total ₹1,200 per year) as direct cashback into your bank account." },
      { q: "What if my name is not in the street vendor survey?", a: "You can apply for a Letter of Recommendation (LoR) from your local municipality or Urban Local Body, which grants immediate eligibility for the loan." },
      { q: "Can vegetable and fruit vendors in rural village markets apply?", a: "The scheme covers vendors operating in urban local bodies and peri-urban areas surrounding cities and towns." }
    ],
    helpline: "PM SVANidhi Toll-Free Helpline: 1800-11-1979",
    email: "pmsvanidhi-mohua@gov.in"
  },

  "pm-vishwakarma": {
    launchYear: 2023,
    purpose: "PM Vishwakarma, launched by the Ministry of MSME, is an historic national initiative designed to provide end-to-end holistic institutional support to traditional artisans and craftspeople who work with their hands and tools, preserving ancient Indian craftsmanship, modernizing tools, providing skills training, and linking artisans with domestic and global markets.",
    targetBeneficiary: "Artisans and craftspeople engaged in 18 traditional trades (Carpenters, Blacksmiths, Goldsmiths, Potters, Sculptors, Cobblers, Masons, Basket/Mat/Broom makers, Doll & Toy makers, Barbers, Garland makers, Washermen, Tailors, Fishing Net makers, etc.).",
    benefits: "Recognition as Vishwakarma through PM Vishwakarma Certificate and ID Card + Free Basic Skill Training (5–7 days) with a stipend of ₹500 per day + Advanced Skill Training (15 days) + ₹15,000 Modern Tool-kit Incentive Grant + Collateral-free enterprise credit up to ₹3,00,000 (Tranche 1: ₹1,00,000 at 5% interest; Tranche 2: ₹2,00,000 at 5% interest) with 8% interest subvention by the Central Government.",
    financialBenefit: "₹15,00,000 free toolkit grant + ₹500/day training stipend + ₹3,00,000 collateral-free loan at 5% subsidized interest",
    benefitFrequency: "One-time toolkit grant + continuous skill development and enterprise loan tranches",
    impact: "Elevates traditional informal artisans into recognized micro-entrepreneurs, upgrades handmade product quality with modern power tools, and integrates village crafts into formal supply chains and e-commerce.",
    detailedEligibility: {
      ageRequirement: "Minimum 18 years of age on the date of registration.",
      genderRequirement: "All traditional craftspeople eligible.",
      incomeLimit: "NO income ceiling.",
      educationRequirement: "None.",
      occupationRequirement: "Must be practicing one of the 18 notified traditional trades on a self-employment basis.",
      casteCategoryRequirement: "Open to all castes and categories (historically practiced by OBC, SC, ST, and minority artisan communities).",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Only one member per family (husband, wife, and minor children) can receive benefits under the scheme."
    },
    mandatoryConditions: [
      "Must be working in one of the 18 specified traditional artisan trades",
      "Must not have availed loans under similar credit-based self-employment schemes (PMEGP, Mudra, PM SVANidhi) in the past 5 years",
      "Family must not have any member who is a regular government servant"
    ],
    conditionalRequirements: [
      "Successful completion of 5-day Basic Skill Training is mandatory before toolkit voucher and 1st loan tranche are disbursed."
    ],
    ineligibility: [
      "Persons not engaged in any of the 18 recognized traditional craft trades",
      "Government employees and their immediate family members",
      "Beneficiaries who have outstanding unpaid loans under PMEGP or Stand-Up India"
    ],
    documents: [
      {
        name: "Aadhaar Card",
        why: "Identity verification and mandatory biometric e-KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original card",
        validity: "Permanent"
      },
      {
        name: "Active Mobile Number linked with Aadhaar",
        why: "For receiving OTP verification and digital tool-kit e-voucher.",
        mandatory: true,
        issuingAuthority: "Telecom Service Provider",
        format: "Operational mobile number",
        validity: "Active"
      },
      {
        name: "Bank Passbook Copy (Aadhaar-Seeded)",
        why: "For receiving training stipend (₹500/day) and loan credit.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      },
      {
        name: "Ration Card / Family Declaration",
        why: "To verify one-beneficiary-per-family compliance.",
        mandatory: true,
        issuingAuthority: "Food and Civil Supplies Department",
        format: "Ration card copy",
        validity: "Active"
      }
    ],
    applicationMode: "Through Common Service Centres (CSCs) via PM Vishwakarma Portal (pmvishwakarma.gov.in)",
    process: [
      "Step 1: Visit your nearest Common Service Centre (CSC) with your Aadhaar card and Bank Passbook.",
      "Step 2: CSC operator logs into pmvishwakarma.gov.in and completes biometric Aadhaar authentication.",
      "Step 3: Select your trade from the 18 notified traditional trades (e.g. Carpenter, Tailor, Barber, Mason, Blacksmith).",
      "Step 4: Enter family details from Ration card and bank account details.",
      "Step 5: Submit application online. A 3-tier verification begins: Gram Panchayat Head / ULB Executive verifies (Level 1); District Implementation Committee verifies (Level 2); Screening Committee approves (Level 3).",
      "Step 6: Download your digital PM Vishwakarma Certificate and ID Card.",
      "Step 7: Attend 5 to 7 days Basic Skill Training at the local training centre (receive ₹500/day stipend).",
      "Step 8: Receive an e-RUPI / e-voucher of ₹15,000 on your mobile phone to purchase modern specialized tool-kits.",
      "Step 9: Eligible artisans can apply for the 1st Tranche collateral-free loan of ₹1,00,000 at 5% interest.",
      "Step 10: Repay regular installments over 18 months to unlock the 2nd Tranche loan of ₹2,00,000 (30 months repayment)."
    ],
    offlineProcess: "Walk into your village Common Service Centre (CSC). Registration is 100% free of cost (CSC charges are paid directly by the Central Government). The Gram Panchayat Pradhan or Municipal Executive Officer confirms your artisan profession during Level 1 verification.",
    commonMistakes: [
      "Family member already enrolled: The scheme strictly limits benefits to ONE person per family.",
      "Attempting to cash out the ₹15,000 tool-kit voucher: The ₹15,000 is issued as a targeted e-RUPI digital voucher that can ONLY be redeemed at registered tool equipment merchants.",
      "Missing the basic training: Loan and tool-kit grants are unlocked only after finishing the 5-day training."
    ],
    deadlineInfo: "Comprehensive 5-year central scheme running through 2028. Open year-round.",
    openingDate: "Continuous year-round service",
    processingTime: "Level 1 to Level 3 verification completed within 30 to 45 days.",
    renewalRequired: "No renewal needed; certificate and ID card are valid for life.",
    trackingProcedure: "Track application status on pmvishwakarma.gov.in using Aadhaar number and OTP.",
    correctionProcedure: "CSC operator or District DIC can edit trade details before Level 2 approval.",
    disbursementMethod: "Direct Benefit Transfer (Stipend) + e-RUPI Digital Voucher (Tool-kit) + Bank Credit (Loan)",
    disbursementDetails: "Training stipend (₹500/day) is credited directly to the artisan's bank account. The ₹15,000 tool-kit incentive is delivered as an e-RUPI QR voucher to the mobile phone. Enterprise loans (up to ₹3 Lakh) are disbursed by banks at 5% interest.",
    faqs: [
      { q: "Which 18 trades are covered under PM Vishwakarma?", a: "1) Carpenter (Suthar), 2) Boat Maker, 3) Armourer, 4) Blacksmith (Lohar), 5) Hammer & Tool Kit Maker, 6) Locksmith, 7) Sculptor (Moortikar/Stone carver), 8) Goldsmith (Sonar), 9) Potter (Kumhaar), 10) Cobbler (Charmakar), 11) Mason (Rajmistri), 12) Basket/Mat/Broom Maker/Coir weaver, 13) Doll & Toy Maker (Traditional), 14) Barber (Naai), 15) Garland Maker (Malakaar), 16) Washerman (Dhobi), 17) Tailor (Darzi), and 18) Fishing Net Maker." },
      { q: "Is the ₹15,000 tool-kit grant a loan that I have to repay?", a: "No! The ₹15,000 tool-kit grant is a 100% FREE incentive provided by the Central Government to purchase modern tools; you do not have to repay a single rupee." },
      { q: "What is the interest rate on the PM Vishwakarma loan?", a: "The interest rate charged to the artisan is fixed at a deeply subsidized 5% per annum. The remaining interest is directly subvented by the Government of India (up to 8%)." },
      { q: "Do I have to pay any fee at the CSC for registration?", a: "No! Registration for PM Vishwakarma at all Common Service Centres is completely FREE. The Government of India pays the CSC fee directly." },
      { q: "Do I get paid while attending the training?", a: "Yes! Every artisan receives a daily training stipend of ₹500 per day for the entire 5 to 7 days of basic training, transferred directly to their bank account." },
      { q: "Is collateral required for the ₹1 Lakh and ₹2 Lakh loans?", a: "No collateral or third-party guarantee is required. The loans are 100% credit guaranteed by the National Credit Guarantee Trustee Company (NCGTC)." }
    ],
    helpline: "PM Vishwakarma Toll-Free: 1800-267-7777 / 011-23061500",
    email: "pm-vishwakarma@gov.in"
  },

  "startup-india-seed-fund": {
    launchYear: 2021,
    purpose: "The Startup India Seed Fund Scheme (SISFS), launched by the Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry, provides financial assistance to early-stage startups for proof of concept, prototype development, product trials, market entry, and commercialization through selected incubators across India.",
    targetBeneficiary: "DPIIT-recognized early-stage startups incorporated within the last 2 years with innovative business ideas across all sectors.",
    benefits: "Up to ₹20,00,000 as a grant for validation of Proof of Concept, prototype development, or product trials; and up to ₹50,00,000 of investment for market entry, commercialization, or scaling up through convertible debentures or debt/debt-linked instruments disbursed through eligible incubators.",
    financialBenefit: "Up to ₹20,00,000 grant for prototype validation + Up to ₹50,00,000 investment for commercialization",
    benefitFrequency: "Milestone-based tranche disbursements through selected incubators",
    impact: "Addresses the 'valley of death' for early-stage entrepreneurs, enabling innovative Indian startups to survive the initial proof-of-concept phase and secure venture capital.",
    detailedEligibility: {
      ageRequirement: "Founders aged 18 years and older.",
      genderRequirement: "All founders eligible; women-led startups given priority consideration.",
      incomeLimit: "NO personal income limit.",
      educationRequirement: "None mandated.",
      occupationRequirement: "Startup founder / entrepreneur.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Startup incorporated in India with Indian citizen holding at least 51% shareholding.",
      familyConditions: "Private Limited Company or LLP registered with DPIIT."
    },
    mandatoryConditions: [
      "Must be a DPIIT-recognized startup incorporated not more than 2 years ago at the time of application",
      "Must have a business idea to develop a product or service with a market fit, viable commercialization, and scope of scaling",
      "Must not have received more than ₹10 Lakh of monetary support under any other Central or State Government scheme (prizes and competition awards exempted)",
      "Indian promoters must hold at least 51% shareholding in the startup"
    ],
    conditionalRequirements: [
      "Must apply online through eligible incubators listed on the Startup India portal."
    ],
    ineligibility: [
      "Startups incorporated more than 2 years ago",
      "Sole proprietorships or unregistered partnerships (must be Private Limited or LLP)",
      "Startups that have already raised substantial venture funding (> ₹10 Lakh government grants)"
    ],
    documents: [
      {
        name: "DPIIT Startup Recognition Certificate",
        why: "Confirms official recognition under Startup India initiative.",
        mandatory: true,
        issuingAuthority: "DPIIT, Ministry of Commerce and Industry",
        format: "DPIIT Recognition Certificate with DIPP number",
        validity: "Valid for up to 10 years from incorporation"
      },
      {
        name: "Certificate of Incorporation / Registration",
        why: "Proves legal incorporation as Private Limited or LLP within last 2 years.",
        mandatory: true,
        issuingAuthority: "Ministry of Corporate Affairs (MCA)",
        format: "MCA Certificate of Incorporation with CIN / LLPIN",
        validity: "Permanent"
      },
      {
        name: "Detailed Business Pitch Deck & Financial Proposal",
        why: "Explains problem statement, proposed innovation, market size, prototype milestones, and fund utilization.",
        mandatory: true,
        issuingAuthority: "Prepared by Startup Founders",
        format: "Pitch Deck (PDF max 15 slides)",
        validity: "Current"
      },
      {
        name: "Shareholding Pattern & Cap Table Declaration",
        why: "Confirms Indian promoters hold at least 51% equity.",
        mandatory: true,
        issuingAuthority: "Company Secretary / CA / Director self-declaration",
        format: "Signed cap table on company letterhead",
        validity: "Current"
      }
    ],
    applicationMode: "Online via Startup India Seed Fund Portal (seedfund.startupindia.gov.in)",
    process: [
      "Step 1: Obtain DPIIT Startup Recognition on startupindia.gov.in (free and issued within 48 hours).",
      "Step 2: Visit seedfund.startupindia.gov.in and log in with your Startup India credentials.",
      "Step 3: Click 'Apply for Seed Fund' and select up to 3 preferred eligible Incubators across India based on your sector.",
      "Step 4: Enter Startup details, problem addressed, innovative technology, business model, and milestones.",
      "Step 5: Upload DPIIT Certificate, Incorporation Certificate, Pitch Deck, and Cap Table.",
      "Step 6: Submit application online. The application is routed simultaneously to the selected incubators.",
      "Step 7: Incubator Seed Management Committee (ISMC) reviews proposals and invites shortlisted founders for an online presentation.",
      "Step 8: Incubator approves funding and executes agreement with the startup within 45 days.",
      "Step 9: Funds are released in milestone tranches directly into the startup's current bank account.",
      "Step 10: Startup submits progress reports and milestone achievements to the incubator."
    ],
    offlineProcess: "The entire application, evaluation, pitching, and contracting process is conducted through the official Startup India portal and online video pitch sessions with incubators.",
    commonMistakes: [
      "Applying without DPIIT recognition: You must obtain DPIIT startup recognition on startupindia.gov.in before applying for SISFS.",
      "Applying as a sole proprietorship: Only registered Private Limited Companies and LLPs are eligible.",
      "Choosing incubators outside your sector: Select incubators that specialize in your domain (e.g. Agri-tech, Health-tech, AI, Clean-tech) to maximize selection odds."
    ],
    deadlineInfo: "Continuous national window. Startups can apply anytime through active incubators.",
    openingDate: "Continuous year-round service",
    processingTime: "Incubators decide on applications within 45 days of submission.",
    renewalRequired: "Milestone-based disbursements over 12 to 24 months based on technical progress.",
    trackingProcedure: "Track application and incubator review status on seedfund.startupindia.gov.in.",
    correctionProcedure: "Startups can edit and re-apply to other incubators if rejected by their initial choices.",
    disbursementMethod: "Direct Electronic Tranche Disbursal from Approved Incubator into Startup Bank Account",
    disbursementDetails: "Funds (grants up to ₹20L or debt up to ₹50L) are disbursed by the selected incubator in milestone-based tranches linked to prototype completion and product testing.",
    faqs: [
      { q: "Is the ₹20 Lakh grant required to be repaid?", a: "No! The Proof of Concept / prototype development funding up to ₹20,00,000 is given as a 100% non-repayable grant; the startup does NOT have to return it." },
      { q: "How is the commercialization support of up to ₹50 Lakh provided?", a: "For market entry and commercialization, up to ₹50,00,000 is provided through convertible debentures or debt/debt-linked instruments with repayment tenures up to 5 years." },
      { q: "Do I have to give equity to Startup India or the Government?", a: "No equity is taken by the Government of India. The incubator may invest through convertible debentures on terms mutually agreed with the founders." },
      { q: "Can a startup apply to multiple incubators?", a: "Yes. Startups can choose and apply to up to 3 different incubators in order of preference during a single application." },
      { q: "How old can the startup be?", a: "The startup must be incorporated not more than 2 years prior to the date of application." },
      { q: "Is prior revenue or sales required?", a: "No! The Seed Fund is specifically created for early-stage startups that have zero revenue and are still building or testing their prototype." }
    ],
    helpline: "Startup India National Toll-Free: 1800-115-565",
    email: "seed.fund@startupindia.gov.in"
  },

  "mgnrega": {
    launchYear: 2005,
    purpose: "Mahatma Gandhi National Rural Employment Guarantee Act (MGNREGA), implemented by the Ministry of Rural Development, is a statutory rights-based employment guarantee that enhances livelihood security in rural India by legally guaranteeing at least 100 days of wage employment in every financial year to every rural household whose adult members volunteer to do unskilled manual work.",
    targetBeneficiary: "Adult members of rural households willing to do unskilled manual work at notified statutory wages.",
    benefits: "Statutory guarantee of 100 days of wage employment per rural household per financial year (extended to 150 days in notified drought-hit blocks). Daily wage rate is notified annually by the Central Government (ranging from ₹234 to ₹374 per day depending on state). If work is not provided within 15 days of application, the government is legally mandated to pay an Unemployment Allowance directly to the worker.",
    financialBenefit: "Statutory daily wages (₹234–₹374/day per state) for 100 days (approx ₹25,000–₹37,000 per year per household) via Aadhaar-Based Payment System (ABPS)",
    benefitFrequency: "Weekly / fortnightly direct bank transfer into worker's account",
    impact: "World's largest public works employment safety net, prevents distress rural-to-urban migration, raises agricultural baseline wages, builds durable rural water-harvesting assets and rural roads, and ensures gender wage parity (over 57% women workers).",
    detailedEligibility: {
      ageRequirement: "Adults aged 18 years and above.",
      genderRequirement: "All adults eligible; equal statutory wages for women and men.",
      incomeLimit: "NO income ceiling (open to all rural households seeking manual work).",
      educationRequirement: "None.",
      occupationRequirement: "Rural unskilled manual work.",
      casteCategoryRequirement: "Open to all rural households (General, OBC, SC, ST).",
      residenceRequirement: "Resident of the local Gram Panchayat area.",
      familyConditions: "All adult members of the household listed on the joint Job Card."
    },
    mandatoryConditions: [
      "Must be an adult member (18+ years) residing in a rural Gram Panchayat area",
      "Must apply for and possess an active MGNREGA Job Card",
      "Must be willing to perform unskilled physical manual labor",
      "Bank/Post Office account must be seeded with Aadhaar on NPCI for Aadhaar-Based Payment System (ABPS)"
    ],
    conditionalRequirements: [
      "Work must be provided within 5 km radius of applicant's residence (or 10% extra wage paid for travel)."
    ],
    ineligibility: [
      "Residents of urban municipal corporation/municipality areas",
      "Minors below 18 years of age",
      "Persons unwilling to perform manual labor"
    ],
    documents: [
      {
        name: "MGNREGA Job Card",
        why: "Statutory document containing household registration number and records days worked and wages paid.",
        mandatory: true,
        issuingAuthority: "Gram Panchayat / Block Program Officer",
        format: "Laminated physical Job Card booklet",
        validity: "Valid for 5 years (renewable free)"
      },
      {
        name: "Aadhaar Card of All Adult Household Members",
        why: "Identity verification and mandatory ABPS payment mapping.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or photocopies",
        validity: "Permanent"
      },
      {
        name: "Individual Bank or Post Office Passbook (Aadhaar-Seeded)",
        why: "For receiving weekly wage payments via Aadhaar Payment Bridge.",
        mandatory: true,
        issuingAuthority: "Commercial / Gramin Bank or Post Office",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      },
      {
        name: "Passport Size Photograph",
        why: "Pasted on Job Card booklet.",
        mandatory: true,
        issuingAuthority: "Self",
        format: "Passport photograph",
        validity: "Recent"
      }
    ],
    applicationMode: "In-Person at local Gram Panchayat Office or via NREGASoft portal / UMANG App",
    process: [
      "Step 1: Submit an application for a Job Card (written or oral) to your Gram Panchayat Secretary or Rozgar Sevak.",
      "Step 2: Provide names, age, Aadhaar, and photos of all adult household members willing to work.",
      "Step 3: Gram Panchayat verifies local residency and issues your free MGNREGA Job Card within 15 days.",
      "Step 4: Submit an application for work (Form 6) to the Gram Panchayat, specifying dates and duration of work requested.",
      "Step 5: Gram Panchayat issues a dated receipt acknowledging your demand for work.",
      "Step 6: Within 15 days, the Panchayat assigns work at a local asset project (pond digging, check dam, canal lining, plantation).",
      "Step 7: Report to worksite. Work attendance is marked twice daily using the National Mobile Monitoring System (NMMS) app.",
      "Step 8: Measurement of work done is recorded in the measurement book by the Technical Assistant.",
      "Step 9: Wage list is electronically generated on NREGASoft.",
      "Step 10: Wages are credited directly into your Aadhaar-seeded bank account within 15 days of work completion."
    ],
    offlineProcess: "Walk into your local Gram Panchayat office and meet the Gram Rozgar Sevak (GRS) or Panchayat Secretary. Hand over photocopies of Aadhaar cards and photos. The Job Card is issued within 15 days without any charge.",
    commonMistakes: [
      "Bank account not enabled for ABPS: All MGNREGA wage payments are strictly routed through the Aadhaar-Based Payment System (ABPS); bank accounts must be mapped on NPCI.",
      "Not demanding a dated receipt when requesting work: The 15-day countdown for the legally guaranteed Unemployment Allowance begins only on the date recorded on your work demand receipt.",
      "Paying touts for Job Cards: MGNREGA Job Cards are 100% free by law; charging any fee is a punishable offense."
    ],
    deadlineInfo: "Demand-driven program active year-round. Workers can demand work anytime.",
    openingDate: "Continuous year-round service",
    processingTime: "Work must be provided within 15 days of demand; wages paid within 15 days of muster roll closure.",
    renewalRequired: "Job Card is valid for 5 years and renewed free of cost by the Gram Panchayat.",
    trackingProcedure: "Check wage payment status and days worked on nrega.nic.in by clicking on your state, district, block, and Job Card number.",
    correctionProcedure: "Gram Rozgar Sevak or Block Program Officer rectifies bank details on NREGASoft.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Worker's Bank Account via Aadhaar-Based Payment System (ABPS)",
    disbursementDetails: "Central and state governments disburse wages directly from National Electronic Fund Management System (NeFMS) into the worker's bank account via PFMS and NPCI within 15 days of muster roll closure.",
    faqs: [
      { q: "What is the unemployment allowance under MGNREGA?", a: "By law, if the Gram Panchayat fails to provide employment within 15 days of receiving your work application, the state government MUST pay an Unemployment Allowance directly into your bank account (at least 1/4th of wage rate for first 30 days, and 1/2 of wage rate thereafter)." },
      { q: "What is the daily wage rate under MGNREGA?", a: "Wages are revised every year by the Ministry of Rural Development and vary by state (e.g. ₹234 in UP/Bihar, ₹316 in Karnataka, ₹374 in Haryana)." },
      { q: "Can women do MGNREGA work?", a: "Yes! Over 57% of all MGNREGA workers across India are women. The law mandates equal wages for men and women, and crèche facilities must be provided at worksites where 5+ children are present." },
      { q: "Is the Job Card issued for an individual or a family?", a: "The Job Card is issued to the entire household, and all adult members of the family are listed with their photographs in the same booklet." },
      { q: "How many days of work can one family get in a year?", a: "A rural household is entitled to a minimum of 100 days of guaranteed wage employment per financial year (April to March)." },
      { q: "What work facilities must be provided at the worksite?", a: "Safe drinking water, shade for resting, a first-aid medical kit, and crèche facilities for small children must be provided free of cost at every worksite." }
    ],
    helpline: "MGNREGA National Toll-Free: 1800-111-555 or State Grievance 1800-series",
    email: "mgnrega-support@nic.in"
  },

  "eshram": {
    launchYear: 2021,
    purpose: "The e-Shram Portal, developed by the Ministry of Labour and Employment, is India's first national centralized database of unorganized workers, delivering a Universal Account Number (UAN) card that integrates informal workers with national social security schemes, accident insurance, and emergency disaster relief.",
    targetBeneficiary: "All unorganized workers aged 16 to 59 years (construction workers, migrant workers, street vendors, domestic workers, agricultural laborers, gig and platform workers, auto drivers, fishermen, and brick kiln workers).",
    benefits: "Free 12-digit Universal Account Number (UAN) e-Shram Card with nationwide portability. Free accidental death and permanent disability insurance cover of ₹2,00,000 (and ₹1,00,000 for partial disability) under PMSBY. Seamless delivery of emergency relief during natural disasters/pandemics, and direct integration with central/state pension and skill upgrading portals.",
    financialBenefit: "Universal Account Number (UAN) e-Shram Card + ₹2,00,000 accidental insurance coverage + priority social security access",
    benefitFrequency: "Permanent digital card with active national database registration",
    impact: "Brings over 30 crore informal workers out of invisibility, providing a single digital identity for targeted DBT welfare benefits, ration portability, and social security.",
    detailedEligibility: {
      ageRequirement: "16 to 59 years of age.",
      genderRequirement: "All informal workers eligible.",
      incomeLimit: "Must NOT be an income tax payer.",
      educationRequirement: "None.",
      occupationRequirement: "Any unorganized worker working as a home-based worker, self-employed worker, or wage worker in the informal sector.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Individual registration."
    },
    mandatoryConditions: [
      "Must be an unorganized sector worker aged between 16 and 59 years",
      "Must NOT be a member of EPFO (Employees' Provident Fund) or ESIC (Employees' State Insurance)",
      "Must NOT be an income tax payer",
      "Must possess an Aadhaar card linked with active mobile number"
    ],
    conditionalRequirements: [
      "Aadhaar biometric scan at CSC permitted if mobile is not linked with Aadhaar."
    ],
    ineligibility: [
      "Members of EPFO or ESIC (formal sector organized employees)",
      "Income tax payers",
      "Persons below 16 years or 60 years and above"
    ],
    documents: [
      {
        name: "Aadhaar Card",
        why: "Identity verification and biometric de-duplication.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Aadhaar-Linked Active Mobile Number",
        why: "For receiving OTP verification and card notifications.",
        mandatory: true,
        issuingAuthority: "Telecom Service Provider",
        format: "Active number capable of receiving SMS",
        validity: "Active"
      },
      {
        name: "Bank Passbook Copy (Aadhaar-Seeded)",
        why: "For receiving emergency DBT relief and insurance claim credits.",
        mandatory: true,
        issuingAuthority: "Scheduled Bank or Post Office",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Online Self-Registration via eshram.gov.in or Offline through nearest Common Service Centre (CSC) / State Seva Kendra",
    process: [
      "Step 1: Visit the official portal eshram.gov.in and click 'Register on e-Shram'.",
      "Step 2: Enter your Aadhaar-linked Mobile Number and Captcha; verify via OTP.",
      "Step 3: Enter your 12-digit Aadhaar Number and perform Aadhaar OTP authentication (or fingerprint at CSC).",
      "Step 4: Personal details (Name, Date of Birth, Gender, Address) are automatically fetched from the Aadhaar database.",
      "Step 5: Fill in additional details: Marital status, Social Category, Blood Group, and Nominee details.",
      "Step 6: Enter your Occupation & Skill (Select primary occupation from the National Classification of Occupations list).",
      "Step 7: Provide Bank Account details (Bank Name, Account Number, IFSC).",
      "Step 8: Review the preview of your self-declaration.",
      "Step 9: Submit the registration. Your 12-digit Universal Account Number (UAN) is generated immediately.",
      "Step 10: Download and print your full-color e-Shram UAN Card."
    ],
    offlineProcess: "Visit your local Common Service Centre (CSC) or Post Office. Hand over your Aadhaar card and bank passbook. The CSC operator will scan your thumbprint, complete the registration, and print your laminated e-Shram UAN Card free of charge.",
    commonMistakes: [
      "EPFO members applying: If you have an active PF deduction from a formal employer, the e-Shram portal auto-rejects your application.",
      "Income tax payers registering: Taxpayers are legally barred from unorganized worker classification.",
      "Entering wrong nominee: Ensure you add a valid nominee for the ₹2,00,000 accidental insurance coverage."
    ],
    deadlineInfo: "Permanent national registry. Open 365 days a year.",
    openingDate: "Continuous year-round service",
    processingTime: "Instantaneous e-Shram Card generation upon Aadhaar OTP/biometric authentication.",
    renewalRequired: "No annual renewal needed; update profile details (mobile, address, occupation) once a year on the portal.",
    trackingProcedure: "Log in to eshram.gov.in using your mobile number and UAN to view and re-download your card.",
    correctionProcedure: "Click 'Already Registered -> Update' on eshram.gov.in to update address, bank account, or mobile number.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Worker's Bank Account",
    disbursementDetails: "During national emergencies, pandemics, or state relief transfers, welfare amounts are transferred directly from government treasuries into the worker's linked savings account.",
    faqs: [
      { q: "What is an e-Shram UAN Card?", a: "The e-Shram Card is a laminated card with a unique 12-digit Universal Account Number (UAN) that serves as universal proof of registration in India's National Database of Unorganised Workers." },
      { q: "Is there any fee to register for e-Shram at a CSC?", a: "No! Registration for e-Shram is 100% FREE across India. The Ministry of Labour pays the CSC commission directly." },
      { q: "Does the e-Shram card provide accidental insurance?", a: "Yes, registered e-Shram workers receive accidental death and permanent total disability insurance cover of ₹2,00,000 (and ₹1,00,000 for partial disability)." },
      { q: "Can gig workers (Zomato, Swiggy, Uber, Ola delivery partners) register?", a: "Yes! Platform and gig workers are officially categorized under e-Shram and are strongly encouraged to register." },
      { q: "Can agricultural laborers and farmers register?", a: "Agricultural workers and landless farm laborers who do not pay income tax are fully eligible." },
      { q: "Do I have to pay any monthly contribution to keep the card active?", a: "No! Unlike pension schemes, e-Shram is a registry card and requires ZERO monthly contributions." }
    ],
    helpline: "e-Shram National Toll-Free: 14434",
    email: "eshram-care@gov.in"
  },

  "nats": {
    launchYear: 1973,
    purpose: "National Apprenticeship Training Scheme (NATS), implemented by the Board of Apprenticeship Training (BOAT/BOPT) under the Ministry of Education, bridges the campus-to-corporate skills gap by providing 1 year of hands-on practical industry training to fresh engineering, diploma, and general stream graduates with government-funded monthly stipends.",
    targetBeneficiary: "Fresh graduates and diploma holders in Engineering, Technology, Architecture, Pharmacy, Hotel Management, and General Streams (B.A., B.Sc., B.Com, BBA, BCA) who passed within the last 3 years.",
    benefits: "One year of structured on-the-job industrial apprenticeship in top public and private enterprises (BHEL, L&T, Tata, Infosys, BSNL, etc.) + Guaranteed monthly stipend: minimum ₹9,000 per month for Graduate Apprentices, ₹8,000 per month for Technician (Diploma) Apprentices, and ₹9,000 per month for General Stream Degree Apprentices (with 50% reimbursed by Central Government via DBT) + National Apprenticeship Certificate.",
    financialBenefit: "Guaranteed monthly stipend of ₹8,000 to ₹9,000+ per month for 12 months + Certificate of Proficiency",
    benefitFrequency: "Monthly stipend transfer throughout 1-year apprenticeship tenure",
    impact: "Transforms theoretical college education into practical industry expertise, enhances employability, and leads to direct permanent corporate absorption for over 40% of apprentices.",
    detailedEligibility: {
      ageRequirement: "Minimum 18 years of age (no upper age limit).",
      genderRequirement: "All graduates eligible.",
      incomeLimit: "NO family income ceiling.",
      educationRequirement: "Graduate Degree (Engineering, Technology, General Streams: B.A., B.Sc., B.Com, BBA, BCA) or Diploma from a recognized university/technical board passed within the last 3 years.",
      occupationRequirement: "Fresh graduate / job seeker seeking industrial training.",
      casteCategoryRequirement: "Open to all categories (General, OBC, SC, ST, EWS).",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Individual student applicant."
    },
    mandatoryConditions: [
      "Must have completed an approved degree or diploma course from a recognized university or technical education board",
      "Application must be filed within 3 years of passing the qualifying examination",
      "Must NOT have undergone previous apprenticeship training under NATS elsewhere",
      "Must NOT have 1 year or more of prior regular work experience"
    ],
    conditionalRequirements: [
      "Aadhaar-seeded bank account mandatory for receiving central government direct stipend reimbursement."
    ],
    ineligibility: [
      "Candidates who passed their degree/diploma more than 3 years ago",
      "Candidates who already have 1 year or more of regular full-time post-qualification work experience",
      "Candidates who have already completed an apprenticeship under NATS or NAPS"
    ],
    documents: [
      {
        name: "Provisional Degree / Diploma Certificate or Final Consolidated Marksheet",
        why: "Proves graduation from recognized university/board within last 3 years.",
        mandatory: true,
        issuingAuthority: "University Registrar / State Board of Technical Education",
        format: "PDF copy under 1MB",
        validity: "Permanent"
      },
      {
        name: "Aadhaar Card",
        why: "Identity verification and DBT stipend transfer.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Aadhaar-Seeded Bank Passbook Copy",
        why: "For receiving central government share of monthly stipend via DBT.",
        mandatory: true,
        issuingAuthority: "Commercial Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      },
      {
        name: "Resume / Bio-Data",
        why: "For corporate employer evaluation during contract placement.",
        mandatory: true,
        issuingAuthority: "Self",
        format: "Updated CV in PDF",
        validity: "Current"
      }
    ],
    applicationMode: "Online via NATS 2.0 National Portal (nats.education.gov.in)",
    process: [
      "Step 1: Visit the modernized NATS 2.0 portal at nats.education.gov.in.",
      "Step 2: Click 'Student' -> 'Student Register' and verify your Aadhaar via OTP.",
      "Step 3: Enter educational qualification details: University/Board, College Name, Degree/Diploma, Passing Year, and Percentage.",
      "Step 4: Upload Degree Certificate / Marksheet and Bank Passbook.",
      "Step 5: Submit profile. The regional Board of Apprenticeship Training (BOAT) verifies and issues your Student NATS Enrollment Number.",
      "Step 6: Log in and click 'Establishment Requests' -> 'Find Establishment' to search active apprenticeship vacancies by company, industry, or state.",
      "Step 7: Apply to corporate establishments (e.g. BHEL, IOCL, L&T, DRDO, TCS).",
      "Step 8: Company shortlists candidates and conducts interview or merit selection.",
      "Step 9: Sign the online Apprenticeship Contract on the NATS portal.",
      "Step 10: Undergo 1-year on-the-job training and receive minimum ₹8,000–₹9,000/month stipend via DBT. Upon completion, receive the Certificate of Proficiency."
    ],
    offlineProcess: "Attend centralized Apprenticeship Mela (Job Fairs) organized periodically by BOAT/BOPT at technical colleges and government polytechnics across major cities.",
    commonMistakes: [
      "Passing year exceeding 3 years: The portal automatically checks graduation year and blocks students who graduated more than 3 years ago.",
      "Bank account not mapped on NPCI: Since 50% of the stipend is paid by the Government of India via DBT, an unlinked bank account delays stipend credits."
    ],
    deadlineInfo: "Continuous national portal open year-round; companies post fresh vacancies daily.",
    openingDate: "Continuous year-round service",
    processingTime: "Student profile approved within 3 to 5 working days by regional BOAT.",
    renewalRequired: "Apprenticeship contract is valid for strictly 12 months; cannot be repeated.",
    trackingProcedure: "Track application and interview invitations on nats.education.gov.in dashboard.",
    correctionProcedure: "Student can edit profile before signing the digital apprenticeship contract.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student's Bank Account + Corporate Employer Transfer",
    disbursementDetails: "Employer pays their share of the monthly stipend, and the Central Government reimburses its 50% share (up to ₹4,500/month) directly into the student's bank account via PFMS.",
    faqs: [
      { q: "What is the minimum monthly stipend under NATS?", a: "The statutory minimum monthly stipend is ₹9,000/month for Graduate Apprentices (B.E./B.Tech and B.A./B.Sc./B.Com), and ₹8,000/month for Technician (Diploma) Apprentices. Many leading corporations pay higher stipends (₹15,000–₹25,000/month)." },
      { q: "Can non-engineering general stream graduates (B.Com, B.Sc., B.A.) apply?", a: "Yes! In 2021, the Cabinet expanded NATS to cover general stream graduates (B.A., B.Sc., B.Com, BBA, BCA) in sectors like retail, banking, logistics, and healthcare." },
      { q: "What is the maximum time gap after graduation to apply?", a: "You must apply within 3 years of passing your qualifying degree or diploma examination." },
      { q: "What is the Certificate of Proficiency issued after 1 year?", a: "The Certificate of Proficiency is an official national certificate issued by the Ministry of Education that is recognized globally as 1 year of valid work experience." },
      { q: "Does an apprenticeship guarantee a permanent job?", a: "While an apprenticeship is a training contract, over 40% of high-performing apprentices are absorbed directly into permanent employment by their host companies." },
      { q: "Is there any exam to join NATS?", a: "No national exam is conducted; companies shortlist candidates based on college marks or direct interviews." }
    ],
    helpline: "NATS 2.0 National Helpdesk: 1800-425-2239",
    email: "nats-support@gov.in"
  },

  "pm-sym": {
    launchYear: 2019,
    purpose: "Pradhan Mantri Shram Yogi Maan-dhan (PM-SYM), launched by the Ministry of Labour and Employment, is a voluntary and contributory pension scheme that provides assured social security of ₹3,00,000 per year (₹3,000/month) to unorganized workers in their old age, backed by an equal 50:50 matching contribution from the Central Government.",
    targetBeneficiary: "Unorganized workers aged 18 to 40 years whose monthly income is ₹15,000 or less.",
    benefits: "Guaranteed monthly pension of ₹3,000 per month starting from age 60 until death. 50:50 matching contribution: the worker contributes a modest ₹55 to ₹200 per month (depending on entry age), and the Central Government deposits the exact same matching amount into the pension fund. Family pension: upon subscriber's death, spouse receives 50% of the pension (₹1,500/month) for life.",
    financialBenefit: "Guaranteed lifetime pension of ₹3,000 per month from age 60 + 50% family pension for spouse",
    benefitFrequency: "Monthly guaranteed pension for lifetime from age 60",
    impact: "Builds a formal pension safety net for informal domestic maids, street vendors, rickshaw pullers, construction workers, and agricultural laborers.",
    detailedEligibility: {
      ageRequirement: "18 to 40 years of age.",
      genderRequirement: "All informal workers eligible.",
      incomeLimit: "Monthly income must NOT exceed ₹15,000 per month.",
      educationRequirement: "None.",
      occupationRequirement: "Informal, home-based, self-employed, or daily wage unorganized worker.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Individual pension account."
    },
    mandatoryConditions: [
      "Must be an unorganized worker aged between 18 and 40 years",
      "Monthly income must not exceed ₹15,000",
      "Must NOT be covered under EPFO, ESIC, or NPS (government funded)",
      "Must NOT be an income tax payer",
      "Must maintain an active savings bank or post office account with auto-debit facility"
    ],
    conditionalRequirements: [
      "Spouse receives 50% family pension upon demise of the pensioner."
    ],
    ineligibility: [
      "Organized sector workers covered under EPF / ESI / NPS",
      "Income tax payers",
      "Persons entering below 18 years or above 40 years of age"
    ],
    documents: [
      {
        name: "Aadhaar Card",
        why: "Identity verification and biometric e-KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Savings Bank Passbook / Jan Dhan Passbook",
        why: "Mandatory for monthly auto-debit contribution and future pension credit.",
        mandatory: true,
        issuingAuthority: "Commercial Bank or Post Office",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      },
      {
        name: "Active Mobile Number",
        why: "For receiving contribution SMS and PM-SYM Pension Card PIN.",
        mandatory: true,
        issuingAuthority: "Telecom Service Provider",
        format: "Active number",
        validity: "Active"
      }
    ],
    applicationMode: "Through Common Service Centres (CSCs) via maandhan.in or Self-Enrolment via Maandhan Portal",
    process: [
      "Step 1: Visit any Common Service Centre (CSC) with your Aadhaar card and Bank Passbook.",
      "Step 2: CSC operator enters your Aadhaar number and Mobile number on maandhan.in.",
      "Step 3: Perform biometric fingerprint authentication.",
      "Step 4: Enter Occupation, Monthly Income (<= ₹15,000), and Nominee details.",
      "Step 5: System calculates monthly contribution based on age (e.g. ₹55/month at age 18; ₹100/month at age 29; ₹200/month at age 40).",
      "Step 6: Pay the 1st month's contribution in cash to the CSC operator.",
      "Step 7: Sign the auto-debit mandate form, which the operator scans and uploads.",
      "Step 8: Your unique PM-SYM Pension Card is printed and handed over on the spot.",
      "Step 9: Subsequent monthly contributions are automatically debited from your bank account until age 60.",
      "Step 10: Upon turning 60, guaranteed monthly pension of ₹3,000 starts flowing into your bank account."
    ],
    offlineProcess: "Walk into any village Common Service Centre (CSC). The registration takes less than 5 minutes, and your laminated PM-SYM Pension Card is issued on the spot.",
    commonMistakes: [
      "Enrolling if covered under EPFO/ESIC: System cross-verifies with Ministry of Labour databases and disqualifies formal employees.",
      "Letting bank account run dry on auto-debit date: Unpaid contributions can be revived by paying outstanding arrears with interest determined by LIC."
    ],
    deadlineInfo: "Can be joined anytime between ages 18 and 40. Open year-round.",
    openingDate: "Continuous year-round service",
    processingTime: "Instantaneous PM-SYM Pension Card generation at CSC.",
    renewalRequired: "Auto-debit runs monthly until age 60.",
    trackingProcedure: "Log in to maandhan.in or download the Maandhan app using your mobile number and PM-SYM ID.",
    correctionProcedure: "CSC operator or LIC branch can update nominee or bank account details.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Pensioner's Bank Account managed by LIC",
    disbursementDetails: "Pension fund is managed by Life Insurance Corporation of India (LIC). From age 60, LIC deposits ₹3,000 directly into the subscriber's bank account on the first week of every month for life.",
    faqs: [
      { q: "How much does the government contribute to my PM-SYM account?", a: "The Government of India contributes an exact matching 50% amount. For example, if you contribute ₹100 per month, the Central Government deposits an additional ₹100 per month into your pension account." },
      { q: "What happens if a subscriber dies before age 60?", a: "If the subscriber passes away before age 60, the spouse can either continue the scheme by paying regular contributions or exit the scheme and receive the entire accumulated corpus with bank interest." },
      { q: "What happens if the pensioner dies after age 60?", a: "Upon the pensioner's death, the spouse is entitled to receive 50% of the pension (₹1,500 per month) as a lifelong family pension." },
      { q: "Can a domestic maid or construction worker join?", a: "Yes! PM-SYM is tailor-made for unorganized workers like domestic helpers, street vendors, rickshaw pullers, cobblers, and agricultural workers." },
      { q: "Can I leave the scheme before 60 years?", a: "Yes, voluntary exit is permitted. If you exit within 10 years, you receive back your entire contribution with savings bank interest." },
      { q: "What is the monthly contribution at age 18 vs age 40?", a: "At age 18, you pay only ₹55 per month; at age 29, you pay ₹100 per month; at the maximum entry age of 40, you pay ₹200 per month." }
    ],
    helpline: "PM-SYM Toll-Free Helpline: 1800-267-6888",
    email: "shramyogi@gov.in"
  },

  "pmjdy": {
    launchYear: 2014,
    purpose: "Pradhan Mantri Jan Dhan Yojana (PMJDY), implemented by the Department of Financial Services, Ministry of Finance, is the world's largest financial inclusion mission, ensuring that every unbanked household in India has access to formal banking services, basic savings accounts, affordable credit, insurance, and direct government DBT transfers.",
    targetBeneficiary: "Any Indian citizen aged 10 years and above who does not have a formal savings bank account.",
    benefits: "Zero-balance Basic Savings Bank Deposit (BSBD) account with no minimum balance penalty + Free RuPay Debit Card with built-in ₹2,00,000 accidental insurance coverage (₹1 Lakh for accounts opened before Aug 2018) + ₹10,000 Overdraft (OD) credit facility per eligible household + Direct platform for all central and state DBT subsidies.",
    financialBenefit: "Zero-balance bank account + ₹2,00,000 free accidental insurance + ₹10,000 overdraft facility",
    benefitFrequency: "Permanent banking account with active transactional privileges",
    impact: "Has opened over 53 crore bank accounts holding over ₹2.3 lakh crore in savings, with over 55% accounts owned by women and 67% in rural areas, ending financial exclusion in India.",
    detailedEligibility: {
      ageRequirement: "10 years and above (minors operate with guardian guidance).",
      genderRequirement: "All citizens eligible; priority for women heads of households for the ₹10,000 OD facility.",
      incomeLimit: "NO income restriction.",
      educationRequirement: "None.",
      occupationRequirement: "Any.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Overdraft facility up to ₹10,000 granted to one person per household (preferably the female head)."
    },
    mandatoryConditions: [
      "Must be an Indian citizen who does not already have a basic bank account",
      "Must possess valid identity and address proof (Aadhaar, Voter ID, or Simplified KYC)",
      "Must swipe RuPay card at least once in 90 days to keep the ₹2,00,000 accident insurance active"
    ],
    conditionalRequirements: [
      "Overdraft facility up to ₹10,000 requires satisfactory account operation for at least 6 months."
    ],
    ineligibility: [
      "Non-Indian citizens",
      "Persons attempting to open duplicate Jan Dhan accounts in multiple banks"
    ],
    documents: [
      {
        name: "Aadhaar Card",
        why: "Sole document needed for instant Jan Dhan account opening and biometric e-KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original card or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Passport Size Photographs",
        why: "Passbook generation and bank record.",
        mandatory: true,
        issuingAuthority: "Self",
        format: "2 recent colour photographs",
        validity: "Recent"
      }
    ],
    applicationMode: "In-Person at any Commercial Bank, Regional Rural Bank (RRB), or Bank Mitra / Business Correspondent (BC) Kiosk",
    process: [
      "Step 1: Walk into any public sector bank, private bank, Gramin bank, or neighborhood Bank Mitra kiosk.",
      "Step 2: Collect the free PMJDY Account Opening Form (available in Hindi, English, and regional languages).",
      "Step 3: Fill in your Name, Date of Birth, Aadhaar Number, Mobile Number, and Nominee details.",
      "Step 4: Attach a photocopy of your Aadhaar Card and 2 passport photos.",
      "Step 5: Perform biometric fingerprint authentication on the micro-ATM terminal.",
      "Step 6: Account is generated with zero opening deposit requirement.",
      "Step 7: Collect your free Jan Dhan Passbook on the spot.",
      "Step 8: Within 7 to 10 days, receive your free RuPay Debit Card with ₹2,00,000 accident insurance.",
      "Step 9: Operate the account regularly for 6 months to unlock the ₹10,000 Overdraft facility."
    ],
    offlineProcess: "Jan Dhan accounts can be opened at any bank branch or Bank Mitra / Customer Service Point (CSP) kiosk in your village or ward. No initial deposit money is required.",
    commonMistakes: [
      "Not using the RuPay card once in 90 days: The ₹2,00,000 free accidental insurance is active ONLY if the RuPay card has performed at least one financial/non-financial transaction in the preceding 90 days.",
      "Paying fees to open account: Opening a Jan Dhan account is 100% free; no bank official or BC agent can charge any money."
    ],
    deadlineInfo: "Permanent national financial inclusion mission open year-round.",
    openingDate: "Continuous year-round service",
    processingTime: "Account opened on the same day or within 24 to 48 hours.",
    renewalRequired: "No renewal needed; periodic re-KYC every 10 years per RBI directives.",
    trackingProcedure: "Check account balance at any ATM, micro-ATM, or via missed call banking.",
    correctionProcedure: "Visit your home branch to update mobile number or address.",
    disbursementMethod: "Direct Bank Account Facility with RuPay Debit Card",
    disbursementDetails: "Account holders can withdraw cash from any bank ATM across India, deposit cash, and receive all government welfare payments (PM-KISAN, LPG subsidy, pensions) directly via DBT.",
    faqs: [
      { q: "Is any minimum balance required to maintain a Jan Dhan account?", a: "No! PMJDY accounts are 100% Zero-Balance accounts. There is absolutely NO minimum balance requirement, and banks cannot deduct any penalty even if the balance is ₹0.00." },
      { q: "What is the RuPay Card Accidental Insurance amount?", a: "For PMJDY accounts opened after 28 August 2018, the RuPay debit card carries a free accidental death and disability insurance cover of ₹2,00,000 (Two Lakh Rupees)." },
      { q: "What is the ₹10,000 Overdraft facility?", a: "After 6 months of satisfactory account operation, account holders can withdraw up to ₹10,000 even if their account balance is zero, providing emergency credit without collateral." },
      { q: "Can I receive all government subsidies in my Jan Dhan account?", a: "Yes! PMJDY accounts are automatically enabled for Direct Benefit Transfer (DBT) and receive subsidies for PM-KISAN, Ujjwala, scholarships, and pensions." },
      { q: "Can children open a Jan Dhan account?", a: "Any child aged 10 years and above can open a Jan Dhan savings account operated independently or jointly with parents." },
      { q: "Can I transfer money using UPI from a Jan Dhan account?", a: "Yes! You can link your PMJDY RuPay debit card to BHIM, Google Pay, PhonePe, or Paytm for instant digital payments." }
    ],
    helpline: "National Financial Inclusion Toll-Free: 1800-180-1111 / 1800-11-0001",
    email: "pmjdy-support@nic.in"
  },

  "pmjjby": {
    launchYear: 2015,
    purpose: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY), administered through Life Insurance Corporation (LIC) and scheduled commercial banks under the Ministry of Finance, is a government-backed affordable life insurance scheme providing ₹2,00,000 life risk coverage for death due to any reason.",
    targetBeneficiary: "All individual bank and post office account holders aged 18 to 50 years.",
    benefits: "Guaranteed life insurance coverage of ₹2,00,000 payable to the nominee upon the death of the insured member due to any cause (natural death, illness, medical condition, or accident) for an ultra-affordable annual premium of just ₹436 per year (roughly ₹1.20 per day).",
    financialBenefit: "₹2,00,000 life insurance claim paid to the family/nominee upon death of the insured due to any reason",
    benefitFrequency: "Annual renewable term insurance (1 June to 31 May)",
    impact: "Protects low-income households from sudden financial devastation upon the loss of an earning member, ensuring dignity and funds for children's future.",
    detailedEligibility: {
      ageRequirement: "18 to 50 years of age at the time of enrollment (coverage continues up to age 55).",
      genderRequirement: "All citizens eligible.",
      incomeLimit: "NO income restriction.",
      educationRequirement: "None.",
      occupationRequirement: "Any.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Individual subscriber policy."
    },
    mandatoryConditions: [
      "Must have an active savings bank account or post office account",
      "Must be aged between 18 and 50 years at the time of entry",
      "Must give auto-debit consent for annual premium deduction of ₹436 in May each year",
      "Must possess an Aadhaar card linked to the bank account"
    ],
    conditionalRequirements: [
      "30-day initial lien clause applies for non-accidental death claims during the first month of fresh enrollment."
    ],
    ineligibility: [
      "Persons aged below 18 years or above 50 years at the time of fresh entry",
      "Non-Indian citizens",
      "Holding policies through multiple bank accounts (maximum claim across all banks is strictly capped at ₹2,00,000)"
    ],
    documents: [
      {
        name: "Aadhaar Card",
        why: "Identity verification and KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or photocopy",
        validity: "Permanent"
      },
      {
        name: "Savings Bank Passbook Copy",
        why: "For annual auto-debit of ₹436 premium.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      },
      {
        name: "Death Certificate & Claim Form (in the event of a claim)",
        why: "Legal proof of death for nominee claim settlement.",
        mandatory: true,
        issuingAuthority: "Registrar of Births and Deaths",
        format: "Certified Death Certificate",
        validity: "Permanent"
      }
    ],
    applicationMode: "Online via Bank Net Banking / Mobile Banking or Offline at any Bank Branch or Post Office",
    process: [
      "Step 1: Log in to your bank's Net Banking app or visit your savings bank branch.",
      "Step 2: Navigate to 'Insurance' -> 'Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)'.",
      "Step 3: Confirm your Personal Details, Date of Birth, and Nominee details (Name, Relationship, Aadhaar).",
      "Step 4: Authorize the annual auto-debit consent of ₹436 from your account.",
      "Step 5: Submit the form. Certificate of Insurance (COI) is generated immediately.",
      "Step 6: Premium of ₹436 is deducted automatically every year between 25 May and 31 May for renewal.",
      "Step 7: In the unfortunate event of the insured's demise, the nominee submits the Claim Form and Death Certificate to the bank branch.",
      "Step 8: Bank verifies records and forwards claim to the life insurance company (LIC/private insurer).",
      "Step 9: ₹2,00,000 claim is settled directly into the nominee's bank account within 30 days."
    ],
    offlineProcess: "Visit your local bank branch where you have your savings account. Ask for the one-page PMJJBY enrollment form. Fill in your nominee details, sign the auto-debit authorization, and hand it to the teller.",
    commonMistakes: [
      "Insufficient balance in late May: The auto-debit happens between May 25 and May 31. If account balance is under ₹436, the policy lapses.",
      "Not updating the nominee: Ensure your nominee's name and relationship are clearly updated in the bank's records.",
      "Enrolling in multiple banks: You can only claim ₹2,00,000 once; premium paid on duplicate accounts in other banks is forfeited."
    ],
    deadlineInfo: "Can be joined anytime during the year (pro-rata premium applies for joining in later quarters); annual renewal in May.",
    openingDate: "Continuous year-round service",
    processingTime: "Instant policy issuance; death claims settled within 30 days of complete document submission.",
    renewalRequired: "Auto-debits ₹436 annually in May until age 55.",
    trackingProcedure: "Download Certificate of Insurance on jansuraksha.gov.in under PMJJBY -> Insurance Certificates.",
    correctionProcedure: "Submit an updated Nomination Form at your bank branch.",
    disbursementMethod: "Direct Electronic Fund Transfer into Nominee's Bank Account via NEFT/RTGS",
    disbursementDetails: "Life Insurance Corporation (LIC) or the partner insurer credits ₹2,00,000 directly into the nominee's verified bank account upon death verification.",
    faqs: [
      { q: "What does PMJJBY cover?", a: "PMJJBY covers death due to ANY reason—natural death, heart attack, cancer, medical illness, or accidental death. The nominee receives ₹2,00,000." },
      { q: "What is the annual premium for PMJJBY?", a: "The annual premium is only ₹436 per year (less than ₹1.20 per day), which is auto-debited once a year from your savings account." },
      { q: "What is the age limit for PMJJBY?", a: "You can enroll between 18 and 50 years of age. Coverage continues up to 55 years of age, provided annual premiums are paid." },
      { q: "Is a medical checkup required to join?", a: "No! No medical tests or health checkups are required. You only need to sign a simple self-certification of good health." },
      { q: "What is the 30-day lien period?", a: "For fresh enrollments, claims for deaths occurring due to illness during the first 30 days are not covered (to prevent fraud). However, accidental deaths are covered from day one." },
      { q: "Can I download my policy certificate online?", a: "Yes. Visit jansuraksha.gov.in, select PMJJBY, enter your bank name and Aadhaar number to download your Certificate of Insurance." }
    ],
    helpline: "National Jan Suraksha Toll-Free: 1800-180-1111 / 1800-110-001",
    email: "jansuraksha-support@gov.in"
  },

  "pmsby": {
    launchYear: 2015,
    purpose: "Pradhan Mantri Suraksha Bima Yojana (PMSBY), administered through public general insurance companies under the Ministry of Finance, is the world's most affordable accidental insurance scheme, providing ₹2,00,000 accidental death and disability coverage for just ₹20 per year.",
    targetBeneficiary: "All individual bank and post office account holders aged 18 to 70 years.",
    benefits: "Accidental death benefit of ₹2,00,000 payable to the nominee; permanent total disability benefit of ₹2,00,000 (loss of both eyes, hands, or feet) payable to the insured; and permanent partial disability benefit of ₹1,00,000 (loss of one eye, hand, or foot) for an ultra-low premium of just ₹20 per year (less than 6 paise per day).",
    financialBenefit: "₹2,00,000 accidental death / permanent total disability coverage (or ₹1,00,000 partial disability) for only ₹20/year",
    benefitFrequency: "Annual renewable policy (1 June to 31 May)",
    impact: "Provides basic financial protection against sudden accidental death or debilitating injury to informal workers, drivers, construction laborers, and agricultural workers.",
    detailedEligibility: {
      ageRequirement: "18 to 70 years of age.",
      genderRequirement: "All citizens eligible.",
      incomeLimit: "NO income restriction.",
      educationRequirement: "None.",
      occupationRequirement: "Any.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Individual subscriber policy."
    },
    mandatoryConditions: [
      "Must have an active savings bank account or post office account",
      "Must be aged between 18 and 70 years",
      "Must give auto-debit consent for annual premium deduction of ₹20 in May each year",
      "Must possess an Aadhaar card linked to the bank account"
    ],
    conditionalRequirements: [
      "FIR, post-mortem report, or disability medical certificate required in case of claim."
    ],
    ineligibility: [
      "Persons below 18 years or above 70 years of age",
      "Natural deaths caused by illness, disease, or medical conditions (natural deaths are covered under PMJJBY, not PMSBY)",
      "Holding policies in multiple banks (maximum claim across all banks is strictly capped at ₹2,00,000)"
    ],
    documents: [
      {
        name: "Aadhaar Card",
        why: "Identity verification and KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or photocopy",
        validity: "Permanent"
      },
      {
        name: "Savings Bank Passbook Copy",
        why: "For annual auto-debit of ₹20 premium.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      },
      {
        name: "Police FIR & Post-Mortem Report / Disability Certificate (for Claims)",
        why: "Proves accidental nature of the event.",
        mandatory: true,
        issuingAuthority: "Police Department / Government Civil Hospital",
        format: "Certified copies",
        validity: "Permanent"
      }
    ],
    applicationMode: "Online via Bank Net Banking / Mobile Banking or Offline at any Bank Branch or Post Office",
    process: [
      "Step 1: Open your bank's Net Banking / Mobile app or visit your savings bank branch.",
      "Step 2: Select 'Insurance' -> 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)'.",
      "Step 3: Confirm your Personal Details, Date of Birth, and Nominee details.",
      "Step 4: Authorize auto-debit consent of ₹20 from your account.",
      "Step 5: Submit the form. Certificate of Insurance is issued immediately.",
      "Step 6: Premium of ₹20 is auto-debited annually between May 25 and May 31.",
      "Step 7: In the event of an accident resulting in death or disability, the nominee/insured submits the Claim Form, FIR, and Post-Mortem / Disability Certificate to the bank branch within 30 days.",
      "Step 8: Bank verifies records and forwards claim to the general insurance company.",
      "Step 9: ₹2,00,000 (or ₹1,00,000) is credited directly into the nominee/insured's bank account within 30 days."
    ],
    offlineProcess: "Walk into your local bank branch or Post Office. Fill out the simple one-page PMSBY consent slip, write your nominee name, sign, and hand it over. The teller activates the policy immediately.",
    commonMistakes: [
      "Confusing PMSBY with life insurance: PMSBY covers ACCIDENTAL deaths and accidental disability ONLY; natural deaths from heart attack or illness are not covered (enroll in PMJJBY for natural death).",
      "Lapse due to zero balance: Keep at least ₹20 in your account during late May for auto-debit.",
      "Not filing police FIR in road accidents: FIR or panchanama is required to prove accidental death."
    ],
    deadlineInfo: "Can be joined anytime during the year; annual renewal window runs in May.",
    openingDate: "Continuous year-round service",
    processingTime: "Instant policy issuance; accident claims settled within 30 days.",
    renewalRequired: "Auto-debits ₹20 annually in May until age 70.",
    trackingProcedure: "Download Certificate of Insurance on jansuraksha.gov.in under PMSBY -> Insurance Certificates.",
    correctionProcedure: "Submit updated nomination form at your bank branch.",
    disbursementMethod: "Direct Electronic Fund Transfer into Nominee / Insured's Bank Account",
    disbursementDetails: "General Insurance company credits the claim amount (₹2 Lakh for death/total disability, ₹1 Lakh for partial disability) directly into the beneficiary's bank account via NEFT.",
    faqs: [
      { q: "How much does PMSBY cost per year?", a: "PMSBY costs an unbelievable ₹20 per year (raised from ₹12 in 2022). It is less than 6 paise per day for ₹2,00,000 insurance." },
      { q: "What is the difference between PMJJBY and PMSBY?", a: "PMJJBY costs ₹436/year and covers death due to ANY reason (illness, heart attack, cancer, or accident). PMSBY costs ₹20/year and covers ONLY accidental death and permanent accidental disability." },
      { q: "What is the age limit for PMSBY?", a: "You can join PMSBY between 18 and 70 years of age (compared to 50 for PMJJBY)." },
      { q: "Does PMSBY cover permanent disability like loss of sight or limb?", a: "Yes! Total irreversible loss of both eyes, hands, or feet receives ₹2,00,000; loss of one eye, hand, or foot receives ₹1,00,000." },
      { q: "Can both husband and wife enroll in PMSBY?", a: "Yes. Both husband and wife can hold separate PMSBY policies in their individual bank accounts for ₹20 each." },
      { q: "What should the nominee do in case of accidental death?", a: "Within 30 days of the accident, the nominee should take the death certificate, FIR copy, post-mortem report, and bank passbook to the deceased's bank branch to submit the claim." }
    ],
    helpline: "National Jan Suraksha Toll-Free: 1800-180-1111 / 1800-110-001",
    email: "pmsby-support@gov.in"
  },

  "pmay-urban": {
    launchYear: 2015,
    purpose: "Pradhan Mantri Awas Yojana – Urban (PMAY-U 2.0), under the Ministry of Housing and Urban Affairs, aims to provide all-weather pucca houses with basic civic infrastructure (water, sanitation, electricity, and kitchen) to all eligible urban families belonging to EWS, LIG, and Middle Income Groups across India.",
    targetBeneficiary: "Urban poor and middle-class families belonging to Economically Weaker Section (EWS - income < ₹3L), Low Income Group (LIG - income ₹3L–₹6L), and Middle Income Group (MIG - income ₹6L–₹9L) who do not own a pucca house anywhere in India.",
    benefits: "Direct government financial subsidy across 4 verticals: 1) Beneficiary-Led Construction (BLC): Direct financial grant of ₹1,50,000 to ₹2,50,000 for constructing a pucca house on own land; 2) Credit Linked Subsidy Scheme (CLSS) / Interest Subsidy Scheme (ISS): Up to 4.0% upfront interest subsidy on home loans up to ₹25 Lakh (subsidy value up to ₹1.80 Lakh); 3) Affordable Housing in Partnership (AHP): Central assistance of ₹1.5 Lakh per EWS flat; 4) In-situ Slum Redevelopment (ISSR): Central grant of ₹1.0 Lakh per eligible slum dweller household.",
    financialBenefit: "Direct grant of ₹1.5 to ₹2.5 Lakh (BLC) OR upfront home loan interest subsidy up to ₹1.80 Lakh (CLSS/ISS)",
    benefitFrequency: "Milestone-based construction grant or upfront loan interest subsidy",
    impact: "Fulfills the dream of home ownership for urban slum dwellers, informal workers, and middle-class families, providing secure legal title registered in the name of the female head of the family.",
    detailedEligibility: {
      ageRequirement: "Adult head of family (18+ years).",
      genderRequirement: "Mandatory female ownership or co-ownership (house must be registered in the name of female head or jointly with husband).",
      incomeLimit: "EWS: Up to ₹3,00,000/year; LIG: ₹3,00,001 to ₹6,00,000/year; MIG: ₹6,00,001 to ₹9,00,000/year.",
      educationRequirement: "None.",
      occupationRequirement: "Any urban resident.",
      casteCategoryRequirement: "Open to all categories (EWS, LIG, SC, ST, OBC, General).",
      residenceRequirement: "Resident of statutory town / urban local body.",
      familyConditions: "Beneficiary family (husband, wife, unmarried children) must not own a pucca house anywhere in India."
    },
    mandatoryConditions: [
      "The beneficiary family must NOT own a pucca house in their name anywhere in India",
      "The house must be registered in the name of an adult female member or jointly with her husband (sole male ownership permitted only in absence of adult female in family)",
      "Carpet area must be up to 30 sq.m for EWS and up to 60 sq.m for LIG",
      "For BLC component, applicant must own a vacant plot of land in an urban municipal area"
    ],
    conditionalRequirements: [
      "Building plan approval from urban local body required before construction grant release."
    ],
    ineligibility: [
      "Families that already own a pucca house anywhere in India",
      "Families that have previously received financial assistance under any central/state housing scheme (e.g. earlier PMAY, RAY, VAMBAY)",
      "Annual household income exceeding ₹9,00,000"
    ],
    documents: [
      {
        name: "Aadhaar Card of All Family Members",
        why: "Identity verification and national de-duplication cross-check.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Photocopies of all family members' Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Income Certificate / Salary Slip / ITR",
        why: "Verifies EWS (< ₹3L), LIG (₹3L–₹6L), or MIG (< ₹9L) category.",
        mandatory: true,
        issuingAuthority: "Revenue Authority (Tahsildar / SDM) or Employer",
        format: "Valid Revenue Certificate / Form 16",
        validity: "Current financial year"
      },
      {
        name: "Land Ownership Record / Registered Sale Deed / Patta (for BLC component)",
        why: "Proves legal ownership of vacant urban plot for house construction.",
        mandatory: false,
        issuingAuthority: "Sub-Registrar Office / Municipal Corporation",
        format: "Certified title deed / possession certificate",
        validity: "Permanent"
      },
      {
        name: "Affidavit of Not Owning a Pucca House",
        why: "Statutory declaration certifying no pucca house is owned in India.",
        mandatory: true,
        issuingAuthority: "Notary Public / Executive Magistrate",
        format: "Notarized affidavit on stamp paper",
        validity: "Current"
      },
      {
        name: "Bank Passbook Copy (Aadhaar-Seeded)",
        why: "For receiving milestone construction funds via DBT.",
        mandatory: true,
        issuingAuthority: "Bank Branch",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via PMAY-U Portal (pmaymis.gov.in) / PMAY-U 2.0 App or through Municipal Corporation / CSC",
    process: [
      "Step 1: Visit pmaymis.gov.in or your local Municipal Corporation / Municipality housing desk.",
      "Step 2: Choose 'Citizen Assessment' and enter your Aadhaar Number to verify identity.",
      "Step 3: Select your application category: 'Beneficiary-Led Construction (BLC)' if you have land, or 'Credit Linked Subsidy (CLSS)' if taking a home loan.",
      "Step 4: Enter Personal details, Family members' Aadhaar numbers, and Current Address.",
      "Step 5: Fill in Income details and Bank Account details.",
      "Step 6: If applying under BLC, provide plot survey number, area, and approved house layout.",
      "Step 7: Upload photo, Aadhaar, Land documents, and Income certificate.",
      "Step 8: Submit the application and download your Assessment ID.",
      "Step 9: Municipal engineers conduct geo-tagged photo inspection of your plot / current dwelling.",
      "Step 10: Upon approval, construction grant is disbursed in 3–4 milestone installments linked to geo-tagged physical progress (Foundation, Lintel, Roof, and Completion)."
    ],
    offlineProcess: "Visit the Housing Section at your local Municipal Corporation or Town Municipality office. Officials assist with online registration and schedule the geo-tagging site inspection.",
    commonMistakes: [
      "Registering only in male member's name: The law strictly mandates that the house title must be in the name of the female head or joint ownership.",
      "Building without municipal plan sanction: BLC grants require formal municipal building plan approval before first foundation tranche is disbursed.",
      "Commencing construction before geo-tagging: Municipal engineers must geo-tag the vacant plot BEFORE construction begins; unverified structures are rejected."
    ],
    deadlineInfo: "Union Cabinet launched PMAY-U 2.0 in August 2024 to construct an additional 1 crore urban houses over 5 years (2024–2029).",
    openingDate: "Continuous rolling enrollment",
    processingTime: "Sanctioned within 60 to 90 days; construction funds disbursed over 12 to 18 months per milestone.",
    renewalRequired: "One-time housing grant per family.",
    trackingProcedure: "Track application status on pmaymis.gov.in under 'Search Beneficiary' using Aadhaar or Assessment ID.",
    correctionProcedure: "Municipal housing officer can update applicant data on the PMAY-MIS portal before state sanction.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Beneficiary Bank Account (BLC) OR Upfront Interest Credit to Bank (CLSS)",
    disbursementDetails: "For Beneficiary-Led Construction (BLC), grants (₹1.5L–₹2.5L) are credited in 3–4 tranches into the female head's bank account linked to geo-tagged photo verification. For home loans (CLSS), the central subsidy is paid upfront to the lending bank, immediately reducing the borrower's loan principal and monthly EMI.",
    faqs: [
      { q: "What is PMAY-U 2.0?", a: "Launched in August 2024, PMAY-Urban 2.0 is the expanded flagship urban housing program with a budget of ₹10 lakh crore to provide 1 crore urban poor and middle-class families with pucca houses over the next 5 years." },
      { q: "Is female ownership mandatory under PMAY?", a: "Yes! A core pillar of PMAY is women's empowerment: the pucca house must be registered in the name of an adult female member or jointly in the name of husband and wife." },
      { q: "How much subsidy does an urban homeowner receive for building a house on their own plot?", a: "Under the Beneficiary-Led Construction (BLC) component, eligible EWS families receive ₹1,50,000 from the Central Government, plus ₹50,000 to ₹1,00,000 from the State Government, totaling up to ₹2.5 Lakh in direct construction grants." },
      { q: "How does the home loan interest subsidy work under PMAY?", a: "Under the Interest Subsidy Scheme (ISS), the government provides up to a 4.0% interest subsidy on home loans up to ₹25 Lakh for houses valued up to ₹35 Lakh, crediting up to ₹1.80 Lakh upfront into your loan account." },
      { q: "Can a family owning an ancestral village house apply for PMAY-Urban?", a: "The family must not own any pucca house anywhere in India. If the village home is a kutcha mud house, you remain eligible." },
      { q: "What is the geo-tagging inspection?", a: "Municipal engineers visit your plot and capture GPS-stamped photographs at 4 stages: 1) Vacant plot, 2) Foundation level, 3) Lintel/Roof level, and 4) Fully completed house with painted PMAY logo." }
    ],
    helpline: "PMAY-Urban Toll-Free: 1800-11-6163 / 011-23063285",
    email: "pmaymis-mohua@gov.in"
  },

  "pmay-gramin": {
    launchYear: 2016,
    purpose: "Pradhan Mantri Awas Yojana – Gramin (PMAY-G), under the Ministry of Rural Development, provides direct financial assistance to homeless rural families and those living in kutcha, dilapidated houses to construct a quality pucca house with basic amenities including electricity, piped water, and an LPG connection, fulfilling the national goal of 'Housing for All'.",
    targetBeneficiary: "Rural households identified as houseless or living in zero, one, or two-room kutcha houses as per the SECC 2011 deprivation index and the Awas+ rural housing survey.",
    benefits: "Direct financial grant of ₹1,20,000 in plain rural areas and ₹1,30,000 in hilly/difficult/northeastern/tribal states (disbursed in 3–4 milestone installments directly via DBT). In addition, beneficiaries receive 90 to 95 days of unskilled manual labor wages (approx ₹25,000) under MGNREGA for constructing their own house, plus ₹12,000 for toilet construction under Swachh Bharat Mission (SBM), and a free Ujjwala LPG gas connection.",
    financialBenefit: "Direct construction grant of ₹1,20,000 (plains) / ₹1,30,000 (hills) + ₹25,000 MGNREGA wages + ₹12,000 toilet grant",
    benefitFrequency: "Milestone-based construction grant disbursed in 3–4 tranches via DBT",
    impact: "Has constructed over 2.6 crore rural homes across India with disaster-resilient local architecture, transforming rural living standards and creating permanent family assets in women's names.",
    detailedEligibility: {
      ageRequirement: "Adult head of household (18+ years).",
      genderRequirement: "House is registered in the name of the woman or jointly in the name of husband and wife.",
      incomeLimit: "Assessed based on rural deprivation criteria in SECC 2011 and Awas+ surveys.",
      educationRequirement: "None.",
      occupationRequirement: "Rural agricultural laborer, artisan, informal worker, marginal farmer.",
      casteCategoryRequirement: "Open to all categories; high priority quotas for SC, ST, primitive tribes, and minorities.",
      residenceRequirement: "Rural Gram Panchayat area.",
      familyConditions: "Family (husband, wife, and minor children) must not own a pucca house anywhere in India."
    },
    mandatoryConditions: [
      "Must be listed on the permanent PMAY-G beneficiary priority list (SECC 2011 / Awas+ survey) verified by the Gram Sabha",
      "Must not own a pucca house anywhere in India",
      "Minimum carpet area of constructed house must be at least 25 sq. metres with a dedicated hygienic cooking space",
      "Bank account must be seeded with Aadhaar for Direct Benefit Transfer via AwaasSoft"
    ],
    conditionalRequirements: [
      "Toilet construction must be completed alongside the house to claim the additional ₹12,000 SBM grant."
    ],
    ineligibility: [
      "Households owning a motorized 2-wheeler, 3-wheeler, 4-wheeler, or mechanized fishing boat/tractor",
      "Households with any family member who is a regular government employee",
      "Households paying income tax or professional tax",
      "Households owning 2.5 acres or more of irrigated land with an irrigation equipment",
      "Households owning an existing pucca house with concrete roof"
    ],
    documents: [
      {
        name: "Aadhaar Card of All Household Members",
        why: "Identity verification and mandatory biometric AwaasSoft entry.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Photocopies of all family Aadhaar cards",
        validity: "Permanent"
      },
      {
        name: "Job Card Number (MGNREGA)",
        why: "To link and disburse 90–95 days of unskilled construction labor wages.",
        mandatory: true,
        issuingAuthority: "Gram Panchayat",
        format: "MGNREGA Job Card Number",
        validity: "Active"
      },
      {
        name: "Aadhaar-Seeded Bank Passbook Copy",
        why: "For receiving milestone construction funds directly via DBT.",
        mandatory: true,
        issuingAuthority: "Commercial / Regional Rural Bank or Post Office",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      },
      {
        name: "Land Title / Patta / Gram Sabha Allotment Letter",
        why: "Proves legal right to construct on the rural house site.",
        mandatory: true,
        issuingAuthority: "Gram Panchayat / Revenue Department",
        format: "Revenue record / Gram Sabha certificate",
        validity: "Permanent"
      }
    ],
    applicationMode: "Through Gram Panchayat Gram Sabha / Awas+ Survey & Block Development Office",
    process: [
      "Step 1: Check your family's name on the permanent PMAY-G priority list at your Gram Panchayat or on pmayg.nic.in.",
      "Step 2: Gram Sabha verifies and approves the annual village priority ranking list.",
      "Step 3: Block Development Officer (BDO) issues the formal Sanction Order for your house.",
      "Step 4: Village Gram Rozgar Sevak (GRS) visits your site and uploads Geo-tagged photos of your existing kutcha house on the 'AwaasApp'.",
      "Step 5: First installment (approx ₹25,000–₹40,000) is credited directly to your bank account via PFMS.",
      "Step 6: Complete the foundation work; GRS captures geo-tagged photos of the plinth level.",
      "Step 7: Second installment (approx ₹40,000–₹45,000) is credited to raise walls to lintel level.",
      "Step 8: Construct walls and roof; GRS captures third geo-tagged inspection photos.",
      "Step 9: Final installment is released upon roof casting, door/window fitting, and toilet construction.",
      "Step 10: House is painted with the mandatory PMAY-G logo, and your electricity and Ujjwala gas connection are installed."
    ],
    offlineProcess: "Rural beneficiaries do not need to apply at cyber cafes. The Village Gram Panchayat and Gram Sabha identify beneficiaries from the official Awas+ survey and manage documentation directly in the village.",
    commonMistakes: [
      "Employing private contractors: PMAY-G strictly encourages beneficiaries to construct their own homes or hire local masons; private contractors are banned by guidelines.",
      "Building smaller than 25 sq. metres: Houses with carpet area under 25 sq. metres are disqualified for final installment payment.",
      "Not completing toilet: Final payment requires completion of a functional sanitary toilet."
    ],
    deadlineInfo: "Union Cabinet approved the continuation of PMAY-G in August 2024 to construct 2 crore additional rural homes through March 2029.",
    openingDate: "Continuous annual sanction tranches",
    processingTime: "House construction typically completed over 6 to 12 months in 3–4 phased installments.",
    renewalRequired: "One-time lifetime housing grant.",
    trackingProcedure: "Visit pmayg.nic.in, click 'Stakeholders' -> 'IAY/PMAYG Beneficiary' and enter your 7-digit PMAY-G Registration ID to view installment status and inspection photos.",
    correctionProcedure: "Gram Panchayat Secretary or BDO can update bank accounts on AwaasSoft upon biometric verification.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Beneficiary's Bank Account via AwaasSoft & PFMS",
    disbursementDetails: "Grants (₹1,20,000 in plains / ₹1,30,000 in hills) are transferred in 3–4 milestone installments directly into the beneficiary's Aadhaar-linked savings account upon automated approval of geo-tagged inspection photos.",
    faqs: [
      { q: "What is the total financial benefit a rural family receives under PMAY-G?", a: "A rural family receives: 1) ₹1,20,000 construction grant (or ₹1,30,000 in hill states), 2) approx ₹25,000 as 90–95 days of MGNREGA wages, 3) ₹12,000 for toilet construction under Swachh Bharat Mission, and 4) free Ujjwala LPG connection, totaling around ₹1,60,000+ in benefits." },
      { q: "Can I choose my own design and building materials for my house?", a: "Yes! Beneficiaries can build using locally available materials (burnt brick, stone, mud-mortar, bamboo) suited to local disaster risks (earthquake, flood, cyclone), as long as the roof is permanent and area is at least 25 sq.m." },
      { q: "Who decides who gets a house first in the village?", a: "The priority list is generated automatically based on SECC 2011 deprivation points (houseless, zero-room, single-room kutcha, female-headed, SC/ST) and must be formally verified and approved by the open Gram Sabha." },
      { q: "Can a family take an additional bank loan to make a bigger house?", a: "Yes. PMAY-G beneficiaries can avail an optional institutional bank loan of up to ₹70,000 at concessional interest rates to expand their house." },
      { q: "What should I do if a local official asks for a bribe to release my installment?", a: "Never pay a bribe. Installments are disbursed 100% electronically via DBT from central treasury directly to your bank account. Report extortion directly to the District Collector or call the central rural grievance helpline at 1800-11-6446." },
      { q: "What is the AwaasApp mobile application?", a: "AwaasApp is the official mobile application used by village inspectors to capture geo-tagged, time-stamped photographs of your house construction at every stage to trigger the next installment payment." }
    ],
    helpline: "PMAY-Gramin National Toll-Free: 1800-11-6446",
    email: "support-pmayg@gov.in"
  },

  "pm-surya-ghar": {
    launchYear: 2024,
    purpose: "PM Surya Ghar: Muft Bijli Yojana, launched by Prime Minister Narendra Modi in February 2024 with a budget of ₹75,021 crore, is a revolutionary national renewable energy mission that provides massive direct capital subsidies to install residential rooftop solar systems for 1 crore households, providing up to 300 units of free electricity every month and generating passive income through green grid exports.",
    targetBeneficiary: "Individual residential households across India that own an independent house or apartment with a suitable shadow-free roof and an active domestic electricity connection.",
    benefits: "Direct government capital subsidy deposited into the homeowner's bank account within 30 days of installation: ₹30,000 for a 1 kW solar system; ₹60,000 for a 2 kW solar system; and the maximum subsidy of ₹78,000 for 3 kW and higher systems. Collateral-free, low-interest bank loans (at just 7% interest, ~0.5% above repo rate) available up to ₹2,00,000 through all major banks on the national portal. Generates 300+ units of free power monthly and yields surplus income by selling power to DISCOMs.",
    financialBenefit: "Direct capital subsidy of ₹30,000 (1 kW), ₹60,000 (2 kW), up to ₹78,000 (3 kW+) deposited into bank account + collateral-free bank loans at 7% interest",
    benefitFrequency: "One-time direct capital subsidy + 25 years of free monthly solar electricity and grid revenue",
    impact: "Slashes residential electricity bills to zero, saves Indian families ₹15,000 to ₹25,000 annually, reduces carbon emissions, and creates thousands of green jobs in solar assembly and maintenance.",
    detailedEligibility: {
      ageRequirement: "Adult homeowner (18+ years).",
      genderRequirement: "All homeowners eligible.",
      incomeLimit: "NO family income ceiling (open to all economic strata).",
      educationRequirement: "None.",
      occupationRequirement: "Any.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India residing in own residential home/apartment.",
      familyConditions: "Must have an active domestic electricity connection in applicant's name."
    },
    mandatoryConditions: [
      "Must have an active domestic (residential) electricity consumer connection with the local power DISCOM",
      "Must own an unshaded, structurally sound roof capable of supporting solar panel mounting structures",
      "Solar modules and inverters must be procured strictly from registered vendors on the national portal and comply with Domestic Content Requirement (DCR - Made in India cells/modules)",
      "Must install a bi-directional Net Meter approved by the local power DISCOM"
    ],
    conditionalRequirements: [
      "Residential Welfare Associations (RWAs) eligible for ₹18,000 per kW subsidy for common area solar lighting up to 500 kW."
    ],
    ineligibility: [
      "Commercial, industrial, or institutional properties (scheme is strictly for residential dwellings)",
      "Imported non-DCR solar panels not certified by MNRE",
      "Properties without legal electricity connection"
    ],
    documents: [
      {
        name: "Recent Domestic Electricity Bill (within last 3 months)",
        why: "To verify consumer connection number, sanctioned electrical load, and DISCOM tariff category.",
        mandatory: true,
        issuingAuthority: "State Power Distribution Company (DISCOM)",
        format: "Original or downloaded electronic bill PDF",
        validity: "Recent within 90 days"
      },
      {
        name: "Aadhaar Card of Electricity Consumer",
        why: "Identity verification and DBT subsidy credit.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Roof Ownership Proof / House Tax Receipt / Sale Deed",
        why: "Confirms ownership of residential premises and roof rights.",
        mandatory: true,
        issuingAuthority: "Municipal Corporation / Sub-Registrar",
        format: "Property tax receipt or sale deed copy",
        validity: "Current"
      },
      {
        name: "Cancelled Cheque or Bank Passbook Copy (Aadhaar-Seeded)",
        why: "Direct electronic credit of the ₹30,000–₹78,000 capital subsidy.",
        mandatory: true,
        issuingAuthority: "Scheduled Bank",
        format: "Clear copy with Account Number, Name, and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via National Portal for Rooftop Solar (pmsuryaghar.gov.in) / PM Surya Ghar Mobile App",
    process: [
      "Step 1: Download the 'PM-Surya Ghar' mobile app or visit pmsuryaghar.gov.in.",
      "Step 2: Click 'Apply for Rooftop Solar' and register by selecting your State, Power DISCOM, and entering your Electricity Consumer Number.",
      "Step 3: Enter your Mobile Number and Email to complete registration.",
      "Step 4: Log in and enter your roof area, average monthly electricity consumption, and desired solar plant capacity (e.g. 2 kW or 3 kW).",
      "Step 5: Apply for Technical Feasibility Approval (TFR) from your DISCOM through the portal (usually approved online within 15 days).",
      "Step 6: Select any registered solar vendor from the list on the national portal to sign the installation agreement.",
      "Step 7: The vendor installs the solar panels, inverter, and earthing setup on your roof.",
      "Step 8: Submit installation completion details on the portal and apply for Net Meter inspection.",
      "Step 9: DISCOM engineer inspects the installation, connects the bi-directional Net Meter, and generates the Commissioning Certificate on the portal.",
      "Step 10: Submit your bank details and cancelled cheque on the portal; the central subsidy (up to ₹78,000) is credited directly to your bank account within 30 days."
    ],
    offlineProcess: "Homeowners can visit their local Electricity DISCOM divisional office or contact registered solar rooftop vendors listed on pmsuryaghar.gov.in. Vendors handle the paperwork, DISCOM net-metering approvals, and bank loan integration.",
    commonMistakes: [
      "Installing non-DCR (imported) solar panels: MNRE strictly mandates 'Domestic Content Requirement' (DCR) solar cells and modules; imported panels are disqualified from government subsidy.",
      "Mismatch between electricity bill name and bank account: The bank account for subsidy credit must match the name of the electricity consumer.",
      "Installing higher capacity than sanctioned load: If your sanctioned load is 2 kW, apply for load enhancement with your DISCOM before installing a 3 kW solar system."
    ],
    deadlineInfo: "Universal national mission approved through 2027 to solarize 1 crore Indian households.",
    openingDate: "February 2024; active year-round",
    processingTime: "Installation takes 2 to 4 weeks; subsidy credited within 30 days of Net Meter commissioning.",
    renewalRequired: "No renewal needed; solar panels carry a standard 25-year manufacturer performance warranty.",
    trackingProcedure: "Track application, DISCOM feasibility approval, and subsidy disbursement progress on pmsuryaghar.gov.in.",
    correctionProcedure: "Update bank account details on the national portal before final commissioning inspection.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Homeowner's Bank Account from Central Treasury",
    disbursementDetails: "Upon generation of the Net Meter Commissioning Certificate by the DISCOM, the Ministry of New and Renewable Energy (MNRE) transfers the subsidy (up to ₹78,000) directly into the homeowner's bank account via PFMS within 30 days.",
    faqs: [
      { q: "What is the subsidy amount under PM Surya Ghar Muft Bijli Yojana?", a: "The central government provides: ₹30,000 for a 1 kW system; ₹60,000 for a 2 kW system; and the maximum subsidy of ₹78,000 for systems of 3 kW or higher capacity." },
      { q: "How much roof area is required for a 3 kW solar plant?", a: "A 3 kW solar rooftop system requires approximately 300 square feet of shadow-free rooftop space and generates roughly 360 to 400 units of clean electricity every month." },
      { q: "Can I get a bank loan to finance the rooftop solar system?", a: "Yes! The national portal is integrated with major public and private banks (SBI, Canara, PNB, BoB, etc.) offering collateral-free loans up to ₹2,00,000 at an attractive interest rate of around 7% per annum (~0.5% above repo rate)." },
      { q: "What is Net Metering and how does it reduce my bill to zero?", a: "A Net Meter records both the electricity you draw from the grid and the excess solar power you feed into the grid. Your monthly bill is calculated only on the net difference. If you export more than you consume, you receive electricity credits or cash payments from your DISCOM." },
      { q: "What is the lifespan of a rooftop solar plant?", a: "Tier-1 solar photovoltaic panels have an operational life of 25 years with guaranteed linear power output." },
      { q: "Can residents of housing societies (apartments) apply?", a: "Yes. Individual apartment owners with dedicated roof rights can apply, and Resident Welfare Associations (RWAs) can apply for group housing common area lighting subsidies of ₹18,000 per kW up to 500 kW." }
    ],
    helpline: "PM Surya Ghar National Toll-Free Helpline: 15555",
    email: "pmsuryaghar-mnre@gov.in"
  }
};

