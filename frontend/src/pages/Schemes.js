import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
    Search,
    SearchX,
    X,
    SlidersHorizontal,
    Info,
    Sparkles,
    Building2,
    MapPin,
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    Filter,
    Layers,
    CheckCircle2
} from "lucide-react";
import { api } from "@/lib/api";
import { CATEGORIES, INCOME_OPTIONS, STATES, SDGS, BENEFICIARIES, AGE_PRESETS } from "@/lib/options";
import { useAuth } from "@/context/AuthContext";
import { Page, PageHeader, EmptyState } from "@/components/Layout";
import SchemeCard from "@/components/SchemeCard";
import { Skeleton } from "@/components/ui/skeleton";

const PAGE_SIZE = 12;

export default function Schemes() {
    const { user } = useAuth();
    const [params, setParams] = useSearchParams();
    const [schemes, setSchemes] = useState(null);
    const [stats, setStats] = useState(null);
    const [statusMap, setStatusMap] = useState({});
    const [error, setError] = useState(null);
    const [page, setPage] = useState(1);

    const f = {
        q: params.get("q") || "",
        category: params.get("category") || "",
        state: params.get("state") || "",
        level: params.get("level") || "",
        sdg: params.get("sdg") || "",
        beneficiaryType: params.get("beneficiaryType") || "",
        age: params.get("age") || "",
        income: params.get("income") || "",
        status: params.get("status") || "Active",
        provider: params.get("provider") || ""
    };

    const setF = (key, value) => {
        const next = new URLSearchParams(params);
        if (value !== undefined && value !== null && value !== "" && value !== "All SDGs" && value !== "All Beneficiaries") {
            next.set(key, value);
        } else {
            next.delete(key);
        }
        setParams(next, { replace: true });
        setPage(1);
    };

    const clearAll = () => {
        setParams({}, { replace: true });
        setPage(1);
    };

    // Load dynamic category & scheme stats
    useEffect(() => {
        api.schemes.stats()
            .then(setStats)
            .catch(() => {});
    }, []);

    // Load schemes on filter changes
    useEffect(() => {
        setSchemes(null);
        const timer = setTimeout(() => {
            const queryParams = {
                q: f.q || undefined,
                category: f.category || undefined,
                state: f.state || undefined,
                level: f.level || undefined,
                sdg: f.sdg && f.sdg !== "All SDGs" ? f.sdg : undefined,
                beneficiaryType: f.beneficiaryType && f.beneficiaryType !== "All Beneficiaries" ? f.beneficiaryType : undefined,
                age: f.age ? parseInt(f.age, 10) : undefined,
                income: f.income ? parseInt(f.income, 10) : undefined,
                status: f.status && f.status !== "all" ? f.status : undefined,
                provider: f.provider || undefined
            };

            api.schemes.list(queryParams)
                .then((data) => {
                    setSchemes(data);
                    setError(null);
                })
                .catch(() => {
                    setError("Could not load schemes. Please make sure the backend is running.");
                });
        }, 200);

        return () => clearTimeout(timer);
    }, [f.q, f.category, f.state, f.level, f.sdg, f.beneficiaryType, f.age, f.income, f.status, f.provider]); // eslint-disable-line react-hooks/exhaustive-deps

    // Load eligibility statuses if user is signed in
    useEffect(() => {
        if (user) {
            api.eligibility.results()
                .then((r) => setStatusMap(Object.fromEntries(r.map((x) => [x.schemeId, x.status]))))
                .catch(() => {});
        }
    }, [user]);

    const activeFilterCount = [f.category, f.state, f.level, f.sdg, f.beneficiaryType, f.age, f.income, f.provider]
        .filter(Boolean)
        .filter(v => v !== "All SDGs" && v !== "All Beneficiaries").length;

    // Pagination slice
    const totalCount = schemes ? schemes.length : 0;
    const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));
    const paginatedSchemes = useMemo(() => {
        if (!schemes) return [];
        const start = (page - 1) * PAGE_SIZE;
        return schemes.slice(start, start + PAGE_SIZE);
    }, [schemes, page]);

    return (
        <Page className="max-w-7xl">
            {/* Informational Organizer Notice */}
            <div className="mb-6 rounded-2xl border border-teal-200/80 bg-gradient-to-r from-teal-50 via-cyan-50/40 to-slate-50 p-4 sm:p-5 shadow-xs">
                <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-600 text-white shadow">
                        <Info className="h-5 w-5" />
                    </div>
                    <div>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="font-bold text-teal-950 text-base">National Government Scheme Discovery Platform</span>
                            <span className="rounded-full bg-teal-600/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-teal-800">
                                Open Public Access · No Login Required
                            </span>
                        </div>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-slate-700">
                            Because government schemes often lack public awareness, Entitle organizes and indexes genuine Central and State government welfare schemes in one clean place. 
                            <strong> Applications cannot be filed on Entitle</strong> — click on any scheme to view requirements, test eligibility, check off documents, and jump straight to the official government portal to apply.
                        </p>
                    </div>
                </div>
            </div>

            {/* Header with Stats Highlights */}
            <div className="mb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <PageHeader
                    eyebrow="Verified Public Welfare Catalog"
                    title="Explore Government Schemes"
                    sub="Filter across all 28 States, 8 UTs, Central Ministries, and 10 SDG-aligned welfare categories."
                />
                {stats && (
                    <div className="flex items-center gap-2 self-start sm:self-auto bg-white border border-slate-200 rounded-xl p-2.5 shadow-xs">
                        <div className="text-right">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">Verified Schemes</span>
                            <span className="text-lg font-black text-slate-900 block leading-tight">{stats.totalSchemes} Initiatives</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Main 10 Category Navigation Bar */}
            <div className="mb-6">
                <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
                    <button
                        onClick={() => setF("category", "")}
                        className={`whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-bold transition-all shrink-0 ${
                            !f.category
                                ? "bg-[#0a192f] text-white shadow-md shadow-slate-900/10"
                                : "border border-slate-200 bg-white text-slate-700 hover:border-teal-400 hover:bg-slate-50"
                        }`}
                    >
                        All Categories ({stats ? stats.totalSchemes : "107"})
                    </button>
                    {CATEGORIES.map((cat) => {
                        const isSelected = f.category === cat;
                        const count = stats?.categories?.[cat] || 0;
                        return (
                            <button
                                key={cat}
                                onClick={() => setF("category", cat)}
                                className={`whitespace-nowrap rounded-xl px-3.5 py-2 text-xs font-bold transition-all shrink-0 flex items-center gap-1.5 ${
                                    isSelected
                                        ? "bg-[#0a192f] text-white shadow-md shadow-slate-900/10"
                                        : "border border-slate-200 bg-white text-slate-700 hover:border-teal-400 hover:bg-slate-50"
                                }`}
                            >
                                <span>{cat}</span>
                                {count > 0 && (
                                    <span className={`rounded-full px-1.5 py-0.2 text-[10px] font-extrabold ${isSelected ? "bg-teal-400 text-[#0a192f]" : "bg-slate-100 text-slate-600"}`}>
                                        {count}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Advanced Discovery & Filter Engine */}
            <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                {/* Search Bar */}
                <div className="relative">
                    <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                    <input
                        value={f.q}
                        onChange={(e) => setF("q", e.target.value)}
                        placeholder="Search schemes by name, keyword, ministry, or beneficiary (e.g., student loan, PM Mudra, farmer subsidy, Karnataka Gruha Lakshmi)..."
                        className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-10 text-sm sm:text-base placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                        data-testid="scheme-search-input"
                    />
                    {f.q && (
                        <button
                            onClick={() => setF("q", "")}
                            className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    )}
                </div>

                {/* Filter Dropdowns & Selectors */}
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-6">
                    {/* Level Filter (Central vs State) */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Govt Level</label>
                        <select
                            aria-label="Level"
                            value={f.level}
                            onChange={(e) => setF("level", e.target.value)}
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm focus:border-teal-500 focus:outline-none"
                            data-testid="filter-level"
                        >
                            <option value="">Central + State</option>
                            <option value="Central">Central Govt Only</option>
                            <option value="State">State Govt Only</option>
                        </select>
                    </div>

                    {/* State Filter (Karnataka Prioritized) */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">State / Territory</label>
                        <select
                            aria-label="State"
                            value={f.state}
                            onChange={(e) => setF("state", e.target.value)}
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm focus:border-teal-500 focus:outline-none"
                            data-testid="filter-state"
                        >
                            <option value="">All States & Central</option>
                            {STATES.map((s) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>

                    {/* SDG Filter */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">UN SDG Mapping</label>
                        <select
                            aria-label="SDG"
                            value={f.sdg}
                            onChange={(e) => setF("sdg", e.target.value)}
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm focus:border-teal-500 focus:outline-none"
                            data-testid="filter-sdg"
                        >
                            {SDGS.map((sdg) => (
                                <option key={sdg} value={sdg}>{sdg}</option>
                            ))}
                        </select>
                    </div>

                    {/* Target Beneficiary Filter */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Beneficiary Group</label>
                        <select
                            aria-label="Beneficiary"
                            value={f.beneficiaryType}
                            onChange={(e) => setF("beneficiaryType", e.target.value)}
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm focus:border-teal-500 focus:outline-none"
                            data-testid="filter-beneficiary"
                        >
                            {BENEFICIARIES.map((b) => (
                                <option key={b} value={b}>{b}</option>
                            ))}
                        </select>
                    </div>

                    {/* Annual Income Filter */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Annual Income</label>
                        <select
                            aria-label="Annual Income"
                            value={f.income}
                            onChange={(e) => setF("income", e.target.value)}
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm focus:border-teal-500 focus:outline-none"
                            data-testid="filter-income"
                        >
                            {INCOME_OPTIONS.map((opt) => (
                                <option key={opt.label} value={opt.value}>{opt.label}</option>
                            ))}
                        </select>
                    </div>

                    {/* Age Preset Filter */}
                    <div>
                        <label className="block text-xs font-semibold text-slate-600 mb-1">Target Age</label>
                        <select
                            aria-label="Age Preset"
                            value={f.age}
                            onChange={(e) => setF("age", e.target.value)}
                            className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-xs sm:text-sm focus:border-teal-500 focus:outline-none"
                            data-testid="filter-age"
                        >
                            {AGE_PRESETS.map((a) => (
                                <option key={a.label} value={a.value}>{a.label}</option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Active Filter Chips Bar */}
                {(activeFilterCount > 0 || f.q) && (
                    <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-slate-100 pt-3">
                        <span className="text-xs font-semibold text-slate-500">Active filters:</span>
                        {f.q && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-800">
                                Keyword: "{f.q}"
                                <button onClick={() => setF("q", "")}><X className="h-3 w-3 hover:text-red-500" /></button>
                            </span>
                        )}
                        {f.category && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-teal-50 px-2.5 py-0.5 text-xs text-teal-800 border border-teal-200">
                                Category: {f.category}
                                <button onClick={() => setF("category", "")}><X className="h-3 w-3 hover:text-red-500" /></button>
                            </span>
                        )}
                        {f.level && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-800 border border-slate-200">
                                Level: {f.level}
                                <button onClick={() => setF("level", "")}><X className="h-3 w-3 hover:text-red-500" /></button>
                            </span>
                        )}
                        {f.state && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-0.5 text-xs text-amber-800 border border-amber-200">
                                State: {f.state}
                                <button onClick={() => setF("state", "")}><X className="h-3 w-3 hover:text-red-500" /></button>
                            </span>
                        )}
                        {f.sdg && f.sdg !== "All SDGs" && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2.5 py-0.5 text-xs text-blue-800 border border-blue-200">
                                {f.sdg}
                                <button onClick={() => setF("sdg", "")}><X className="h-3 w-3 hover:text-red-500" /></button>
                            </span>
                        )}
                        {f.beneficiaryType && f.beneficiaryType !== "All Beneficiaries" && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-purple-50 px-2.5 py-0.5 text-xs text-purple-800 border border-purple-200">
                                Beneficiary: {f.beneficiaryType}
                                <button onClick={() => setF("beneficiaryType", "")}><X className="h-3 w-3 hover:text-red-500" /></button>
                            </span>
                        )}
                        {f.income && (
                            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs text-emerald-800 border border-emerald-200">
                                Income: ≤ ₹{parseInt(f.income, 10).toLocaleString("en-IN")}
                                <button onClick={() => setF("income", "")}><X className="h-3 w-3 hover:text-red-500" /></button>
                            </span>
                        )}
                        <button
                            onClick={clearAll}
                            className="ml-auto text-xs font-bold text-teal-700 hover:text-teal-900 underline"
                            data-testid="filter-clear"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}
            </div>

            {/* Error Message */}
            {error && (
                <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700" role="alert">
                    {error}
                </div>
            )}

            {/* Results Grid and Pagination */}
            {!schemes ? (
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {[...Array(6)].map((_, i) => (
                        <Skeleton key={i} className="h-80 rounded-2xl" />
                    ))}
                </div>
            ) : schemes.length === 0 ? (
                <EmptyState
                    icon={SearchX}
                    testId="schemes-empty"
                    title="No schemes match these exact filters"
                    text="Try selecting a broader category, adjusting the age/income filters, or searching by a different keyword."
                    action={
                        <button
                            onClick={clearAll}
                            className="inline-flex items-center gap-1.5 rounded-full bg-[#0a192f] px-5 py-2.5 text-sm font-semibold text-white hover:bg-teal-700 transition-colors"
                        >
                            Reset All Filters
                        </button>
                    }
                />
            ) : (
                <>
                    <div className="mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
                        <p className="text-sm font-semibold text-slate-700" data-testid="schemes-count">
                            Showing <span className="font-bold text-slate-900">{Math.min(schemes.length, (page - 1) * PAGE_SIZE + 1)}–{Math.min(schemes.length, page * PAGE_SIZE)}</span> of <span className="font-black text-slate-900">{schemes.length}</span> verified scheme{schemes.length > 1 ? "s" : ""}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                            <span>Page <strong>{page}</strong> of <strong>{totalPages}</strong></span>
                        </div>
                    </div>

                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {paginatedSchemes.map((s) => (
                            <SchemeCard key={s.id} s={s} status={statusMap[s.id]} />
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="mt-8 flex items-center justify-center gap-2">
                            <button
                                type="button"
                                onClick={() => setPage((p) => Math.max(1, p - 1))}
                                disabled={page === 1}
                                className="inline-flex items-center gap-1 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 disabled:opacity-40 hover:bg-slate-50 transition-colors shadow-2xs"
                            >
                                <ChevronLeft className="h-4 w-4" /> Previous
                            </button>

                            <div className="flex items-center gap-1">
                                {[...Array(totalPages)].map((_, idx) => {
                                    const pageNum = idx + 1;
                                    // Only show pages close to current
                                    if (pageNum === 1 || pageNum === totalPages || Math.abs(pageNum - page) <= 2) {
                                        return (
                                            <button
                                                key={pageNum}
                                                type="button"
                                                onClick={() => setPage(pageNum)}
                                                className={`h-9 w-9 rounded-xl text-xs font-bold transition-all ${
                                                    page === pageNum
                                                        ? "bg-[#0a192f] text-white shadow-xs"
                                                        : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                                                }`}
                                            >
                                                {pageNum}
                                            </button>
                                        );
                                    }
                                    if (pageNum === 2 && page > 4) {
                                        return <span key="ellipsis-1" className="px-1 text-slate-400">...</span>;
                                    }
                                    if (pageNum === totalPages - 1 && page < totalPages - 3) {
                                        return <span key="ellipsis-2" className="px-1 text-slate-400">...</span>;
                                    }
                                    return null;
                                })}
                            </div>

                            <button
                                type="button"
                                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                                disabled={page === totalPages}
                                className="inline-flex items-center gap-1 rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-700 disabled:opacity-40 hover:bg-slate-50 transition-colors shadow-2xs"
                            >
                                Next <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    )}
                </>
            )}
        </Page>
    );
}
