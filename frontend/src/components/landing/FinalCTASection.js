import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Check } from "lucide-react";

export default function FinalCTASection() {
    const scrollToChecker = (e) => {
        const el = document.getElementById("eligibility-checker");
        if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="py-24 bg-gradient-to-br from-[#064E3B] via-[#065F46] to-[#047857] text-white border-t border-emerald-800/40 relative overflow-hidden">
            {/* Subtle decorative concentric circles */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
                <div className="h-[450px] w-[450px] rounded-full border border-white" />
                <div className="absolute h-[650px] w-[650px] rounded-full border border-white" />
                <div className="absolute h-[850px] w-[850px] rounded-full border border-white" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-300/30 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-100 backdrop-blur-md mb-4">
                        Accessible In Less Than 2 Minutes
                    </span>

                    <h2 className="font-display text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                        Don't Miss the Benefits You Deserve.
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-emerald-100 max-w-xl mx-auto leading-relaxed font-normal">
                        Start discovering government schemes and support services available to you — completely free, private, and accessible offline.
                    </p>

                    <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                        <motion.a
                            href="#eligibility-checker"
                            onClick={scrollToChecker}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-slate-50 text-slate-900 px-8 py-3.5 text-sm font-bold shadow-lg shadow-black/10 transition-all cursor-pointer"
                        >
                            <Compass className="h-4 w-4 text-emerald-700" /> Discover My Benefits
                        </motion.a>
                        
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Link
                                to="/schemes"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/40 hover:border-white text-white px-8 py-3.5 text-sm font-semibold transition-colors"
                            >
                                Browse All 107 Schemes <ArrowRight className="h-4 w-4" />
                            </Link>
                        </motion.div>
                    </div>

                    <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-emerald-100/90 font-medium">
                        <span className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-emerald-300" /> No Mandatory Sign In
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-emerald-300" /> 100% Free Public Resource
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Check className="h-3.5 w-3.5 text-emerald-300" /> Direct Links to Official Portals
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
