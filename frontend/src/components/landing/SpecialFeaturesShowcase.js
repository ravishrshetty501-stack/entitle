import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
    Bot, 
    FolderLock, 
    Compass, 
    WifiOff, 
    ArrowRight, 
    Check, 
    FileText, 
    Sparkles, 
    AlertCircle 
} from "lucide-react";
import { useAssistant } from "@/context/AssistantContext";

export default function SpecialFeaturesShowcase() {
    const { openAssistant } = useAssistant();

    return (
        <section id="features" className="py-24 bg-white border-t border-slate-200/80">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <motion.div 
                    className="max-w-3xl mb-20"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
                        <Sparkles className="h-3.5 w-3.5 text-emerald-600" /> Technology Architecture
                    </span>
                    <h2 className="mt-3 font-display text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                        Intelligent Tools Built for Every Citizen.
                    </h2>
                    <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-2xl">
                        Four interconnected civic utilities designed to bridge technical, language, and connectivity divides.
                    </p>
                </motion.div>

                <div className="space-y-28">
                    
                    {/* FEATURE A: SMART AI ASSISTANT (Text Left, Visual Right) */}
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div 
                            className="space-y-5"
                            initial={{ opacity: 0, x: -35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                                01 / Conversational Intelligence
                            </span>
                            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900">
                                ENTITLE Smart AI Assistant
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Get instant, verified answers to complex scheme guidelines, eligibility rules, and required certificates through speech or text in your regional language.
                            </p>

                            <ul className="space-y-3 pt-2">
                                {[
                                    { label: "Multilingual Voice & Text", desc: "Interact fluently in English, Hindi (हिंदी), and Kannada (ಕನ್ನಡ)." },
                                    { label: "Acronym Recognition", desc: "Instantly recognizes ADIP, PM-KISAN, UDID, Ayushman Bharat, and state welfare programs." },
                                    { label: "Context-Aware Follow-Ups", desc: "Ask 'Who is eligible?', 'What documents are required?', or 'How can I apply?' sequentially." },
                                    { label: "Civic & General Knowledge", desc: "Explains Aadhaar updates, PAN generation, DigiLocker, and scientific principles without generic filler." }
                                ].map((item, idx) => (
                                    <motion.li 
                                        key={idx} 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: idx * 0.08 }}
                                        className="flex items-start gap-2.5 text-xs text-slate-700"
                                    >
                                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span><strong className="text-slate-900">{item.label}:</strong> {item.desc}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="pt-4 flex flex-wrap items-center gap-3">
                                <button
                                    onClick={() => openAssistant("What is the ADIP scheme for disabled persons?")}
                                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-emerald-700 text-white px-6 py-3 text-xs font-bold transition-all shadow-md"
                                >
                                    <Bot className="h-4 w-4 text-emerald-400" /> Try Smart Assistant
                                </button>
                                <button
                                    onClick={() => openAssistant("Who is eligible for PM-KISAN in Karnataka?")}
                                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 bg-white hover:bg-slate-50 px-5 py-3 text-xs font-semibold text-slate-700 transition-all"
                                >
                                    Ask: "Who is eligible for PM-KISAN?"
                                </button>
                            </div>
                        </motion.div>

                        {/* Interactive UI Display */}
                        <motion.div 
                            className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-5 sm:p-6 shadow-xl shadow-slate-900/5 space-y-3.5"
                            initial={{ opacity: 0, x: 35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                                <div className="flex items-center gap-2">
                                    <Bot className="h-4 w-4 text-emerald-600" />
                                    <span className="text-xs font-bold text-slate-900">ENTITLE Smart Assistant</span>
                                </div>
                                <span className="text-[10px] font-mono font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                    English / हिंदी / ಕನ್ನಡ
                                </span>
                            </div>

                            <div className="space-y-3 text-xs">
                                <div className="flex justify-end">
                                    <div className="rounded-2xl rounded-tr-none bg-slate-900 px-4 py-2.5 text-white max-w-[85%] font-medium">
                                        What is ADIP and who can get free motorized tricycles?
                                    </div>
                                </div>

                                <div className="flex justify-start">
                                    <div className="rounded-2xl rounded-tl-none border border-slate-200 bg-white p-4 text-slate-800 max-w-[92%] leading-relaxed space-y-2 shadow-xs">
                                        <p className="font-bold text-emerald-950">
                                            ADIP Scheme (DEPwD, Ministry of Social Justice)
                                        </p>
                                        <p className="text-[11px] text-slate-600">
                                            Provides 100% free modern assistive aids and artificial limbs through ALIMCO district assessment camps.
                                        </p>
                                        <div className="rounded-xl bg-slate-50 p-2.5 text-[10px] space-y-1 border border-slate-200/70">
                                            <p>✓ <strong>Clinical Benchmark:</strong> 40%+ disability certificate or UDID card.</p>
                                            <p>✓ <strong>Income Limit:</strong> Up to ₹20,000/mo for 100% free grant.</p>
                                            <p>✓ <strong>Motorized Tricycles:</strong> Age 16+ with severe locomotor limitation.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* FEATURE B: DOCUMENT VAULT (Visual Left, Text Right) */}
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div 
                            className="order-2 lg:order-1 rounded-3xl border border-slate-200/90 bg-slate-50/70 p-5 sm:p-6 shadow-xl shadow-slate-900/5 space-y-3"
                            initial={{ opacity: 0, x: -35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                                <div className="flex items-center gap-2">
                                    <FolderLock className="h-4 w-4 text-emerald-600" />
                                    <span className="text-xs font-bold text-slate-900">Client-Side Encrypted Vault</span>
                                </div>
                                <span className="text-[10px] font-mono font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                    AES-GCM Web Crypto
                                </span>
                            </div>

                            <div className="space-y-2 text-xs">
                                {[
                                    { name: "Aadhaar Card", authority: "UIDAI", status: "Verified", date: "Permanent", ok: true },
                                    { name: "Income Certificate", authority: "Tahsildar / Revenue", status: "Valid (Expires in 45 days)", date: "Reminder active", ok: false },
                                    { name: "Caste / Category Certificate", authority: "State Revenue Dept", status: "Permanent Valid", date: "Verified", ok: true },
                                    { name: "UDID Card", authority: "Medical Board / Swavlamban", status: "Verified (40%+)", date: "Valid", ok: true }
                                ].map((doc, idx) => (
                                    <div key={idx} className="flex items-center justify-between rounded-xl border border-slate-200 bg-white p-3 shadow-2xs">
                                        <div className="flex items-center gap-2.5">
                                            <FileText className="h-4 w-4 text-slate-500" />
                                            <div>
                                                <p className="font-bold text-slate-900">{doc.name}</p>
                                                <p className="text-[10px] text-slate-500">{doc.authority}</p>
                                            </div>
                                        </div>
                                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                                            doc.ok ? "bg-emerald-100 text-emerald-800" : "bg-amber-100 text-amber-800"
                                        }`}>
                                            {doc.status}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div 
                            className="order-1 lg:order-2 space-y-5"
                            initial={{ opacity: 0, x: 35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                                02 / Zero-Knowledge Privacy
                            </span>
                            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900">
                                Document Intelligence & Vault
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Never scramble for certificates at the last minute. Store, organize, and inspect your family’s crucial welfare documents with client-side zero-knowledge encryption.
                            </p>

                            <ul className="space-y-3 pt-2">
                                {[
                                    { label: "Client-Side Zero-Knowledge Encryption", desc: "Files are encrypted in your browser with AES-GCM before storage. We never see your unencrypted files." },
                                    { label: "Reusable Eligibility Profiles", desc: "Attach verified certificate proofs across multiple scholarship and grant applications in one click." },
                                    { label: "Document Expiry Alerts", desc: "Automatic reminders when your income or domicile certificate needs renewal." },
                                    { label: "Scheme Document Checklists", desc: "Every scheme displays mandatory vs conditional documents with issuing authority instructions." }
                                ].map((item, idx) => (
                                    <motion.li 
                                        key={idx} 
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: idx * 0.08 }}
                                        className="flex items-start gap-2.5 text-xs text-slate-700"
                                    >
                                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span><strong className="text-slate-900">{item.label}:</strong> {item.desc}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                <Link
                                    to="/vault"
                                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-emerald-700 text-white px-7 py-3 text-xs font-bold transition-all shadow-md"
                                >
                                    Open Document Vault <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                    {/* FEATURE C: DISCOVERY SIMULATOR (Text Left, Visual Right) */}
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div 
                            className="space-y-5"
                            initial={{ opacity: 0, x: -35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                                03 / Explainable Eligibility Engine
                            </span>
                            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900">
                                Interactive Discovery Simulator
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                An explainable assessment engine that evaluates your exact demographic criteria against 107 verified schemes in real time, explaining exactly why you match.
                            </p>

                            <ul className="space-y-3 pt-2">
                                {[
                                    { label: "Rule-Based Explainability", desc: "See exactly which condition was satisfied (e.g. 'Age 22 is between 18 and 35') and what is missing." },
                                    { label: "Pre-Built Citizen Personas", desc: "Simulate with realistic demo profiles: college students, smallholder farmers, healthcare seekers, and daily-wage earners." },
                                    { label: "Missing Criteria Guidance", desc: "Actionable advice on what certificates or adjustments are needed to qualify." },
                                    { label: "One-Click Application Tracking", desc: "Move matched schemes directly into your active tracking dashboard." }
                                ].map((item, idx) => (
                                    <motion.li 
                                        key={idx} 
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: idx * 0.08 }}
                                        className="flex items-start gap-2.5 text-xs text-slate-700"
                                    >
                                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span><strong className="text-slate-900">{item.label}:</strong> {item.desc}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                <Link
                                    to="/simulator"
                                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-emerald-700 text-white px-7 py-3 text-xs font-bold transition-all shadow-md"
                                >
                                    Launch Discovery Simulator <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>
                        </motion.div>

                        {/* Simulator Visual */}
                        <motion.div 
                            className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-5 sm:p-6 shadow-xl shadow-slate-900/5 space-y-3"
                            initial={{ opacity: 0, x: 35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                                <span className="text-xs font-bold text-slate-900">Rule Assessment Engine</span>
                                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold">107 Schemes Evaluated</span>
                            </div>

                            <div className="space-y-2 text-xs">
                                <div className="rounded-2xl border border-emerald-200 bg-emerald-50/60 p-3.5 space-y-1">
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-emerald-950">Post-Matric Scholarship (SC/ST)</span>
                                        <span className="font-mono font-bold text-emerald-700">100% Match</span>
                                    </div>
                                    <p className="text-[11px] text-emerald-800">✓ Enrolled in college degree program</p>
                                    <p className="text-[11px] text-emerald-800">✓ Annual income ₹1.8L is below ₹2.5L limit</p>
                                    <p className="text-[11px] text-emerald-800">✓ Resident of Karnataka (State Category)</p>
                                </div>

                                <div className="rounded-2xl border border-slate-200 bg-white p-3.5 space-y-1 shadow-2xs">
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-slate-900">Yuva Nidhi (Karnataka Guarantee)</span>
                                        <span className="font-mono font-bold text-slate-700">85% Match</span>
                                    </div>
                                    <p className="text-[11px] text-slate-600">✓ Graduated in past 2 academic years</p>
                                    <p className="text-[11px] text-amber-700 font-medium">! Awaiting declaration: Not currently employed in formal sector</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* FEATURE D: OFFLINE-FIRST ARCHITECTURE (Visual Left, Text Right) */}
                    <div className="grid items-center gap-12 lg:grid-cols-2">
                        <motion.div 
                            className="order-2 lg:order-1 rounded-3xl border border-slate-200/90 bg-slate-50/70 p-5 sm:p-6 shadow-xl shadow-slate-900/5 space-y-3"
                            initial={{ opacity: 0, x: -35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                                <div className="flex items-center gap-2">
                                    <WifiOff className="h-4 w-4 text-emerald-600" />
                                    <span className="text-xs font-bold text-slate-900">IndexedDB Local Cache</span>
                                </div>
                                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-semibold">107 Schemes Synced</span>
                            </div>

                            <div className="space-y-2 text-xs">
                                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                                    <span className="text-slate-700 font-medium">Scheme Directory</span>
                                    <span className="text-emerald-700 font-bold">100% Offline Accessible</span>
                                </div>
                                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                                    <span className="text-slate-700 font-medium">Eligibility Rule Engine</span>
                                    <span className="text-emerald-700 font-bold">Runs Locally in Browser</span>
                                </div>
                                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                                    <span className="text-slate-700 font-medium">Vault Documents</span>
                                    <span className="text-emerald-700 font-bold">Encrypted in Local Storage</span>
                                </div>
                            </div>

                            <div className="rounded-xl bg-white p-3 text-[11px] text-slate-600 leading-relaxed flex items-start gap-2 border border-slate-200">
                                <AlertCircle className="h-3.5 w-3.5 text-slate-500 shrink-0 mt-0.5" />
                                <span>
                                    Honest disclosure: Offline mode supports directory browsing, local filtering, and document viewing. External government portal application submissions and cloud streaming naturally require an active connection.
                                </span>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="order-1 lg:order-2 space-y-5"
                            initial={{ opacity: 0, x: 35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <span className="text-xs font-mono font-bold text-emerald-600 uppercase tracking-wider">
                                04 / Offline-First Capability
                            </span>
                            <h3 className="font-display text-2xl sm:text-3xl font-black text-slate-900">
                                Offline Access & Local Cache
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Many rural and remote areas in India face intermittent 2G/3G connectivity. ENTITLE caches verified scheme details directly inside your browser storage for zero-data access.
                            </p>

                            <ul className="space-y-3 pt-2">
                                {[
                                    { label: "Automatic Offline Sync", desc: "Schemes viewed once are cached inside browser IndexedDB for zero-data access later." },
                                    { label: "Offline Filtering & Search", desc: "Filter by age, category, and state even when disconnected." },
                                    { label: "One-Click Offline Download Center", desc: "Download full scheme guidelines as local PDFs or view them within your local vault." },
                                    { label: "Clear Network Status Indicators", desc: "Real-time visual feedback distinguishing local features from external portals." }
                                ].map((item, idx) => (
                                    <motion.li 
                                        key={idx} 
                                        initial={{ opacity: 0, x: 10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: idx * 0.08 }}
                                        className="flex items-start gap-2.5 text-xs text-slate-700"
                                    >
                                        <Check className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                                        <span><strong className="text-slate-900">{item.label}:</strong> {item.desc}</span>
                                    </motion.li>
                                ))}
                            </ul>

                            <div className="pt-4">
                                <Link
                                    to="/offline-download"
                                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-emerald-700 text-white px-7 py-3 text-xs font-bold transition-all shadow-md"
                                >
                                    Open Offline Center <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
