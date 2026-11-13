import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
    Database, 
    HeartPulse, 
    Sprout, 
    Sun, 
    ArrowRight, 
    Layers,
    ShieldCheck
} from "lucide-react";
import { api } from "@/lib/api";
import AnimatedCounter from "./AnimatedCounter";

export default function ImpactSection() {
    const [stats, setStats] = useState({
        totalSchemes: 107,
        categoriesCount: 10,
        statesCount: 36,
        centralCount: 61,
        stateCount: 43
    });

    useEffect(() => {
        api.schemes.stats()
            .then(res => {
                if (res) {
                    setStats({
                        totalSchemes: res.totalSchemes || 107,
                        categoriesCount: Object.keys(res.categories || {}).length || 10,
                        statesCount: 36,
                        centralCount: (res.levels?.Central || 20) + (res.levels?.National || 41),
                        stateCount: res.levels?.State || 43
                    });
                }
            })
            .catch(() => {});
    }, []);

    const metricCards = [
        {
            label: "Verified Catalog",
            val: stats.totalSchemes,
            suffix: "",
            title: "Government Welfare Schemes",
            subtitle: `${stats.centralCount} Central & ${stats.stateCount} State initiatives`
        },
        {
            label: "SDG Taxonomy",
            val: stats.categoriesCount,
            suffix: "",
            title: "Welfare Categories Covered",
            subtitle: "Health, education, agriculture, pensions"
        },
        {
            label: "National Reach",
            val: stats.statesCount,
            suffix: "",
            title: "States & Union Territories",
            subtitle: "All 28 States and 8 Union Territories"
        },
        {
            label: "Public Access",
            val: 100,
            suffix: "%",
            title: "Free Civic Resource",
            subtitle: "Zero fees, zero commissions, open access"
        }
    ];

    return (
        <section id="impact" className="py-24 bg-[#090D16] text-white border-t border-slate-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <motion.div 
                    className="max-w-3xl mb-16"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-400">
                        Civic Impact & Open Infrastructure
                    </span>
                    <h2 className="mt-3 font-display text-3xl sm:text-4xl font-black text-white tracking-tight">
                        Making Government Benefits More Accessible.
                    </h2>
                    <p className="mt-3 text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
                        Built on verified public data from the National Informatics Centre (NIC), myScheme, and state gazettes. We measure access honestly without fabricated beneficiary metrics.
                    </p>
                </motion.div>

                {/* Statistics Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
                    {metricCards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ 
                                duration: 0.5, 
                                delay: idx * 0.1, 
                                ease: [0.22, 1, 0.36, 1] 
                            }}
                            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xs hover:border-emerald-500/40 transition-colors"
                        >
                            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                                {card.label}
                            </span>
                            <p className="font-display text-4xl sm:text-5xl font-black text-white mt-2">
                                <AnimatedCounter value={card.val} suffix={card.suffix} />
                            </p>
                            <p className="mt-2 text-sm font-semibold text-slate-200">
                                {card.title}
                            </p>
                            <p className="mt-1 text-xs text-slate-400">
                                {card.subtitle}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* SDG Alignment Breakdown */}
                <motion.div 
                    className="rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                        <div>
                            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">
                                United Nations Sustainable Development Goals
                            </span>
                            <h3 className="mt-1 font-display text-2xl font-bold text-white">
                                How ADIKHAR Supports National SDG Targets
                            </h3>
                        </div>
                        <Link
                            to="/impact"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                        >
                            View Prototype Analytics & Methodology <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {/* SDG 2: Zero Hunger */}
                        <motion.div 
                            className="rounded-2xl border border-white/10 bg-[#0F172A] p-6 space-y-2.5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="flex items-center gap-2.5">
                                <Sprout className="h-5 w-5 text-amber-400" />
                                <h4 className="font-bold text-white text-sm">SDG 2 — Zero Hunger</h4>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed font-normal">
                                Indexes the National Food Security Act (NFSA), PM Garib Kalyan Anna Yojana (PMGKAY), PM-POSHAN school lunches, and state grain initiatives like Karnataka's Anna Bhagya.
                            </p>
                            <p className="text-[11px] font-mono text-emerald-400 pt-1">
                                15+ Nutrition & Ration Schemes
                            </p>
                        </motion.div>

                        {/* SDG 3: Good Health and Well-being */}
                        <motion.div 
                            className="rounded-2xl border border-white/10 bg-[#0F172A] p-6 space-y-2.5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex items-center gap-2.5">
                                <HeartPulse className="h-5 w-5 text-emerald-400" />
                                <h4 className="font-bold text-white text-sm">SDG 3 — Good Health</h4>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed font-normal">
                                Indexes Ayushman Bharat (PM-JAY ₹5L cover), CGHS, Pradhan Mantri Jan Aushadhi generic medicines, and state schemes like Rajasthan Chiranjeevi and WB Swasthya Sathi.
                            </p>
                            <p className="text-[11px] font-mono text-emerald-400 pt-1">
                                11 Healthcare & Medical Programs
                            </p>
                        </motion.div>

                        {/* SDG 13: Climate Action */}
                        <motion.div 
                            className="rounded-2xl border border-white/10 bg-[#0F172A] p-6 space-y-2.5"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="flex items-center gap-2.5">
                                <Sun className="h-5 w-5 text-[#10B981]" />
                                <h4 className="font-bold text-white text-sm">SDG 13 — Climate Action</h4>
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed font-normal">
                                Guides households and farmers toward clean energy adoption through PM Surya Ghar Muft Bijli Yojana, PM-KUSUM solar agricultural pumps, and Ujjwala clean cooking gas.
                            </p>
                            <p className="text-[11px] font-mono text-emerald-400 pt-1">
                                Solar & Clean Energy Subsidies
                            </p>
                        </motion.div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/10">
                        <p className="text-[11px] text-slate-400 italic">
                            Notice: ADIKHAR is an open public-welfare catalogue. Figures represent indexed public schemes in our database; we do not claim real-world application outcomes or government disbursement endorsements.
                        </p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
