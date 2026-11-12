export const STATES = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana",
    "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
    "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi",
    "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"];

export const OPTIONS = {
    occupation: ["STUDENT", "FARMER", "SALARIED", "SELF_EMPLOYED", "STREET_VENDOR", "DAILY_WAGE", "HOMEMAKER", "UNEMPLOYED", "RETIRED", "OTHER"],
    education: ["NONE", "PRIMARY", "SECONDARY", "HIGHER_SECONDARY", "DIPLOMA", "UNDERGRADUATE", "POSTGRADUATE"],
    incomeRange: ["BELOW_1L", "1L_2_5L", "2_5L_4_5L", "4_5L_8L", "8L_18L", "ABOVE_18L"],
    householdCategory: ["GENERAL", "OBC", "SC", "ST", "EWS", "MINORITY", "PREFER_NOT"],
    gender: ["FEMALE", "MALE", "OTHER", "PREFER_NOT"],
    area: ["RURAL", "URBAN"],
    disabilityLevel: ["BELOW_40", "40_79", "80_PLUS"],
};

export const CATEGORIES = ["Healthcare", "Education", "Agriculture", "Financial Assistance", "Housing", "Employment",
    "Senior Citizen Benefits", "Disability Support", "Women and Child Welfare"];

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
