import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
    Check, 
    ArrowRight, 
    ArrowLeft, 
    Sparkles, 
    AlertCircle, 
    CheckCircle2, 
    Loader2, 
    RotateCcw,
    ExternalLink,
    Compass
} from "lucide-react";
import { api } from "@/lib/api";
import { STATES } from "@/lib/options";

const OCCUPATIONS = [
    { value: "STUDENT", label: "Student / Youth", sub: "Pursuing school, college, or competitive entrance" },
    { value: "FARMER", label: "Farmer / Agriculture", sub: "Small, marginal, or tenant farmer" },
    { value: "SALARIED", label: "Salaried Employee", sub: "Formal private or public employment" },
    { value: "SELF_EMPLOYED", label: "Self-Employed / MSME", sub: "Small business, enterprise or artisan" },
    { value: "DAILY_WAGE", label: "Daily Wage / Informal", sub: "Gig worker, construction, or transport" },
    { value: "HOMEMAKER", label: "Homemaker", sub: "Managing household & family care" },
    { value: "RETIRED", label: "Senior / Retired", sub: "Aged 60+ or pensioner" },
    { value: "UNEMPLOYED", label: "Job Seeker", sub: "Actively seeking employment or upskilling" }
];

const INCOME_RANGES = [
    { value: "BELOW_1L", label: "Under ₹1 Lakh / yr", sub: "Priority welfare & BPL status" },
    { value: "1L_2_5L", label: "₹1 Lakh – ₹2.5 Lakh", sub: "Qualifies for post-matric waivers" },
    { value: "2_5L_4_5L", label: "₹2.5 Lakh – ₹5 Lakh", sub: "EWS & general welfare brackets" },
    { value: "4_5L_8L", label: "₹5 Lakh – ₹8 Lakh", sub: "Standard welfare & credit links" },
    { value: "8L_18L", label: "₹8 Lakh – ₹18 Lakh", sub: "Universal & tax-incentivized grants" },
    { value: "ABOVE_18L", label: "Above ₹18 Lakh", sub: "Universal public health & utilities" }
];

const EDUCATION_LEVELS = [
    { value: "NONE", label: "No formal schooling" },
    { value: "PRIMARY", label: "Primary / Middle School (Class 1–8)" },
    { value: "SECONDARY", label: "10th Standard / Matriculation" },
    { value: "HIGHER_SECONDARY", label: "12th / Pre-University (PUC)" },
    { value: "DIPLOMA", label: "Diploma / Polytechnic / ITI" },
    { value: "UNDERGRADUATE", label: "Undergraduate Degree (BA, BSc, BTech)" },
    { value: "POSTGRADUATE", label: "Postgraduate & Higher (MA, MSc, PhD)" }
];

export default function QuickEligibilityChecker() {
    const [step, setStep] = useState(1);
    
    // User Demographic State
    const [age, setAge] = useState("22");
    const [state, setState] = useState("Karnataka");
    const [gender, setGender] = useState("FEMALE");
    const [occupation, setOccupation] = useState("STUDENT");
    const [incomeRange, setIncomeRange] = useState("1L_2_5L");
    const [education, setEducation] = useState("UNDERGRADUATE");
    const [disability, setDisability] = useState(false);

    // Evaluation State
    const [loading, setLoading] = useState(false);
    const [results, setResults] = useState(null);
    const [error, setError] = useState(null);

    const handleRunEvaluation = async () => {
        setLoading(true);
        setError(null);

        const profile = {
            age: parseInt(age, 10) || 25,
            state: state === "Central (All India)" ? "All India" : state,
            gender,
            occupation,
            incomeRange,
            education,
            disability,
            disabilityLevel: disability ? "40_79" : null,
            student: occupation === "STUDENT",
            farmer: occupation === "FARMER"
        };

        try {
            const previewData = await api.eligibility.preview(profile);
            const eligible = previewData.filter(r => r.status !== "NOT_ELIGIBLE");
            setResults(eligible.length > 0 ? eligible : previewData.slice(0, 5));
            setStep(4);
        } catch (err) {
            console.error("Evaluation preview failed:", err);
            setError("Could not complete calculation. Please try again or open the simulator.");
        } finally {
            setLoading(false);
        }
    };

    const resetForm = () => {
        setStep(1);
        setResults(null);
    };

    return (
        <section id="eligibility-checker" className="py-24 bg-[#FBF8F1] border-t border-[#E8E3D9]">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                
                {/* Scroll-triggered Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="max-w-2xl mx-auto text-center mb-12"
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#07966B]/30 bg-white px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#046C4E] shadow-2xs">
                        <Compass className="h-3.5 w-3.5 text-[#07966B]" /> Instant Eligibility Engine
                    </span>
                    <h2 className="mt-3 font-display text-3xl sm:text-4xl font-black text-[#101B30] tracking-tight">
                        Discover Your Welfare Rights & Benefits.
                    </h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="mt-3 text-base text-slate-600 leading-relaxed"
                    >
                        Answer a few key questions to discover government schemes that may match your circumstances.
                    </motion.p>
                </motion.div>

                {/* Step Progress Indicators */}
                {step <= 3 && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-md mx-auto mb-10"
                    >
                        <div className="flex items-center justify-between text-xs font-semibold text-slate-500 mb-2">
                            <span className={step >= 1 ? "text-emerald-700 font-bold" : ""}>01. Demographics</span>
                            <span className={step >= 2 ? "text-emerald-700 font-bold" : ""}>02. Socio-Economic</span>
                            <span className={step >= 3 ? "text-emerald-700 font-bold" : ""}>03. Education & Needs</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                            <motion.div 
                                className="h-full bg-emerald-600 rounded-full"
                                initial={{ width: "33%" }}
                                animate={{ width: step === 1 ? "33%" : step === 2 ? "66%" : "100%" }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            />
                        </div>
                    </motion.div>
                )}

                {/* Form Card with Scroll Trigger */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-10 shadow-lg shadow-slate-900/5"
                >
                    <AnimatePresence mode="wait">
                        
                        {/* STEP 1: Demographics */}
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -15 }}
                                transition={{ duration: 0.25 }}
                                className="space-y-7"
                            >
                                <div className="border-b border-slate-100 pb-4">
                                    <h3 className="text-xl font-bold text-slate-900">Step 1: Your Age & State Jurisdiction</h3>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Government welfare is organized across central mandates and specific state jurisdictions.
                                    </p>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    {/* Age Input */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                            Age (Years)
                                        </label>
                                        <input
                                            type="number"
                                            min="1"
                                            max="110"
                                            value={age}
                                            onChange={(e) => setAge(e.target.value)}
                                            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-slate-900 font-medium focus:border-emerald-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                                            placeholder="e.g. 21"
                                        />
                                        <div className="flex flex-wrap gap-1.5 mt-2.5">
                                            {[18, 21, 30, 45, 60].map((preset) => (
                                                <button
                                                    key={preset}
                                                    type="button"
                                                    onClick={() => setAge(String(preset))}
                                                    className={`px-2.5 py-1 text-xs rounded-lg font-semibold border transition-colors ${
                                                        age === String(preset) 
                                                            ? "bg-emerald-50 border-emerald-400 text-emerald-800" 
                                                            : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
                                                    }`}
                                                >
                                                    {preset} yrs
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* State Dropdown */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                            State of Residence
                                        </label>
                                        <select
                                            value={state}
                                            onChange={(e) => setState(e.target.value)}
                                            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-slate-900 font-medium focus:border-emerald-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                                        >
                                            {STATES.map((s) => (
                                                <option key={s} value={s}>{s}</option>
                                            ))}
                                        </select>
                                        <p className="text-xs text-slate-500 mt-2">
                                            Select <strong>Karnataka</strong> to inspect state guarantees (Yuva Nidhi, Gruha Lakshmi, Anna Bhagya).
                                        </p>
                                    </div>

                                    {/* Gender Category */}
                                    <div className="sm:col-span-2">
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                            Gender Category
                                        </label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {[
                                                { id: "FEMALE", label: "Female (Women Welfare)" },
                                                { id: "MALE", label: "Male" },
                                                { id: "OTHER", label: "Transgender / Other" }
                                            ].map((g) => (
                                                <button
                                                    key={g.id}
                                                    type="button"
                                                    onClick={() => setGender(g.id)}
                                                    className={`p-3 rounded-xl border text-xs sm:text-sm font-bold text-center transition-all ${
                                                        gender === g.id
                                                            ? "border-emerald-600 bg-emerald-50 text-emerald-900 ring-2 ring-emerald-600/20"
                                                            : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                                                    }`}
                                                >
                                                    {g.label}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex justify-end pt-5 border-t border-slate-100">
                                    <button
                                        type="button"
                                        onClick={() => setStep(2)}
                                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-emerald-700 text-white px-7 py-3 text-sm font-bold transition-all shadow-xs"
                                    >
                                        Continue to Step 2 <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 2: Occupation & Income */}
                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -15 }}
                                transition={{ duration: 0.25 }}
                                className="space-y-7"
                            >
                                <div className="border-b border-slate-100 pb-4">
                                    <h3 className="text-xl font-bold text-slate-900">Step 2: Occupation & Income Brackets</h3>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Surfaces targeted scholarships, farmer crop subsidies, and income-tested pensions.
                                    </p>
                                </div>

                                {/* Occupation Grid with Staggered Entrance */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                                        Primary Occupation or Role
                                    </label>
                                    <div className="grid gap-2.5 sm:grid-cols-2">
                                        {OCCUPATIONS.map((occ, oIdx) => (
                                            <motion.button
                                                key={occ.value}
                                                initial={{ opacity: 0, y: 8 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.2, delay: oIdx * 0.04 }}
                                                type="button"
                                                onClick={() => setOccupation(occ.value)}
                                                className={`p-3.5 rounded-2xl border text-left transition-all ${
                                                    occupation === occ.value
                                                        ? "border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-600/20"
                                                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                                                }`}
                                            >
                                                <p className="text-sm font-bold">{occ.label}</p>
                                                <p className="text-xs text-slate-500 mt-0.5">{occ.sub}</p>
                                            </motion.button>
                                        ))}
                                    </div>
                                </div>

                                {/* Annual Income */}
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5">
                                        Annual Household Income
                                    </label>
                                    <div className="grid gap-2 sm:grid-cols-3">
                                        {INCOME_RANGES.map((inc) => (
                                            <button
                                                key={inc.value}
                                                type="button"
                                                onClick={() => setIncomeRange(inc.value)}
                                                className={`p-3 rounded-xl border text-left transition-all ${
                                                    incomeRange === inc.value
                                                        ? "border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-600/20"
                                                        : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                                                }`}
                                            >
                                                <p className="text-xs font-bold">{inc.label}</p>
                                                <p className="text-[11px] text-slate-500 mt-0.5">{inc.sub}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between pt-5 border-t border-slate-100">
                                    <button
                                        type="button"
                                        onClick={() => setStep(1)}
                                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                                    >
                                        <ArrowLeft className="h-4 w-4" /> Back
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setStep(3)}
                                        className="inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-emerald-700 text-white px-7 py-3 text-sm font-bold transition-all shadow-xs"
                                    >
                                        Continue to Step 3 <ArrowRight className="h-4 w-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 3: Education & Specific Needs */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 15 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -15 }}
                                transition={{ duration: 0.25 }}
                                className="space-y-7"
                            >
                                <div className="border-b border-slate-100 pb-4">
                                    <h3 className="text-xl font-bold text-slate-900">Step 3: Education & Disability Support</h3>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Completes matching for technical degrees, assistive aids, and special grants.
                                    </p>
                                </div>

                                <div className="space-y-5">
                                    {/* Education Dropdown */}
                                    <div>
                                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                                            Current Education Level
                                        </label>
                                        <select
                                            value={education}
                                            onChange={(e) => setEducation(e.target.value)}
                                            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-slate-900 font-medium focus:border-emerald-600 focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                                        >
                                            {EDUCATION_LEVELS.map((ed) => (
                                                <option key={ed.value} value={ed.value}>{ed.label}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Disability Support Toggle */}
                                    <div className="rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-4 flex items-center justify-between gap-4">
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">
                                                Do you or a family member have a benchmark disability (40%+)?
                                            </p>
                                            <p className="text-xs text-slate-500 mt-0.5">
                                                Enables ADIP assistive equipment, UDID card, and AICTE Saksham scholarships.
                                            </p>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => setDisability(!disability)}
                                            className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all shrink-0 ${
                                                disability 
                                                    ? "bg-emerald-600 border-emerald-600 text-white" 
                                                    : "bg-white border-slate-300 text-slate-700"
                                            }`}
                                        >
                                            {disability ? "Yes (Include Disability Schemes)" : "No"}
                                        </button>
                                    </div>
                                </div>

                                {error && (
                                    <div className="rounded-xl border border-rose-300 bg-rose-50 p-3 text-xs text-rose-800 flex items-center gap-2">
                                        <AlertCircle className="h-4 w-4 shrink-0" />
                                        <span>{error}</span>
                                    </div>
                                )}

                                <div className="flex justify-between pt-5 border-t border-slate-100">
                                    <button
                                        type="button"
                                        onClick={() => setStep(2)}
                                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                                    >
                                        <ArrowLeft className="h-4 w-4" /> Back
                                    </button>
                                    <button
                                        type="button"
                                        disabled={loading}
                                        onClick={handleRunEvaluation}
                                        className="inline-flex items-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 text-sm font-bold shadow-lg shadow-emerald-950/10 transition-all disabled:opacity-50"
                                    >
                                        {loading ? (
                                            <>
                                                <Loader2 className="h-4 w-4 animate-spin" /> Evaluating 107 Schemes...
                                            </>
                                        ) : (
                                            <>
                                                <Sparkles className="h-4 w-4 text-emerald-200" /> Calculate Matching Benefits <ArrowRight className="h-4 w-4" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4: Live Results from EligibilityEngine */}
                        {step === 4 && results && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, scale: 0.99 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.2 }}
                                className="space-y-6"
                            >
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                                    <div>
                                        <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                                            <CheckCircle2 className="h-3.5 w-3.5" /> Eligibility Calculated
                                        </span>
                                        <h3 className="text-xl font-bold text-slate-900 mt-1">
                                            {results.length} Potential Government Benefits Matched
                                        </h3>
                                        <p className="text-xs text-slate-500 mt-0.5">
                                            Calculated for: {age} yrs • {state} • {occupation.replace("_", " ")}
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-emerald-700 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200"
                                    >
                                        <RotateCcw className="h-3.5 w-3.5" /> Recalculate
                                    </button>
                                </div>

                                {/* Results List with Staggered Entrance */}
                                <div className="space-y-3.5">
                                    {results.slice(0, 4).map((r, idx) => (
                                        <motion.div
                                            key={r.schemeId || idx}
                                            initial={{ opacity: 0, y: 15 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3, delay: idx * 0.08 }}
                                            className="rounded-2xl border border-slate-200 bg-slate-50/50 p-4 sm:p-5 hover:border-emerald-300 hover:bg-white transition-all shadow-xs"
                                        >
                                            <div className="flex items-center justify-between gap-2 mb-1.5">
                                                <span className={`px-2 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider ${
                                                    r.status === "LIKELY_ELIGIBLE" 
                                                        ? "bg-emerald-100 text-emerald-800 border border-emerald-300"
                                                        : "bg-amber-50 text-amber-800 border border-amber-300"
                                                }`}>
                                                    {r.status === "LIKELY_ELIGIBLE" ? "Likely Eligible" : "Needs Verification"}
                                                </span>
                                                <span className="text-xs font-semibold text-slate-500">
                                                    Match: {r.matchScore || 85}% • {r.level || "Central"}
                                                </span>
                                            </div>

                                            <h4 className="text-base font-bold text-slate-900 mb-1">
                                                {r.schemeTitle || r.schemeName}
                                            </h4>

                                            {r.estimatedBenefit && (
                                                <p className="text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-100 inline-block mb-1">
                                                    Benefit: {r.estimatedBenefit}
                                                </p>
                                            )}

                                            {/* Satisfied criteria pills */}
                                            {Array.isArray(r.satisfied) && r.satisfied.length > 0 && (
                                                <div className="flex flex-wrap gap-1.5 mt-2">
                                                    {r.satisfied.slice(0, 3).map((crit, cIdx) => (
                                                        <span key={cIdx} className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                                                            <Check className="h-3 w-3 text-emerald-600" /> {crit}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="mt-3.5 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                                                <Link
                                                    to={`/schemes/${r.schemeId}`}
                                                    className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:underline"
                                                >
                                                    View Verified Scheme Page <ArrowRight className="h-3.5 w-3.5" />
                                                </Link>
                                                {r.officialUrl && (
                                                    <a
                                                        href={r.officialUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-[11px] text-slate-500 hover:text-slate-900 inline-flex items-center gap-1"
                                                    >
                                                        Official Portal <ExternalLink className="h-3 w-3" />
                                                    </a>
                                                )}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Mandatory Disclaimer */}
                                <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 text-xs text-amber-900 leading-relaxed flex items-start gap-2.5">
                                    <AlertCircle className="h-4 w-4 text-amber-700 shrink-0 mt-0.5" />
                                    <span>
                                        Matching results are preliminary calculations based on algorithmic criteria. Official eligibility and quotas must be confirmed against departmental rules.
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                                    <Link
                                        to="/simulator"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 hover:bg-emerald-700 text-white px-7 py-3 text-sm font-bold transition-all shadow"
                                    >
                                        Open Full Discovery Simulator <ArrowRight className="h-4 w-4" />
                                    </Link>
                                    <Link
                                        to="/schemes"
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 px-6 py-3 text-sm font-bold text-slate-800 transition-all"
                                    >
                                        Browse All 107 Schemes
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}