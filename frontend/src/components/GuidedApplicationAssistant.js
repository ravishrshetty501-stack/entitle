import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import {
    ArrowRight,
    ArrowLeft,
    CheckCircle2,
    AlertCircle,
    FileText,
    ExternalLink,
    Building2,
    ShieldAlert,
    Compass,
    X,
    Clock,
    AlertTriangle
} from "lucide-react";

export default function GuidedApplicationAssistant({ isOpen, onClose, scheme }) {
    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 5;

    if (!scheme) return null;

    const steps = [
        {
            num: 1,
            title: "Eligibility Check",
            short: "Check Criteria"
        },
        {
            num: 2,
            title: "Document Kit",
            short: "Gather Docs"
        },
        {
            num: 3,
            title: "Portal & Steps",
            short: "Fill Form"
        },
        {
            num: 4,
            title: "Avoid Mistakes",
            short: "Common Traps"
        },
        {
            num: 5,
            title: "Submission & Tracking",
            short: "Track Status"
        }
    ];

    const handleNext = () => {
        if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
    };

    const handlePrev = () => {
        if (currentStep > 1) setCurrentStep((prev) => prev - 1);
    };

    const targetUrl = scheme.applicationUrl || scheme.officialUrl || scheme.sourceUrl;

    return (
        <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto p-0 rounded-2xl bg-white border border-[#E8E3D9] shadow-2xl">
                {/* Header */}
                <div className="bg-[#101B30] text-white p-6 rounded-t-2xl sticky top-0 z-10">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#07966B] text-[#101B30] font-extrabold shadow">
                                <Compass className="h-5 w-5" />
                            </span>
                            <div>
                                <span className="text-[11px] font-bold uppercase tracking-wider text-[#10B981]">
                                    Step-by-Step Application Guide
                                </span>
                                <DialogTitle className="text-lg font-bold text-white">
                                    How to Apply: {scheme.name || scheme.title}
                                </DialogTitle>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="rounded-full p-1.5 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
                            aria-label="Close"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Step progress pills */}
                    <div className="mt-5 grid grid-cols-5 gap-2">
                        {steps.map((s) => (
                            <button
                                key={s.num}
                                onClick={() => setCurrentStep(s.num)}
                                className={`text-left rounded-lg p-2 transition-all ${currentStep === s.num
                                        ? "bg-[#07966B]/20 border border-teal-400 text-[#34D399]"
                                        : currentStep > s.num
                                            ? "bg-white/10 text-emerald-400 border border-transparent"
                                            : "bg-white/5 text-slate-400 border border-transparent hover:bg-white/10"
                                    }`}
                            >
                                <div className="text-[10px] font-bold uppercase opacity-80">
                                    Step {s.num}
                                </div>
                                <div className="text-xs font-semibold truncate hidden sm:block">
                                    {s.short}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-6">
                    {/* Important Official Portal Disclaimer */}
                    <div className="rounded-xl border border-[#BBF7D0] bg-[#F0FDF4]/60 p-4 text-xs text-[#064E3B] flex items-start gap-2.5">
                        <AlertCircle className="h-4 w-4 shrink-0 text-[#046C4E] mt-0.5" />
                        <p className="leading-relaxed">
                            <strong>Notice:</strong> ADIKHAR provides this interactive guide to help you prepare and navigate government portals with ease. <strong>ADIKHAR does not submit applications on your behalf.</strong> Your actual application must be submitted directly through the authorized government portal or designated government office.
                        </p>
                    </div>

                    {/* Step 1: Eligibility Pre-Requisites */}
                    {currentStep === 1 && (
                        <div className="space-y-4">
                            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#101B30] text-white text-xs font-bold">1</span>
                                Confirm That You Meet the Requirements
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Before opening the government portal, ensure you satisfy all core mandatory criteria for <strong>{scheme.name}</strong>.
                            </p>

                            {/* Mandatory conditions */}
                            {scheme.mandatoryConditions?.length > 0 && (
                                <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-4 space-y-2">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                                        Mandatory Conditions (Must Satisfy All)
                                    </h4>
                                    <ul className="space-y-2 text-sm text-slate-700">
                                        {scheme.mandatoryConditions.map((cond, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                                                <span>{cond}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {/* Eligibility Summary Cards */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                <div className="rounded-xl border border-[#E8E3D9] bg-slate-50 p-3">
                                    <span className="font-semibold text-slate-500 block">Age Requirement</span>
                                    <span className="font-bold text-slate-900 text-sm mt-0.5 block">
                                        {scheme.detailedEligibility?.ageRequirement || (scheme.minAge ? `${scheme.minAge}+ years` : "No specific age limit")}
                                    </span>
                                </div>
                                <div className="rounded-xl border border-[#E8E3D9] bg-slate-50 p-3">
                                    <span className="font-semibold text-slate-500 block">Income Benchmark</span>
                                    <span className="font-bold text-slate-900 text-sm mt-0.5 block">
                                        {scheme.detailedEligibility?.incomeLimit || (scheme.incomeMax ? `Up to â‚¹${scheme.incomeMax.toLocaleString()}/yr` : "No income ceiling")}
                                    </span>
                                </div>
                                <div className="rounded-xl border border-[#E8E3D9] bg-slate-50 p-3">
                                    <span className="font-semibold text-slate-500 block">Geographical Coverage</span>
                                    <span className="font-bold text-slate-900 text-sm mt-0.5 block">
                                        {scheme.stateCoverage || (scheme.level === "Central" ? "All India (Nationwide)" : scheme.state)}
                                    </span>
                                </div>
                                <div className="rounded-xl border border-[#E8E3D9] bg-slate-50 p-3">
                                    <span className="font-semibold text-slate-500 block">Category / Target Group</span>
                                    <span className="font-bold text-slate-900 text-sm mt-0.5 block">
                                        {scheme.detailedEligibility?.casteCategoryRequirement || scheme.category}
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Step 2: Document Kit */}
                    {currentStep === 2 && (
                        <div className="space-y-4">
                            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#101B30] text-white text-xs font-bold">2</span>
                                Prepare Your Document Kit
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Most portals reject or timeout applications if you do not have files scanned in advance. Prepare clear digital copies (PDF/JPG under 200KB) and have original physical copies handy.
                            </p>

                            <div className="space-y-3">
                                {scheme.documents?.map((doc, i) => (
                                    <div key={i} className="rounded-xl border border-[#E8E3D9] p-3.5 bg-slate-50/60 flex items-start gap-3">
                                        <FileText className="h-5 w-5 text-[#07966B] shrink-0 mt-0.5" />
                                        <div className="flex-1 text-xs">
                                            <div className="flex items-center justify-between">
                                                <span className="font-bold text-slate-900 text-sm">{doc.name}</span>
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${doc.mandatory !== false ? "bg-rose-100 text-rose-800" : "bg-blue-100 text-blue-800"}`}>
                                                    {doc.mandatory !== false ? "Mandatory" : "Conditional"}
                                                </span>
                                            </div>
                                            <p className="text-slate-600 mt-1 leading-relaxed">{doc.why}</p>
                                            <div className="mt-1.5 flex flex-wrap gap-2 text-[11px] text-slate-500 font-medium">
                                                <span><strong>Authority:</strong> {doc.issuingAuthority || "Competent Govt Authority"}</span>
                                                <span>â€¢</span>
                                                <span><strong>Format:</strong> {doc.format || "Original / Scanned PDF"}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 3: Portal & Application Steps */}
                    {currentStep === 3 && (
                        <div className="space-y-4">
                            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#101B30] text-white text-xs font-bold">3</span>
                                How to Apply Step-by-Step
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Follow these numbered instructions in order. Keep your mobile phone active for Aadhaar OTP verification.
                            </p>

                            {/* Mode badge */}
                            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-100 p-3 rounded-xl">
                                <Building2 className="h-4 w-4 text-[#07966B]" />
                                <span>Application Mode: <strong>{scheme.applicationMode || "Online & Offline"}</strong></span>
                            </div>

                            {/* Sequential numbered steps */}
                            <div className="space-y-3">
                                {scheme.process?.map((stepText, idx) => (
                                    <div key={idx} className="flex items-start gap-3 rounded-xl border border-[#E8E3D9] p-3 bg-white">
                                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#101B30] text-white font-bold text-xs">
                                            {idx + 1}
                                        </div>
                                        <div className="flex-1 pt-0.5 text-xs sm:text-sm text-slate-800 leading-relaxed">
                                            {stepText}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Offline Office Procedure if available */}
                            {scheme.offlineProcess && (
                                <div className="mt-4 rounded-xl border border-[#BBF7D0] bg-[#F0FDF4]/50 p-4">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#064E3B] flex items-center gap-1.5">
                                        <Building2 className="h-4 w-4 text-[#046C4E]" />
                                        In-Person / Offline Office Submission Procedure
                                    </h4>
                                    <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                                        {scheme.offlineProcess}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 4: Avoid Common Traps */}
                    {currentStep === 4 && (
                        <div className="space-y-4">
                            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-rose-600 text-white text-xs font-bold">4</span>
                                Common Application Mistakes to Avoid
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Government applications are strictly vetted by automated systems. Avoid these common errors that lead to immediate rejection:
                            </p>

                            <div className="space-y-3">
                                {scheme.commonMistakes?.map((mistake, i) => (
                                    <div key={i} className="rounded-xl border border-rose-200 bg-rose-50/50 p-3.5 flex items-start gap-3">
                                        <AlertTriangle className="h-5 w-5 text-rose-600 shrink-0 mt-0.5" />
                                        <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                                            {mistake}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Ineligibility Warning */}
                            {scheme.ineligibility?.length > 0 && (
                                <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 mt-4">
                                    <h4 className="text-xs font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                                        <ShieldAlert className="h-4 w-4 text-amber-700" />
                                        Disqualification Checklist
                                    </h4>
                                    <p className="text-xs text-amber-900 mt-1">
                                        You are strictly excluded from this scheme if:
                                    </p>
                                    <ul className="mt-2 space-y-1.5 text-xs text-slate-700 list-disc list-inside">
                                        {scheme.ineligibility.map((item, idx) => (
                                            <li key={idx}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 5: Submission & Status Tracking */}
                    {currentStep === 5 && (
                        <div className="space-y-4">
                            <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-600 text-white text-xs font-bold">5</span>
                                What to Do After Submitting
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                Follow these post-submission guidelines to track your benefit status and escalate grievances if needed.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                                <div className="rounded-xl border border-[#E8E3D9] bg-slate-50 p-3.5">
                                    <span className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                                        <Clock className="h-4 w-4 text-[#07966B]" /> Processing Timeline
                                    </span>
                                    <p className="mt-1 text-slate-700 leading-relaxed">
                                        {scheme.processingTime || "Standard processing takes 15 to 45 business days upon successful document verification."}
                                    </p>
                                </div>
                                <div className="rounded-xl border border-[#E8E3D9] bg-slate-50 p-3.5">
                                    <span className="font-bold text-slate-900 flex items-center gap-1.5 text-sm">
                                        <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Benefit Delivery
                                    </span>
                                    <p className="mt-1 text-slate-700 leading-relaxed">
                                        {scheme.disbursementMethod || "Direct Benefit Transfer (DBT) to your Aadhaar-seeded bank account."}
                                    </p>
                                </div>
                            </div>

                            {/* Tracking instructions */}
                            {scheme.trackingProcedure && (
                                <div className="rounded-xl border border-[#E8E3D9] bg-white p-4 text-xs sm:text-sm">
                                    <span className="font-bold text-slate-900 block">How to Track Application Status:</span>
                                    <p className="mt-1 text-slate-700 leading-relaxed">{scheme.trackingProcedure}</p>
                                </div>
                            )}

                            {/* Correction procedure */}
                            {scheme.correctionProcedure && (
                                <div className="rounded-xl border border-[#E8E3D9] bg-white p-4 text-xs sm:text-sm">
                                    <span className="font-bold text-slate-900 block">How to Correct Errors / Edit Details:</span>
                                    <p className="mt-1 text-slate-700 leading-relaxed">{scheme.correctionProcedure}</p>
                                </div>
                            )}

                            {/* Official Portal Big CTA */}
                            {targetUrl && (
                                <div className="rounded-2xl border-2 border-[#07966B] bg-[#F0FDF4]/60 p-5 text-center space-y-3">
                                    <p className="font-bold text-slate-900 text-sm">
                                        Ready to Apply on the Government Portal?
                                    </p>
                                    <a
                                        href={targetUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl bg-[#101B30] hover:bg-[#046C4E] px-6 py-3 text-sm font-bold text-white shadow-lg transition-colors"
                                    >
                                        Go to Official Application Portal <ExternalLink className="h-4 w-4 text-[#34D399]" />
                                    </a>
                                    <p className="text-[11px] text-slate-500">
                                        Official URL: {targetUrl}
                                    </p>
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer Controls */}
                <div className="bg-slate-50 border-t border-[#E8E3D9] px-6 py-4 flex items-center justify-between">
                    <button
                        type="button"
                        onClick={handlePrev}
                        disabled={currentStep === 1}
                        className={`inline-flex items-center gap-1.5 rounded-lg px-4 py-2 text-xs font-bold transition-colors ${currentStep === 1
                                ? "text-slate-300 cursor-not-allowed"
                                : "text-slate-700 hover:bg-slate-200 bg-white border border-[#E8E3D9]"
                            }`}
                    >
                        <ArrowLeft className="h-4 w-4" /> Previous
                    </button>

                    <div className="text-xs font-semibold text-slate-500">
                        Step {currentStep} of {totalSteps}
                    </div>

                    {currentStep < totalSteps ? (
                        <button
                            type="button"
                            onClick={handleNext}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-[#101B30] hover:bg-[#046C4E] px-4 py-2 text-xs font-bold text-white shadow transition-colors"
                        >
                            Next Step <ArrowRight className="h-4 w-4" />
                        </button>
                    ) : (
                        <button
                            type="button"
                            onClick={onClose}
                            className="inline-flex items-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 px-4 py-2 text-xs font-bold text-white shadow transition-colors"
                        >
                            Done / Close Guide
                        </button>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}

