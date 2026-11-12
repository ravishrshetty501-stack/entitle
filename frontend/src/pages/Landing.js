import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Briefcase, CheckCircle2, CircleDashed, FileCheck2, HeartPulse, Home, Landmark, Lock, ShieldCheck, ShieldQuestion, Sprout, UserRound, Accessibility, Baby, Wallet, Eye, Scale } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLang } from "@/context/LangContext";
import { btn } from "@/components/Layout";
import { api } from "@/lib/api";

const CATS = [
    ["Healthcare", HeartPulse], ["Education", BookOpen], ["Agriculture", Sprout], ["Financial Assistance", Wallet], ["Housing", Home],
    ["Employment", Briefcase], ["Senior Citizen Benefits", UserRound], ["Disability Support", Accessibility], ["Women and Child Welfare", Baby],
];

function HeroCard() {
    return (
        <div className="rise relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5" style={{ animationDelay: "200ms" }} aria-label="Example explanation">
            <div className="absolute -top-3 left-6 rounded-full bg-[#0a192f] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">Example result</div>
            <div className="mb-4 flex items-center justify-between">
                <p className="font-display text-lg font-semibold text-slate-900">Post Matric Scholarship (SC)</p>
                <span className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-800">Needs Verification</span>
            </div>
            <ul className="space-y-3 text-sm">
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" />Studying at post-matric level — <span className="text-slate-500">satisfied</span></li>
                <li className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" />Currently a student — <span className="text-slate-500">satisfied</span></li>
                <li className="flex gap-2"><ShieldQuestion className="h-4 w-4 text-amber-600" />Income up to ₹2.5 lakh — <span className="text-slate-500">needs certificate</span></li>
                <li className="flex gap-2"><CircleDashed className="h-4 w-4 text-sky-600" />Social category — <span className="text-slate-500">verify with caste certificate</span></li>
            </ul>
            <div className="mt-5 rounded-lg bg-teal-50 p-3 text-sm text-teal-900"><span className="font-semibold">Next step:</span> get your income certificate, then apply on scholarships.gov.in</div>
        </div>
    );
}

export default function Landing() {
    const { t } = useLang();
    const [stats, setStats] = useState(null);
    useEffect(() => { api.analytics.impact().then(setStats).catch(() => { }); }, []);
    const sim = stats?.simulated?.totals;

    return (
        <div>
            <section className="grain relative overflow-hidden border-b border-slate-200 bg-[#fbfaf7]">
                <div className="ledger-lines absolute inset-0 opacity-60" aria-hidden />
                <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 py-20 sm:px-6 lg:grid-cols-[1.15fr_1fr] lg:px-8 lg:py-28">
                    <div className="rise">
                        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-3 py-1 text-xs font-semibold text-teal-800">
                            <ShieldCheck className="h-3.5 w-3.5" />{t("hero.eyebrow")}
                        </p>
                        <h1 className="text-4xl font-extrabold leading-[1.05] text-[#0a192f] sm:text-5xl lg:text-6xl" data-testid="hero-title">{t("hero.title")}</h1>
                        <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">{t("hero.sub")}</p>
                        <div className="mt-9 flex flex-wrap gap-3">
                            <Link to="/assessment" className={`${btn.primary} px-7 py-3.5 text-base`} data-testid="find-benefits-hero-cta">{t("hero.cta")}<ArrowRight className="h-4 w-4" /></Link>
                            <Link to="/schemes" className={`${btn.ghost} px-7 py-3.5 text-base`} data-testid="explore-schemes-hero-cta">{t("hero.cta2")}</Link>
                        </div>
                        <p className="mt-6 text-sm text-slate-500">Judges & first-time visitors: try the <Link to="/simulator" className="font-semibold text-[#0d9488] underline-offset-2 hover:underline" data-testid="hero-simulator-link">2-minute Benefits Discovery Simulator</Link>.</p>
                    </div>
                    <HeroCard />
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" data-testid="how-it-works">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0d9488]">How ENTITLE works</p>
                <h2 className="mt-2 max-w-2xl text-3xl font-bold text-slate-900 sm:text-4xl">Not a list of schemes. An explanation of where you stand.</h2>
                <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-3">
                    {[
                        [Scale, "Deterministic rules", "Each scheme's official criteria are encoded as transparent rules. No AI decides your eligibility."],
                        [Eye, "Every result explained", "See which criteria you meet, which fail, what's missing and what needs an official certificate."],
                        [FileCheck2, "From match to action", "A personalised document checklist, the official application link and a tracker you control."],
                    ].map(([Icon, title, text]) => (
                        <div key={title} className="bg-white p-8">
                            <Icon className="h-6 w-6 text-[#0d9488]" />
                            <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="bg-[#0a192f] py-24 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold sm:text-4xl">Benefits we help you discover</h2>
                    <p className="mt-2 text-slate-400">{stats?.prototype?.schemesInCatalogue ?? "60+"} real schemes — national, 10+ states and non-government scholarships.</p>
                    <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
                        {CATS.map(([name, Icon]) => (
                            <Link key={name} to={`/schemes?category=${encodeURIComponent(name)}`} data-testid={`category-tile-${name.toLowerCase().replace(/\W+/g, "-")}`}
                                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-teal-400/50 hover:bg-white/[0.06]">
                                <Icon className="h-5 w-5 text-teal-300" /><span className="text-sm font-medium sm:text-base">{name}</span>
                                <ArrowRight className="ml-auto h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Three steps. About five minutes.</h2>
                <ol className="mt-12 grid gap-10 md:grid-cols-3">
                    {[["Tell us about yourself", "Answer simple questions — age, household, circumstances. Skip anything you're unsure about."],
                    ["Discover relevant benefits", "See schemes you may qualify for, with a plain-language reason for each one."],
                    ["Apply with confidence", "Prepare documents with a checklist, apply on the official site and track progress."]].map(([title, text], i) => (
                        <li key={title} className="relative border-t-2 border-[#0a192f] pt-6">
                            <span className="font-display text-5xl font-extrabold text-slate-200">0{i + 1}</span>
                            <h3 className="mt-2 text-xl font-semibold text-slate-900">{title}</h3>
                            <p className="mt-2 text-slate-600">{text}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="border-y border-slate-200 bg-white py-20" data-testid="impact-stats">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap items-end justify-between gap-4">
                        <h2 className="text-3xl font-bold text-slate-900">Impact snapshot</h2>
                        <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800" data-testid="demo-stats-label">Simulated demo statistics</span>
                    </div>
                    <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
                        {[["Schemes discovered", sim?.schemesDiscovered], ["Checklists completed", sim?.checklistsCompleted], ["Applications tracked", sim?.applicationsTracked], ["Avg. schemes per profile", sim?.avgSchemesPerProfile]].map(([l, v]) => (
                            <div key={l}><p className="font-display text-4xl font-extrabold text-[#0a192f]">{v?.toLocaleString?.() ?? "—"}</p><p className="mt-1 text-sm text-slate-500">{l}</p></div>
                        ))}
                    </div>
                    <p className="mt-8 text-xs text-slate-500">These numbers are simulated for demonstration. ENTITLE has not yet served real beneficiaries. <Link to="/impact" className="font-semibold text-[#0d9488] hover:underline">See live prototype counts</Link>.</p>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8" data-testid="privacy-section">
                <div>
                    <Lock className="h-7 w-7 text-[#0d9488]" />
                    <h2 className="mt-4 text-3xl font-bold text-slate-900">Privacy and transparency, by design</h2>
                    <p className="mt-3 text-slate-600">ENTITLE asks only what a scheme's rules need. We never ask for Aadhaar, bank account or other ID numbers, and you can delete your account and data at any time.</p>
                    <Link to="/privacy" className="mt-6 inline-flex items-center gap-1 font-semibold text-[#0d9488] hover:underline">Read the privacy notice <ArrowRight className="h-4 w-4" /></Link>
                </div>
                <ul className="grid gap-3">
                    {["Eligibility is computed by visible rules, never by AI", "Results are screening guidance — not government approval", "Every scheme links to its official government source", "Application status is entered by you; we don't claim government access"].map((x) => (
                        <li key={x} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-700"><Landmark className="h-5 w-5 shrink-0 text-[#0a192f]" />{x}</li>
                    ))}
                </ul>
            </section>

            <section className="mx-auto max-w-3xl px-4 sm:px-6" data-testid="faq-section">
                <h2 className="text-3xl font-bold text-slate-900">Frequently asked questions</h2>
                <Accordion type="single" collapsible className="mt-6">
                    {[["Is ENTITLE a government website?", "No. ENTITLE is an independent prototype that helps you understand schemes and points you to official government portals to apply."],
                    ["Does a 'Likely Eligible' result mean I will get the benefit?", "No. It means your answers match the scheme's listed criteria. The government authority makes the final decision after verifying documents."],
                    ["What does the profile match % mean?", "The share of a scheme's criteria your answers satisfy. It shows how complete the match is, not the probability of approval."],
                    ["Do I need to upload documents?", "No. ENTITLE only tracks which documents you have prepared. You submit documents on the official portal."],
                    ["Which languages are supported?", "English, Kannada and Hindi for key screens and eligibility questions. Detailed scheme text is currently English-only and is labelled as such."]].map(([q, a], i) => (
                        <AccordionItem key={q} value={`f${i}`}>
                            <AccordionTrigger className="text-left" data-testid={`faq-trigger-${i}`}>{q}</AccordionTrigger>
                            <AccordionContent className="text-slate-600">{a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
        </div>
    );
}
