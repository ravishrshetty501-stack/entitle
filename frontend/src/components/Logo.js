import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
    return (
        <Link to="/" data-testid="navbar-logo" className="flex items-center gap-2.5 group select-none" aria-label="ENTITLE home">
            <span className="relative grid h-8 w-8 place-items-center rounded-lg bg-emerald-600 transition-transform duration-300 group-hover:scale-105 shadow-sm shadow-emerald-600/20">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6 5h10M6 12h7M6 19h10M6 5v14" />
                    <path d="M15 12.5l2 2 3.5-4" stroke="#A7F3D0" strokeWidth="2.8" />
                </svg>
            </span>
            <span className={`font-display text-[1.12rem] font-extrabold tracking-[0.14em] ${light ? "text-white" : "text-slate-900"}`}>
                ENTITLE
            </span>
        </Link>
    );
}