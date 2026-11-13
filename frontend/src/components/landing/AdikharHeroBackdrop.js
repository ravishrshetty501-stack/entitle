import React from "react";

export default function AdikharHeroBackdrop() {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
            {/* 1. Indian Tricolor Saffron Ribbon Arc (Top Right to Center) */}
            <svg 
                viewBox="0 0 1200 800" 
                className="absolute -top-24 right-0 w-[85%] md:w-[65%] max-w-[950px] opacity-45"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Saffron flowing concentric ribbon arcs */}
                <path 
                    d="M300 0 C 650 180, 850 450, 1200 520" 
                    stroke="url(#saffron-grad)" 
                    strokeWidth="36" 
                    strokeLinecap="round"
                    className="opacity-60"
                />
                <path 
                    d="M420 0 C 720 190, 920 480, 1200 560" 
                    stroke="#FFEDD5" 
                    strokeWidth="18" 
                    strokeLinecap="round"
                    className="opacity-70"
                />
                <path 
                    d="M220 0 C 580 150, 780 400, 1200 480" 
                    stroke="#F28C28" 
                    strokeWidth="4" 
                    strokeDasharray="8 8"
                    className="opacity-40"
                />
                <defs>
                    <linearGradient id="saffron-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#F28C28" stopOpacity="0.8" />
                        <stop offset="60%" stopColor="#FB923C" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#FED7AA" stopOpacity="0.1" />
                    </linearGradient>
                </defs>
            </svg>

            {/* 2. Ashoka Chakra / Sun Spoke Watermark on the Right */}
            <div className="absolute top-20 right-8 md:right-28 w-[380px] h-[380px] md:w-[520px] md:h-[520px] rounded-full border border-[#07966B]/10 opacity-25 flex items-center justify-center">
                <div className="w-[85%] h-[85%] rounded-full border border-dashed border-[#F28C28]/20" />
                <div className="absolute w-[60%] h-[60%] rounded-full border border-[#07966B]/15" />
                {/* 24 radiating delicate spokes */}
                {[...Array(24)].map((_, i) => (
                    <div 
                        key={i} 
                        className="absolute w-[92%] h-[1px] bg-gradient-to-r from-transparent via-[#07966B]/20 to-transparent"
                        style={{ transform: `rotate(${i * 7.5}deg)` }}
                    />
                ))}
            </div>

            {/* 3. Indian Architectural Heritage Silhouette (Colonnades, domes, arches at the bottom horizon) */}
            <svg 
                viewBox="0 0 1440 260" 
                className="absolute bottom-0 left-0 right-0 w-full h-[140px] md:h-[190px] opacity-20"
                preserveAspectRatio="none"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Silhouette buildings / Parliament / Rashtrapati / Vidhana Soudha inspired skyline */}
                <path 
                    d="M0 260 L0 210 Q 60 210, 80 185 Q 100 160, 130 160 Q 160 160, 180 185 L 220 185 L 220 140 Q 240 120, 260 140 L 260 185 L 340 185 Q 360 150, 400 150 Q 440 150, 460 185 L 560 185 L 560 130 Q 590 100, 620 130 L 620 185 L 720 185 Q 750 140, 800 140 Q 850 140, 880 185 L 980 185 L 980 150 Q 1010 125, 1040 150 L 1040 185 L 1150 185 Q 1180 160, 1220 160 Q 1260 160, 1290 185 L 1440 185 L 1440 260 Z" 
                    fill="#101B30"
                    className="opacity-30"
                />
                {/* Greenery / tree crowns at the base */}
                <path 
                    d="M0 260 C 120 220, 240 240, 360 225 C 480 210, 600 235, 720 220 C 840 205, 960 230, 1080 215 C 1200 200, 1320 225, 1440 210 L 1440 260 Z" 
                    fill="#07966B"
                    className="opacity-25"
                />
            </svg>

            {/* 4. Emerald Green Bottom Wave (matches the reference image bottom tricolor ribbon) */}
            <svg 
                viewBox="0 0 1440 120" 
                className="absolute bottom-0 left-0 right-0 w-full h-[55px] md:h-[75px]"
                preserveAspectRatio="none"
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M0 50 C 320 110, 720 10, 1120 70 C 1280 95, 1380 75, 1440 60 L 1440 120 L 0 120 Z" 
                    fill="#07966B" 
                    className="opacity-90"
                />
                <path 
                    d="M0 65 C 280 120, 680 30, 1080 85 C 1260 110, 1370 95, 1440 85 L 1440 120 L 0 120 Z" 
                    fill="#057A55" 
                />
            </svg>
        </div>
    );
}

