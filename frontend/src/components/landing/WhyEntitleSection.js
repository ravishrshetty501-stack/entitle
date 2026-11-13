import React from "react";
import { motion } from "framer-motion";
import { 
    Search, 
    Compass, 
    FileCheck2, 
    WifiOff, 
    Check, 
    ShieldCheck 
} from "lucide-react";

const PILLARS = [
    {
        number: "01",
        title: "Discover Hidden Benefits",
        description: "Find schemes you may be eligible for but have never heard about across 107 verified Central and State programs.",
        detail: "Most citizens miss out on crucial welfare simply because initiatives are scattered across dozens of central ministries and state gazettes. ENTITLE indexes them into a searchable catalog."
    },
    {
        number: "02",
        title: "Understand Eligibility",
        description: "Get clear explanations of eligibility conditions and required documents before you spend hours applying.",
        detail: "Our explainable eligibility engine checks age criteria, income limits, student status, and category benchmarks to tell you exactly why you qualify or what criterion is missing."
    },
    {
        number: "03",
        title: "Simplify Applications",
        description: "Understand application procedures through step-by-step guidance, designated center locations, and official portal links.",
        detail: "We provide direct links to authentic government portals (such as scholarships.gov.in, Seva Sindhu, and Swavlamban) and guide you through offline camps with zero middleman exploitation."
    },
    {
        number: "04",
        title: "Accessible Everywhere",
        description: "Access locally downloaded scheme information and supported offline features even with low or zero internet connectivity.",
        detail: "Operating offline-first with IndexedDB caching, client-side encrypted document storage, and regional voice interaction in Hindi, Kannada, and English."
    }
];

export default function WhyEntitleSection() {
    return (
        <section className="py-24 bg-slate-50/60 border-t border-slate-200/80">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <motion.div 
                    className="max-w-3xl mb-16"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
                        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" /> Civic-Tech Integrity
                    </span>
                    <h2 className="mt-3 font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Designed for Transparency. Built for Citizens.
                    </h2>
                    <p className="mt-4 text-base text-slate-600 leading-relaxed max-w-2xl">
                        Public welfare programs in India disburse lakhs of crores annually, yet millions of rightful beneficiaries remain unreached. ENTITLE is built to bridge this systemic information gap.
                    </p>
                </motion.div>

                {/* 4 Pillars Grid with Staggered Scroll Reveal */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {PILLARS.map((p, idx) => (
                        <motion.div
                            key={p.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: idx * 0.1, 
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                            className="rounded-3xl border border-slate-200/90 bg-white p-7 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-950/5 transition-all shadow-xs"
                        >
                            <div>
                                <span className="font-mono text-2xl font-black text-emerald-600">
                                    {p.number}
                                </span>
                                <h3 className="font-display text-lg font-bold text-slate-900 mt-4 mb-2">
                                    {p.title}
                                </h3>
                                <p className="text-xs font-semibold text-slate-700 leading-snug mb-3">
                                    {p.description}
                                </p>
                                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                                    {p.detail}
                                </p>
                            </div>

                            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                                <Check className="h-3.5 w-3.5 text-emerald-600" /> Verified Public Data
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
