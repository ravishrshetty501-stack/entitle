import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
    BookOpen, 
    HeartPulse, 
    Sprout, 
    Utensils, 
    Briefcase, 
    Landmark, 
    Baby, 
    Accessibility, 
    Home, 
    Building2,
    ArrowRight,
    ArrowUpRight,
    Sparkles
} from "lucide-react";
import { api } from "@/lib/api";
import AnimatedCounter from "./AnimatedCounter";

const CATEGORIES = [
    {
        id: "education",
        label: "Education & Scholarships",
        icon: BookOpen,
        query: "Education & Scholarships",
        desc: "Pre-matric, post-matric, STEM fellowships & tuition waivers.",
        schemes: "NSP, AICTE, SSP Karnataka, PM-USP",
        defaultCount: 23
    },
    {
        id: "women",
        label: "Women & Child Welfare",
        icon: Baby,
        query: "Women & Child Welfare",
        desc: "Direct head-of-household transfers, maternity & nutrition.",
        schemes: "Gruha Lakshmi, PMMVY, Shakti, Ladli",
        defaultCount: 19
    },
    {
        id: "financial",
        label: "Financial Inclusion & Pension",
        icon: Landmark,
        query: "Financial Inclusion & Pension",
        desc: "Guaranteed monthly senior pensions & unorganized security.",
        schemes: "APY, PM-SYM, PMJDY, NSAP",
        defaultCount: 12
    },
    {
        id: "healthcare",
        label: "Healthcare & Medical (SDG 3)",
        icon: HeartPulse,
        query: "Healthcare & Medical Assistance (SDG 3)",
        desc: "Cashless secondary & tertiary hospital treatment covers.",
        schemes: "PM-JAY, CGHS, Jan Aushadhi, Chiranjeevi",
        defaultCount: 11
    },
    {
        id: "agriculture",
        label: "Farmers & Agriculture",
        icon: Sprout,
        query: "Farmers & Agriculture",
        desc: "Direct annual income, crop insurance & solar irrigation.",
        schemes: "PM-KISAN, KCC, PM-KUSUM, PMFBY",
        defaultCount: 11
    },
    {
        id: "employment",
        label: "Employment & Skill Development",
        icon: Briefcase,
        query: "Employment & Skill Development",
        desc: "National apprenticeship stipends & graduate allowances.",
        schemes: "Yuva Nidhi, PMKVY, NAPS, Rozgar",
        defaultCount: 9
    },
    {
        id: "msme",
        label: "MSME & Entrepreneurship",
        icon: Building2,
        query: "MSME & Entrepreneurship",
        desc: "Collateral-free enterprise credit & margin subsidies.",
        schemes: "PM Mudra, PMEGP, Stand-Up India",
        defaultCount: 7
    },
    {
        id: "food",
        label: "Food Security & Nutrition (SDG 2)",
        icon: Utensils,
        query: "Food Security & Nutrition (SDG 2)",
        desc: "Subsidized food grains & hot cooked school meals.",
        schemes: "PM-POSHAN, PMGKAY, Anna Bhagya",
        defaultCount: 6
    },
    {
        id: "housing",
        label: "Housing & Basic Needs",
        icon: Home,
        query: "Housing & Basic Needs",
        desc: "Pucca house construction grants & clean LPG connections.",
        schemes: "PMAY Urban/Gramin, PMUY",
        defaultCount: 5
    },
    {
        id: "disability",
        label: "Disability Support & Social Justice",
        icon: Accessibility,
        query: "Social Justice & Disability Support",
        desc: "Free motorized tricycles, cochlear implants & UDID.",
        schemes: "ADIP Scheme, UDID, Saksham",
        defaultCount: 4
    }
];

export default function SchemeCategoriesGrid() {
    const [counts, setCounts] = useState({});

    useEffect(() => {
        api.schemes.stats()
            .then(res => {
                if (res?.categories) {
                    setCounts(res.categories);
                }
            })
            .catch(() => {});
    }, []);

    return (
        <section className="py-24 bg-white border-t border-[#E8E3D9]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Asymmetrical Layout: Left Summary Sticky + Right Structured Rows */}
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    
                    {/* LEFT COLUMN: Overview & Metrics */}
                    <div className="lg:col-span-4 space-y-6">
                        <motion.div 
                            className="lg:sticky lg:top-28"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#07966B]/30 bg-[#F0FDF4] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#046C4E]">
                                <Sparkles className="h-3.5 w-3.5 text-[#07966B]" /> National Welfare Taxonomy
                            </span>
                            <h2 className="mt-3 font-display text-3xl sm:text-4xl font-black text-[#101B30] tracking-tight leading-[1.12]">
                                Explore India's Welfare Ecosystem.
                            </h2>
                            <p className="mt-4 text-sm text-[#101B30]/75 leading-relaxed font-normal">
                                India’s welfare initiatives span central ministries, autonomous statutory bodies, and state departments. We catalog them into 10 structured domains aligned with the United Nations Sustainable Development Goals.
                            </p>

                            <div className="mt-8 pt-6 border-t border-[#E8E3D9] space-y-3">
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-500">Verified Schemes in Catalogue</span>
                                    <span className="font-bold text-[#101B30]">
                                        <AnimatedCounter value={107} /> Schemes
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-500">Central Ministries Indexed</span>
                                    <span className="font-bold text-[#101B30]">
                                        <AnimatedCounter value={24} /> Ministries
                                    </span>
                                </div>
                                <div className="flex items-center justify-between text-xs">
                                    <span className="text-slate-500">States & UTs Covered</span>
                                    <span className="font-bold text-[#101B30]">
                                        <AnimatedCounter value={36} /> Regions
                                    </span>
                                </div>
                            </div>

                            <div className="mt-8">
                                <Link
                                    to="/schemes"
                                    className="inline-flex items-center gap-2 rounded-full bg-[#101B30] hover:bg-[#07966B] text-white px-6 py-3 text-xs font-bold transition-all shadow-xs"
                                >
                                    Browse Complete Directory <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* RIGHT COLUMN: Minimalist Directory Rows */}
                    <div className="lg:col-span-8 divide-y divide-[#E8E3D9]">
                        {CATEGORIES.map((cat, idx) => {
                            const count = counts[cat.query] || cat.defaultCount;

                            return (
                                <motion.div
                                    key={cat.id}
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.1 }}
                                    transition={{ 
                                        duration: 0.45, 
                                        delay: Math.min(idx * 0.05, 0.4), 
                                        ease: [0.22, 1, 0.36, 1] 
                                    }}
                                >
                                    <Link
                                        to={`/schemes?category=${encodeURIComponent(cat.query)}`}
                                        className="group py-5 block transition-colors hover:bg-[#FBF8F1] px-4 -mx-4 rounded-2xl"
                                    >
                                        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                                            <div className="flex items-baseline gap-3">
                                                <span className="text-xs font-mono font-bold text-[#07966B] group-hover:text-[#046C4E] transition-colors">
                                                    {String(idx + 1).padStart(2, "0")}
                                                </span>
                                                <h3 className="font-display text-lg font-bold text-[#101B30] group-hover:text-[#07966B] transition-colors">
                                                    {cat.label}
                                                </h3>
                                            </div>

                                            <div className="flex items-center gap-3 shrink-0">
                                                <span className="text-xs font-bold text-[#046C4E] bg-[#F0FDF4] px-2.5 py-0.5 rounded-full border border-[#BBF7D0]">
                                                    <AnimatedCounter value={count} /> Verified
                                                </span>
                                                <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-[#07966B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                            </div>
                                        </div>

                                        <div className="mt-2 pl-7 sm:pl-8 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs text-slate-500">
                                            <p>{cat.desc}</p>
                                            <span className="text-[11px] font-mono text-slate-400 shrink-0">
                                                {cat.schemes}
                                            </span>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
