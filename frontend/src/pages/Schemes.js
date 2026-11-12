import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SearchX } from "lucide-react";
import { api } from "@/lib/api";
import { AGE_GROUPS, CATEGORIES, ELIGIBILITY, OPTIONS, STATES } from "@/lib/options";
import { useAuth } from "@/context/AuthContext";
import { useLang } from "@/context/LangContext";
import { Page, PageHeader, EmptyState } from "@/components/Layout";
import SchemeCard from "@/components/SchemeCard";
import { Skeleton } from "@/components/ui/skeleton";

const selCls = "rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm focus:border-teal-500 focus:outline-none";

export default function Schemes() {
    const { user } = useAuth();
    const { t } = useLang();
    const [params, setParams] = useSearchParams();
    const [schemes, setSchemes] = useState(null);
    const [statusMap, setStatusMap] = useState({});
    const [error, setError] = useState(null);
    const f = Object.fromEntries(["q", "category", "state", "age", "incomeRange", "status", "provider"].map((k) => [k, params.get(k) || ""]));
    const setF = (k, v) => { const n = new URLSearchParams(params); v ? n.set(k, v) : n.delete(k); setParams(n, { replace: true }); };

    useEffect(() => {
        setSchemes(null);
        const t0 = setTimeout(() => {
            api.schemes.list({ q: f.q || undefined, category: f.category || undefined, state: f.state || undefined, age: AGE_GROUPS.find((a) => a.key === f.age)?.age, incomeRange: f.incomeRange || undefined, provider: f.provider || undefined })
                .then((s) => { setSchemes(s); setError(null); }).catch(() => setError("Could not load schemes. Please retry."));
        }, 250);
        return () => clearTimeout(t0);
    }, [f.q, f.category, f.state, f.age, f.incomeRange, f.provider]); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (user) api.eligibility.results().then((r) => setStatusMap(Object.fromEntries(r.map((x) => [x.schemeId, x.status])))).catch(() => { });
    }, [user]);

    const shown = useMemo(() => (schemes || []).filter((s) => !f.status || statusMap[s.id] === f.status), [schemes, statusMap, f.status]);

    return (
        <Page>
            <PageHeader eyebrow="Scheme catalogue" title="Explore available schemes" sub="Real national, state and non-government schemes, each linked to its official source." />
            <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <label className="relative block">
                    <span className="sr-only">Search schemes</span>
                    <Search className="absolute left-3.5 top-3.5 h-5 w-5 text-slate-400" />
                    <input value={f.q} onChange={(e) => setF("q", e.target.value)} placeholder="Search by name, benefit or keyword (e.g. scholarship, pension, health)"
                        className="w-full rounded-xl border border-slate-300 py-3 pl-11 pr-4 text-base focus:border-teal-500 focus:outline-none" data-testid="scheme-search-input" />
                </label>
                <div className="mt-3 flex flex-wrap gap-2">
                    <select aria-label="Category" value={f.category} onChange={(e) => setF("category", e.target.value)} className={selCls} data-testid="filter-category">
                        <option value="">All categories</option>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                    </select>
                    <select aria-label="State" value={f.state} onChange={(e) => setF("state", e.target.value)} className={selCls} data-testid="filter-state">
                        <option value="">All states</option>{STATES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                    <select aria-label="Age group" value={f.age} onChange={(e) => setF("age", e.target.value)} className={selCls} data-testid="filter-age">
                        <option value="">Any age</option>{AGE_GROUPS.map((a) => <option key={a.key} value={a.key}>{a.label}</option>)}
                    </select>
                    <select aria-label="Income" value={f.incomeRange} onChange={(e) => setF("incomeRange", e.target.value)} className={selCls} data-testid="filter-income">
                        <option value="">Any income</option>{OPTIONS.incomeRange.map((v) => <option key={v} value={v}>{t(`opt.incomeRange.${v}`)}</option>)}
                    </select>
                    <select aria-label="Provider" value={f.provider} onChange={(e) => setF("provider", e.target.value)} className={selCls} data-testid="filter-provider">
                        <option value="">Govt + non-govt</option><option value="government">Government only</option><option value="private">Non-government (CSR / foundations)</option>
                    </select>
                    {user && (
                        <select aria-label="Eligibility status" value={f.status} onChange={(e) => setF("status", e.target.value)} className={selCls} data-testid="filter-status">
                            <option value="">Any eligibility</option>{ELIGIBILITY.map((s) => <option key={s} value={s}>{t(`status.${s}`)}</option>)}
                        </select>
                    )}
                    {Object.values(f).some(Boolean) && <button onClick={() => setParams({})} className="px-3 text-sm font-semibold text-[#0d9488]" data-testid="filter-clear">Clear</button>}
                </div>
            </div>
            {error && <p className="mb-4 rounded-lg bg-red-50 p-3 text-sm text-red-700" role="alert">{error}</p>}
            {!schemes ? (
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{[...Array(6)].map((_, i) => <Skeleton key={i} className="h-72 rounded-xl" />)}</div>
            ) : shown.length === 0 ? (
                <EmptyState icon={SearchX} testId="schemes-empty" title="No schemes match these filters" text="Try removing a filter or searching a different word." />
            ) : (
                <>
                    <p className="mb-4 text-sm text-slate-500" data-testid="schemes-count">{shown.length} scheme{shown.length > 1 ? "s" : ""}</p>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{shown.map((s) => <SchemeCard key={s.id} s={s} status={statusMap[s.id]} />)}</div>
                </>
            )}
        </Page>
    );
}
