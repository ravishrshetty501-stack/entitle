import { Link } from "react-router-dom";
import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";

export default function SchemeCard({ s, status }) {
    return (
        <article data-testid={`scheme-card-${s.id}`} className="group flex flex-col rounded-xl border border-slate-200/80 bg-white p-5 shadow-sm transition-[box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium text-slate-700">{s.category}</span>
                {s.level === "Private" ? <span className="rounded-md bg-violet-50 px-2 py-0.5 text-xs font-medium text-violet-800" data-testid={`scheme-card-nongov-${s.id}`}>Non-government</span>
                    : <span className="inline-flex items-center gap-1 text-xs text-slate-500"><MapPin className="h-3 w-3" />{s.level === "State" ? s.state : "National"}</span>}
                {status && <StatusBadge status={status} testId={`scheme-card-status-${s.id}`} />}
            </div>
            <Link to={`/schemes/${s.id}`} className="font-display text-lg font-semibold leading-snug text-slate-900 group-hover:text-[#0d9488]" data-testid={`scheme-card-link-${s.id}`}>
                {s.name}
            </Link>
            <p className="mt-2 line-clamp-2 text-sm text-slate-600">{s.description}</p>
            <p className="mt-3 flex items-start gap-1.5 text-xs text-slate-500"><Building2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />{s.department}</p>
            <div className="mt-4 rounded-lg bg-teal-50/60 p-3 text-sm font-medium text-teal-900">{s.estimatedBenefit}</div>
            {s.criteria?.length > 0 && (
                <ul className="mt-3 space-y-1 text-xs text-slate-600">
                    {s.criteria.slice(0, 2).map((c, i) => <li key={i}>• {c.label}</li>)}
                </ul>
            )}
            <div className="mt-auto flex items-center justify-between pt-4">
                <Link to={`/schemes/${s.id}`} className="text-sm font-semibold text-[#0a192f] hover:underline">Details</Link>
                {s.officialUrl ? (
                    <a href={s.officialUrl} target="_blank" rel="noopener noreferrer" data-testid={`scheme-card-official-${s.id}`} className="inline-flex items-center gap-1 text-sm font-semibold text-[#0d9488] hover:underline">
                        Official site <ArrowUpRight className="h-4 w-4" />
                    </a>
                ) : (
                    <span className="text-xs text-amber-700">Official application link requires verification.</span>
                )}
            </div>
        </article>
    );
}
