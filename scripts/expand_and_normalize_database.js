const fs = require('fs');
const path = require('path');

const seedDir = path.join(__dirname, '../entitle-backend/src/main/resources/seed');
const s1Path = path.join(seedDir, 'schemes.json');
const s2Path = path.join(seedDir, 'schemes-extra.json');

const s1 = JSON.parse(fs.readFileSync(s1Path, 'utf8'));
const s2 = JSON.parse(fs.readFileSync(s2Path, 'utf8'));

const d5 = require('./data_part5_national_expansion.js');
const d6 = require('./data_part6_state_saturation.js');
const d7 = require('./data_part7_pan_india.js');

const newSchemes = { ...d5, ...d6, ...d7 };

console.log(`Loaded ${Object.keys(newSchemes).length} new verified schemes from parts 5, 6, 7`);

// Official 10 Categories
const CATEGORY_MAP = {
  // Food Security
  "food": "Food Security & Nutrition (SDG 2)",
  "ration": "Food Security & Nutrition (SDG 2)",
  "nutrition": "Food Security & Nutrition (SDG 2)",
  // Healthcare
  "health": "Healthcare & Medical Assistance (SDG 3)",
  "medical": "Healthcare & Medical Assistance (SDG 3)",
  // Education
  "education": "Education & Scholarships",
  "student": "Education & Scholarships",
  "scholarship": "Education & Scholarships",
  // Women & Child
  "women": "Women & Child Welfare",
  "child": "Women & Child Welfare",
  // Farmers
  "agri": "Farmers & Agriculture",
  "farmer": "Farmers & Agriculture",
  // Employment
  "employ": "Employment & Skill Development",
  "skill": "Employment & Skill Development",
  // Housing
  "housing": "Housing & Basic Needs",
  "utilities": "Housing & Basic Needs",
  // Financial Inclusion & Pension
  "pension": "Financial Inclusion & Pension",
  "financial": "Financial Inclusion & Pension",
  "banking": "Financial Inclusion & Pension",
  "insurance": "Financial Inclusion & Pension",
  // Social Justice
  "social justice": "Social Justice & Disability Support",
  "disab": "Social Justice & Disability Support",
  // MSME
  "msme": "MSME & Entrepreneurship",
  "entrepreneur": "MSME & Entrepreneurship",
  "business": "MSME & Entrepreneurship"
};

function normalizeCategory(c, id, name) {
  const text = ((c || "") + " " + (id || "") + " " + (name || "")).toLowerCase();
  if (text.includes("food") || text.includes("ration") || text.includes("anna") || text.includes("poshan") || text.includes("meal")) {
    return "Food Security & Nutrition (SDG 2)";
  }
  if (text.includes("health") || text.includes("medical") || text.includes("hospital") || text.includes("arogya") || text.includes("swasthya") || text.includes("kasp") || text.includes("cmchis") || text.includes("yashasvini")) {
    return "Healthcare & Medical Assistance (SDG 3)";
  }
  if (text.includes("scholarship") || text.includes("student") || text.includes("education") || text.includes("ssp") || text.includes("vidya") || text.includes("pragati") || text.includes("saksham") || text.includes("nmmss") || text.includes("credit-card")) {
    return "Education & Scholarships";
  }
  if (text.includes("women") || text.includes("girl") || text.includes("kanya") || text.includes("ladki") || text.includes("behna") || text.includes("bhandar") || text.includes("sukanya") || text.includes("maternity") || text.includes("pmmvy") || text.includes("shakti") || text.includes("bhagyalakshmi") || text.includes("udyogini")) {
    return "Women & Child Welfare";
  }
  if (text.includes("farmer") || text.includes("agri") || text.includes("kisan") || text.includes("pmfby") || text.includes("kcc") || text.includes("kusum") || text.includes("irrigation") || text.includes("ganga-kalyana") || text.includes("millet") || text.includes("soil") || text.includes("matsya")) {
    return "Farmers & Agriculture";
  }
  if (text.includes("employ") || text.includes("skill") || text.includes("mgnrega") || text.includes("nats") || text.includes("eshram") || text.includes("internship") || text.includes("career") || text.includes("kaushalya") || text.includes("mumkin") || text.includes("gatidhara") || text.includes("kaushal")) {
    return "Employment & Skill Development";
  }
  if (text.includes("housing") || text.includes("house") || text.includes("pmay") || text.includes("surya") || text.includes("electricity") || text.includes("water") || text.includes("jal") || text.includes("swachh") || text.includes("saubhagya") || text.includes("gruha-jyothi") || text.includes("basava")) {
    return "Housing & Basic Needs";
  }
  if (text.includes("pension") || text.includes("senior") || text.includes("apy") || text.includes("ignoaps") || text.includes("ignwps") || text.includes("scss") || text.includes("sandhya") || text.includes("pmjdy") || text.includes("pmjjby") || text.includes("pmsby") || text.includes("pm-sym") || text.includes("cheyutha")) {
    return "Financial Inclusion & Pension";
  }
  if (text.includes("disab") || text.includes("udid") || text.includes("igndps") || text.includes("adip") || text.includes("namaste") || text.includes("shreshtha") || text.includes("sc/st") || text.includes("obc") || text.includes("minority") || text.includes("day-nrlm") || text.includes("nfbs") || text.includes("niradhar")) {
    return "Social Justice & Disability Support";
  }
  if (text.includes("mudra") || text.includes("msme") || text.includes("business") || text.includes("startup") || text.includes("pmegp") || text.includes("svanidhi") || text.includes("vishwakarma") || text.includes("stand-up") || text.includes("cgtmse") || text.includes("pmfme") || text.includes("ramp") || text.includes("zed")) {
    return "MSME & Entrepreneurship";
  }
  return "Social Justice & Disability Support";
}

function assignSdgAndBeneficiary(s) {
  const cat = s.category;
  if (!s.sdg) {
    if (cat.includes("Food Security")) s.sdg = "SDG 2: Zero Hunger";
    else if (cat.includes("Healthcare")) s.sdg = "SDG 3: Good Health and Well-being";
    else if (cat.includes("Education")) s.sdg = "SDG 4: Quality Education";
    else if (cat.includes("Women")) s.sdg = "SDG 5: Gender Equality";
    else if (cat.includes("Farmers")) s.sdg = "SDG 2: Zero Hunger";
    else if (cat.includes("Employment")) s.sdg = "SDG 8: Decent Work & Economic Growth";
    else if (cat.includes("Housing")) s.sdg = "SDG 11: Sustainable Cities & Communities";
    else if (cat.includes("Financial")) s.sdg = "SDG 1: No Poverty";
    else if (cat.includes("Social Justice")) s.sdg = "SDG 10: Reduced Inequalities";
    else if (cat.includes("MSME")) s.sdg = "SDG 8: Decent Work & Economic Growth";
    else s.sdg = "SDG 1: No Poverty";
  }

  if (!s.beneficiaryType) {
    const text = (s.name + " " + (s.description || "") + " " + (s.whoCanApply || "")).toLowerCase();
    if (text.includes("student") || text.includes("scholarship")) s.beneficiaryType = "Students";
    else if (text.includes("farmer") || text.includes("cultivat")) s.beneficiaryType = "Farmers";
    else if (text.includes("women") || text.includes("girl") || text.includes("mother")) s.beneficiaryType = "Women";
    else if (text.includes("senior") || text.includes("pension") || text.includes("old age")) s.beneficiaryType = "Senior Citizens";
    else if (text.includes("disab") || text.includes("divyang")) s.beneficiaryType = "Persons with Disabilities";
    else if (text.includes("msme") || text.includes("business") || text.includes("entrepreneur") || text.includes("artisan") || text.includes("vendor")) s.beneficiaryType = "Entrepreneurs";
    else if (text.includes("worker") || text.includes("unemploy") || text.includes("youth") || text.includes("labor")) s.beneficiaryType = "Workers & Youth";
    else if (text.includes("bpl") || text.includes("poor") || text.includes("destitute")) s.beneficiaryType = "BPL Families";
    else s.beneficiaryType = "All Citizens";
  }

  if (!s.subcategory) {
    s.subcategory = s.beneficiaryType + " Welfare";
  }
}

// 1. Normalize existing s1
s1.forEach(s => {
  s.category = normalizeCategory(s.category, s.id, s.name);
  assignSdgAndBeneficiary(s);
});

// 2. Normalize existing s2
s2.forEach(s => {
  s.category = normalizeCategory(s.category, s.id, s.name);
  assignSdgAndBeneficiary(s);
});

// 3. Add all new verified schemes into s2 if not already present
const existingIds = new Set([...s1.map(x => x.id), ...s2.map(x => x.id)]);
let newAdded = 0;

for (const [id, schemeData] of Object.entries(newSchemes)) {
  if (!existingIds.has(id)) {
    const scheme = {
      id: id,
      name: schemeData.name || schemeData.title,
      title: schemeData.title || schemeData.name,
      category: normalizeCategory(schemeData.category, id, schemeData.name),
      subcategory: schemeData.subcategory || "General Support",
      sdg: schemeData.sdg || "SDG 1: No Poverty",
      department: schemeData.department || "Government of India",
      level: schemeData.level || (schemeData.state && schemeData.state !== "All India" ? "State" : "Central"),
      state: schemeData.state || "All India",
      stateCoverage: schemeData.stateCoverage || (schemeData.state || "All India"),
      targetBeneficiary: schemeData.targetBeneficiary || "Eligible citizens",
      beneficiaryType: schemeData.beneficiaryType || "All Citizens",
      minAge: schemeData.minAge !== undefined ? schemeData.minAge : null,
      maxAge: schemeData.maxAge !== undefined ? schemeData.maxAge : null,
      incomeMax: schemeData.incomeMax !== undefined ? schemeData.incomeMax : null,
      status: schemeData.status || "Active",
      launchYear: schemeData.launchYear || null,
      officialUrl: schemeData.applicationUrl || schemeData.officialWebsite || null,
      officialWebsite: schemeData.officialWebsite || null,
      applicationUrl: schemeData.applicationUrl || null,
      sourceUrl: schemeData.sourceUrl || schemeData.officialWebsite || "https://services.india.gov.in",
      lastVerified: schemeData.lastVerified || "2026-06-01",
      description: schemeData.description || "",
      rules: schemeData.rules || [],
      ...schemeData
    };
    assignSdgAndBeneficiary(scheme);
    s2.push(scheme);
    existingIds.add(id);
    newAdded++;
  }
}

// Write updated seed files
fs.writeFileSync(s1Path, JSON.stringify(s1, null, 2), 'utf8');
fs.writeFileSync(s2Path, JSON.stringify(s2, null, 2), 'utf8');

const totalSchemes = s1.length + s2.length;
console.log(`Success! Added ${newAdded} new verified schemes.`);
console.log(`s1 count: ${s1.length}`);
console.log(`s2 count: ${s2.length}`);
console.log(`TOTAL SCHEMES in database: ${totalSchemes}`);

// Print category distribution
const counts = {};
[...s1, ...s2].forEach(s => {
  counts[s.category] = (counts[s.category] || 0) + 1;
});
console.log('\n--- Official 10 Categories Distribution ---');
for (const [cat, cnt] of Object.entries(counts)) {
  console.log(`  ${cat}: ${cnt}`);
}

