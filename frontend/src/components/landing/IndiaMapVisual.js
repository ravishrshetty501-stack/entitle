import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    HeartPulse, 
    BookOpen, 
    Sprout, 
    Landmark, 
    MapPin, 
    ShieldCheck, 
    Radio, 
    Sparkles, 
    ExternalLink 
} from "lucide-react";
import { Link } from "react-router-dom";

// Major nodal centres across India's welfare network
const HUBS = [
    { id: "delhi", name: "New Delhi", state: "Central Headquarters", x: 250, y: 225, schemes: "61 Central Schemes", color: "#0d9488" },
    { id: "bengaluru", name: "Bengaluru", state: "Karnataka", x: 245, y: 540, schemes: "15 State + 61 Central Schemes", color: "#087f5b" },
    { id: "mumbai", name: "Mumbai", state: "Maharashtra", x: 175, y: 425, schemes: "4 State + 61 Central Schemes", color: "#0d9488" },
    { id: "kolkata", name: "Kolkata", state: "West Bengal", x: 440, y: 355, schemes: "4 State + 61 Central Schemes", color: "#087f5b" },
    { id: "chennai", name: "Chennai", state: "Tamil Nadu", x: 295, y: 565, schemes: "3 State + 61 Central Schemes", color: "#0d9488" },
    { id: "hyderabad", name: "Hyderabad", state: "Telangana & AP", x: 265, y: 460, schemes: "5 State + 61 Central Schemes", color: "#087f5b" },
    { id: "guwahati", name: "Guwahati", state: "North East Region", x: 535, y: 265, schemes: "Central & Regional Grants", color: "#0d9488" },
    { id: "jaipur", name: "Jaipur", state: "Rajasthan", x: 200, y: 255, schemes: "Central & State Schemes", color: "#087f5b" },
    { id: "lucknow", name: "Lucknow", state: "Uttar Pradesh", x: 310, y: 250, schemes: "3 State + 61 Central Schemes", color: "#0d9488" }
];

// Arcs connecting national welfare distribution nodes
const CONNECTIONS = [
    { from: HUBS[0], to: HUBS[1] }, // Delhi -> Bengaluru
    { from: HUBS[0], to: HUBS[2] }, // Delhi -> Mumbai
    { from: HUBS[0], to: HUBS[3] }, // Delhi -> Kolkata
    { from: HUBS[0], to: HUBS[6] }, // Delhi -> Guwahati
    { from: HUBS[0], to: HUBS[8] }, // Delhi -> Lucknow
    { from: HUBS[1], to: HUBS[4] }, // Bengaluru -> Chennai
    { from: HUBS[1], to: HUBS[5] }, // Bengaluru -> Hyderabad
    { from: HUBS[2], to: HUBS[5] }, // Mumbai -> Hyderabad
    { from: HUBS[3], to: HUBS[6] }, // Kolkata -> Guwahati
    { from: HUBS[2], to: HUBS[7] }, // Mumbai -> Jaipur
    { from: HUBS[7], to: HUBS[0] }, // Jaipur -> Delhi
];

export default function IndiaMapVisual() {
    const [activeHub, setActiveHub] = useState(HUBS[1]); // default to Bengaluru/Karnataka

    return (
        <div className="relative w-full max-w-[620px] mx-auto select-none">
            {/* Ambient emerald & teal background glow */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
                <div className="h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent blur-3xl" />
            </div>

            {/* Floating Info Badges - Category Highlights */}
            {/* Badge 1: Top-Right (Healthcare) */}
            <motion.div 
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 right-2 sm:right-6 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl border border-emerald-500/20 bg-white/95 p-2.5 pr-4 shadow-xl shadow-emerald-950/5 backdrop-blur-md"
            >
                <div className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                    <HeartPulse className="h-4 w-4" />
                </div>
                <div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-bold text-slate-900">Ayushman Bharat</span>
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium">Healthcare (SDG 3) • 11 Schemes</p>
                </div>
            </motion.div>

            {/* Badge 2: Top-Left (Education) */}
            <motion.div 
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-10 left-0 sm:-left-4 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl border border-teal-500/20 bg-white/95 p-2.5 pr-4 shadow-xl shadow-teal-950/5 backdrop-blur-md"
            >
                <div className="grid h-8 w-8 place-items-center rounded-xl bg-teal-50 text-teal-700">
                    <BookOpen className="h-4 w-4" />
                </div>
                <div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-[11px] font-bold text-slate-900">National Scholarships</span>
                        <span className="rounded-full bg-teal-100 px-1 text-[9px] font-bold text-teal-800">23 Active</span>
                    </div>
                    <p className="text-[10px] text-slate-500 font-medium">NSP & State Portals</p>
                </div>
            </motion.div>

            {/* Badge 3: Bottom-Left (Food Security) */}
            <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: [0, -5, 0] }}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-12 left-0 sm:-left-2 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl border border-emerald-500/20 bg-white/95 p-2.5 pr-4 shadow-xl shadow-emerald-950/5 backdrop-blur-md"
            >
                <div className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Sprout className="h-4 w-4" />
                </div>
                <div>
                    <span className="text-[11px] font-bold text-slate-900">Food Security (SDG 2)</span>
                    <p className="text-[10px] text-slate-500 font-medium">PM-POSHAN & Anna Bhagya</p>
                </div>
            </motion.div>

            {/* Badge 4: Bottom-Right (Financial Inclusion / DBT) */}
            <motion.div 
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, y: [0, 5, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-16 right-0 sm:right-2 z-20 hidden sm:flex items-center gap-2.5 rounded-2xl border border-slate-200 bg-white/95 p-2.5 pr-4 shadow-xl shadow-slate-900/5 backdrop-blur-md"
            >
                <div className="grid h-8 w-8 place-items-center rounded-xl bg-slate-100 text-slate-800">
                    <Landmark className="h-4 w-4 text-emerald-700" />
                </div>
                <div>
                    <span className="text-[11px] font-bold text-slate-900">Direct Benefit Transfer</span>
                    <p className="text-[10px] text-slate-500 font-medium">100% Cash To Aadhaar Bank</p>
                </div>
            </motion.div>

            {/* Main Interactive SVG Canvas */}
            <div className="relative rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white/90 via-[#f8f9f5]/70 to-[#ddf5ea]/20 p-4 sm:p-6 shadow-2xl shadow-slate-900/5 backdrop-blur-sm">
                
                {/* Visual Header within card */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-2">
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600"></span>
                        </span>
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                            Pan-India Welfare Grid
                        </span>
                    </div>
                    <span className="text-[11px] font-semibold text-slate-500 bg-white/80 px-2 py-0.5 rounded-full border border-slate-200">
                        107 Verified Schemes
                    </span>
                </div>

                <svg
                    viewBox="0 0 650 720"
                    className="w-full h-auto max-h-[480px] drop-shadow-sm"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        {/* Radial gradient for glowing hubs */}
                        <radialGradient id="hubGlow" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.8" />
                            <stop offset="100%" stopColor="#087f5b" stopOpacity="0" />
                        </radialGradient>

                        {/* Subtle pattern for territory fill */}
                        <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
                            <stop offset="50%" stopColor="#f1f9f5" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#ddf5ea" stopOpacity="0.7" />
                        </linearGradient>

                        {/* Network line gradient */}
                        <linearGradient id="networkLine" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0d9488" stopOpacity="0.7" />
                            <stop offset="100%" stopColor="#087f5b" stopOpacity="0.4" />
                        </linearGradient>

                        {/* Glow filter */}
                        <filter id="emeraldGlow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                    </defs>

                    {/* Geographically recognizable India outline path */}
                    <g className="transition-all duration-300">
                        {/* Mainland outline */}
                        <path
                            d="M 235 50 
                               C 255 45, 275 60, 290 85 
                               C 300 100, 320 120, 310 145 
                               C 295 160, 280 175, 315 185 
                               C 350 195, 395 190, 420 215 
                               C 440 230, 475 235, 510 230 
                               C 530 220, 565 220, 585 240 
                               C 600 260, 580 295, 545 305 
                               C 515 315, 485 295, 470 325 
                               C 455 350, 440 375, 435 410 
                               C 425 435, 400 460, 385 490 
                               C 365 530, 340 570, 310 610 
                               C 290 640, 275 675, 255 690 
                               C 250 695, 245 695, 240 685 
                               C 230 655, 215 620, 205 580 
                               C 195 540, 180 500, 170 465 
                               C 160 435, 145 405, 130 380 
                               C 115 365, 85 360, 75 340 
                               C 60 315, 80 290, 110 280 
                               C 135 270, 155 275, 175 250 
                               C 185 235, 185 210, 195 180 
                               C 205 150, 215 110, 225 80 
                               Z"
                            fill="url(#mapGradient)"
                            stroke="#087f5b"
                            strokeWidth="2.4"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            className="transition-all duration-300 hover:fill-[#ecfdf5]"
                        />

                        {/* Internal State/Zonal dividing curves to render state boundaries */}
                        {/* Northern division (Punjab, Haryana, Rajasthan border) */}
                        <path d="M 185 210 Q 230 220 270 205" fill="none" stroke="#087f5b" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3 3" />
                        {/* Gangetic belt line (UP, Bihar, MP) */}
                        <path d="M 200 280 Q 290 280 410 270" fill="none" stroke="#087f5b" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="4 3" />
                        {/* Central Gujarat to MP boundary */}
                        <path d="M 115 320 Q 180 340 260 330" fill="none" stroke="#087f5b" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3 3" />
                        {/* Deccan plateau boundary (Maharashtra, Telangana, Karnataka) */}
                        <path d="M 145 405 Q 240 410 370 410" fill="none" stroke="#087f5b" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="4 3" />
                        {/* Karnataka - Tamil Nadu - Kerala Southern divide */}
                        <path d="M 185 520 Q 250 515 340 535" fill="none" stroke="#087f5b" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3 3" />
                        {/* Eastern coastal line (Odisha, AP) */}
                        <path d="M 360 440 Q 320 500 280 580" fill="none" stroke="#087f5b" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3 3" />
                        {/* Northeast corridor junction */}
                        <path d="M 450 250 Q 480 270 520 250" fill="none" stroke="#087f5b" strokeWidth="1.2" strokeOpacity="0.4" strokeDasharray="3 3" />
                    </g>

                    {/* Network Connection Lines between welfare hubs */}
                    <g>
                        {CONNECTIONS.map((conn, idx) => {
                            // Calculate midpoint with perpendicular curve offset for elegant curved arcs
                            const mx = (conn.from.x + conn.to.x) / 2;
                            const my = (conn.from.y + conn.to.y) / 2;
                            const dx = conn.to.x - conn.from.x;
                            const dy = conn.to.y - conn.from.y;
                            const dist = Math.sqrt(dx * dx + dy * dy);
                            const offset = Math.min(25, dist * 0.12);
                            const cx = mx - (dy / dist) * offset;
                            const cy = my + (dx / dist) * offset;

                            return (
                                <g key={idx}>
                                    <path
                                        d={`M ${conn.from.x} ${conn.from.y} Q ${cx} ${cy} ${conn.to.x} ${conn.to.y}`}
                                        fill="none"
                                        stroke="url(#networkLine)"
                                        strokeWidth="1.6"
                                        strokeDasharray="4 4"
                                        className="opacity-70 animate-pulse"
                                        style={{ animationDuration: `${3 + (idx % 3)}s` }}
                                    />
                                </g>
                            );
                        })}
                    </g>

                    {/* Interactive Welfare Nodal Points (Cities/Centres) */}
                    {HUBS.map((hub) => {
                        const isSelected = activeHub?.id === hub.id;
                        return (
                            <g
                                key={hub.id}
                                className="cursor-pointer group"
                                onClick={() => setActiveHub(hub)}
                            >
                                {/* Outer pulsing ring */}
                                <circle
                                    cx={hub.x}
                                    cy={hub.y}
                                    r={isSelected ? "18" : "11"}
                                    fill={hub.color}
                                    fillOpacity={isSelected ? "0.22" : "0.1"}
                                    className="animate-ping"
                                    style={{ animationDuration: isSelected ? "1.8s" : "3s" }}
                                />
                                
                                {/* Glow circle on active */}
                                {isSelected && (
                                    <circle
                                        cx={hub.x}
                                        cy={hub.y}
                                        r="14"
                                        fill="none"
                                        stroke={hub.color}
                                        strokeWidth="1.5"
                                        strokeDasharray="2 2"
                                    />
                                )}

                                {/* Main node core */}
                                <circle
                                    cx={hub.x}
                                    cy={hub.y}
                                    r={isSelected ? "6.5" : "4.5"}
                                    fill={isSelected ? "#087f5b" : "#0d9488"}
                                    stroke="#ffffff"
                                    strokeWidth="2"
                                    filter={isSelected ? "url(#emeraldGlow)" : undefined}
                                    className="transition-transform duration-200 group-hover:scale-125"
                                />

                                {/* City Label */}
                                <text
                                    x={hub.x + 8}
                                    y={hub.y + 4}
                                    fontSize="11"
                                    fontWeight={isSelected ? "700" : "600"}
                                    fill={isSelected ? "#064e3b" : "#334155"}
                                    className="pointer-events-none drop-shadow-sm font-sans"
                                >
                                    {hub.name}
                                </text>
                            </g>
                        );
                    })}
                </svg>

                {/* Interactive Selected Hub Details Card (Bottom of Visual) */}
                <AnimatePresence mode="wait">
                    {activeHub && (
                        <motion.div
                            key={activeHub.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="mt-2 rounded-2xl border border-emerald-500/30 bg-white/95 p-3.5 shadow-lg shadow-emerald-950/5 flex items-center justify-between gap-3"
                        >
                            <div className="flex items-center gap-3">
                                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-100/70 text-emerald-800">
                                    <MapPin className="h-5 w-5 text-emerald-700" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h4 className="text-sm font-bold text-slate-900">{activeHub.name} ({activeHub.state})</h4>
                                        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-200">
                                            Active Hub
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-600 font-medium mt-0.5">
                                        {activeHub.schemes} • Verified with Official Portals
                                    </p>
                                </div>
                            </div>
                            <Link
                                to={activeHub.id === "bengaluru" ? "/schemes?state=Karnataka" : "/schemes"}
                                className="inline-flex items-center gap-1 shrink-0 rounded-xl bg-slate-900 hover:bg-emerald-700 text-white px-3.5 py-2 text-xs font-bold transition-colors"
                            >
                                View Schemes <ExternalLink className="h-3 w-3" />
                            </Link>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
