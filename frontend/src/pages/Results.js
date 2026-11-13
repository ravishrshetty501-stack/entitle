import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ClipboardList, Printer, RefreshCw } from "lucide-react";
import { api } from "@/lib/api";
import { ELIGIBILITY } from "@/lib/options";
import { useLang } from "@/context/LangContext";
import { Page, PageHeader, EmptyState, btn } from "@/components/Layout";
import ResultCard from "@/components/ResultCard";
import Disclaimer from "@/components/Disclaimer";
import { PageLoader } from "@/components/ProtectedRoute";
import { STATUS_STYLE } from "@/components/StatusBadge";

export default function Results() {
    const { t } = useLang();
    const [results, setResults] = useState(null);
    const [filter, setFilter] = useState("RELEVANT");
    useEffect(() => { api.eligibility.results().then(setResults).catch(() => setResults([])); }, []);
    if (!results) return <PageLoader label="Loading your resultsâ€¦" />;

    const count = (s) => results.filter((r) => r.status === s).length;
    const shown = results.filter((r) => filter === "ALL" || (filter === "RELEVANT" ? r.status !== "NOT_ELIGIBLE" : r.status === filter));

    return (
        <Page>
            <PageHeader eyebrow="Explainable eligibility" title="Your eligibility results"
                sub="Each result shows exactly which criteria you meet, what needs proof and what to do next.">
                <Link to="/results/print" className={btn.primary} data-testid="print-summary-link"><Printer className="h-4 w-4" />Printable summary</Link>
                <Link to="/assessment" className={btn.ghost} data-testid="rerun-assessment"><RefreshCw className="h-4 w-4" />Edit answers & re-run</Link>
            </PageHeader>
            {results.length === 0 ? (
                <EmptyState icon={ClipboardList} testId="results-empty" title="No assessment yet" text="Answer a few questions to see which schemes may apply to you."
                    action={<Link to="/assessment" className={btn.primary}>Start assessment</Link>} />
            ) : (
                <>
                    <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                        {ELIGIBILITY.map((s) => (
                            <button key={s} onClick={() => setFilter(s)} data-testid={`results-filter-${s}`}
                                className={`rounded-xl border bg-white p-4 text-left transition-shadow hover:shadow-md ${filter === s ? "border-[#101B30] ring-1 ring-[#101B30]" : "border-[#E8E3D9]"}`}>
                                <span className={`mb-2 inline-block h-2 w-2 rounded-full ${STATUS_STYLE[s].dot}`} />
                                <p className="font-display text-3xl font-bold text-slate-900" data-testid={`results-count-${s}`}>{count(s)}</p>
                                <p className="text-sm text-slate-600">{t(`status.${s}`)}</p>
                            </button>
                        ))}
                    </div>
                    <div className="mb-6 flex flex-wrap gap-2">
                        {[["RELEVANT", "Potentially relevant"], ["ALL", "All schemes"]].map(([k, l]) => (
                            <button key={k} onClick={() => setFilter(k)} data-testid={`results-filter-${k}`}
                                className={`rounded-full px-4 py-1.5 text-sm ${filter === k ? "bg-[#101B30] text-white" : "border border-[#E8E3D9] bg-white text-slate-700"}`}>{l}</button>
                        ))}
                    </div>
                    <Disclaimer className="mb-6" />
                    <div className="space-y-3" data-testid="results-list">
                        {shown.map((r, i) => <ResultCard key={r.schemeId} r={r} defaultOpen={i === 0} />)}
                    </div>
                </>
            )}
        </Page>
    );
}
