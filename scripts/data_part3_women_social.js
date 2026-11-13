// Part 3: Women and Child Welfare, Social Security, and Pensions
module.exports = {
  "pmuy": {
    launchYear: 2016,
    purpose: "Pradhan Mantri Ujjwala Yojana (PMUY), implemented by the Ministry of Petroleum and Natural Gas, provides clean cooking LPG connections to adult women from poor households, eliminating indoor air pollution caused by burning firewood and coal, safeguarding women's respiratory health, and empowering female heads of households.",
    targetBeneficiary: "Adult women (18+ years) belonging to poor and deprived households who do not have an existing LPG connection in their household.",
    benefits: "Free LPG connection with zero deposit fee: Government covers the security deposit of the 14.2 kg cylinder, pressure regulator, LPG hose pipe, domestic gas consumer card (DGCC booklet), and installation charges. Beneficiaries receive their first 14.2 kg LPG refill completely free along with a free two-burner gas stove (hotplate). In addition, beneficiaries receive an ongoing targeted central subsidy of ₹300 per refill (up to 12 refills per year) credited via DBT.",
    financialBenefit: "Free LPG connection worth ₹1,600 + Free first 14.2 kg refill + Free two-burner gas stove + ₹300 subsidy per refill via DBT",
    benefitFrequency: "One-time free connection kit + ongoing ₹300 per refill subsidy (up to 12 refills annually)",
    impact: "Prevents chronic obstructive pulmonary disease (COPD) and eye damage from kitchen smoke, saves millions of hours of firewood gathering for rural women, and enhances home safety.",
    detailedEligibility: {
      ageRequirement: "Must be an adult woman aged 18 years or older.",
      genderRequirement: "Strictly Female applicant only.",
      incomeLimit: "Must belong to Below Poverty Line (BPL) or eligible poor household categories under SECC 2011 / 14-point declaration.",
      educationRequirement: "None.",
      occupationRequirement: "Any (informal, agricultural, homemaker).",
      casteCategoryRequirement: "Priority for SC, ST, PM Awas Gramin, Antyodaya (AAY), Most Backward Classes, Tea garden tribes, and forest dwellers.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "No existing active LPG connection of any oil marketing company (IOCL, BPCL, HPCL) in the same household."
    },
    mandatoryConditions: [
      "Applicant must be an adult woman aged 18 years or older",
      "No other active domestic LPG connection must exist in the household across all family members listed on the Ration Card",
      "Must have an individual Aadhaar-seeded bank account for receiving ₹300 refill subsidy"
    ],
    conditionalRequirements: [
      "14-point self-declaration required for non-SECC poor households under Ujjwala 2.0."
    ],
    ineligibility: [
      "Households that already possess an active domestic LPG connection",
      "Male applicants",
      "Households where family members pay income tax or own four-wheelers"
    ],
    documents: [
      {
        name: "Aadhaar Card of Applicant Woman",
        why: "Identity and biometric e-KYC verification.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Ration Card / Family Composition Proof",
        why: "Verifies family members to ensure no duplicate LPG connections exist in the household.",
        mandatory: true,
        issuingAuthority: "State Food and Civil Supplies Department",
        format: "Original Ration Card",
        validity: "Active"
      },
      {
        name: "Aadhaar of All Adult Family Members Listed on Ration Card",
        why: "Mandatory de-duplication cross-check by Oil Marketing Companies.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Copies of Aadhaar cards",
        validity: "Permanent"
      },
      {
        name: "Bank Passbook Copy (Aadhaar-Seeded)",
        why: "For direct deposit of ₹300 subsidy per refill via PAHAL / DBT-L.",
        mandatory: true,
        issuingAuthority: "Scheduled Commercial / Rural Bank or Post Office",
        format: "Copy with Account Number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via pmuy.gov.in or Offline at any Indane, Bharatgas, or HP Gas distributorship",
    process: [
      "Step 1: Visit pmuy.gov.in or go directly to your nearest local Indane, Bharatgas, or HP Gas distributor.",
      "Step 2: Select 'Apply for New Ujjwala 2.0 Connection' and choose your preferred LPG distributor.",
      "Step 3: Fill in applicant's personal details, family members' names, and address.",
      "Step 4: Provide Aadhaar numbers of the applicant and all adult family members.",
      "Step 5: Provide bank details (Account number and IFSC) for subsidy transfer.",
      "Step 6: Submit application online or hand over the filled form at the gas agency.",
      "Step 7: Distributor conducts electronic de-duplication to verify no existing connection exists in your home.",
      "Step 8: Application is approved and subscription voucher (SV) is generated.",
      "Step 9: Visit the gas agency to collect your free LPG cylinder, regulator, safety hose pipe, two-burner stove, and passbook.",
      "Step 10: The gas agency technician delivers the setup to your kitchen and provides safety training."
    ],
    offlineProcess: "Walk into your local Indane, Bharat Gas, or HP Gas showroom. Collect the free Ujjwala 2.0 application form. Attach photocopies of your Ration Card, your Aadhaar, family Aadhaar cards, and bank passbook. The distributor will register your biometric e-KYC on the spot.",
    commonMistakes: [
      "Another family member already has a gas cylinder: Central LPG database detects existing connections in the household and rejects duplicate requests.",
      "Migrant workers without local address proof: Under Ujjwala 2.0, migrant families do NOT need local address proof; a simple self-declaration of address is accepted.",
      "Bank account not mapped to NPCI: Prevents crediting the ₹300 refill subsidy."
    ],
    deadlineInfo: "Universal ongoing scheme under Ujjwala 2.0. Applications are accepted year-round.",
    openingDate: "Continuous year-round service",
    processingTime: "Connection issued within 7 to 10 working days from document verification.",
    renewalRequired: "No renewal needed; cylinder refills can be booked by IVR/WhatsApp/mobile app anytime.",
    trackingProcedure: "Call your local LPG distributor or check status on mylpg.in using your reference number.",
    correctionProcedure: "Visit your gas distributor to update mobile numbers or bank accounts.",
    disbursementMethod: "Direct Physical Equipment Delivery at Gas Distributorship + Refill Subsidy via DBT (PAHAL)",
    disbursementDetails: "The cylinder, stove, and regulator are handed over physically at zero cost. When purchasing subsequent refills at market price, the ₹300 central subsidy is credited into the woman's bank account within 48 hours via PFMS/DBT.",
    faqs: [
      { q: "Is the first refill and gas stove really free?", a: "Yes! Under Ujjwala 2.0, the government provides the first 14.2 kg gas cylinder refill and a brand-new ISI-marked two-burner gas stove completely free of cost." },
      { q: "How much subsidy is credited per refill?", a: "Eligible Ujjwala beneficiaries receive a targeted subsidy of ₹300 per 14.2 kg cylinder directly in their bank account for up to 12 refills every financial year." },
      { q: "Can migrant workers living in rented rooms apply without local domicile?", a: "Yes! Ujjwala 2.0 has special provisions for migrant workers. You only need to submit a self-declaration for your family composition and current rented address." },
      { q: "Can men apply for PMUY?", a: "No. The scheme is specifically designed for women's empowerment; the gas connection is legally registered exclusively in the name of an adult female family member." },
      { q: "Can I choose between a 14.2 kg and a 5 kg cylinder?", a: "Yes. Beneficiaries can opt for either a standard 14.2 kg cylinder or a 5 kg double-cylinder connection for easier handling." },
      { q: "How do I book a refill after getting the connection?", a: "You can book a refill by giving a missed call to your gas company's designated number, via WhatsApp booking, using the Bharat/IndianOil/HP Pay app, or through UMANG." }
    ],
    helpline: "Ujjwala Toll-Free Helpline: 1800-266-6696 or 1906 (24/7 LPG Emergency)",
    email: "ujjwala-support@gov.in"
  },

  "pmmvy": {
    launchYear: 2017,
    purpose: "Pradhan Mantri Matru Vandana Yojana (PMMVY), under Mission Shakti of the Ministry of Women and Child Development, is a conditional maternity benefit scheme that provides direct financial compensation for wage loss during pregnancy and childbirth, improving maternal nutrition and encouraging institutional delivery and child immunization.",
    targetBeneficiary: "Pregnant women and lactating mothers (PW&LM) who are 19 years of age or older, for the birth of their first live child, with enhanced support for a second child if the baby is a girl.",
    benefits: "Direct financial cash assistance of ₹5,000 for the first child (disbursed in two installments: ₹3,000 upon pregnancy registration and at least one ANC; ₹2,000 upon birth registration and first cycle of vaccinations). For a second child, if the child is female, an enhanced incentive of ₹6,000 is paid in a single installment to promote the girl child.",
    financialBenefit: "₹5,000 for 1st child (in 2 instalments: ₹3,000 + ₹2,000); ₹6,000 in single instalment for 2nd child if girl",
    benefitFrequency: "Instalment-based milestone disbursement per pregnancy",
    impact: "Compensates wage loss, guarantees essential maternal nutrition during crucial gestational trimesters, and promotes survival and care of infant daughters.",
    detailedEligibility: {
      ageRequirement: "Pregnant woman must be 19 years of age or older at the time of conception.",
      genderRequirement: "Female (pregnant and lactating mothers).",
      incomeLimit: "Must belong to specified socially/economically disadvantaged categories (family income < ₹8 Lakh, or holder of EWS/BPL/e-Shram/MGNREGA/Kisan/Divyang/Pregnant AWW/AWH cards).",
      educationRequirement: "None.",
      occupationRequirement: "Informal, unorganized, agricultural, or homemaker.",
      casteCategoryRequirement: "Open to all categories meeting vulnerability criteria.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Covers 1st live birth; and 2nd child strictly if the baby born is female."
    },
    mandatoryConditions: [
      "Must register pregnancy at the local Anganwadi Centre (AWC) or approved health facility within 570 days of Last Menstrual Period (LMP)",
      "Mother must possess an individual bank account seeded with Aadhaar on the NPCI mapper",
      "Must complete mandatory Antenatal Check-up (ANC) and register infant birth with primary immunization (BCG, OPV, DPT, Hepatitis B)"
    ],
    conditionalRequirements: [
      "Birth certificate showing female sex required for claiming the ₹6,000 second child benefit."
    ],
    ineligibility: [
      "Women who are in regular employment with Central or State Government, PSUs, or other public undertakings",
      "Women who are in receipt of similar paid maternity benefits under any other legislation or company policy",
      "Conceptions occurring before the age of 19 years"
    ],
    documents: [
      {
        name: "Mother and Child Protection (MCP) Card",
        why: "Verifies LMP date, antenatal check-up (ANC) records, and child immunization schedule.",
        mandatory: true,
        issuingAuthority: "Anganwadi Worker / ANM / Primary Health Centre",
        format: "Original card record",
        validity: "Throughout pregnancy and infancy"
      },
      {
        name: "Aadhaar Card of Mother & Husband",
        why: "Identity verification and DBT processing.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or photocopies",
        validity: "Permanent"
      },
      {
        name: "Eligibility Vulnerability Proof (Any 1 of 11 approved categories)",
        why: "Confirms economic eligibility (Ration Card / e-Shram / PMJAY / Income Certificate < ₹8L / SC-ST / Divyang / MGNREGA Job Card).",
        mandatory: true,
        issuingAuthority: "Competent Authority",
        format: "Photocopy of qualifying document",
        validity: "Current"
      },
      {
        name: "Mother's Aadhaar-Seeded Bank Passbook",
        why: "For receiving direct DBT cash transfers.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      },
      {
        name: "Child Birth Certificate (for 2nd installment)",
        why: "Proves live birth and gender verification.",
        mandatory: true,
        issuingAuthority: "Municipal Corporation / Registrar of Births and Deaths",
        format: "Official Birth Certificate",
        validity: "Permanent"
      }
    ],
    applicationMode: "Online via PMMVY Citizen Portal (pmmvy.wcd.gov.in) or Offline via local Anganwadi Centre",
    process: [
      "Step 1: As soon as pregnancy is detected, register with your local Anganwadi Worker (AWW) or ASHA to receive your MCP Card.",
      "Step 2: Visit pmmvy.wcd.gov.in and click 'Citizen Login'.",
      "Step 3: Register using your Mobile Number and verify via OTP.",
      "Step 4: Select 'Data Entry' -> 'Beneficiary Registration'.",
      "Step 5: Fill in Mother's Name, Aadhaar, LMP date, MCP Card number, and Husband's Aadhaar.",
      "Step 6: Select your qualifying vulnerability category and upload the document.",
      "Step 7: Provide Mother's Aadhaar-seeded bank account details.",
      "Step 8: Submit Form 1A. First installment of ₹3,000 is credited following ANC verification.",
      "Step 9: After child delivery, log in to claim Form 1B: enter child's birth certificate and vaccination records.",
      "Step 10: Second installment of ₹2,000 (or ₹6,000 if 2nd girl child) is credited via PFMS."
    ],
    offlineProcess: "Visit your local Anganwadi Centre. Hand over photocopies of your MCP Card, Aadhaar, Bank Passbook, and eligibility proof to the Anganwadi Worker. She will enter your details on the PMMVY Soft portal free of charge.",
    commonMistakes: [
      "Providing husband's bank account: The law strictly mandates that payments must be made ONLY to the mother's individual bank account.",
      "Missing the 570-day LMP registration limit: Registration must occur within 570 days from the Last Menstrual Period date.",
      "Bank account not mapped on NPCI: Causes failure of DBT cash transfer."
    ],
    deadlineInfo: "Registration must occur within 570 days of LMP date for 1st installment; within 270 days of birth for 2nd installment.",
    openingDate: "Continuous year-round service",
    processingTime: "Payment disbursed within 30 to 45 days of milestone verification.",
    renewalRequired: "Applicable per qualifying pregnancy; no renewal.",
    trackingProcedure: "Track application status on pmmvy.wcd.gov.in using beneficiary Aadhaar or mobile number.",
    correctionProcedure: "Anganwadi worker or CDPO officer can edit rejected forms on the portal.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Mother's Bank Account via PFMS and NPCI",
    disbursementDetails: "Funds are deposited in two milestone installments directly into the mother's Aadhaar-linked savings account.",
    faqs: [
      { q: "Can I receive benefits for a second child under PMMVY?", a: "Under PMMVY 2.0, a mother receives a special enhanced benefit of ₹6,000 in a single installment for a second child, provided the baby born is a girl child." },
      { q: "Can PMMVY and JSY benefits be taken together?", a: "Yes! A woman delivering her first child in a government hospital receives ₹5,000 from PMMVY PLUS ₹1,400 from JSY, making total cash assistance ₹6,400." },
      { q: "What if a woman conceives before 19 years of age?", a: "To discourage early teenage pregnancies, the scheme strictly mandates that the mother must be 19 years or older at conception." },
      { q: "Do I need an income certificate to apply?", a: "Not necessarily. Any 1 of 11 proofs (e-Shram card, MGNREGA job card, PM-JAY card, BPL card, SC/ST certificate, or income certificate < ₹8 Lakh) is accepted." },
      { q: "What should I do if my first installment has not arrived?", a: "Check your Aadhaar seeding status with your bank and inquire with your local Child Development Project Officer (CDPO)." },
      { q: "Is the benefit paid if the child is stillborn?", a: "If an eligible mother receives the 1st installment but experiences a stillbirth, she remains eligible for the 2nd installment upon a subsequent pregnancy." }
    ],
    helpline: "PMMVY National Helpline: 011-23382393 or Women Helpline 1098 / 181",
    email: "pmmvy-wcd@nic.in"
  },

  "sukanya-samriddhi": {
    launchYear: 2015,
    purpose: "Sukanya Samriddhi Yojana (SSY), launched under the 'Beti Bachao Beti Padhao' campaign by the Ministry of Finance, is a sovereign government-backed high-interest savings scheme designed to build an independent financial corpus for the higher education and marriage of the girl child.",
    targetBeneficiary: "Parents or legal guardians of a girl child from her birth up to the age of 10 years.",
    benefits: "Offers one of the highest government-guaranteed interest rates (currently 8.2% per annum, compounded annually) with sovereign safety. Complete 'EEE' (Exempt-Exempt-Exempt) tax benefit under Section 80C. Up to 50% withdrawal permitted for higher education once the girl turns 18, and full maturity corpus with compound interest handed over when the account matures after 21 years.",
    financialBenefit: "High 8.2% annual compound interest + Complete Section 80C tax exemption on deposit, interest, and maturity",
    benefitFrequency: "Flexible annual deposits (Minimum ₹250 to Maximum ₹1,50,000 per financial year) for 15 years",
    impact: "Builds financial independence for daughters, secures funds for higher professional college degrees, and eliminates reliance on commercial education loans.",
    detailedEligibility: {
      ageRequirement: "Girl child must be below 10 years of age at the time of account opening.",
      genderRequirement: "Girl child only.",
      incomeLimit: "NO family income limit (open to all economic strata).",
      educationRequirement: "None.",
      occupationRequirement: "None.",
      casteCategoryRequirement: "Open to all castes and religions.",
      residenceRequirement: "Resident Indian citizen (account closes if girl gains non-resident NRI status).",
      familyConditions: "Maximum of two accounts per family (one for each girl child; exception permitted for triplets/twins)."
    },
    mandatoryConditions: [
      "Account can only be opened by the natural or legal guardian in the name of a girl child below 10 years",
      "Minimum deposit of ₹250 per financial year is mandatory to keep the account active",
      "Maximum deposit of ₹1,50,000 per financial year across the account"
    ],
    conditionalRequirements: [
      "Medical birth certificate proving twin/triplet girl births required to open more than two accounts."
    ],
    ineligibility: [
      "Boys",
      "Girl children who have already attained 10 years of age",
      "Non-Resident Indians (NRIs) or foreign citizens",
      "Opening more than one account in the name of the same girl child"
    ],
    documents: [
      {
        name: "Birth Certificate of Girl Child",
        why: "Confirms age is below 10 years and verifies legal parentage.",
        mandatory: true,
        issuingAuthority: "Registrar of Births and Deaths / Municipal Authority",
        format: "Original + self-attested photocopy",
        validity: "Permanent"
      },
      {
        name: "Aadhaar Card & PAN Card of Parent / Guardian",
        why: "Guardian KYC verification for account opening.",
        mandatory: true,
        issuingAuthority: "UIDAI / Income Tax Department",
        format: "Originals + photocopies",
        validity: "Permanent"
      },
      {
        name: "Aadhaar Card of Girl Child (if available)",
        why: "Biometric identification of child.",
        mandatory: false,
        issuingAuthority: "UIDAI",
        format: "Aadhaar copy",
        validity: "Permanent"
      },
      {
        name: "Address Proof of Guardian",
        why: "KYC compliance for post office or bank account.",
        mandatory: true,
        issuingAuthority: "Electricity Bill / Passport / Voter ID / Ration Card",
        format: "Photocopy with original for verification",
        validity: "Recent within 3 months"
      }
    ],
    applicationMode: "Offline at any Post Office or authorized Public/Private Sector Bank branch",
    process: [
      "Step 1: Visit any Post Office branch or authorized commercial bank (SBI, PNB, BoB, Canara, HDFC, ICICI, etc.).",
      "Step 2: Collect and fill out the Sukanya Samriddhi Account Opening Form (Form-1).",
      "Step 3: Provide girl child's details (Name, Date of Birth, Birth Certificate Number).",
      "Step 4: Provide parent/guardian KYC details (Aadhaar, PAN, residential address).",
      "Step 5: Attach verified copies of child's Birth Certificate and guardian's KYC documents.",
      "Step 6: Pay the initial opening deposit (minimum ₹250) in cash, cheque, or demand draft.",
      "Step 7: The post office/bank generates the SSY account and issues a dedicated passbook.",
      "Step 8: Deposit funds anytime (minimum ₹250, maximum ₹1,50,000 per year) via cash, cheque, or net banking / IPPB app.",
      "Step 9: Continue deposits for 15 years from account opening date.",
      "Step 10: At age 18, withdraw up to 50% for college fees, or withdraw the entire matured amount tax-free after 21 years."
    ],
    offlineProcess: "Walk into your local Post Office or commercial bank branch. Hand over the completed Form-1, birth certificate of your daughter, your Aadhaar, PAN card, and initial deposit of ₹250. You will receive an official Sukanya Samriddhi passbook within 1 to 2 days.",
    commonMistakes: [
      "Failing to deposit the minimum ₹250 in a financial year: Causes the account to become 'defaulted'; can be revived by paying a ₹50 penalty plus ₹250 arrears.",
      "Depositing more than ₹1,50,000 in a year: Any excess deposit beyond ₹1.5 Lakh does not earn interest and is returned to the depositor.",
      "Opening account after 10th birthday: The cut-off age is strictly 10 years on the date of application."
    ],
    deadlineInfo: "Can be opened anytime before the girl child turns 10 years old.",
    openingDate: "Continuous year-round service",
    processingTime: "Account opened and passbook issued within 24 to 48 hours.",
    renewalRequired: "Must deposit at least ₹250 every financial year for 15 years.",
    trackingProcedure: "Link SSY account to internet banking / mobile banking or update your passbook at the post office.",
    correctionProcedure: "Submit an account transfer request to move your SSY account to any post office or bank branch in India.",
    disbursementMethod: "Maturity Proceeds Credited Directly to Girl Child's Bank Account",
    disbursementDetails: "Upon maturity after 21 years (or marriage after 18), the entire accumulated principal and compounded interest are paid directly to the girl child via account-payee cheque or electronic transfer.",
    faqs: [
      { q: "What is the current interest rate on Sukanya Samriddhi Yojana?", a: "The Government of India offers an attractive 8.2% annual compound interest rate (reviewed quarterly by the Ministry of Finance)." },
      { q: "For how many years do I need to deposit money?", a: "Deposits must be made for 15 years from the date of account opening. The account continues to earn interest until maturity (21 years from opening) even without fresh deposits from years 16 to 21." },
      { q: "Can I withdraw money before 21 years?", a: "Yes. Once the girl child turns 18 years old or passes Class 10, partial withdrawal up to 50% of the account balance is permitted specifically for higher education admission fees." },
      { q: "Is the maturity amount taxable?", a: "No! Sukanya Samriddhi has 'EEE' (Exempt-Exempt-Exempt) status. The annual deposit qualifies for Section 80C rebate, the interest earned is 100% tax-free, and the final maturity amount is completely exempt from income tax." },
      { q: "Can I transfer the account if I relocate to another city?", a: "Yes. SSY accounts can be transferred free of charge anywhere in India from one Post Office to another, or between post offices and banks." },
      { q: "What happens if the girl gets married before 21 years?", a: "The account can be closed early upon marriage, provided the girl has attained 18 years of age at the time of marriage." }
    ],
    helpline: "India Post Helpdesk: 1800-266-6868",
    email: "ssy-support@indiapost.gov.in"
  },

  "karnataka-gruha-lakshmi": {
    launchYear: 2023,
    purpose: "Gruha Lakshmi is the flagship gender equity initiative of the Government of Karnataka, guaranteeing direct monthly financial autonomy of ₹2,000 to the woman head of household in every eligible family in Karnataka, recognizing unpaid domestic labor and shielding families from inflation.",
    targetBeneficiary: "Woman head of household listed on Antyodaya (AAY), Priority Household (BPL), or Non-Priority Household (APL) ration cards in Karnataka.",
    benefits: "Direct financial assistance of ₹2,000 per month transferred directly into the woman head of household's Aadhaar-seeded bank account via Direct Benefit Transfer (DBT) on a monthly basis.",
    financialBenefit: "₹2,000 per month (₹24,000 per year) directly credited via DBT",
    benefitFrequency: "Monthly direct bank transfer",
    impact: "Provides financial independence to over 1.15 crore women in Karnataka, supports household nutrition, children's school expenses, and emergency medical savings.",
    detailedEligibility: {
      ageRequirement: "Adult woman (18+ years) recognized as head of household on Ration Card.",
      genderRequirement: "Strictly Female head of household.",
      incomeLimit: "Neither the woman nor her husband should be an income tax payer or GST payer.",
      educationRequirement: "None.",
      occupationRequirement: "Homemaker, informal worker, agricultural laborer, etc.",
      casteCategoryRequirement: "Open to all categories in Karnataka.",
      residenceRequirement: "Resident of Karnataka.",
      familyConditions: "Only one woman per household (the designated head of family on the ration card)."
    },
    mandatoryConditions: [
      "Must be designated as the 'Yajamani' (Head of Family) on a Karnataka BPL, AAY, or APL Ration Card",
      "Neither the woman applicant nor her husband can be paying income tax (ITR) or Goods and Services Tax (GST)",
      "Bank account of the woman must be active and linked to Aadhaar for NPCI DBT"
    ],
    conditionalRequirements: [
      "If ration card shows a male head, the family must update the woman as head of household at Food & Civil Supplies before applying."
    ],
    ineligibility: [
      "Women who pay income tax or file ITR",
      "Women whose husbands pay income tax or file ITR",
      "Women or husbands registered as GST taxpayers",
      "Government employees or pensioners receiving government pension"
    ],
    documents: [
      {
        name: "Karnataka Ration Card (BPL / AAY / APL)",
        why: "Verifies designated woman head of household.",
        mandatory: true,
        issuingAuthority: "Food and Civil Supplies Department, Karnataka",
        format: "Ration Card RC number",
        validity: "Active"
      },
      {
        name: "Aadhaar Card of Woman Beneficiary",
        why: "Identity and biometric e-KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Husband's Aadhaar Card",
        why: "Required for automated IT/GST taxpayer exclusion check.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Aadhaar number",
        validity: "Permanent"
      },
      {
        name: "Aadhaar-Seeded Bank Passbook Copy",
        why: "For receiving ₹2,000 monthly DBT transfer.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via Seva Sindhu (sevasindhugs.karnataka.gov.in) & In-Person at Grama One, Karnataka One, or Bangalore One",
    process: [
      "Step 1: Check your Ration Card to confirm you are designated as the woman head of household.",
      "Step 2: Visit your local Grama One (rural), Karnataka One / Bangalore One (urban), or Bapuji Seva Kendra.",
      "Step 3: Hand over your Ration Card number, your Aadhaar, and your husband's Aadhaar to the operator.",
      "Step 4: The system checks your details against the Food Department, Income Tax, and GST databases.",
      "Step 5: Perform biometric fingerprint or OTP authentication.",
      "Step 6: The operator submits your application on the Seva Sindhu portal free of charge.",
      "Step 7: Collect the computerized Sanction Acknowledgement Slip with your Application Number.",
      "Step 8: Once approved, ₹2,00,000 monthly benefit is credited directly into your Aadhaar-seeded bank account.",
      "Step 9: Receive SMS confirmation from Karnataka DBT portal every month upon credit."
    ],
    offlineProcess: "Visit your nearest Grama One or Karnataka One centre. Registration is 100% free of charge. Women can also send an SMS with their Ration Card number to 1902 to know their assigned appointment slot.",
    commonMistakes: [
      "Husband filing income tax: If the husband files an ITR or pays GST, the automated state verification system rejects the application.",
      "Bank account not mapped on NPCI: The payment will bounce if the woman's bank account has not completed the Aadhaar DBT mandate.",
      "Male listed as head on ration card: Must update the woman as head of family first."
    ],
    deadlineInfo: "Continuous enrollment scheme. Enrolment is permanently open without deadlines.",
    openingDate: "Continuous year-round service",
    processingTime: "Approved within 15 to 30 days; payment credited in the next monthly payment cycle.",
    renewalRequired: "No renewal needed; monthly payments continue automatically.",
    trackingProcedure: "Download the 'Karnataka DBT' app from Google Play Store or visit sevasindhugs.karnataka.gov.in to view payment history.",
    correctionProcedure: "Visit your local Grama One centre or bank to update Aadhaar seeding status if payments fail.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Woman's Bank Account via Karnataka State DBT Portal",
    disbursementDetails: "Government of Karnataka deposits ₹2,000 on a fixed monthly date directly into the beneficiary woman's Aadhaar Payment Bridge (APB) account.",
    faqs: [
      { q: "Is Gruha Lakshmi only for BPL families?", a: "No! Gruha Lakshmi covers BPL, Antyodaya (AAY), AND APL (Above Poverty Line) cardholders, provided the woman and her husband are not income tax or GST payers." },
      { q: "What should I do if my application was approved but no money came?", a: "Download the 'Karnataka DBT' mobile app, log in with your Aadhaar, and check the reason. Over 95% of payment failures are due to the bank account not being seeded with Aadhaar on the NPCI server." },
      { q: "Can an unmarried or single woman receive Gruha Lakshmi?", a: "Yes, if an unmarried, widowed, or divorced woman is listed as the head of the household on her ration card, she is fully eligible." },
      { q: "How much fee is charged at Grama One for registration?", a: "Registration for Gruha Lakshmi at Grama One, Karnataka One, and Bangalore One is completely FREE. No operator can charge any fee." },
      { q: "Can a family receive both Gruha Lakshmi and Anna Bhagya?", a: "Yes! Gruha Lakshmi (₹2,000/month) and Anna Bhagya (free rice/DBT cash for food) are complementary guarantee schemes and families can receive both." },
      { q: "Can I receive the money in a post office account?", a: "Yes! India Post Payments Bank (IPPB) accounts with Aadhaar seeding are fully supported and often provide faster DBT credits." }
    ],
    helpline: "Gruha Lakshmi Karnataka Helpline: 1902 or 080-22279954",
    email: "gruhalakshmi-support@karnataka.gov.in"
  },

  "tn-kmut": {
    launchYear: 2023,
    purpose: "Kalaignar Magalir Urimai Thogai (KMUT) Scheme, launched by the Government of Tamil Nadu, provides monthly rights-based financial support of ₹1,000 to women heads of eligible households in Tamil Nadu, recognizing women's invisible unpaid domestic labor and improving their economic independence.",
    targetBeneficiary: "Eligible women heads of families in Tamil Nadu aged 21 years and older meeting basic economic livelihood criteria.",
    benefits: "Direct unconditional financial transfer of ₹1,000 per month credited directly into the woman's Aadhaar-seeded bank account on the 15th of every month.",
    financialBenefit: "₹1,000 per month (₹12,000 per year) directly credited via monthly DBT",
    benefitFrequency: "Monthly direct bank transfer",
    impact: "Empowered over 1.15 crore women in Tamil Nadu to manage household emergencies, support children's nutritional needs, and build personal savings.",
    detailedEligibility: {
      ageRequirement: "Must have completed 21 years of age.",
      genderRequirement: "Female head of family.",
      incomeLimit: "Annual family income must be less than ₹2,50,000 per annum.",
      educationRequirement: "None.",
      occupationRequirement: "Informal laborers, agricultural workers, domestic helpers, self-employed women, and homemakers.",
      casteCategoryRequirement: "Open to all castes and categories residing in Tamil Nadu.",
      residenceRequirement: "Resident of Tamil Nadu with active Smart Ration Card.",
      familyConditions: "Family land holding must be below 5 acres wetland or 10 acres dry land; domestic electricity consumption must be below 3,600 units per year."
    },
    mandatoryConditions: [
      "Must be an adult woman aged 21 years or older",
      "Family annual income must not exceed ₹2,50,000",
      "Family must not own four-wheeler (except commercial taxi, auto, or agricultural tractor)",
      "Domestic household electricity consumption must be below 3,600 units annually",
      "Must possess active Smart Family Ration Card in Tamil Nadu"
    ],
    conditionalRequirements: [
      "In families where a male is listed as head on the Smart Card, the wife is treated as the woman head of household."
    ],
    ineligibility: [
      "Families with annual income exceeding ₹2,50,000",
      "Families where any member pays income tax or professional tax",
      "Central or State Government employees, public sector employees, bank employees, and pensioners",
      "Elected representatives (MPs, MLAs, Panchayat Presidents, Municipal Councillors)",
      "Families owning four-wheelers for personal use"
    ],
    documents: [
      {
        name: "Tamil Nadu Smart Family Card (Ration Card)",
        why: "Confirms family composition and residency in Tamil Nadu.",
        mandatory: true,
        issuingAuthority: "Civil Supplies Department, Tamil Nadu",
        format: "Smart Ration Card",
        validity: "Active"
      },
      {
        name: "Aadhaar Card of Applicant Woman",
        why: "Identity verification and biometric e-KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Electricity Consumer Connection Number (EB Card)",
        why: "Verifies annual electricity consumption is below 3,600 units.",
        mandatory: true,
        issuingAuthority: "TANGEDCO (Tamil Nadu Electricity Board)",
        format: "Electricity bill / consumer number",
        validity: "Current"
      },
      {
        name: "Bank Passbook Copy (Aadhaar-Seeded)",
        why: "For receiving ₹1,000 monthly credit on the 15th of each month.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Special Application Camps at Fair Price Shops & e-Sevai Centres across Tamil Nadu",
    process: [
      "Step 1: Receive application token and form distributed at your doorstep by your local Fair Price Shop ration dealer.",
      "Step 2: Attend the designated KMUT Registration Camp on your specified token date and time.",
      "Step 3: Submit the filled application along with your Smart Ration Card, Aadhaar, and EB Consumer Number.",
      "Step 4: The camp volunteer enters your details into the official KMUT mobile app.",
      "Step 5: Perform biometric fingerprint authentication.",
      "Step 6: An automated SMS confirmation with Application ID is sent to your mobile phone.",
      "Step 7: Revenue authorities perform automated cross-verification with TANGEDCO, Land Records, and Income Tax databases.",
      "Step 8: Once approved, ₹1,000 is credited directly into your bank account on the 15th of every month.",
      "Step 9: If rejected, appeal online via e-Sevai or at the Revenue Divisional Officer (RDO) office within 30 days."
    ],
    offlineProcess: "Registration is conducted through decentralized neighborhood camps organized at local schools, ration shops, and community halls across every ward and village in Tamil Nadu.",
    commonMistakes: [
      "Domestic electricity bill exceeding 3,600 units/year: Check your annual TANGEDCO consumption before applying.",
      "Family member filing income tax: Auto-detected via PAN-Aadhaar linkage and disqualified.",
      "Unlinked bank account: Must ensure your bank account is seeded with Aadhaar on NPCI."
    ],
    deadlineInfo: "Major rollout completed; ongoing appeals and new registrations accepted at e-Sevai centres.",
    openingDate: "Rolling appeals and enrollments open year-round",
    processingTime: "Appeals processed within 30 days by Revenue Divisional Officer (RDO).",
    renewalRequired: "No renewal needed; payments continue uninterrupted on the 15th of every month.",
    trackingProcedure: "Visit kmut.tn.gov.in or inquire at your local e-Sevai centre with your Smart Card number.",
    correctionProcedure: "File an appeal petition at your nearest e-Sevai Centre or RDO office.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Woman's Bank Account via Tamil Nadu State Treasury",
    disbursementDetails: "The Government of Tamil Nadu deposits ₹1,000 directly into the woman beneficiary's bank account on the 15th of every calendar month.",
    faqs: [
      { q: "On what day of the month is the KMUT money deposited?", a: "The ₹1,000 assistance is deposited directly into the beneficiary's bank account on the 15th of every calendar month." },
      { q: "What should I do if my application was rejected?", a: "You can file an appeal online through any e-Sevai centre or submit a petition to the Revenue Divisional Officer (RDO) within 30 days of receiving the rejection SMS." },
      { q: "Can an unmarried or divorced woman living alone apply?", a: "Yes, single women, widows, and female heads of families holding a separate Smart Ration Card are fully eligible." },
      { q: "What is the electricity unit limit?", a: "The total domestic electricity consumption of the household must be less than 3,600 units per year (an average of 300 units per month)." },
      { q: "Can government pensioners apply?", a: "No. Households with regular government employees or pensioners are excluded from the scheme." },
      { q: "Is there any charge for registration or appeals?", a: "No. The application and appeal process are completely free of charge." }
    ],
    helpline: "KMUT Tamil Nadu Helpline: 044-25619208 or CM Helpline 1100",
    email: "kmut.support@tn.gov.in"
  },

  "mh-ladki-bahin": {
    launchYear: 2024,
    purpose: "Mukhyamantri Majhi Ladki Bahin Yojana, launched by the Government of Maharashtra in July 2024, provides unconditional monthly financial assistance of ₹1,500 to women in Maharashtra, promoting economic empowerment, nutritional security, and decision-making authority in their families.",
    targetBeneficiary: "Women residents of Maharashtra aged 21 to 65 years whose total family annual income does not exceed ₹2,50,000 per annum.",
    benefits: "Direct financial assistance of ₹1,500 per month transferred directly into the woman's Aadhaar-seeded bank account every month via Direct Benefit Transfer (DBT).",
    financialBenefit: "₹1,500 per month (₹18,000 per year) directly credited via monthly DBT",
    benefitFrequency: "Monthly direct bank transfer",
    impact: "Benefits over 1.8 crore women across Maharashtra, enabling women to cover health expenses, nutritional needs, children's school fees, and micro-savings.",
    detailedEligibility: {
      ageRequirement: "21 to 65 years of age.",
      genderRequirement: "Strictly Female applicant (married, widowed, divorced, abandoned, or unmarried adult women).",
      incomeLimit: "Total family annual income must NOT exceed ₹2,50,000 per annum (Orange and Yellow ration card holders exempt from separate income certificate).",
      educationRequirement: "None.",
      occupationRequirement: "Informal workers, agricultural laborers, self-employed women, and homemakers.",
      casteCategoryRequirement: "Open to all castes and categories.",
      residenceRequirement: "Domicile / permanent resident of Maharashtra (15+ years).",
      familyConditions: "Only one eligible woman per household holding Yellow/Orange Ration Card."
    },
    mandatoryConditions: [
      "Must be an adult woman aged 21 to 65 years",
      "Must be a resident of Maharashtra holding a Maharashtra Domicile Certificate, 15-year Ration Card, Voter ID, or School Leaving Certificate",
      "Total family annual income must not exceed ₹2,50,000 per year",
      "Must possess an active individual bank account seeded with Aadhaar for NPCI DBT",
      "Neither applicant nor any family member should be paying income tax or regular government employees"
    ],
    conditionalRequirements: [
      "Yellow and Orange (Saffron) ration card holders do NOT require a separate income certificate."
    ],
    ineligibility: [
      "Women from families whose annual income exceeds ₹2,50,000",
      "Families where any member pays income tax",
      "Families where any member is a regular/contractual government employee, semi-government employee, or pensioner",
      "Families owning a four-wheeler (except commercial agricultural tractor)",
      "Women already receiving ₹1,500 or more per month from another government financial assistance scheme"
    ],
    documents: [
      {
        name: "Aadhaar Card of Applicant Woman",
        why: "Identity verification and biometric e-KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Maharashtra Ration Card (Yellow or Orange)",
        why: "Proof of family membership and exemption from income certificate.",
        mandatory: true,
        issuingAuthority: "Food and Civil Supplies Department, Maharashtra",
        format: "Original Ration Card",
        validity: "Active"
      },
      {
        name: "Maharashtra Domicile Certificate / Voter ID / School Leaving Certificate",
        why: "Proves 15 years of residency in Maharashtra.",
        mandatory: true,
        issuingAuthority: "Competent Authority / Election Commission / School",
        format: "Certified copy",
        validity: "Permanent"
      },
      {
        name: "Income Certificate (only for White Card holders)",
        why: "Verifies family income is under ₹2.5 Lakh for non-priority cards.",
        mandatory: false,
        issuingAuthority: "Tahsildar / Competent Authority",
        format: "Digitally signed Income Certificate",
        validity: "Current financial year"
      },
      {
        name: "Bank Passbook Copy (Aadhaar-Seeded)",
        why: "For receiving ₹1,500 monthly credit via DBT.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via Nari Shakti Doot App / ladkibahin.maharashtra.gov.in & Offline at Anganwadi Centres / Setu Suvidha Kendra",
    process: [
      "Step 1: Download the 'Nari Shakti Doot' mobile app from Google Play Store or visit ladkibahin.maharashtra.gov.in.",
      "Step 2: Register using your Mobile Number and verify via OTP.",
      "Step 3: Select 'Mukhyamantri Majhi Ladki Bahin Yojana'.",
      "Step 4: Enter Applicant's Name as per Aadhaar, Date of Birth, Address, and Marital Status.",
      "Step 5: Enter Maharashtra Ration Card number and upload a clear photo of the Ration Card.",
      "Step 6: Upload photo of Aadhaar Card, Domicile Proof, and Bank Passbook.",
      "Step 7: Provide Aadhaar-seeded bank account details (Bank Name, Account Number, IFSC).",
      "Step 8: Submit the application and download the Acknowledgement PDF.",
      "Step 9: Local Anganwadi Worker / Ward Committee verifies application online.",
      "Step 10: Approved beneficiaries receive ₹1,500 credited directly into their bank account every month."
    ],
    offlineProcess: "Visit your local Anganwadi Centre, Gram Panchayat, Setu Suvidha Kendra, or Ward Office in municipal areas. Anganwadi workers assist women with online submission through their mobile phones free of cost.",
    commonMistakes: [
      "Bank account not mapped on NPCI: The payment bounces if the bank account is not actively mapped for Aadhaar DBT.",
      "Age below 21 or above 65: The portal automatically checks birth year from Aadhaar and rejects out-of-range applicants.",
      "Family member filing income tax: Auto-detected via tax department integration."
    ],
    deadlineInfo: "Rolling enrollment open year-round across Maharashtra.",
    openingDate: "July 2024; active year-round",
    processingTime: "Sanctioned within 15 to 30 days of verification.",
    renewalRequired: "No monthly renewal needed; continuous monthly credits.",
    trackingProcedure: "Log in to the Nari Shakti Doot app or ladkibahin.maharashtra.gov.in to check approval and disbursement status.",
    correctionProcedure: "Anganwadi workers can unlock defective applications on the portal for document re-upload.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Woman's Bank Account via PFMS",
    disbursementDetails: "Government of Maharashtra transfers ₹1,500 every month directly into the woman's Aadhaar-linked savings account.",
    faqs: [
      { q: "Is an Income Certificate mandatory for all applicants?", a: "No! If you hold a Yellow or Orange (Saffron) Ration Card, you do NOT need an income certificate; your ration card is accepted as sufficient income proof." },
      { q: "Can unmarried women apply for Ladki Bahin?", a: "Yes. Unmarried adult women between 21 and 65 years who meet the family income criteria are eligible." },
      { q: "Can two women from the same family apply?", a: "Only one eligible woman per ration card can receive the benefit." },
      { q: "What should I do if my money hasn't arrived?", a: "Visit your bank branch and check if your account is seeded with Aadhaar on the NPCI mapper, or check status on the Nari Shakti Doot app." },
      { q: "What is the age limit for this scheme?", a: "The woman must be between 21 and 65 years of age." },
      { q: "Can women receiving other pensions apply?", a: "If a woman is already receiving ₹1,500 or more per month from Sanjay Gandhi Niradhar Yojana or another government pension, she cannot receive duplicate benefits." }
    ],
    helpline: "Maharashtra Women Helpline: 181 / Ladki Bahin Call Centre: 022-22027050",
    email: "ladkibahin.wcd@maharashtra.gov.in"
  },

  "up-kanya-sumangala": {
    launchYear: 2019,
    purpose: "Mukhyamantri Kanya Sumangala Yojana, implemented by the Women and Child Development Department of Uttar Pradesh, provides conditional milestone-based financial assistance to girl children from birth through graduation, eliminating female feticide, promoting female education, and boosting the sex ratio.",
    targetBeneficiary: "Girl children born in Uttar Pradesh whose family annual income is up to ₹3,00,000 per annum (maximum 2 girl children per family).",
    benefits: "Total financial grant of ₹25,000 (enhanced by the UP Government in 2024 from ₹15,000) disbursed across 6 developmental milestones: Stage 1: ₹5,000 at birth; Stage 2: ₹2,000 on complete vaccination; Stage 3: ₹3,000 on admission to Class 1; Stage 4: ₹3,000 on admission to Class 6; Stage 5: ₹5,000 on admission to Class 9; Stage 6: ₹7,000 on admission to degree or 2-year diploma course.",
    financialBenefit: "Total financial grant of ₹25,000 disbursed across 6 developmental and educational milestones via DBT",
    benefitFrequency: "Milestone-based stage disbursements from birth through college graduation",
    impact: "Prevents female infanticide, ensures 100% infant immunization, eliminates high school dropouts among girls, and enables completion of university graduation.",
    detailedEligibility: {
      ageRequirement: "Girl child from birth up to completion of graduation.",
      genderRequirement: "Strictly Girl children only.",
      incomeLimit: "Total family annual income must NOT exceed ₹3,00,000 per annum.",
      educationRequirement: "Milestone-linked school/college admission proof.",
      occupationRequirement: "Student / Infant.",
      casteCategoryRequirement: "Open to all categories in Uttar Pradesh.",
      residenceRequirement: "Permanent resident / domicile of Uttar Pradesh.",
      familyConditions: "Maximum of two girl children per family (up to three permitted in case of twin girls on second delivery)."
    },
    mandatoryConditions: [
      "Family must be a permanent resident of Uttar Pradesh",
      "Total family annual income must not exceed ₹3,00,000 per year",
      "Maximum of two girl children per family are eligible",
      "Mother or father must possess an Aadhaar-seeded bank account for minor girl child (or girl's own account for Stage 6)"
    ],
    conditionalRequirements: [
      "Twin girl birth certificate allows exemption to cover a third daughter."
    ],
    ineligibility: [
      "Families with annual income exceeding ₹3,00,000",
      "Families with more than two living children (unless twins were born in the second delivery)",
      "Non-UP domicile families"
    ],
    documents: [
      {
        name: "UP Domicile Certificate (Niwas Praman Patra)",
        why: "Confirms permanent residence in Uttar Pradesh.",
        mandatory: true,
        issuingAuthority: "Revenue Department (e-District UP / Tahsildar)",
        format: "Digitally signed certificate",
        validity: "Permanent"
      },
      {
        name: "Income Certificate (Family income < ₹3.0 Lakh)",
        why: "Verifies family meets economic criteria.",
        mandatory: true,
        issuingAuthority: "Tahsildar / e-District UP",
        format: "Digitally signed certificate",
        validity: "Issued within 3 years"
      },
      {
        name: "Birth Certificate of Girl Child",
        why: "Proves date of birth and parentage.",
        mandatory: true,
        issuingAuthority: "Municipal Corporation / Gram Panchayat Registrar",
        format: "Official Birth Certificate",
        validity: "Permanent"
      },
      {
        name: "Immunization Card / MCP Card (for Stages 1 & 2)",
        why: "Proves complete mandatory age-appropriate vaccinations.",
        mandatory: true,
        issuingAuthority: "ANM / Primary Health Centre",
        format: "Vaccination card photocopy",
        validity: "Current"
      },
      {
        name: "School / College Admission Certificate & Fee Receipt (for Stages 3 to 6)",
        why: "Proves active enrollment in Class 1, 6, 9, or college degree course.",
        mandatory: true,
        issuingAuthority: "School Principal / College Registrar",
        format: "Official Bonafide Certificate",
        validity: "Current academic year"
      },
      {
        name: "Aadhaar Card of Parent & Girl Child",
        why: "Identity verification and DBT.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or photocopies",
        validity: "Permanent"
      },
      {
        name: "Bank Passbook Copy (Mother or Joint with Girl)",
        why: "For receiving milestone DBT transfers.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office",
        format: "Clear copy with Account Number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via MKSY Portal (mksy.up.gov.in) or Offline via Block Development Office / CDPO",
    process: [
      "Step 1: Visit mksy.up.gov.in and click 'Citizen Service Portal - Apply Here'.",
      "Step 2: Read terms and click 'I Agree'. Register with Mobile Number and Name.",
      "Step 3: Log in using your Login ID and Password.",
      "Step 4: Register the Girl Child by providing her Name, Date of Birth, and Aadhaar.",
      "Step 5: Select the appropriate Stage (Stage 1 to Stage 6) for which you are applying.",
      "Step 6: Upload Domicile Certificate, Income Certificate, Birth Certificate, and relevant Stage proof (Vaccination card or School admission certificate).",
      "Step 7: Provide Bank Account details (Mother's account or Joint account with daughter).",
      "Step 8: Submit the application online. Print the acknowledgement slip.",
      "Step 9: Block Development Officer (rural) or SDM (urban) verifies records.",
      "Step 10: District Probation Officer (DPO) approves, and milestone funds are credited directly to the bank account via PFMS."
    ],
    offlineProcess: "Submit physical application form along with verified document copies to your local Block Development Office (BDO), Child Development Project Officer (CDPO), or District Probation Officer (DPO).",
    commonMistakes: [
      "Applying for Stage 1 after 6 months of birth: Stage 1 application must be submitted within 6 months of the girl child's birth.",
      "Missing vaccination record for Stage 2: Must complete all primary immunizations (BCG, OPV, DPT, Measles) within 1 year.",
      "Family income exceeding ₹3 Lakh: The system cross-verifies with the state e-District portal and rejects ineligible forms."
    ],
    deadlineInfo: "Stage 1 must be filed within 6 months of birth; Stage 2 within 1 year; school stages within 1 year of admission.",
    openingDate: "Continuous year-round service",
    processingTime: "Sanctioned within 45 to 60 days of submission.",
    renewalRequired: "Fresh milestone application required at each of the 6 stages.",
    trackingProcedure: "Log in to mksy.up.gov.in and check 'Application Status' on the citizen dashboard.",
    correctionProcedure: "DPO can mark defective for online document re-upload.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Mother / Girl's Bank Account via PFMS",
    disbursementDetails: "Milestone funds (from ₹2,000 to ₹7,000) are credited directly into the mother's (or girl child's) savings account upon stage verification.",
    faqs: [
      { q: "How much total money is given under Kanya Sumangala Yojana?", a: "In 2024, the UP Government enhanced the total package from ₹15,000 to ₹25,000 per girl child across 6 milestones." },
      { q: "Can two daughters from the same family get this benefit?", a: "Yes, up to two girl children from the same family can receive the full ₹25,000 benefit." },
      { q: "What are the 6 stages of assistance?", a: "Stage 1: ₹5,000 at birth; Stage 2: ₹2,000 on vaccination; Stage 3: ₹3,000 in Class 1; Stage 4: ₹3,000 in Class 6; Stage 5: ₹5,000 in Class 9; Stage 6: ₹7,000 upon college admission." },
      { q: "Can I apply for Stage 3 directly if I missed Stage 1?", a: "Yes! If a girl is currently studying in Class 1, Class 6, Class 9, or College, parents can apply directly for that specific milestone stage without having claimed earlier stages." },
      { q: "What is the family annual income limit?", a: "Total family annual income from all sources must not exceed ₹3,00,000 per annum." },
      { q: "In whose bank account is the money credited?", a: "For minor girls (Stages 1 to 5), money is credited to the mother's bank account (or joint account). For Stage 6 (college admission), it can be credited directly to the girl's own account." }
    ],
    helpline: "UP Women Helpline: 181 or 0522-2286469",
    email: "mksy-up@gov.in"
  },

  "wb-kanyashree": {
    launchYear: 2013,
    purpose: "Kanyashree Prakalpa, a United Nations Public Service Award-winning flagship initiative of the Government of West Bengal, prevents child marriage and keeps adolescent girls in school through conditional cash scholarships, delaying marriage until at least age 18.",
    targetBeneficiary: "Unmarried adolescent girls residing in West Bengal studying in government or recognized schools, colleges, or universities.",
    benefits: "Two-tiered conditional cash assistance: K1 Annual Scholarship of ₹1,000 per year for unmarried girls aged 13 to 18 studying in Classes 8 to 12; K2 One-Time Grant of ₹25,000 paid to the girl upon turning 18, provided she remains unmarried and continues her education in college, university, or vocational training.",
    financialBenefit: "K1: ₹1,000 annual scholarship (Classes 8–12) + K2: ₹25,000 one-time grant upon attaining 18 years while unmarried",
    benefitFrequency: "Annual (K1) and One-Time Lump Sum (K2)",
    impact: "Dramatically reduced child marriage rates across West Bengal, increased female secondary and college enrolment, and empowered millions of young women to pursue career aspirations.",
    detailedEligibility: {
      ageRequirement: "K1: 13 to 18 years; K2: 18 to 19 years.",
      genderRequirement: "Strictly Female students.",
      incomeLimit: "NO family income ceiling (the income barrier was completely removed by the West Bengal Government to make Kanyashree universal).",
      educationRequirement: "Enrolled in recognized school, college, madrasah, or vocational institute.",
      occupationRequirement: "Student.",
      casteCategoryRequirement: "Open to all castes and religions.",
      residenceRequirement: "Resident of West Bengal.",
      familyConditions: "Must be strictly unmarried on the date of application."
    },
    mandatoryConditions: [
      "Must be an unmarried girl student studying in an institution in West Bengal",
      "For K1: Must be between 13 and 18 years and enrolled in Class 8 to 12",
      "For K2: Must have completed 18 years (and below 19) and remain strictly unmarried",
      "Must hold an individual bank account in her own name"
    ],
    conditionalRequirements: [
      "Special disability exemption: Girls with 40%+ disability can receive K1 even below Class 8."
    ],
    ineligibility: [
      "Girls married before attaining 18 years of age (strictly disqualified from K2 grant)",
      "Girls who have dropped out of educational institutions",
      "Male students"
    ],
    documents: [
      {
        name: "Unmarried Self-Declaration Certificate",
        why: "Mandatory declaration proving girl remains unmarried.",
        mandatory: true,
        issuingAuthority: "Self & Parent declaration countersigned by School/College Principal",
        format: "Signed proforma declaration",
        validity: "Current academic year"
      },
      {
        name: "Birth Certificate of Girl",
        why: "Verifies date of birth and age requirement.",
        mandatory: true,
        issuingAuthority: "Municipal Corporation / Gram Panchayat Registrar",
        format: "Official Birth Certificate",
        validity: "Permanent"
      },
      {
        name: "School / College Bonafide Certificate",
        why: "Confirms active enrollment in recognized educational institution.",
        mandatory: true,
        issuingAuthority: "School Headmaster / College Principal",
        format: "Signed Bonafide certificate",
        validity: "Current academic year"
      },
      {
        name: "Girl's Own Bank Passbook Copy",
        why: "For receiving direct DBT cash transfers.",
        mandatory: true,
        issuingAuthority: "Scheduled Bank",
        format: "Passbook copy showing student's name, Account Number, and IFSC",
        validity: "Active individual account"
      },
      {
        name: "Aadhaar Card of Girl",
        why: "Identity verification and DBT linking.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or photocopy",
        validity: "Permanent"
      }
    ],
    applicationMode: "Through School / College Kanyashree Portal (wbkanyashree.gov.in)",
    process: [
      "Step 1: Collect Kanyashree Form (Form K1 for school students; Form K2 upon turning 18) from your school/college office.",
      "Step 2: Fill in personal details, birth date, and bank account details.",
      "Step 3: Attach Birth Certificate, Aadhaar Card, Bank Passbook, and Unmarried Declaration.",
      "Step 4: Submit the completed form to your School Headmaster or College Nodal Teacher.",
      "Step 5: School teacher uploads details and documents onto the official wbkanyashree.gov.in portal.",
      "Step 6: Unique Kanyashree ID is generated for the student.",
      "Step 7: Block Development Officer (BDO) / Sub-Divisional Officer (SDO) conducts electronic approval.",
      "Step 8: K1 (₹1,000) or K2 (₹25,000) is credited directly into the girl's bank account via online treasury.",
      "Step 9: Student receives SMS confirmation on her mobile phone upon credit."
    ],
    offlineProcess: "Students do not need to visit government offices. The entire registration and upload process is managed inside schools, colleges, and madrasahs across West Bengal by designated Kanyashree teachers.",
    commonMistakes: [
      "Getting married before 18: If a girl marries before completing 18 years, she is permanently disqualified from receiving the ₹25,000 K2 grant.",
      "Opening bank account with parent joint signature: Account must strictly be in the girl student's own individual name.",
      "Failing to submit K2 within 18–19 years: K2 application must be submitted during the year she is 18."
    ],
    deadlineInfo: "K1 applications open in September/October; K2 applications accepted continuously upon turning 18.",
    openingDate: "Continuous through academic year",
    processingTime: "Payment disbursed within 30 to 45 days of institutional verification.",
    renewalRequired: "K1 renewed annually in school; K2 is a one-time grant.",
    trackingProcedure: "Track application status on wbkanyashree.gov.in using your 20-digit Kanyashree ID.",
    correctionProcedure: "School/college nodal officer can edit rejected student data on the portal.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Girl Student's Bank Account via WB IFMS",
    disbursementDetails: "West Bengal Department of Women & Child Development transfers funds directly from state treasury into the girl's individual bank account.",
    faqs: [
      { q: "Is there any family income limit for Kanyashree?", a: "No! The Government of West Bengal made Kanyashree universal. There is NO family income ceiling." },
      { q: "Can a girl who is married get the ₹25,000 K2 grant?", a: "No. The core objective of the scheme is delaying child marriage. The girl must be strictly unmarried at the time of receiving the K2 grant." },
      { q: "What is K3 in Kanyashree?", a: "K3 is an extension for postgraduate university studies, providing ₹2,500/month for Science streams and ₹2,000/month for Arts/Commerce streams to Kanyashree scholars who passed graduation with 45% marks." },
      { q: "Can students in madrasahs and vocational schools apply?", a: "Yes, students of recognized madrasahs, vocational training centres, and polytechnics are fully eligible." },
      { q: "Can the ₹25,000 grant be used for college admission?", a: "Yes, the K2 grant is completely unconditional cash that the girl can use for university admission, competitive coaching, laptop purchase, or personal savings." },
      { q: "What happens if my bank account changed?", a: "Inform your school/college Kanyashree nodal teacher immediately with a photocopy of your new passbook so they can update the portal before disbursement." }
    ],
    helpline: "Kanyashree Toll-Free Helpline: 1800-103-6309",
    email: "support.kanyashree@wb.gov.in"
  },

  "wb-lakshmir-bhandar": {
    launchYear: 2021,
    purpose: "Lakshmir Bhandar is the flagship universal social protection initiative of the Government of West Bengal, delivering unconditional monthly basic income support to all adult female heads of households, strengthening women's financial independence and supporting domestic consumption.",
    targetBeneficiary: "Adult women residents of West Bengal aged 25 to 60 years listed on Swasthya Sathi or Khadya Sathi ration cards.",
    benefits: "Direct unconditional monthly cash transfer: ₹1,200 per month for SC/ST women (enhanced in 2024 from ₹1,000) and ₹1,000 per month for General/OBC women (enhanced in 2024 from ₹500) transferred directly into their Aadhaar-seeded bank accounts. Upon attaining 60 years, beneficiaries transition automatically to the state Old Age Pension at the same rate.",
    financialBenefit: "₹1,200/month for SC/ST women; ₹1,000/month for General & OBC women (directly credited via monthly DBT)",
    benefitFrequency: "Monthly direct bank transfer",
    impact: "Covers over 2 crore women across West Bengal, creating a permanent economic safety net, boosting rural household spending, and ensuring universal dignity.",
    detailedEligibility: {
      ageRequirement: "25 to 60 years of age.",
      genderRequirement: "Strictly Female applicant.",
      incomeLimit: "NO family income ceiling (universal for all non-taxpayer women).",
      educationRequirement: "None.",
      occupationRequirement: "Homemaker, informal worker, agricultural laborer, self-employed, etc.",
      casteCategoryRequirement: "Open to all castes (SC/ST receive higher ₹1,200/month; General/OBC receive ₹1,000/month).",
      residenceRequirement: "Permanent resident of West Bengal.",
      familyConditions: "Covered per adult woman."
    },
    mandatoryConditions: [
      "Must be an adult woman aged 25 to 60 years residing in West Bengal",
      "Must possess a valid Swasthya Sathi card or Khadya Sathi Digital Ration Card",
      "Must hold an individual bank account seeded with Aadhaar",
      "Neither applicant nor family should be in regular government employment or receiving government pension"
    ],
    conditionalRequirements: [
      "SC/ST certificate required to claim the higher ₹1,200/month rate."
    ],
    ineligibility: [
      "Women who are permanent government employees in Central, State, local bodies, or government-aided institutions",
      "Women receiving regular government pensions",
      "Women below 25 years or above 60 years of age"
    ],
    documents: [
      {
        name: "Swasthya Sathi Smart Card",
        why: "Primary identification of woman beneficiary.",
        mandatory: true,
        issuingAuthority: "Health & Family Welfare Dept, West Bengal",
        format: "Swasthya Sathi Card number",
        validity: "Active"
      },
      {
        name: "Aadhaar Card of Applicant Woman",
        why: "Identity verification and biometric e-KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or photocopy",
        validity: "Permanent"
      },
      {
        name: "SC / ST Certificate (if applicable)",
        why: "Required for receiving the enhanced ₹1,200/month allowance.",
        mandatory: false,
        issuingAuthority: "Sub-Divisional Officer (SDO) / Backward Classes Welfare Dept",
        format: "Digitally verified certificate",
        validity: "Permanent"
      },
      {
        name: "Bank Passbook Copy (Aadhaar-Seeded)",
        why: "For receiving monthly DBT transfers.",
        mandatory: true,
        issuingAuthority: "Scheduled Bank or Post Office",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "In-person at 'Duare Sarkar' Camps & BDO / Municipal Ward Offices",
    process: [
      "Step 1: Obtain the official free application form during statewide 'Duare Sarkar' camps or from your BDO office.",
      "Step 2: Fill in applicant's Name, Swasthya Sathi Card number, Aadhaar number, and Date of Birth.",
      "Step 3: Attach photocopies of Swasthya Sathi card, Aadhaar card, SC/ST certificate (if applicable), and Bank Passbook.",
      "Step 4: Submit at the dedicated Lakshmir Bhandar counter at the Duare Sarkar camp.",
      "Step 5: Official scans your form, assigns a unique Application Registration Number, and hands over the tear-off receipt.",
      "Step 6: Block Development Officer (BDO) verifies records on the state portal.",
      "Step 7: District Magistrate approves the sanction order.",
      "Step 8: Monthly cash benefit (₹1,000 or ₹1,200) is credited directly into your bank account via DBT.",
      "Step 9: Receive monthly SMS notification when the amount is credited."
    ],
    offlineProcess: "Visit the Duare Sarkar camp organized in your village or municipal ward. Government staff provide the official application form with unique serial numbers free of cost.",
    commonMistakes: [
      "Using photocopied/unofficial blank forms: The government requires official numbered forms distributed at Duare Sarkar camps.",
      "Bank account in husband's name: Account must strictly be in the woman applicant's own individual name.",
      "Bank account not linked to Aadhaar: Causes DBT payment failure."
    ],
    deadlineInfo: "Accepted at all Duare Sarkar camps throughout the year.",
    openingDate: "Continuous through Duare Sarkar camps",
    processingTime: "First payment credited within 30 to 45 days of camp verification.",
    renewalRequired: "No renewal needed; automatically transitions to Old Age Pension upon reaching 60 years.",
    trackingProcedure: "Check status on socialsecurity.wb.gov.in using Swasthya Sathi card number or Aadhaar number.",
    correctionProcedure: "Visit your local BDO or Municipal office to update bank passbook details.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Woman's Bank Account via WB State Treasury",
    disbursementDetails: "West Bengal Finance Department transfers funds directly from the state treasury into the woman's savings bank account on the first week of every month.",
    faqs: [
      { q: "How much money is given under Lakshmir Bhandar?", a: "In February 2024, the West Bengal Government enhanced the benefit to ₹1,200 per month for SC/ST women and ₹1,000 per month for General and OBC women." },
      { q: "What happens when a woman turns 60 years old?", a: "Upon reaching 60 years of age, she automatically transitions to the state Old Age Pension without needing to file a fresh application, continuing to receive ₹1,000/month for life." },
      { q: "Can a woman without a Swasthya Sathi card apply?", a: "You can apply for your Swasthya Sathi card and Lakshmir Bhandar together at the same Duare Sarkar camp." },
      { q: "Is there any income limit to get Lakshmir Bhandar?", a: "No! There is no family income limit. The scheme is universal for all women not in government employment." },
      { q: "Can married and unmarried women both apply?", a: "Yes, all adult women between 25 and 60 years of age who reside in West Bengal are eligible." },
      { q: "Are any fees charged for the application form?", a: "No! The form is distributed 100% free with a unique barcode at Duare Sarkar camps. Beware of touts selling forms." }
    ],
    helpline: "Lakshmir Bhandar Helpline: 1800-345-5654 or Nabanna Helpdesk: 033-22143526",
    email: "wcd-lb@wb.gov.in"
  },

  "mp-ladli-behna": {
    launchYear: 2023,
    purpose: "Mukhyamantri Ladli Behna Yojana, launched by the Government of Madhya Pradesh, provides unconditional monthly financial assistance of ₹1,250 to women in Madhya Pradesh, fostering economic self-reliance, supporting family nutrition, and recognizing women's role in the household.",
    targetBeneficiary: "Married, widowed, divorced, or abandoned women residents of Madhya Pradesh aged 21 to 60 years.",
    benefits: "Direct financial assistance of ₹1,250 per month (enhanced from ₹1,000, with government commitment to raise to ₹3,000 in phases) transferred directly into the woman's Aadhaar-linked bank account on the 10th of every month.",
    financialBenefit: "₹1,250 per month (₹15,000 per year) directly credited via monthly DBT on the 10th of each month",
    benefitFrequency: "Monthly direct bank transfer",
    impact: "Reaches over 1.29 crore women across Madhya Pradesh, promoting health, maternal nutrition, micro-entrepreneurship, and decision-making power.",
    detailedEligibility: {
      ageRequirement: "21 to 60 years of age.",
      genderRequirement: "Strictly Female applicant (married, widowed, divorced, or abandoned).",
      incomeLimit: "Total family annual income must NOT exceed ₹2,50,000 per annum.",
      educationRequirement: "None.",
      occupationRequirement: "Informal workers, agricultural laborers, self-employed women, and homemakers.",
      casteCategoryRequirement: "Open to all castes and categories.",
      residenceRequirement: "Permanent resident / domicile of Madhya Pradesh.",
      familyConditions: "Family land holding must be less than 5 acres; family must not own four-wheelers (tractors exempted)."
    },
    mandatoryConditions: [
      "Must be a resident of Madhya Pradesh aged between 21 and 60 years",
      "Family annual income must not exceed ₹2,50,000",
      "Must hold a verified Samagra Family ID and Individual Samagra ID with completed e-KYC",
      "Must have an active individual bank account seeded with Aadhaar on the NPCI DBT mapper"
    ],
    conditionalRequirements: [
      "Samagra e-KYC must be completed via Aadhaar OTP or biometric scan before application."
    ],
    ineligibility: [
      "Families where total annual income exceeds ₹2,50,000",
      "Families where any member pays income tax",
      "Families with regular/contractual government employees or pensioners",
      "Families owning more than 5 acres of agricultural land",
      "Families owning a four-wheeler (except agricultural tractor)",
      "Unmarried women (scheme is for married, widowed, divorced, or separated women)"
    ],
    documents: [
      {
        name: "Samagra Family ID & Individual Member ID",
        why: "MP government universal citizen registry number.",
        mandatory: true,
        issuingAuthority: "Panchayat & Rural Development / Urban Administration, MP",
        format: "9-digit Samagra Member ID",
        validity: "Active with completed e-KYC"
      },
      {
        name: "Aadhaar Card of Applicant Woman",
        why: "Identity verification and biometric e-KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Aadhaar-Seeded Bank Passbook Copy",
        why: "For receiving ₹1,250 monthly credit via DBT.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account mapped with NPCI"
      }
    ],
    applicationMode: "Special In-Person Camps organized at Gram Panchayats & Municipal Ward Offices across MP",
    process: [
      "Step 1: Ensure your Samagra ID e-KYC is complete on samagra.gov.in using Aadhaar OTP.",
      "Step 2: Attend the Ladli Behna registration camp in your Gram Panchayat or Ward.",
      "Step 3: Provide your Samagra ID, Aadhaar number, and active mobile number.",
      "Step 4: Camp operator captures your live photograph and submits details on cmladlibehna.mp.gov.in.",
      "Step 5: Collect the printed Acknowledgement Receipt with your Application Reference Number.",
      "Step 6: Provisional beneficiary list is published in the Gram Panchayat / Ward for public scrutiny.",
      "Step 7: Once final approval is issued, ₹1,250 is credited directly into your bank account on the 10th of every month.",
      "Step 8: Receive SMS alert from the Madhya Pradesh Treasury upon credit."
    ],
    offlineProcess: "Registration is conducted through camps at local Gram Panchayat offices, Anganwadi centres, and Ward offices. Camp operators take live photographs and submit the form free of charge.",
    commonMistakes: [
      "Samagra e-KYC not completed: You must complete Aadhaar e-KYC on the Samagra portal before the camp operator can accept your application.",
      "Bank account not active for DBT: Payment will fail if the bank account is not mapped on the NPCI server.",
      "Family land holding above 5 acres: Land records integrated with Samagra automatically flag holdings over 5 acres."
    ],
    deadlineInfo: "Accepted during announced camp rounds; online portal open for tracking.",
    openingDate: "March 2023; active with ongoing monthly credits",
    processingTime: "Sanctioned within 30 days of camp verification.",
    renewalRequired: "No monthly renewal needed; deposits continue on the 10th of every month.",
    trackingProcedure: "Track application and payment status on cmladlibehna.mp.gov.in under 'Application & Payment Status'.",
    correctionProcedure: "Visit your local Gram Panchayat Secretary or Ward Office to resolve bank account issues.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Woman's Bank Account via MP State Treasury",
    disbursementDetails: "The Government of Madhya Pradesh deposits ₹1,250 directly into the woman's Aadhaar-linked savings account on the 10th of every calendar month.",
    faqs: [
      { q: "On what day of the month is the money credited?", a: "The ₹1,250 amount is deposited directly into the beneficiary's bank account on the 10th of every calendar month." },
      { q: "What is the age limit for Ladli Behna Yojana?", a: "The woman must be between 21 and 60 years of age." },
      { q: "Can unmarried women apply?", a: "No, the scheme is for married, widowed, divorced, or separated women residing in Madhya Pradesh." },
      { q: "What should I do if my money is not deposited on the 10th?", a: "Log in to cmladlibehna.mp.gov.in with your Samagra ID to see the reason, and check with your bank branch whether Aadhaar DBT seeding is active." },
      { q: "Is any paper application form required?", a: "No paper form is needed; the camp operator enters your Samagra ID and completes electronic registration on the spot." },
      { q: "Can a family owning a tractor apply?", a: "Yes. Families owning an agricultural tractor are permitted, but personal four-wheeler ownership disqualifies the applicant." }
    ],
    helpline: "Ladli Behna MP Helpline: 0755-2700800",
    email: "ladlibehna.wcd@mp.gov.in"
  },

  "day-nrlm": {
    launchYear: 2011,
    purpose: "Deendayal Antyodaya Yojana – National Rural Livelihoods Mission (DAY-NRLM), implemented by the Ministry of Rural Development, organizes poor rural women into Self-Help Groups (SHGs) and provides continuous financial, technical, and credit support to establish diversified micro-enterprises and achieve sustainable household livelihoods.",
    targetBeneficiary: "Rural women belonging to poor households, with at least one woman member from every identified poor rural household mobilized into a Self Help Group (SHG).",
    benefits: "Revolving Fund (RF) of ₹20,000 to ₹30,000 per SHG + Community Investment Fund (CIF) up to ₹1,50,000 per SHG + Collateral-free bank loans up to ₹20,00,000 per SHG with an interest subvention subsidy reducing the effective interest rate to 7% per annum (and 4% for prompt repayment in 250 focus districts).",
    financialBenefit: "Revolving Fund (₹20,000–₹30,000) + CIF (up to ₹1.5 Lakh) + Collateral-free bank linkage loans up to ₹20 Lakh at 7% interest",
    benefitFrequency: "Phased capital infusion, revolving credit, and subsidized bank enterprise loans",
    impact: "Has mobilized over 10 crore rural women into 90 lakh SHGs across India, building financial resilience, rural micro-enterprises, dairy cooperatives, and women-led rural agribusinesses.",
    detailedEligibility: {
      ageRequirement: "Adult women aged 18 to 65 years.",
      genderRequirement: "Strictly Female SHG members.",
      incomeLimit: "Identified through Participatory Identification of the Poor (PIP) process / SECC 2011.",
      educationRequirement: "None.",
      occupationRequirement: "Rural agricultural workers, artisans, weavers, dairy workers, and homemakers.",
      casteCategoryRequirement: "Special focus on SC, ST, primitive tribal groups, and minority households.",
      residenceRequirement: "Rural areas of India.",
      familyConditions: "One woman per poor rural household."
    },
    mandatoryConditions: [
      "Must be an active member of an affinity-based Self-Help Group (10 to 20 women members) practicing the 'Panchasutra' (Regular Meetings, Regular Savings, Regular Internal Lending, Regular Recovery, and Up-to-date Bookkeeping)",
      "SHG must open a joint savings bank account and be graded by the bank for credit linkage",
      "Must be identified as poor through the Village Organization (VO) Participatory Identification process"
    ],
    conditionalRequirements: [
      "Prompt repayment of bank loans required to receive the 3% interest subvention rebate."
    ],
    ineligibility: [
      "Individuals not part of a registered SHG",
      "Urban residents (covered under separate DAY-NULM urban scheme)",
      "SHGs that do not practice regular weekly savings or bookkeeping"
    ],
    documents: [
      {
        name: "SHG Registration & Resolution Book",
        why: "Records group formation, member list, and loan approval resolutions.",
        mandatory: true,
        issuingAuthority: "Gram Panchayat / Block Mission Management Unit (BMMU)",
        format: "Original physical register / LokOS digital entry",
        validity: "Active"
      },
      {
        name: "Aadhaar Card of All SHG Members",
        why: "Identity verification and bank account KYC.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Photocopies of all members' Aadhaar",
        validity: "Permanent"
      },
      {
        name: "SHG Bank Passbook (Joint Account)",
        why: "For revolving funds, CIF, and loan disbursements.",
        mandatory: true,
        issuingAuthority: "Commercial / Regional Rural / Cooperative Bank",
        format: "Passbook copy in SHG name",
        validity: "Active account"
      }
    ],
    applicationMode: "Through Village Organization (VO) / Cluster Level Federation (CLF) / Block Mission Management Unit (BMMU)",
    process: [
      "Step 1: Join or form a Self-Help Group (SHG) of 10–20 neighborhood women facilitated by the Community Resource Person (CRP).",
      "Step 2: Elect Group President, Secretary, and Treasurer; open a joint bank account in the SHG's name.",
      "Step 3: Practice 'Panchasutra' (weekly meetings, weekly savings of ₹50–₹100 per member, internal micro-lending, and record keeping).",
      "Step 4: After 3 months of regular functioning, the SHG receives a Revolving Fund (₹20,000–₹30,000) from the Block Mission Unit.",
      "Step 5: Prepare a Micro-Credit Plan (MCP) outlining members' livelihood credit needs (e.g. buying cows, sewing machines, setting up grocery shops).",
      "Step 6: Bank evaluates SHG grading and sanctions First Tranche Bank Loan (up to ₹1,00,000 to ₹1,50,000).",
      "Step 7: Repay regular monthly bank installments; progress to Second Tranche (₹3,00,000 to ₹5,00,000) and Third Tranche (up to ₹10,00,000–₹20,00,000).",
      "Step 8: Receive central interest subvention directly into the SHG loan account, reducing interest to 7% (or 4%)."
    ],
    offlineProcess: "Meet the Community Resource Person (CRP), Village Organization (VO) office-bearers, or the Block Programme Manager (BPM) at your local Block Development Office (BDO).",
    commonMistakes: [
      "Irregular meetings and bookkeeping: Banks grade SHGs based on regular attendance and ledger maintenance; poor records halt loan sanctions.",
      "Defaulting on internal loans: Members must return borrowings to the group corpus to maintain high creditworthiness."
    ],
    deadlineInfo: "Continuous rolling community mission active nationwide.",
    openingDate: "Continuous year-round service",
    processingTime: "Revolving fund released within 3 months of formation; bank credit within 6 months.",
    renewalRequired: "Continuous revolving credit with graduated credit limit increases upon loan clearance.",
    trackingProcedure: "Track SHG profile and loan status on the national LokOS mobile app and nrlm.gov.in.",
    correctionProcedure: "Village Organization and Community Resource Persons resolve ledger discrepancies.",
    disbursementMethod: "Direct Electronic Fund Transfer to SHG Joint Bank Account",
    disbursementDetails: "Funds (RF, CIF, and Bank Loans) are credited directly into the SHG's bank account. The group then disburses loans to individual members based on the approved Micro-Credit Plan.",
    faqs: [
      { q: "What is the maximum collateral-free loan an SHG can receive?", a: "Under RBI guidelines, Women Self-Help Groups under DAY-NRLM can receive collateral-free bank loans up to ₹20,00,000 (Twenty Lakh Rupees)." },
      { q: "What are the 'Panchasutra' principles?", a: "The 5 golden rules: 1) Regular weekly meetings, 2) Regular savings, 3) Regular internal lending, 4) Timely loan repayment, and 5) Transparent bookkeeping." },
      { q: "What is the net interest rate paid by SHGs?", a: "All women SHGs receive interest subvention from the central government reducing the interest rate to 7% per annum. In 250 focus districts, prompt repayment reduces it further to just 4%." },
      { q: "What is a Lakhpati Didi under DAY-NRLM?", a: "Lakhpati Didi is a flagship government mission to train and support SHG women to earn a sustainable annual household income of ₹1,00,000 or more through diversified livelihoods." },
      { q: "Can an individual woman get a loan without joining an SHG?", a: "NRLM operates strictly through community groups. An individual woman must be part of an SHG to access revolving funds and group credit lines." },
      { q: "Who provides training on starting small businesses?", a: "State Rural Livelihood Missions provide free training in dairy farming, tailoring, food processing, poultry, organic farming, and digital payments through Krishi Sakhis and Pashu Sakhis." }
    ],
    helpline: "NRLM National Helpdesk: 011-23381614",
    email: "nrlm-support@gov.in"
  },

  "ignwps": {
    launchYear: 2009,
    purpose: "Indira Gandhi National Widow Pension Scheme (IGNWPS), under the National Social Assistance Programme (NSAP) of the Ministry of Rural Development, provides unconditional monthly social pension to destitute widows from BPL households, shielding them from poverty, social vulnerability, and destitution.",
    targetBeneficiary: "Widows aged 40 to 79 years belonging to Below Poverty Line (BPL) households.",
    benefits: "Monthly pension of ₹300 per month from the Central Government, significantly enhanced by state government contributions (e.g. ₹1,000 to ₹2,500+ per month depending on the state, such as ₹1,500 in Maharashtra, ₹1,000 in UP, ₹1,200 in Karnataka). Beneficiaries who reach 80 years transition automatically to the Indira Gandhi Old Age Pension.",
    financialBenefit: "Monthly pension of ₹1,000 to ₹2,500+ (combined central + state contribution transferred via monthly DBT)",
    benefitFrequency: "Monthly direct bank transfer",
    impact: "Provides basic economic dignity, food security, and self-reliance to vulnerable widows without dependent adult support.",
    detailedEligibility: {
      ageRequirement: "40 to 79 years of age.",
      genderRequirement: "Strictly Female (widowed women).",
      incomeLimit: "Must belong to a household listed in the Below Poverty Line (BPL) database / SECC.",
      educationRequirement: "None.",
      occupationRequirement: "None.",
      casteCategoryRequirement: "Open to all castes and categories (General, SC, ST, OBC).",
      residenceRequirement: "Resident of India.",
      familyConditions: "Widow heading or living in a BPL household."
    },
    mandatoryConditions: [
      "Applicant must be a widow aged between 40 and 79 years",
      "Must produce official Death Certificate of the deceased husband",
      "Family must be classified as Below Poverty Line (BPL) as per central/state guidelines",
      "Must possess an individual Aadhaar-seeded bank or post office savings account"
    ],
    conditionalRequirements: [
      "Remarriage disqualifies the widow from continuing the pension."
    ],
    ineligibility: [
      "Widows below 40 years of age (covered under select state-specific widow relief programs)",
      "Widows who have remarried",
      "Non-BPL households",
      "Widows receiving regular government or family pension from deceased husband's government service"
    ],
    documents: [
      {
        name: "Husband's Death Certificate",
        why: "Legal proof of widowhood.",
        mandatory: true,
        issuingAuthority: "Registrar of Births and Deaths / Municipal Authority / Gram Panchayat",
        format: "Official Death Certificate",
        validity: "Permanent"
      },
      {
        name: "BPL Ration Card / BPL Certificate",
        why: "Verifies Below Poverty Line economic status.",
        mandatory: true,
        issuingAuthority: "Food and Civil Supplies Department / BDO",
        format: "Original or certified copy",
        validity: "Current"
      },
      {
        name: "Aadhaar Card of Widow",
        why: "Identity verification and DBT linking.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Bank Passbook Copy (Aadhaar-Seeded)",
        why: "For receiving monthly pension credits.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Offline at Block Development Office (BDO) / Municipal Ward Office or Online via State Social Welfare / NSAP Portal",
    process: [
      "Step 1: Obtain the NSAP Widow Pension application form from your local Gram Panchayat Secretary, BDO office, or Municipal office.",
      "Step 2: Fill in personal details, BPL household ID, date of husband's death, and Aadhaar number.",
      "Step 3: Attach verified copies of: Husband's Death Certificate, BPL Ration Card, Aadhaar Card, and Bank Passbook.",
      "Step 4: Submit to the Gram Panchayat Secretary (rural) or Municipal Ward Officer (urban).",
      "Step 5: Village level social welfare committee / Panchayat verifies BPL status and widowhood.",
      "Step 6: The Sub-Divisional Magistrate (SDM) / Taluk Social Welfare Officer issues the pension sanction order.",
      "Step 7: Pension is enrolled on the central NSAP-PPS / PFMS system.",
      "Step 8: Monthly pension is credited directly to the widow's bank/post office account on a fixed date every month."
    ],
    offlineProcess: "Visit your local Gram Panchayat office or Taluk Tahsildar Social Security counter with your husband's death certificate, BPL card, and Aadhaar card. The staff verifies records and prepares your pension file.",
    commonMistakes: [
      "Applying without official death certificate: A village panchayat certificate may not suffice if a registered death certificate is available; ensure you obtain a computerized death certificate.",
      "Bank account not linked to Aadhaar: Causes monthly pension credits to bounce back to the treasury."
    ],
    deadlineInfo: "Open throughout the year. Applications are verified and sanctioned monthly.",
    openingDate: "Continuous year-round service",
    processingTime: "45 to 60 days from application submission to first pension disbursement.",
    renewalRequired: "Annual life certificate (Jeevan Pramaan) or non-remarriage declaration submitted once a year.",
    trackingProcedure: "Visit nsap.nic.in, click 'Beneficiary Search' and enter your State, District, and Application Number.",
    correctionProcedure: "Visit the Block Social Welfare Officer to update bank account or address details.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Savings Bank Account / Post Office Account",
    disbursementDetails: "Disbursed monthly via PFMS/DBT directly into the widow's Aadhaar-seeded bank account or post office account on the 1st week of each month.",
    faqs: [
      { q: "What is the minimum age to receive IGNWPS?", a: "Under Central NSAP guidelines, the widow must be at least 40 years of age. (However, many state governments have separate state-funded schemes covering widows below 40 years)." },
      { q: "What happens if a widow remarries?", a: "If the beneficiary remarries, she is legally required to inform the Panchayat/BDO and the pension is discontinued." },
      { q: "What happens when the widow turns 80 years old?", a: "Upon attaining 80 years of age, she is automatically migrated to the higher senior citizen tier of the Indira Gandhi National Old Age Pension Scheme (IGNOAPS)." },
      { q: "Can a widow receive this pension if her adult children are earning?", a: "Yes, provided the household is categorized as Below Poverty Line (BPL) in official state records." },
      { q: "How much pension is paid in my state?", a: "While the central share is ₹300, state contributions make the total monthly pension between ₹1,000 and ₹2,500+ depending on your state." },
      { q: "Can the pension be received at home?", a: "Yes, postmen from India Post Payments Bank (IPPB) provide Aadhaar-enabled doorstep cash delivery to elderly widows." }
    ],
    helpline: "NSAP National Toll-Free: 1800-111-555",
    email: "nsap-support@gov.in"
  },

  "nfbs": {
    launchYear: 1995,
    purpose: "National Family Benefit Scheme (NFBS), under the National Social Assistance Programme (NSAP) of the Ministry of Rural Development, provides a one-time emergency financial grant to a Below Poverty Line (BPL) family upon the premature death of its primary breadwinner, preventing immediate destitution and child labor.",
    targetBeneficiary: "Surviving members of a BPL family upon the death of the primary breadwinner (male or female) aged between 18 and 59 years.",
    benefits: "One-time lump-sum cash assistance of ₹20,000 transferred directly into the bank account of the surviving spouse or eligible adult head of the household via Direct Benefit Transfer (DBT).",
    financialBenefit: "One-time lump-sum grant of ₹20,000 paid to the surviving household head",
    benefitFrequency: "One-time emergency relief grant",
    impact: "Provides immediate financial cushion to impoverished families following the sudden demise of their primary earner, paying for funeral costs, debts, and children's immediate food security.",
    detailedEligibility: {
      ageRequirement: "Deceased breadwinner must have been between 18 and 59 years of age at the time of death.",
      genderRequirement: "Deceased primary breadwinner can be male or female.",
      incomeLimit: "Must belong to a household listed in the national Below Poverty Line (BPL) database.",
      educationRequirement: "None.",
      occupationRequirement: "Primary economic breadwinner of the family.",
      casteCategoryRequirement: "Open to all categories (General, SC, ST, OBC).",
      residenceRequirement: "Resident of India.",
      familyConditions: "Surviving spouse, minor children, or dependent parents of the deceased breadwinner."
    },
    mandatoryConditions: [
      "Deceased person must have been the primary economic earner whose contribution was essential to household survival",
      "Deceased breadwinner must have been between 18 and 59 years of age (both inclusive) at death",
      "Household must be Below Poverty Line (BPL)",
      "Application must be filed within the prescribed time limit (usually within 6 months to 1 year of death)"
    ],
    conditionalRequirements: [
      "Post-mortem report or FIR required in case of accidental or unnatural death."
    ],
    ineligibility: [
      "Deaths occurring when the breadwinner was aged 60 years or older",
      "Non-BPL households",
      "Families where the deceased was a government employee covered under state family pension / death gratuity"
    ],
    documents: [
      {
        name: "Death Certificate of Primary Breadwinner",
        why: "Legal proof of date of death and age verification.",
        mandatory: true,
        issuingAuthority: "Registrar of Births and Deaths / Municipal Authority",
        format: "Official computerized Death Certificate",
        validity: "Permanent"
      },
      {
        name: "Age Proof of Deceased Breadwinner (Aadhaar / Voter ID / Marksheet)",
        why: "Confirms age was strictly between 18 and 59 years at death.",
        mandatory: true,
        issuingAuthority: "UIDAI / Election Commission / School Board",
        format: "Photocopy showing exact date or year of birth",
        validity: "Permanent"
      },
      {
        name: "BPL Ration Card / BPL Household Certificate",
        why: "Verifies Below Poverty Line economic status.",
        mandatory: true,
        issuingAuthority: "Food and Civil Supplies Department / BDO",
        format: "Original or certified copy",
        validity: "Current"
      },
      {
        name: "Primary Breadwinner & Family Tree Certificate",
        why: "Certifies deceased was the main earner and lists legal surviving heir.",
        mandatory: true,
        issuingAuthority: "Revenue Authority (Tahsildar / Village Patwari / Ward Officer)",
        format: "Signed inquiry report on prescribed proforma",
        validity: "Current"
      },
      {
        name: "Surviving Applicant's Bank Passbook Copy (Aadhaar-Seeded)",
        why: "For receiving ₹20,000 lump sum via DBT.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Offline at Block Development Office (BDO) / Municipal Office or Online via State Social Welfare / NSAP Portal",
    process: [
      "Step 1: Obtain the NFBS application form from your local Gram Panchayat Secretary, BDO office, or Municipal Corporation.",
      "Step 2: Fill in details of the deceased breadwinner (Name, Age, Date of Death, Occupation) and surviving applicant details.",
      "Step 3: Attach Death Certificate, Age proof of deceased (18–59 yrs), BPL card, Family Tree report, and Applicant's Bank Passbook.",
      "Step 4: Submit to the Gram Panchayat Secretary (rural) or Municipal Ward Officer (urban).",
      "Step 5: Village Revenue Officer / Patwari conducts inquiry to confirm the deceased was the primary earner.",
      "Step 6: Sub-Divisional Magistrate (SDM) / District Social Welfare Officer sanctions the financial grant.",
      "Step 7: The lump-sum amount of ₹20,000 is credited directly into the surviving applicant's bank account via PFMS.",
      "Step 8: Applicant receives SMS notification upon credit."
    ],
    offlineProcess: "Visit your local Block Development Office (BDO) or Sub-Divisional Magistrate (SDM) office with the death certificate, BPL card, and revenue inquiry report.",
    commonMistakes: [
      "Deceased age 60 or above: NFBS strictly applies to breadwinners who died between 18 and 59 years; deaths at age 60+ are disqualified.",
      "Delaying application beyond 1 year: Applications must be submitted within the state-notified period (usually within 12 months of death)."
    ],
    deadlineInfo: "Must apply within 1 year from the date of death of the breadwinner.",
    openingDate: "Continuous year-round service",
    processingTime: "Disbursed within 30 to 60 days of verification.",
    renewalRequired: "One-time grant; no renewal.",
    trackingProcedure: "Track application status on nsap.nic.in using Application Number.",
    correctionProcedure: "Visit the District Social Welfare Office to rectify bank details.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Surviving Applicant's Bank Account via PFMS",
    disbursementDetails: "Central and state governments disburse the ₹20,000 grant as a single lump-sum credit directly into the surviving spouse's savings account.",
    faqs: [
      { q: "What is the grant amount under the National Family Benefit Scheme?", a: "A one-time lump-sum cash assistance of ₹20,000 is paid directly to the surviving head of the family." },
      { q: "What is the age criterion for the deceased breadwinner?", a: "The deceased must have died between 18 and 59 years of age (both inclusive)." },
      { q: "Can a family receive NFBS if the female earner died?", a: "Yes! The deceased primary breadwinner can be male or female, as long as she was an adult contributor to household income." },
      { q: "Can this grant be combined with widow pension?", a: "Yes! A widow can receive the one-time ₹20,000 NFBS grant AND subsequently apply for the monthly Indira Gandhi National Widow Pension (IGNWPS)." },
      { q: "What is the deadline to apply after death?", a: "Applications must be filed within 12 months (one year) from the date of death." },
      { q: "Who in the family receives the money?", a: "Priority is given to the surviving spouse (widow/widower); in their absence, it is paid to the eldest surviving child or dependent parent." }
    ],
    helpline: "NSAP National Toll-Free: 1800-111-555",
    email: "nsap-support@gov.in"
  },

  "apy": {
    launchYear: 2015,
    purpose: "Atal Pension Yojana (APY), administered by the Pension Fund Regulatory and Development Authority (PFRDA) under the Ministry of Finance, is India's flagship guaranteed social security pension scheme for unorganized sector workers, providing a lifelong monthly income from age 60.",
    targetBeneficiary: "All Indian citizens aged 18 to 40 years working in the unorganized sector who do not pay income tax.",
    benefits: "Guaranteed monthly pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 per month starting from age 60 until death. Upon subscriber's death, the exact same pension is paid to the spouse for life. Upon the death of both subscriber and spouse, the entire accumulated pension wealth (corpus up to ₹8.5 Lakh) is returned 100% to the designated nominee.",
    financialBenefit: "Guaranteed lifelong pension of ₹1,000 to ₹5,000 per month + 100% return of pension corpus to nominee",
    benefitFrequency: "Monthly guaranteed pension from age 60 for lifetime",
    impact: "Builds a formal pension safety net for informal workers, maidservants, delivery agents, small shopkeepers, and drivers, ensuring dignified old age security backed by sovereign government guarantee.",
    detailedEligibility: {
      ageRequirement: "18 to 40 years of age at the time of entry.",
      genderRequirement: "All citizens eligible.",
      incomeLimit: "Must NOT be an income tax payer (effective 1 October 2022).",
      educationRequirement: "None.",
      occupationRequirement: "Informal, self-employed, daily wage, gig workers, and unorganized workers.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Individual subscriber account."
    },
    mandatoryConditions: [
      "Must be an Indian citizen aged between 18 and 40 years",
      "Must hold an active savings bank account or post office savings account",
      "Must NOT be or have been an income tax payer under the Income Tax Act",
      "Must set up auto-debit facility for monthly/quarterly contribution"
    ],
    conditionalRequirements: [
      "Spouse is automatically enrolled as co-beneficiary for lifelong pension continuity."
    ],
    ineligibility: [
      "Any citizen who is or has been an income tax payer (as per government rule effective 1 Oct 2022)",
      "Persons below 18 years or above 40 years of age",
      "Non-resident Indians (NRIs)"
    ],
    documents: [
      {
        name: "Aadhaar Card",
        why: "Primary identity and address verification.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Savings Bank Passbook / Account Details",
        why: "Mandatory for monthly auto-debit of contribution and future pension credit.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      },
      {
        name: "Active Mobile Number",
        why: "For receiving PRAN number, contribution SMS alerts, and transaction statements.",
        mandatory: true,
        issuingAuthority: "Telecom Service Provider",
        format: "Aadhaar-linked mobile number",
        validity: "Active"
      }
    ],
    applicationMode: "Online via Bank Net Banking / Mobile Banking or Offline at any Bank Branch or Post Office",
    process: [
      "Step 1: Visit the bank branch or post office where you maintain your savings bank account, or log in to your bank's Net Banking app.",
      "Step 2: Search for 'Atal Pension Yojana (APY)' under Government Schemes / Social Security.",
      "Step 3: Select your desired monthly pension slab (₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000/month).",
      "Step 4: The system auto-calculates your monthly contribution based on your current age (e.g., at age 18, only ₹210/month for a ₹5,000 pension).",
      "Step 5: Provide Spouse details and Nominee details.",
      "Step 6: Authorize the monthly auto-debit mandate from your savings account.",
      "Step 7: Submit the application. Your Permanent Retirement Account Number (PRAN) is generated immediately.",
      "Step 8: Download or collect your APY e-PRAN Card from the NSDL-CRA portal (npscra.nsdl.co.in).",
      "Step 9: Monthly contributions are deducted automatically until you turn 60 years old.",
      "Step 10: Upon turning 60, submit your pension claim form at your bank; your guaranteed monthly pension begins immediately."
    ],
    offlineProcess: "Walk into any branch of State Bank of India, Punjab National Bank, Canara Bank, or Post Office. Fill out the simple one-page APY Subscriber Registration Form, specify your pension choice (₹1,000–₹5,000), and sign the auto-debit mandate.",
    commonMistakes: [
      "Applying if you file income tax: Taxpayers are legally prohibited from joining APY since October 2022; accounts opened by taxpayers are closed and contributions returned.",
      "Insufficient balance on auto-debit date: Overdue contributions incur a nominal penalty of ₹1 per ₹100 per month; maintain balance in your bank account.",
      "Joining late: Joining at age 18 costs only ₹210/month for a ₹5,000 pension, whereas joining at age 39 costs ₹1,318/month."
    ],
    deadlineInfo: "Can be joined anytime between ages 18 and 40. Open year-round.",
    openingDate: "Continuous year-round service",
    processingTime: "PRAN generated within 24 to 48 hours.",
    renewalRequired: "Auto-debit continues automatically every month until age 60.",
    trackingProcedure: "Download APY mobile app or visit npscra.nsdl.co.in and enter your PRAN to view accumulated balance and statements.",
    correctionProcedure: "Submit an APY Modification Form at your bank branch to change pension slab, address, or nominee.",
    disbursementMethod: "Direct Monthly Pension Credit to Subscriber's Savings Bank Account",
    disbursementDetails: "From age 60, PFRDA deposits the guaranteed monthly pension directly into the subscriber's savings bank account on the first week of every month for life.",
    faqs: [
      { q: "Is the pension amount guaranteed by the Government of India?", a: "Yes! Atal Pension Yojana carries an explicit statutory guarantee from the Government of India. Even if the accumulated fund underperforms, the central government funds any deficit to ensure you receive the full pension." },
      { q: "What happens to the money if the subscriber dies after age 60?", a: "Upon subscriber's demise, the exact same monthly pension continues to the spouse for life. After the spouse passes away, the entire accumulated corpus (up to ₹8.5 Lakh for a ₹5,000 slab) is paid 100% to the nominee." },
      { q: "Can I increase or decrease my pension amount later?", a: "Yes, you can upgrade or downgrade your pension slab (e.g. from ₹1,000 to ₹5,000) once every financial year through your bank." },
      { q: "Can income tax payers enroll in APY?", a: "No. Since 1 October 2022, citizens who are or have been income tax payers are not eligible to join APY." },
      { q: "Can I exit the scheme before age 60?", a: "Voluntary exit before 60 is permitted. The subscriber receives back their total accumulated contributions along with net interest earned, minus account maintenance charges." },
      { q: "How much do I need to contribute per month at age 18?", a: "If you join at age 18, you pay only ₹42/month for a ₹1,000 pension, or ₹210/month for the maximum ₹5,000 monthly pension." }
    ],
    helpline: "PFRDA / APY Toll-Free Helpline: 1800-110-069",
    email: "apy-pfrda@nic.in"
  },

  "ignoaps": {
    launchYear: 1995,
    purpose: "Indira Gandhi National Old Age Pension Scheme (IGNOAPS), under the National Social Assistance Programme (NSAP) of the Ministry of Rural Development, provides unconditional monthly social pensions to impoverished senior citizens belonging to BPL households, guaranteeing basic economic survival in old age.",
    targetBeneficiary: "Senior citizens aged 60 years and above belonging to Below Poverty Line (BPL) households.",
    benefits: "Monthly social security pension: Senior citizens aged 60 to 79 years receive ₹200/month from Central Government + state government top-up (totaling ₹1,000 to ₹2,500+ per month depending on the state). Super senior citizens aged 80 years and above receive an enhanced central contribution of ₹500/month + state top-up (totaling ₹1,500 to ₹3,000+ per month).",
    financialBenefit: "Monthly pension of ₹1,000 to ₹3,000+ per month (combined central + state contribution transferred via monthly DBT)",
    benefitFrequency: "Monthly direct bank transfer",
    impact: "Protects destitute elderly citizens who have no family support or retirement income, preventing abandonment and starvation in old age.",
    detailedEligibility: {
      ageRequirement: "60 years of age or older (enhanced rate at 80+ years).",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Must belong to a household listed in the national Below Poverty Line (BPL) database.",
      educationRequirement: "None.",
      occupationRequirement: "Retired / destitute senior citizens.",
      casteCategoryRequirement: "Open to all castes and categories (General, SC, ST, OBC).",
      residenceRequirement: "Resident of India.",
      familyConditions: "BPL household qualification."
    },
    mandatoryConditions: [
      "Applicant must be at least 60 years of age as per official records",
      "Family must be categorized as Below Poverty Line (BPL) as per central/state guidelines",
      "Must possess an active individual bank or post office savings account seeded with Aadhaar"
    ],
    conditionalRequirements: [
      "Annual Digital Life Certificate (Jeevan Pramaan) or physical verification required to continue pension."
    ],
    ineligibility: [
      "Citizens below 60 years of age",
      "Non-BPL households",
      "Retired government employees or institutional pensioners receiving provident fund / state pension"
    ],
    documents: [
      {
        name: "Age Proof (Aadhaar / Voter ID / Birth Certificate / School Leaving)",
        why: "Confirms completion of 60 years of age.",
        mandatory: true,
        issuingAuthority: "UIDAI / Election Commission / Registrar",
        format: "Document showing exact date/year of birth",
        validity: "Permanent"
      },
      {
        name: "BPL Ration Card / BPL Certificate",
        why: "Verifies Below Poverty Line economic status.",
        mandatory: true,
        issuingAuthority: "Food and Civil Supplies Department / BDO",
        format: "Original or certified copy",
        validity: "Current"
      },
      {
        name: "Aadhaar Card of Senior Citizen",
        why: "Identity verification and DBT linking.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Bank Passbook Copy (Aadhaar-Seeded)",
        why: "For receiving monthly pension credits.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Offline at Block Development Office (BDO) / Municipal Ward Office or Online via State Social Welfare / NSAP Portal",
    process: [
      "Step 1: Obtain the NSAP Old Age Pension application form from your local Gram Panchayat Secretary, BDO office, or Municipal Corporation.",
      "Step 2: Fill in personal details, age, BPL household ID, and Aadhaar number.",
      "Step 3: Attach verified copies of: Age Proof (Aadhaar/Voter ID), BPL Ration Card, and Bank Passbook.",
      "Step 4: Submit to the Gram Panchayat Secretary (rural) or Municipal Ward Officer (urban).",
      "Step 5: Village level social welfare committee / Panchayat verifies BPL status and age.",
      "Step 6: Sub-Divisional Magistrate (SDM) / Taluk Social Welfare Officer sanctions the pension order.",
      "Step 7: Pension is enrolled on the central NSAP-PPS / PFMS system.",
      "Step 8: Monthly pension is credited directly to the senior citizen's bank/post office account on a fixed date every month."
    ],
    offlineProcess: "Visit your local Gram Panchayat Secretary or Taluk Tahsildar Social Welfare counter with your Aadhaar, BPL card, and bank passbook. Elderly citizens with mobility challenges can authorize a family representative.",
    commonMistakes: [
      "Age on Aadhaar showing less than 60 years: Must update Aadhaar at a Seva Kendra before applying if age was recorded incorrectly.",
      "Dormant bank account: Senior citizens must make an occasional withdrawal/deposit to prevent their bank account from freezing."
    ],
    deadlineInfo: "Open throughout the year. Applications are verified and sanctioned monthly.",
    openingDate: "Continuous year-round service",
    processingTime: "45 to 60 days from application submission to first pension disbursement.",
    renewalRequired: "Annual life certificate (Jeevan Pramaan) submitted once a year via facial scan or in person.",
    trackingProcedure: "Visit nsap.nic.in, click 'Beneficiary Search' and enter your State, District, and Application Number.",
    correctionProcedure: "Visit the Block Social Welfare Officer to update bank account or address details.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Savings Bank Account / Post Office Account",
    disbursementDetails: "Disbursed monthly via PFMS/DBT directly into the senior citizen's Aadhaar-seeded bank account or post office account on the 1st week of each month.",
    faqs: [
      { q: "What is the minimum age to receive IGNOAPS?", a: "The applicant must be 60 years of age or older." },
      { q: "What is the difference in pension between age 60 and age 80?", a: "Beneficiaries aged 60 to 79 receive the base central contribution of ₹200 (plus state top-up). Upon turning 80, the central contribution increases to ₹500 (plus state top-up)." },
      { q: "How much pension is paid in total each month?", a: "Most state governments add a substantial top-up (e.g. ₹1,000 in UP, ₹1,200 in Karnataka, ₹1,500 in Maharashtra, ₹2,000 in Telangana/AP), making the total monthly payment ₹1,000 to ₹2,500+." },
      { q: "How can elderly citizens submit their annual life certificate?", a: "You can submit a Digital Life Certificate (Jeevan Pramaan) using facial authentication on an Android phone, through an India Post postman at your doorstep, or in person at your bank branch." },
      { q: "Can both husband and wife aged 60+ receive this pension?", a: "Yes! If both husband and wife are aged 60 or above and belong to a BPL household, both can receive individual monthly pensions in their respective bank accounts." },
      { q: "What happens if a beneficiary's fingerprints are worn out?", a: "Life certificate submission supports Iris scan and Face Authentication on Android smartphones, eliminating fingerprint failure issues." }
    ],
    helpline: "NSAP National Toll-Free: 1800-111-555",
    email: "nsap-support@gov.in"
  },

  "scss": {
    launchYear: 2004,
    purpose: "Senior Citizens Savings Scheme (SCSS), administered by the Department of Economic Affairs, Ministry of Finance, provides a safe, sovereign-backed, high-yield quarterly income stream for senior citizens, ensuring secure retirement cash flow and financial stability.",
    targetBeneficiary: "Senior citizens aged 60 years and above (or 55+ for voluntary retirees/VRS and 50+ for retired defense personnel).",
    benefits: "Guaranteed high interest rate of 8.2% per annum, paid out every quarter directly into the senior citizen's savings account. Investment ceiling up to ₹30,00,000 (Thirty Lakh Rupees, enhanced in 2023 from ₹15 Lakh). Qualifies for Section 80C income tax deduction up to ₹1,50,000 per year.",
    financialBenefit: "High 8.2% guaranteed annual interest paid quarterly + Tax deduction up to ₹1.5 Lakh under Section 80C",
    benefitFrequency: "Quarterly interest payment credited automatically on the 1st of April, July, October, and January",
    impact: "Provides reliable regular quarterly income to pensioners, insulates elderly citizens from stock market volatility, and protects retirement gratuity and savings with 100% sovereign safety.",
    detailedEligibility: {
      ageRequirement: "60 years and above (55+ for civilian VRS/superannuation; 50+ for retired defense personnel).",
      genderRequirement: "All senior citizens eligible.",
      incomeLimit: "NO income limit (open to all senior citizens).",
      educationRequirement: "None.",
      occupationRequirement: "Retired senior citizens / any senior citizen.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Resident Indian senior citizens (NRIs and HUFs not eligible).",
      familyConditions: "Can be held individually or jointly with spouse."
    },
    mandatoryConditions: [
      "Must be an Indian citizen aged 60 years or older (or 55+ for VRS retirees applying within 3 months of retirement)",
      "Deposit must be in multiples of ₹1,000, up to a maximum cumulative limit of ₹30,00,000 across all SCSS accounts",
      "Must hold a valid PAN card and Aadhaar card"
    ],
    conditionalRequirements: [
      "Retirement benefit disbursement certificate required for applicants aged 55 to 59 years applying under VRS."
    ],
    ineligibility: [
      "Non-Resident Indians (NRIs) and Persons of Indian Origin (PIOs)",
      "Hindu Undivided Families (HUFs)",
      "Citizens below 60 years who did not retire under voluntary retirement schemes"
    ],
    documents: [
      {
        name: "PAN Card",
        why: "Mandatory for tax compliance and interest payout TDS tracking.",
        mandatory: true,
        issuingAuthority: "Income Tax Department",
        format: "Original + photocopy",
        validity: "Permanent"
      },
      {
        name: "Aadhaar Card",
        why: "Identity and address proof.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original + photocopy",
        validity: "Permanent"
      },
      {
        name: "Age / Retirement Proof (for VRS retirees aged 55–59)",
        why: "Proves superannuation / voluntary retirement date within last 3 months.",
        mandatory: false,
        issuingAuthority: "Employer / Pension Disbursing Office",
        format: "Retirement order / Pension Payment Order (PPO)",
        validity: "Issued within 3 months"
      },
      {
        name: "Recent Passport Size Photographs",
        why: "Account opening KYC.",
        mandatory: true,
        issuingAuthority: "Self",
        format: "2 recent colour passport photographs",
        validity: "Recent"
      }
    ],
    applicationMode: "Offline at any Post Office or authorized Public/Private Sector Bank branch",
    process: [
      "Step 1: Visit any Post Office branch or authorized commercial bank (SBI, PNB, BoB, Canara, ICICI, HDFC, etc.).",
      "Step 2: Collect Form-A (Application for Opening of SCSS Account).",
      "Step 3: Fill in senior citizen's details, deposit amount (up to ₹30 Lakh), and choose individual or joint holding with spouse.",
      "Step 4: Attach PAN Card copy, Aadhaar copy, 2 photos, and retirement proof (if applicable).",
      "Step 5: Deposit funds via cheque or demand draft (cash allowed up to ₹1,00,000).",
      "Step 6: The bank/post office issues the SCSS Passbook or Certificate of Deposit.",
      "Step 7: Interest at 8.2% is calculated and deposited automatically every quarter directly into your linked savings account.",
      "Step 8: Maturity occurs after 5 years, with the option to extend for an additional 3-year block."
    ],
    offlineProcess: "Walk into your local Post Office or commercial bank branch with your PAN card, Aadhaar card, and cheque for the deposit amount. The branch manager will open your account and issue your passbook.",
    commonMistakes: [
      "Exceeding ₹30 Lakh limit across accounts: The ₹30 Lakh ceiling is cumulative per individual across all banks and post offices combined.",
      "Not submitting Form 15H: Interest exceeding ₹50,000/year attracts TDS; submit Form 15H annually if your total income is below the taxable threshold."
    ],
    deadlineInfo: "VRS retirees (55–59) must open account within 3 months of retirement; open year-round for citizens 60+.",
    openingDate: "Continuous year-round service",
    processingTime: "Account opened within 24 to 48 hours.",
    renewalRequired: "Account matures after 5 years; can be extended for an additional 3 years by submitting Form-4.",
    trackingProcedure: "Track quarterly interest credits in your linked savings bank account or update your SCSS passbook.",
    correctionProcedure: "Submit nomination update form or account transfer request at your bank branch.",
    disbursementMethod: "Direct Electronic Quarterly Interest Transfer to Linked Savings Bank Account",
    disbursementDetails: "Quarterly interest is credited automatically on the first day of April, July, October, and January directly into the senior citizen's savings account.",
    faqs: [
      { q: "What is the maximum investment limit in SCSS?", a: "In Budget 2023, the maximum investment ceiling was doubled to ₹30,00,000 (Thirty Lakh Rupees) per individual. A husband and wife aged 60+ can invest up to ₹60 Lakh combined in separate accounts." },
      { q: "What is the current interest rate?", a: "The scheme offers an attractive 8.2% annual interest rate, fully backed by sovereign government guarantee." },
      { q: "When is the interest paid?", a: "Interest is paid quarterly on the 1st of April, 1st of July, 1st of October, and 1st of January directly into your linked savings bank account." },
      { q: "Can I extend the account after 5 years?", a: "Yes. After the initial 5-year maturity, you can extend the account for an additional block of 3 years by submitting an extension application within 1 year of maturity." },
      { q: "Can premature withdrawal be made?", a: "Yes. Premature closure is permitted after 1 year with a nominal 1.5% deduction, and after 2 years with a 1% deduction on the principal amount." },
      { q: "Is the investment eligible for Section 80C tax deduction?", a: "Yes. Investments in SCSS qualify for income tax deduction under Section 80C up to ₹1,50,000 per financial year." }
    ],
    helpline: "National Savings Institute / Post Office Helpline: 1800-266-6868",
    email: "scss-support@indiapost.gov.in"
  }
};

