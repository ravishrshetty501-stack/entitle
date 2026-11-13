import React from "react";
import { Link } from "react-router-dom";

export default function Logo({ light = false, showTagline = true, className = "" }) {
    return (
        <Link 
            to="/" 
            data-testid="navbar-logo" 
            className={`flex items-center gap-3 group select-none ${className}`} 
            aria-label="ADIKHAR Home - National Welfare Gateway"
        >
            {/* Custom ADIKHAR Emblem: Stylized 'A' forming an empowering welfare arch with Ashoka-inspired upward sprout */}
            <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#07966B] via-[#057A55] to-[#101B30] shadow-md shadow-[#07966B]/25 transition-transform duration-300 group-hover:scale-105 border border-white/20">
                {/* Saffron accent pip on top vertex */}
                <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#F28C28] border-2 border-white shadow-xs" title="Public Welfare Service" />
                
                <svg viewBox="0 0 36 36" className="h-6 w-6 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    {/* The outer arch of 'A' */}
                    <path d="M18 5L7 30h5l3-7h6l3 7h5L18 5z" fill="white" fillOpacity="0.12" stroke="white" strokeWidth="2.2" />
                    {/* Crossbar of 'A' transformed into a protective open palm / foundation curve */}
                    <path d="M13.5 21h9" stroke="#F28C28" strokeWidth="3" />
                    {/* Inner glowing core: Ashoka/sun sprout rising upward */}
                    <circle cx="18" cy="14" r="2.2" fill="#34D399" />
                    <path d="M18 10v1.5M15.5 12.5l1 1M20.5 12.5l-1 1" stroke="#34D399" strokeWidth="1.6" />
                </svg>
            </div>

            {/* Wordmark */}
            <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                    <span className={`font-display text-xl font-black tracking-tight leading-none ${light ? "text-white" : "text-[#101B30]"}`}>
                        ADIKHAR
                    </span>
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#07966B]" />
                </div>
                {showTagline && (
                    <span className={`text-[9.5px] font-bold uppercase tracking-[0.14em] leading-tight ${light ? "text-emerald-200/80" : "text-[#07966B]"}`}>
                        National Welfare Gateway
                    </span>
                )}
            </div>
        </Link>
    );
}
