import React from "react";

export default function AssistantLogo({ size = "md", className = "" }) {
    const sizeClasses = {
        sm: "h-7 w-7",
        md: "h-9 w-9",
        lg: "h-12 w-12"
    }[size] || "h-9 w-9";

    const iconSizes = {
        sm: "h-4 w-4",
        md: "h-5 w-5",
        lg: "h-7 w-7"
    }[size] || "h-5 w-5";

    return (
        <div 
            className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#07966B] via-[#057A55] to-[#101B30] text-white shadow-md shadow-[#07966B]/25 border border-white/20 shrink-0 ${sizeClasses} ${className}`}
            aria-label="ADIKHAR Assistant"
        >
            {/* Subtle saffron accent dot */}
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#F28C28] ring-2 ring-white" />

            {/* Custom Emblem: Citizen Shield silhouette with Speech Audio Waves & Central Vocal Dot */}
            <svg viewBox="0 0 24 24" className={iconSizes} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                {/* Shield / silhouette outline */}
                <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" stroke="#34D399" strokeWidth="1.6" fill="#101B30" fillOpacity="0.3" />
                {/* Symmetrical vocal resonance sound waves inside shield */}
                <path d="M9 10v2" stroke="white" strokeWidth="2.2" />
                <path d="M12 8v6" stroke="#F28C28" strokeWidth="2.4" />
                <path d="M15 10v2" stroke="white" strokeWidth="2.2" />
                {/* Base pedestal curve */}
                <path d="M10 17h4" stroke="#34D399" strokeWidth="1.8" />
            </svg>
        </div>
    );
}

