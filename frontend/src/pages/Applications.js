import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ClipboardList, History, Loader2, Save, Trash2 } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { APP_STATUSES, humanize } from "@/lib/options";
import { Page, PageHeader, EmptyState, btn } from "@/components/Layout";
import { PageLoader } from "@/components/ProtectedRoute";
import { toast } from "sonner";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

const inputCls = "mt-1 w-full rounded-lg border border-[#E8E3D9] bg-white px-3 py-2 text-sm focus:border-[#07966B] focus:outline-none";
const STATUS_TONE = { APPROVED: "bg-emerald-100 text-emerald-800", REJECTED: "bg-red-100 text-red-700", ACTION_REQUIRED: "bg-red-50 text-red-700", SUBMITTED: "bg-sky-100 text-sky-800", UNDER_REVIEW: "bg-sky-50 text-sky-800" };

function AppCard({ a, onChange, onDelete }) {
    const [form, setForm] = useState({ status: a.status, applicationDate: a.applicationDate || "", deadline: a.deadline || "", referenceNumber: a.referenceNumber || "", notes: a.notes || "" });
    const [busy, setBusy] = useState(false);
    const [showHistory, setShowHistory] = useState(false);
    const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
    const save = async () => {
        setBusy(true);
        try {
            onChange(await api.applications.update(a.id, { ...form, applicationDate: form.applicationDate || null, deadline: form.deadline || null }));
            toast.success("Application updated");
        } catch (e) { toast.error(errorMessage(e)); } finally { setBusy(false); }
    };
    const tid = (x) => `app-${x}-${a.schemeId}`;

    return (
        <article className="rounded-2xl border border-[#E8E3D9] bg-white p-5 shadow-sm sm:p-6" data-testid={tid("card")}>
            <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                    <Link to={`/schemes/${a.schemeId}`} className="font-display text-lg font-semibold text-slate-900 hover:text-[#07966B]">{a.schemeName}</Link>
                    <p className="text-xs text-slate-500">{a.category} Â· updated {new Date(a.updatedAt).toLocaleDateString()}</p>
                </div>
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${STATUS_TONE[a.status] || "bg-amber-50 text-amber-800"}`} data-testid={tid("status-badge")}>{humanize(a.status)}</span>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <label className="text-xs font-medium text-slate-600">Status
                    <select value={form.status} onChange={set("status")} className={inputCls} data-testid={tid("status-select")}>{APP_STATUSES.map((s) => <option key={s} value={s}>{humanize(s)}</option>)}</select>
                </label>
                <label className="text-xs font-medium text-slate-600">Submission date<input type="date" value={form.applicationDate} onChange={set("applicationDate")} className={inputCls} data-testid={tid("date")} /></label>
                <label className="text-xs font-medium text-slate-600">Deadline (for reminders)<input type="date" value={form.deadline} onChange={set("deadline")} className={inputCls} data-testid={tid("deadline")} /></label>
                <label className="text-xs font-medium text-slate-600">Reference no. (optional)<input value={form.referenceNumber} maxLength={80} onChange={set("referenceNumber")} className={inputCls} data-testid={tid("ref")} /></label>
            </div>
            <label className="mt-4 block text-xs font-medium text-slate-600">Notes<textarea rows={2} maxLength={2000} value={form.notes} onChange={set("notes")} className={inputCls} data-testid={tid("notes")} /></label>
            {a.missingDocuments.length > 0 ? (
                <p className="mt-4 text-sm text-amber-800" data-testid={tid("missing-docs")}><span className="font-semibold">{a.missingDocuments.length} of {a.documentsTotal} documents missing:</span> {a.missingDocuments.join(", ")}</p>
            ) : <p className="mt-4 text-sm font-medium text-emerald-700">All checklist documents prepared.</p>}
            <div className="mt-5 flex flex-wrap items-center gap-2">
                <button onClick={save} disabled={busy} className={btn.primary} data-testid={tid("save")}>{busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}Save</button>
                <Link to={`/checklist/${a.schemeId}`} className={btn.ghost} data-testid={tid("checklist")}><ClipboardList className="h-4 w-4" />Checklist</Link>
                {a.officialUrl && <a href={a.officialUrl} target="_blank" rel="noopener noreferrer" className={btn.ghost}>Official site<ArrowUpRight className="h-4 w-4" /></a>}
                <button onClick={() => setShowHistory(!showHistory)} className="ml-auto inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900" data-testid={tid("history-toggle")}><History className="h-4 w-4" />History</button>
                <AlertDialog>
                    <AlertDialogTrigger asChild><button className="inline-flex items-center gap-1 rounded-full p-2 text-sm text-red-600 hover:bg-red-50" aria-label="Remove" data-testid={tid("delete")}><Trash2 className="h-4 w-4" /></button></AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader><AlertDialogTitle>Remove {a.schemeName}?</AlertDialogTitle><AlertDialogDescription>This removes it from your tracker, including notes and history.</AlertDialogDescription></AlertDialogHeader>
                        <AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction onClick={() => onDelete(a)} className="bg-red-600 hover:bg-red-700" data-testid={tid("delete-confirm")}>Remove</AlertDialogAction></AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
            </div>
            {showHistory && (
                <ol className="mt-4 space-y-2 border-l-2 border-[#E8E3D9] pl-4" data-testid={tid("history")}>
                    {[...a.history].reverse().map((h, i) => <li key={i} className="text-sm"><span className="font-medium">{humanize(h.status)}</span> â€” {h.note} <span className="text-xs text-slate-400">{new Date(h.at).toLocaleString()}</span></li>)}
                </ol>
            )}
        </article>
    );
}

export default function Applications() {
    const [apps, setApps] = useState(null);
    useEffect(() => { api.applications.list().then(setApps).catch(() => setApps([])); }, []);
    if (!apps) return <PageLoader />;
    const replace = (u) => setApps(apps.map((a) => (a.id === u.id ? u : a)));
    const remove = async (a) => {
        try { await api.applications.remove(a.id); setApps(apps.filter((x) => x.id !== a.id)); toast.success("Removed"); } catch (e) { toast.error(errorMessage(e)); }
    };
    return (
        <Page className="max-w-5xl">
            <PageHeader eyebrow="Application tracker" title="My applications" sub="You update these statuses yourself. ADIKHAR does not have access to government application systems." />
            {apps.length === 0 ? (
                <EmptyState icon={ClipboardList} testId="applications-empty" title="No applications tracked yet" text="Open any scheme and choose â€œAdd to My Applicationsâ€."
                    action={<Link to="/results" className={btn.primary}>See my matches</Link>} />
            ) : <div className="space-y-4" data-testid="applications-list">{apps.map((a) => <AppCard key={a.id} a={a} onChange={replace} onDelete={remove} />)}</div>}
        </Page>
    );
}
