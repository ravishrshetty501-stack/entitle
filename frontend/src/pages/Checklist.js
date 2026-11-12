import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowUpRight, CheckCircle2, Printer } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { Page, btn } from "@/components/Layout";
import { PageLoader } from "@/components/ProtectedRoute";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export function ChecklistItems({ docs, prepared, onToggle, idPrefix = "doc" }) {
    return (
        <ul className="space-y-3">
            {docs.map((d, i) => {
                const done = prepared.includes(d.name);
                return (
                    <li key={d.name} className={`flex items-start gap-3 rounded-xl border p-4 transition-colors ${done ? "border-emerald-200 bg-emerald-50/50" : "border-slate-200 bg-white"}`}>
                        <Checkbox id={`${idPrefix}-${i}`} checked={done} onCheckedChange={() => onToggle(d.name)} className="mt-0.5 h-5 w-5" data-testid={`${idPrefix}-checkbox-${i}`} />
                        <label htmlFor={`${idPrefix}-${i}`} className="flex-1 cursor-pointer">
                            <span className={`block font-medium ${done ? "text-emerald-900" : "text-slate-900"}`}>{d.name}{d.conditional === "true" && <span className="ml-2 text-xs font-normal text-slate-500">(if applicable)</span>}</span>
                            <span className="block text-sm text-slate-500">Why: {d.why}</span>
                        </label>
                        {!done && <span className="shrink-0 rounded-full bg-amber-50 px-2 py-0.5 text-xs font-semibold text-amber-700">Missing</span>}
                    </li>
                );
            })}
        </ul>
    );
}

export default function Checklist() {
    const { schemeId } = useParams();
    const [c, setC] = useState(null);
    useEffect(() => { api.checklists.get(schemeId).then(setC).catch((e) => toast.error(errorMessage(e))); }, [schemeId]);
    if (!c) return <PageLoader />;

    const toggle = async (name) => {
        const prepared = c.prepared.includes(name) ? c.prepared.filter((x) => x !== name) : [...c.prepared, name];
        setC({ ...c, prepared });
        try { setC(await api.checklists.update(schemeId, prepared)); } catch (e) { toast.error(errorMessage(e)); }
    };
    const done = c.documents.filter((d) => c.prepared.includes(d.name)).length;
    const missing = c.documents.length - done;

    return (
        <Page className="max-w-3xl">
            <Link to={`/schemes/${schemeId}`} className="no-print text-sm text-slate-500 hover:text-slate-800">← Back to scheme</Link>
            <div className="print-area mt-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8" data-testid="document-checklist">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0d9488]">Smart document checklist</p>
                <h1 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">{c.schemeName}</h1>
                <p className="mt-2 text-sm text-slate-600">Personalised from the scheme's requirements and your profile. ENTITLE does not store your documents — just tick what you've prepared.</p>
                <div className="my-6">
                    <div className="mb-1.5 flex justify-between text-sm"><span data-testid="checklist-progress-text">{done} of {c.documents.length} prepared</span>
                        {missing > 0 ? <span className="font-semibold text-amber-700" data-testid="checklist-missing-count">{missing} missing</span> : <span className="flex items-center gap-1 font-semibold text-emerald-700"><CheckCircle2 className="h-4 w-4" />Ready</span>}</div>
                    <Progress value={(done / Math.max(1, c.documents.length)) * 100} className="h-2" />
                </div>
                <ChecklistItems docs={c.documents} prepared={c.prepared} onToggle={toggle} />
                <p className="mt-6 text-xs text-slate-500">Final document requirements are set by the issuing authority. Source: {c.sourceUrl}</p>
            </div>
            <div className="no-print mt-6 flex flex-wrap gap-2">
                <button onClick={() => window.print()} className={btn.ghost} data-testid="print-checklist-button"><Printer className="h-4 w-4" />Print / save as PDF</button>
                {c.officialUrl && <a href={c.officialUrl} target="_blank" rel="noopener noreferrer" className={btn.teal} data-testid="checklist-official-link">Apply on official site<ArrowUpRight className="h-4 w-4" /></a>}
            </div>
        </Page>
    );
}
