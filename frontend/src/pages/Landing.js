import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
    ArrowRight, 
    Compass, 
    Search, 
    ShieldCheck, 
    Sparkles,
    QrCode,
    CheckCircle2
} from "lucide-react";

import ScrollProgressBar from "@/components/landing/ScrollProgressBar";
import AdikharHeroBackdrop from "@/components/landing/AdikharHeroBackdrop";
import AdikharWelfareFlowchart from "@/components/landing/AdikharWelfareFlowchart";
import QuickEligibilityChecker from "@/components/landing/QuickEligibilityChecker";
import SchemeCategoriesGrid from "@/components/landing/SchemeCategoriesGrid";
import WhyAdikharSection from "@/components/landing/WhyAdikharSection";
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
        <div className="bg-[#FBF8F1] text-[#101B30] overflow-x-hidden selection:bg-[#DCFCE7] selection:text-[#014737] relative">
            
            {/* Scroll Progress Bar at the top of the viewport */}
            <ScrollProgressBar />

            {/* HERO SECTION — Two-Column Layout Inspired Directly by Official Reference Image */}
            <section className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-[#FBF8F1]">
                
                {/* 1. Indian Tricolor Ribbon & Heritage Architectural Backdrop */}
                <AdikharHeroBackdrop />

                {/* 2. Hero Content Container (Two-Column Layout) */}
                <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto">
                    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
                        
                        {/* LEFT COLUMN: Authority Brand, Headline, Search & CTAs */}
                        <div className="lg:col-span-7 space-y-6">
                            
                            {/* Small Introductory Badge */}
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center gap-2 rounded-full border border-[#07966B]/30 bg-white/95 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#046C4E] shadow-2xs backdrop-blur-xs"
                            >
                                <span className="h-2 w-2 rounded-full bg-[#F28C28]" />
                                YOUR RIGHTS. YOUR BENEFITS.
                                <span className="h-2 w-2 rounded-full bg-[#07966B]" />
                            </motion.div>

                            {/* Main Heading with Selected Words in Emerald Green */}
                            <motion.h1 
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="font-display text-4xl sm:text-5xl lg:text-[3.9rem] font-black tracking-tight text-[#101B30] leading-[1.1]"
                            >
                                The Benefits You Deserve. <span className="text-[#07966B]">Within Your Reach.</span>
                            </motion.h1>

                            {/* Supporting Description */}
                            <motion.p 
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-base sm:text-lg text-[#101B30]/80 leading-relaxed font-normal max-w-xl"
                            >
                                Discover government welfare schemes, understand your eligibility and access the support available to you — all through one intelligent platform.
                            </motion.p>

                            {/* CTA Buttons (Styled after reference image's prominent vibrant button) */}
                            <motion.div 
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1"
                            >
                                <a
                                    href="#eligibility-checker"
                                    onClick={scrollToChecker}
                                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#F28C28] to-[#EA580C] hover:from-[#EA580C] hover:to-[#C2410C] text-white px-8 py-3.5 text-sm font-black shadow-lg shadow-[#F28C28]/25 transition-all hover:scale-102 active:scale-98"
                                >
                                    <Compass className="h-4 w-4 text-white" /> Discover My Benefits <ArrowRight className="h-4 w-4" />
                                </a>

                                <Link
                                    to="/schemes"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8E3D9] bg-white hover:bg-[#F4EFE6] text-[#101B30] px-7 py-3.5 text-sm font-bold transition-all shadow-xs"
                                >
                                    Explore All Schemes
                                </Link>
                            </motion.div>

                            {/* Feature Indicators Pill Row */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="pt-1 flex flex-wrap items-center gap-3 text-xs font-semibold text-[#101B30]/80"
                            >
                                <span className="inline-flex items-center gap-1.5 bg-white/90 border border-[#E8E3D9] px-3 py-1 rounded-full shadow-2xs">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-[#07966B]" /> Central & State Schemes
                                </span>
                                <span className="inline-flex items-center gap-1.5 bg-white/90 border border-[#E8E3D9] px-3 py-1 rounded-full shadow-2xs">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-[#07966B]" /> Multilingual Access
                                </span>
                                <span className="inline-flex items-center gap-1.5 bg-white/90 border border-[#E8E3D9] px-3 py-1 rounded-full shadow-2xs">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-[#F28C28]" /> 100% Offline Capable
                                </span>
                            </motion.div>

                            {/* Integrated Search Box + Mobile QR Scan Card Row */}
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 max-w-xl"
                            >
                                {/* Quick Search */}
                                <form 
                                    onSubmit={handleSearchSubmit} 
                                    className="flex-1 rounded-2xl border border-[#E8E3D9] bg-white p-2 shadow-lg shadow-black/5 focus-within:border-[#07966B] focus-within:ring-2 focus-within:ring-[#07966B]/15 transition-all"
                                >
                                    <div className="flex items-center gap-2 pl-3 py-1">
                                        <Search className="h-4 w-4 text-slate-400 shrink-0" />
                                        <input
                                            type="text"
                                            value={searchQuery}
                                            onChange={(e) => setSearchQuery(e.target.value)}
                                            placeholder="Search schemes (ADIP, PM-KISAN, Ayushman)..."
                                            className="w-full text-xs sm:text-sm text-[#101B30] placeholder:text-slate-400 focus:outline-none bg-transparent font-medium"
                                        />
                                        <button
                                            type="submit"
                                            className="rounded-xl bg-[#101B30] hover:bg-[#07966B] px-4 py-2 text-xs font-bold text-white transition-colors shrink-0"
                                        >
                                            Search
                                        </button>
                                    </div>
                                </form>

                                {/* Mini QR Code Card (Inspired directly by the reference image's 'Scan the QR Code' card) */}
                                <div className="hidden sm:flex items-center gap-2.5 rounded-2xl border border-[#E8E3D9] bg-white p-2.5 shadow-md shadow-black/5 shrink-0">
                                    <div className="w-10 h-10 rounded-lg bg-[#101B30] flex items-center justify-center text-white shrink-0">
                                        <QrCode className="w-6 h-6 text-[#34D399]" />
                                    </div>
                                    <div className="text-[10px] leading-tight pr-1">
                                        <p className="font-extrabold text-[#101B30]">Scan QR Code</p>
                                        <p className="text-slate-500 font-medium">Instant Mobile Check</p>
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                        {/* RIGHT COLUMN: The Extended Government Welfare Flowchart (Inspired directly by reference image) */}
                        <div className="lg:col-span-5 flex items-center justify-center">
                            <AdikharWelfareFlowchart />
                        </div>

                    </div>
                </div>

                {/* Hashtag Strip along the bottom curve (Direct inspiration from reference image) */}
                <div className="relative z-20 mt-8 text-center">
                    <p className="font-mono text-xs sm:text-[13px] font-extrabold tracking-[0.25em] text-[#07966B]">
                        #GOVERNMENTSCHEMES &nbsp;/&nbsp; #SCHEMESFORYOU &nbsp;/&nbsp; #ADIKHARBHARAT
                    </p>
                </div>
            </section>

            {/* SECTION A: Transition into Eligibility Discovery */}
            <QuickEligibilityChecker />

            {/* SECTION B: Editorial Category Directory */}
            <SchemeCategoriesGrid />

            {/* SECTION C: Why ADIKHAR Section */}
            <div id="about">
                <WhyAdikharSection />
            </div>

            {/* SECTION D: ADIKHAR Special Features Showcase */}
            <SpecialFeaturesShowcase />

            {/* SECTION E: Impact & Transparency Section */}
            <ImpactSection />

            {/* SECTION F: Final Call to Action */}
            <FinalCTASection />

        </div>
    );
}
