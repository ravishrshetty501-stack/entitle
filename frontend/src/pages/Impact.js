import { useEffect, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Database, FlaskConical } from "lucide-react";
import { api } from "@/lib/api";
import { Page, PageHeader } from "@/components/Layout";
import { PageLoader } from "@/components/ProtectedRoute";

const LABELS = { profilesAssessed: "Profiles assessed", potentialMatchesSurfaced: "Potential matches surfaced", checklistsStarted: "Checklists started", applicationsTracked: "Applications tracked", schemesSaved: "Schemes saved", schemesInCatalogue: "Schemes in catalogue" };

export default function Impact() {
    const [d, setD] = useState(null);
    useEffect(() => { api.analytics.impact().then(setD).catch(() => setD(false)); }, []);
    if (d === null) return <PageLoader />;
    if (d === false) return <Page><p className="text-red-600" role="alert">Could not load analytics.</p></Page>;
    const cat = Object.entries(d.catalogueByCategory).map(([name, count]) => ({ name, count }));

    return (
        <Page>
            <PageHeader eyebrow="Impact & analytics" title="Measuring access, honestly" sub="Live counts come from this prototype's database (aggregated, no personal data). Charts marked SIMULATED are illustrative only." />
            <section className="mb-12" data-testid="impact-live">
                <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold"><Database className="h-5 w-5 text-[#0d9488]" />Live prototype counts</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
                    {Object.entries(d.prototype).map(([k, v]) => (
                        <div key={k} className="rounded-xl border border-slate-200 bg-white p-4"><p className="font-display text-3xl font-bold" data-testid={`impact-${k}`}>{v}</p><p className="text-xs text-slate-500">{LABELS[k]}</p></div>
                    ))}
                </div>
            </section>
            <section className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-6" data-testid="impact-simulated-chart">
                    <div className="mb-4 flex items-center justify-between"><h2 className="font-semibold">Monthly activity</h2><span className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-800"><FlaskConical className="h-3 w-3" />{d.simulated.label}</span></div>
                    <ResponsiveContainer width="100%" height={280}>
                        <AreaChart data={d.simulated.monthly}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" /><XAxis dataKey="month" fontSize={12} /><YAxis fontSize={12} /><Tooltip /><Legend />
                            <Area type="monotone" dataKey="discovered" name="Schemes discovered" stroke="#0a192f" fill="#0a192f" fillOpacity={0.12} />
                            <Area type="monotone" dataKey="checklists" name="Checklists completed" stroke="#0d9488" fill="#0d9488" fillOpacity={0.15} />
                            <Area type="monotone" dataKey="tracked" name="Applications tracked" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.15} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <div className="mb-4 flex items-center justify-between"><h2 className="font-semibold">Catalogue by category</h2><span className="rounded-full bg-teal-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-teal-800">Real catalogue data</span></div>
                    <ResponsiveContainer width="100%" height={280}>
                        <BarChart data={cat} layout="vertical" margin={{ left: 40 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" /><XAxis type="number" allowDecimals={false} fontSize={12} /><YAxis type="category" dataKey="name" width={150} fontSize={11} /><Tooltip />
                            <Bar dataKey="count" name="Schemes" fill="#0d9488" radius={[0, 4, 4, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </section>
            <p className="mt-8 text-sm text-slate-500">ENTITLE has not yet been used by real beneficiaries. We do not claim real-world outcomes.</p>
        </Page>
    );
}
