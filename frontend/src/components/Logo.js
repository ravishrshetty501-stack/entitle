import { Link } from "react-router-dom";

export default function Logo({ light = false }) {
    return (
        <Link to="/" data-testid="navbar-logo" className="flex items-center gap-2.5 group" aria-label="ENTITLE home">
            <span className="relative grid h-9 w-9 place-items-center rounded-lg bg-[#0d9488] transition-transform duration-300 group-hover:-rotate-6">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M6 5h10M6 12h7M6 19h10M6 5v14" />
                    <path d="M15 12.5l2 2 3.5-4" stroke="#fde68a" />
                </svg>
            </span>
            <span className={`font-display text-[1.15rem] font-extrabold tracking-[0.14em] ${light ? "text-white" : "text-[#0a192f]"}`}>ENTITLE</span>
        </Link>
    );
}
