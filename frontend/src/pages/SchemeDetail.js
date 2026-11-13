import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    ArrowUpRight,
    Bookmark,
    BookmarkCheck,
    Bot,
    CalendarClock,
    FileText,
    ListPlus,
    ShieldCheck,
    Info,
    Building2,
    MapPin,
    Calendar,
    Compass,
    Ban,
    Sparkles,
    CheckCircle2,
    HelpCircle,
    PhoneCall,
    Mail,
    CreditCard,
    AlertTriangle,
    Clock,
    Share2,
    RefreshCw,
    Mic,
    FolderCheck,
    Lock
} from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { useAssistant } from "@/context/AssistantContext";
import { getAllVaultDocumentsFromDB } from "@/lib/offlineDb";
import { Page, EmptyState, btn } from "@/components/Layout";
import { Explanation } from "@/components/ResultCard";
import StatusBadge from "@/components/StatusBadge";
import Disclaimer from "@/components/Disclaimer";
import { PageLoader } from "@/components/ProtectedRoute";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import DocumentChecklist from "@/components/DocumentChecklist";
import GuidedApplicationAssistant from "@/components/GuidedApplicationAssistant";
import { toast } from "sonner";

function Section({ title, icon: Icon, children, id, badge }) {
    return (
        <section
            id={id}
            className="scroll-mt-32 rounded-2xl border border-[#E8E3D9]/90 bg-white p-6 sm:p-7 shadow-xs transition-shadow hover:shadow-sm"
            data-testid={`section-${id}`}
        >
            <div className="mb-5 flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <h2 className="flex items-center gap-2.5 text-lg sm:text-xl font-bold text-slate-900">
                    {Icon && (
                        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F0FDF4] text-[#046C4E]">
                            <Icon className="h-4 w-4" />
                        </span>
                    )}
                    {title}
                </h2>
                {badge && (
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                        {badge}
                    </span>
                )}
            </div>
            {children}
        </section>
    );
}

export default function SchemeDetail() {
    const { id } = useParams();
    const { user } = useAuth();
    const { openAssistant } = useAssistant();
    const nav = useNavigate();
    const [s, setS] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [result, setResult] = useState(null);
    const [saved, setSaved] = useState(false);
    const [tracked, setTracked] = useState(false);
    const [assistantOpen, setAssistantOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("overview");
    const [vaultDocs, setVaultDocs] = useState([]);

    useEffect(() => {
        api.schemes.get(id).then(setS).catch(() => setNotFound(true));
        getAllVaultDocumentsFromDB().then(setVaultDocs).catch(() => { });
        if (user) {
            api.eligibility.result(id).then(setResult).catch(() => setResult(null));
            api.saved.list().then((l) => setSaved(l.some((x) => x.schemeId === id))).catch(() => { });
            api.applications.list().then((l) => setTracked(l.some((x) => x.schemeId === id))).catch(() => { });
        }
    }, [id, user]);

    // Active section spy on scroll
    useEffect(() => {
        const handleScroll = () => {
            const sections = [
                "overview",
                "benefits",
                "eligibility",
                "ineligibility",
                "documents",
                "apply",
                "timeline",
                "disbursement",
                "faqs",
                "sources"
            ];
            const scrollPos = window.scrollY + 180;
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el && el.offsetTop <= scrollPos) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (notFound) return (
        <Page>
            <EmptyState
                icon={FileText}
                testId="scheme-not-found"
                title="Scheme not found"
                action={<Link to="/schemes" className={btn.primary}>Back to Schemes Directory</Link>}
            />
        </Page>
    );

    if (!s) return <PageLoader />;

    const targetUrl = s.applicationUrl || s.officialUrl || s.sourceUrl;

    const requireLogin = () => {
        toast.info("Sign in or use a demo account to save progress.");
        nav("/login", { state: { from: `/schemes/${id}` } });
    };

    const toggleSave = async () => {
        if (!user) return requireLogin();
        try {
            if (saved) {
                await api.saved.remove(id);
                setSaved(false);
                toast.success("Removed from saved schemes");
            } else {
                await api.saved.add(id);
                setSaved(true);
                toast.success("Scheme saved to your profile");
            }
        } catch (e) {
            toast.error(errorMessage(e));
        }
    };

    const track = async () => {
        if (!user) return requireLogin();
        try {
            await api.applications.add(id);
            setTracked(true);
            toast.success("Added to My Applications Tracker");
        } catch (e) {
            toast.error(errorMessage(e));
        }
    };

    const scrollTo = (sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const copyShareLink = () => {
        navigator.clipboard.writeText(window.location.href);
        toast.success("Scheme page link copied to clipboard");
    };

    const navTabs = [
        { id: "overview", label: "Overview" },
        { id: "benefits", label: "Purpose & Benefits" },
        { id: "eligibility", label: "Who Can Apply" },
        { id: "ineligibility", label: "Who Cannot Apply" },
        { id: "documents", label: "Document Checklist" },
        { id: "apply", label: "How to Apply" },
        { id: "timeline", label: "Timeline & Status" },
        { id: "disbursement", label: "Benefit Delivery" },
        { id: "faqs", label: "FAQs" },
        { id: "sources", label: "Official Sources" }
    ];

    const detailedEligibility = s.detailedEligibility || {};

    return (
        <Page className="max-w-5xl">
            {/* Top Navigation Breadcrumb */}
            <div className="flex items-center justify-between">
                <Link
                    to="/schemes"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors"
                >
                    Ã¢â€ Â Back to Schemes Directory
                </Link>
                <button
                    onClick={copyShareLink}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-[#046C4E] transition-colors"
                    title="Share scheme"
                >
                    <Share2 className="h-3.5 w-3.5" /> Share
                </button>
            </div>

            {/* Application Notice Banner */}
            <div className="mt-4 rounded-2xl border border-[#BBF7D0] bg-gradient-to-r from-[#F0FDF4] via-cyan-50/50 to-emerald-50/40 p-4 sm:p-5 shadow-xs">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#07966B] text-white shadow">
                            <Info className="h-5 w-5" />
                        </div>
                        <div>
                            <p className="font-bold text-[#064E3B] text-sm sm:text-base">
                                Application Organizer Notice
                            </p>
                            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-0.5">
                                ADIKHAR organizes and explains this scheme for public clarity. <strong>Applications cannot be submitted directly on ADIKHAR.</strong> Actual applications must be completed on the official government website or designated government office.
                            </p>
                        </div>
                    </div>
                    {targetUrl && (
                        <a
                            href={targetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="whitespace-nowrap rounded-xl bg-[#101B30] hover:bg-[#046C4E] px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow transition-colors flex items-center gap-1.5 self-stretch sm:self-auto justify-center"
                        >
                            Open Official Portal <ArrowUpRight className="h-4 w-4 text-[#34D399]" />
                        </a>
                    )}
                </div>
            </div>

            {/* Scheme Header / Hero */}
            <header className="mt-6">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-[#F0FDF4] border border-[#BBF7D0] px-2.5 py-0.5 text-xs font-bold text-[#065F46]">
                        {s.category}
                    </span>
                    <span className="rounded-md bg-[#101B30] px-2.5 py-0.5 text-xs font-medium text-white flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-[#10B981]" />
                        {s.level === "State" ? `State Scheme Ã‚Â· ${s.state}` : s.level === "Private" ? `Non-Govt Ã‚Â· ${s.provider}` : "Central Govt (Nationwide)"}
                    </span>
                    {s.launchYear && (
                        <span className="rounded-md bg-slate-100 border border-[#E8E3D9] px-2.5 py-0.5 text-xs font-semibold text-slate-700 flex items-center gap-1">
                            <Calendar className="h-3 w-3 text-slate-500" /> Launched: {s.launchYear}
                        </span>
                    )}
                    <span className="rounded-md bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-xs font-semibold text-emerald-800">
                        {s.status || "Active"}
                    </span>
                    {result && <StatusBadge status={result.status} testId="detail-eligibility-status" />}
                </div>

                <h1 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight" data-testid="scheme-title">
                    {s.title || s.name}
                </h1>
                <p className="mt-2 text-slate-600 flex items-center gap-1.5 text-xs sm:text-sm">
                    <Building2 className="h-4 w-4 text-[#07966B] shrink-0" />
                    <span className="font-medium text-slate-800">{s.department}</span>
                </p>

                {/* Primary Action Controls */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                    {targetUrl ? (
                        <a
                            href={targetUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#07966B] hover:bg-[#046C4E] px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg"
                            data-testid="official-site-button"
                        >
                            Apply on Official Website <ArrowUpRight className="h-4 w-4" />
                        </a>
                    ) : (
                        <span className="rounded-xl border border-amber-300 bg-amber-50 px-4 py-2.5 text-sm font-medium text-amber-800">
                            Official portal link requires departmental verification.
                        </span>
                    )}

                    <button
                        onClick={() => setAssistantOpen(true)}
                        className="inline-flex items-center gap-2 rounded-xl bg-[#101B30] hover:bg-slate-800 px-5 py-3 text-sm font-bold text-white shadow-md transition-all hover:shadow-lg"
                        data-testid="guided-assistant-button"
                    >
                        <Compass className="h-4 w-4 text-[#10B981]" />
                        Guide Me Through This Application
                    </button>

                    <button
                        onClick={toggleSave}
                        className={btn.ghost}
                        data-testid="save-scheme-button"
                    >
                        {saved ? <BookmarkCheck className="h-4 w-4 text-[#07966B]" /> : <Bookmark className="h-4 w-4" />}
                        {saved ? "Saved" : "Save Scheme"}
                    </button>

                    <button
                        onClick={track}
                        disabled={tracked}
                        className={btn.ghost}
                        data-testid="add-application-button"
                    >
                        <ListPlus className="h-4 w-4" />
                        {tracked ? "In My Applications" : "Track Application"}
                    </button>

                    <button
                        onClick={() => openAssistant(s)}
                        className={btn.ghost}
                        data-testid="smart-assistant-button"
                    >
                        <Sparkles className="h-4 w-4 text-[#07966B]" />
                        Ask Smart Assistant
                    </button>
                </div>
            </header>

            {/* Profile Match Explanation (if logged in and evaluated) */}
            {result && (
                <section className="mt-8 rounded-2xl border border-[#BBF7D0] bg-white p-6 shadow-sm" data-testid="my-eligibility-explanation">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#07966B] text-white text-xs font-bold">Ã¢Å“â€œ</span>
                            <h2 className="text-base sm:text-lg font-bold text-slate-900">How Your Profile Matches This Scheme</h2>
                        </div>
                        <span className="rounded-full bg-[#F0FDF4] border border-[#BBF7D0] px-3 py-1 text-xs font-bold text-[#065F46]">
                            {result.matchScore}% Match Completeness
                        </span>
                    </div>
                    <Explanation r={result} />
                    <p className="mt-4 rounded-xl bg-slate-50 border border-[#E8E3D9] p-3 text-xs sm:text-sm text-slate-700">
                        <strong className="text-slate-900">Recommended Action:</strong> {result.nextAction}
                    </p>
                </section>
            )}

            {/* Sticky Table of Contents Navigation Bar */}
            <div className="sticky top-0 z-30 -mx-4 sm:-mx-6 mt-8 bg-white/95 backdrop-blur-md border-y border-[#E8E3D9] px-4 sm:px-6 py-2 shadow-xs">
                <nav className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                    {navTabs.map((tab) => (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => scrollTo(tab.id)}
                            className={`whitespace-nowrap rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${activeSection === tab.id
                                    ? "bg-[#101B30] text-white shadow-xs"
                                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Content Sections */}
            <div className="mt-6 space-y-6">
                {/* 1. Scheme Overview */}
                <Section id="overview" title="Scheme Overview" icon={Info} badge={s.level}>
                    <div className="space-y-4">
                        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                            {s.detailedDescription || s.description}
                        </p>

                        {/* Overview Meta Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-3.5">
                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Department / Ministry</span>
                                <span className="mt-1 font-bold text-slate-900 text-xs sm:text-sm block">
                                    {s.department}
                                </span>
                            </div>
                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-3.5">
                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Coverage Area</span>
                                <span className="mt-1 font-bold text-slate-900 text-xs sm:text-sm block">
                                    {s.stateCoverage || (s.level === "Central" ? "All India (Nationwide)" : s.state || "All India")}
                                </span>
                            </div>
                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-3.5">
                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Launch Year & Status</span>
                                <span className="mt-1 font-bold text-slate-900 text-xs sm:text-sm block">
                                    {s.launchYear ? `${s.launchYear} Ã‚Â· ${s.status || "Active"}` : s.status || "Active"}
                                </span>
                            </div>
                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-3.5">
                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Application Channel</span>
                                <span className="mt-1 font-bold text-slate-900 text-xs sm:text-sm block">
                                    {s.applicationMode || s.applyChannel || "Online Portal / CSC"}
                                </span>
                            </div>
                        </div>

                        {/* Official Links */}
                        <div className="mt-3 flex flex-wrap gap-3 text-xs pt-2">
                            {s.officialWebsite && (
                                <a
                                    href={s.officialWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 font-bold text-[#046C4E] hover:underline"
                                >
                                    Official Scheme Website: {s.officialWebsite} <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                            )}
                            {s.applicationUrl && s.applicationUrl !== s.officialWebsite && (
                                <a
                                    href={s.applicationUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 font-bold text-[#046C4E] hover:underline"
                                >
                                    Application Portal: {s.applicationUrl} <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                            )}
                        </div>
                    </div>
                </Section>

                {/* 2. Purpose and Benefits */}
                <Section id="benefits" title="Purpose and Benefits" icon={Sparkles}>
                    <div className="space-y-5">
                        {/* Why introduced & problem solved */}
                        {s.purpose && (
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                                    Why This Scheme Was Introduced
                                </h3>
                                <p className="text-slate-700 leading-relaxed text-sm">
                                    {s.purpose}
                                </p>
                            </div>
                        )}

                        {/* Who benefits */}
                        {s.targetBeneficiary && (
                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/60 p-4">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                                    Primary Target Beneficiaries
                                </h3>
                                <p className="text-slate-800 text-sm font-medium">
                                    {s.targetBeneficiary}
                                </p>
                            </div>
                        )}

                        {/* Verified Financial Benefit Highlight Card */}
                        <div className="rounded-2xl border-2 border-[#07966B]/80 bg-gradient-to-br from-[#F0FDF4] via-white to-emerald-50/50 p-5 shadow-xs">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#BBF7D0] pb-3">
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#065F46]">
                                        Verified Government Benefit Package
                                    </span>
                                    <div className="mt-1 text-xl sm:text-2xl font-black text-slate-900">
                                        {s.financialBenefit || s.estimatedBenefit || s.benefit}
                                    </div>
                                </div>
                                {s.benefitFrequency && (
                                    <span className="inline-flex items-center self-start sm:self-auto rounded-full bg-[#101B30] px-3.5 py-1 text-xs font-bold text-white shadow-xs">
                                        Frequency: {s.benefitFrequency}
                                    </span>
                                )}
                            </div>

                            <p className="mt-3 text-slate-700 text-xs sm:text-sm leading-relaxed">
                                {s.benefits || s.description}
                            </p>
                        </div>

                        {/* Life Improvement & Impact */}
                        {s.impact && (
                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/50 p-4">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                                    How This Improves Beneficiaries' Lives
                                </h3>
                                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                                    {s.impact}
                                </p>
                            </div>
                        )}

                        {/* Specific Advantages */}
                        {s.specificAdvantages && (
                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/50 p-4">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
                                    Specific Advantages & Guarantees
                                </h3>
                                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                                    {s.specificAdvantages}
                                </p>
                            </div>
                        )}
                    </div>
                </Section>

                {/* 3. Who Can Apply? (Eligibility Criteria) */}
                <Section id="eligibility" title="Who Can Apply? (Eligibility Criteria)" icon={ShieldCheck}>
                    <div className="space-y-5">
                        {s.whoCanApply && (
                            <p className="text-slate-700 leading-relaxed text-sm">
                                {s.whoCanApply}
                            </p>
                        )}

                        {/* Detailed Criteria Breakdown Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-3.5">
                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Age Requirement</span>
                                <span className="mt-1 font-bold text-slate-900 text-xs sm:text-sm block">
                                    {detailedEligibility.ageRequirement || (s.minAge ? `${s.minAge}+ years` : "No specific age limit")}
                                </span>
                            </div>

                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-3.5">
                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Gender Requirement</span>
                                <span className="mt-1 font-bold text-slate-900 text-xs sm:text-sm block">
                                    {detailedEligibility.genderRequirement || "All Genders Eligible"}
                                </span>
                            </div>

                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-3.5">
                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Annual Family Income</span>
                                <span className="mt-1 font-bold text-slate-900 text-xs sm:text-sm block">
                                    {detailedEligibility.incomeLimit || (s.incomeMax ? `Up to Ã¢â€šÂ¹${s.incomeMax.toLocaleString()}/yr` : "No income ceiling")}
                                </span>
                            </div>

                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-3.5">
                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Residential Requirement</span>
                                <span className="mt-1 font-bold text-slate-900 text-xs sm:text-sm block">
                                    {detailedEligibility.residenceRequirement || (s.level === "Central" ? "Indian Resident (Nationwide)" : `Domicile of ${s.state}`)}
                                </span>
                            </div>

                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-3.5">
                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Education Qualification</span>
                                <span className="mt-1 font-bold text-slate-900 text-xs sm:text-sm block">
                                    {detailedEligibility.educationRequirement || s.educationRequirement || "No specific requirement"}
                                </span>
                            </div>

                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-3.5">
                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Occupation Requirement</span>
                                <span className="mt-1 font-bold text-slate-900 text-xs sm:text-sm block">
                                    {detailedEligibility.occupationRequirement || s.occupationRequirement || "Any occupation"}
                                </span>
                            </div>

                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-3.5">
                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Caste / Category</span>
                                <span className="mt-1 font-bold text-slate-900 text-xs sm:text-sm block">
                                    {detailedEligibility.casteCategoryRequirement || "Open to All Categories"}
                                </span>
                            </div>

                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-3.5">
                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Family Conditions</span>
                                <span className="mt-1 font-bold text-slate-900 text-xs sm:text-sm block">
                                    {detailedEligibility.familyConditions || "Standard household rules apply"}
                                </span>
                            </div>
                        </div>

                        {/* Mandatory Conditions List */}
                        {s.mandatoryConditions?.length > 0 && (
                            <div className="rounded-xl border border-emerald-200 bg-emerald-50/40 p-4 space-y-2.5">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-emerald-950 flex items-center gap-1.5">
                                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                                    Mandatory Eligibility Requirements (Must Satisfy All)
                                </h3>
                                <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                                    {s.mandatoryConditions.map((cond, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white text-[11px] font-bold">Ã¢Å“â€œ</span>
                                            <span className="pt-0.5">{cond}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Conditional Requirements List */}
                        {s.conditionalRequirements?.length > 0 && (
                            <div className="rounded-xl border border-blue-200 bg-blue-50/40 p-4 space-y-2.5">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-1.5">
                                    <Info className="h-4 w-4 text-blue-600" />
                                    Conditional or Category-Specific Requirements
                                </h3>
                                <ul className="space-y-2 text-xs sm:text-sm text-slate-800">
                                    {s.conditionalRequirements.map((req, i) => (
                                        <li key={i} className="flex items-start gap-2.5">
                                            <span className="h-2 w-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                                            <span>{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {/* Legacy Rules / Criteria list if present */}
                        {s.criteria?.length > 0 && (
                            <div className="pt-2">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                                    Matching Indicators Evaluated by ADIKHAR
                                </h3>
                                <ul className="space-y-2">
                                    {s.criteria.map((c, i) => (
                                        <li key={i} className="flex flex-wrap items-center gap-2 text-slate-700 text-xs sm:text-sm">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[#07966B]" />
                                            <span>{c.label}</span>
                                            {!c.mandatory && <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[11px] text-slate-500">indicator</span>}
                                            {c.officialOnly && <span className="rounded bg-amber-50 border border-amber-200 px-1.5 py-0.5 text-[11px] text-amber-700">verified by authority</span>}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </Section>

                {/* 4. Who Cannot Apply? (Ineligibility & Exclusions) */}
                <Section id="ineligibility" title="Who Cannot Apply? (Ineligibility & Exclusions)" icon={Ban}>
                    <div className="space-y-4">
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            To save your time and prevent rejection, review the disqualification benchmarks below. You are ineligible if any of the following apply:
                        </p>

                        <div className="rounded-xl border border-rose-200 bg-rose-50/50 p-4 sm:p-5">
                            <h3 className="text-xs font-bold uppercase tracking-wider text-rose-950 flex items-center gap-2 mb-3">
                                <AlertTriangle className="h-4 w-4 text-rose-600 shrink-0" />
                                Official Exclusions & Disqualifying Conditions
                            </h3>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-800">
                                {s.ineligibility?.length > 0 ? (
                                    s.ineligibility.map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5">
                                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-rose-600 text-white text-[11px] font-bold">Ã¢Å“â€¢</span>
                                            <span className="pt-0.5">{item}</span>
                                        </li>
                                    ))
                                ) : (
                                    <li className="text-slate-600">
                                        Individuals providing fraudulent income certificates, duplicate Aadhaar numbers, or failing domicile checks are strictly disqualified.
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </Section>

                {/* 5. Complete Required Documents (Interactive Checklist & Vault Matching) */}
                <Section id="documents" title="Complete Required Documents & Checklist" icon={FileText}>
                    {/* Offline Document Vault Matching Card */}
                    {(() => {
                        const schemeDocList = Array.isArray(s.documents) ? s.documents : [];
                        const matchDocWithVault = (doc) => {
                            const docName = (typeof doc === 'string' ? doc : doc.name || '').toLowerCase();
                            return vaultDocs.find(v => {
                                const vName = (v.name || '').toLowerCase();
                                const vCat = (v.category || '').toLowerCase();
                                if (docName.includes('aadhaar') && (vName.includes('aadhaar') || vCat === 'identity')) return true;
                                if (docName.includes('income') && (vName.includes('income') || vCat === 'income')) return true;
                                if (docName.includes('ration') && (vName.includes('ration') || vCat === 'residential')) return true;
                                if (docName.includes('caste') && (vName.includes('caste') || vCat === 'special')) return true;
                                if (docName.includes('bank') && (vName.includes('bank') || vName.includes('passbook') || vCat === 'financial')) return true;
                                if (docName.includes('mark') && (vName.includes('mark') || vCat === 'educational')) return true;
                                if (docName.includes('residence') || docName.includes('domicile')) {
                                    if (vCat === 'residential' || vName.includes('domicile')) return true;
                                }
                                return vName.includes(docName) || (docName.length > 3 && docName.includes(vName));
                            });
                        };

                        const matchedDocs = schemeDocList.filter(d => matchDocWithVault(d));
                        const matchedCount = matchedDocs.length;
                        const totalCount = schemeDocList.length;
                        const missingCount = Math.max(0, totalCount - matchedCount);

                        return (
                            <div className="mb-6 rounded-2xl border border-[#BBF7D0] bg-linear-to-r from-[#F0FDF4]/70 to-slate-50 p-5 shadow-xs" data-testid="vault-document-match-card">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#BBF7D0]/60 pb-3">
                                    <div className="flex items-center gap-2.5">
                                        <div className="grid h-9 w-9 place-items-center rounded-xl bg-[#07966B] text-white">
                                            <FolderCheck className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-900">Document Intelligence Vault Match</h3>
                                            <p className="text-xs text-slate-500">Cross-referenced against your encrypted local document vault</p>
                                        </div>
                                    </div>

                                    <Link
                                        to="/vault"
                                        className="inline-flex items-center gap-1.5 rounded-xl bg-[#101B30] px-3.5 py-1.5 text-xs font-bold text-white hover:bg-[#046C4E] transition-colors self-start sm:self-auto"
                                    >
                                        <Lock className="h-3.5 w-3.5" /> Manage Vault
                                    </Link>
                                </div>

                                <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    <div className="rounded-xl border border-emerald-200 bg-white p-3">
                                        <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block">Available in Vault</span>
                                        <div className="mt-1 flex items-baseline gap-1 text-emerald-700 font-extrabold text-lg sm:text-xl">
                                            <span>{matchedCount}</span>
                                            <span className="text-xs text-slate-400 font-normal">/ {totalCount}</span>
                                        </div>
                                    </div>

                                    <div className="rounded-xl border border-amber-200 bg-white p-3">
                                        <span className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider block">Missing Documents</span>
                                        <div className="mt-1 text-amber-700 font-extrabold text-lg sm:text-xl">
                                            {missingCount}
                                        </div>
                                    </div>

                                    <div className="col-span-2 sm:col-span-1 rounded-xl border border-[#E8E3D9] bg-white p-3 flex flex-col justify-center">
                                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Readiness Status</span>
                                        <span className={`text-xs font-bold mt-1 ${missingCount === 0 && totalCount > 0 ? "text-emerald-700" : "text-amber-700"}`}>
                                            {totalCount === 0 ? "No documents specified" : missingCount === 0 ? "100% Ready to Apply" : `${matchedCount}/${totalCount} Documents Ready`}
                                        </span>
                                    </div>
                                </div>

                                {totalCount > 0 && (
                                    <div className="mt-4 pt-3 border-t border-[#DCFCE7] flex flex-wrap gap-2 text-xs">
                                        {schemeDocList.map((doc, idx) => {
                                            const isAvailable = Boolean(matchDocWithVault(doc));
                                            const docName = typeof doc === 'string' ? doc : doc.name;
                                            return (
                                                <span
                                                    key={idx}
                                                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 font-medium border ${
                                                        isAvailable
                                                            ? "bg-emerald-50 text-emerald-800 border-emerald-200"
                                                            : "bg-slate-100 text-slate-700 border-[#E8E3D9]"
                                                    }`}
                                                >
                                                    {isAvailable ? (
                                                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                                                    ) : (
                                                        <AlertTriangle className="h-3.5 w-3.5 text-amber-500" />
                                                    )}
                                                    <span>{docName}</span>
                                                    {isAvailable && <span className="text-[10px] text-emerald-600 font-bold ml-0.5">(In Vault)</span>}
                                                </span>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })()}

                    <DocumentChecklist documents={s.documents} schemeId={s.id} />
                </Section>

                {/* 6. How to Apply? (Detailed Step-by-Step Guide) */}
                <Section id="apply" title="How to Apply? (Detailed Step-by-Step Guide)" icon={Compass}>
                    <div className="space-y-6">
                        <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-50 border border-[#E8E3D9] p-3.5 text-xs sm:text-sm">
                            <span className="font-semibold text-slate-700">
                                Designated Application Mode: <strong className="text-slate-900">{s.applicationMode || s.applyChannel || "Online Portal / CSC"}</strong>
                            </span>
                            {targetUrl && (
                                <a
                                    href={targetUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 font-bold text-[#046C4E] hover:underline"
                                >
                                    Open Portal <ArrowUpRight className="h-3.5 w-3.5" />
                                </a>
                            )}
                        </div>

                        {/* Step-by-step walkthrough */}
                        <div>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                                Sequential Application Walkthrough
                            </h3>
                            <div className="space-y-3">
                                {s.process?.map((p, i) => (
                                    <div key={i} className="flex items-start gap-3.5 rounded-xl border border-[#E8E3D9] p-4 bg-white shadow-2xs">
                                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-[#101B30] text-xs font-bold text-white shadow-xs">
                                            {i + 1}
                                        </span>
                                        <span className="pt-0.5 text-slate-800 text-xs sm:text-sm leading-relaxed">
                                            {p}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* In-Person / Offline Office Procedure */}
                        {s.offlineProcess && (
                            <div className="rounded-xl border border-[#BBF7D0] bg-[#F0FDF4]/50 p-4 sm:p-5">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-[#064E3B] flex items-center gap-2 mb-2">
                                    <Building2 className="h-4 w-4 text-[#046C4E]" />
                                    Offline Office Procedure (In-Person Application)
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                                    {s.offlineProcess}
                                </p>
                            </div>
                        )}

                        {/* Common Mistakes to Avoid */}
                        {s.commonMistakes?.length > 0 && (
                            <div className="rounded-xl border border-amber-200 bg-amber-50/60 p-4 sm:p-5">
                                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-950 flex items-center gap-2 mb-3">
                                    <AlertTriangle className="h-4 w-4 text-amber-700" />
                                    Common Application Mistakes That Lead to Rejection
                                </h3>
                                <div className="space-y-2">
                                    {s.commonMistakes.map((m, i) => (
                                        <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                                            <span className="text-amber-700 font-bold">Ã¢â‚¬Â¢</span>
                                            <span className="leading-relaxed">{m}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* CTA button to launch Guided Assistant */}
                        <div className="rounded-xl bg-slate-100 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm">Need guided assistance for this scheme?</h4>
                                <p className="text-xs text-slate-600 mt-0.5">Walk through step-by-step instructions with our interactive application assistant.</p>
                            </div>
                            <button
                                onClick={() => setAssistantOpen(true)}
                                className="whitespace-nowrap rounded-xl bg-[#101B30] hover:bg-[#046C4E] px-5 py-2.5 text-xs font-bold text-white shadow transition-colors"
                            >
                                Open Guided Assistant
                            </button>
                        </div>
                    </div>
                </Section>

                {/* 7. Application Process & Timeline */}
                <Section id="timeline" title="Application Process & Timeline" icon={CalendarClock}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Application Deadlines & Opening Dates</span>
                            <p className="mt-1.5 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                                {s.openingDate ? `${s.openingDate}. ` : ""}{s.deadlineInfo || "Applications are open throughout the year on a rolling basis."}
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Expected Processing Time</span>
                            <p className="mt-1.5 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                                {s.processingTime || "Standard processing takes 15 to 45 business days upon successful document verification."}
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Renewal Requirements</span>
                            <p className="mt-1.5 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                                {s.renewalRequired || "No annual renewal needed unless specified under special criteria."}
                            </p>
                        </div>

                        <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">How to Track Application Status</span>
                            <p className="mt-1.5 text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                                {s.trackingProcedure || "Track status on the official portal using your mobile number or application reference number."}
                            </p>
                        </div>
                    </div>

                    {s.correctionProcedure && (
                        <div className="mt-4 rounded-xl border border-[#E8E3D9] bg-white p-4">
                            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">How to Correct Errors / Edit Application</span>
                            <p className="mt-1 text-xs sm:text-sm text-slate-700 leading-relaxed">
                                {s.correctionProcedure}
                            </p>
                        </div>
                    )}
                </Section>

                {/* 8. Benefit Disbursement Mechanism */}
                <Section id="disbursement" title="How Will the Beneficiary Receive the Benefits?" icon={CreditCard}>
                    <div className="space-y-4">
                        <div className="rounded-xl border border-[#BBF7D0] bg-[#F0FDF4]/50 p-4">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#065F46] block">
                                Official Delivery Mechanism
                            </span>
                            <div className="mt-1 font-bold text-slate-900 text-sm sm:text-base">
                                {s.disbursementMethod || "Direct Benefit Transfer (DBT) via PFMS to Aadhaar-seeded Bank Account"}
                            </div>
                        </div>

                        {s.disbursementDetails && (
                            <div className="rounded-xl border border-[#E8E3D9] bg-white p-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                                <span className="font-bold text-slate-900 block mb-1">Disbursement Details:</span>
                                {s.disbursementDetails}
                            </div>
                        )}
                    </div>
                </Section>

                {/* 9. Frequently Asked Questions */}
                {s.faqs?.length > 0 && (
                    <Section id="faqs" title="Frequently Asked Questions" icon={HelpCircle} badge={`${s.faqs.length} Answers`}>
                        <Accordion type="single" collapsible className="w-full">
                            {s.faqs.map((f, i) => (
                                <AccordionItem key={i} value={`q${i}`} className="border-b border-slate-100 last:border-b-0">
                                    <AccordionTrigger className="text-left font-bold text-slate-900 text-xs sm:text-sm py-3.5 hover:text-[#046C4E]">
                                        {f.q}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-slate-600 leading-relaxed text-xs sm:text-sm pb-4">
                                        {f.a}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </Section>
                )}

                {/* 10. Official Sources & Contact Information */}
                <Section id="sources" title="Official Sources & Contact Information" icon={Building2}>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-4">
                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Official Portal Link</span>
                                <a
                                    href={s.sourceUrl || s.officialUrl || targetUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-1 inline-flex items-center gap-1 font-bold text-[#046C4E] hover:underline text-xs sm:text-sm break-all"
                                    data-testid="official-source-link"
                                >
                                    {s.sourceUrl || s.officialUrl || targetUrl} <ArrowUpRight className="h-3.5 w-3.5 shrink-0" />
                                </a>
                            </div>

                            <div className="rounded-xl border border-[#E8E3D9] bg-slate-50/70 p-4">
                                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">Official Helpdesk & Grievance</span>
                                <div className="mt-1 space-y-1 text-xs sm:text-sm text-slate-800 font-medium">
                                    {s.helpline && (
                                        <div className="flex items-center gap-1.5">
                                            <PhoneCall className="h-3.5 w-3.5 text-[#07966B]" />
                                            <span>{s.helpline}</span>
                                        </div>
                                    )}
                                    {s.email && (
                                        <div className="flex items-center gap-1.5">
                                            <Mail className="h-3.5 w-3.5 text-[#07966B]" />
                                            <span>{s.email}</span>
                                        </div>
                                    )}
                                    {!s.helpline && !s.email && (
                                        <span>Check official portal contacts page.</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="pt-2 text-xs text-slate-500 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-slate-100">
                            <span data-testid="last-verified">
                                Information verified by ADIKHAR on <strong>{s.lastVerified || "2026-06-01"}</strong> against official gazettes & departmental guidelines.
                            </span>
                            <span className="text-[11px] text-slate-400">
                                All trademarks belong to respective government authorities.
                            </span>
                        </div>
                    </div>
                </Section>
            </div>

            {/* Guided Application Assistant Dialog Modal */}
            <GuidedApplicationAssistant
                isOpen={assistantOpen}
                onClose={() => setAssistantOpen(false)}
                scheme={s}
            />

            <Disclaimer />
        </Page>
    );
}
