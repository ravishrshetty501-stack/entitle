import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, MapPin, IndianRupee, User, Info, ExternalLink, Sparkles } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";

export default function SchemeCard({ s, status }) {
    const isState = s.level === "State" && s.state && s.state !== "All India";
    const isPrivate = s.level === "Private";
    
    // Format age requirement text
    let ageText = "All ages";
    if (s.minAge && s.maxAge) ageText = `${s.minAge} – ${s.maxAge} yrs`;
    else if (s.minAge) ageText = `${s.minAge}+ yrs`;
    else if (s.maxAge) ageText = `Up to ${s.maxAge} yrs`;

    // Format income requirement text
    let incomeText = "No income limit";
    if (s.incomeMax) {
        const inLakhs = s.incomeMax >= 100000 ? `₹${(s.incomeMax / 100000).toFixed(1).replace(".0", "")} Lakh` : `₹${s.incomeMax.toLocaleString("en-IN")}`;
        incomeText = `Max ${inLakhs}/yr`;
    }

    return (
        <article
            data-testid={`scheme-card-${s.id}`}
            className="group flex flex-col rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-teal-400 hover:shadow-lg"
        >
            {/* Top badges */}
            <div className="mb-3 flex flex-wrap items-center gap-1.5">
                <span className="inline-flex items-center rounded-full bg-teal-50 px-2.5 py-1 text-xs font-semibold text-teal-800 border border-teal-200/60">
                    {s.category || "General Welfare"}
                </span>

                {isPrivate ? (
                    <span className="rounded-full bg-violet-50 px-2.5 py-1 text-xs font-medium text-violet-800 border border-violet-200/60">
                        Non-government
                    </span>
                ) : isState ? (
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-800 border border-amber-200/60">
                        <MapPin className="h-3 w-3 text-amber-600" />
                        {s.state}
                    </span>
                ) : (
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-800 border border-blue-200/60">
                        <MapPin className="h-3 w-3 text-blue-600" />
                        Central Govt
                    </span>
                )}

                {s.sdg && (
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-800 border border-emerald-200">
                        {s.sdg.split(":")[0]}
                    </span>
                )}

                {status && <StatusBadge status={status} testId={`scheme-card-status-${s.id}`} />}
            </div>

            {/* Title */}
            <Link
                to={`/schemes/${s.id}`}
                className="font-display text-lg font-bold leading-snug text-slate-900 group-hover:text-teal-700 transition-colors"
                data-testid={`scheme-card-link-${s.id}`}
            >
                {s.name || s.title}
            </Link>

            {/* Ministry / Department */}
            <p className="mt-2 flex items-start gap-1.5 text-xs text-slate-500">
                <Building2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400" />
                <span className="line-clamp-1">{s.department || "Government of India"}</span>
            </p>

            {/* Description */}
            <p className="mt-2.5 line-clamp-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                {s.description}
            </p>

            {/* Highlighted Benefit Box */}
            <div className="mt-4 rounded-xl border border-teal-100 bg-gradient-to-r from-teal-50/80 to-emerald-50/50 p-3 text-xs sm:text-sm font-semibold text-teal-950 flex items-center gap-2">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white text-[11px] font-bold">₹</span>
                <span className="line-clamp-2">{s.financialBenefit || s.estimatedBenefit || s.benefits || "Government welfare benefit"}</span>
            </div>

            {/* Quick Eligibility pills */}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
                <div className="flex items-center gap-1.5 truncate">
                    <User className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span className="font-medium text-slate-800">Age:</span> {ageText}
                </div>
                <div className="flex items-center gap-1.5 truncate">
                    <IndianRupee className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                    <span className="font-medium text-slate-800">Income:</span> {incomeText}
                </div>
            </div>

            {/* Action buttons footer */}
            <div className="mt-auto border-t border-slate-100 pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2">
                <Link
                    to={`/schemes/${s.id}`}
                    className="inline-flex items-center justify-center gap-1 rounded-xl border border-slate-200 bg-white px-3.5 py-2 text-xs font-semibold text-slate-700 hover:border-slate-400 hover:bg-slate-50 transition-colors"
                >
                    <Info className="h-3.5 w-3.5 text-slate-500" />
                    View Details
                </Link>

                {s.officialUrl ? (
                    <a
                        href={s.officialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`scheme-card-official-${s.id}`}
                        className="inline-flex items-center justify-center gap-1.5 rounded-xl bg-[#0a192f] px-3.5 py-2 text-xs font-semibold text-white shadow hover:bg-teal-700 transition-colors"
                        title="Click to apply directly on the official government website"
                    >
                        Apply on Portal <ArrowUpRight className="h-3.5 w-3.5 text-teal-300" />
                    </a>
                ) : (
                    <span className="text-[11px] text-amber-700 font-medium text-center">
                        Official link verification pending
                    </span>
                )}
            </div>
        </article>
    );
}
