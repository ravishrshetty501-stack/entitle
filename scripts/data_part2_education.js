// Part 2: Scholarships, Educational Assistance & Student Schemes
module.exports = {
  "nsp-post-matric-sc": {
    launchYear: 1944,
    purpose: "The Post Matric Scholarship for Scheduled Caste Students, implemented by the Ministry of Social Justice and Empowerment, is the government's premier educational equity program. It provides comprehensive financial support to Scheduled Caste students studying at post-secondary and higher education levels, ensuring that poverty does not force talented students to drop out.",
    targetBeneficiary: "Scheduled Caste (SC) students who have completed Class 10 and are pursuing recognized post-matriculation, undergraduate, postgraduate, doctoral, or professional/technical degree courses.",
    benefits: "Full non-refundable compulsory tuition fee reimbursement (paid directly to institution or student) plus a monthly academic maintenance allowance of up to ₹13,500 per year (for hostellers in professional courses) and ₹7,000 per year (for day scholars). Also includes study tour allowances, thesis typing charges, and disability allowances.",
    financialBenefit: "100% compulsory course fees reimbursed + maintenance allowance up to ₹13,500/year (Hosteller) or ₹7,000/year (Day Scholar)",
    benefitFrequency: "Annual scholarship disbursed in two components (fee reimbursement and maintenance allowance)",
    impact: "Dramatically increases higher education gross enrolment ratio (GER) among Scheduled Caste youth, enabling entry into professional careers in engineering, medicine, law, and research.",
    detailedEligibility: {
      ageRequirement: "No age ceiling, provided student is enrolled in a recognized post-matric course.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Total parental/family annual income from all sources must NOT exceed ₹2,50,000 per annum.",
      educationRequirement: "Passed Class 10 (Matriculation) from a recognized state/central board.",
      occupationRequirement: "Student in regular full-time study (students in full-time employment are not eligible).",
      casteCategoryRequirement: "Strictly Scheduled Caste (SC) category as notified in the Presidential Order.",
      residenceRequirement: "Citizen of India permanent resident of the respective State/UT.",
      familyConditions: "Up to two boys of the same parents can receive the scholarship; no limit applies to girls."
    },
    mandatoryConditions: [
      "Must belong to a Scheduled Caste (SC) community with valid caste certificate",
      "Total family annual income must not exceed ₹2,50,000 per year",
      "Must be admitted to a government-recognized school, college, polytechnic, or university",
      "Student's bank account must be Aadhaar-seeded on the NPCI mapper for Direct Benefit Transfer"
    ],
    conditionalRequirements: [
      "Hostel resident certificate from warden required to claim the higher hosteller maintenance rate."
    ],
    ineligibility: [
      "Students whose total family income exceeds ₹2,50,000 per annum",
      "Students repeating the same stage of education in a different stream (e.g. passing B.A. and re-enrolling in B.Com)",
      "Students pursuing education through distance mode who are concurrently in paid full-time employment",
      "Beneficiaries receiving another parallel government scholarship or fellowship"
    ],
    documents: [
      {
        name: "Scheduled Caste (SC) Certificate",
        why: "Proves applicant's constitutional caste eligibility.",
        mandatory: true,
        issuingAuthority: "Competent Revenue Authority (Tahsildar / Sub-Divisional Magistrate / e-District)",
        format: "Digitally signed online caste certificate with barcode / certificate number",
        validity: "Permanent"
      },
      {
        name: "Income Certificate (Family income < ₹2.5 Lakh)",
        why: "Verifies family meets the mandatory economic means criterion.",
        mandatory: true,
        issuingAuthority: "Tahsildar / Revenue Department / e-District",
        format: "Original or digitally verified PDF",
        validity: "Must be issued within current financial year"
      },
      {
        name: "Previous Class Marksheet / Passing Certificate",
        why: "Confirms passing of Class 10 or preceding academic examination.",
        mandatory: true,
        issuingAuthority: "State Board / CBSE / CISCE / University",
        format: "Marksheet copy verified by Head of Institution",
        validity: "Original record"
      },
      {
        name: "Current Year College Admission Letter & Fee Receipt",
        why: "Confirms valid admission and itemized tuition fee structure.",
        mandatory: true,
        issuingAuthority: "Recognized College / University Registrar",
        format: "Official fee receipt showing breakdown of non-refundable fees",
        validity: "Current academic session"
      },
      {
        name: "Aadhaar Card of Student",
        why: "Identity verification and mandatory DBT mapping.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original / e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Aadhaar-Seeded Bank Passbook Copy",
        why: "Direct transfer of maintenance allowance and fee reimbursement.",
        mandatory: true,
        issuingAuthority: "Scheduled Bank / Post Office",
        format: "Copy clearly showing Name, Account Number, and IFSC",
        validity: "Active account mapped with NPCI"
      }
    ],
    applicationMode: "Online via National Scholarship Portal (scholarships.gov.in) or State Scholarship Portal",
    process: [
      "Step 1: Go to the National Scholarship Portal at scholarships.gov.in.",
      "Step 2: Generate your One-Time Registration (OTR) using your Aadhaar number and FaceRD / OTP authentication.",
      "Step 3: Log in using your OTR number and password.",
      "Step 4: Select 'Ministry of Social Justice and Empowerment' -> 'Post Matric Scholarship for SC Students'.",
      "Step 5: Fill in your academic details (Current Institute AISHE code, Course, Year of Study).",
      "Step 6: Fill in Category, Family Annual Income, and Bank Account details.",
      "Step 7: Upload required documents (Caste Certificate, Income Certificate, Marksheet, Fee Receipt, and Photo).",
      "Step 8: Review the completed form and click 'Final Submit'.",
      "Step 9: Download and print the application form and submit a physical copy with document copies to your College Nodal Officer (CNO).",
      "Step 10: College verifies on portal (Level 1), District Welfare Officer approves (Level 2), and scholarship funds are released via DBT."
    ],
    offlineProcess: "While submission is 100% online on NSP, students must physically submit the printed acknowledgment copy, along with self-attested photocopies of all certificates, to their College Scholarship Section / Nodal Officer for electronic institutional verification on the portal.",
    commonMistakes: [
      "Student bank account not linked to Aadhaar for DBT: Merely linking Aadhaar for KYC does not activate the NPCI DBT mapper; students must specifically submit the 'Aadhaar DBT Mandate' at their bank.",
      "Applying under wrong state domicile: The application must be filed in the student's home state of permanent residence, even if studying in another state.",
      "Missing college institutional verification deadline: Colleges must approve online before the state deadline expires."
    ],
    deadlineInfo: "Announced annually for every academic session (usually opens in July/August and closes in November/December).",
    openingDate: "Typically opens every year in July/August",
    processingTime: "60 to 90 days following institutional and state district verification cut-offs.",
    renewalRequired: "Yes, students must apply for 'Renewal' every subsequent academic year after passing exams.",
    trackingProcedure: "Log in to scholarships.gov.in using OTR / Application ID to view Level 1 (College), Level 2 (District), and PFMS payment status.",
    correctionProcedure: "If application is marked 'Defective' by the college or district officer, it is returned to the student's portal for online correction within 7 days.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student's Bank Account via PFMS and NPCI Aadhaar Bridge",
    disbursementDetails: "Maintenance allowance and fee reimbursement amounts are released jointly by the Central Government (60%) and State Government (40%) directly into the student's bank account via PFMS.",
    faqs: [
      { q: "Can I apply if I am studying in a private unaided college?", a: "Yes. Post Matric SC scholarship covers students enrolled in recognized private colleges, provided the course is approved by UGC, AICTE, MCI, or state regulatory bodies." },
      { q: "Is there any minimum percentage required in Class 10 or 12?", a: "No minimum cut-off percentage is prescribed; students only need to pass the qualifying exam and obtain regular admission." },
      { q: "What should I do if my application is marked 'Defective'?", a: "Log in to your NSP account immediately. The defect remark by your college will be displayed (e.g. 're-upload income certificate'). Upload the corrected file and re-submit." },
      { q: "Can I receive this scholarship and another merit scholarship simultaneously?", a: "No. Under central guidelines, a student cannot hold two government scholarships simultaneously; you must choose the one offering higher benefits." },
      { q: "How much maintenance allowance does a hosteller get?", a: "Hostellers in professional degree courses (Group 1: MBBS, B.Tech, M.Tech) receive up to ₹13,500 per year in maintenance allowance." },
      { q: "What is OTR on the National Scholarship Portal?", a: "One Time Registration (OTR) is a unique 14-digit number assigned to a student upon Aadhaar facial/biometric verification on NSP, eliminating the need to re-register each year." }
    ],
    helpline: "NSP National Helpdesk: 0120-6619540",
    email: "helpdesk@nsp.gov.in"
  },

  "central-sector-scholarship": {
    launchYear: 2008,
    purpose: "The Central Sector Scheme of Scholarship for College and University Students (PM-USP), implemented by the Department of Higher Education, Ministry of Education, supports meritorious students from economically weaker sections to meet day-to-day expenses while pursuing university graduate and postgraduate degrees.",
    targetBeneficiary: "Meritorious students who score above the 80th percentile of their respective state/central education board in Class 12 and are enrolled in regular full-time undergraduate courses.",
    benefits: "Direct financial cash scholarship: ₹12,000 per year at Graduation level for the first 3 years of college, and ₹20,000 per year at Postgraduate level (or 4th & 5th year of integrated professional courses like B.Tech / MBBS). Disbursed directly into the student's bank account annually.",
    financialBenefit: "₹12,000 per year for Graduation (Years 1–3) and ₹20,000 per year for Post-Graduation (Years 4–5)",
    benefitFrequency: "Annual lump-sum disbursement for up to 5 years",
    impact: "Rewards academic merit, relieves financial anxiety for college students, and enables students to purchase textbooks, laptops, and study materials without parental loans.",
    detailedEligibility: {
      ageRequirement: "18 to 25 years.",
      genderRequirement: "50% of scholarships are reserved for girl students.",
      incomeLimit: "Gross family annual income must NOT exceed ₹4,50,000 per annum.",
      educationRequirement: "Class 12 pass with marks above the 80th percentile cut-off declared by the respective State Education Board / CBSE / CISCE.",
      occupationRequirement: "Enrolled in a regular full-time degree program in a recognized university/college.",
      casteCategoryRequirement: "Open to all categories (General, OBC, SC, ST, EWS) distributed per state quotas.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Family income verified by Revenue authority."
    },
    mandatoryConditions: [
      "Must have scored above the 80th percentile in Class 12 board examination in the current academic year",
      "Must be pursuing a regular, full-time undergraduate degree course recognized by UGC, AICTE, or government authorities",
      "Total family annual income must be below ₹4,50,000 per year",
      "Must maintain at least 50% marks in university exams and 75% attendance for annual renewal"
    ],
    conditionalRequirements: [
      "Board percentile verification slip issued by the respective state board / CBSE."
    ],
    ineligibility: [
      "Students pursuing diploma courses, distance education, or correspondence courses",
      "Students who have scored below the board's 80th percentile merit cut-off",
      "Students receiving any other state or central government scholarship or fee waiver",
      "Family annual income exceeding ₹4,50,000"
    ],
    documents: [
      {
        name: "Class 12 Marksheet & Board Merit/Percentile Verification",
        why: "Proves student scored above the 80th percentile cut-off.",
        mandatory: true,
        issuingAuthority: "State Board of Secondary Education / CBSE / CISCE",
        format: "Original Marksheet copy certified by College Principal",
        validity: "Permanent"
      },
      {
        name: "Income Certificate (Family income < ₹4.5 Lakh)",
        why: "Confirms family income is within prescribed limits.",
        mandatory: true,
        issuingAuthority: "Competent Revenue Authority (Tahsildar / SDM / Revenue Officer)",
        format: "Digitally signed Income Certificate",
        validity: "Current financial year"
      },
      {
        name: "College Admission Letter & Current Year Fee Receipt",
        why: "Proves enrollment in regular full-time undergraduate college course.",
        mandatory: true,
        issuingAuthority: "Affiliated College / University Registrar",
        format: "Original stamped receipt",
        validity: "Current academic session"
      },
      {
        name: "Aadhaar Card of Student",
        why: "Mandatory for NSP One-Time Registration and DBT transfer.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original / e-Aadhaar",
        validity: "Permanent"
      },
      {
        name: "Bank Passbook Copy (Aadhaar-Seeded)",
        why: "Direct payment of scholarship amount via PFMS.",
        mandatory: true,
        issuingAuthority: "Commercial Bank or India Post Payments Bank",
        format: "Clear copy with student's name and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via National Scholarship Portal (scholarships.gov.in)",
    process: [
      "Step 1: Check your Class 12 State Board cut-off list to ensure your score is above the 80th percentile.",
      "Step 2: Visit scholarships.gov.in and complete One-Time Registration (OTR) with Aadhaar.",
      "Step 3: Log in and choose 'Department of Higher Education' -> 'Central Sector Scheme of Scholarship for College and University Students'.",
      "Step 4: Enter your Class 12 Roll Number, Board Name, Year of Passing, and College AISHE code.",
      "Step 5: Fill in your parent's annual income and bank account details.",
      "Step 6: Upload the required documents (Marksheet, Income Certificate, Fee Receipt, and Photo).",
      "Step 7: Submit the application and print the confirmation copy.",
      "Step 8: Submit the printout and original verification documents to your College Nodal Officer.",
      "Step 9: College Nodal Officer verifies your enrollment on the NSP institute portal.",
      "Step 10: State Education Department approves, and funds are credited directly to your bank account via PFMS."
    ],
    offlineProcess: "Submit the physical copy of your NSP application form and attested photocopies of your 12th marksheet, income certificate, and fee receipt to your college scholarship counter.",
    commonMistakes: [
      "Applying with diploma enrollment: The scheme is strictly for degree courses (B.A., B.Sc., B.Com, B.Tech, MBBS, etc.); diploma polytechnics are ineligible.",
      "Failing to renew after 1st year: Students must apply for renewal every year on NSP with a marksheet showing at least 50% marks in college exams.",
      "Name discrepancy between 12th marksheet and Aadhaar: Causes rejection at board matching stage."
    ],
    deadlineInfo: "Opens annually on NSP in July/August and closes in November/December.",
    openingDate: "Annual academic cycle (July/August)",
    processingTime: "60 to 90 days after closure of institutional verification.",
    renewalRequired: "Yes, annual renewal required on NSP with at least 50% marks and 75% attendance.",
    trackingProcedure: "Track application status on scholarships.gov.in using OTR / Application ID.",
    correctionProcedure: "Request college nodal officer to reject application to 'Defective' status to enable online editing.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student's Bank Account via PFMS",
    disbursementDetails: "Central Government deposits ₹12,000 per year (Graduation) or ₹20,000 per year (Post-Graduation) as a single annual credit directly into the student's Aadhaar-seeded bank account.",
    faqs: [
      { q: "What is the 80th percentile cut-off?", a: "Each state education board and CBSE publishes a specific cut-off mark for Science, Commerce, and Arts streams representing the top 20% of passing students. If your marks equal or exceed that cut-off, you are eligible." },
      { q: "How many scholarships are awarded nationally every year?", a: "A total of 82,000 fresh scholarships are awarded every year across India (41,000 for boys and 41,000 for girls), allocated to states based on population." },
      { q: "Can I renew the scholarship if I have an academic backlog?", a: "To renew, you must secure at least 50% marks in the annual college examination and maintain 75% attendance. Students failing their annual exam are not eligible for renewal." },
      { q: "Can engineering (B.Tech) and medical (MBBS) students receive this?", a: "Yes. For 4-year engineering and 5-year medical degrees, students receive ₹12,000/year for the first 3 years and ₹20,000/year for the 4th and 5th years." },
      { q: "Is this scholarship available for postgraduate studies?", a: "Yes, students who received the scholarship during graduation and transition to postgraduate studies (M.A., M.Sc., M.Com) continue receiving ₹20,000/year." },
      { q: "Do I need to submit an income certificate every year for renewal?", a: "Yes, family income must be certified as remaining below ₹4.5 Lakh during renewal." }
    ],
    helpline: "Department of Higher Education Helpdesk: 0120-6619540",
    email: "highered-scholarships@gov.in"
  },

  "karnataka-ssp-post-matric": {
    launchYear: 2019,
    purpose: "State Scholarship Portal (SSP) Post-Matric Scholarship is an integrated digital welfare initiative of the Government of Karnataka combining scholarships across Social Welfare, Tribal Welfare, Backward Classes Welfare, and Minorities Welfare departments to automate seamless fee reimbursement and hostel food allowances for Karnataka students.",
    targetBeneficiary: "Students belonging to SC, ST, OBC, EWS, and Minority communities pursuing post-matric, technical, professional, and postgraduate education in Karnataka.",
    benefits: "Full reimbursement of college tuition fees approved by government fee regulatory committees plus monthly maintenance / food allowance (up to ₹1,500/month for day scholars and full hostel boarding charges for hostel inmates under Vidyasiri / departmental hostels).",
    financialBenefit: "Full college fee reimbursement + maintenance / food allowance up to ₹1,500/month",
    benefitFrequency: "Annual scholarship disbursed in installments",
    impact: "Provides paperless, face-less scholarship distribution in Karnataka, eliminating administrative delays and ensuring disadvantaged youth complete degree education.",
    detailedEligibility: {
      ageRequirement: "No age limit for degree students.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "SC/ST: up to ₹2,50,000 per year; Category-1: up to ₹2,50,000; 2A, 2B, 3A, 3B: up to ₹1,00,000 per year.",
      educationRequirement: "Passed SSLC (Class 10) and currently enrolled in a recognized post-matric course in Karnataka.",
      occupationRequirement: "Student.",
      casteCategoryRequirement: "SC, ST, Category-1, 2A, 2B, 3A, 3B, and Religious Minorities.",
      residenceRequirement: "Permanent resident / domicile of Karnataka.",
      familyConditions: "Covered per student record."
    },
    mandatoryConditions: [
      "Must be a permanent resident of Karnataka",
      "Must possess an official e-Attested Caste and Income Certificate with GSC/RD number from Nadakacheri portal",
      "Must have an active Kutumba (Family ID) number and Student Aadhaar number",
      "College must be registered on the Karnataka e-Attestation and SSP portal"
    ],
    conditionalRequirements: [
      "Hostel registration number required if claiming departmental or private hostel food subsidies."
    ],
    ineligibility: [
      "Non-Karnataka domicile students",
      "Income exceeding category limits (e.g. above ₹1 Lakh for Categories 2A, 2B, 3A, 3B)",
      "Students enrolled in unapproved private coaching or unrecognized institutions"
    ],
    documents: [
      {
        name: "Caste & Income Certificate with RD / GSC Number",
        why: "To electronically fetch verified caste and income data directly from Nadakacheri.",
        mandatory: true,
        issuingAuthority: "Revenue Department, Karnataka (Nadakacheri / Atalji Janasnehi Kendra)",
        format: "15-digit RD Number (e.g. RD0038...)",
        validity: "Active validity on Nadakacheri database"
      },
      {
        name: "Student Aadhaar Card & Kutumba ID",
        why: "Identity verification and automated family mapping.",
        mandatory: true,
        issuingAuthority: "UIDAI / Centre for e-Governance, Karnataka",
        format: "Aadhaar number and Kutumba 10-digit ID",
        validity: "Permanent"
      },
      {
        name: "College Fee Receipt & Study Certificate",
        why: "For e-Attestation of current academic enrollment and fee structure.",
        mandatory: true,
        issuingAuthority: "Enrolled College / University in Karnataka",
        format: "e-Attested document on e-Attestation portal",
        validity: "Current academic year"
      },
      {
        name: "Aadhaar-Seeded Bank Account",
        why: "Direct payment of scholarship amount via Aadhaar Payment Bridge (APB).",
        mandatory: true,
        issuingAuthority: "Bank Branch",
        format: "Account seeded on NPCI DBT mapper",
        validity: "Active"
      }
    ],
    applicationMode: "Online through Karnataka State Scholarship Portal (ssp.postmatric.karnataka.gov.in)",
    process: [
      "Step 1: Get your college study certificate and fee receipt e-attested by your college e-Attestation officer on the e-attestation portal.",
      "Step 2: Visit ssp.postmatric.karnataka.gov.in and click 'Create Account'.",
      "Step 3: Enter your Aadhaar number, name as per Aadhaar, and verify via Aadhaar OTP.",
      "Step 4: Enter your Kutumba Family ID (system auto-populates family details).",
      "Step 5: Enter your Caste & Income Certificate RD Number (system auto-verifies data from Nadakacheri).",
      "Step 6: Select your College University, College Name, Course, and enter your e-Attested document numbers.",
      "Step 7: Provide hostel details if staying in a private paying guest (PG) or college hostel.",
      "Step 8: Review the auto-calculated fee reimbursement and maintenance allowance summary.",
      "Step 9: Submit the application online. No physical paper submission to government offices is required.",
      "Step 10: Department verifies electronic approvals, and scholarship funds are credited directly to your bank account."
    ],
    offlineProcess: "The SSP process in Karnataka is completely paperless. Students only need to present their original fee receipt and marksheet to their college e-attestation officer, who approves the documents on the digital system.",
    commonMistakes: [
      "Applying before e-Attestation: You must complete e-Attestation of your study certificate before submitting the SSP form.",
      "RD Number mismatch: Entering an expired or parent's old RD number instead of an active certificate.",
      "Bank account not mapped on NPCI: SSP strictly dispatches payments via Aadhaar Payment Bridge; bank accounts without active DBT mapping fail."
    ],
    deadlineInfo: "Announced annually by the Karnataka government (typically opens in October and closes in January/February).",
    openingDate: "Annual academic cycle (September/October)",
    processingTime: "30 to 45 days following college and taluk welfare verification.",
    renewalRequired: "Yes, students must apply for renewal every academic year.",
    trackingProcedure: "Log in to ssp.postmatric.karnataka.gov.in and click 'Student Status' to check sanction and payment progress.",
    correctionProcedure: "Contact your college scholarship officer to reject un-approved entries so you can edit the application online.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student's Bank Account via Karnataka DBT Portal",
    disbursementDetails: "Tuition fee reimbursement is transferred directly to the college account (or student account), and maintenance/hostel allowances are credited directly into the student's Aadhaar-linked savings account.",
    faqs: [
      { q: "What is Kutumba ID in Karnataka SSP?", a: "Kutumba is the Karnataka Government's unified family database. It automatically identifies all family members, their caste, and land ownership, eliminating repetitive document submissions." },
      { q: "What is e-Attestation and how do I get it?", a: "e-Attestation is the process where a designated officer in your college verifies your original fee receipt and marksheet and approves it digitally on the eattest.karnataka.gov.in portal." },
      { q: "What is the income limit for Category 2A, 2B, 3A, and 3B students?", a: "The annual family income must be less than ₹1,00,000 per annum for Category 2A, 2B, 3A, and 3B." },
      { q: "Can students in private engineering colleges get fee reimbursement?", a: "Yes, CET/KEA quota students in private engineering and medical colleges receive full or partial fee reimbursement as approved by the government." },
      { q: "What is Vidyasiri scholarship on SSP?", a: "Vidyasiri provides monthly food and accommodation allowances (up to ₹1,500/month) for students who do not get admission into government departmental hostels." },
      { q: "How can I verify if my bank account is seeded with Aadhaar?", a: "Visit the Karnataka DBT portal (dbt.karnataka.gov.in) and click 'Know Your Aadhaar Seeding Status'." }
    ],
    helpline: "SSP Karnataka Toll-Free: 1902 or 080-35254757",
    email: "postmatrichelp@karnataka.gov.in"
  },

  "nmmss": {
    launchYear: 2008,
    purpose: "National Means-cum-Merit Scholarship Scheme (NMMSS), implemented by the Department of School Education and Literacy, Ministry of Education, awards scholarships to meritorious students from economically weaker sections to arrest dropouts at Class 8 and encourage them to complete secondary and higher secondary schooling up to Class 12.",
    targetBeneficiary: "Students studying in Class 8 in government, local body, and government-aided schools who clear the statewide NMMSS selection examination.",
    benefits: "Direct financial assistance of ₹12,000 per year (₹1,000 per month) from Class 9 to Class 12 (total ₹48,000 over 4 years) transferred directly into the student's bank account via DBT on the National Scholarship Portal.",
    financialBenefit: "₹12,000 per year (₹1,000 per month) from Class 9 through Class 12",
    benefitFrequency: "Annual single lump-sum credit (₹12,000) for 4 consecutive years",
    impact: "Prevents high school dropouts among talented rural and economically disadvantaged children, ensuring they pass Class 12.",
    detailedEligibility: {
      ageRequirement: "Students enrolled in Class 8 (typically 12 to 14 years).",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Total parental annual income from all sources must NOT exceed ₹3,50,000 per annum.",
      educationRequirement: "Minimum 55% marks in Class 7 annual exam (50% for SC/ST students); enrolled in government, government-aided, or local body school.",
      occupationRequirement: "School student.",
      casteCategoryRequirement: "Open to all categories (General, OBC, SC, ST) with applicable state reservation quotas.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Verified family annual income below ₹3.5 Lakh."
    },
    mandatoryConditions: [
      "Must have secured at least 55% marks (50% for SC/ST) in Class 7 examination",
      "Must clear the competitive NMMSS selection test conducted by the State Government (Mental Ability Test + Scholastic Aptitude Test)",
      "Must be studying as a regular student in a Government, Local Body, or Government-aided school",
      "Total family annual income must not exceed ₹3,50,000 per annum"
    ],
    conditionalRequirements: [
      "Must maintain at least 55% marks in Class 8, 9, 10, and 11 to receive annual renewal in subsequent years (50% for SC/ST)."
    ],
    ineligibility: [
      "Students enrolled in private unaided schools",
      "Students of Kendriya Vidyalayas (KVS), Jawahar Navodaya Vidyalayas (JNV), and Sainik Schools",
      "Students studying in residential schools run by government where boarding and lodging are fully provided",
      "Family annual income exceeding ₹3,50,000"
    ],
    documents: [
      {
        name: "Class 7 Marksheet / Pass Certificate",
        why: "Proves minimum 55% marks eligibility in qualifying exam.",
        mandatory: true,
        issuingAuthority: "School Headmaster / Headmistress",
        format: "Signed school marksheet copy",
        validity: "Permanent"
      },
      {
        name: "NMMSS Merit Test Scorecard / Selection Letter",
        why: "Confirms passing of the state-level NMMSS entrance examination.",
        mandatory: true,
        issuingAuthority: "State Examination Board / SCERT",
        format: "Official merit list certificate / Admit card with roll number",
        validity: "Permanent"
      },
      {
        name: "Income Certificate (Family income < ₹3.5 Lakh)",
        why: "Verifies family meets the economic means benchmark.",
        mandatory: true,
        issuingAuthority: "Revenue Authority (Tahsildar / SDM / Revenue Inspector)",
        format: "Valid Income Certificate",
        validity: "Current financial year"
      },
      {
        name: "Student Aadhaar Card & Aadhaar-Seeded Bank Passbook",
        why: "Mandatory for NSP registration and annual DBT scholarship transfer.",
        mandatory: true,
        issuingAuthority: "UIDAI / Bank",
        format: "Aadhaar and bank passbook copies",
        validity: "Active account"
      }
    ],
    applicationMode: "Stage 1: Offline entrance test registration via School; Stage 2: Online scholarship claim via NSP (scholarships.gov.in)",
    process: [
      "Step 1: When studying in Class 8, apply for the State NMMSS Examination through your school headmaster in August/September.",
      "Step 2: Appear for the competitive exam consisting of MAT (Mental Ability Test) and SAT (Scholastic Aptitude Test) in November/December.",
      "Step 3: State SCERT / Education Department publishes the Merit List of selected scholars.",
      "Step 4: Selected students register on the National Scholarship Portal (scholarships.gov.in) under NMMSS.",
      "Step 5: Fill in Student Profile, Class 8 school details, Aadhaar number, and Bank Account details.",
      "Step 6: Upload Income Certificate, Caste Certificate, and Marksheet.",
      "Step 7: Submit the application on NSP and submit a printed copy to your school principal.",
      "Step 8: School verifies your enrollment on the portal (Level 1), and District Nodal Officer approves (Level 2).",
      "Step 9: Ministry of Education transfers ₹12,000 per year directly to the student's bank account via PFMS.",
      "Step 10: Apply for annual renewal on NSP in Classes 10, 11, and 12 upon passing previous year exams."
    ],
    offlineProcess: "Initial entrance test applications are submitted through your school headmaster to the District Education Office (DEO). School authorities coordinate the hall tickets and exam centers.",
    commonMistakes: [
      "Opening bank account without student's own name: Account must be in the student's name (or joint with parent) and must be Aadhaar-seeded.",
      "Failing to renew on NSP in Class 10 or 11: Even though selected in Class 8, students MUST file renewal applications on NSP every year.",
      "Transferring to a private unaided school: Shifting to a private school automatically terminates the scholarship."
    ],
    deadlineInfo: "State exam held in November/December; NSP portal submission opens annually from July to November.",
    openingDate: "July/August for online claims",
    processingTime: "60 days after closure of national verification deadlines.",
    renewalRequired: "Yes, annual renewal required in Classes 10, 11, and 12.",
    trackingProcedure: "Check application progress on scholarships.gov.in using OTR / Application ID.",
    correctionProcedure: "School Nodal Officer can mark defective on the NSP portal for corrections.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student's Bank Account via PFMS",
    disbursementDetails: "₹12,000 is credited annually in a single lump-sum transfer directly into the student's Aadhaar-linked savings bank account.",
    faqs: [
      { q: "How many scholarships are available under NMMSS?", a: "One lakh (1,00,000) fresh scholarships are awarded every year across all states and union territories in India." },
      { q: "What is the examination pattern for NMMSS?", a: "The exam consists of two 90-minute tests: 1) Mental Ability Test (MAT) with 90 multiple-choice questions on reasoning, and 2) Scholastic Aptitude Test (SAT) with 90 questions covering science, mathematics, and social studies." },
      { q: "Can students of Jawahar Navodaya Vidyalaya (JNV) apply?", a: "No. JNV, Kendriya Vidyalaya, and other fully subsidized residential school students are not eligible." },
      { q: "What happens if I score less than 55% in Class 9 or 10?", a: "To continue receiving the scholarship in Classes 10, 11, and 12, you must secure at least 55% marks (50% for SC/ST) in the annual promotional examination." },
      { q: "Can I choose Science, Arts, or Commerce in Class 11 and keep the scholarship?", a: "Yes. You can pursue any recognized stream in higher secondary education (Classes 11 and 12) in government or aided schools." },
      { q: "Is there an examination fee to appear for NMMSS?", a: "States charge a nominal application fee of around ₹50 to ₹100, which is often waived or subsidized for SC/ST students." }
    ],
    helpline: "Ministry of Education NMMSS Cell: 0120-6619540",
    email: "school.edu-scholarships@gov.in"
  },

  "post-matric-minorities": {
    launchYear: 2006,
    purpose: "The Post Matric Scholarship Scheme for Minorities, implemented by the Ministry of Minority Affairs, empowers students from notified minority communities to pursue higher education from Class 11 up to Ph.D. level, enhancing employability and educational attainment.",
    targetBeneficiary: "Students belonging to notified minority communities (Muslim, Christian, Sikh, Buddhist, Jain, Parsi) studying in Class 11, 12, vocational courses, undergraduate, postgraduate, or doctoral studies.",
    benefits: "Admission and tuition fees up to ₹10,000 per year for technical/higher secondary courses plus monthly maintenance allowance of up to ₹10,000 per year for hostellers (₹5,700 for day scholars) in professional courses.",
    financialBenefit: "Admission/Tuition fee reimbursement up to ₹10,000/year + Maintenance allowance up to ₹10,000/year",
    benefitFrequency: "Annual single-year disbursement",
    impact: "Closes the educational gap for religious minorities, promotes gender balance (30% earmarked for girls), and reduces dropout rates in higher secondary education.",
    detailedEligibility: {
      ageRequirement: "No age limit for college students.",
      genderRequirement: "All genders eligible; 30% earmarked for girl students.",
      incomeLimit: "Total parental/family annual income from all sources must NOT exceed ₹2,00,000 per annum.",
      educationRequirement: "Minimum 50% marks or equivalent grade in the previous final examination.",
      occupationRequirement: "Student.",
      casteCategoryRequirement: "Notified Minority Communities: Muslims, Christians, Sikhs, Buddhists, Jains, and Parsis.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Not more than two students from the same family."
    },
    mandatoryConditions: [
      "Must belong to one of the 6 notified national minority communities",
      "Must have secured not less than 50% marks in the previous annual examination",
      "Total annual family income must not exceed ₹2,00,000 per annum",
      "Must be enrolled in a recognized government or private school, college, or university"
    ],
    conditionalRequirements: [
      "Minority community self-declaration or community certificate."
    ],
    ineligibility: [
      "Students with family annual income exceeding ₹2,00,000",
      "Students scoring less than 50% marks in the previous qualifying examination",
      "Beneficiaries receiving any other government scholarship"
    ],
    documents: [
      {
        name: "Minority Community Certificate / Self-Declaration",
        why: "Confirms membership in a notified religious minority community.",
        mandatory: true,
        issuingAuthority: "Self-declaration on prescribed form (for 18+) or parent declaration / Revenue Certificate",
        format: "Signed self-declaration affidavit or Revenue Certificate",
        validity: "Permanent"
      },
      {
        name: "Income Certificate (Family income < ₹2 Lakh)",
        why: "Proves compliance with economic ceiling.",
        mandatory: true,
        issuingAuthority: "Competent Revenue Authority (Tahsildar / SDM / Revenue Inspector)",
        format: "Valid Revenue Income Certificate",
        validity: "Current financial year"
      },
      {
        name: "Previous Year Marksheet (Minimum 50% Marks)",
        why: "Academic merit verification.",
        mandatory: true,
        issuingAuthority: "Board / College / University",
        format: "Certified marksheet copy",
        validity: "Permanent"
      },
      {
        name: "College Fee Receipt & Admission Letter",
        why: "Verifies current enrollment and fee reimbursement claim.",
        mandatory: true,
        issuingAuthority: "College Principal / Registrar",
        format: "Official fee receipt",
        validity: "Current academic year"
      },
      {
        name: "Student Aadhaar Card & Aadhaar-Seeded Bank Passbook",
        why: "For NSP verification and DBT payment.",
        mandatory: true,
        issuingAuthority: "UIDAI / Bank",
        format: "Aadhaar copy and bank passbook",
        validity: "Active account"
      }
    ],
    applicationMode: "Online through National Scholarship Portal (scholarships.gov.in)",
    process: [
      "Step 1: Complete OTR (One-Time Registration) on scholarships.gov.in using Aadhaar.",
      "Step 2: Log in and select 'Ministry of Minority Affairs' -> 'Post Matric Scholarship Scheme for Minorities'.",
      "Step 3: Enter academic details, previous examination percentage (must be >= 50%), and current course.",
      "Step 4: Select your religious community (Muslim, Christian, Sikh, Buddhist, Jain, or Parsi).",
      "Step 5: Fill in family annual income and bank account details.",
      "Step 6: Upload Marksheet, Income Certificate, Minority Community Declaration, and Fee Receipt.",
      "Step 7: Submit the application and print the confirmation copy.",
      "Step 8: Submit the printout and copies of documents to your college scholarship officer.",
      "Step 9: College verifies (Level 1), District Minority Welfare Officer approves (Level 2).",
      "Step 10: Funds are transferred directly to your bank account via PFMS."
    ],
    offlineProcess: "Submit the physical copy of the application form and self-attested documents to your college nodal officer for institutional online verification.",
    commonMistakes: [
      "Entering percentage below 50%: Applications with less than 50% are automatically rejected by the NSP portal.",
      "Uploading self-declaration without signature: Ensure the minority declaration is properly signed and dated."
    ],
    deadlineInfo: "Annual NSP window: opens July/August, closes October/November.",
    openingDate: "July/August annually",
    processingTime: "60 to 90 days after closure of verification window.",
    renewalRequired: "Yes, annual renewal on NSP upon passing previous year exams with at least 50% marks.",
    trackingProcedure: "Track application status on scholarships.gov.in using OTR / Application ID.",
    correctionProcedure: "College Nodal Officer can mark defective for online edits before the cut-off date.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student's Bank Account via PFMS",
    disbursementDetails: "Scholarship amount is credited directly into the student's Aadhaar-linked savings account.",
    faqs: [
      { q: "Which communities are covered under this scheme?", a: "Six notified minority communities: Muslims, Christians, Sikhs, Buddhists, Jains, and Parsis (Zoroastrians)." },
      { q: "Is there a quota for female students?", a: "Yes. 30% of all scholarships are earmarked exclusively for female students." },
      { q: "What is the minimum percentage required?", a: "You must score at least 50% marks in the final examination of the preceding class." },
      { q: "Can Class 11 and 12 students apply?", a: "Yes. The Post Matric scheme covers Class 11, Class 12, ITI, Polytechnic, Diploma, Undergraduate, Postgraduate, and Ph.D. courses." },
      { q: "What is the family income limit?", a: "Total family annual income from all sources must not exceed ₹2,00,000 per annum." },
      { q: "Can I receive both a state minority scholarship and this central scholarship?", a: "No. You can only avail one government scholarship at a time." }
    ],
    helpline: "Minority Affairs Helpdesk: 1800-112-001 or 0120-6619540",
    email: "minorityaffairs-scholarships@gov.in"
  },

  "top-class-sc": {
    launchYear: 2005,
    purpose: "Top Class Education Scheme for Scheduled Caste Students, implemented by the Ministry of Social Justice and Empowerment, recognizes and promotes quality higher education among SC students by fully funding education in notified premier institutions (IITs, IIMs, NITs, AIIMS, National Law Universities, and leading private universities).",
    targetBeneficiary: "Scheduled Caste (SC) students who secure admission to any of the 260+ premier notified institutions of national importance across India.",
    benefits: "Full non-refundable tuition fees and mandatory fees (up to ₹2.0 Lakh/year in private institutes and full actual fees in government institutes) + Living expenses of ₹3,000 per month (₹36,000/year) + Books & stationery allowance of ₹5,000/year + Computer/Laptop grant of ₹45,000 one-time.",
    financialBenefit: "Full tuition fee reimbursement + ₹36,000/year living expenses + ₹5,000/year books + ₹45,000 one-time laptop allowance",
    benefitFrequency: "Annual comprehensive scholarship for the entire course duration",
    impact: "Ensures financial constraints never prevent poor Scheduled Caste students from studying at India's top academic institutions like IITs, IIMs, and NLUs.",
    detailedEligibility: {
      ageRequirement: "No age limit.",
      genderRequirement: "All genders eligible; 30% earmarked for female students.",
      incomeLimit: "Total family annual income from all sources must NOT exceed ₹8,00,000 per annum.",
      educationRequirement: "Admission secured into a notified premier institution through national entrance exams (JEE Advanced, NEET, CAT, CLAT, etc.).",
      occupationRequirement: "Full-time student.",
      casteCategoryRequirement: "Strictly Scheduled Caste (SC).",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Covered per student record."
    },
    mandatoryConditions: [
      "Must belong to the Scheduled Caste community with valid caste certificate",
      "Must have secured admission in one of the 260+ institutions notified under the Top Class SC scheme",
      "Total family annual income must not exceed ₹8,00,000 per annum",
      "Must be enrolled in a full-time regular degree course"
    ],
    conditionalRequirements: [
      "Purchase bill/invoice required to claim the one-time ₹45,000 computer/laptop allowance."
    ],
    ineligibility: [
      "Institutions not listed in the official notified list of Top Class institutions",
      "Students whose total family annual income exceeds ₹8,00,000",
      "Students receiving any other parallel central/state scholarship"
    ],
    documents: [
      {
        name: "Scheduled Caste (SC) Certificate",
        why: "Confirms caste eligibility.",
        mandatory: true,
        issuingAuthority: "Competent Revenue Authority (Tahsildar / SDM)",
        format: "Digitally signed / Verified certificate",
        validity: "Permanent"
      },
      {
        name: "Income Certificate (Family income < ₹8.0 Lakh)",
        why: "Verifies family income is within ₹8 Lakh ceiling.",
        mandatory: true,
        issuingAuthority: "Revenue Authority (Tahsildar / SDM)",
        format: "Revenue Department certificate",
        validity: "Current financial year"
      },
      {
        name: "National Entrance Exam Scorecard & College Admission Letter",
        why: "Proves admission into notified premier institution via JEE, NEET, CLAT, CAT, etc.",
        mandatory: true,
        issuingAuthority: "National Testing Agency / College Dean",
        format: "Admission offer letter showing institute name",
        validity: "Permanent"
      },
      {
        name: "Fee Structure Breakdown from Premier Institute",
        why: "Itemized non-refundable tuition and institutional fees.",
        mandatory: true,
        issuingAuthority: "Registrar / Finance Officer of Notified Institute",
        format: "Signed official fee statement",
        validity: "Current academic year"
      },
      {
        name: "Aadhaar Card & Bank Passbook Copy",
        why: "Identity verification and direct DBT disbursement.",
        mandatory: true,
        issuingAuthority: "UIDAI / Bank",
        format: "Aadhaar and bank passbook copies",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via National Scholarship Portal (scholarships.gov.in)",
    process: [
      "Step 1: Secure admission to any of the 260+ premier institutions (e.g. IIT Bombay, IIM Ahmedabad, NLSIU Bengaluru, AIIMS New Delhi).",
      "Step 2: Visit scholarships.gov.in and complete OTR registration.",
      "Step 3: Select 'Ministry of Social Justice and Empowerment' -> 'Top Class Education Scheme for SC Students'.",
      "Step 4: Enter Institute AISHE code, course details, entrance exam rank, and roll number.",
      "Step 5: Fill in family income and bank account details.",
      "Step 6: Upload Caste certificate, Income certificate, Fee structure, and Admission letter.",
      "Step 7: Submit online and submit a copy to the Institute Registrar / Scholarship Nodal Officer.",
      "Step 8: Institute verifies student records on NSP portal (Level 1).",
      "Step 9: Ministry of Social Justice approves the scholarship.",
      "Step 10: Tuition fees are disbursed directly to the institute, and living/laptop allowances are credited to the student's bank account."
    ],
    offlineProcess: "Submit your NSP printed confirmation and self-attested documents to your institute's Dean of Academic Affairs / Scholarship Cell for online verification.",
    commonMistakes: [
      "Applying if institute is not on notified list: Only students in the 260+ institutions notified by the Ministry qualify.",
      "Not submitting laptop purchase bill: The ₹45,000 laptop grant requires submitting a GST invoice within the first year."
    ],
    deadlineInfo: "Opens annually on NSP from July to November.",
    openingDate: "July/August annually",
    processingTime: "45 to 60 days following institutional verification.",
    renewalRequired: "Yes, annual renewal based on satisfactory academic performance and promotion to next year.",
    trackingProcedure: "Track status on scholarships.gov.in using OTR / Application ID.",
    correctionProcedure: "Institute nodal officer can mark application defective for online amendments.",
    disbursementMethod: "Direct Benefit Transfer (DBT) to Institute (Tuition) and Student Bank Account (Allowances)",
    disbursementDetails: "Tuition fee is credited directly to the premier institute's bank account; living allowance (₹36,000/yr), book allowance (₹5,000/yr), and computer grant (₹45,000) are credited to the student's personal account via PFMS.",
    faqs: [
      { q: "Which institutions are covered under the Top Class SC scheme?", a: "Over 260+ institutions of national repute, including all IITs, IIMs, NITs, IIITs, AIIMS, National Law Universities (NLUs), NID, NIFT, and top NIRF-ranked private universities." },
      { q: "What is the income limit for Top Class SC scholarship?", a: "The family annual income limit is ₹8,00,000 (Eight Lakh Rupees) per annum." },
      { q: "Is the full tuition fee paid by the government?", a: "Yes. For government premier institutes (IITs/IIMs/NITs/AIIMS), 100% of the actual tuition fee is paid. For notified private institutes, fees up to ₹2.0 Lakh per year are covered." },
      { q: "How much is the laptop/computer grant?", a: "A one-time grant of ₹45,000 is provided to purchase a laptop, desktop, or tablet with printer accessories." },
      { q: "What happens if a student fails a semester exam?", a: "The scholarship continues for the normal duration of the course, but will not be paid for any repeated years or extended semesters." },
      { q: "Can a student apply in the 2nd year if they missed applying in 1st year?", a: "Fresh applications are accepted primarily in the first year of the course. Renewal applications continue for subsequent years." }
    ],
    helpline: "Top Class SC Scheme Desk: 011-23381643 / 0120-6619540",
    email: "topclass-sc@nic.in"
  },

  "aicte-pragati": {
    launchYear: 2014,
    purpose: "The AICTE Pragati Scholarship for Girl Students, implemented by the All India Council for Technical Education, Ministry of Education, empowers meritorious female students to pursue technical degree and diploma education, advancing women's participation in engineering and technology.",
    targetBeneficiary: "Female students admitted to the first year of AICTE-approved technical degree or diploma courses (or second year through lateral entry) through centralized state counseling.",
    benefits: "Direct financial assistance of ₹50,000 per year for every year of study (4 years for Degree, 3 years for Diploma) towards college fee payment, computer purchase, textbooks, software, equipment, and competitive examination fees.",
    financialBenefit: "₹50,000 per year for every year of study (up to ₹2,00,000 total for 4-year degree course)",
    benefitFrequency: "Annual single lump-sum transfer directly into student's bank account",
    impact: "Breaks financial barriers for girls pursuing STEM (Science, Technology, Engineering, and Math), boosts female engineering admissions, and builds women tech leaders.",
    detailedEligibility: {
      ageRequirement: "No age limit.",
      genderRequirement: "Strictly Female students only.",
      incomeLimit: "Total family annual income from all sources must NOT exceed ₹8,00,000 per annum.",
      educationRequirement: "Admitted into 1st year of technical Degree/Diploma or 2nd year via Lateral Entry in an AICTE-approved institution.",
      occupationRequirement: "Technical student.",
      casteCategoryRequirement: "Open to all categories (General, OBC, SC, ST) with constitutional reservation quotas.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Maximum of two girl children per family are eligible."
    },
    mandatoryConditions: [
      "Must be a female student admitted to an AICTE-approved technical institution in the current academic year",
      "Admission must be secured through the centralized counseling process of the state/central government",
      "Total family annual income must not exceed ₹8,00,000 per year",
      "Only up to two girl children per family can receive Pragati benefits"
    ],
    conditionalRequirements: [
      "Lateral entry certificate required if admitted directly into 2nd year of B.Tech/Diploma."
    ],
    ineligibility: [
      "Male students",
      "Students admitted through management / institute-level quota without centralized counseling",
      "Students in non-AICTE approved colleges or non-technical general degree courses (B.A., B.Com, B.Sc.)",
      "Family annual income exceeding ₹8,00,000"
    ],
    documents: [
      {
        name: "Class 10 & 12 / Diploma Marksheet",
        why: "Proves qualifying examination academic merit.",
        mandatory: true,
        issuingAuthority: "State Board / CBSE / Technical Board",
        format: "Certified marksheet copy",
        validity: "Permanent"
      },
      {
        name: "Centralized Admission Allotment Letter",
        why: "Confirms admission through official centralized counseling (e.g. KCET, MHT-CET, TNEA, WBJEE, JoSAA).",
        mandatory: true,
        issuingAuthority: "State / Central Admission Authority",
        format: "Official seat allotment letter",
        validity: "Current academic year"
      },
      {
        name: "Income Certificate (Family income < ₹8.0 Lakh)",
        why: "Verifies family meets the economic criterion.",
        mandatory: true,
        issuingAuthority: "Competent Revenue Authority (Tahsildar / SDM)",
        format: "Digitally signed certificate",
        validity: "Current financial year"
      },
      {
        name: "Family Declaration (Two Girl Children Certificate)",
        why: "Declares that not more than two girl children in the family are availing the scheme.",
        mandatory: true,
        issuingAuthority: "Signed by Parents on prescribed Proforma",
        format: "Signed proforma / notary affidavit",
        validity: "Current"
      },
      {
        name: "Student Aadhaar Card & Aadhaar-Seeded Bank Passbook",
        why: "Identity verification and direct DBT disbursement.",
        mandatory: true,
        issuingAuthority: "UIDAI / Bank",
        format: "Aadhaar and bank passbook",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via National Scholarship Portal (scholarships.gov.in)",
    process: [
      "Step 1: Secure admission into an AICTE-approved engineering college or polytechnic via centralized state counseling.",
      "Step 2: Visit scholarships.gov.in and complete OTR registration.",
      "Step 3: Select 'AICTE' -> 'PRAGATI Scholarship Scheme For Girl Students'.",
      "Step 4: Enter AICTE College Approval Code, Course, Roll Number, and counseling allotment details.",
      "Step 5: Fill in family income and bank account details.",
      "Step 6: Upload Allotment Letter, Income Certificate, Marksheet, and Parent declaration.",
      "Step 7: Submit application online and submit physical copy to your college AICTE coordinator.",
      "Step 8: College verifies student details on the NSP portal.",
      "Step 9: AICTE reviews and approves the national merit scholarship list.",
      "Step 10: ₹50,000 per year is credited directly to the student's bank account via PFMS."
    ],
    offlineProcess: "Submit the physical copy of the application form and self-attested documents to your college AICTE Nodal Officer for electronic institutional approval.",
    commonMistakes: [
      "Applying if admitted via Management Quota: AICTE strictly requires admission through centralized state counseling.",
      "Bank account not in student's name: Account must be an individual savings account in the girl student's name.",
      "College not AICTE approved: Institutions must hold valid AICTE approval for the admitted course."
    ],
    deadlineInfo: "Annual NSP window: opens July/August, closes October/November.",
    openingDate: "July/August annually",
    processingTime: "60 to 90 days after closure of institutional verification.",
    renewalRequired: "Yes, annual renewal on NSP upon passing year-end exams and promotion to next semester.",
    trackingProcedure: "Track application status on scholarships.gov.in using OTR / Application ID.",
    correctionProcedure: "College nodal officer can mark defective on the NSP portal for online corrections.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student's Bank Account via PFMS",
    disbursementDetails: "AICTE transfers ₹50,000 as a single annual credit directly into the female student's Aadhaar-linked savings account.",
    faqs: [
      { q: "How many Pragati scholarships are awarded each year?", a: "AICTE awards 10,000 scholarships annually (5,000 for Degree and 5,000 for Diploma), plus all eligible applicants from 23 special/NE states." },
      { q: "Can two sisters from the same family apply?", a: "Yes. Up to two girl children from the same family are eligible to receive the Pragati scholarship." },
      { q: "What expenses can the ₹50,000 amount be used for?", a: "The lump-sum amount of ₹50,000/year can be utilized towards college fees, purchase of computers, software, books, equipment, and competitive examination fees without itemized audit." },
      { q: "Can lateral entry students into 2nd year apply?", a: "Yes. Female students admitted directly into the 2nd year of B.Tech through lateral entry counseling can apply." },
      { q: "What is the family income limit?", a: "Total family annual income must not exceed ₹8,00,000 per annum." },
      { q: "Is there any reservation for SC/ST and OBC students in Pragati?", a: "Yes, constitutional reservation applies: 15% for SC, 7.5% for ST, and 27% for OBC candidates." }
    ],
    helpline: "AICTE Student Helpdesk: 011-29581333 / 0120-6619540",
    email: "pragati-aicte@gov.in"
  },

  "aicte-saksham": {
    launchYear: 2014,
    purpose: "The AICTE Saksham Scholarship Scheme, implemented by the All India Council for Technical Education, supports specially-abled students with 40%+ disability to pursue professional technical degree and diploma education, fostering equal opportunities in engineering and technology careers.",
    targetBeneficiary: "Specially-abled students (disability not less than 40%) admitted to the 1st year of technical degree/diploma courses (or 2nd year lateral entry) in AICTE-approved institutions.",
    benefits: "Direct financial assistance of ₹50,000 per year for every year of study towards college tuition fees, purchase of assistive devices, books, software, and educational aids.",
    financialBenefit: "₹50,000 per year for every year of study (up to ₹2,00,000 total)",
    benefitFrequency: "Annual single lump-sum transfer directly into student's bank account",
    impact: "Enables students with disabilities to access modern engineering education and assistive educational technology without financial strain.",
    detailedEligibility: {
      ageRequirement: "No age limit.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "Total family annual income from all sources must NOT exceed ₹8,00,000 per annum.",
      educationRequirement: "Admitted into 1st year of Degree/Diploma or 2nd year via Lateral Entry in an AICTE-approved institution.",
      occupationRequirement: "Technical student.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Covered per student record."
    },
    mandatoryConditions: [
      "Must have a diagnosed disability of not less than 40% certified by a Competent Medical Authority / UDID Card",
      "Must be admitted to an AICTE-approved technical institution through centralized counseling",
      "Total family annual income must not exceed ₹8,00,000 per annum"
    ],
    conditionalRequirements: [
      "UDID card or Medical Board disability certificate showing 40%+ benchmark disability."
    ],
    ineligibility: [
      "Disability assessed under 40%",
      "Students admitted through management quota without counseling",
      "Non-AICTE approved colleges",
      "Family annual income exceeding ₹8,00,000"
    ],
    documents: [
      {
        name: "Disability Certificate / UDID Card showing 40%+ Disability",
        why: "Confirms benchmark disability under RPwD Act 2016.",
        mandatory: true,
        issuingAuthority: "Competent Medical Board / District CMO",
        format: "Original Disability Certificate or UDID Card",
        validity: "Permanent or valid temporary certificate"
      },
      {
        name: "Centralized Admission Allotment Letter",
        why: "Confirms admission through official counseling.",
        mandatory: true,
        issuingAuthority: "State / Central Counseling Authority",
        format: "Seat allotment letter",
        validity: "Current academic session"
      },
      {
        name: "Income Certificate (Family income < ₹8.0 Lakh)",
        why: "Verifies family income meets scheme guidelines.",
        mandatory: true,
        issuingAuthority: "Competent Revenue Authority (Tahsildar / SDM)",
        format: "Digitally signed Income Certificate",
        validity: "Current financial year"
      },
      {
        name: "Class 10 & 12 / Diploma Marksheet",
        why: "Academic eligibility proof.",
        mandatory: true,
        issuingAuthority: "Board / University",
        format: "Certified marksheet",
        validity: "Permanent"
      },
      {
        name: "Student Aadhaar Card & Aadhaar-Seeded Bank Passbook",
        why: "Identity verification and direct DBT disbursement.",
        mandatory: true,
        issuingAuthority: "UIDAI / Bank",
        format: "Aadhaar and bank passbook",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via National Scholarship Portal (scholarships.gov.in)",
    process: [
      "Step 1: Secure admission in an AICTE-approved engineering college or polytechnic.",
      "Step 2: Complete OTR registration on scholarships.gov.in with Aadhaar.",
      "Step 3: Select 'AICTE' -> 'SAKSHAM Scholarship Scheme For Specially-Abled Students'.",
      "Step 4: Enter AICTE College Approval Code, Course, Roll Number, and counseling details.",
      "Step 5: Fill in Disability Details (UDID number and disability percentage).",
      "Step 6: Fill in family income and bank account details.",
      "Step 7: Upload Disability Certificate, Admission Allotment Letter, Income Certificate, and Marksheets.",
      "Step 8: Submit application online and submit physical copy to college AICTE coordinator.",
      "Step 9: College verifies student on the portal.",
      "Step 10: AICTE approves and transfers ₹50,000 per year directly to the student's bank account via PFMS."
    ],
    offlineProcess: "Submit physical application form and verified copies of disability certificate, allotment letter, and income certificate to your college scholarship officer for online approval.",
    commonMistakes: [
      "Disability certificate showing less than 40%: The scheme strictly requires benchmark disability of 40% or more.",
      "Not submitting renewal in subsequent years: Annual renewal is required on NSP with promotional passing marksheet."
    ],
    deadlineInfo: "Annual NSP window: opens July/August, closes October/November.",
    openingDate: "July/August annually",
    processingTime: "60 to 90 days following institutional verification.",
    renewalRequired: "Yes, annual renewal on NSP upon promotion to next academic year.",
    trackingProcedure: "Track application status on scholarships.gov.in using OTR / Application ID.",
    correctionProcedure: "College nodal officer can mark defective on the NSP portal for corrections.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student's Bank Account via PFMS",
    disbursementDetails: "AICTE credits ₹50,000 per year directly into the disabled student's Aadhaar-linked savings account.",
    faqs: [
      { q: "How many Saksham scholarships are given each year?", a: "All eligible specially-abled students who satisfy the eligibility criteria are sanctioned scholarships by AICTE without a strict quota cap." },
      { q: "What is the minimum disability percentage required?", a: "Not less than 40% benchmark disability certified by a Competent Medical Authority or UDID card." },
      { q: "Can I use the scholarship to buy a hearing aid or motorized wheelchair?", a: "Yes, the ₹50,000/year assistance can be freely utilized towards purchase of assistive devices, laptops, software, and college fees." },
      { q: "Can male students apply for Saksham?", a: "Yes! Unlike Pragati (which is for girls), Saksham is open to all specially-abled students of all genders." },
      { q: "What is the family income limit?", a: "Total family annual income must not exceed ₹8,00,000 per annum." },
      { q: "Can degree and diploma students both apply?", a: "Yes, both technical degree (B.Tech/B.E./B.Pharm) and technical diploma students can apply." }
    ],
    helpline: "AICTE Student Helpdesk: 011-29581333",
    email: "saksham-aicte@gov.in"
  },

  "tn-pudhumai-penn": {
    launchYear: 2022,
    purpose: "Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme (Pudhumai Penn), launched by the Government of Tamil Nadu, provides monthly financial assistance to girl students who studied in government schools from Class 6 to 12, incentivizing female higher education and curbing child marriage.",
    targetBeneficiary: "Girl students who studied in Tamil Nadu Government schools from Class 6 to Class 12 and are enrolled in recognized undergraduate degree, diploma, ITI, or professional courses.",
    benefits: "Direct financial assistance of ₹1,000 per month credited directly into the girl student's bank account every month until the successful completion of her degree or diploma course.",
    financialBenefit: "₹1,00,000 per month (₹12,000 per year) directly credited until completion of degree/diploma",
    benefitFrequency: "Monthly direct bank transfer",
    impact: "Boosted female college admissions by over 27% across Tamil Nadu, empowered young women to complete higher education independently, and prevented early marriages.",
    detailedEligibility: {
      ageRequirement: "College going age (typically 17 to 23 years).",
      genderRequirement: "Strictly Female students only.",
      incomeLimit: "NO family income ceiling (open to all girls who studied in government schools).",
      educationRequirement: "Must have studied continuously from Class 6 to Class 12 in Tamil Nadu Government schools.",
      occupationRequirement: "Student enrolled in undergraduate degree, diploma, or ITI course in Tamil Nadu.",
      casteCategoryRequirement: "Open to all castes and categories.",
      residenceRequirement: "Resident of Tamil Nadu.",
      familyConditions: "Covered per eligible female student."
    },
    mandatoryConditions: [
      "Must have completed schooling from Class 6 to Class 12 in Tamil Nadu Government schools",
      "Must be currently enrolled in an approved undergraduate degree, diploma, engineering, medical, or ITI course",
      "Must possess an active individual bank account seeded with Aadhaar"
    ],
    conditionalRequirements: [
      "Transfer Certificate (TC) or EMIS school verification confirming government schooling from Class 6 to 12."
    ],
    ineligibility: [
      "Students who studied in private schools (even if under RTE) or private aided schools for any period between Class 6 and 12",
      "Male students",
      "Students pursuing postgraduate courses (scheme covers undergraduate/diploma only)"
    ],
    documents: [
      {
        name: "School Transfer Certificate / EMIS Number showing Class 6 to 12 in Govt School",
        why: "Verifies mandatory government school study requirement.",
        mandatory: true,
        issuingAuthority: "Headmaster of Tamil Nadu Government School / EMIS Portal",
        format: "EMIS student ID / School Bonafide Certificate",
        validity: "Permanent"
      },
      {
        name: "College Bonafide Certificate & Fee Receipt",
        why: "Confirms active enrollment in degree/diploma course.",
        mandatory: true,
        issuingAuthority: "Enrolled College Principal",
        format: "Original Bonafide certificate",
        validity: "Current academic session"
      },
      {
        name: "Aadhaar Card of Student",
        why: "Identity verification and direct DBT disbursement.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original or photocopy",
        validity: "Permanent"
      },
      {
        name: "Bank Passbook Copy (Aadhaar-Seeded)",
        why: "For receiving ₹1,000 monthly credit.",
        mandatory: true,
        issuingAuthority: "Bank or Post Office Bank",
        format: "Clear copy with student's name, Account Number, and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via Pudhumai Penn Portal (pudhumaipenn.tn.gov.in) through College Nodal Officer",
    process: [
      "Step 1: Enrol in any recognized degree, diploma, or ITI course in Tamil Nadu.",
      "Step 2: Collect your EMIS (Education Management Information System) number from your school or college.",
      "Step 3: College scholarship nodal officer opens your profile on pudhumaipenn.tn.gov.in.",
      "Step 4: System enters EMIS number, which auto-verifies that you studied in government schools from Class 6 to 12.",
      "Step 5: Student provides Aadhaar card and Bank Account details.",
      "Step 6: College Principal verifies and forwards application electronically to the Social Welfare Department.",
      "Step 7: District Social Welfare Officer approves the sanction order.",
      "Step 8: ₹1,000 is credited directly into the student's bank account every month via DBT."
    ],
    offlineProcess: "Students do not need to visit government offices. The application is facilitated directly inside your college by the designated College Pudhumai Penn Nodal Officer during admission.",
    commonMistakes: [
      "Studying in government-aided school: Only students of 100% government schools qualify (aided schools are covered under a separate scheme).",
      "Bank account in parents' name: Account must strictly be in the girl student's own individual name."
    ],
    deadlineInfo: "College enrollment window: opens in July/August every academic year.",
    openingDate: "July/August annually",
    processingTime: "First payment credited within 30 to 45 days of college verification.",
    renewalRequired: "Auto-renewed each semester upon college confirmation of student's continued attendance.",
    trackingProcedure: "Check status on pudhumaipenn.tn.gov.in using Aadhaar number or mobile number.",
    correctionProcedure: "Contact your college nodal officer to correct bank details or EMIS records.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student's Bank Account",
    disbursementDetails: "Tamil Nadu Social Welfare Department deposits ₹1,000 on the 1st week of every month directly into the girl student's bank account.",
    faqs: [
      { q: "Is there any family income ceiling for Pudhumai Penn?", a: "No! There is no family income ceiling. Any girl who studied from Class 6 to Class 12 in a Tamil Nadu Government school is eligible regardless of family income." },
      { q: "Can engineering and medical students get this benefit?", a: "Yes! B.E., B.Tech, MBBS, BDS, Law, Agriculture, Arts, Science, Diploma, and ITI students are all eligible." },
      { q: "Can I receive this scholarship in addition to other community scholarships?", a: "Yes. Pudhumai Penn is an incentive scheme and can be availed in addition to standard SC/ST/BC/MBC post-matric scholarships." },
      { q: "What if I studied Class 6 to 10 in a government school but Class 11 and 12 in a private school?", a: "You must have studied continuously from Class 6 through Class 12 in government schools; partial private school education disqualifies the candidate." },
      { q: "Is the money stopped during summer vacation?", a: "The benefit of ₹1,000 per month is paid consistently throughout the academic calendar year." },
      { q: "What is the equivalent scheme for boy students?", a: "The Tamil Nadu Government launched the 'Tamizh Pudhalvan' scheme providing ₹1,000/month for boys who studied in government schools." }
    ],
    helpline: "Pudhumai Penn Toll-Free: 14417 or 044-25670877",
    email: "pudhumaipenn.support@tn.gov.in"
  },

  "mh-mahadbt": {
    launchYear: 2018,
    purpose: "MahaDBT (Aaple Sarkar DBT Portal) is the Maharashtra Government's comprehensive single-window scholarship portal integrating educational schemes across Social Justice, Tribal Development, VJNT/OBC/SBC, Higher & Technical Education, and Agriculture departments for automated fee reimbursement and scholarships.",
    targetBeneficiary: "Students residing in Maharashtra belonging to SC, ST, VJNT, OBC, SBC, and EBC categories pursuing higher secondary, diploma, undergraduate, and postgraduate courses.",
    benefits: "Full or partial college tuition and exam fee reimbursement (100% for SC/ST; 50% to 100% for OBC/VJNT/EBC) plus maintenance allowance up to ₹1,200/month (for hostellers) and Swadhar hostel scheme assistance up to ₹51,000/year for students unable to secure government hostel seats.",
    financialBenefit: "50% to 100% college tuition fee reimbursement + monthly maintenance allowance up to ₹1,200/month",
    benefitFrequency: "Annual scholarship disbursed in two academic installments",
    impact: "Automates educational fee waivers for over 25 lakh students annually across Maharashtra, preventing dropouts and ensuring transparency via Aadhaar DBT.",
    detailedEligibility: {
      ageRequirement: "No age limit for degree students.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "SC/ST: up to ₹2,50,000 per year; VJNT/OBC/SBC/EBC: up to ₹1,50,000 to ₹8,00,000 per year depending on specific sub-scheme.",
      educationRequirement: "Passed Class 10 or 12 and currently admitted to a recognized institution in Maharashtra.",
      occupationRequirement: "Student.",
      casteCategoryRequirement: "SC, ST, VJNT, OBC, SBC, SEBC, and EWS/EBC.",
      residenceRequirement: "Domicile of Maharashtra.",
      familyConditions: "Not more than 2 beneficiaries per family."
    },
    mandatoryConditions: [
      "Must possess a Maharashtra Domicile Certificate",
      "Must hold a valid Caste Certificate and Caste Validity Certificate (for professional courses)",
      "Must have an authentic Income Certificate issued by Tahsildar / Revenue Authority",
      "Student bank account must be actively seeded with Aadhaar on NPCI"
    ],
    conditionalRequirements: [
      "Caste Validity Certificate is mandatory for all professional degree courses (Engineering, Medical, MBA, Pharmacy, Law)."
    ],
    ineligibility: [
      "Non-domicile students of Maharashtra",
      "Students admitted through management quota without centralized CAP counseling in professional courses",
      "Family annual income exceeding category threshold"
    ],
    documents: [
      {
        name: "Maharashtra Domicile Certificate",
        why: "Confirms permanent residence in Maharashtra.",
        mandatory: true,
        issuingAuthority: "Sub-Divisional Officer (SDO) / Tahsildar / MahaOnline",
        format: "Original or verified barcode copy",
        validity: "Permanent"
      },
      {
        name: "Caste Certificate & Caste Validity Certificate",
        why: "Mandatory verification for SC, ST, VJNT, OBC, and SBC quotas.",
        mandatory: true,
        issuingAuthority: "Divisional Caste Scrutiny Committee",
        format: "Original Caste Validity Certificate with barcode",
        validity: "Permanent"
      },
      {
        name: "Income Certificate issued by Tahsildar",
        why: "Establishes family income eligibility.",
        mandatory: true,
        issuingAuthority: "Tahsildar / Sub-Divisional Magistrate",
        format: "Digitally signed certificate",
        validity: "Current financial year"
      },
      {
        name: "CAP Allotment Letter & College Fee Receipt",
        why: "Proves merit admission through centralized admission process.",
        mandatory: true,
        issuingAuthority: "State CET Cell, Maharashtra / College Principal",
        format: "Official CAP allotment slip and fee receipt",
        validity: "Current academic session"
      },
      {
        name: "Aadhaar Card & Aadhaar-Seeded Bank Passbook",
        why: "Identity verification and direct DBT disbursement.",
        mandatory: true,
        issuingAuthority: "UIDAI / Bank",
        format: "Aadhaar copy and bank passbook",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via MahaDBT Portal (mahadbt.maharashtra.gov.in)",
    process: [
      "Step 1: Visit mahadbt.maharashtra.gov.in and click 'New Applicant Registration'.",
      "Step 2: Enter Aadhaar Number and complete biometric or OTP verification.",
      "Step 3: Create username and password. Complete Profile (Personal, Address, Caste, Income, and Bank details).",
      "Step 4: Select 'Post Matric Scholarship' and choose your respective department (e.g. Social Justice / Tribal / OBC).",
      "Step 5: Select your Course, Institute, CAP Allotment details, and upload fee receipt.",
      "Step 6: Upload Caste Certificate, Caste Validity, Domicile, and Tahsildar Income Certificate.",
      "Step 7: Submit the application and download the Application PDF.",
      "Step 8: Submit the printout and verified document photocopies to your college scholarship desk.",
      "Step 9: College verifies on portal (Level 1), District Assistant Commissioner approves (Level 2).",
      "Step 10: Fee reimbursement is credited to college/student account, and maintenance allowance to student's bank account via PFMS."
    ],
    offlineProcess: "Submit physical application printout along with attested photocopies of caste validity, domicile, income certificate, and fee receipt to your college scholarship clerk.",
    commonMistakes: [
      "Not having Caste Validity: Admission in professional courses like engineering or pharmacy without caste validity halts scholarship disbursement.",
      "Uploading Form 16 instead of Tahsildar Income Certificate: MahaDBT strictly requires an official revenue certificate signed by the Tahsildar.",
      "Aadhaar bank account inactive: Payment gets stuck if account has not transacted within 6 months."
    ],
    deadlineInfo: "Announced annually: opens August/September and closes January/February.",
    openingDate: "August/September annually",
    processingTime: "60 to 90 days following college and district verification.",
    renewalRequired: "Yes, students must log in and submit renewal applications each academic year.",
    trackingProcedure: "Log in to mahadbt.maharashtra.gov.in and click 'My Applied Schemes' to view status.",
    correctionProcedure: "If application is sent back with remarks by college/district officer, edit and re-submit within 7 days.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student / College Bank Account via PFMS",
    disbursementDetails: "Tuition fees are disbursed directly to the college account or student account, and maintenance allowances are credited to the student's personal Aadhaar-linked savings account.",
    faqs: [
      { q: "What is the Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulkh Shishyavrutti Yojna on MahaDBT?", a: "This is the flagship EBC scheme providing 50% tuition fee and exam fee reimbursement to General/Open category students whose family income is less than ₹8,00,000 per year." },
      { q: "Is Caste Validity mandatory for all courses?", a: "Caste Validity is mandatory for professional degree courses (Engineering, Medical, Architecture, Pharmacy, Law, MBA). For general courses (B.A., B.Sc., B.Com), Caste Certificate is sufficient." },
      { q: "What is the Dr. Babasaheb Ambedkar Swadhar Yojana?", a: "Swadhar provides up to ₹51,000 per year for food, lodging, and books to SC/Navbouddha students who do not get admission into government hostels." },
      { q: "Can students admitted through institute-level quota apply?", a: "No, students admitted through management / institute quota are not eligible for government fee reimbursement." },
      { q: "What is the family income limit for OBC students?", a: "For OBC post-matric scholarship, the income limit is ₹1,50,000 per year (for 100% fee waiver) and up to ₹8,00,000 (for 50% fee reimbursement under freeship)." },
      { q: "How many times can I edit my MahaDBT form?", a: "Once submitted, you can only edit if your college or district officer rejects it back to 'Sent Back' status." }
    ],
    helpline: "MahaDBT Helpline: 022-49150800",
    email: "mahadbt.helpdesk@maharashtra.gov.in"
  },

  "up-scholarship": {
    launchYear: 2014,
    purpose: "The Uttar Pradesh Scholarship and Fee Reimbursement Online System (Saksham), managed by the Social Welfare, Backward Classes Welfare, and Minority Welfare departments of UP, provides comprehensive fee reimbursement and maintenance allowances to underprivileged students across Uttar Pradesh.",
    targetBeneficiary: "Students residing in Uttar Pradesh belonging to SC, ST, OBC, General, and Minority categories studying in post-matric courses (Classes 11, 12, ITI, Polytechnic, Undergraduate, Postgraduate, and PhD).",
    benefits: "Full reimbursement of university/college non-refundable tuition fees (up to ₹50,000+ per year) plus a monthly scholarship maintenance allowance credited directly into the student's Aadhaar-linked bank account.",
    financialBenefit: "Full non-refundable college fees reimbursed + maintenance allowance up to ₹1,200/month",
    benefitFrequency: "Annual single or two-stage disbursement via DBT",
    impact: "Enables millions of rural and lower-income students across Uttar Pradesh to complete higher education, professional degrees, and technical polytechnics.",
    detailedEligibility: {
      ageRequirement: "No age limit for college students.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "SC/ST: up to ₹2,50,000 per year; General, OBC, Minority: up to ₹2,00,000 per year.",
      educationRequirement: "Passed previous qualifying exam and admitted to recognized course in UP (or select institutions outside UP).",
      occupationRequirement: "Student.",
      casteCategoryRequirement: "SC, ST, OBC, General, and Minorities.",
      residenceRequirement: "Domicile of Uttar Pradesh.",
      familyConditions: "Income verified via UP Revenue Portal."
    },
    mandatoryConditions: [
      "Must be a permanent resident / domicile of Uttar Pradesh",
      "Annual family income must not exceed ₹2.5 Lakh (SC/ST) or ₹2.0 Lakh (OBC/General/Minority)",
      "Must possess an authentic digital Income Certificate and Caste Certificate verifiable on the UP edistrict.up.gov.in portal",
      "Must have completed DigiLocker Aadhaar verification on the UP scholarship portal"
    ],
    conditionalRequirements: [
      "Hosteller certificate required to claim higher maintenance allowance."
    ],
    ineligibility: [
      "Non-UP domicile students",
      "Family annual income exceeding category limits",
      "Students failing in the preceding class (except where specific scheme rules permit)",
      "Students admitted through management quota without merit counseling in private professional colleges"
    ],
    documents: [
      {
        name: "UP Domicile Certificate (Niwas Praman Patra)",
        why: "Confirms permanent residency in Uttar Pradesh.",
        mandatory: true,
        issuingAuthority: "Revenue Department, Uttar Pradesh (e-District)",
        format: "Digitally verifiable certificate with Application & Certificate Number",
        validity: "Permanent"
      },
      {
        name: "Caste Certificate (Jati Praman Patra)",
        why: "Verifies caste category on state revenue database.",
        mandatory: true,
        issuingAuthority: "Tahsildar / e-District UP",
        format: "Digitally signed certificate",
        validity: "Permanent"
      },
      {
        name: "Income Certificate (Aaye Praman Patra)",
        why: "Confirms family income within ₹2.0L / ₹2.5L limits.",
        mandatory: true,
        issuingAuthority: "Tahsildar / e-District UP",
        format: "Digitally signed certificate",
        validity: "Issued within 3 years"
      },
      {
        name: "Previous Class Marksheet & Roll Number",
        why: "Verifies academic pass status.",
        mandatory: true,
        issuingAuthority: "UP Board / CBSE / University",
        format: "Certified marksheet",
        validity: "Permanent"
      },
      {
        name: "Current Year Fee Receipt & College ID",
        why: "Itemized fee breakdown for reimbursement.",
        mandatory: true,
        issuingAuthority: "College Registrar",
        format: "Original signed fee receipt",
        validity: "Current academic year"
      },
      {
        name: "Aadhaar Card & Bank Passbook (NPCI DBT Seeded)",
        why: "Identity verification and direct DBT disbursement.",
        mandatory: true,
        issuingAuthority: "UIDAI / Bank",
        format: "Aadhaar copy and bank passbook",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via UP Scholarship Portal (scholarship.up.gov.in)",
    process: [
      "Step 1: Visit scholarship.up.gov.in and click on 'Student' -> 'Registration'.",
      "Step 2: Select your category (SC/ST/General, OBC, or Minority) and stage (Post-Matric Intermediate or Post-Matric Other Than Inter).",
      "Step 3: Complete DigiLocker authentication: link your Aadhaar number to fetch verified identity details.",
      "Step 4: Enter High School (Class 10) Board, Year of Passing, and Roll Number.",
      "Step 5: Fill in Income Certificate Application Number & Certificate ID (system auto-verifies from e-District).",
      "Step 6: Fill in Caste Certificate Application Number & Certificate ID.",
      "Step 7: Enter College Name, Course, Non-Refundable Approved Fee amount, and Bank Account details.",
      "Step 8: Review the draft form and make corrections before final submission.",
      "Step 9: Click 'Final Submit' and print the official application form after 3 days.",
      "Step 10: Submit the hardcopy and attested documents to your college for digital forwardal to the District Social Welfare Officer."
    ],
    offlineProcess: "Students must submit the printed application hardcopy along with photocopies of all verified certificates to their college scholarship counter within 7 days of online submission.",
    commonMistakes: [
      "Aadhaar NPCI mapping missing: Payment fails if the bank account is not mapped to NPCI for Aadhaar-based DBT.",
      "Mismatched High School Roll Number: The portal automatically verifies Class 10 records with UP Board/CBSE; any typo rejects the form.",
      "Delayed college verification: Colleges must electronically forward forms before the official departmental cut-off date."
    ],
    deadlineInfo: "Announced annually in phased schedules (usually July to November for Phase 1; December to January for Phase 2).",
    openingDate: "July/August annually",
    processingTime: "Payment disbursed in scheduled tranches between December and March.",
    renewalRequired: "Yes, students must select 'Renewal Login' on the portal for every subsequent year.",
    trackingProcedure: "Click 'Status' on scholarship.up.gov.in and enter your Registration Number and Date of Birth to view complete verification progress.",
    correctionProcedure: "Use the 'Correction Window' opened by the department in December/January to modify flagged errors.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student's Bank Account via PFMS",
    disbursementDetails: "Tuition fee reimbursement and monthly maintenance allowances are transferred in single/two installments directly into the student's Aadhaar-linked savings account.",
    faqs: [
      { q: "What is the family income limit for OBC and General students in UP?", a: "The total annual family income from all sources must not exceed ₹2,00,000 per annum for General, OBC, and Minority students." },
      { q: "Can B.Tech and MBBS students get their full fees reimbursed?", a: "Yes. For students admitted through merit counseling in government or recognized private colleges, the approved non-refundable tuition fee (up to ₹50,000+) is reimbursed." },
      { q: "What is the DigiLocker verification step on the UP portal?", a: "Applicants must authenticate their DigiLocker account to electronically import verified Aadhaar and high school marksheet details, preventing fake registrations." },
      { q: "Can students studying outside Uttar Pradesh apply?", a: "Only if enrolled in a central university or premier institution (like IITs/NITs) and holding a permanent UP domicile." },
      { q: "What should I do if my status says 'Blocked due to low attendance'?", a: "Colleges must certify at least 75% biometric/digital attendance on the portal. Contact your college principal to verify your attendance record." },
      { q: "How can I check if my scholarship has been disbursed?", a: "You can check status on scholarship.up.gov.in under 'Application Status' or track the transaction on the PFMS portal (pfms.nic.in) using 'Know Your Payment'." }
    ],
    helpline: "UP Social Welfare Toll-Free: 1800-180-5131 / Backward Classes: 1800-180-5133",
    email: "helpdesk.upscholarship@gmail.com"
  },

  "ts-epass": {
    launchYear: 2014,
    purpose: "Telangana Electronic Payment and Application System of Scholarships (ePASS), administered by the Welfare Departments of the Government of Telangana, delivers automated post-matric scholarships, full tuition fee reimbursement (RTF), and mess charges (MTF) to SC, ST, BC, EBC, and Minority students.",
    targetBeneficiary: "Students from SC, ST, BC, EBC, PwD, and Minority communities residing in Telangana pursuing post-matric intermediate, polytechnic, undergraduate, and postgraduate professional courses.",
    benefits: "Full reimbursement of college tuition fees (RTF) paid directly to the institution plus monthly maintenance charges / mess fees (MTF) up to ₹1,400 per month (for hostellers) and ₹650 per month (for day scholars) deposited directly into the student's bank account.",
    financialBenefit: "Full college tuition fee reimbursement (RTF) + Monthly Maintenance Fee (MTF) up to ₹1,400/month",
    benefitFrequency: "Annual fee reimbursement and monthly/quarterly mess allowance",
    impact: "Guarantees free professional education (engineering, medicine, pharmacy, management) for marginalized youth across Telangana.",
    detailedEligibility: {
      ageRequirement: "Maximum 30 years for PG/Professional courses; maximum 34 years for SC/ST.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "SC/ST: up to ₹2,00,000 (rural) / ₹2,00,000 (urban); BC/EBC/Minority: up to ₹1,50,000 (rural) / ₹2,00,000 (urban).",
      educationRequirement: "Class 10 pass with admission into recognized post-matric course in Telangana.",
      occupationRequirement: "Student.",
      casteCategoryRequirement: "SC, ST, BC, EBC, Minority, and Physically Challenged.",
      residenceRequirement: "Resident of Telangana.",
      familyConditions: "Covered per student record."
    },
    mandatoryConditions: [
      "Must be a resident of Telangana with valid MeeSeva integrated caste and income certificate",
      "Must have secured admission through centralized convenor quota (TS EAMCET, ICET, ECET, POLYCET, etc.)",
      "Must maintain minimum 75% attendance in college",
      "Student bank account must be Aadhaar-seeded"
    ],
    conditionalRequirements: [
      "Hostel allotment slip from College Warden for hosteller mess charges."
    ],
    ineligibility: [
      "Students admitted through Management / NRI / Spot admission quota",
      "Students pursuing open university or distance correspondence courses",
      "Family annual income exceeding prescribed category limits",
      "Students with attendance below 75%"
    ],
    documents: [
      {
        name: "MeeSeva Integrated Caste & Income Certificate",
        why: "Automated verification of caste and income credentials.",
        mandatory: true,
        issuingAuthority: "Revenue Department, Telangana (MeeSeva)",
        format: "MeeSeva application number / Barcode certificate",
        validity: "Recent within 1 year"
      },
      {
        name: "SSC (Class 10) Hall Ticket & Marksheet",
        why: "Date of birth and basic academic verification.",
        mandatory: true,
        issuingAuthority: "Board of Secondary Education, Telangana",
        format: "Marksheet copy",
        validity: "Permanent"
      },
      {
        name: "Convenor Allotment Order",
        why: "Confirms admission via TS EAMCET / ICET / POLYCET merit counseling.",
        mandatory: true,
        issuingAuthority: "Telangana State Council of Higher Education (TSCHE)",
        format: "Official seat allotment letter",
        validity: "Current academic year"
      },
      {
        name: "Aadhaar Card & Bank Passbook Copy",
        why: "Identity verification and direct DBT disbursement.",
        mandatory: true,
        issuingAuthority: "UIDAI / Bank",
        format: "Aadhaar and bank passbook",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via Telangana ePASS Portal (telanganaepass.cgg.gov.in)",
    process: [
      "Step 1: Secure admission via centralized counseling (TS EAMCET / ICET / etc.).",
      "Step 2: Visit telanganaepass.cgg.gov.in and click 'Postmatric Scholarship Services'.",
      "Step 3: Click 'Fresh Registration' and enter your SSC (Class 10) Hall Ticket Number, Year of Pass, and Date of Birth.",
      "Step 4: Enter your Aadhaar number and MeeSeva Caste & Income Certificate application numbers.",
      "Step 5: Enter College Admission Details, Convenor Hall Ticket Number, and Allotment Order Number.",
      "Step 6: Enter your Bank Account details and upload scanned copies of Allotment Letter, Bank Passbook, and SSC memo.",
      "Step 7: Submit the application and download the printed acknowledgement copy.",
      "Step 8: Submit the physical hardcopy with original verification documents to your College Principal.",
      "Step 9: College verifies biometric attendance and documents on ePASS college login.",
      "Step 10: District Welfare Officer issues sanction, and tuition fees (RTF) and mess charges (MTF) are released via online treasury."
    ],
    offlineProcess: "Submit printed ePASS acknowledgement form along with attested copies of Convenor allotment order, MeeSeva certificates, and bank passbook to your college scholarship counter.",
    commonMistakes: [
      "Entering wrong SSC Hall Ticket number: Causes automated failure to link Class 10 academic records.",
      "Attendance below 75%: Biometric attendance linked to ePASS halts scholarship release if attendance drops below 75%."
    ],
    deadlineInfo: "Announced annually: opens September/October and closes December/January.",
    openingDate: "September/October annually",
    processingTime: "60 to 90 days following institutional and district verification.",
    renewalRequired: "Yes, students must submit online renewal applications each subsequent academic year.",
    trackingProcedure: "Click 'Know Your Application Status' on telanganaepass.cgg.gov.in using Application ID and SSC details.",
    correctionProcedure: "College principal can edit student data on the college login before final verification.",
    disbursementMethod: "Direct Benefit Transfer (DBT): RTF to College; MTF to Student's Bank Account",
    disbursementDetails: "Tuition fee reimbursement (RTF) is transferred directly into the college account; maintenance fees (MTF) are deposited directly into the student's personal Aadhaar-linked savings account.",
    faqs: [
      { q: "What is RTF and MTF on Telangana ePASS?", a: "RTF stands for Reimbursement of Tuition Fee (paid to the college). MTF stands for Maintenance Fee / Mess Charges (paid directly to the student for living expenses)." },
      { q: "Can B.Tech students in private engineering colleges get full fee reimbursement?", a: "Yes. Students securing TS EAMCET ranks below 10,000 receive 100% full fee reimbursement; SC/ST students receive 100% full fee reimbursement regardless of rank." },
      { q: "Is Aadhaar biometric attendance required for scholarship?", a: "Yes. All colleges in Telangana have biometric devices integrated with ePASS, and students must maintain at least 75% biometric attendance." },
      { q: "Can students admitted under Management Quota apply?", a: "No. Only students admitted through Convenor Quota centralized counseling are eligible." },
      { q: "What is the income limit for SC/ST students in Telangana?", a: "The family annual income limit is ₹2,00,000 per annum for SC and ST students." },
      { q: "What should I do if my bank account changed?", a: "Update your bank account at MeeSeva and request your college principal to update the bank details on the ePASS portal before sanction." }
    ],
    helpline: "ePASS Telangana Helpdesk: 040-23390228 / 040-23390229",
    email: "help.telanganaepass@cgg.gov.in"
  },

  "ap-jnanabhumi": {
    launchYear: 2017,
    purpose: "Jnanabhumi (now implementing Jagananna Vidya Deevena and Jagananna Vasathi Deevena), managed by the Government of Andhra Pradesh, provides full fee reimbursement and living expenses to students from economically disadvantaged backgrounds pursuing higher education.",
    targetBeneficiary: "Students belonging to SC, ST, BC, EBC, Kapu, Minority, and Differently Abled categories pursuing ITI, Polytechnic, Degree, Engineering, Medicine, and Postgraduate courses in Andhra Pradesh.",
    benefits: "Jagananna Vidya Deevena: 100% full tuition fee reimbursement credited quarterly directly into the mother's bank account. Jagananna Vasathi Deevena: Food and hostel accommodation allowance of ₹10,000/year (for ITI), ₹15,000/year (for Polytechnic), and ₹20,000/year (for Degree/Engineering/Medicine) credited directly to mother's account.",
    financialBenefit: "100% full college tuition fees reimbursed + Hostel allowance up to ₹20,000/year",
    benefitFrequency: "Quarterly installments credited directly to mother's bank account",
    impact: "Empowers mothers as financial decision-makers for their children's education, eliminates tuition fee debt, and ensures universal access to higher professional education.",
    detailedEligibility: {
      ageRequirement: "College going age.",
      genderRequirement: "All genders eligible; financial disbursement made directly to mother's account.",
      incomeLimit: "Total family annual income must NOT exceed ₹2,50,000 per annum.",
      educationRequirement: "Admitted into recognized college course in AP through centralized convenor quota.",
      occupationRequirement: "Student.",
      casteCategoryRequirement: "SC, ST, BC, EBC, Kapu, Minority, and Differently Abled.",
      residenceRequirement: "Resident of Andhra Pradesh.",
      familyConditions: "Total land holding must be less than 10 acres wetland or 25 acres dry land; no family member should own a four-wheeler (except taxi/tractor)."
    },
    mandatoryConditions: [
      "Family annual income must not exceed ₹2,50,000",
      "Family must not own four-wheeler (except commercial taxi, tractor, or auto-rickshaw)",
      "No family member should be a regular government employee or income tax payer (sanitary workers exempted)",
      "Mother must possess an active, Aadhaar-seeded bank account for receiving DBT",
      "Student must maintain minimum 75% biometric attendance"
    ],
    conditionalRequirements: [
      "In the absence of living mother, funds are credited to the legal guardian's bank account."
    ],
    ineligibility: [
      "Students admitted through management / NRI quota",
      "Families owning residential/commercial property exceeding 1,500 sq. ft in municipal areas",
      "Families where any member pays income tax",
      "Students pursuing deemed university or private university courses not affiliated to state universities"
    ],
    documents: [
      {
        name: "Rice Card / BPL Household Card of Andhra Pradesh",
        why: "Verifies family economic and welfare eligibility.",
        mandatory: true,
        issuingAuthority: "Civil Supplies Department / Grama Ward Sachivalayam",
        format: "Digital Rice Card",
        validity: "Active"
      },
      {
        name: "Integrated Caste & Income Certificate",
        why: "Confirms caste category and income within ₹2.5 Lakh ceiling.",
        mandatory: true,
        issuingAuthority: "Revenue Department (Grama Ward Sachivalayam / MeeSeva)",
        format: "Digitally signed certificate",
        validity: "Current"
      },
      {
        name: "Convenor Admission Allotment Order",
        why: "Confirms merit admission via AP EAPCET / ICET / POLYCET counseling.",
        mandatory: true,
        issuingAuthority: "APSCHE / State Admission Committee",
        format: "Official allotment order",
        validity: "Current academic year"
      },
      {
        name: "Mother's Aadhaar Card & Bank Passbook (NPCI Seeded)",
        why: "Mandatory account for receiving quarterly DBT disbursements.",
        mandatory: true,
        issuingAuthority: "UIDAI / Bank",
        format: "Mother's Aadhaar and bank passbook",
        validity: "Active account"
      },
      {
        name: "Student Aadhaar Card & SSC Marksheet",
        why: "Student identity and academic verification.",
        mandatory: true,
        issuingAuthority: "UIDAI / BSEAP",
        format: "Original or photocopy",
        validity: "Permanent"
      }
    ],
    applicationMode: "Online via Jnanabhumi Portal (jnanabhumi.ap.gov.in) facilitated through Grama/Ward Sachivalayam",
    process: [
      "Step 1: Secure admission via centralized convenor counseling (AP EAPCET / ICET / etc.).",
      "Step 2: Visit your local Grama Sachivalayam (village) or Ward Sachivalayam (urban) with your mother.",
      "Step 3: Education & Welfare Assistant verifies family details against Navasakam database.",
      "Step 4: Student provides Admission Allotment Order, College details, and Mother's Bank details.",
      "Step 5: Biometric e-KYC authentication of both student and mother is performed at the Sachivalayam.",
      "Step 6: College Principal verifies student admission and course details on Jnanabhumi portal.",
      "Step 7: Social Welfare Department approves quarterly sanction list.",
      "Step 8: Fee reimbursement (Vidya Deevena) and hostel allowance (Vasathi Deevena) are credited directly to mother's bank account via DBT."
    ],
    offlineProcess: "Visit your local Village / Ward Sachivalayam. The Village Education and Welfare Assistant handles document verification, biometric capture, and electronic application submission.",
    commonMistakes: [
      "Mother's bank account not seeded on NPCI: Since payment is sent to the mother, HER account must be actively mapped to NPCI for DBT.",
      "Low biometric attendance: Students with biometric attendance below 75% are disqualified for that quarter's fee credit."
    ],
    deadlineInfo: "Continuous quarterly academic disbursement cycle aligned with university terms.",
    openingDate: "July/August annually",
    processingTime: "Disbursed quarterly directly into bank accounts.",
    renewalRequired: "Auto-renewed each academic year subject to minimum 75% attendance.",
    trackingProcedure: "Log in to jnanabhumi.ap.gov.in using student Aadhaar number or visit your local Sachivalayam.",
    correctionProcedure: "Submit grievance at Grama / Ward Sachivalayam through the 'Spandana' portal.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Mother's Bank Account via AP State CFMS Portal",
    disbursementDetails: "Tuition fee reimbursement and hostel allowances are deposited quarterly into the mother's bank account, who then pays the fee to the college, fostering parental involvement.",
    faqs: [
      { q: "Why is the scholarship money credited to the mother's account?", a: "The Andhra Pradesh Government deliberately credits funds to the mother's bank account to empower women and ensure parents hold colleges accountable for educational quality." },
      { q: "What is Jagananna Vasathi Deevena?", a: "Vasathi Deevena covers food and hostel expenses: ₹10,000/year for ITI students, ₹15,000/year for Polytechnic students, and ₹20,000/year for Degree/Engineering/Medical students." },
      { q: "What is the family income limit in Andhra Pradesh?", a: "The family annual income from all sources must not exceed ₹2,50,000 per annum." },
      { q: "Can students owning four-wheelers apply?", a: "No. Families owning personal four-wheelers are disqualified, though commercial taxis, autos, and tractors used for farming are permitted." },
      { q: "Is attendance checked every month?", a: "Yes. Biometric attendance of 75% or above is strictly mandated for quarterly fee release." },
      { q: "What if the student's mother is not alive?", a: "In the absence of the mother, the funds are deposited into the legal guardian's Aadhaar-seeded bank account." }
    ],
    helpline: "Jnanabhumi / Sachivalayam Toll-Free: 1902",
    email: "jnanabhumi.support@ap.gov.in"
  },

  "gj-digital-gujarat": {
    launchYear: 2017,
    purpose: "Digital Gujarat Scholarship Portal, operated by the Government of Gujarat, provides end-to-end paperless post-matric scholarships, freeships, and instrument/hostel assistance to SC, ST, SEBC, and EWS students pursuing higher education across Gujarat.",
    targetBeneficiary: "Students residing in Gujarat belonging to SC, ST, SEBC (OBC), and EWS categories enrolled in post-matric, diploma, degree, and postgraduate courses.",
    benefits: "100% tuition fee reimbursement for SC/ST students in government/aided colleges and up to sanctioned government limits in self-financed colleges plus maintenance allowance up to ₹1,200/month, book bank allowances, and specialized instrument assistance for technical/medical students.",
    financialBenefit: "Full college tuition fee reimbursement + monthly maintenance allowance up to ₹1,200/month",
    benefitFrequency: "Annual single lump-sum disbursement via DBT",
    impact: "Streamlines educational assistance for over 15 lakh Gujarat students, ensuring direct delivery into bank accounts without college intermediary delays.",
    detailedEligibility: {
      ageRequirement: "No age limit for degree students.",
      genderRequirement: "All genders eligible.",
      incomeLimit: "SC/ST: up to ₹2,50,000 per year; SEBC (OBC): up to ₹2,50,000 per year.",
      educationRequirement: "Class 10 pass and enrolled in recognized post-matric course in Gujarat.",
      occupationRequirement: "Student.",
      casteCategoryRequirement: "SC, ST, SEBC, and EWS.",
      residenceRequirement: "Domicile of Gujarat.",
      familyConditions: "Verified via Digital Gujarat family database."
    },
    mandatoryConditions: [
      "Must be a permanent resident of Gujarat",
      "Must possess a valid digital Caste Certificate and Non-Creamy Layer (NCL) certificate (for SEBC students)",
      "Family annual income must not exceed ₹2,50,000 per year",
      "Student bank account must be actively seeded with Aadhaar on NPCI"
    ],
    conditionalRequirements: [
      "Non-Creamy Layer (NCL) certificate issued in Parishishta-4 format for SEBC applicants."
    ],
    ineligibility: [
      "Non-domicile students of Gujarat",
      "SEBC students without valid Non-Creamy Layer (NCL) certificate",
      "Family annual income exceeding ₹2,50,000",
      "Students in unapproved private courses"
    ],
    documents: [
      {
        name: "Gujarat Domicile / School Leaving Certificate",
        why: "Proves residency in Gujarat.",
        mandatory: true,
        issuingAuthority: "School Headmaster / Competent Authority",
        format: "School Leaving Certificate",
        validity: "Permanent"
      },
      {
        name: "Caste Certificate & NCL Certificate (for SEBC)",
        why: "Confirms caste and non-creamy layer status.",
        mandatory: true,
        issuingAuthority: "District Social Welfare Officer / Taluka Development Officer (TDO)",
        format: "Digital Barcode Certificate",
        validity: "NCL valid for 3 years"
      },
      {
        name: "Income Certificate issued by TDO / Mamlatdar",
        why: "Verifies family income is within ₹2.5 Lakh limit.",
        mandatory: true,
        issuingAuthority: "Mamlatdar / Taluka Development Officer",
        format: "Digitally signed certificate",
        validity: "Valid for 3 financial years"
      },
      {
        name: "College Fee Receipt & Bonafide Certificate",
        why: "Confirms enrollment and fee reimbursement claim.",
        mandatory: true,
        issuingAuthority: "Enrolled College Principal",
        format: "Original fee receipt",
        validity: "Current academic year"
      },
      {
        name: "Aadhaar Card & Bank Passbook (NPCI Seeded)",
        why: "Identity verification and direct DBT disbursement.",
        mandatory: true,
        issuingAuthority: "UIDAI / Bank",
        format: "Aadhaar copy and bank passbook",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via Digital Gujarat Portal (digitalgujarat.gov.in)",
    process: [
      "Step 1: Visit digitalgujarat.gov.in and click 'Register'.",
      "Step 2: Enter Mobile Number, Email, and create password. Verify via Mobile OTP.",
      "Step 3: Log in and click 'Scholarship Services' -> 'Post Matric Scholarship'.",
      "Step 4: Enter Personal details, Domicile, Caste Category, and Income details.",
      "Step 5: Enter College details (District, University, College Name, Course, Current Year).",
      "Step 6: Upload Caste Certificate, NCL (if SEBC), Income Certificate, College Fee Receipt, and Marksheet.",
      "Step 7: Enter bank account details and submit online application.",
      "Step 8: Print the completed application form and submit with document photocopies to your college scholarship clerk.",
      "Step 9: College verifies (Level 1), District Social Welfare Officer approves (Level 2).",
      "Step 10: Scholarship funds are credited directly to your bank account via PFMS."
    ],
    offlineProcess: "Submit the physical copy of the application printout and self-attested documents to your college scholarship desk for digital forwardal.",
    commonMistakes: [
      "Submitting expired NCL certificate: SEBC students must ensure their Non-Creamy Layer certificate is currently valid.",
      "Bank account not linked to Aadhaar: Funds bounce if the bank account is not mapped on the NPCI DBT mapper."
    ],
    deadlineInfo: "Announced annually: opens August/September and closes October/November.",
    openingDate: "August/September annually",
    processingTime: "60 to 90 days following college verification.",
    renewalRequired: "Yes, students must apply for renewal every academic year.",
    trackingProcedure: "Log in to digitalgujarat.gov.in and click 'Track Application Status'.",
    correctionProcedure: "College nodal officer can mark defective on the portal for student corrections.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student's Bank Account via PFMS",
    disbursementDetails: "Tuition fee reimbursement and monthly maintenance allowances are transferred in single lump-sum directly into the student's Aadhaar-linked savings account.",
    faqs: [
      { q: "What is the family income limit for SEBC students in Gujarat?", a: "The family annual income limit is ₹2,50,000 per annum for SEBC (OBC) post-matric scholarship." },
      { q: "Can engineering and medical students in self-financed colleges get fee reimbursement?", a: "Yes. SC and ST students receive full or substantial fee reimbursement as per Fee Regulatory Committee (FRC) guidelines in self-financed colleges." },
      { q: "What is the validity of the Gujarat Income Certificate?", a: "Income certificates issued by the Mamlatdar / TDO in Gujarat are valid for 3 financial years from the date of issue." },
      { q: "What is the MYSY scheme in Gujarat?", a: "Mukhyamantri Yuva Swavalamban Yojana (MYSY) is Gujarat's merit-cum-means scholarship for General/EWS students scoring above 80 percentile in Class 12." },
      { q: "Can I receive both Digital Gujarat scholarship and MYSY?", a: "No. A student can only avail one government scholarship at a time." },
      { q: "How can I check if my college is registered on Digital Gujarat?", a: "When selecting college details on the portal, choose your district and university; the drop-down will display all approved colleges." }
    ],
    helpline: "Digital Gujarat Helpdesk: 1800-233-5500",
    email: "digitalgujarat.help@gmail.com"
  },

  "br-student-credit-card": {
    launchYear: 2016,
    purpose: "The Bihar Student Credit Card Scheme (BSCCS), launched under the Chief Minister's '7 Nischay' (Seven Resolves) program, provides collateral-free, government-guaranteed education loans up to ₹4,00,000 at deeply subsidized interest rates (and 1% for women/disabled/transgender) to ensure no Bihar student drops out of higher education due to financial hardship.",
    targetBeneficiary: "Students from Bihar who have passed Class 12 and wish to pursue higher education in recognized general, technical, or professional degree/diploma courses across India.",
    benefits: "Education loan up to ₹4,00,000 without requiring any collateral security, mortgage, or third-party guarantee. Interest rate is deeply subsidized at 4% simple interest for male students, and an ultra-concessional 1% simple interest for female, transgender, and disabled students. Moratorium covers the entire course duration plus 1 additional year before repayment begins.",
    financialBenefit: "Collateral-free education loan up to ₹4,00,000 at 4% interest (1% for women & disabled) with moratorium period",
    benefitFrequency: "Disbursed in annual/semester installments directly to college & student",
    impact: "Significantly boosted higher education Gross Enrolment Ratio (GER) in Bihar, enabling poor students to study engineering, medicine, MBA, BCA, and nursing in leading colleges nationwide.",
    detailedEligibility: {
      ageRequirement: "Up to 25 years at the time of application (up to 30 years for postgraduate courses).",
      genderRequirement: "All genders eligible; special 1% interest rate for female and transgender students.",
      incomeLimit: "NO family income ceiling (open to all economic strata).",
      educationRequirement: "Class 12 pass (or Class 10 pass for 3-year polytechnic diploma).",
      occupationRequirement: "Student admitted to an approved institution.",
      casteCategoryRequirement: "Open to all categories (General, OBC, EBC, SC, ST).",
      residenceRequirement: "Permanent resident / domicile of Bihar.",
      familyConditions: "Parent/guardian joins as co-applicant; no property collateral required."
    },
    mandatoryConditions: [
      "Must be a permanent resident of Bihar with valid Domicile Certificate",
      "Must have passed Class 12 (Intermediate) from an institution in Bihar (or border areas)",
      "Must have secured admission to an institution accredited by NAAC (minimum 'A' grade or recognized by state council / central bodies)",
      "Loan repayment begins 1 year after course completion or 6 months after getting a job, whichever is earlier"
    ],
    conditionalRequirements: [
      "Parent / legal guardian must sign as co-applicant on the loan agreement."
    ],
    ineligibility: [
      "Non-residents of Bihar",
      "Unrecognized institutions or unaccredited non-standard distance degrees",
      "Students already availing bank education loan with central interest subsidy"
    ],
    documents: [
      {
        name: "Bihar Domicile Certificate (Niwas Praman Patra)",
        why: "Confirms permanent residence in Bihar.",
        mandatory: true,
        issuingAuthority: "Revenue Officer / Sub-Divisional Officer (SDO) Bihar",
        format: "Digitally signed certificate from RTPS portal",
        validity: "Permanent"
      },
      {
        name: "Class 10 & 12 Marksheets & Passing Certificates",
        why: "Academic qualification proof.",
        mandatory: true,
        issuingAuthority: "BSEB / CBSE / CISCE",
        format: "Original + self-attested photocopies",
        validity: "Permanent"
      },
      {
        name: "College Admission Letter & Approved Fee Structure",
        why: "Proves enrollment and itemized loan requirement (tuition + hostel + books).",
        mandatory: true,
        issuingAuthority: "Recognized College / University Registrar",
        format: "Official prospectus / fee structure on college letterhead",
        validity: "Current academic year"
      },
      {
        name: "Aadhaar Card of Student & Co-Applicant (Parent)",
        why: "Identity verification.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Original + photocopies",
        validity: "Permanent"
      },
      {
        name: "Bank Passbook Copy of Student & Parent",
        why: "Account details for loan documentation and living expense disbursement.",
        mandatory: true,
        issuingAuthority: "Scheduled Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      },
      {
        name: "Passport Size Photographs (Student & Parent)",
        why: "Loan file and Smart Card generation.",
        mandatory: true,
        issuingAuthority: "Self",
        format: "2 recent colour photographs each",
        validity: "Recent"
      }
    ],
    applicationMode: "Online via 7 Nischay Portal (7nishchay-yuvaupmission.bihar.gov.in) + In-person verification at District Registration and Counseling Centre (DRCC)",
    process: [
      "Step 1: Secure admission in an approved degree/diploma course.",
      "Step 2: Visit 7nishchay-yuvaupmission.bihar.gov.in and click 'New Applicant Registration'.",
      "Step 3: Enter Name, Mobile Number, and Aadhaar; verify via OTP.",
      "Step 4: Select 'Bihar Student Credit Card (BSCC)' and fill in personal, college, course, and fee details.",
      "Step 5: Submit online application and book an appointment date at your home District Registration and Counseling Centre (DRCC).",
      "Step 6: Visit the DRCC on your scheduled date with your parent and all original documents.",
      "Step 7: DRCC executive scans original documents and provides an Acknowledgement Receipt.",
      "Step 8: Third-party verification agency verifies your college enrollment.",
      "Step 9: Bihar State Education Finance Corporation (BSEFC) sanctions the loan within 30 to 45 days.",
      "Step 10: Sign the loan agreement at DRCC; tuition fees are transferred directly to college, and living allowance to student's account."
    ],
    offlineProcess: "Physical verification at the District Registration and Counseling Centre (DRCC) in your home district headquarters is mandatory. Carry original certificates, parent co-applicant, and 2 sets of photocopies.",
    commonMistakes: [
      "Choosing an unapproved college: Check whether the college is approved on the BSCC portal; institutions with poor accreditation grades may be excluded.",
      "Missing the DRCC appointment: You must physically visit the DRCC with your parent; failure to attend cancels the digital application."
    ],
    deadlineInfo: "Continuous rolling scheme. Applications accepted year-round.",
    openingDate: "Continuous year-round service",
    processingTime: "Sanctioned within 30 to 45 working days from DRCC document verification.",
    renewalRequired: "Semestral / annual disbursement release upon submitting pass marksheet of previous semester.",
    trackingProcedure: "Track application progress on 7nishchay-yuvaupmission.bihar.gov.in using Registration ID.",
    correctionProcedure: "DRCC executives assist with document re-upload if any discrepancy is flagged.",
    disbursementMethod: "Direct Electronic Transfer: Tuition Fees to College Account; Living Expenses to Student Account",
    disbursementDetails: "Bihar State Education Finance Corporation (BSEFC) transfers college tuition fees directly to the institute's bank account semester-by-semester, and deposits living/hostel allowances into the student's personal savings account.",
    faqs: [
      { q: "What is the interest rate on the Bihar Student Credit Card?", a: "The interest rate is 4% simple interest per annum for male students, and an ultra-concessional 1% simple interest for female, transgender, and disabled students." },
      { q: "When does the loan repayment start?", a: "Repayment starts 1 year after you complete your course, or 6 months after securing employment, whichever occurs first." },
      { q: "Do I need to pledge land or property as collateral?", a: "No! The Bihar State Government acts as the 100% guarantor for the entire loan up to ₹4,00,000. No property mortgage or third-party guarantee is required." },
      { q: "Can I study outside Bihar using this credit card?", a: "Yes. The scheme covers recognized colleges and universities across all states in India." },
      { q: "What happens if a student does not get a job after graduation?", a: "The moratorium can be extended upon submitting an unemployment declaration, and repayment installments are restructured flexibly." },
      { q: "Does the loan cover laptop and hostel expenses?", a: "Yes. The ₹4 Lakh limit includes tuition fees, college hostel fees (or PG rent), books, stationary, and a laptop." }
    ],
    helpline: "Bihar 7 Nischay Toll-Free: 1800-345-6444",
    email: "bscc-bsefc@bihar.gov.in"
  },

  "lic-golden-jubilee": {
    launchYear: 2006,
    purpose: "LIC Golden Jubilee Scholarship Scheme, established by the Life Insurance Corporation of India (LIC) Golden Jubilee Foundation, provides merit-cum-means financial assistance to economically disadvantaged students to pursue higher education in medicine, engineering, graduation, diploma, and vocational courses.",
    targetBeneficiary: "Meritorious students who passed Class 10 or 12 with at least 60% marks and whose family annual income does not exceed ₹2,50,000 per annum.",
    benefits: "Comprehensive cash scholarship: ₹40,000 per year for Medicine (MBBS/BDS); ₹30,000 per year for Engineering (B.Tech); ₹20,000 per year for regular Graduation (B.A., B.Sc., B.Com) and Diploma courses; plus a Special Scholarship for Girl Children of ₹15,000 per year for 10+2 studies.",
    financialBenefit: "₹40,000/year (Medicine), ₹30,000/year (Engineering), ₹20,000/year (Graduation/Diploma), ₹15,000/year (Special Girl Scholarship)",
    benefitFrequency: "Paid in 3 quarterly installments via direct bank transfer",
    impact: "Supports poor, bright students across every LIC divisional territory in India, helping future doctors and engineers complete professional schooling without commercial loans.",
    detailedEligibility: {
      ageRequirement: "College/school going age.",
      genderRequirement: "All genders eligible; special dedicated scholarship category for girl children.",
      incomeLimit: "Total parental/family annual income must NOT exceed ₹2,50,000 per annum.",
      educationRequirement: "Minimum 60% marks (or equivalent grade) in Class 10 or Class 12 in the preceding academic year.",
      occupationRequirement: "Student.",
      casteCategoryRequirement: "Open to all categories (General, OBC, SC, ST, EWS).",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Only one student per family."
    },
    mandatoryConditions: [
      "Must have scored at least 60% marks in Class 10 or 12 in the current academic year",
      "Total family annual income must not exceed ₹2,50,000 per year",
      "Must be pursuing regular full-time higher education in a government-recognized college/university",
      "Student must maintain at least 55% marks in college exams for annual renewal"
    ],
    conditionalRequirements: [
      "Medical/Engineering enrollment proof to claim the higher ₹40,000 / ₹30,000 scholarship brackets."
    ],
    ineligibility: [
      "Students scoring below 60% in Class 10/12",
      "Family annual income exceeding ₹2,50,000",
      "Students pursuing correspondence or part-time courses"
    ],
    documents: [
      {
        name: "Class 10 / 12 Marksheet (Minimum 60% Marks)",
        why: "Confirms academic merit qualification.",
        mandatory: true,
        issuingAuthority: "State Board / CBSE / CISCE",
        format: "Certified marksheet copy",
        validity: "Permanent"
      },
      {
        name: "Income Certificate (Family income < ₹2.5 Lakh)",
        why: "Proves compliance with economic ceiling.",
        mandatory: true,
        issuingAuthority: "Revenue Authority (Tahsildar / SDM / Employer ITR)",
        format: "Valid Revenue Certificate / Form 16",
        validity: "Current financial year"
      },
      {
        name: "College Admission Letter & Fee Receipt",
        why: "Confirms regular full-time college enrollment.",
        mandatory: true,
        issuingAuthority: "College Principal / Registrar",
        format: "Original or attested fee receipt",
        validity: "Current academic session"
      },
      {
        name: "Aadhaar Card & Bank Passbook Copy (Cancelled Cheque)",
        why: "For direct electronic payment transfer.",
        mandatory: true,
        issuingAuthority: "UIDAI / Bank",
        format: "Bank passbook copy showing Account Number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via LIC Official Portal (licindia.in)",
    process: [
      "Step 1: Check notification on licindia.in under 'Golden Jubilee Foundation'.",
      "Step 2: Click 'Apply for LIC Golden Jubilee Scholarship Online'.",
      "Step 3: Fill in Personal Details, Educational Stream (Medical / Engineering / General Graduation / Diploma), and Class 10/12 marks.",
      "Step 4: Enter family income and local LIC Divisional Office jurisdiction.",
      "Step 5: Provide active bank account details (Bank Name, Branch, IFSC, Account Number).",
      "Step 6: Submit the online application. Note down your Application Reference Number.",
      "Step 7: Shortlisted candidates receive an intimation email/call from the nearest LIC Divisional Office.",
      "Step 8: Visit the LIC Divisional Office with original documents for physical verification.",
      "Step 9: LIC Golden Jubilee Foundation issues the sanction letter.",
      "Step 10: Scholarship amount is credited directly to the student's bank account in quarterly installments."
    ],
    offlineProcess: "Shortlisted candidates are invited to the nearest LIC Divisional Office to present original marksheets, income certificate, and fee receipts for verification.",
    commonMistakes: [
      "Entering wrong LIC Divisional Office: Choose the LIC division covering your college or permanent residence.",
      "Entering marks below 60%: Automated portal filters reject applications with aggregate marks under 60%."
    ],
    deadlineInfo: "Announced annually between November and December.",
    openingDate: "October/November annually",
    processingTime: "60 to 75 days from online closing date.",
    renewalRequired: "Yes, renewed annually upon scoring at least 55% in college exams.",
    trackingProcedure: "Contact your local LIC Divisional Office or email co_gjf@licindia.com.",
    correctionProcedure: "Corrections can be made at the Divisional Office during physical document scrutiny.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student's Bank Account via NEFT/RTGS",
    disbursementDetails: "Disbursed by the LIC Golden Jubilee Foundation in 3 quarterly installments directly into the student's personal savings account.",
    faqs: [
      { q: "Is LIC Golden Jubilee Scholarship open to students of all castes?", a: "Yes! It is open to all Indian citizens regardless of caste, religion, or community, based on merit (60%+) and means (income < ₹2.5L)." },
      { q: "What is the Special Scholarship for Girl Child under LIC?", a: "It provides ₹15,000 per year for 2 years to meritorious girl students who have passed Class 10 with 60%+ marks and are pursuing 10+2 higher secondary studies." },
      { q: "How many scholarships does each LIC division grant?", a: "Each LIC Divisional Office selects 20 regular scholars (10 boys and 10 girls) plus 10 girl scholars under the special 10+2 scheme." },
      { q: "Can a student who has an existing LIC policy apply?", a: "Holding an LIC insurance policy is NOT required. The scholarship is open to all deserving students across India." },
      { q: "What is the minimum passing percentage for annual renewal?", a: "Scholars must secure at least 55% marks in their annual college/university examination to continue receiving the scholarship." },
      { q: "Is there any application fee?", a: "No, applying for the LIC Golden Jubilee Scholarship is 100% free." }
    ],
    helpline: "LIC Golden Jubilee Foundation Desk: 022-66602000",
    email: "co_gjf@licindia.com"
  },

  "reliance-ug-scholarship": {
    launchYear: 2022,
    purpose: "The Reliance Foundation Undergraduate Scholarship, instituted by Reliance Foundation, supports meritorious undergraduate students from all socio-economic backgrounds across India to pursue full-time degree programs, nurturing future nation-builders and civic leaders.",
    targetBeneficiary: "Undergraduate students enrolled in the 1st year of any regular undergraduate degree program in India who passed Class 12 with at least 60% marks.",
    benefits: "Comprehensive grant of up to ₹2,00,000 over the entire duration of the undergraduate degree course (disbursed in annual tranches of ₹50,000 per year) plus access to leadership workshops, mentorship by global experts, and an alumni network.",
    financialBenefit: "Up to ₹2,00,000 over the degree course (disbursed at ₹50,000 per year)",
    benefitFrequency: "Annual disbursement across undergraduate degree years",
    impact: "Unlocks world-class learning resources, covers college fees and living costs, and connects students with corporate and technology leadership networks.",
    detailedEligibility: {
      ageRequirement: "First-year undergraduate college student.",
      genderRequirement: "All genders eligible; applications from girls and differently-abled students strongly encouraged.",
      incomeLimit: "Household annual income up to ₹15,00,000 per annum (preference given to families earning less than ₹2,50,000 per annum).",
      educationRequirement: "Class 12 passed with minimum 60% aggregate marks; currently enrolled in 1st year of full-time undergraduate degree.",
      occupationRequirement: "Full-time student.",
      casteCategoryRequirement: "Open to all categories.",
      residenceRequirement: "Citizen of India.",
      familyConditions: "Covered per student record."
    },
    mandatoryConditions: [
      "Must be a full-time 1st year undergraduate student in any recognized degree course in India",
      "Must have secured at least 60% marks in Class 12 board examination",
      "Must complete the mandatory online Reliance Foundation Aptitude Test",
      "Household annual income must not exceed ₹15,00,000 per year"
    ],
    conditionalRequirements: [
      "Aptitude test score of 60 minutes duration (consisting of verbal ability, analytical thinking, and numerical ability)."
    ],
    ineligibility: [
      "Students pursuing online, distance, or part-time degree courses",
      "Students in 2nd, 3rd, or 4th year of college (scholarship is only open to 1st year undergraduate students)",
      "Family annual income exceeding ₹15,00,000"
    ],
    documents: [
      {
        name: "Class 10 & 12 Marksheets",
        why: "Academic merit verification.",
        mandatory: true,
        issuingAuthority: "State Board / CBSE / CISCE",
        format: "Scanned PDF copy",
        validity: "Permanent"
      },
      {
        name: "College Bonafide Student Certificate",
        why: "Confirms 1st year full-time undergraduate enrollment.",
        mandatory: true,
        issuingAuthority: "College Principal / Registrar",
        format: "Signed bonafide certificate on college letterhead",
        validity: "Current academic session"
      },
      {
        name: "Family Income Proof (ITR / Income Certificate / Salary Slip)",
        why: "Confirms household income meets eligibility criteria.",
        mandatory: true,
        issuingAuthority: "Tahsildar / Employer / Income Tax Department",
        format: "Valid Revenue Certificate or Form 16 / ITR",
        validity: "Current financial year"
      },
      {
        name: "Aadhaar Card",
        why: "Identity verification.",
        mandatory: true,
        issuingAuthority: "UIDAI",
        format: "Scanned copy",
        validity: "Permanent"
      }
    ],
    applicationMode: "Online via Reliance Foundation Scholarships Portal (scholarships.reliancefoundation.org)",
    process: [
      "Step 1: Visit scholarships.reliancefoundation.org during the annual application window (August to October).",
      "Step 2: Register with your email and mobile number.",
      "Step 3: Complete the Eligibility Questionnaire and submit personal and college details.",
      "Step 4: Upload Class 10/12 marksheets, Bonafide Student certificate, and Household Income proof.",
      "Step 5: Submit the online application.",
      "Step 6: Take the mandatory 60-minute online Reliance Foundation Aptitude Test from your home computer.",
      "Step 7: Selection committee evaluates combined scores: 12th marks, aptitude test performance, and economic background.",
      "Step 8: Results announced in December/January; 5,000 undergraduate scholars selected across India.",
      "Step 9: Scholars complete bank verification and receive the first ₹50,000 installment via direct bank transfer."
    ],
    offlineProcess: "The entire process from application to aptitude testing and disbursement is 100% digital online.",
    commonMistakes: [
      "Missing the online aptitude test: Applications are strictly evaluated on both Class 12 marks and aptitude test scores; failing to take the test disqualifies the applicant.",
      "Applying in 2nd or 3rd year: Reliance Foundation Undergraduate Scholarship is strictly open to 1st year undergraduate students."
    ],
    deadlineInfo: "Opens annually in August and closes in October.",
    openingDate: "August annually",
    processingTime: "Results announced within 60 to 75 days of application close.",
    renewalRequired: "Yes, renewed annually upon maintaining satisfactory academic grade in college.",
    trackingProcedure: "Log in to scholarships.reliancefoundation.org to check application and selection status.",
    correctionProcedure: "Helpdesk support available via email during the application window.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student's Bank Account via NEFT",
    disbursementDetails: "Reliance Foundation transfers ₹50,000 annually directly into the student's personal savings account.",
    faqs: [
      { q: "How many undergraduate scholarships are awarded by Reliance Foundation?", a: "5,000 undergraduate scholarships are awarded across India every year, making it one of India's largest private scholarship initiatives." },
      { q: "Is the scholarship restricted to engineering students?", a: "No! Students enrolled in ANY full-time undergraduate degree program (B.A., B.Com, B.Sc., B.Tech, MBBS, Law, Design, etc.) are eligible." },
      { q: "What is the format of the online aptitude test?", a: "It is a 60-minute online multiple-choice test consisting of 60 questions covering Verbal Ability, Analytical & Logical Reasoning, and Numerical Ability." },
      { q: "What is the income threshold?", a: "Households earning up to ₹15 Lakhs are eligible, though preference and special consideration are given to families earning less than ₹2.5 Lakhs." },
      { q: "Can I receive this scholarship if I also receive another government scholarship?", a: "Yes, Reliance Foundation permits holding other scholarships, provided your college and other funding bodies allow multiple grants." },
      { q: "Is there any interview for undergraduate scholars?", a: "Undergraduate selection is based on Class 12 marks, economic need, and aptitude test scores; there is no personal interview for the undergraduate tier." }
    ],
    helpline: "Reliance Foundation Helpdesk: 011-41182900",
    email: "rf.scholarships@reliancefoundation.org"
  },

  "vidyasaarathi": {
    launchYear: 2017,
    purpose: "Vidyasaarathi is a national digital scholarship gateway managed by Protean eGov Technologies (formerly NSDL e-Governance Infrastructure). It connects underprivileged students with corporate CSR scholarship funds from India's leading corporations (Tata, ACC, JSW, TransUnion, Schindler, NSDL, etc.) through a single transparent portal.",
    targetBeneficiary: "Students across India pursuing ITI, Diploma, Undergraduate, Engineering, Medical, and Postgraduate courses whose family annual income is below ₹5,00,000 per annum.",
    benefits: "Merit-cum-means corporate scholarships ranging from ₹10,000 to ₹1,00,000 per year depending on the specific corporate CSR scheme applied for (e.g. ACC Vidya Saarathi, JSW Udan, Schindler Igniting Minds, Tata Housing Scholarship).",
    financialBenefit: "Corporate CSR scholarships from ₹10,000 to ₹1,00,000 per year disbursed directly via DBT",
    benefitFrequency: "Annual single lump-sum credit",
    impact: "Unlocks private corporate CSR educational capital for students in rural and industrial belts, funding technical diplomas and higher education.",
    detailedEligibility: {
      ageRequirement: "College/school going students.",
      genderRequirement: "All genders eligible; several corporate funds earmarked 100% for female students.",
      incomeLimit: "Family annual income typically must NOT exceed ₹3,00,000 to ₹5,00,000 per annum (scheme specific).",
      educationRequirement: "Minimum 50% to 60% marks in previous examination.",
      occupationRequirement: "Student.",
      casteCategoryRequirement: "Open to all categories (General, SC, ST, OBC).",
      residenceRequirement: "Citizen of India (some schemes prioritized for plant-adjacent districts).",
      familyConditions: "Covered per student record."
    },
    mandatoryConditions: [
      "Must have secured minimum 50% or 60% marks (as specified by the particular corporate scheme)",
      "Total family annual income must be below the scheme's specified ceiling (usually ₹3 Lakh to ₹5 Lakh)",
      "Must possess an individual active bank account in the student's name"
    ],
    conditionalRequirements: [
      "Some corporate funds require domicile in specific operational districts (e.g. near factory sites)."
    ],
    ineligibility: [
      "Children of permanent employees of the sponsoring corporate donor company",
      "Students scoring below the minimum percentage threshold",
      "Applications with incomplete or unverified income documents"
    ],
    documents: [
      {
        name: "Previous Class Marksheet",
        why: "Verifies academic performance.",
        mandatory: true,
        issuingAuthority: "Board / University",
        format: "Clear scanned PDF",
        validity: "Permanent"
      },
      {
        name: "Family Income Certificate / Salary Slip / Form 16",
        why: "Confirms economic need.",
        mandatory: true,
        issuingAuthority: "Tahsildar / Employer / Revenue Authority",
        format: "Valid Revenue Certificate / Salary Slip",
        validity: "Current financial year"
      },
      {
        name: "College Admission Letter & Current Fee Receipt",
        why: "Proves current enrollment and fee schedule.",
        mandatory: true,
        issuingAuthority: "College Principal",
        format: "Official fee receipt",
        validity: "Current academic year"
      },
      {
        name: "Student Aadhaar Card & Bank Passbook (or Cancelled Cheque)",
        why: "Identity verification and direct bank transfer.",
        mandatory: true,
        issuingAuthority: "UIDAI / Bank",
        format: "Passbook copy showing Account Number and IFSC",
        validity: "Active account"
      }
    ],
    applicationMode: "Online via Vidyasaarathi Portal (vidyasaarathi.co.in)",
    process: [
      "Step 1: Visit vidyasaarathi.co.in and click 'Sign Up'.",
      "Step 2: Complete student registration with your mobile number and email.",
      "Step 3: Complete your Profile (Personal Details, Address, Family Income, Academic History, Bank Details).",
      "Step 4: Upload mandatory documents: Marksheet, Income Proof, Fee Receipt, and Bank Passbook.",
      "Step 5: Click 'Search Schemes'. The portal automatically displays matching CSR scholarship schemes based on your profile.",
      "Step 6: Apply to relevant corporate schemes (e.g. JSW Udan, ACC Vidyasaarathi).",
      "Step 7: Protean team screens applications for document completeness.",
      "Step 8: Corporate CSR committees review and approve selected scholars.",
      "Step 9: Scholarship funds are transferred directly into the student's bank account via NEFT."
    ],
    offlineProcess: "The entire application, screening, and disbursement process is managed digitally through the Protean Vidyasaarathi portal.",
    commonMistakes: [
      "Uploading passbook without IFSC/account clarity: Causes rejection during automated bank account validation.",
      "Not checking multiple corporate schemes: A student can apply to multiple matching CSR funds listed on the portal."
    ],
    deadlineInfo: "Different corporate schemes open and close throughout the year (major wave from August to December).",
    openingDate: "Rolling application windows open year-round",
    processingTime: "45 to 60 days following the closing date of each corporate scheme.",
    renewalRequired: "Varies by corporate scheme; multi-year programs require annual marksheet re-submission.",
    trackingProcedure: "Log in to vidyasaarathi.co.in and check 'Applied Schemes' dashboard.",
    correctionProcedure: "Helpdesk support allows document re-upload if notified of rejection.",
    disbursementMethod: "Direct Benefit Transfer (DBT) directly into Student's Bank Account via NEFT/PFMS",
    disbursementDetails: "Protean eGov Technologies transfers the sanctioned corporate CSR scholarship amount directly into the student's verified savings account.",
    faqs: [
      { q: "What is Vidyasaarathi?", a: "Vidyasaarathi is a digital scholarship platform managed by Protean eGov Technologies (NSDL) that channels corporate social responsibility (CSR) funds directly to deserving students across India." },
      { q: "Do I have to pay any fee to apply on Vidyasaarathi?", a: "No! Applying for scholarships on Vidyasaarathi is completely free. Beware of any agents asking for fees." },
      { q: "Can I apply for more than one scholarship on the portal?", a: "Yes. You can apply to all corporate scholarship schemes for which your profile meets the eligibility criteria." },
      { q: "Which companies offer scholarships on Vidyasaarathi?", a: "Leading corporate donors include ACC Limited, JSW Foundation, Schindler, TransUnion CIBIL, NSDL, Timken, and Care Ratings." },
      { q: "Can diploma and ITI students apply?", a: "Yes, many corporate schemes on Vidyasaarathi are specifically dedicated to ITI, polytechnic diploma, and vocational students." },
      { q: "How will I know if I am selected?", a: "Selected students receive an official email and SMS notification from Vidyasaarathi, and the status updates on their student dashboard." }
    ],
    helpline: "Vidyasaarathi Helpdesk: 022-40904484",
    email: "vidyasaarathi@proteantech.in"
  }
};

