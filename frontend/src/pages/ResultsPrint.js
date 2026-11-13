import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Printer } from "lucide-react";
import { api } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { useLang } from "@/context/LangContext";
import { btn } from "@/components/Layout";
import { PageLoader } from "@/components/ProtectedRoute";

export default function ResultsPrint() {
    const { user } = useAuth();
    const { t } = useLang();
    const [rows, setRows] = useState(null);
    const [profile, setProfile] = useState({});
    useEffect(() => {
        api.eligibility.results().then((r) => setRows(r.filter((x) => x.status !== "NOT_ELIGIBLE"))).catch(() => setRows([]));
        api.profile.get().then((p) => setProfile(p.profile)).catch(() => { });
    }, []);
    if (!rows) return <PageLoader />;

    return (
        <div className="mx-auto max-w-[820px] px-4 py-8">
            <div className="no-print mb-6 flex flex-wrap items-center justify-between gap-3">
                <Link to="/results" className="text-sm text-slate-500 hover:text-slate-800">â† Back to results</Link>
                <button onClick={() => window.print()} className={btn.primary} data-testid="print-summary-button"><Printer className="h-4 w-4" />Print / save as PDF</button>
            </div>
            <article className="print-area rounded-xl border border-[#E8E3D9] bg-white p-8 shadow-sm" data-testid="results-print-card">
                <header className="flex items-start justify-between border-b-2 border-[#101B30] pb-4">
                    <div>
                        <p className="font-display text-xl font-extrabold tracking-[0.14em] text-[#101B30]">ADIKHAR</p>
                        <p className="text-xs text-slate-500">Benefits screening summary</p>
                    </div>
                    <div className="text-right text-sm">
                        <p className="font-semibold text-slate-900" data-testid="print-name">{user.name}</p>
                        <p className="text-slate-600">{[profile.district, profile.state].filter(Boolean).join(", ")}</p>
                        <p className="text-xs text-slate-500">Printed {new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</p>
                    </div>
                </header>
                <p className="mt-4 text-sm text-slate-700">Schemes this person may be eligible for ({rows.length}):</p>
                {rows.length === 0 ? <p className="mt-4 text-sm text-slate-500">No matched schemes yet. Complete the eligibility assessment first.</p> : (
                    <table className="mt-3 w-full border-collapse text-sm" data-testid="print-table">
                        <thead><tr className="border-b border-[#E8E3D9] text-left text-xs uppercase tracking-wider text-slate-500"><th className="py-2 pr-2">#</th><th className="py-2 pr-2">Scheme</th><th className="py-2 pr-2">Category</th><th className="py-2">Screening status</th></tr></thead>
                        <tbody>
                            {rows.map((r, i) => (
                                <tr key={r.schemeId} className="border-b border-slate-100 align-top">
                                    <td className="py-2 pr-2 text-slate-500">{i + 1}</td>
                                    <td className="py-2 pr-2 font-medium text-slate-900">{r.schemeName}</td>
                                    <td className="py-2 pr-2 text-slate-600">{r.category}</td>
                                    <td className="py-2 text-slate-800">{t(`status.${r.status}`)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
                <footer className="mt-6 border-t border-[#E8E3D9] pt-3 text-[11px] leading-relaxed text-slate-500">
                    Informational screening only â€” not an official government decision. Please verify with the office or portal of each scheme.
                    Take this sheet to your nearest Common Service Centre, Gram Panchayat or help desk for assistance.
                </footer>
            </article>
        </div>
    );
}
