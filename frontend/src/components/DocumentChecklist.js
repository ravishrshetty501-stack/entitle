import React, { useState, useEffect } from "react";
import { CheckCircle2, Circle, RotateCcw, AlertTriangle, FileCheck, FileWarning, Sparkles } from "lucide-react";
import { toast } from "sonner";

export default function DocumentChecklist({ documents = [], schemeId }) {
    const storageKey = `entitle_doc_check_${schemeId}`;

    const [checkedDocs, setCheckedDocs] = useState(() => {
        try {
            const saved = localStorage.getItem(storageKey);
            return saved ? JSON.parse(saved) : {};
        } catch (e) {
            return {};
        }
    });

    const [filter, setFilter] = useState("all"); // 'all' | 'mandatory' | 'conditional'

    useEffect(() => {
        try {
            localStorage.setItem(storageKey, JSON.stringify(checkedDocs));
        } catch (e) {
            console.error("Failed to save document checklist state:", e);
        }
    }, [checkedDocs, storageKey]);

    const toggleDoc = (docName) => {
        setCheckedDocs((prev) => {
            const next = { ...prev, [docName]: !prev[docName] };
            if (next[docName]) {
                toast.success(`Marked "${docName}" as ready`);
            } else {
                toast.info(`Marked "${docName}" as missing / pending`);
            }
            return next;
        });
    };

    const resetChecklist = () => {
        setCheckedDocs({});
        localStorage.removeItem(storageKey);
        toast.info("Document checklist has been reset");
    };

    const markAllReady = () => {
        const all = {};
        documents.forEach((d) => {
            all[d.name] = true;
        });
        setCheckedDocs(all);
        toast.success("All documents marked as ready");
    };

    const totalCount = documents.length;
    const readyCount = documents.filter((d) => checkedDocs[d.name]).length;
    const progressPercent = totalCount > 0 ? Math.round((readyCount / totalCount) * 100) : 0;
    const mandatoryCount = documents.filter((d) => d.mandatory !== false).length;
    const conditionalCount = documents.filter((d) => d.mandatory === false).length;

    const filteredDocs = documents.filter((d) => {
        if (filter === "mandatory") return d.mandatory !== false;
        if (filter === "conditional") return d.mandatory === false;
        return true;
    });

    if (!documents || documents.length === 0) {
        return (
            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50 p-6 text-center text-slate-500">
                No specific documents listed for this scheme. Check the official portal for requirements.
            </div>
        );
    }

    return (
        <div className="space-y-5" data-testid="interactive-document-checklist">
            {/* Interactive Progress Bar & Summary Card */}
            <div className="rounded-2xl border border-[#BBF7D0] bg-gradient-to-br from-teal-50/80 via-white to-cyan-50/60 p-5 shadow-xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#07966B] text-white font-bold text-xs shadow-xs">
                                âœ“
                            </span>
                            <h3 className="font-bold text-slate-900 text-base">
                                Document Readiness Tracker
                            </h3>
                        </div>
                        <p className="mt-1 text-xs sm:text-sm text-slate-600">
                            Check off documents as you gather them to ensure a smooth application.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 self-stretch sm:self-auto justify-between sm:justify-end">
                        <button
                            type="button"
                            onClick={markAllReady}
                            className="rounded-lg border border-teal-300 bg-white px-3 py-1.5 text-xs font-semibold text-[#046C4E] hover:bg-[#F0FDF4] transition-colors"
                        >
                            Mark All Ready
                        </button>
                        <button
                            type="button"
                            onClick={resetChecklist}
                            className="inline-flex items-center gap-1 rounded-lg border border-[#E8E3D9] bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
                            title="Reset all checkmarks"
                        >
                            <RotateCcw className="h-3.5 w-3.5" /> Reset
                        </button>
                    </div>
                </div>

                {/* Progress bar */}
                <div className="mt-4">
                    <div className="flex justify-between items-center text-xs font-bold mb-1.5">
                        <span className="text-[#064E3B] font-semibold flex items-center gap-1.5">
                            {readyCount === totalCount ? (
                                <>
                                    <Sparkles className="h-4 w-4 text-emerald-600" />
                                    <span className="text-emerald-700">All required documents ready!</span>
                                </>
                            ) : (
                                <>Documents Ready: <span className="text-[#046C4E] font-extrabold">{readyCount}</span> of {totalCount}</>
                            )}
                        </span>
                        <span className="text-slate-500 font-semibold">{progressPercent}% Completed</span>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200/80">
                        <div
                            className={`h-full transition-all duration-500 ${readyCount === totalCount
                                    ? "bg-emerald-500"
                                    : progressPercent > 50
                                        ? "bg-[#07966B]"
                                        : "bg-[#07966B]"
                                }`}
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                </div>

                {/* Preparation Disclaimer */}
                <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-amber-200 bg-amber-50/70 p-3 text-xs text-amber-900">
                    <AlertTriangle className="h-4 w-4 shrink-0 text-amber-600 mt-0.5" />
                    <p className="leading-relaxed">
                        <strong>Preparation Note:</strong> Marking a document as ready here is for your personal application checklist and does not constitute official verification or approval by the government. Always bring original physical documents and required photocopies to the designated office or upload clear scans on the official portal.
                    </p>
                </div>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-2 border-b border-[#E8E3D9] pb-2 text-xs font-semibold">
                <button
                    type="button"
                    onClick={() => setFilter("all")}
                    className={`rounded-lg px-3 py-1.5 transition-colors ${filter === "all"
                            ? "bg-[#101B30] text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                >
                    All Documents ({totalCount})
                </button>
                <button
                    type="button"
                    onClick={() => setFilter("mandatory")}
                    className={`rounded-lg px-3 py-1.5 transition-colors ${filter === "mandatory"
                            ? "bg-[#101B30] text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                >
                    Mandatory ({mandatoryCount})
                </button>
                {conditionalCount > 0 && (
                    <button
                        type="button"
                        onClick={() => setFilter("conditional")}
                        className={`rounded-lg px-3 py-1.5 transition-colors ${filter === "conditional"
                                ? "bg-[#101B30] text-white"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                    >
                        Conditional / As Applicable ({conditionalCount})
                    </button>
                )}
            </div>

            {/* Document Cards List */}
            <div className="grid gap-3.5">
                {filteredDocs.map((doc, idx) => {
                    const isReady = !!checkedDocs[doc.name];
                    const isMandatory = doc.mandatory !== false;

                    return (
                        <div
                            key={doc.name || idx}
                            onClick={() => toggleDoc(doc.name)}
                            className={`cursor-pointer rounded-xl border p-4 transition-all ${isReady
                                    ? "border-emerald-300 bg-emerald-50/40 shadow-xs"
                                    : "border-[#E8E3D9] bg-white hover:border-teal-300 hover:bg-slate-50/50 shadow-xs"
                                }`}
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-start gap-3 flex-1">
                                    <button
                                        type="button"
                                        aria-label={`Toggle ${doc.name}`}
                                        className="mt-0.5 shrink-0 focus:outline-hidden"
                                    >
                                        {isReady ? (
                                            <CheckCircle2 className="h-5 w-5 text-emerald-600 fill-emerald-100" />
                                        ) : (
                                            <Circle className="h-5 w-5 text-slate-300 hover:text-[#07966B]" />
                                        )}
                                    </button>

                                    <div className="space-y-1.5 flex-1">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className={`font-bold text-sm sm:text-base ${isReady ? "text-emerald-950" : "text-slate-900"}`}>
                                                {doc.name}
                                            </span>
                                            {isMandatory ? (
                                                <span className="rounded-md bg-rose-50 border border-rose-200 px-2 py-0.5 text-[11px] font-bold text-rose-700">
                                                    Mandatory
                                                </span>
                                            ) : (
                                                <span className="rounded-md bg-blue-50 border border-blue-200 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
                                                    Conditional / As Applicable
                                                </span>
                                            )}
                                            {isReady ? (
                                                <span className="inline-flex items-center gap-1 rounded-md bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-800">
                                                    <FileCheck className="h-3 w-3" /> Ready
                                                </span>
                                            ) : (
                                                <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                                                    <FileWarning className="h-3 w-3 text-slate-400" /> Pending
                                                </span>
                                            )}
                                        </div>

                                        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                            <strong className="text-slate-900 font-semibold">Purpose:</strong> {doc.why}
                                        </p>

                                        {/* Document specifications grid */}
                                        <div className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-100 text-xs text-slate-600">
                                            {doc.issuingAuthority && (
                                                <div>
                                                    <span className="text-slate-400 font-medium block">Issuing Authority:</span>
                                                    <span className="font-semibold text-slate-800">{doc.issuingAuthority}</span>
                                                </div>
                                            )}
                                            {doc.format && (
                                                <div>
                                                    <span className="text-slate-400 font-medium block">Accepted Format:</span>
                                                    <span className="font-semibold text-slate-800">{doc.format}</span>
                                                </div>
                                            )}
                                            {doc.validity && (
                                                <div>
                                                    <span className="text-slate-400 font-medium block">Validity Period:</span>
                                                    <span className="font-semibold text-slate-800">{doc.validity}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

