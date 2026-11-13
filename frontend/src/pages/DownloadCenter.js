import React, { useState, useEffect } from "react";
import {
    DownloadCloud,
    CheckCircle2,
    HardDrive,
    RefreshCw,
    Wifi,
    WifiOff,
    Sparkles,
    Trash2,
    Layers,
    FileCheck,
    Mic,
    Shield
} from "lucide-react";
import { Page } from "@/components/Layout";
import {
    getAllOfflineSchemes,
    saveSchemesToOfflineDB,
    getSyncMeta,
    setSyncMeta,
    getStorageEstimate,
    clearAllLocalData
} from "@/lib/offlineDb";
import { api } from "@/lib/api";
import { toast } from "sonner";

export default function DownloadCenter() {
    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [isSyncing, setIsSyncing] = useState(false);
    const [schemesCount, setSchemesCount] = useState(0);
    const [lastSync, setLastSync] = useState(null);
    const [storage, setStorage] = useState({ usageMB: "0.00", quotaMB: "100.00", percent: 0 });

    const [downloadedPacks, setDownloadedPacks] = useState({
        allSchemes: false,
        karnatakaPack: false,
        sdgPack: false,
        ocrEngine: true,
        voicePacks: true
    });

    const refreshStatus = async () => {
        try {
            const schemes = await getAllOfflineSchemes();
            setSchemesCount(schemes.length);
            const syncTime = await getSyncMeta("last_sync");
            setLastSync(syncTime);
            const est = await getStorageEstimate();
            setStorage(est);
            if (schemes.length > 0) {
                setDownloadedPacks(prev => ({
                    ...prev,
                    allSchemes: true,
                    karnatakaPack: schemes.some(s => s.state === "Karnataka"),
                    sdgPack: schemes.some(s => s.sdg === "SDG 2" || s.sdg === "SDG 3")
                }));
            }
        } catch (err) {
            console.error("Failed to load sync status:", err);
        }
    };

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        refreshStatus();
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    const handleSyncAllSchemes = async () => {
        if (!navigator.onLine) {
            toast.error("You are currently offline. Connect to the internet to sync updates.");
            return;
        }

        setIsSyncing(true);
        try {
            toast.info("Downloading latest scheme database (107 schemes)...");
            const schemes = await api.schemes.list();
            if (schemes && schemes.length > 0) {
                await saveSchemesToOfflineDB(schemes);
                await setSyncMeta("last_sync", new Date().toISOString());
                toast.success(`Successfully downloaded ${schemes.length} schemes for offline usage!`);
            } else {
                toast.warning("Server returned no schemes.");
            }
            await refreshStatus();
        } catch (err) {
            console.error("Sync error:", err);
            toast.error("Failed to download schemes from server.");
        } finally {
            setIsSyncing(false);
        }
    };

    const handleClearOfflineCache = async () => {
        if (window.confirm("Clear all downloaded offline schemes and cache? (Your encrypted document vault will remain safe unless cleared separately).")) {
            try {
                await clearAllLocalData();
                setSchemesCount(0);
                setLastSync(null);
                setDownloadedPacks({
                    allSchemes: false,
                    karnatakaPack: false,
                    sdgPack: false,
                    ocrEngine: true,
                    voicePacks: true
                });
                const est = await getStorageEstimate();
                setStorage(est);
                toast.success("Offline cache cleared.");
            } catch (e) {
                toast.error("Failed to clear offline cache.");
            }
        }
    };

    return (
        <Page className="max-w-5xl py-8">
            {/* Header */}
            <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-5">
                <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-teal-200 bg-teal-50 px-3 py-1 text-xs font-bold text-teal-800">
                        <DownloadCloud className="h-3.5 w-3.5 text-teal-600" />
                        ENTITLE Offline Data Hub
                    </div>
                    <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold text-[#0a192f] tracking-tight">
                        Offline Download Center
                    </h1>
                    <p className="mt-1 text-xs sm:text-sm text-slate-600">
                        Download government scheme packs, voice language models, and OCR engines so you can explore benefits without an internet connection.
                    </p>
                </div>

                {/* Connectivity Status & Sync Now */}
                <div className="flex items-center gap-3 self-start md:self-auto">
                    <div className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold border ${isOnline
                        ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                        : "bg-amber-50 text-amber-800 border-amber-200"
                        }`}>
                        {isOnline ? <Wifi className="h-4 w-4 text-emerald-600" /> : <WifiOff className="h-4 w-4 text-amber-600" />}
                        {isOnline ? "Online • Ready to Sync" : "Offline Mode"}
                    </div>

                    <button
                        onClick={handleSyncAllSchemes}
                        disabled={isSyncing || !isOnline}
                        data-testid="sync-now-button"
                        className="inline-flex items-center gap-2 rounded-xl bg-[#0a192f] px-4 py-2 text-xs sm:text-sm font-bold text-white hover:bg-teal-700 transition-colors disabled:opacity-40 shadow-xs"
                    >
                        <RefreshCw className={`h-4 w-4 ${isSyncing ? "animate-spin" : ""}`} />
                        {isSyncing ? "Syncing..." : "Sync Now"}
                    </button>
                </div>
            </div>

            {/* Storage & Sync Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Schemes Stored Offline</span>
                    <div className="mt-2 flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold text-[#0a192f]">{schemesCount}</span>
                        <span className="text-xs text-slate-400">of 107 verified</span>
                    </div>
                    <p className="mt-1 text-xs text-slate-500">Includes complete eligibility & document rules</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Last Synchronized</span>
                    <div className="mt-2 text-sm font-bold text-slate-800">
                        {lastSync ? new Date(lastSync).toLocaleString([], { dateStyle: "medium", timeStyle: "short" }) : "Not yet synced"}
                    </div>
                    <p className="mt-1 text-xs text-teal-700 font-medium">Catalog Release: 2026.1 (107 Schemes)</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs">
                    <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider block">Device Storage</span>
                        <span className="text-xs font-bold text-slate-700">{storage.usageMB} MB / {storage.quotaMB} MB</span>
                    </div>
                    <div className="mt-2 h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                        <div className="h-full bg-teal-600 rounded-full" style={{ width: `${Math.max(5, storage.percent)}%` }} />
                    </div>
                    <p className="mt-1 text-xs text-slate-400">{storage.percent}% of browser quota</p>
                </div>
            </div>

            {/* Downloadable Offline Data Packs */}
            <h2 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Layers className="h-5 w-5 text-teal-600" />
                Available Offline Intelligence Packs
            </h2>

            <div className="space-y-3 mb-8">
                {/* Pack 1: Complete 107 Scheme Directory */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-teal-50 text-teal-700">
                            <Layers className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base">All-India Scheme Catalog</h3>
                                <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[10px] font-bold text-teal-800 border border-teal-200">107 Schemes</span>
                            </div>
                            <p className="text-xs text-slate-600 mt-1 max-w-xl">
                                Full Central and State schemes across all 10 categories: SDG 2/3, Agriculture, Women, Education, Housing, Social Welfare. Approx 2.4 MB.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {downloadedPacks.allSchemes ? (
                            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                                <CheckCircle2 className="h-4 w-4" /> Downloaded
                            </span>
                        ) : (
                            <button
                                onClick={handleSyncAllSchemes}
                                disabled={!isOnline}
                                className="rounded-xl bg-teal-600 px-4 py-2 text-xs font-bold text-white hover:bg-teal-700 disabled:opacity-40"
                            >
                                Download Pack
                            </button>
                        )}
                    </div>
                </div>

                {/* Pack 2: Karnataka Flagship Welfare Pack */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-amber-50 text-amber-700">
                            <FileCheck className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Karnataka Flagship Welfare Pack</h3>
                                <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-800 border border-amber-200">State Priority</span>
                            </div>
                            <p className="text-xs text-slate-600 mt-1 max-w-xl">
                                Gruha Lakshmi (₹2,000/mo), Yuva Nidhi, Shakti Scheme (Free bus travel), Anna Bhagya (10 kg grain/cash), and Gruha Jyothi (200 units free power).
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                            <CheckCircle2 className="h-4 w-4" /> Included in Catalog
                        </span>
                    </div>
                </div>

                {/* Pack 3: Regional Voice Models */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-50 text-indigo-700">
                            <Mic className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Regional Voice & Speech Engine</h3>
                                <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-bold text-indigo-800 border border-indigo-200">3 Languages</span>
                            </div>
                            <p className="text-xs text-slate-600 mt-1 max-w-xl">
                                Offline speech recognition and speech synthesis configuration for English (en-IN), Hindi (hi-IN), and Kannada (kn-IN).
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                            <CheckCircle2 className="h-4 w-4" /> Ready On Device
                        </span>
                    </div>
                </div>

                {/* Pack 4: Offline Document OCR Engine */}
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-purple-50 text-purple-700">
                            <Shield className="h-5 w-5" />
                        </div>
                        <div>
                            <div className="flex items-center gap-2">
                                <h3 className="font-bold text-slate-900 text-sm sm:text-base">Document Intelligence OCR WebWorker</h3>
                                <span className="rounded-full bg-purple-50 px-2 py-0.5 text-[10px] font-bold text-purple-800 border border-purple-200">Tesseract WASM</span>
                            </div>
                            <p className="text-xs text-slate-600 mt-1 max-w-xl">
                                Recognizes Aadhaar, Income certificates, RD numbers, Tahsildar seals, and BPL ration cards offline inside browser workers.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                            <CheckCircle2 className="h-4 w-4" /> Active
                        </span>
                    </div>
                </div>
            </div>

            {/* Cache Reset / Purge Option */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-5 flex items-center justify-between">
                <div>
                    <h3 className="text-sm font-bold text-slate-900">Purge Offline Catalog Cache</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Clears cached scheme records to force a fresh redownload.</p>
                </div>
                <button
                    onClick={handleClearOfflineCache}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs font-bold text-rose-700 hover:bg-rose-50"
                >
                    <Trash2 className="h-3.5 w-3.5" /> Clear Offline Cache
                </button>
            </div>
        </Page>
    );
}

