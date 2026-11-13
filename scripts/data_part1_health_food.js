// Part 1: Healthcare, Food Security & Agriculture Schemes
module.exports = {
  "pm-jay": {
    launchYear: 2018,
    purpose: "Ayushman Bharat PM-JAY was launched by the Government of India to provide financial health protection against catastrophic hospitalisation expenses that push an estimated 6 crore Indians into poverty every year. It creates a universal health assurance safety net for the bottom 40% vulnerable population.",
    targetBeneficiary: "Deprived rural households and listed urban occupational workers identified through the Socio-Economic Caste Census (SECC 2011) and state health beneficiary registries.",
    benefits: "Comprehensive cashless secondary and tertiary inpatient healthcare cover up to ₹5,00,000 per family per year across 27,000+ empanelled public and private hospitals nationwide, covering 1,949 medical procedures including surgeries, oncology, cardiology, ICU care, diagnostics, and 15 days of post-hospitalisation medicines.",
    financialBenefit: "Up to ₹5,00,000 cashless hospitalisation cover per eligible family per year (floating limit shared by all family members)",
    benefitFrequency: "Per Inpatient Event / Annual family renewal",
    impact: "Eliminates out-of-pocket hospitalisation expenses for severe illnesses, prevents medical debt traps, and provides equal access to high-end multi-speciality private and public hospital care without upfront cash deposit.",
    detailedEligibility: {
      ageRequirement: "No age restriction; covers newborn infants to elderly family members without exclusion.",
      genderRequirement: "All genders eligible; no restriction on female or male household heads.",
      incomeLimit: "Based on deprivation criteria in SECC 2011 (no formal income certificate required if family is in beneficiary database).",
      educationRequirement: "None.",
      occupationRequirement: "Urban: 11 occupational categories (ragpickers, domestic workers, street vendors, construction workers, transport workers, etc.); Rural: SECC D1 to D7 deprivation indicators.",
      casteCategoryRequirement: "Open to all categories (SC, ST, OBC, General, EWS) meeting deprivation criteria.",
      residenceRequirement: "Citizen of India residing in any state/UT implementing PM-JAY (nationwide portability).",
      familyConditions: "No cap on family size or age of family members; all verified family members listed under the Ration Card/SECC can use the floating ₹5 Lakh cover."
    },
    mandatoryConditions: [
      "Family name must be found in the SECC 2011 database or state-notified NFSA/PM-JAY beneficiary list",
      "Must possess valid Aadhaar or government photo identity proof for biometric/OTP e-KYC verification",
      "Hospitalisation must be at an empanelled private or public Ayushman Bharat hospital for listed secondary/tertiary procedures"
    ],
    conditionalRequirements: [
      "Ration Card or Family Samagra ID / Ration document required if linking new family members",
      "Physician referral required for certain specialized tertiary treatment procedures"
    ],
    ineligibility: [
      "Households owning a motorized 3-wheeler or 4-wheeler, fishing boat, or mechanized farm equipment",
      "Households with any family member who is a regular government employee (central, state, PSU, or local body)",
      "Families paying income tax or professional tax",
      "Households owning pucca houses with more than 3 rooms or holding land exceeding ceilings specified under SECC 2011 exclusion criteria",
      "Individuals already covered under comprehensive government employee health schemes like CGHS or ECHS"
    ],
    documents: [
      {
        name: "Aadhaar Card",
        why: "Primary biometric and identity verification document for e-KYC authentication and Ayushman Card generation.",
        mandatory: true,
        issuingAuthority: "Unique Identification Authority of India (UIDAI)",
        format: "Original card or digital Aadhaar via DigiLocker / mAadhaar QR scan",
        validity: "Permanent with active biometric linkage"
      },
      {
        name: "Ration Card / Family Beneficiary Proof",
        why: "Verifies family tree and connects individual applicant to the household registered in SECC 2011 / NFSA list.",
        mandatory: true,
        issuingAuthority: "State Food & Civil Supplies Department",
        format: "Original Ration Card (BPL / Antyodaya / Priority Household) + photocopy",
        validity: "Active ration card verified on PDS portal"
      },
      {
        name: "Active Mobile Number",
        why: "Required for receiving OTP during e-KYC and receiving admission notifications.",
        mandatory: true,
        issuingAuthority: "Telecom Service Provider",
        format: "Aadhaar-linked mobile number",
        validity: "Must be operational at the time of registration"
      },
      {
        name: "Doctor's Prescription & Hospital Admission Recommendation",
        why: "Confirms diagnosis and recommended inpatient surgical or medical procedure under PM-JAY package.",
        mandatory: false,
        issuingAuthority: "Empanelled Hospital / Medical Practitioner",
        format: "Signed hospital admission slip / clinical summary on letterhead",
        validity: "Issued within 30 days of hospitalisation"
      }
    ],
    applicationMode: "Online via Beneficiary Portal / App & Offline at any Empanelled Hospital / CSC",
    process: [
      "Step 1: Visit beneficiary.nha.gov.in or download the Ayushman App on your Android phone.",
      "Step 2: Select 'Beneficiary' login and enter your mobile number. Enter the OTP received.",
      "Step 3: Search for your family by selecting State, Sub-Scheme (PMJAY), and entering your Ration Card number, Aadhaar number, or PMJAY Family ID.",
      "Step 4: If your name appears on the list, click 'Do e-KYC' next to your name.",
      "Step 5: Authenticate via Aadhaar OTP, Biometric Fingerprint (at CSC/Hospital), or Face Authentication on the Ayushman App.",
      "Step 6: Upload a recent live photograph and verify family details.",
      "Step 7: Submit the verification. The system processes the request immediately or sends it to the District Implementation Unit.",
      "Step 8: Once approved (usually within 15 minutes to 24 hours), download your digital Ayushman Card (Golden Card) as a PDF.",
      "Step 9: Present the Ayushman Card and Aadhaar at the 'Ayushman Mitra' desk of any empanelled hospital for instant cashless admission."
    ],
    offlineProcess: "Visit the Helpdesk / Ayushman Mitra kiosk at any government district hospital, medical college, or empanelled private nursing home, or visit your nearest Common Service Centre (CSC). Carry your original Aadhaar card and Ration Card. The Ayushman Mitra will check your name in the portal, perform biometric fingerprint scanning on the spot, and issue your Ayushman card free of charge.",
    commonMistakes: [
      "Name mismatch: The spelling of applicant's name on Aadhaar differing significantly from the Ration card record.",
      "Aadhaar not linked with mobile: Prevents self-generation of OTP, requiring visiting a CSC for biometric authentication.",
      "Attempting outpatient (OPD) claims: PM-JAY covers inpatient hospitalisations of 24+ hours or day-care daycare surgeries, not routine clinic visits.",
      "Paying cash deposits at empanelled hospital: Empanelled hospitals are strictly prohibited from charging eligible Ayushman patients any advance deposit."
    ],
    deadlineInfo: "Open throughout the year. There is no closing deadline; families can generate cards and claim benefits anytime.",
    openingDate: "Continuous enrolment available 365 days a year",
    processingTime: "Instant to 24 hours for Ayushman Card generation; pre-authorisation at hospital desk is approved within 2 hours.",
    renewalRequired: "No annual re-application needed. The family's ₹5 Lakh coverage automatically renews on 1st April of every financial year.",
    trackingProcedure: "Log in to beneficiary.nha.gov.in using your mobile number to view card approval status or track hospital pre-authorisation treatment requests.",
    correctionProcedure: "If family members are missing or name details are incorrect, submit a 'Grievance / Member Addition' request at the District Health Office or via the Ayushman App with birth certificate/marriage certificate and updated Ration card.",
    disbursementMethod: "100% Cashless Treatment at Empanelled Hospital Desk via National Health Claims Exchange (HCX)",
    disbursementDetails: "No cash is given to the patient. When admitted to an empanelled hospital, the Ayushman Mitra logs the admission on the TMS portal. The hospital receives direct payment from the National Health Authority / State Health Agency. All consultations, diagnostics, bed charges, surgeries, food, implants, and 15 days of discharge medicines are fully settled cashlessly.",
    faqs: [
      { q: "Is PM-JAY completely free or is there a registration fee?", a: "Ayushman Bharat PM-JAY is 100% free. Generating the Ayushman Card is free, and treatments up to ₹5,00,000 per family per year at empanelled hospitals are completely cashless." },
      { q: "Can I use my Ayushman Card in another state?", a: "Yes. PM-JAY has nationwide portability. An Ayushman Card issued in Bihar or Uttar Pradesh can be used at any empanelled hospital across Maharashtra, Karnataka, Delhi, Gujarat, etc." },
      { q: "What should I do if an empanelled hospital asks for cash?", a: "Empanelled hospitals cannot charge eligible beneficiaries for covered treatments. You can immediately report the hospital by dialling the National Toll-Free Helpline 14555 or complaining to the on-site District Grievance Nodal Officer." },
      { q: "Are pre-existing diseases covered from day one?", a: "Yes. Unlike private insurance policies, all pre-existing illnesses (cancer, diabetes, heart disease, kidney conditions) are covered from day one without any waiting period." },
      { q: "How many members of a family can use the ₹5 Lakh cover?", a: "There is no restriction on family size. The entire ₹5,00,000 is a floating family cover and can be used by one member or split among multiple members in a year." },
      { q: "What if my name is not found on the portal?", a: "Eligibility is strictly determined by SECC 2011 and state-notified food security databases. If your family was not included in those baseline registries, you cannot enroll directly unless your state government announces an expanded universal health coverage scheme." }
    ],
    helpline: "National Toll-Free: 14555 or 1800-111-565",
    email: "pmjay@nha.gov.in"
  },

  "ayushman-vay-vandana": {
    launchYear: 2024,
    purpose: "Ayushman Vay Vandana was introduced by the Central Government in October 2024 as an historic universal expansion of Ayushman Bharat PM-JAY, ensuring that every senior citizen aged 70 and above receives health security without any income, economic, or pension discrimination.",
    targetBeneficiary: "Every Indian citizen aged 70 years and above, irrespective of their socio-economic status, wealth, or income.",
    benefits: "Dedicated health cover of ₹5,00,000 per year on a family basis for all senior citizens aged 70+. For senior citizens whose families are already covered under PM-JAY, this is provided as an exclusive additional top-up of ₹5 Lakh that cannot be used by younger family members.",
    financialBenefit: "Dedicated ₹5,00,000 annual cashless hospitalisation cover per eligible senior citizen / senior couple",
    benefitFrequency: "Annual floating coverage",
    impact: "Protects elderly citizens from out-of-pocket medical costs during old age, covers critical geriatric conditions, joint replacements, cardiovascular interventions, and ensures dignity in healthcare without burdening children or life savings.",
    detailedEligibility: {
      ageRequirement: "Strictly 70 years of age or older (completed age as per date of birth on Aadhaar card).",
      genderRequirement: "All senior citizens eligible regardless of gender.",
      incomeLimit: "NO income limit. Open to all economic classes (wealthy, middle class, and poor).",
      educationRequirement: "None.",
      occupationRequirement: "Retired, self-employed, homemaker, or senior pensioner—no occupation restriction.",
      casteCategoryRequirement: "Open to all castes and categories (General, SC, ST, OBC, Minority).",
      residenceRequirement: "Citizen of India residing in any State or UT implementing PM-JAY.",
      familyConditions: "If both husband and wife are aged 70+, they share the ₹5 Lakh dedicated senior pool. If only one spouse is 70+, the ₹5 Lakh is reserved for that senior."
    },
    mandatoryConditions: [
      "Must have completed 70 years of age as per official date of birth recorded on Aadhaar",
      "Must possess an Aadhaar card with verified date of birth",
      "Must undergo e-KYC on the NHA portal/app to generate the dedicated Vay Vandana Card"
    ],
    conditionalRequirements: [
      "Senior citizens holding other public health insurance schemes like CGHS, ECHS, or CAPF must exercise an irrevocable one-time choice to either continue their existing scheme or opt for Ayushman Vay Vandana."
    ],
    ineligibility: [
      "Citizens below 70 years of age (those aged 69 or under cannot enroll in this specific senior module)",
      "Non-Indian citizens or overseas residents without Indian citizenship",
      "Seniors who choose to continue retaining other central government employee health schemes like CGHS/ECHS (duplicate public benefits are prohibited)"
    ],
    documents: [
      {
        name: "Aadhaar Card",
        why: "Sole mandatory document required. Used to verify Indian citizenship, completed age of 70+, and Aadhaar biometric/OTP e-KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original Aadhaar or e-Aadhaar PDF",
        validity: "Permanent"
      },
      {
        name: "Aadhaar-Linked Mobile Number",
        why: "For receiving OTP verification during online card creation.",
        mandatory: true,
        issuingAuthority: "Telecom Provider",
        format: "Active SIM capable of receiving SMS OTP",
        validity: "Active"
      }
    ],
    applicationMode: "Online via Beneficiary Portal (beneficiary.nha.gov.in) or Ayushman App",
    process: [
      "Step 1: Open beneficiary.nha.gov.in or install the Ayushman App on your smartphone.",
      "Step 2: Log in as 'Beneficiary' using any active mobile number and enter the SMS OTP.",
      "Step 3: Click on the special banner 'Enrolment for Senior Citizens 70+'.",
      "Step 4: Enter the Senior Citizen's 12-digit Aadhaar number and click Search.",
      "Step 5: Perform Aadhaar OTP or Face Authentication (using the AadhaarFaceRD app).",
      "Step 6: Confirm personal details and address displayed from the Aadhaar registry.",
      "Step 7: Capture or upload a live photograph of the senior citizen.",
      "Step 8: Submit the declaration regarding other health schemes (CGHS/ECHS/PM-JAY).",
      "Step 9: Your Ayushman Vay Vandana Card is generated instantly. Download and save or print the card."
    ],
    offlineProcess: "Seniors can visit any Common Service Centre (CSC) or the Ayushman Helpdesk at any empanelled government or private hospital. The staff will take the senior's Aadhaar card, perform biometric finger scanning or face scanning, and print the laminated Ayushman Vay Vandana card on the spot without charge.",
    commonMistakes: [
      "Date of birth mismatch: Year of birth on Aadhaar indicating less than 70 years completed.",
      "Assuming this requires BPL/Ration Card: Vay Vandana does NOT require a ration card or income certificate; age 70+ is the only qualifying requirement.",
      "Trying to use private commercial insurance exclusions: Private insurance holders can ALSO keep their Ayushman Vay Vandana card; only public schemes like CGHS require a choice."
    ],
    deadlineInfo: "Universal rolling scheme. Enrolment is permanently open without deadlines.",
    openingDate: "Launched on 29 October 2024; active year-round",
    processingTime: "Instantaneous upon successful Aadhaar OTP/Face e-KYC",
    renewalRequired: "No renewal needed; coverage renews automatically every year on 1st April.",
    trackingProcedure: "Re-enter Aadhaar on beneficiary.nha.gov.in to verify card status or re-download.",
    correctionProcedure: "Update date of birth at UIDAI Aadhaar Seva Kendra first if age on Aadhaar does not match school/birth records.",
    disbursementMethod: "Direct Cashless Hospital Admission at Empanelled Hospitals",
    disbursementDetails: "Show Ayushman Vay Vandana card at any of the 27,000+ empanelled hospitals for direct cashless inpatient care up to ₹5,00,000 annually.",
    faqs: [
      { q: "Is there any income limit for citizens aged 70 and above?", a: "No. Ayushman Vay Vandana is universal. Whether your annual income is zero or ₹50 Lakhs, if you are 70 years or older with an Aadhaar card, you are eligible." },
      { q: "What if my family is already registered under PM-JAY?", a: "Your family will continue to receive their standard ₹5 Lakh family cover, and you as a 70+ senior citizen will receive an EXCLUSIVE additional ₹5 Lakh top-up reserved only for you." },
      { q: "Can both husband and wife aged 70+ apply?", a: "Yes. Both will receive Ayushman Vay Vandana cards and share a dedicated ₹5,00,000 senior healthcare pool." },
      { q: "Does this scheme cover existing cardiac, joint, or cancer conditions?", a: "Yes, all pre-existing geriatric diseases and surgeries are covered from day one without waiting periods." },
      { q: "I have private health insurance. Can I still get this card?", a: "Yes. Private insurance policyholders can also avail Ayushman Vay Vandana coverage." },
      { q: "Can I apply if my Aadhaar shows only year of birth?", a: "Yes, UIDAI standard defaults (01/01 of that year) apply. If the year indicates you have attained 70 years, the portal will accept your application." }
    ],
    helpline: "National Health Helpline: 14555",
    email: "senior.support@nha.gov.in"
  },

  "pm-kisan": {
    launchYear: 2019,
    purpose: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a central sector flagship scheme introduced to provide income support to all landholding farmer families across India, helping them procure agricultural inputs like seeds, fertilizers, and farm equipment while preventing reliance on informal moneylenders.",
    targetBeneficiary: "All landholding farmer families who have cultivable land registered in their name in state land records.",
    benefits: "Direct financial support of ₹6,000 per year transferred directly into the bank accounts of eligible farmer families in three equal instalments of ₹2,000 every four months (April–July, August–November, and December–March).",
    financialBenefit: "₹6,000 per year (3 equal instalments of ₹2,000 every 4 months via Direct Benefit Transfer / DBT)",
    benefitFrequency: "Every 4 months (Thrice annually)",
    impact: "Provides assured liquidity to small and marginal farmers before sowing and harvesting seasons, reduces agricultural distress, and supports rural household consumption.",
    detailedEligibility: {
      ageRequirement: "18 years and above (farmer head of household).",
      genderRequirement: "Both male and female landholding farmers.",
      incomeLimit: "No specific gross income ceiling, but farmer must not fall into any of the specified institutional or income-tax exclusion categories.",
      educationRequirement: "None.",
      occupationRequirement: "Farmer cultivating owned agricultural land.",
      casteCategoryRequirement: "Open to farmers of all categories (General, OBC, SC, ST).",
      residenceRequirement: "Citizen of India residing in rural or peri-urban agricultural zones.",
      familyConditions: "A farmer family is defined as husband, wife, and minor children. Only one person per family can receive PM-KISAN benefits for the family's landholding."
    },
    mandatoryConditions: [
      "Cultivable land record (Khatoni / RoR / 7/12 / Patta) must be registered in the name of the farmer in the state revenue portal",
      "Mandatory e-KYC completed on pmkisan.gov.in via Aadhaar OTP or biometric scan",
      "Bank account must be active, Aadhaar-seeded, and mapped to the NPCI DBT mapper",
      "State government revenue authority must verify land ownership and approve the beneficiary record"
    ],
    conditionalRequirements: [
      "Mutation / registry certificate required if land was inherited after the baseline cut-off date (1 February 2019)"
    ],
    ineligibility: [
      "All institutional landholders (land owned by trusts, companies, religious institutions)",
      "Farmer families holding or having held constitutional posts (Ministers, MPs, MLAs, Mayors, Zila Panchayat Chairpersons)",
      "Serving or retired officers and employees of central/state government ministries, departments, autonomous bodies, and PSUs (excluding multi-tasking / Class IV / Group D staff)",
      "All superannuated / retired pensioners whose monthly pension is ₹10,000 or more",
      "All persons who paid income tax in the last assessment year",
      "Professionals like doctors, engineers, lawyers, chartered accountants, and architects registered with professional bodies"
    ],
    documents: [
      {
        name: "Land Ownership Record (Khatian / RoR / 7/12 Extract / Jamabandi)",
        why: "Proves legal ownership of cultivable agricultural land in the state land records database.",
        mandatory: true,
        issuingAuthority: "State Revenue / Land Records Department (Tehsildar / Talathi)",
        format: "Computerized Land Record Extract / Certified Copy (PDF max 2MB)",
        validity: "Current updated record in farmer's name"
      },
      {
        name: "Aadhaar Card",
        why: "Identity verification and mandatory biometric/OTP e-KYC requirement.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original / e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Aadhaar-Seeded Bank Passbook / Account Details",
        why: "For receiving ₹2,000 installments via Aadhaar Payment Bridge (APB / DBT).",
        mandatory: true,
        issuingAuthority: "Commercial / Regional Rural / Cooperative Bank or India Post Payments Bank (IPPB)",
        format: "Passbook copy showing Account Number, IFSC, and Name",
        validity: "Active account mapped with NPCI"
      },
      {
        name: "Active Mobile Number",
        why: "Receiving instalment credit SMS and completing e-KYC.",
        mandatory: true,
        issuingAuthority: "Telecom Service Provider",
        format: "Aadhaar-linked number",
        validity: "Operational"
      }
    ],
    applicationMode: "Online via PM-KISAN Portal / App or Offline via CSC / Local Patwari / Agriculture Office",
    process: [
      "Step 1: Open the official portal pmkisan.gov.in and click on 'New Farmer Registration' under Farmers Corner.",
      "Step 2: Select 'Rural Farmer Registration' or 'Urban Farmer Registration'.",
      "Step 3: Enter your Aadhaar number, Mobile Number, select your State, and submit the Captcha.",
      "Step 4: Enter the OTP received on your mobile and complete Aadhaar authentication.",
      "Step 5: Fill in your complete State, District, Sub-District, Block, and Village.",
      "Step 6: Enter your Land Details: Khata Number, Khasra/Survey Number, Area in Hectares, and Land Transfer status.",
      "Step 7: Upload the scanned copy of your Land Ownership Document (PDF format under 200KB).",
      "Step 8: Submit the application. Note down your Farmer Registration Application ID.",
      "Step 9: Complete mandatory e-KYC using the 'e-KYC' option on the portal with Aadhaar OTP.",
      "Step 10: The application is routed to the Block Agriculture Officer / Patwari for physical land verification before installment release."
    ],
    offlineProcess: "Visit your local Village Patwari / Lekhpal, Block Agriculture Officer (BAO), or nearest Common Service Centre (CSC). Carry your original Aadhaar Card, updated Land Khatauni / Jamabandi, and Bank Passbook. The CSC operator will submit your application on the Kisan portal, record your biometric thumbprint, and provide an acknowledgement receipt.",
    commonMistakes: [
      "Bank Account not seeded with Aadhaar on NPCI: Payment fails if the bank account is merely linked for KYC but not mapped for DBT on NPCI server.",
      "Land Record in Ancestor's Name: If land is still in deceased parent's name, the heir must complete land mutation (Dakhil-Kharij) first.",
      "Spelling of name on portal differing from Aadhaar database: Causes automated Aadhaar rejection during installment processing.",
      "Income tax filing: If any family member files ITR (even refund), the system auto-detects and cancels registration with recovery notices."
    ],
    deadlineInfo: "Continuous year-round scheme. Applications submitted and verified before an installment cut-off receive that upcoming installment.",
    openingDate: "Open 365 days a year",
    processingTime: "Typically 30 to 60 days for state revenue and agriculture department verification.",
    renewalRequired: "No annual renewal required, but periodic e-KYC authentication must be completed every year.",
    trackingProcedure: "Click 'Know Your Status' on pmkisan.gov.in, enter your Registration Number or Mobile number, and view your installment payment history and DBT status.",
    correctionProcedure: "Use 'Name Correction as per Aadhaar' or visit your District Agriculture Office / PM-KISAN Grievance desk on the portal to resolve payment stop orders.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Bank Account via Public Financial Management System (PFMS) and NPCI",
    disbursementDetails: "Funds of ₹2,000 are deposited directly into the beneficiary's Aadhaar-linked savings bank account every 4 months. Beneficiaries receive a direct SMS from the central PFMS/bank upon credit.",
    faqs: [
      { q: "Can both husband and wife receive PM-KISAN benefits?", a: "No. The scheme defines a family as husband, wife, and minor children. Only one person per family can receive PM-KISAN, even if both own separate plots of land." },
      { q: "Why was my PM-KISAN instalment stopped?", a: "The three most common reasons are: 1) Pending e-KYC, 2) Land seeding not marked 'Yes' by the state revenue department, or 3) Bank account not mapped to NPCI for Aadhaar-based DBT." },
      { q: "Can tenant farmers cultivating leased land apply?", a: "No. PM-KISAN requires ownership of cultivable land in official state land records. Tenant farmers without land titles are not eligible." },
      { q: "What should I do if my bank account changed?", a: "Since PM-KISAN uses Aadhaar-based payments, payments automatically route to whichever bank account is actively seeded with Aadhaar on NPCI. You do not need to update bank details on the portal—simply visit your preferred bank and submit the Aadhaar DBT Seeding Mandate." },
      { q: "Can a government servant who owns farmland apply?", a: "No. All regular government employees (central, state, PSUs, autonomous bodies) are strictly excluded from PM-KISAN, except Class IV / Multi-Tasking staff." },
      { q: "How can I find my PM-KISAN Registration Number?", a: "Visit pmkisan.gov.in, click 'Know Your Status', click 'Know Your Registration Number', and enter your Aadhaar number or mobile number to retrieve your registration ID." }
    ],
    helpline: "PM-KISAN Toll-Free: 155261 / 1800-115-526 / 011-23381092",
    email: "pmkisan-ict@gov.in"
  },

  "pmgkay": {
    launchYear: 2020,
    purpose: "Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY), integrated with the National Food Security Act (NFSA 2013), is the world's largest food security safety net. It guarantees complete freedom from hunger for over 81.35 crore poor and vulnerable citizens by providing 100% free foodgrains, directly advancing UN Sustainable Development Goal 2 (Zero Hunger).",
    targetBeneficiary: "Priority Household (PHH) ration cardholders and Antyodaya Anna Yojana (AAY - poorest of poor) families across all states and union territories.",
    benefits: "100% free foodgrains (Rice, Wheat, and Coarse Grains/Millets) provided every month through Fair Price Shops. Priority Household (PHH) cardholders receive 5 kg of foodgrains per person per month entirely free. Antyodaya Anna Yojana (AAY) families receive 35 kg of foodgrains per household per month entirely free without paying any issue price.",
    financialBenefit: "5 kg foodgrains per person/month (PHH) or 35 kg foodgrains per family/month (AAY) provided 100% free (₹0/kg)",
    benefitFrequency: "Monthly quota at Fair Price Shop (PDS)",
    impact: "Prevents malnutrition, guarantees staple nutritional sustenance, shields low-income families from food inflation, and ensures no citizen sleeps hungry.",
    detailedEligibility: {
      ageRequirement: "All age groups eligible as listed members of an active ration card.",
      genderRequirement: "All genders eligible; under NFSA, the eldest woman aged 18+ is recognized as head of household on the Ration Card.",
      incomeLimit: "Identified based on state-specific BPL / Priority Household poverty benchmarks under NFSA.",
      educationRequirement: "None.",
      occupationRequirement: "Informal laborers, agricultural workers, domestic workers, street vendors, small artisans, marginal farmers, and indigent households.",
      casteCategoryRequirement: "Open to all categories (General, OBC, SC, ST, Minorities) holding valid NFSA ration cards.",
      residenceRequirement: "Citizen of India residing in any State or UT with One Nation One Ration Card (ONORC) portability across India.",
      familyConditions: "Family members listed under the authorized National Food Security Card."
    },
    mandatoryConditions: [
      "Must hold an active Priority Household (PHH) or Antyodaya Anna Yojana (AAY) Ration Card under NFSA",
      "Must undergo biometric fingerprint or iris authentication at the Fair Price Shop electronic Point of Sale (e-POS) terminal",
      "Aadhaar of family members must be seeded into the state PDS database"
    ],
    conditionalRequirements: [
      "Nominee authorization / OTP transaction permitted for bedridden elderly or disabled citizens unable to visit Fair Price Shops in person."
    ],
    ineligibility: [
      "Above Poverty Line (APL) / Non-Priority households owning four-wheelers or pucca residences with luxury amenities",
      "Families where any member is a regular government employee or taxpayer paying income tax",
      "Families owning commercial enterprises or land above the state-notified rural/urban ceiling limits",
      "Holders of bogus or duplicate ration cards cancelled during electronic Aadhaar de-duplication"
    ],
    documents: [
      {
        name: "National Food Security Act (NFSA) Ration Card",
        why: "Primary entitlement document showing family category (PHH or AAY) and total number of eligible units/members.",
        mandatory: true,
        issuingAuthority: "State Department of Food, Civil Supplies and Consumer Affairs",
        format: "Physical Digital Ration Card or e-Ration Card downloaded from state food portal / DigiLocker",
        validity: "Active card on central RCMS / Annavitran portal"
      },
      {
        name: "Aadhaar Card of Family Members",
        why: "Used for biometric e-POS authentication at Fair Price Shop and mandatory Aadhaar seeding to eliminate ghost beneficiaries.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original Aadhaar Card",
        validity: "Permanent"
      }
    ],
    applicationMode: "Offline at Taluk / District Food Supply Office or Online via State Food & Civil Supplies Portal",
    process: [
      "Step 1: Check your family's Ration Card status on your State Food & Civil Supplies Portal or the Mera Ration App.",
      "Step 2: If you do not have an NFSA card, apply for a new Priority Household (PHH) Ration Card at the local Food Office / Citizen Service Centre.",
      "Step 3: Ensure all family members' Aadhaar numbers are linked to the Ration Card.",
      "Step 4: Visit your designated Fair Price Shop (ration shop) between the 1st and 30th of every month.",
      "Step 5: The dealer enters your Ration Card number into the electronic Point of Sale (e-POS) device.",
      "Step 6: Place your finger on the biometric scanner for Aadhaar verification.",
      "Step 7: The e-POS terminal prints a receipt showing your entitled grain quantity (e.g., 20 kg for a 4-member family) and price as ₹0.00.",
      "Step 8: Collect your free foodgrains on the spot without paying any money."
    ],
    offlineProcess: "Visit your local Fair Price Shop (FPS) dealer or Taluk Supply Officer (TSO) / Block Supply Officer (BSO). For new ration cards, submit the prescribed BPL application form along with family Aadhaar cards, electricity bill, and income declaration at the Tehsil / Municipal Food Office.",
    commonMistakes: [
      "Paying money to the dealer: Under the Union Cabinet decision on PMGKAY, foodgrains under NFSA are 100% FREE. Ration dealers cannot demand any amount (not even ₹1, ₹2, or ₹3).",
      "Biometric failure due to worn fingerprints: If fingerprint fails, ask the dealer for Iris scan or OTP authentication on the Aadhaar-registered mobile.",
      "Unlinked family members: Newborns or newly married spouses not added to the card will not receive their individual 5 kg monthly entitlement."
    ],
    deadlineInfo: "Permanent ongoing national food security program approved by the Union Cabinet through December 2028.",
    openingDate: "Monthly quota opens on the 1st of every calendar month",
    processingTime: "Instant collection at the Fair Price Shop upon biometric authentication.",
    renewalRequired: "No monthly renewal needed. Ration cards remain active subject to periodic e-KYC verification.",
    trackingProcedure: "Download the 'Mera Ration' mobile app to check your monthly quota balance, recent transactions, and locate nearby Fair Price Shops.",
    correctionProcedure: "Visit your local Food Supply Office or state portal to add newborn children, delete deceased members, or update mobile numbers.",
    disbursementMethod: "Direct Physical Grain Distribution at Empanelled Fair Price Shops (FPS) via e-POS Biometric Authentication",
    disbursementDetails: "Grains are delivered physically in sealed bags or measured on electronic weighing scales linked to the e-POS machine. Beneficiaries receive a printed computerized slip confirming the free allocation.",
    faqs: [
      { q: "Can I collect my free ration in another state if I am a migrant worker?", a: "Yes. Under the 'One Nation One Ration Card' (ONORC) facility, any NFSA beneficiary can walk into any Fair Price Shop anywhere in India and collect their monthly foodgrain quota using biometric Aadhaar authentication." },
      { q: "Is there any cost for rice or wheat under PMGKAY?", a: "No. The Government of India provides all foodgrains under PMGKAY completely free of cost (zero rupees)." },
      { q: "How much grain does my family get each month?", a: "If you have a Priority Household (PHH) card, you get 5 kg per member per month (e.g. 5 members = 25 kg). If you have an Antyodaya (AAY) card, you receive 35 kg per family per month regardless of family size." },
      { q: "What should I do if the ration dealer refuses to give the full quota?", a: "Immediately dial the National Food Toll-Free Helpline 1967 or your state PDS grievance helpline. Every ration shop must display a toll-free complaint board." },
      { q: "Can elderly citizens send a family representative to collect ration?", a: "Yes, any registered adult family member whose Aadhaar is seeded on the card can scan their fingerprint and collect the full household quota." },
      { q: "What is the Mera Ration mobile app?", a: "Mera Ration is the official Government of India mobile app developed by the Department of Food and Public Distribution for checking entitlement, previous transactions, and ONORC portability status." }
    ],
    helpline: "National Food Toll-Free: 1967 (or 1800-series state helpline)",
    email: "pds-support@gov.in"
  },

  "pmfby": {
    launchYear: 2016,
    purpose: "Pradhan Mantri Fasal Bima Yojana (PMFBY) was launched by the Ministry of Agriculture & Farmers Welfare to provide comprehensive financial insurance against crop loss caused by non-preventable natural risks (drought, flood, unseasonal rains, pest attacks, hailstorms), safeguarding farmers' investments and stabilizing farm income.",
    targetBeneficiary: "All farmers (including sharecroppers and tenant farmers) growing notified crops in notified insurance areas.",
    benefits: "Comprehensive insurance coverage from pre-sowing to post-harvest stages. Farmers pay a minimal premium of only 2% for Kharif crops, 1.5% for Rabi crops, and 5% for annual commercial/horticultural crops; the remaining actuarial premium (often 85–90%) is fully subsidized by Central and State Governments. Full claim compensation is credited directly via DBT.",
    financialBenefit: "Comprehensive claim payout up to full Sum Insured (cost of cultivation/yield value) based on crop cutting experiments & localized damage assessments",
    benefitFrequency: "Per Crop Season (Kharif and Rabi)",
    impact: "Protects farmers against catastrophic bankruptcy due to monsoon failure, hailstorms, floods, or cyclones; enables continued investment in modern agriculture.",
    detailedEligibility: {
      ageRequirement: "18 years and above.",
      genderRequirement: "All farmers eligible.",
      incomeLimit: "No income limit.",
      educationRequirement: "None.",
      occupationRequirement: "Farmer growing notified crops on owned, leased, or sharecropped land.",
      casteCategoryRequirement: "Open to all castes and categories (General, SC, ST, OBC).",
      residenceRequirement: "Resident of India with agricultural holding in notified crop areas.",
      familyConditions: "Covered per farmer / plot entry."
    },
    mandatoryConditions: [
      "Must be growing a notified crop in a notified block/gram panchayat for that specific season",
      "Must insure crop and pay farmer premium before the cut-off date (usually 31 July for Kharif and 31 December for Rabi)",
      "Must possess valid land record or registered tenancy agreement / sowing certificate"
    ],
    conditionalRequirements: [
      "Localized losses (hailstorm, landslide, inundation) must be reported within 72 hours of occurrence on the Crop Insurance App or helpline."
    ],
    ineligibility: [
      "Crops not notified by the respective State Government for insurance in that particular district/block",
      "Losses arising from war, nuclear hazards, malicious damage, preventable negligence, or stray cattle grazing",
      "Applications submitted after the seasonal cut-off date",
      "Post-harvest losses occurring after 14 days of crop cutting or harvest"
    ],
    documents: [
      {
        name: "Land Possession Certificate / Record of Rights (RoR / 7/12 / Khasra)",
        why: "Proves legal right to cultivate the insured survey number.",
        mandatory: true,
        issuingAuthority: "State Revenue Department",
        format: "Certified Land Record Extract",
        validity: "Current season"
      },
      {
        name: "Sowing Certificate / Crop Declaration",
        why: "Confirms actual crop planted in the specific field.",
        mandatory: true,
        issuingAuthority: "Village Patwari / Talathi / Gram Panchayat Officer",
        format: "Signed self-declaration or official sowing certificate",
        validity: "Current crop season"
      },
      {
        name: "Aadhaar Card",
        why: "Mandatory identity verification for direct claim settlement.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Bank Passbook Copy",
        why: "Account details for receiving claim compensation via DBT.",
        mandatory: true,
        issuingAuthority: "Bank Branch / Post Office Bank",
        format: "Clear copy with account number, IFSC, and farmer name",
        validity: "Active Aadhaar-linked account"
      }
    ],
    applicationMode: "Online via pmfby.gov.in / Crop Insurance App & Offline via Bank Branches, CSCs, or PACs",
    process: [
      "Step 1: Visit pmfby.gov.in or open the 'Crop Insurance' mobile app.",
      "Step 2: Click on 'Farmer Corner' and choose 'Apply for Crop Insurance by yourself'.",
      "Step 3: Register or log in with your mobile number and verify via OTP.",
      "Step 4: Enter farmer profile details, Aadhaar number, and residential address.",
      "Step 5: Enter Bank account details where claim payments will be transferred.",
      "Step 6: Select the Crop Details: Season (Kharif/Rabi), Year, State, District, Sub-district, Gram Panchayat, and Notified Crop.",
      "Step 7: Enter Land details (Khata / Survey Number and insured area in hectares).",
      "Step 8: Upload documents: Land Record, Sowing Certificate, and Bank Passbook.",
      "Step 9: Calculate premium (e.g. 2% for rice/paddy) and pay securely online through UPI/Net Banking.",
      "Step 10: Download the Crop Insurance Policy Receipt with your Insurance Application Number."
    ],
    offlineProcess: "Farmers with KCC (Kisan Credit Card) loans can have insurance deducted automatically through their lending bank branch unless they opt out in writing. Non-loanee farmers can visit their nearest Common Service Centre (CSC) or Primary Agricultural Credit Society (PACS) with land papers, sowing certificate, Aadhaar, and premium payment.",
    commonMistakes: [
      "Missing the 72-hour reporting deadline for localized damage: For hailstorms or unseasonal flood inundation, claims must be registered within 72 hours via the Crop Insurance App or toll-free 14447.",
      "Entering wrong survey or khata number: Leads to claim disqualification during satellite/remote sensing cross-checks.",
      "Mismatch between insured crop and actual sown crop: If a farmer insured paddy but later sowed pulses without notifying the bank, the claim is rejected."
    ],
    deadlineInfo: "Strict seasonal deadlines. Kharif deadline is typically 31 July; Rabi deadline is typically 31 December (subject to state notification).",
    openingDate: "Kharif enrolment opens in April/May; Rabi enrolment opens in October/November",
    processingTime: "Mid-season adversity claims paid within 30 days of survey; final seasonal yield claims paid within 3 weeks of Crop Cutting Experiment (CCE) data upload.",
    renewalRequired: "Yes, required fresh for every crop season (Kharif and Rabi).",
    trackingProcedure: "Enter your 10-digit Application Number on pmfby.gov.in under 'Application Status' to track policy issuance and claim calculation.",
    correctionProcedure: "Visit your lending bank branch or CSC before the cut-off date to request crop change or area adjustments.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Farmer's Bank Account via National Crop Insurance Portal (NCIP)",
    disbursementDetails: "Insurance companies calculate claims based on automated yield loss data from Crop Cutting Experiments (CCEs) and satellite index data. Claim amounts are credited directly into farmers' bank accounts via PFMS.",
    faqs: [
      { q: "Is crop insurance mandatory for loan-taking farmers?", a: "No. PMFBY was made 100% voluntary for all farmers since Kharif 2020. However, loanee farmers must submit a written opt-out declaration to their bank at least 7 days before cut-off if they do not wish to be insured." },
      { q: "What is the maximum premium a farmer pays?", a: "Farmers pay only 2% of the sum insured for Kharif food and oilseed crops, 1.5% for Rabi crops, and 5% for horticultural/commercial crops like cotton, chilies, or sugarcane." },
      { q: "How do I report crop damage from a hailstorm?", a: "Open the Crop Insurance App on your phone, click 'Crop Loss Intimation', enter your policy number, upload photos of the damaged field with GPS coordinates, and submit within 72 hours." },
      { q: "Can sharecroppers or tenant farmers apply?", a: "Yes. Tenant farmers and sharecroppers can insure crops by providing a tenancy agreement or sowing declaration from the village revenue authority." },
      { q: "What if drought prevents me from sowing my crop?", a: "PMFBY includes a 'Prevented Sowing' provision. If major adverse weather prevents over 75% of sowing in a notified area, insured farmers receive up to 25% of sum insured as immediate relief." },
      { q: "Can I check my claim amount online?", a: "Yes. Log in to pmfby.gov.in using your mobile number or policy number to view the sanctioned claim amount and bank transaction reference." }
    ],
    helpline: "National Crop Insurance Helpline: 14447",
    email: "help.agri-insurance@gov.in"
  },

  "kcc": {
    launchYear: 1998,
    purpose: "The Kisan Credit Card (KCC) scheme provides farmers with timely, flexible, and affordable institutional credit to meet short-term crop cultivation expenses, post-harvest costs, farm maintenance, and allied agricultural needs (dairy, fisheries, animal husbandry) at highly subsidized interest rates.",
    targetBeneficiary: "All individual and joint land-owning cultivators, tenant farmers, oral lessees, sharecroppers, and self-help groups (SHGs) of farmers, including animal husbandry and fisheries rearers.",
    benefits: "Revolving credit facility up to ₹3,00,000 at a deeply subsidized base interest rate of 7%. Farmers who repay on time receive an additional 3% Prompt Repayment Incentive (PRI) from the central government, reducing the effective interest rate to just 4% per annum. Collateral-free credit limit up to ₹1,60,000.",
    financialBenefit: "Concessional credit up to ₹3,00,000 at an effective interest rate of only 4% per annum (with collateral-free limit up to ₹1.6 Lakh)",
    benefitFrequency: "Revolving credit limit valid for 5 years",
    impact: "Liberates rural farming households from predatory private moneylenders charging 24–36% interest, provides instant ATM-cum-debit card access to buy seeds and fertilizer, and provides crop insurance linkage.",
    detailedEligibility: {
      ageRequirement: "18 to 75 years (borrowers above 60 require a legal heir / co-borrower).",
      genderRequirement: "All farmers eligible.",
      incomeLimit: "Assessed based on scale of finance for crops grown and land holding.",
      educationRequirement: "None.",
      occupationRequirement: "Farmer / cultivator / dairy farmer / fish farmer.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Resident of India with operational farm or livestock in bank's service area.",
      familyConditions: "Individual or joint household borrowers."
    },
    mandatoryConditions: [
      "Must be engaged in agriculture, dairy, animal husbandry, or inland/marine fisheries",
      "Must hold land ownership documents or registered tenancy/leasing certificate",
      "Must not be an un-rehabilitated willful defaulter at any scheduled bank"
    ],
    conditionalRequirements: [
      "Land mortgage / hypothecation required for loan limits exceeding ₹1,60,000."
    ],
    ineligibility: [
      "Willful loan defaulters whose previous agricultural loans have turned NPA without settlement",
      "Persons not engaged in any agricultural, horticultural, or animal husbandry activities",
      "Minors below 18 years"
    ],
    documents: [
      {
        name: "Land Records (Khatauni / Patta / 7/12 Extract)",
        why: "To assess scale of finance based on total land holding and crop pattern.",
        mandatory: true,
        issuingAuthority: "State Revenue Department",
        format: "Certified Revenue Extract / Online digitally signed copy",
        validity: "Recent within 6 months"
      },
      {
        name: "Aadhaar Card",
        why: "Primary identity and address verification.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original + photocopy",
        validity: "Permanent"
      },
      {
        name: "One-Page KCC Application Form",
        why: "Standard simplified loan application under the PM-KISAN KCC saturation drive.",
        mandatory: true,
        issuingAuthority: "Participating Bank / Ministry of Agriculture",
        format: "Signed physical application form",
        validity: "Current"
      },
      {
        name: "Passport Size Photographs",
        why: "KYC and passbook generation.",
        mandatory: true,
        issuingAuthority: "Self",
        format: "2 recent colour passport photographs",
        validity: "Recent"
      }
    ],
    applicationMode: "Online via Banking Portals / CSC & Offline at any Commercial, Cooperative, or Gramin Bank",
    process: [
      "Step 1: Download the simplified one-page KCC application form from pmkisan.gov.in or collect it from your local bank branch.",
      "Step 2: Fill in basic personal details: Name, Aadhaar, PM-KISAN registration number, and residential village.",
      "Step 3: Fill in land details: Survey Number, Village, Title, and crops cultivated (Kharif, Rabi, and Horticulture).",
      "Step 4: Check the declaration certifying you have no existing KCC credit from another branch.",
      "Step 5: Attach copies of Land Record (Khatauni) and Aadhaar card.",
      "Step 6: Submit the application to the branch manager of your local Public Sector Bank, Regional Rural Bank (RRB), or Cooperative Bank.",
      "Step 7: The bank issues an acknowledgement slip; processing must be completed within 14 days under RBI directives.",
      "Step 8: Upon sanction, receive your RuPay KCC Debit Card, which can be swiped at ATMs and fertilizer outlets."
    ],
    offlineProcess: "Walk into your nearest State Bank of India, Gramin Bank, or Cooperative Bank branch where you hold your savings account. Request the Kisan Credit Card application desk. Hand over your Land Khatauni and Aadhaar card. The branch will calculate your crop limit (e.g., ₹50,000 per acre depending on crop) and sanction your RuPay KCC card within 14 working days.",
    commonMistakes: [
      "Applying at multiple banks simultaneously: Centralized credit bureau checks reject duplicate agricultural credit lines.",
      "Delaying annual repayment beyond the due date: To enjoy the 4% net interest rate, farmers must clear dues or rollover the principal once within 12 months.",
      "Assuming KCC is only for crop farmers: Animal husbandry, dairy, and fisheries farmers are also entitled to KCC limits up to ₹2 Lakh at subsidized rates."
    ],
    deadlineInfo: "Open throughout the year. Farmers can apply anytime at bank branches.",
    openingDate: "Continuous year-round service",
    processingTime: "Maximum 14 working days from receipt of complete application per RBI mandate.",
    renewalRequired: "Credit limit is sanctioned for 5 years with simple annual review.",
    trackingProcedure: "Inquire at the branch manager's desk with your acknowledgement slip or check loan account on mobile banking.",
    correctionProcedure: "Submit updated land records to branch to increase credit limit if additional land is acquired.",
    disbursementMethod: "RuPay KCC Debit Card / Overdraft Drawing Account",
    disbursementDetails: "Farmers are issued a RuPay Kisan Debit Card. Money can be withdrawn anytime from any bank ATM or swiped at PoS machines in fertilizer, seed, and pesticide shops.",
    faqs: [
      { q: "What is the net interest rate on a Kisan Credit Card?", a: "The base rate is 7%. If the farmer repays within 12 months, the Central Government provides a 3% prompt repayment subsidy, making the effective interest rate only 4% per year." },
      { q: "Do I have to pledge land to get a KCC loan?", a: "No collateral/mortgage of land is required for loans up to ₹1,60,000. Loans above ₹1.6 Lakh require hypothecation or land charge." },
      { q: "Can animal husbandry and dairy farmers get a KCC?", a: "Yes. KCC credit limits up to ₹2,00,000 are available specifically for dairy, poultry, sheep, goat, and fisheries farmers without crop land requirements." },
      { q: "Can I use my KCC card at ordinary commercial ATMs?", a: "Yes. The RuPay KCC card functions like any standard bank debit card and can withdraw cash at any ATM in India." },
      { q: "What is the validity period of a Kisan Credit Card?", a: "The credit limit is approved for 5 years, subject to an annual review and rollover of dues." },
      { q: "What happens if I cannot repay due to severe drought?", a: "In cases of notified natural calamities, banks convert short-term KCC loans into medium-term loans repayable over 3 to 5 years, providing immediate moratorium." }
    ],
    helpline: "Kisan Call Centre Toll-Free: 1800-180-1551",
    email: "agri-credit@nic.in"
  },

  "pm-kusum": {
    launchYear: 2019,
    purpose: "Pradhan Mantri Kisan Urja Suraksha evam Utthaan Mahabhiyan (PM-KUSUM) enables farmers to install standalone solar water irrigation pumps and solarize existing grid-connected agricultural pumps, slashing high diesel costs and creating a clean, drought-proof renewable energy source while allowing farmers to sell excess green power to the grid.",
    targetBeneficiary: "Individual farmers, groups of farmers, Water User Associations (WUAs), cooperatives, and Panchayats with agricultural land.",
    benefits: "Massive 60% capital subsidy on the cost of solar irrigation pump sets (30% funded by Central Government + 30% by State Government). Farmers contribute only 10% of total cost upfront; the remaining 30% is financed via low-interest bank loan. Excess solar electricity generated can be sold back to state DISCOMs for steady secondary income.",
    financialBenefit: "60% subsidy on solar pump set cost (Farmer pays only 10% cash upfront, 30% bank loan, 60% government subsidy)",
    benefitFrequency: "One-time capital equipment subsidy with 25-year solar operational life",
    impact: "Eliminates diesel bills of ₹50,000 to ₹1,00,000 annually per farmer, guarantees daytime reliable water supply for crops, and generates passive income by feeding green power back into the agricultural grid.",
    detailedEligibility: {
      ageRequirement: "18 years and above.",
      genderRequirement: "All farmers eligible.",
      incomeLimit: "No income limit.",
      educationRequirement: "None.",
      occupationRequirement: "Farmer cultivating agricultural land with borewell/water source.",
      casteCategoryRequirement: "Open to all categories; special priority quotas for SC/ST and small/marginal farmers.",
      residenceRequirement: "Indian citizen residing in project area.",
      familyConditions: "One solar pump installation per operational borewell / farmer household."
    },
    mandatoryConditions: [
      "Must own agricultural land with an existing functional borewell, open well, or farm pond with adequate water source",
      "For standalone off-grid pumps (Component B), the land must be located in an un-electrified agricultural area or dark zone where grid connection is unavailable or unreliable",
      "Must pay the mandatory 10% farmer share into the nodal agency escrow account upon provisional sanction"
    ],
    conditionalRequirements: [
      "No Objection Certificate (NOC) from groundwater authority in notified groundwater over-exploited blocks."
    ],
    ineligibility: [
      "Farmers without any cultivable land or without legal water access rights",
      "Farmers who have already availed capital subsidy for a solar water pump under any other central/state government scheme in the last 10 years",
      "Sites lacking groundwater feasibility"
    ],
    documents: [
      {
        name: "Land Revenue Documents (7/12 Extract / Khasra-Khatauni / Jamabandi)",
        why: "To confirm land title and ownership in farmer's name.",
        mandatory: true,
        issuingAuthority: "State Revenue Department",
        format: "Certified Land Record Extract",
        validity: "Recent within 6 months"
      },
      {
        name: "Aadhaar Card",
        why: "Identity verification and DBT subsidy tracking.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original / e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Bank Passbook Copy",
        why: "Account details for subsidy credit and bank loan processing.",
        mandatory: true,
        issuingAuthority: "Scheduled Bank",
        format: "Clear copy with IFSC and Account Number",
        validity: "Active account"
      },
      {
        name: "Water Source Proof / Borewell Certificate",
        why: "Confirms existing open well, borewell, or canal water source for pump installation.",
        mandatory: true,
        issuingAuthority: "Local Patwari / Groundwater Survey / Electricity Bill",
        format: "Self-declaration with photo of water source / Patwari certificate",
        validity: "Current"
      }
    ],
    applicationMode: "Online through State Renewable Energy Development Agency portal (e.g., MEDA, KREDL, HAREDA, UPNEDA)",
    process: [
      "Step 1: Identify your State Nodal Agency (SNA) portal for PM-KUSUM (e.g. mahadisha.gov.in for Maharashtra, hareda.gov.in for Haryana).",
      "Step 2: Click on 'PM-KUSUM Component B / C Online Application'.",
      "Step 3: Register using your Aadhaar number and Mobile Number.",
      "Step 4: Enter Land details (District, Taluk, Village, Survey Number, Total Acreage).",
      "Step 5: Select requested Solar Pump Capacity (e.g. 3 HP, 5 HP, or 7.5 HP AC/DC Submersible or Surface Pump) based on water depth.",
      "Step 6: Upload Land Record, Aadhaar, Bank Passbook, and photo of water source.",
      "Step 7: Submit the application and receive your Application Reference ID.",
      "Step 8: Field inspection by the state renewable energy agency to verify groundwater depth and site suitability.",
      "Step 9: Upon approval, deposit the 10% farmer share online or via bank challan.",
      "Step 10: Empanelled solar vendor delivers and installs the solar panels, controller, and pump set within 45 to 60 days."
    ],
    offlineProcess: "Farmers can visit the District Office of their State Renewable Energy Development Agency (SNA) or the District Agriculture Officer. Staff will guide the farmer through the portal submission and provide payment challans for the 10% beneficiary contribution.",
    commonMistakes: [
      "Falling for fraudulent phishing websites: Only apply on official state government portals ending in .gov.in. MNRE has repeatedly issued notices against fake websites taking advance deposits.",
      "Ordering incorrect pump HP capacity: 3 HP is ideal up to 150-200 feet depth; 5 HP or 7.5 HP is required for deeper borewells exceeding 250 feet.",
      "Site shaded by trees or high structures: Solar arrays require unobstructed direct sunlight from 8 AM to 5 PM."
    ],
    deadlineInfo: "Sanctioned in state-wise tranches. State portals open application windows each financial year until district quotas are filled.",
    openingDate: "Annual state-notified application cycles",
    processingTime: "60 to 90 days from application to physical pump commissioning in field.",
    renewalRequired: "No renewal needed; solar panels come with a 25-year manufacturer performance warranty.",
    trackingProcedure: "Log in to the State Renewable Energy Agency portal using your registration number to track vendor allocation, dispatch, and installation.",
    correctionProcedure: "Request pump capacity modification during the physical field survey before final vendor payment.",
    disbursementMethod: "Direct Capital Subsidy Payment to Empanelled Vendor by MNRE and State Govt",
    disbursementDetails: "The farmer does not handle the 60% subsidy cash. The farmer pays only 10% (plus any loan component); the central and state governments disburse the remaining 60% directly to the empanelled solar equipment manufacturer once installation and remote monitoring geo-tagging are completed.",
    faqs: [
      { q: "How much money does a farmer actually pay for a 5 HP solar pump?", a: "For a pump costing roughly ₹2,50,000, the central and state governments pay ₹1,50,000 (60%). The farmer pays only around ₹25,000 (10%) upfront; the remaining ₹75,000 can be taken as a concessional bank loan." },
      { q: "Can I sell excess solar power to the government?", a: "Yes. Under Component C (Grid-connected solar pumps), any solar power not used for pumping can be exported into the local electricity grid at feed-in tariffs set by the State Electricity Regulatory Commission (SERC)." },
      { q: "What capacity solar pump is suitable for my land?", a: "Generally, 3 HP pumps serve up to 5 acres with water table down to 150 ft; 5 HP serves 5–10 acres down to 250 ft; 7.5 HP is used for larger landholdings or deeper borewells." },
      { q: "What happens during cloudy or rainy days?", a: "Modern PM-KUSUM pumps use high-efficiency MPPT controllers that operate at lower RPM even in diffuse light, though output is reduced compared to bright sunny days." },
      { q: "Who handles maintenance if the pump malfunctions?", a: "All empanelled manufacturers must provide 5 years of comprehensive free warranty, repair, and remote maintenance support." },
      { q: "How do I identify fake PM-KUSUM websites?", a: "Always ensure the website domain ends with '.gov.in' or '.nic.in'. Never deposit money into individual private bank accounts or UPI IDs." }
    ],
    helpline: "MNRE PM-KUSUM Toll-Free: 1800-180-3333",
    email: "kusum-mnre@nic.in"
  },

  "jsy": {
    launchYear: 2005,
    purpose: "Janani Suraksha Yojana (JSY), under the National Health Mission, is a safe motherhood intervention designed to reduce maternal and neonatal mortality by promoting institutional deliveries among poor pregnant women through direct conditional cash assistance.",
    targetBeneficiary: "Pregnant women from BPL, SC, and ST households delivering in public health institutions or accredited private hospitals.",
    benefits: "Direct cash assistance to mother upon institutional delivery: In Low Performing States (LPS: UP, Bihar, MP, Rajasthan, Odisha, Jharkhand, Chhattisgarh, Uttarakhand, Assam, J&K), mothers receive ₹1,400 (rural) or ₹1,000 (urban). In High Performing States (HPS), BPL/SC/ST mothers receive ₹700 (rural) or ₹600 (urban). In addition, ASHA worker receives incentive for escorting the mother.",
    financialBenefit: "Direct cash assistance of ₹1,400 (rural) / ₹1,000 (urban) in Low Performing States; ₹700 (rural) / ₹600 (urban) in High Performing States",
    benefitFrequency: "Per institutional childbirth delivery",
    impact: "Encourages women to deliver in healthcare facilities rather than home deliveries, provides critical neonatal care, and lowers maternal mortality ratio (MMR).",
    detailedEligibility: {
      ageRequirement: "19 years and above.",
      genderRequirement: "Female (pregnant women).",
      incomeLimit: "BPL household status (in Low Performing States, all pregnant women delivering in government health facilities are eligible regardless of age or income).",
      educationRequirement: "None.",
      occupationRequirement: "Any.",
      casteCategoryRequirement: "All categories in LPS; BPL/SC/ST in HPS.",
      residenceRequirement: "Resident of India.",
      familyConditions: "In LPS: all deliveries eligible; in HPS: up to two live births."
    },
    mandatoryConditions: [
      "Must undergo institutional delivery in a government hospital, Primary Health Centre (PHC), Community Health Centre (CHC), or accredited private maternity facility",
      "Must be registered with local ASHA / ANM and possess Mother and Child Protection (MCP) card",
      "Delivery must be documented by birth certificate/discharge slip"
    ],
    conditionalRequirements: [
      "BPL certificate or SC/ST caste certificate required in High Performing States."
    ],
    ineligibility: [
      "Home deliveries (except a modest BPL assistance of ₹500 for destitute women)",
      "Deliveries at un-accredited private nursing homes",
      "In HPS, mothers with more than two surviving children who do not belong to SC/ST categories"
    ],
    documents: [
      {
        name: "Mother and Child Protection (MCP) Card",
        why: "Tracks antenatal check-ups (ANC), tetanus injections, and delivery registration.",
        mandatory: true,
        issuingAuthority: "Primary Health Centre / ASHA / ANM",
        format: "Original card issued during 1st trimester",
        validity: "Throughout pregnancy and infancy"
      },
      {
        name: "Aadhaar Card of Mother",
        why: "Identity verification and direct DBT transfer.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or photocopy",
        validity: "Permanent"
      },
      {
        name: "Hospital Delivery & Discharge Slip",
        why: "Proves institutional delivery occurred in an authorized healthcare facility.",
        mandatory: true,
        issuingAuthority: "Government Hospital / Empanelled Maternity Home",
        format: "Signed discharge summary showing date and time of birth",
        validity: "Original"
      },
      {
        name: "Mother's Bank Passbook (Aadhaar-Seeded)",
        why: "For receiving cash assistance via Direct Benefit Transfer.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office Bank",
        format: "Copy showing account number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Offline through Village ASHA / ANM / Sub-Centre / Hospital Maternity Ward",
    process: [
      "Step 1: Register your pregnancy with the local ASHA or ANM at the nearest Sub-Centre or Anganwadi within the first 12 weeks.",
      "Step 2: Obtain your Mother and Child Protection (MCP) Card and complete at least 3 Antenatal Care (ANC) visits.",
      "Step 3: At the time of labor, call the national ambulance service (108 / 102) or accompany your ASHA to the nearest government hospital/PHC.",
      "Step 4: Complete institutional delivery at the facility.",
      "Step 5: Hand over mother's bank details, Aadhaar card, and MCP card to the hospital maternity clerk.",
      "Step 6: The medical officer verifies the institutional delivery and approves the JSY voucher.",
      "Step 7: The assistance amount is disbursed via PFMS direct bank transfer or account-payee cheque before hospital discharge."
    ],
    offlineProcess: "There is no complex online application. Simply register with your village ASHA worker during pregnancy. When you arrive at the Community Health Centre or District Hospital for delivery, the hospital administration registers the JSY benefit on the spot.",
    commonMistakes: [
      "Not opening a bank account before delivery: Delays cash transfer; pregnant women are advised to open an individual bank account during the 2nd trimester.",
      "Delivering at unaccredited private clinic: Only government facilities and state-accredited private hospitals qualify.",
      "Forgetting MCP card: Always carry the MCP card to the hospital during labor."
    ],
    deadlineInfo: "Payment is processed immediately at delivery or within 30 days of hospital discharge.",
    openingDate: "Continuous year-round service",
    processingTime: "At discharge or within 7 to 15 days via bank transfer.",
    renewalRequired: "Applicable per delivery event; no renewal.",
    trackingProcedure: "Ask your village ASHA worker or Hospital Medical Superintendent.",
    correctionProcedure: "Correct bank details at the Hospital Superintendent's office if payment bounces.",
    disbursementMethod: "Direct Benefit Transfer (DBT) to Mother's Bank Account / Account Payee Cheque",
    disbursementDetails: "Disbursed directly into the mother's bank account via PFMS upon entry into the RCH (Reproductive and Child Health) portal.",
    faqs: [
      { q: "Is the cash benefit given immediately at the hospital?", a: "Yes, in most government hospitals, the cash assistance is transferred to the mother's bank account or handed over via cheque before discharge." },
      { q: "Can JSY benefits be combined with Pradhan Mantri Matru Vandana Yojana (PMMVY)?", a: "Yes! JSY and PMMVY are distinct schemes and mothers can receive BOTH benefits (up to ₹5,000 from PMMVY + ₹1,400 from JSY)." },
      { q: "What if a C-section (caesarean) delivery is required?", a: "C-section deliveries in government hospitals are completely free, and JSY provides up to ₹1,500 assistance for hiring private obstetricians in PHCs/CHCs where government specialists are unavailable." },
      { q: "Is ambulance transport to the hospital free?", a: "Yes. Dial 102 or 108 for free Janani Express / National Ambulance transport from home to hospital and return after delivery." },
      { q: "Do mothers in urban areas receive JSY assistance?", a: "Yes, urban mothers receive ₹1,000 in Low Performing States and ₹600 in High Performing States." },
      { q: "Are teenage mothers below 19 years eligible?", a: "Under JSY guidelines, pregnant women must be 19 years of age or older to receive the cash assistance." }
    ],
    helpline: "National Health Mission Toll-Free: 104 / 108",
    email: "jsy-nhm@gov.in"
  },

  "tn-cmchis": {
    launchYear: 2012,
    purpose: "Chief Minister's Comprehensive Health Insurance Scheme (CMCHIS) was launched by the Government of Tamil Nadu to provide cashless multi-speciality medical and surgical hospitalisation cover to low-income families in Tamil Nadu, eliminating financial distress from high-cost tertiary medical treatments.",
    targetBeneficiary: "Families in Tamil Nadu whose annual household income is less than ₹1,20,000, as verified through Tamil Nadu Smart Ration Card.",
    benefits: "Comprehensive cashless coverage up to ₹5,00,000 per family per year for 1,513 medical and surgical procedures across 1,000+ empanelled public and private hospitals in Tamil Nadu, including diagnostic charges, ICU, diagnostic tests, and follow-up care. Covers organ transplants, cancer treatment, and heart surgeries.",
    financialBenefit: "Up to ₹5,00,000 cashless cover per family per year across 1,513 notified medical procedures",
    benefitFrequency: "Annual floating family coverage",
    impact: "Provides gold-standard surgical and tertiary healthcare access in Tamil Nadu's top hospitals to working-class, agrarian, and informal sector households.",
    detailedEligibility: {
      ageRequirement: "All family members listed on the Tamil Nadu Smart Ration Card.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Family annual income strictly below ₹1,20,000 per annum.",
      educationRequirement: "None.",
      occupationRequirement: "Informal, agricultural, and unorganized workers, daily wage laborers.",
      casteCategoryRequirement: "Open to all castes and categories residing in Tamil Nadu.",
      residenceRequirement: "Resident of Tamil Nadu with active Smart Ration Card.",
      familyConditions: "Family is defined as head of family, spouse, dependent children, and dependent parents as per Smart Card."
    },
    mandatoryConditions: [
      "Must hold a valid Tamil Nadu Smart Family Card (Ration Card)",
      "Annual family income must not exceed ₹1,20,000 as certified by Village Administrative Officer (VAO) / Revenue Authority",
      "Treatment must be availed at an empanelled CMCHIS hospital in Tamil Nadu"
    ],
    conditionalRequirements: [
      "Referral or pre-authorisation required for elective multi-speciality surgeries."
    ],
    ineligibility: [
      "Families whose annual income exceeds ₹1,20,000",
      "Tamil Nadu State and Central Government employees and pensioners (covered under separate Government Employee New Health Insurance Scheme)",
      "Persons not residing in Tamil Nadu or without Tamil Nadu Smart Ration Card"
    ],
    documents: [
      {
        name: "Tamil Nadu Smart Family Card (Ration Card)",
        why: "Primary proof of residence in Tamil Nadu and family member tree.",
        mandatory: true,
        issuingAuthority: "Civil Supplies & Consumer Protection Department, Tamil Nadu",
        format: "Original Smart Card or electronic Smart Card extract",
        validity: "Active"
      },
      {
        name: "Income Certificate (Annual income < ₹1.2 Lakh)",
        why: "Confirms family income satisfies the scheme limit.",
        mandatory: true,
        issuingAuthority: "Revenue Department (VAO / Tahsildar)",
        format: "e-Sevai certified Income Certificate",
        validity: "Issued within 1 year"
      },
      {
        name: "Aadhaar Card of Family Members",
        why: "Identity verification and biometric card generation.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original card",
        validity: "Permanent"
      }
    ],
    applicationMode: "Offline at District Collectorate CMCHIS Kiosk / e-Sevai Centres",
    process: [
      "Step 1: Obtain an Income Certificate showing annual family income under ₹1,20,000 from your local e-Sevai Centre / Tahsildar.",
      "Step 2: Take your original Smart Family Card, Income Certificate, and family Aadhaar cards to the CMCHIS Enrolment Kiosk at the District Collectorate.",
      "Step 3: CMCHIS field verification officer verifies your documents.",
      "Step 4: Biometric fingerprint and live photograph of all family members are captured.",
      "Step 5: The Smart CMCHIS URN (Unique Registration Number) card is printed and handed over on the spot.",
      "Step 6: Present this card at any empanelled hospital in Tamil Nadu for cashless admission."
    ],
    offlineProcess: "Visit the CMCHIS special counter located inside the District Collector's Office in your district headquarters. The service is free of cost and issues biometric health cards.",
    commonMistakes: [
      "Income certificate older than one year: Must renew income certificate via e-Sevai before card renewal.",
      "Family member not listed on Smart Ration card: Must first add newly married spouses or infants to the PDS Smart card before they can receive hospitalisation cover."
    ],
    deadlineInfo: "Year-round rolling enrolment. No deadline.",
    openingDate: "Continuous year-round service",
    processingTime: "Same-day card issuance at District Collectorate; hospital pre-authorisation within 12 hours.",
    renewalRequired: "Card validity runs continuously as long as the Smart Ration card remains active.",
    trackingProcedure: "Search your URN or Ration Card number on cmchistn.com to view policy and claims.",
    correctionProcedure: "Visit the District Collectorate CMCHIS desk to update family member additions.",
    disbursementMethod: "100% Cashless Inpatient Hospitalisation Settlement",
    disbursementDetails: "Hospital submits online pre-authorization to the Third Party Administrator (TPA) / United India Insurance. Claims are settled directly with the hospital with zero out-of-pocket payment from the patient.",
    faqs: [
      { q: "Is CMCHIS linked with Ayushman Bharat PM-JAY in Tamil Nadu?", a: "Yes. Tamil Nadu co-brands CMCHIS with PM-JAY. Eligible families receive seamless cashless benefits up to ₹5,00,000 under the integrated platform." },
      { q: "What is the income ceiling to qualify for CMCHIS?", a: "The family's total annual income from all sources must be less than ₹1,20,000 per year." },
      { q: "Does the scheme cover high-cost organ transplants?", a: "Yes. CMCHIS provides dedicated packages for renal (kidney) transplant, liver transplant, bone marrow transplant, and heart valve replacement." },
      { q: "Where can I get the CMCHIS Smart Card made?", a: "At the dedicated CMCHIS counter inside every District Collector's Office in Tamil Nadu." },
      { q: "Can emergency accident victims be treated immediately without the card?", a: "Yes. In life-threatening emergency situations, empanelled hospitals admit patients immediately and obtain emergency pre-authorization within 24 hours." },
      { q: "Are diagnostic scans like MRI and CT covered?", a: "Yes, pre-operative and diagnostic evaluations related to surgical inpatient packages are covered." }
    ],
    helpline: "CMCHIS 24/7 Toll-Free: 1800-425-3993",
    email: "cmchistn@uiic.co.in"
  },

  "mh-mjpjay": {
    launchYear: 2012,
    purpose: "Mahatma Jyotirao Phule Jan Arogya Yojana (MJPJAY) is the flagship universal health insurance initiative of the Government of Maharashtra. In 2023, the scheme was expanded to cover ALL 12.5 crore citizens of Maharashtra, ensuring cashless secondary and tertiary medical care across state hospitals.",
    targetBeneficiary: "All families residing in Maharashtra holding an active Ration Card and Aadhaar card (Universal coverage across Maharashtra).",
    benefits: "Cashless hospitalisation coverage up to ₹5,00,000 per family per year (raised from ₹1.5 Lakh) across 1,356 medical and surgical therapies in 1,000+ empanelled government and private network hospitals across Maharashtra.",
    financialBenefit: "Up to ₹5,00,000 cashless hospitalisation cover per family per year",
    benefitFrequency: "Annual floating family coverage",
    impact: "Protects millions of families from catastrophic medical impoverishment, covers major surgical interventions, pediatric surgeries, cancer care, and cardiac care completely cashlessly.",
    detailedEligibility: {
      ageRequirement: "All ages eligible.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Universal across Maharashtra (Yellow, Orange, and White ration card holders).",
      educationRequirement: "None.",
      occupationRequirement: "Any occupation (open to all citizens of Maharashtra).",
      casteCategoryRequirement: "All categories.",
      residenceRequirement: "Resident of Maharashtra.",
      familyConditions: "Covered on family floater basis as per Ration Card."
    },
    mandatoryConditions: [
      "Must be a resident of Maharashtra holding a valid Ration Card (Yellow, Saffron/Orange, or White Card) or Domicile Certificate",
      "Must possess an individual Aadhaar Card",
      "Treatment must be availed at an empanelled public or private MJPJAY network hospital"
    ],
    conditionalRequirements: [
      "Referral from government hospital or Arogyamitra required for elective specialised tertiary procedures."
    ],
    ineligibility: [
      "Non-residents of Maharashtra without state ration card/domicile",
      "Treatments not listed in the 1,356 notified therapy packages",
      "Un-empanelled private hospitals"
    ],
    documents: [
      {
        name: "Maharashtra Ration Card (Yellow / Orange / White)",
        why: "Establishes family membership and eligibility under Maharashtra health mission.",
        mandatory: true,
        issuingAuthority: "Food, Civil Supplies and Consumer Protection Dept, Maharashtra",
        format: "Original Ration Card",
        validity: "Active"
      },
      {
        name: "Aadhaar Card",
        why: "Identity and biometric authentication at hospital Arogyamitra desk.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      }
    ],
    applicationMode: "Direct Cashless Walk-in at any Network Hospital Arogyamitra Desk",
    process: [
      "Step 1: Check the list of empanelled network hospitals on jeevandayee.gov.in.",
      "Step 2: Visit the network hospital and approach the 'Arogyamitra' helpdesk near the casualty/admission counter.",
      "Step 3: Show your Maharashtra Ration Card and Aadhaar card to the Arogyamitra.",
      "Step 4: The Arogyamitra searches your family on the MJPJAY web portal and verifies details.",
      "Step 5: Hospital doctor examines the patient and issues an electronic pre-authorization request.",
      "Step 6: State Health Assurance Society (SHAS) medical specialists review and approve the request online (usually within 12 hours).",
      "Step 7: The patient receives complete cashless surgery, medications, diagnostic tests, and food during hospital stay.",
      "Step 8: At discharge, the patient receives 10 days of post-operative medicines and a free follow-up consultation voucher without paying any money."
    ],
    offlineProcess: "Walk into any empanelled hospital in Maharashtra with your Ration Card and Aadhaar card. The hospital Arogyamitra facilitates the entire pre-authorisation and admission process.",
    commonMistakes: [
      "Paying cash to the hospital upfront: MJPJAY is 100% cashless. If an empanelled hospital demands money, immediately contact the Arogyamitra or call 155388.",
      "Visiting non-empanelled clinics: Only designated network hospitals can provide cashless MJPJAY treatments."
    ],
    deadlineInfo: "Universal year-round coverage. Active 365 days a year.",
    openingDate: "Continuous year-round service",
    processingTime: "Pre-authorisation approved within 6 to 12 hours; emergency cases approved within 2 hours.",
    renewalRequired: "Auto-renews every year on 1st April.",
    trackingProcedure: "Call 155388 or check status on jeevandayee.gov.in.",
    correctionProcedure: "Update name/members on your Ration card at the Tahsildar / Rationing Office.",
    disbursementMethod: "100% Cashless Treatment Settlement between Government and Hospital",
    disbursementDetails: "No cash is paid to the patient. The State Health Assurance Society pays the hospital directly through online banking based on pre-set package rates.",
    faqs: [
      { q: "Is MJPJAY now available to White Ration Card holders too?", a: "Yes! In July 2023, the Maharashtra Government expanded MJPJAY to ALL citizens of Maharashtra, including White Ration cardholders, with coverage increased to ₹5 Lakh." },
      { q: "Do I need a special card or does my Ration Card suffice?", a: "Your existing Maharashtra Ration Card (Yellow, Orange, or White) along with your Aadhaar card is sufficient to avail treatment at any empanelled hospital." },
      { q: "What should I do if an empanelled hospital asks for a deposit?", a: "Do NOT pay. Call the 24/7 State Health Helpline immediately on 155388 or 1800-233-2200 and report the hospital name." },
      { q: "Are cancer surgeries and chemotherapy covered?", a: "Yes. MJPJAY has extensive coverage for medical oncology, surgical oncology, radiation therapy, and chemotherapy." },
      { q: "Can kidney dialysis be availed cashlessly?", a: "Yes. Dialysis sessions for patients with end-stage renal disease are fully covered across empanelled dialysis centers." },
      { q: "Does the scheme cover ICU bed charges?", a: "Yes, intensive care unit (ICU) charges, nursing, and medicines during hospitalisation are fully inclusive in the package." }
    ],
    helpline: "Maharashtra Health Helpline: 155388 / 1800-233-2200",
    email: "helpdesk@jeevandayee.gov.in"
  },

  "wb-swasthya-sathi": {
    launchYear: 2016,
    purpose: "Swasthya Sathi was launched by the Government of West Bengal to provide universal healthcare financial protection to the entire population of West Bengal, empowering female heads of households with smart card-based health security.",
    targetBeneficiary: "All families residing in West Bengal, with the Smart Health Card issued in the name of the eldest female member of the family.",
    benefits: "Basic health cover up to ₹5,00,000 per family per year for secondary and tertiary care hospitalisation across 2,000+ empanelled government and private hospitals in West Bengal and select premier multi-speciality hospitals nationwide.",
    financialBenefit: "Cashless hospitalisation coverage up to ₹5,00,000 per family per year",
    benefitFrequency: "Annual floating family coverage",
    impact: "Universal healthcare without out-of-pocket medical expenditure, pioneering women's empowerment by designating the mother/grandmother as cardholder.",
    detailedEligibility: {
      ageRequirement: "All family members eligible.",
      genderRequirement: "Card issued in the name of the eldest female member; benefits cover all male and female family members.",
      incomeLimit: "NO income restriction (Universal coverage across West Bengal).",
      educationRequirement: "None.",
      occupationRequirement: "Open to all occupations (except government servants receiving medical allowance).",
      casteCategoryRequirement: "All castes and categories.",
      residenceRequirement: "Permanent resident of West Bengal.",
      familyConditions: "Parents, spouse, children, and dependent in-laws of the female head of household."
    },
    mandatoryConditions: [
      "Must be a permanent resident of West Bengal",
      "Must possess an official Swasthya Sathi Smart Card issued by the state government",
      "Must seek admission in an empanelled public or private network hospital"
    ],
    conditionalRequirements: [
      "Pre-authorisation required for non-emergency elective procedures."
    ],
    ineligibility: [
      "State and Central Government employees and pensioners receiving regular medical allowances from the government",
      "Families already covered under government employee health schemes like WBHS"
    ],
    documents: [
      {
        name: "Swasthya Sathi Smart Card",
        why: "Chip-based electronic card containing family biometric data and ₹5 Lakh wallet limit.",
        mandatory: true,
        issuingAuthority: "Health & Family Welfare Dept, West Bengal",
        format: "Original physical Smart Card",
        validity: "Permanent"
      },
      {
        name: "Aadhaar Card of Beneficiaries",
        why: "Identity verification for family member linkage.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or photocopy",
        validity: "Permanent"
      },
      {
        name: "Khadya Sathi Ration Card",
        why: "Family identification and verification during Duare Sarkar camps.",
        mandatory: true,
        issuingAuthority: "Food & Supplies Department, West Bengal",
        format: "Digital Ration Card",
        validity: "Active"
      }
    ],
    applicationMode: "Offline at 'Duare Sarkar' Camps / BDO Office or Online at data.swasthyasathi.gov.in",
    process: [
      "Step 1: Fill out Application Form B during the statewide 'Duare Sarkar' (Government at your Doorstep) camps or at the local BDO office.",
      "Step 2: Enter family details with the eldest female member as the Head of Household.",
      "Step 3: Provide Aadhaar and Khadya Sathi Digital Ration Card numbers for all family members.",
      "Step 4: Visit the camp's biometric photography counter for photograph and fingerprint capture.",
      "Step 5: The physical biometric Swasthya Sathi Smart Card is printed and handed over on the spot.",
      "Step 6: Show the card at the Swasthya Sathi desk of any empanelled hospital for cashless admission."
    ],
    offlineProcess: "Visit your local Block Development Office (BDO) or attend the regular Duare Sarkar camps organized across municipal wards and gram panchayats in West Bengal.",
    commonMistakes: [
      "Applying with male member as primary head: The card is legally issued in the name of the eldest female member of the family.",
      "Not carrying the physical card to hospital: Hospitals require swiping the physical chip card on their terminal."
    ],
    deadlineInfo: "Universal ongoing scheme. New cards issued at all Duare Sarkar camps and BDO offices.",
    openingDate: "Continuous year-round service",
    processingTime: "Same-day card issuance at Duare Sarkar camps; pre-authorization within 1 to 2 hours at hospital.",
    renewalRequired: "Auto-renews annually on 1st April without paperwork.",
    trackingProcedure: "Check your card URN status on swasthyasathi.gov.in under 'Find Your Name'.",
    correctionProcedure: "Submit Form C (member addition/deletion) at the local BDO / Municipal office.",
    disbursementMethod: "100% Cashless Inpatient Hospitalisation Settlement",
    disbursementDetails: "Hospital swipes the Swasthya Sathi card, locks the package amount, and receives direct payment from the West Bengal Swasthya Sathi Trust via online portal.",
    faqs: [
      { q: "Is Swasthya Sathi valid in private hospitals outside West Bengal?", a: "Yes. Swasthya Sathi has empanelled select premier multi-speciality hospitals in other states, including Christian Medical College (CMC) in Vellore, Tamil Nadu." },
      { q: "Can men use the Swasthya Sathi card?", a: "Yes. Even though the card is issued in the name of the female head of household, all family members (husband, sons, father, in-laws) listed on the card receive the full ₹5 Lakh cover." },
      { q: "Is there any income limit to get a Swasthya Sathi card?", a: "No. The scheme is universal across West Bengal for all citizens not receiving government medical allowance." },
      { q: "What should I do if a private hospital refuses to accept the card?", a: "Immediately call the Swasthya Sathi 24/7 Toll-Free Helpline at 1800-345-5384. Swasthya Sathi nodal officers are assigned to all network hospitals." },
      { q: "Are pre-existing diseases covered?", a: "Yes, all pre-existing medical conditions are covered from day one without waiting periods." },
      { q: "How much does the card cost?", a: "The Swasthya Sathi Smart Card is completely free of cost." }
    ],
    helpline: "Swasthya Sathi Toll-Free: 1800-345-5384",
    email: "swasthyasathi-wb@gov.in"
  },

  "kl-kasp": {
    launchYear: 2020,
    purpose: "Karunya Arogya Suraksha Padhathi (KASP) is Kerala's unified state health insurance initiative that integrates PM-JAY and state welfare funds to deliver comprehensive, quality cashless hospitalisation cover to vulnerable and low-income families in Kerala.",
    targetBeneficiary: "Poor and vulnerable families in Kerala listed under BPL/priority ration cards, previous RSBY beneficiaries, and state-certified low-income households.",
    benefits: "Cashless secondary and tertiary hospitalisation cover up to ₹5,00,000 per family per year across 650+ empanelled government and private hospitals in Kerala, covering 1,600+ surgical and medical procedures.",
    financialBenefit: "Up to ₹5,00,000 cashless hospitalisation cover per family per year",
    benefitFrequency: "Annual floating family coverage",
    impact: "Prevents high out-of-pocket health expenditure in Kerala, provides cashless access to advanced medical technology, cardiology, neurology, and oncology.",
    detailedEligibility: {
      ageRequirement: "All family members.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "BPL and priority household threshold as determined by Kerala Civil Supplies.",
      educationRequirement: "None.",
      occupationRequirement: "Informal, agricultural, and unorganized sector workers.",
      casteCategoryRequirement: "All categories.",
      residenceRequirement: "Permanent resident of Kerala.",
      familyConditions: "Family members listed on priority/BPL ration card."
    },
    mandatoryConditions: [
      "Must be a resident of Kerala holding a valid Pink or Yellow Priority Ration Card",
      "Must be registered in the KASP / PM-JAY database",
      "Must present KASP / Ayushman Card and Aadhaar at empanelled hospital kiosk"
    ],
    conditionalRequirements: [
      "Referral from government hospital for select advanced private hospital tertiary care procedures."
    ],
    ineligibility: [
      "Kerala Government employees and pensioners covered under MEDISEP",
      "High-income families holding Non-Priority White ration cards (unless covered under specific state welfare boards)",
      "Un-empanelled hospitals"
    ],
    documents: [
      {
        name: "Kerala Priority Ration Card (Yellow / Pink Card)",
        why: "Proof of eligibility under BPL/Priority household criteria.",
        mandatory: true,
        issuingAuthority: "Civil Supplies Department, Kerala",
        format: "Original Ration Card",
        validity: "Active"
      },
      {
        name: "Aadhaar Card",
        why: "Identity verification and biometric authentication.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original card",
        validity: "Permanent"
      }
    ],
    applicationMode: "Online via sha.kerala.gov.in / Akshaya Centres & Offline at Empanelled Hospitals",
    process: [
      "Step 1: Check your eligibility on sha.kerala.gov.in using your Ration Card number.",
      "Step 2: Visit any Akshaya Centre in Kerala with your Ration Card and Aadhaar Card.",
      "Step 3: The Akshaya operator performs biometric e-KYC and issues your KASP-Ayushman Card.",
      "Step 4: Show the card at the KASP Helpdesk (KASP Kiosk) inside any empanelled hospital in Kerala for cashless admission."
    ],
    offlineProcess: "Visit your local Akshaya Centre or the KASP Helpdesk at any Medical College, District Hospital, or empanelled private hospital in Kerala with your ration card and Aadhaar.",
    commonMistakes: [
      "Not completing e-KYC at Akshaya centre: Having an eligible ration card is not enough; the individual KASP card must be generated.",
      "Assuming MEDISEP and KASP are the same: MEDISEP is for government employees and pensioners; KASP is for low-income citizens."
    ],
    deadlineInfo: "Continuous rolling enrolment. No deadline.",
    openingDate: "Continuous year-round service",
    processingTime: "Instantaneous card generation at Akshaya; hospital pre-authorisation within 1 hour.",
    renewalRequired: "Auto-renews annually on 1st April.",
    trackingProcedure: "Check status on sha.kerala.gov.in or call 1056.",
    correctionProcedure: "Update family details on the civil supplies portal (civilsupplieskerala.gov.in).",
    disbursementMethod: "100% Cashless Inpatient Hospitalisation Settlement",
    disbursementDetails: "Hospital submits e-preauthorization to the State Health Agency (SHA) Kerala. Expenses are settled directly between SHA and the hospital.",
    faqs: [
      { q: "What is KASP?", a: "Karunya Arogya Suraksha Padhathi (KASP) is Kerala's flagship health insurance scheme providing up to ₹5,00,000 cashless hospitalisation cover to eligible families." },
      { q: "Can I get my KASP card made at an Akshaya Centre?", a: "Yes, all Akshaya Centres across Kerala are authorized to register beneficiaries and print KASP-Ayushman cards." },
      { q: "Are emergency admissions covered without prior referral?", a: "Yes, genuine emergency and acute life-threatening hospitalisations are covered immediately without referrals." },
      { q: "Does KASP cover kidney dialysis?", a: "Yes, free outpatient dialysis packages are covered under KASP at government and empanelled private centers." },
      { q: "Are prescription medicines provided after discharge?", a: "Yes, package guidelines mandate up to 15 days of free discharge medicines for patients." },
      { q: "What should I do if an empanelled hospital demands payment?", a: "Immediately contact the DISHA helpline at 1056 or lodge a grievance with the State Health Agency." }
    ],
    helpline: "DISHA / KASP Helpline: 1056 (Toll-Free in Kerala) or 0471-2552056",
    email: "sha.kerala@gmail.com"
  },

  "ts-aarogyasri": {
    launchYear: 2014,
    purpose: "Rajiv Aarogyasri Community Health Insurance Scheme, operated by the Aarogyasri Health Care Trust of the Government of Telangana, provides cashless quality treatment to BPL families for catastrophic illnesses requiring hospitalisation, surgery, and multi-speciality therapies.",
    targetBeneficiary: "BPL families in Telangana holding an active Food Security Card (White Ration Card).",
    benefits: "Comprehensive cashless hospitalisation coverage up to ₹10,00,000 per family per year (enhanced by the Telangana Government in December 2023 from ₹5 Lakh) covering 1,672 medical and surgical procedures across empanelled network hospitals in Telangana.",
    financialBenefit: "Up to ₹10,00,000 cashless hospitalisation coverage per family per year",
    benefitFrequency: "Annual floating family coverage",
    impact: "Protects low-income households in Telangana from catastrophic healthcare debts, covering expensive cardiac, neurosurgical, and oncology treatments.",
    detailedEligibility: {
      ageRequirement: "All family members.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "BPL threshold (holders of Telangana Food Security Card).",
      educationRequirement: "None.",
      occupationRequirement: "Informal laborers, farmers, artisans, and unorganized workers.",
      casteCategoryRequirement: "All castes and categories.",
      residenceRequirement: "Resident of Telangana with active Food Security Card.",
      familyConditions: "All family members listed on the White Food Security Card."
    },
    mandatoryConditions: [
      "Must hold a valid Food Security Card (White Ration Card) issued by the Government of Telangana",
      "Must carry Aadhaar card for biometric authentication",
      "Treatment must be availed at an empanelled government or private Aarogyasri network hospital"
    ],
    conditionalRequirements: [
      "Aarogya Mithra verification required at hospital admission."
    ],
    ineligibility: [
      "Government employees and pensioners covered under the Employees and Journalists Health Scheme (EJHS)",
      "Families holding Pink (APL) Ration Cards",
      "Non-residents of Telangana"
    ],
    documents: [
      {
        name: "Telangana Food Security Card (White Ration Card)",
        why: "Confirms family BPL status and member eligibility.",
        mandatory: true,
        issuingAuthority: "Consumer Affairs, Food & Civil Supplies Dept, Telangana",
        format: "Original or digital Food Security Card copy",
        validity: "Active"
      },
      {
        name: "Aadhaar Card",
        why: "Identity verification and biometric authentication.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      }
    ],
    applicationMode: "Direct Walk-in at Empanelled Network Hospital Aarogyasri Counter / MeeSeva",
    process: [
      "Step 1: Check your Food Security Card status on epds.telangana.gov.in.",
      "Step 2: Visit any empanelled government or private hospital in Telangana.",
      "Step 3: Approach the 'Aarogya Mithra' desk located at the hospital entrance.",
      "Step 4: Present your White Food Security Card and Aadhaar card.",
      "Step 5: Aarogya Mithra registers your admission on the Aarogyasri trust portal.",
      "Step 6: Network hospital doctor conducts medical evaluation and submits an electronic pre-authorization request.",
      "Step 7: Aarogyasri Trust medical doctors approve the pre-authorization online.",
      "Step 8: Patient receives 100% cashless medical and surgical care, diagnostic tests, and food.",
      "Step 9: At discharge, patient receives 10 days of free medicines and free transportation allowance."
    ],
    offlineProcess: "Walk into any government district hospital, area hospital, or empanelled private super-speciality hospital with your White Ration Card. The Aarogya Mithra at the hospital counter will verify your eligibility on the spot.",
    commonMistakes: [
      "Visiting a hospital that is not empanelled under Aarogyasri: Check empanelled hospital list on aarogyasri.telangana.gov.in before visiting.",
      "Paying cash for diagnostics: All diagnostics, lab tests, and imaging for covered therapies are strictly cashless."
    ],
    deadlineInfo: "Continuous rolling coverage. Operates 365 days a year.",
    openingDate: "Continuous year-round service",
    processingTime: "Emergency pre-authorization approved within 2 hours; elective cases within 12 hours.",
    renewalRequired: "Auto-renews every year on 1st April.",
    trackingProcedure: "Call 104 or visit aarogyasri.telangana.gov.in to check case sheet and approval status.",
    correctionProcedure: "Add family members to your Food Security Card at the nearest MeeSeva centre.",
    disbursementMethod: "100% Cashless Hospital Settlement by Aarogyasri Health Care Trust",
    disbursementDetails: "All costs are settled directly by the Aarogyasri Health Care Trust into the network hospital's bank account. Patients do not pay any cash.",
    faqs: [
      { q: "What is the maximum coverage under Telangana Aarogyasri?", a: "In December 2023, the Telangana Government enhanced the Aarogyasri coverage limit to ₹10,00,000 (Ten Lakh Rupees) per family per year." },
      { q: "Who is an Aarogya Mithra?", a: "Aarogya Mithras are dedicated patient facilitators stationed at all empanelled hospitals to help beneficiaries register, undergo evaluation, and receive cashless care." },
      { q: "Does Aarogyasri cover post-discharge medicines?", a: "Yes. The hospital is mandated to provide 10 days of free take-home medicines upon discharge, as well as a transport allowance." },
      { q: "Can I receive treatment in Hyderabad if my card is from a rural district?", a: "Yes. Aarogyasri is valid across all empanelled hospitals in Hyderabad and every district of Telangana." },
      { q: "Are emergency trauma and accident cases covered?", a: "Yes, polytrauma and severe road traffic accident injuries are covered under emergency pre-authorization." },
      { q: "What should I do if a private hospital refuses my card?", a: "Immediately dial the 24/7 Aarogyasri Toll-Free Helpline at 104 or 1800-599-4455." }
    ],
    helpline: "Aarogyasri Toll-Free: 104 or 1800-599-4455",
    email: "aarogyasri-ts@telangana.gov.in"
  },

  "udid": {
    launchYear: 2016,
    purpose: "The Unique Disability ID (UDID) project, implemented by the Department of Empowerment of Persons with Disabilities, Ministry of Social Justice and Empowerment, creates a national single-window digital identification system for Persons with Disabilities (PwDs). It eliminates the burden of carrying multiple state and medical certificates and ensures transparent delivery of all central and state welfare benefits.",
    targetBeneficiary: "All Persons with Disabilities (PwDs) across India, covering all 21 disabilities benchmarked under the Rights of Persons with Disabilities (RPwD) Act 2016.",
    benefits: "A single tamper-proof Smart Card with a unique 18-digit ID and QR code, valid nationwide across all central ministries, state departments, and transport authorities. Serves as universal proof of disability for reservations, rail/bus fare concessions, pensions, assistive device distributions (ADIP), scholarships, and income tax rebates (80U).",
    financialBenefit: "Universal single identity card unlocking rail/bus fare concessions (up to 75%), monthly disability pensions, and free aids & appliances",
    benefitFrequency: "Permanent smart card (or valid for specified medical renewal period)",
    impact: "Eliminates duplicate paperwork, ends harassment of disabled citizens, ensures nationwide acceptance of disability status across states, and tracks government entitlement delivery.",
    detailedEligibility: {
      ageRequirement: "All ages (from newborn infants to senior citizens).",
      genderRequirement: "All genders eligible.",
      incomeLimit: "NO income restriction for obtaining UDID card.",
      educationRequirement: "None.",
      occupationRequirement: "Any.",
      casteCategoryRequirement: "All categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Issued to individual Person with Disability."
    },
    mandatoryConditions: [
      "Must have a diagnosed benchmark disability of 40% or more as assessed by a Competent Medical Board",
      "Must be assessed under one of the 21 disabilities specified under RPwD Act 2016 (e.g. Locomotor, Blindness, Low Vision, Hearing Impairment, Speech & Language, Mental Illness, Autism, Cerebral Palsy, Multiple Sclerosis, Thalassemia, Sickle Cell, etc.)",
      "Must undergo physical assessment at designated District Hospital Medical Authority"
    ],
    conditionalRequirements: [
      "Temporary disability cards require reassessment upon expiry; permanent disabilities receive lifetime cards."
    ],
    ineligibility: [
      "Persons with disability level assessed under 40% (unless specific partial state concession rules apply)",
      "Conditions not recognized under the Rights of Persons with Disabilities Act 2016",
      "Fraudulent or forged medical documents"
    ],
    documents: [
      {
        name: "Existing Medical Disability Certificate (if already issued)",
        why: "To facilitate expedited medical verification.",
        mandatory: false,
        issuingAuthority: "District Medical Board / Chief Medical Officer (CMO)",
        format: "Original or scanned copy",
        validity: "Valid"
      },
      {
        name: "Aadhaar Card",
        why: "Identity and address proof.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Recent Passport Size Photograph",
        why: "Printed on physical Smart UDID Card.",
        mandatory: true,
        issuingAuthority: "Self",
        format: "Digital photograph (JPG format 15KB - 100KB)",
        validity: "Recent"
      },
      {
        name: "Signature or Thumb Impression",
        why: "Printed on UDID Card for authentication.",
        mandatory: true,
        issuingAuthority: "Self",
        format: "Scanned image on white background (JPG 3KB - 30KB)",
        validity: "Current"
      }
    ],
    applicationMode: "Online via swavlambancard.gov.in or through nearest CSC / District Hospital",
    process: [
      "Step 1: Visit the official portal swavlambancard.gov.in and click 'Apply for Disability Certificate & UDID Card'.",
      "Step 2: Enter Personal Details (Name, Father's Name, Date of Birth, Gender, Mobile Number, Category).",
      "Step 3: Enter Address for correspondence and upload Aadhaar card as address proof.",
      "Step 4: Enter Disability Details: Choose disability type from the 21 listed categories, hospital where assessed, and whether you hold an existing certificate.",
      "Step 5: Upload your passport photo and signature/thumb impression.",
      "Step 6: Submit application. An Enrolment Number / Application ID is generated.",
      "Step 7: The portal assigns your application to your District Hospital / CMO Medical Board.",
      "Step 8: Visit the District Hospital on the scheduled medical board day for physical examination.",
      "Step 9: Medical Board assesses disability percentage and inputs findings into the portal.",
      "Step 10: CMO digitally signs the certificate. Download the digital e-UDID card immediately, and the laminated plastic Smart Card is dispatched to your postal address via India Post."
    ],
    offlineProcess: "Visit the Chief Medical Officer (CMO) office or Disability Welfare Counter at your District Civil Hospital. They will assist with registration, conduct the clinical assessment during the weekly Medical Board sitting, and upload the report to the Swavlamban portal.",
    commonMistakes: [
      "Missing the Medical Board appointment: Track your SMS notification for the assigned hospital assessment date.",
      "Unclear photograph/signature: Leads to application rejection by the verification officer.",
      "Not knowing about temporary vs permanent cards: Progressive/corrective disabilities are given temporary cards (e.g. 5 years), whereas irreversible amputations or blindness receive permanent lifetime cards."
    ],
    deadlineInfo: "Permanent national portal. Applications are accepted year-round.",
    openingDate: "Continuous year-round service",
    processingTime: "Usually 30 to 45 working days from medical board examination to card dispatch.",
    renewalRequired: "Permanent cards require no renewal. Temporary cards must be renewed 3 months before expiry.",
    trackingProcedure: "Click 'Track Your Application Status' on swavlambancard.gov.in and enter your Enrolment/Application number.",
    correctionProcedure: "Use the 'Update Profile' or 'Surrender / Re-assessment' feature on the portal with updated medical records.",
    disbursementMethod: "Physical Laminated Smart Card Delivered via India Post Speed Post",
    disbursementDetails: "Once approved by the CMO, the Department of Empowerment of Persons with Disabilities prints a plastic chip-embedded card and dispatches it directly to the beneficiary's home address through Speed Post free of charge. The digital e-UDID PDF can be downloaded immediately.",
    faqs: [
      { q: "Is the UDID card valid in all states across India?", a: "Yes. The UDID card is a national document issued by the Central Government and is recognized across all states, union territories, Indian Railways, and state transport undertakings." },
      { q: "How many disabilities are covered under the UDID scheme?", a: "All 21 disabilities specified under the Rights of Persons with Disabilities (RPwD) Act 2016 are covered, including locomotor disability, visual impairment, hearing impairment, mental illness, autism, intellectual disability, and chronic neurological conditions." },
      { q: "Does the UDID card cost any money?", a: "No. The UDID application, medical board assessment at government hospitals, and delivery of the plastic card are 100% free." },
      { q: "Can I get railway travel concessions with a UDID card?", a: "Yes. Indian Railways has integrated the UDID number into its e-ticketing system, allowing online booking of concessional tickets on IRCTC without visiting railway counters." },
      { q: "What should I do if my physical card is lost?", a: "You can download the digital e-UDID card anytime from swavlambancard.gov.in or apply for a duplicate replacement card on the portal." },
      { q: "Can an existing state disability certificate holder apply?", a: "Yes. While applying, select 'Have Disability Certificate', enter your old certificate details, and upload a copy. The medical board will verify and convert it to a national UDID." }
    ],
    helpline: "UDID National Toll-Free: 011-24365019 / 1800-180-5122",
    email: "disability-udid@gov.in"
  },

  "igndps": {
    launchYear: 2009,
    purpose: "Indira Gandhi National Disability Pension Scheme (IGNDPS), under the National Social Assistance Programme (NSAP) of the Ministry of Rural Development, provides unconditional monthly financial security to destitute persons with severe or multiple disabilities belonging to BPL households.",
    targetBeneficiary: "Persons with severe disabilities (80% disability or higher / multiple disabilities) aged 18 to 79 years belonging to Below Poverty Line (BPL) families.",
    benefits: "Monthly pension of ₹300 per month from the Central Government, significantly enhanced by state government top-ups (e.g. ₹1,000 to ₹3,000+ per month depending on the state, such as ₹2,000 in Karnataka, ₹1,500 in Maharashtra, ₹1,500 in Tamil Nadu). Beneficiaries who reach 80 years transition automatically to the Indira Gandhi Old Age Pension.",
    financialBenefit: "Monthly pension of ₹1,000 to ₹3,000+ (combined central + state contribution transferred via monthly DBT)",
    benefitFrequency: "Monthly direct bank transfer",
    impact: "Provides basic economic dignity, independence, and nutritional support to individuals with severe disabilities who cannot engage in full-time employment.",
    detailedEligibility: {
      ageRequirement: "18 to 79 years of age.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Must belong to a household listed in the national BPL database / SECC.",
      educationRequirement: "None.",
      occupationRequirement: "None (disabled individuals with no steady gainful livelihood).",
      casteCategoryRequirement: "All categories (General, SC, ST, OBC).",
      residenceRequirement: "Resident of India.",
      familyConditions: "BPL household qualification."
    },
    mandatoryConditions: [
      "Must be aged 18 years or older but below 80 years",
      "Disability percentage must be 80% or higher (severe disability) or multiple disabilities certified by a Competent Medical Authority",
      "Family must be classified as Below Poverty Line (BPL) as per central/state guidelines"
    ],
    conditionalRequirements: [
      "Must maintain an individual Aadhaar-seeded bank or post office savings account."
    ],
    ineligibility: [
      "Persons with disability degree less than 80% (unless covered under separate state disability pension rules with lower thresholds)",
      "Persons from non-BPL families",
      "Individuals already receiving disability pension from other government or institutional sources",
      "Minors below 18 years of age"
    ],
    documents: [
      {
        name: "Disability Certificate / UDID Card showing 80%+ Disability",
        why: "Confirms severity meets the mandatory 80% benchmark under NSAP.",
        mandatory: true,
        issuingAuthority: "District Medical Board / CMO",
        format: "Original Disability Certificate or UDID Card",
        validity: "Permanent or valid temporary certificate"
      },
      {
        name: "BPL Ration Card / BPL Certificate",
        why: "Verifies Below Poverty Line economic status.",
        mandatory: true,
        issuingAuthority: "Taluk / Block Development Office / Food & Supplies",
        format: "Original / Certified copy",
        validity: "Current"
      },
      {
        name: "Aadhaar Card",
        why: "Identity verification and DBT seeding.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original / e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Bank Passbook Copy (Aadhaar-Seeded)",
        why: "For receiving monthly pension credit.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office",
        format: "Clear copy with IFSC and Account Number",
        validity: "Active account"
      }
    ],
    applicationMode: "Offline at Block Development Office (BDO) / Municipal Office or Online via State Social Welfare / NSAP Portal",
    process: [
      "Step 1: Obtain the NSAP IGNDPS application form from your local Block Development Office (BDO) or Gram Panchayat.",
      "Step 2: Fill in applicant's personal details, BPL household number, and Aadhaar number.",
      "Step 3: Attach verified copies of: 80%+ Disability Certificate/UDID Card, BPL Card, Aadhaar, and Bank Passbook.",
      "Step 4: Submit to the Gram Panchayat Secretary (rural) or Municipal Ward Officer (urban).",
      "Step 5: Village level social welfare committee / Panchayat verifies BPL status and disability records.",
      "Step 6: The Sub-Divisional Magistrate (SDM) / Taluk Social Welfare Officer sanctions the pension order.",
      "Step 7: Pension is enrolled into the central NSAP-PPS / PFMS system.",
      "Step 8: Monthly pension is credited directly to the beneficiary's bank/post office account on a fixed date every month."
    ],
    offlineProcess: "Visit your local Gram Panchayat Secretary, Block Development Office (BDO), or Taluk Tahsildar Social Security counter. PwDs with mobility challenges can have their parent/guardian submit the file with an authorization letter.",
    commonMistakes: [
      "Disability certificate showing less than 80%: Central IGNDPS strictly requires 80%+ disability (though many states offer state-funded pensions for 40%+–79%, ensure you are mapped to the correct category).",
      "Bank account not active: Dormant bank accounts cause monthly pension credits to bounce back to the treasury."
    ],
    deadlineInfo: "Open throughout the year. Applications are verified and sanctioned monthly.",
    openingDate: "Continuous year-round service",
    processingTime: "45 to 60 days from application submission to first pension disbursement.",
    renewalRequired: "Annual life certificate (Jeevan Pramaan) or physical verification through local Panchayat/bank once a year.",
    trackingProcedure: "Visit nsap.nic.in, click 'Beneficiary Search' and enter your State, District, and Application Number or Mobile number.",
    correctionProcedure: "Visit the Block Social Welfare Officer to update bank account or address.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Savings Bank Account / Post Office Account",
    disbursementDetails: "Disbursed monthly via PFMS/DBT directly into the beneficiary's Aadhaar-seeded bank account or post office account on the 1st week of each month.",
    faqs: [
      { q: "What is the minimum disability percentage required for IGNDPS?", a: "Under Central NSAP guidelines, the applicant must have 80% or higher disability (severe disability) or multiple disabilities. However, several state governments have their own state schemes that cover persons with 40% to 79% disability." },
      { q: "How much pension will I actually receive?", a: "While the central contribution is ₹300, most state governments contribute a significant top-up, resulting in total monthly payments ranging between ₹1,000 and ₹3,000+ depending on your state." },
      { q: "What happens when a beneficiary turns 80 years old?", a: "Upon attaining 80 years of age, the beneficiary is automatically migrated to the Indira Gandhi National Old Age Pension Scheme (IGNOAPS) at the higher senior citizen rate." },
      { q: "Can a disabled person receive this pension if they live with their parents?", a: "Yes, as long as the household is categorized as Below Poverty Line (BPL)." },
      { q: "How do I submit my annual Life Certificate?", a: "You can submit a digital life certificate (Jeevan Pramaan) using facial authentication on an Android phone, at any CSC, or in person at your bank branch/Panchayat." },
      { q: "Can the pension be delivered at home if the person is bedridden?", a: "Yes, in many states, India Post Payments Bank (IPPB) postmen provide Doorstep Banking (AePS) to deliver cash directly to bedridden beneficiaries at home." }
    ],
    helpline: "NSAP National Toll-Free: 1800-111-555",
    email: "nsap-support@gov.in"
  }
};

