import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowUpRight, Bookmark, BookmarkCheck, Bot, CalendarClock, ClipboardList, FileText, ListPlus, ShieldCheck } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { useGuide } from "@/context/GuideContext";
import { Page, EmptyState, btn } from "@/components/Layout";
import { Explanation } from "@/components/ResultCard";
import StatusBadge from "@/components/StatusBadge";
import Disclaimer from "@/components/Disclaimer";
import { PageLoader } from "@/components/ProtectedRoute";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "sonner";

function Section({ title, icon: Icon, children, id }) {
    return (
        <section className="border-t border-slate-200 py-8" data-testid={`section-${id}`}>
            <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold text-slate-900">{Icon && <Icon className="h-5 w-5 text-[#0d9488]" />}{title}</h2>
            {children}
        </section>
    );
}

export default function SchemeDetail() {
    const { id } = useParams();
    const { user } = useAuth();
    const { openGuide } = useGuide();
    const nav = useNavigate();
    const [s, setS] = useState(null);
    const [notFound, setNotFound] = useState(false);
    const [result, setResult] = useState(null);
    const [saved, setSaved] = useState(false);
    const [tracked, setTracked] = useState(false);

    useEffect(() => {
        api.schemes.get(id).then(setS).catch(() => setNotFound(true));
        if (user) {
            api.eligibility.result(id).then(setResult).catch(() => setResult(null));
            api.saved.list().then((l) => setSaved(l.some((x) => x.schemeId === id))).catch(() => { });
            api.applications.list().then((l) => setTracked(l.some((x) => x.schemeId === id))).catch(() => { });
        }
    }, [id, user]);

    if (notFound) return <Page><EmptyState icon={FileText} testId="scheme-not-found" title="Scheme not found" action={<Link to="/schemes" className={btn.primary}>Back to schemes</Link>} /></Page>;
    if (!s) return <PageLoader />;

    const requireLogin = () => { toast.info("Sign in or use a demo account to save progress."); nav("/login", { state: { from: `/schemes/${id}` } }); };
    const toggleSave = async () => {
        if (!user) return requireLogin();
        try {
            if (saved) { await api.saved.remove(id); setSaved(false); toast.success("Removed from saved"); }
            else { await api.saved.add(id); setSaved(true); toast.success("Scheme saved"); }
        } catch (e) { toast.error(errorMessage(e)); }
    };
    const track = async () => {
        if (!user) return requireLogin();
        try { await api.applications.add(id); setTracked(true); toast.success("Added to My Applications"); } catch (e) { toast.error(errorMessage(e)); }
    };

    return (
        <Page className="max-w-5xl">
            <Link to="/schemes" className="text-sm text-slate-500 hover:text-slate-800">← All schemes</Link>
            <header className="mt-4 rise">
                <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-xs font-medium">{s.category}</span>
                    <span className="rounded-md bg-[#0a192f] px-2 py-0.5 text-xs font-medium text-white">{s.level === "State" ? `State · ${s.state}` : s.level === "Private" ? `Non-government · ${s.provider}` : "National"}</span>
                    <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-800">{s.status}</span>
                    {result && <StatusBadge status={result.status} testId="detail-eligibility-status" />}
                </div>
                <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl" data-testid="scheme-title">{s.name}</h1>
                <p className="mt-2 text-slate-600">{s.department}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                    <button onClick={toggleSave} className={btn.ghost} data-testid="save-scheme-button">{saved ? <BookmarkCheck className="h-4 w-4 text-teal-600" /> : <Bookmark className="h-4 w-4" />}{saved ? "Saved" : "Save Scheme"}</button>
                    <button onClick={track} disabled={tracked} className={btn.primary} data-testid="add-application-button"><ListPlus className="h-4 w-4" />{tracked ? "In My Applications" : "Add to My Applications"}</button>
                    <button onClick={() => (user ? nav(`/checklist/${id}`) : requireLogin())} className={btn.ghost} data-testid="view-checklist-button"><ClipboardList className="h-4 w-4" />View Document Checklist</button>
                    {s.officialUrl ? (
                        <a href={s.officialUrl} target="_blank" rel="noopener noreferrer" className={btn.teal} data-testid="official-site-button">Open Official Application Website<ArrowUpRight className="h-4 w-4" /></a>
                    ) : (
                        <span className="rounded-full border border-amber-300 bg-amber-50 px-4 py-2.5 text-sm text-amber-800" data-testid="official-link-unverified">Official application link requires verification.</span>
                    )}
                    <button onClick={() => openGuide(s)} className={btn.ghost} data-testid="ask-guide-button"><Bot className="h-4 w-4" />Ask ENTITLE Guide</button>
                </div>
            </header>

            {result && (
                <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm" data-testid="my-eligibility-explanation">
                    <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
                        <h2 className="text-lg font-semibold">How your profile matches</h2>
                        <span className="text-sm text-slate-500">{result.matchScore}% profile match (completeness, not approval chance)</span>
                    </div>
                    <Explanation r={result} />
                    <p className="mt-4 rounded-lg bg-[#0a192f]/[0.04] p-3 text-sm"><span className="font-semibold">Next step:</span> {result.nextAction}</p>
                </section>
            )}

            <div className="mt-4">
                <Section id="overview" title="Scheme overview"><p className="leading-relaxed text-slate-700">{s.description}</p></Section>
                <Section id="who" title="Who can apply?"><p className="leading-relaxed text-slate-700">{s.whoCanApply}</p></Section>
                <Section id="eligibility" title="Eligibility requirements" icon={ShieldCheck}>
                    <ul className="space-y-2">
                        {s.criteria.map((c, i) => (
                            <li key={i} className="flex flex-wrap items-center gap-2 text-slate-700">• {c.label}
                                {!c.mandatory && <span className="rounded bg-slate-100 px-1.5 text-xs text-slate-500">indicator</span>}
                                {c.officialOnly && <span className="rounded bg-amber-50 px-1.5 text-xs text-amber-700">verified by authority</span>}
                            </li>
                        ))}
                    </ul>
                    <p className="mt-3 text-sm text-slate-500">Education: {s.educationRequirement} · Occupation: {s.occupationRequirement}</p>
                </Section>
                <Section id="benefits" title="Benefits offered"><p className="text-slate-700">{s.benefits}</p></Section>
                <Section id="documents" title="Required documents" icon={FileText}>
                    <ul className="grid gap-3 sm:grid-cols-2">{s.documents.map((d) => <li key={d.name} className="rounded-lg border border-slate-200 bg-white p-3"><p className="font-medium">{d.name}</p><p className="text-sm text-slate-500">{d.why}</p></li>)}</ul>
                </Section>
                <Section id="process" title="Application process">
                    <ol className="space-y-3">{s.process.map((p, i) => <li key={i} className="flex gap-3"><span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#0a192f] text-xs font-bold text-white">{i + 1}</span><span className="pt-0.5 text-slate-700">{p}</span></li>)}</ol>
                    <p className="mt-3 text-sm text-slate-500">Apply through {s.applyChannel}.</p>
                </Section>
                <Section id="deadlines" title="Important deadlines" icon={CalendarClock}><p className="text-slate-700">{s.deadlineInfo}</p></Section>
                {s.faqs?.length > 0 && (
                    <Section id="faq" title="Frequently asked questions">
                        <Accordion type="single" collapsible>{s.faqs.map((f, i) => <AccordionItem key={i} value={`q${i}`}><AccordionTrigger className="text-left">{f.q}</AccordionTrigger><AccordionContent className="text-slate-600">{f.a}</AccordionContent></AccordionItem>)}</Accordion>
                    </Section>
                )}
                <Section id="source" title="Official government source">
                    <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-[#0d9488] hover:underline" data-testid="official-source-link">{s.sourceUrl}<ArrowUpRight className="h-4 w-4" /></a>
                    <p className="mt-2 text-sm text-slate-500" data-testid="last-verified">Information last reviewed by ENTITLE on {s.lastVerified}. Criteria are simplified for screening — rules change, so always confirm on the official source.</p>
                </Section>
            </div>
            <Disclaimer />
        </Page>
    );
}
