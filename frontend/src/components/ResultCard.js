import { useState } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, CheckCircle2, ChevronDown, CircleDashed, ShieldQuestion, XCircle, ArrowRight } from "lucide-react";
import StatusBadge from "@/components/StatusBadge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const GROUPS = [
    { key: "satisfied", title: "Criteria satisfied", Icon: CheckCircle2, cls: "text-emerald-600" },
    { key: "verification", title: "Needs official verification", Icon: ShieldQuestion, cls: "text-amber-600" },
    { key: "missing", title: "Missing information", Icon: CircleDashed, cls: "text-sky-600" },
    { key: "notSatisfied", title: "Criteria not satisfied", Icon: XCircle, cls: "text-red-600" },
];

export function Explanation({ r }) {
    return (
        <div className="grid gap-4 sm:grid-cols-2">
            {GROUPS.filter((g) => r[g.key]?.length).map((g) => (
                <div key={g.key} data-testid={`explain-${g.key}-${r.schemeId}`}>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-500">{g.title}</p>
                    <ul className="space-y-2">
                        {r[g.key].map((c, i) => (
                            <li key={i} className="flex gap-2 text-sm">
                                <g.Icon className={`mt-0.5 h-4 w-4 shrink-0 ${g.cls}`} aria-hidden />
                                <span>
                                    <span className="font-medium text-slate-800">{c.label}</span>
                                    <span className="block text-xs text-slate-500">{c.detail}</span>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

export default function ResultCard({ r, defaultOpen = false, isNew = false }) {
    const [open, setOpen] = useState(defaultOpen);
    return (
        <article data-testid={`result-card-${r.schemeId}`} className="rounded-xl border border-slate-200/80 bg-white shadow-sm transition-shadow hover:shadow-md">
            <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                data-testid={`result-toggle-${r.schemeId}`}
                className="flex w-full items-start gap-4 p-5 text-left"
            >
                <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                        <StatusBadge status={r.status} testId={`result-status-${r.schemeId}`} />
                        <span className="text-xs text-slate-500">{r.category}</span>
                        {isNew && <span className="rounded-full bg-[#0a192f] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Newly discovered</span>}
                    </div>
                    <h3 className="text-base font-semibold text-slate-900 sm:text-lg">{r.schemeName}</h3>
                    {r.estimatedBenefit && <p className="mt-1 text-sm text-slate-600">{r.estimatedBenefit}</p>}
                </div>
                <div className="flex shrink-0 flex-col items-end gap-2">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <span className="text-right">
                                <span className="block font-display text-xl font-bold text-[#0a192f]">{r.matchScore}%</span>
                                <span className="text-[10px] uppercase tracking-wider text-slate-500">criteria matched</span>
                            </span>
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs">
                            Share of this scheme's criteria your answers satisfy (including ones still needing proof). It shows how complete the match is — not the chance of receiving the benefit.
                        </TooltipContent>
                    </Tooltip>
                    <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
                </div>
            </button>
            {open && (
                <div className="border-t border-slate-100 px-5 pb-5 pt-4">
                    <Explanation r={r} />
                    {r.documents?.length > 0 && (
                        <p className="mt-4 text-sm text-slate-600">
                            <span className="font-medium text-slate-800">Documents you'll likely need: </span>
                            {r.documents.join(", ")}
                        </p>
                    )}
                    <div className="mt-4 flex flex-col gap-3 rounded-lg bg-[#0a192f]/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between">
                        <p className="flex gap-2 text-sm text-slate-800" data-testid={`next-action-${r.schemeId}`}>
                            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" aria-hidden />
                            <span><span className="font-semibold">Next step: </span>{r.nextAction}</span>
                        </p>
                        <Link to={`/schemes/${r.schemeId}`} data-testid={`result-view-${r.schemeId}`} className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-[#0d9488] hover:underline">
                            View scheme <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            )}
        </article>
    );
}
