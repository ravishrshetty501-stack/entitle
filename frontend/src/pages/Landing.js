import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
    ArrowRight, 
    Compass, 
    Search, 
    ShieldCheck, 
    Sparkles 
} from "lucide-react";

import ScrollProgressBar from "@/components/landing/ScrollProgressBar";
import IndiaMapHeroBackground from "@/components/landing/IndiaMapHeroBackground";
import QuickEligibilityChecker from "@/components/landing/QuickEligibilityChecker";
import SchemeCategoriesGrid from "@/components/landing/SchemeCategoriesGrid";
import WhyEntitleSection from "@/components/landing/WhyEntitleSection";
import SpecialFeaturesShowcase from "@/components/landing/SpecialFeaturesShowcase";
import ImpactSection from "@/components/landing/ImpactSection";
import FinalCTASection from "@/components/landing/FinalCTASection";

export default function Landing() {
    const nav = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            nav(`/schemes?q=${encodeURIComponent(searchQuery.trim())}`);
        } else {
            nav("/schemes");
        }
    };

    const scrollToChecker = (e) => {
        const el = document.getElementById("eligibility-checker");
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="bg-white text-slate-900 overflow-x-hidden selection:bg-emerald-100 selection:text-emerald-900 relative">
            
            {/* Scroll Progress Bar at the top of the viewport */}
            <ScrollProgressBar />

            {/* HERO SECTION — Full-Width Animated India Map as Background */}
            <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-12 pb-24 sm:pt-20 sm:pb-32 bg-white">
                
                {/* 1. Large Animated India Map occupying the entire background canvas */}
                <IndiaMapHeroBackground />

                {/* 2. Hero Content Container (Positioned in foreground with perfect contrast) */}
                <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
                    <div className="max-w-2xl lg:max-w-3xl space-y-6">
                        
                        {/* Small Introductory Label */}
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-50/90 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-emerald-800 shadow-2xs backdrop-blur-xs"
                        >
                            <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
                            YOUR RIGHTS. YOUR BENEFITS.
                        </motion.div>

                        {/* Main Heading with Selected Words in Emerald */}
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-display text-4xl sm:text-6xl lg:text-[4.25rem] font-black tracking-tight text-slate-900 leading-[1.08]"
                        >
                            The Benefits You Deserve. <span className="text-emerald-600">Within Your Reach.</span>
                        </motion.h1>

                        {/* Supporting Description */}
                        <motion.p 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-xl"
                        >
                            Discover government welfare schemes, understand your eligibility and access the support available to you — all through one intelligent platform.
                        </motion.p>

                        {/* Two CTA Buttons */}
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
                        >
                            <a
                                href="#eligibility-checker"
                                onClick={scrollToChecker}
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white px-7 py-3.5 text-sm font-bold shadow-lg shadow-emerald-950/15 transition-all hover:scale-102"
                            >
                                <Compass className="h-4 w-4 text-emerald-200" /> Discover My Benefits
                            </a>

                            <Link
                                to="/schemes"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-7 py-3.5 text-sm font-bold transition-all shadow-xs"
                            >
                                Explore All Schemes <ArrowRight className="h-4 w-4" />
                            </Link>
                        </motion.div>

                        {/* Trust Statement */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="pt-1 flex items-center gap-2 text-xs font-semibold text-slate-500"
                        >
                            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            <span>Central & State Schemes • Multilingual Access • Offline Capable</span>
                        </motion.div>

                        {/* Integrated Editorial Search Input */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="pt-4 max-w-xl"
                        >
                            <form 
                                onSubmit={handleSearchSubmit} 
                                className="rounded-2xl border border-slate-200/90 bg-white p-2 shadow-xl shadow-slate-900/5 focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all"
                            >
                                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                                    <div className="flex items-center gap-2.5 pl-3 flex-1 py-1">
                                        <Search className="h-4 w-4 text-slate-400 shrink-0" />
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search schemes (e.g. ADIP, Yuva Nidhi, PM-KISAN, Ayushman)..."
                                            className="w-full text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
                                        />
                                    </div>
                                    <button
                                        type="submit"
                                        className="rounded-xl bg-slate-900 hover:bg-emerald-700 px-5 py-2.5 text-xs font-bold text-white transition-colors shrink-0"
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>

                            {/* Popular Filters */}
                            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                                <span className="font-semibold text-slate-400">Popular:</span>
                                <button 
                                    type="button"
                                    onClick={() => nav("/schemes?state=Karnataka")} 
                                    className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-slate-600 hover:border-emerald-500 hover:text-emerald-700 transition-colors"
                                >
                                    Karnataka (15)
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => nav("/schemes?category=Healthcare+%26+Medical+Assistance+(SDG+3)")} 
                                    className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-slate-600 hover:border-emerald-500 hover:text-emerald-700 transition-colors"
                                >
                                    Healthcare (11)
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => nav("/schemes?category=Education+%26+Scholarships")} 
                                    className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-slate-600 hover:border-emerald-500 hover:text-emerald-700 transition-colors"
                                >
                                    Scholarships (23)
                                </button>
                                <button 
                                    type="button"
                                    onClick={() => nav("/schemes?q=ADIP")} 
                                    className="rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-slate-600 hover:border-emerald-500 hover:text-emerald-700 transition-colors"
                                >
                                    Disability Support (ADIP)
                                </button>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* SECTION A: Transition into Eligibility Discovery ("Discover What You're Entitled To.") */}
            <QuickEligibilityChecker />

            {/* SECTION B: Editorial Category Directory ("Explore India's Welfare Ecosystem.") */}
            <SchemeCategoriesGrid />

            {/* SECTION C: Why ENTITLE Section (Anchor for #about) */}
            <div id="about">
                <WhyEntitleSection />
            </div>

            {/* SECTION D: ENTITLE Special Features Showcase */}
            <SpecialFeaturesShowcase />

            {/* SECTION E: Impact & Transparency Section */}
            <ImpactSection />

            {/* SECTION F: Final Call to Action */}
            <FinalCTASection />

        </div>
    );
}
