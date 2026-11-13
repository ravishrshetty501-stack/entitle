import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
    HeartPulse, 
    GraduationCap, 
    Tractor, 
    Home, 
    Baby, 
    Landmark,
    Briefcase,
    ArrowUpRight,
    Sparkles
} from "lucide-react";

export default function AdikharWelfareFlowchart() {
    const [hoveredNode, setHoveredNode] = useState(null);

    // Nodes positioned sequentially along the curved dotted journey, matching the reference image layout
    const NODES = [
        {
            id: "housing",
            title: "Housing & Basic Needs",
            category: "Housing & Basic Needs",
            count: 5,
            icon: Home,
            iconColor: "#0284C7", // Sky blue
            bgColor: "#F0F9FF",
            borderColor: "#BAE6FD",
            x: "52%",
            y: "74%",
            tag: "PMAY Urban & Gramin"
        },
        {
            id: "agriculture",
            title: "Farmers & Agriculture",
            category: "Farmers & Agriculture",
            count: 11,
            icon: Tractor,
            iconColor: "#F28C28", // Saffron / Orange (from reference image)
            bgColor: "#FFF7ED",
            borderColor: "#FFEDD5",
            x: "40%",
            y: "56%",
            tag: "PM-KISAN & KUSUM"
        },
        {
            id: "education",
            title: "Education & Scholarships",
            category: "Education & Scholarships",
            count: 23,
            icon: GraduationCap,
            iconColor: "#2563EB", // Royal Blue (from reference image)
            bgColor: "#EFF6FF",
            borderColor: "#DBEAFE",
            x: "32%",
            y: "38%",
            tag: "NSP & Fee Waivers"
        },
        {
            id: "healthcare",
            title: "Healthcare & Medical (SDG 3)",
            category: "Healthcare & Medical Assistance (SDG 3)",
            count: 11,
            icon: HeartPulse,
            iconColor: "#07966B", // Emerald (from reference image)
            bgColor: "#ECFDF5",
            borderColor: "#A7F3D0",
            x: "24%",
            y: "20%",
            tag: "Ayushman Bharat ₹5L"
        }
    ];

    return (
        <div className="relative w-full max-w-[480px] lg:max-w-[540px] h-[480px] sm:h-[520px] mx-auto select-none">
            
            {/* SVG Connecting Curved Dotted Path (exactly like the reference image) */}
            <svg 
                viewBox="0 0 500 500" 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Background soft shadow path */}
                <path 
                    d="M 330 420 C 260 380, 210 320, 205 270 C 198 210, 165 160, 155 120 C 145 90, 220 50, 390 40" 
                    stroke="#D6CEBE" 
                    strokeWidth="3.5" 
                    strokeDasharray="6 7" 
                    strokeLinecap="round"
                    className="opacity-60"
                />

                {/* Animated active path line */}
                <path 
                    d="M 330 420 C 260 380, 210 320, 205 270 C 198 210, 165 160, 155 120 C 145 90, 220 50, 390 40" 
                    stroke="#07966B" 
                    strokeWidth="2.5" 
                    strokeDasharray="6 7" 
                    strokeLinecap="round"
                    className="flowchart-dash-animation opacity-80"
                />

                {/* Secondary looping dashed arc */}
                <path 
                    d="M 280 470 C 420 400, 440 280, 390 140" 
                    stroke="#F28C28" 
                    strokeWidth="1.5" 
                    strokeDasharray="4 6" 
                    strokeLinecap="round"
                    className="opacity-35"
                />
            </svg>

            {/* THE GREEN ORIGAMI PAPER PLANE (at the top apex of the dotted trail, from reference image) */}
            <motion.div 
                className="absolute top-[34px] right-[16%] sm:right-[18%] z-20 cursor-pointer"
                animate={{ 
                    x: [0, 6, 0],
                    y: [0, -8, 0],
                    rotate: [0, 4, 0]
                }}
                transition={{ 
                    duration: 3.5, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                title="Welfare Opportunity Journey"
            >
                <div className="relative group">
                    <svg viewBox="0 0 44 44" className="w-11 h-11 sm:w-13 sm:h-13 drop-shadow-md">
                        {/* Realistic 3D Origami folded Paper Plane in Emerald */}
                        <path d="M4 22L40 4L24 40L18 25L4 22Z" fill="#07966B" />
                        <path d="M40 4L18 25L24 40Z" fill="#057A55" />
                        <path d="M18 25L24 40L21 29Z" fill="#046C4E" />
                        <path d="M4 22L40 4L18 25Z" fill="#34D399" fillOpacity="0.4" />
                    </svg>

                    {/* Speech bubble / label from plane */}
                    <span className="absolute -top-7 -right-12 hidden group-hover:flex items-center gap-1 rounded-full bg-[#101B30] text-white text-[10px] font-bold px-2.5 py-1 shadow-md whitespace-nowrap">
                        <Sparkles className="h-3 w-3 text-[#F28C28]" /> 107 Verified Schemes
                    </span>
                </div>
            </motion.div>

            {/* SQUIRCLE ICON CARDS ALONG THE WELFARE PATHWAY */}
            {NODES.map((node, index) => {
                const IconComponent = node.icon;
                const isHovered = hoveredNode === node.id;

                return (
                    <motion.div
                        key={node.id}
                        className="absolute z-10"
                        style={{ left: node.x, top: node.y }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
                    >
                        <div 
                            className="relative"
                            onMouseEnter={() => setHoveredNode(node.id)}
                            onMouseLeave={() => setHoveredNode(null)}
                        >
                            <Link
                                to={`/schemes?category=${encodeURIComponent(node.category)}`}
                                className="group block"
                            >
                                {/* Squircle Card (identical to reference image) */}
                                <div 
                                    className="relative flex items-center justify-center w-15 h-15 sm:w-17 sm:h-17 rounded-2xl bg-white border border-[#E8E3D9] shadow-lg shadow-black/5 hover:shadow-xl hover:border-[#07966B]/50 transition-all duration-300 transform group-hover:scale-108 group-hover:-translate-y-1"
                                    style={{
                                        boxShadow: "0 10px 25px -5px rgba(16, 27, 48, 0.08), 0 4px 6px -2px rgba(16, 27, 48, 0.04)"
                                    }}
                                >
                                    {/* Inner icon container with themed pastel background */}
                                    <div 
                                        className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-xl transition-transform duration-300 group-hover:scale-105"
                                        style={{ backgroundColor: node.bgColor, borderColor: node.borderColor }}
                                    >
                                        <IconComponent 
                                            className="w-6 h-6 sm:w-7 sm:h-7" 
                                            style={{ color: node.iconColor }}
                                            strokeWidth={2.2}
                                        />
                                    </div>

                                    {/* Scheme count mini-badge */}
                                    <span 
                                        className="absolute -top-2 -right-2 flex items-center justify-center h-5 min-w-5 px-1 rounded-full text-[10px] font-black text-white shadow-xs"
                                        style={{ backgroundColor: node.iconColor }}
                                    >
                                        {node.count}
                                    </span>
                                </div>
                            </Link>

                            {/* Floating Tooltip Info Pill */}
                            <div 
                                className={`absolute left-full ml-3 top-1/2 -translate-y-1/2 z-30 transition-all duration-200 pointer-events-none ${
                                    isHovered ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 hidden sm:block"
                                }`}
                            >
                                <div className="rounded-xl bg-[#101B30] text-white p-2.5 shadow-xl border border-white/10 min-w-[150px]">
                                    <div className="flex items-center justify-between gap-2">
                                        <p className="text-[11px] font-bold text-white truncate">{node.title}</p>
                                        <ArrowUpRight className="h-3 w-3 text-[#07966B] shrink-0" />
                                    </div>
                                    <p className="text-[10px] text-slate-300 font-medium">{node.tag}</p>
                                    <p className="text-[9px] text-[#34D399] font-mono mt-0.5">{node.count} Verified Programs</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                );
            })}

            {/* Additional floating welfare pills for extra depth */}
            <motion.div 
                className="absolute left-[8%] bottom-[12%] z-10 hidden sm:block"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="flex items-center gap-2 rounded-full bg-white/95 border border-[#E8E3D9] px-3.5 py-1.5 shadow-md">
                    <span className="h-2 w-2 rounded-full bg-[#07966B]" />
                    <span className="text-[11px] font-bold text-[#101B30]">107 Active Welfare Schemes</span>
                </div>
            </motion.div>

            <motion.div 
                className="absolute right-[6%] bottom-[24%] z-10 hidden sm:block"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
                <div className="flex items-center gap-2 rounded-full bg-white/95 border border-[#E8E3D9] px-3.5 py-1.5 shadow-md">
                    <span className="h-2 w-2 rounded-full bg-[#F28C28]" />
                    <span className="text-[11px] font-bold text-[#101B30]">36 States & UTs</span>
                </div>
            </motion.div>
        </div>
    );
}

