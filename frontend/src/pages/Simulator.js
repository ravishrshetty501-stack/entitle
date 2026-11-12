import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Eye, FileCheck2, GraduationCap, HeartPulse, Home, ListPlus, Loader2, Play, RotateCcw, Sparkles, Timer } from "lucide-react";
import { api, errorMessage } from "@/lib/api";
import { useAuth } from "@/context/AuthContext";
import { Page, btn } from "@/components/Layout";
import ResultCard from "@/components/ResultCard";
import StatusBadge from "@/components/StatusBadge";
import Disclaimer from "@/components/Disclaimer";
import { ChecklistItems } from "@/pages/Checklist";
import { humanize } from "@/lib/options";
import { toast } from "sonner";

const STEPS = ["Pick a citizen", "What they know", "Run engine", "Discoveries", "Explain match", "Checklist", "Track", "Next action"];
const ICONS = { student: GraduationCap, household: Home, healthcare: HeartPulse };

export default function Simulator() {
    const { user, loginDemo } = useAuth();
    const [personas, setPersonas] = useState([]);
    const [persona, setPersona] = useState(null);
    const [step, setStep] = useState(0);
    const [results, setResults] = useState([]);
    const [scanIdx, setScanIdx] = useState(0);
    const [focus, setFocus] = useState(null);
    const [scheme, setScheme] = useState(null);
    const [prepared, setPrepared] = useState([]);
    const [busy, setBusy] = useState(false);
    const [elapsed, setElapsed] = useState(0);
    const started = useRef(null);

    useEffect(() => { api.demo.personas().then(setPersonas).catch(() => { }); }, []);
    useEffect(() => {
        if (step === 0 || step === 7) return;
        const i = setInterval(() => setElapsed(Math.round((Date.now() - started.current) / 1000)), 500);
        return () => clearInterval(i);
    }, [step]);

    const known = persona?.knownSchemeIds || [];
    const relevant = results.filter((r) => r.status !== "NOT_ELIGIBLE");
    const discovered = relevant.filter((r) => !known.includes(r.schemeId));

    const pick = (p) => { setPersona(p); started.current = Date.now(); setElapsed(0); setStep(1); };
    const run = async () => {
        setStep(2);
        setScanIdx(0);
        try {
            const res = await api.eligibility.preview(persona.profile);
            for (let i = 1; i <= res.length; i += 3) { await new Promise((r) => setTimeout(r, 60)); setScanIdx(i); }
            setScanIdx(res.length);
            setResults(res);
            setStep(3);
        } catch (e) { toast.error(errorMessage(e)); setStep(1); }
    };
    const explain = (r) => { setFocus(r); setStep(4); api.schemes.get(r.schemeId).then(setScheme); };
    const track = async () => {
        setBusy(true);
        try {
            if (user?.demoPersona !== persona.id) await loginDemo(persona.id);
            await api.applications.add(focus.schemeId);
            await api.checklists.update(focus.schemeId, prepared);
            setStep(7);
            setElapsed(Math.round((Date.now() - started.current) / 1000));
        } catch (e) { toast.error(errorMessage(e)); } finally { setBusy(false); }
    };
    const reset = () => { setStep(0); setPersona(null); setResults([]); setFocus(null); setScheme(null); setPrepared([]); };
    const docs = scheme ? scheme.documents.map((d) => ({ ...d, conditional: "false" })) : [];

    return (
        <Page className="max-w-5xl">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0d9488]">Live demonstration</p>
                    <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Benefits Discovery Simulator</h1>
                    <p className="mt-2 max-w-2xl text-slate-600">Watch the explainable engine find benefits a real-life citizen didn't know about — in under two minutes. Personas are fictional; scheme data is real.</p>
                </div>
                {step > 0 && <div className="flex items-center gap-3"><span className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-slate-700 shadow-sm" data-testid="sim-timer"><Timer className="h-4 w-4 text-[#0d9488]" />{elapsed}s</span>
                    <button onClick={reset} className={btn.ghost} data-testid="sim-reset"><RotateCcw className="h-4 w-4" />Restart</button></div>}
            </div>

            <ol className="mb-8 grid grid-cols-4 gap-2 sm:grid-cols-8" data-testid="sim-progress">
                {STEPS.map((s, i) => (
                    <li key={s}><div className={`h-1.5 rounded-full ${i <= step ? "bg-[#0d9488]" : "bg-slate-200"}`} /><p className={`mt-1.5 text-[11px] ${i === step ? "font-semibold text-slate-900" : "text-slate-500"}`}>{s}</p></li>
                ))}
            </ol>

            {step === 0 && (
                <div className="grid gap-4 md:grid-cols-3">
                    {personas.map((p, i) => {
                        const Icon = ICONS[p.id];
                        return (
                            <button key={p.id} onClick={() => pick(p)} data-testid={`sim-persona-${p.id}`} style={{ animationDelay: `${i * 80}ms` }}
                                className="rise flex flex-col rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition-[box-shadow,transform] hover:-translate-y-0.5 hover:shadow-md">
                                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#0a192f] text-white"><Icon className="h-5 w-5" /></span>
                                <span className="mt-4 font-display text-lg font-semibold">{p.name}</span>
                                <span className="text-sm text-slate-500">{p.role}</span>
                                <span className="mt-3 text-sm text-slate-600">{p.story}</span>
                                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#0d9488]">Start with {p.name.split(" ")[0]}<ArrowRight className="h-4 w-4" /></span>
                            </button>
                        );
                    })}
                </div>
            )}

            {step === 1 && persona && (
                <div className="rise grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200 bg-white p-6">
                        <h2 className="font-semibold">{persona.name}'s profile</h2>
                        <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                            {["age", "state", "district", "area", "occupation", "education", "incomeRange", "householdCategory"].map((k) => (
                                <div key={k}><dt className="text-xs uppercase tracking-wider text-slate-400">{humanize(k.replace(/([A-Z])/g, " $1"))}</dt><dd className="font-medium">{humanize(String(persona.profile[k]))}</dd></div>
                            ))}
                        </dl>
                    </div>
                    <div className="rounded-2xl bg-[#0a192f] p-6 text-white">
                        <h2 className="flex items-center gap-2 font-semibold"><Eye className="h-5 w-5 text-teal-300" />What {persona.name.split(" ")[0]} already knows</h2>
                        <ul className="mt-4 space-y-2" data-testid="sim-known-schemes">
                            {persona.knownSchemeNames.map((n) => <li key={n} className="rounded-lg bg-white/10 px-3 py-2 text-sm">{n}</li>)}
                        </ul>
                        <p className="mt-4 text-sm text-slate-300">That's it — {known.length} scheme. Let's see what else may apply.</p>
                        <button onClick={run} className="mt-6 inline-flex items-center gap-2 rounded-full bg-teal-400 px-5 py-2.5 text-sm font-bold text-[#0a192f]" data-testid="run-simulator-btn"><Play className="h-4 w-4" />Run ENTITLE engine</button>
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center" data-testid="sim-scanning">
                    <Loader2 className="mx-auto h-8 w-8 animate-spin text-[#0d9488]" />
                    <p className="mt-4 font-display text-2xl font-bold">Checking {scanIdx} schemes</p>
                    <p className="text-sm text-slate-500">Evaluating each rule deterministically against the profile…</p>
                    <div className="scan-bar relative mx-auto mt-6 h-2 max-w-md overflow-hidden rounded-full bg-slate-100"><div className="h-full bg-[#0d9488] transition-[width]" style={{ width: `${Math.min(100, (scanIdx / 63) * 100)}%` }} /></div>
                </div>
            )}

            {step === 3 && (
                <div className="rise">
                    <div className="mb-6 rounded-2xl bg-[#0a192f] p-6 text-white" data-testid="sim-discovery-summary">
                        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-300"><Sparkles className="h-4 w-4" />Discovery</p>
                        <p className="mt-2 font-display text-3xl font-bold">{discovered.length} previously undiscovered schemes may be relevant</p>
                        <p className="mt-1 text-slate-300">out of {results.length} checked · {relevant.length} relevant in total, {known.length} already known</p>
                    </div>
                    <p className="mb-3 text-sm text-slate-600">Pick one to see exactly why it matched:</p>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {relevant.map((r) => (
                            <button key={r.schemeId} onClick={() => explain(r)} data-testid={`sim-discovered-${r.schemeId}`}
                                className="flex items-start justify-between gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left transition-shadow hover:shadow-md">
                                <span><span className="block font-medium">{r.schemeName}</span><span className="text-xs text-slate-500">{r.estimatedBenefit}</span></span>
                                <span className="flex shrink-0 flex-col items-end gap-1"><StatusBadge status={r.status} />{!known.includes(r.schemeId) && <span className="text-[10px] font-bold uppercase text-[#0d9488]">New</span>}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {step === 4 && focus && (
                <div className="rise space-y-4">
                    <ResultCard r={focus} defaultOpen isNew={!known.includes(focus.schemeId)} />
                    <Disclaimer />
                    <button onClick={() => setStep(5)} className={btn.primary} data-testid="sim-to-checklist"><FileCheck2 className="h-4 w-4" />Generate document checklist</button>
                </div>
            )}

            {step === 5 && (
                <div className="rise rounded-2xl border border-slate-200 bg-white p-6">
                    <h2 className="mb-4 text-xl font-semibold">Checklist for {focus.schemeName}</h2>
                    {!scheme ? <Loader2 className="h-5 w-5 animate-spin" /> : <ChecklistItems docs={docs} prepared={prepared} idPrefix="sim-doc" onToggle={(n) => setPrepared(prepared.includes(n) ? prepared.filter((x) => x !== n) : [...prepared, n])} />}
                    <button onClick={() => setStep(6)} className={`${btn.primary} mt-6`} data-testid="sim-to-track">Continue<ArrowRight className="h-4 w-4" /></button>
                </div>
            )}

            {step === 6 && (
                <div className="rise rounded-2xl border border-slate-200 bg-white p-8 text-center">
                    <ListPlus className="mx-auto h-8 w-8 text-[#0d9488]" />
                    <h2 className="mt-3 text-xl font-semibold">Add {focus.schemeName} to {persona.name.split(" ")[0]}'s tracker</h2>
                    <p className="mt-1 text-sm text-slate-500">This saves the application and checklist progress to {persona.name.split(" ")[0]}'s shared demo account.</p>
                    {user && user.demoPersona !== persona.id && <p className="mx-auto mt-3 max-w-md rounded-lg bg-amber-50 p-3 text-sm text-amber-900" data-testid="sim-session-warning">You're signed in as {user.name}. Continuing will sign you out and switch to the demo persona.</p>}
                    <button onClick={track} disabled={busy} className={`${btn.teal} mt-6`} data-testid="sim-add-tracker">{busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}Add to application tracker</button>
                </div>
            )}

            {step === 7 && (
                <div className="rise rounded-2xl bg-[#0a192f] p-8 text-white" data-testid="sim-complete">
                    <p className="text-xs font-semibold uppercase tracking-widest text-teal-300">Done in {elapsed} seconds</p>
                    <h2 className="mt-2 font-display text-3xl font-bold">Recommended next action</h2>
                    <p className="mt-3 max-w-2xl text-lg text-slate-200" data-testid="sim-next-action">{focus.nextAction}</p>
                    <p className="mt-2 text-sm text-slate-400">{docs.length - prepared.length} document(s) still to prepare.</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                        <Link to="/applications" className="inline-flex items-center gap-1 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#0a192f]" data-testid="sim-open-tracker">Open tracker<ArrowRight className="h-4 w-4" /></Link>
                        <Link to="/dashboard" className="inline-flex items-center gap-1 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold">View dashboard</Link>
                        {focus.officialUrl && <a href={focus.officialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold">Official site</a>}
                    </div>
                </div>
            )}
        </Page>
    );
}
