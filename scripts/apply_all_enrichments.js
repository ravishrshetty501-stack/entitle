const fs = require('fs');
const path = require('path');

const p1 = path.join(__dirname, 'data_part1_health_food.js');
const p2 = path.join(__dirname, 'data_part2_education.js');
const p3 = path.join(__dirname, 'data_part3_women_social.js');
const p4 = path.join(__dirname, 'data_part4_business_housing.js');

const d1 = require(p1);
const d2 = require(p2);
const d3 = require(p3);
const d4 = require(p4);

const allEnrichments = { ...d1, ...d2, ...d3, ...d4 };
const enrichmentKeys = Object.keys(allEnrichments);
console.log(`Total enriched schemes loaded: ${enrichmentKeys.length}`);

const seedDir = path.join(__dirname, '../entitle-backend/src/main/resources/seed');
const s1Path = path.join(seedDir, 'schemes.json');
const s2Path = path.join(seedDir, 'schemes-extra.json');

const s1 = JSON.parse(fs.readFileSync(s1Path, 'utf8'));
const s2 = JSON.parse(fs.readFileSync(s2Path, 'utf8'));

let s1Updated = 0;
let s2Updated = 0;

s1.forEach(scheme => {
  const enrich = allEnrichments[scheme.id];
  if (enrich) {
    s1Updated++;
    Object.assign(scheme, enrich);
  } else {
    console.warn(`WARNING: Missing enrichment for ${scheme.id} in schemes.json`);
  }
});

s2.forEach(scheme => {
  const enrich = allEnrichments[scheme.id];
  if (enrich) {
    s2Updated++;
    Object.assign(scheme, enrich);
  } else {
    console.warn(`WARNING: Missing enrichment for ${scheme.id} in schemes-extra.json`);
  }
});

// Check if pmgkay is in s2 or s1; if not, add it to s2
const hasPmgkay = s1.some(s => s.id === 'pmgkay') || s2.some(s => s.id === 'pmgkay');
if (!hasPmgkay && allEnrichments['pmgkay']) {
  const pmgkayBase = {
    id: 'pmgkay',
    title: 'Pradhan Mantri Garib Kalyan Anna Yojana (PMGKAY)',
    department: 'Department of Food and Public Distribution, Ministry of Consumer Affairs, Food and Public Distribution',
    level: 'Central',
    state: 'All India',
    category: 'Food Security & Agriculture',
    benefit: '5 kg free food grains per person per month to all AAY and PHH beneficiaries',
    description: "World's largest food security welfare scheme providing 5 kg of free foodgrains (rice/wheat/coarse grains) per person per month to over 80 crore National Food Security Act (NFSA) priority households and Antyodaya Anna Yojana beneficiaries, extended until 2028.",
    officialWebsite: 'https://nfsa.gov.in',
    applicationUrl: 'https://nfsa.gov.in/portal/State_UT_Portals',
    stateCoverage: 'All India (All States & UTs)',
    rules: [
      { fact: 'rationCardType', op: 'in', value: ['AAY', 'PHH', 'BPL'] }
    ],
    ...allEnrichments['pmgkay']
  };
  s2.push(pmgkayBase);
  s2Updated++;
  console.log('Added pmgkay to schemes-extra.json');
}

fs.writeFileSync(s1Path, JSON.stringify(s1, null, 2), 'utf8');
fs.writeFileSync(s2Path, JSON.stringify(s2, null, 2), 'utf8');

console.log(`Success! Updated ${s1Updated} schemes in schemes.json`);
console.log(`Success! Updated ${s2Updated} schemes in schemes-extra.json`);
console.log(`Total schemes in backend: ${s1.length + s2.length}`);

