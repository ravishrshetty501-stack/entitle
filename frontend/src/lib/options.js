export const STATES = [
    "Central (All India)",
    "Karnataka",
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
    "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
];

export const CATEGORIES = [
    "Food Security & Nutrition (SDG 2)",
    "Healthcare & Medical Assistance (SDG 3)",
    "Education & Scholarships",
    "Women & Child Welfare",
    "Farmers & Agriculture",
    "Employment & Skill Development",
    "Housing & Basic Needs",
    "Financial Inclusion & Pension",
    "Social Justice & Disability Support",
    "MSME & Entrepreneurship"
];

export const SDGS = [
    "All SDGs",
    "SDG 1: No Poverty",
    "SDG 2: Zero Hunger",
    "SDG 3: Good Health and Well-being",
    "SDG 4: Quality Education",
    "SDG 5: Gender Equality",
    "SDG 6: Clean Water and Sanitation",
    "SDG 7: Affordable and Clean Energy",
    "SDG 8: Decent Work & Economic Growth",
    "SDG 9: Industry, Innovation and Infrastructure",
    "SDG 10: Reduced Inequalities",
    "SDG 11: Sustainable Cities & Communities",
    "SDG 12: Responsible Consumption and Production",
    "SDG 14: Life Below Water"
];

export const BENEFICIARIES = [
    "All Beneficiaries",
    "Students",
    "Farmers",
    "Women",
    "Senior Citizens",
    "Entrepreneurs",
    "Job Seekers & Youth",
    "Persons with Disabilities",
    "BPL Families",
    "All Citizens"
];

export const INCOME_OPTIONS = [
    { value: "", label: "Any Income" },
    { value: "100000", label: "Up to ₹1,00,000 / yr" },
    { value: "200000", label: "Up to ₹2,00,000 / yr" },
    { value: "350000", label: "Up to ₹3,50,000 / yr" },
    { value: "500000", label: "Up to ₹5,00,000 / yr" },
    { value: "800000", label: "Up to ₹8,00,000 / yr" },
    { value: "1500000", label: "Up to ₹15,00,000 / yr" }
];

export const AGE_PRESETS = [
    { label: "Any Age", value: "" },
    { label: "Children & Teens (<18)", value: "14" },
    { label: "Youth & Students (18-25)", value: "21" },
    { label: "Working Adults (26-45)", value: "35" },
    { label: "Middle Age (46-59)", value: "50" },
    { label: "Senior Citizens (60+)", value: "65" },
    { label: "Super Seniors (70+)", value: "72" }
];

export const OPTIONS = {
    occupation: ["STUDENT", "FARMER", "SALARIED", "SELF_EMPLOYED", "STREET_VENDOR", "DAILY_WAGE", "HOMEMAKER", "UNEMPLOYED", "RETIRED", "OTHER"],
    education: ["NONE", "PRIMARY", "SECONDARY", "HIGHER_SECONDARY", "DIPLOMA", "UNDERGRADUATE", "POSTGRADUATE"],
    incomeRange: ["BELOW_1L", "1L_2_5L", "2_5L_4_5L", "4_5L_8L", "8L_18L", "ABOVE_18L"],
    householdCategory: ["GENERAL", "OBC", "SC", "ST", "EWS", "MINORITY", "PREFER_NOT"],
    gender: ["FEMALE", "MALE", "OTHER", "PREFER_NOT"],
    area: ["RURAL", "URBAN"],
    disabilityLevel: ["BELOW_40", "40_79", "80_PLUS"],
};

export const APP_STATUSES = ["INTERESTED", "PREPARING_DOCUMENTS", "READY_TO_APPLY", "SUBMITTED", "UNDER_REVIEW", "APPROVED", "REJECTED", "ACTION_REQUIRED"];

export const ELIGIBILITY = ["LIKELY_ELIGIBLE", "NEEDS_VERIFICATION", "POTENTIALLY_ELIGIBLE", "NOT_ELIGIBLE"];

export const AGE_GROUPS = [
    { key: "under18", age: 16, label: "Under 18" },
    { key: "18-40", age: 30, label: "18–40" },
    { key: "41-59", age: 50, label: "41–59" },
    { key: "60-69", age: 65, label: "60–69" },
    { key: "70plus", age: 75, label: "70+" },
];

export const humanize = (s) => (s || "").toLowerCase().replace(/_/g, " ").replace(/^\w/, (c) => c.toUpperCase());
