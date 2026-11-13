import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Check, Loader2, Lock, Mic, Pencil } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { api, errorMessage } from "@/lib/api";
import { OPTIONS, STATES } from "@/lib/options";
import { Page, btn } from "@/components/Layout";
import { PageLoader } from "@/components/ProtectedRoute";
import { toast } from "sonner";
import VoiceButton, { SpeakButton } from "@/components/VoiceButton";
import { SpeechRecognition, matchOption, parseNumber, parseYesNo } from "@/lib/voice";

const inputCls = "mt-2 w-full rounded-lg border border-[#E8E3D9] bg-white px-3.5 py-3 text-base focus:border-[#07966B] focus:outline-none focus:ring-2 focus:ring-[#07966B]/20";

function Field({ name, label, required, error, voice, children }) {
    const { t } = useLang();
    return (
        <div data-testid={`field-${name}`}>
            <div className="flex items-center justify-between gap-2">
                <label htmlFor={name} className="text-sm font-medium text-slate-800">
                    {label} <span className="font-normal text-slate-400">Â· {required ? t("common.required") : t("common.optional")}</span>
                </label>
                <span className="flex shrink-0 items-center">
                    <SpeakButton text={label} testId={`speak-${name}`} />
                    {voice && <VoiceButton onResult={voice} testId={`voice-${name}`} />}
                </span>
            </div>
            {children}
            {error && <p className="mt-1.5 text-sm text-red-600" role="alert" data-testid={`error-${name}`}>{error}</p>}
        </div>
    );
}

function Choice({ name, value, onChange, options, labelOf }) {
    return (
        <div className="mt-2 flex flex-wrap gap-2" role="radiogroup" aria-label={name}>
            {options.map((o) => {
                const active = value === o.value;
                return (
                    <button type="button" key={String(o.value)} role="radio" aria-checked={active} onClick={() => onChange(o.value)}
                        data-testid={`choice-${name}-${String(o.value)}`}
                        className={`rounded-full border px-4 py-2 text-sm transition-colors ${active ? "border-[#101B30] bg-[#101B30] text-white" : "border-[#E8E3D9] bg-white text-slate-700 hover:border-slate-400"}`}>
                        {labelOf ? labelOf(o) : o.label}
                    </button>
                );
            })}
        </div>
    );
}

export default function Assessment() {
    const { t } = useLang();
    const nav = useNavigate();
    const [p, setP] = useState(null);
    const [step, setStep] = useState(0);
    const [errors, setErrors] = useState({});
    const [busy, setBusy] = useState(false);

    useEffect(() => {
        api.profile.get().then((r) => setP({ ...r.profile, state: r.profile.state || "Karnataka" })).catch(() => setP({ state: "Karnataka" }));
    }, []);
    if (!p) return <PageLoader />;

    const set = (k, v) => { setP((prev) => ({ ...prev, [k]: v })); setErrors((e) => ({ ...e, [k]: undefined })); };
    const heard = (k, v, raw) => {
        if (v === undefined) toast.error(`Didn't catch â€œ${raw[0] || ""}â€. Try again or choose manually.`);
        else { set(k, v); toast.success(`Heard: â€œ${raw[0]}â€`); }
    };
    const vNum = (k) => (tr) => heard(k, parseNumber(tr) ?? undefined, tr);
    const vYN = (k) => (tr) => { const r = parseYesNo(tr); heard(k, r === undefined ? undefined : r.value, tr); };
    const vOpt = (k, group) => (tr) => heard(k, matchOption(tr, OPTIONS[group], `opt.${group}`), tr);
    const yn = [{ value: true, label: t("common.yes") }, { value: false, label: t("common.no") }, { value: null, label: t("common.notsure") }];
    const opt = (group) => OPTIONS[group].map((v) => ({ value: v, label: t(`opt.${group}.${v}`) }));
    const isFemale = p.gender === "FEMALE";
    const ask = {
        student: p.occupation !== "STUDENT",
        farmer: p.occupation !== "FARMER" && p.area === "RURAL",
        ownsLand: p.farmer === true || p.occupation === "FARMER",
        disabilityLevel: p.disability === true,
        pregnant: isFemale && (p.age == null || (p.age >= 15 && p.age <= 50)),
        hasGirlChildUnder10: p.age == null || p.age >= 18,
    };

    const validate = () => {
        const e = {};
        if (step === 0) {
            if (p.age == null || p.age === "" || p.age < 0 || p.age > 120) e.age = "Enter an age between 0 and 120.";
            if (!p.state) e.state = "Choose your state.";
            if (!p.area) e.area = "Choose rural or urban.";
            if (!p.occupation) e.occupation = "Choose your main occupation.";
            if (!p.education) e.education = "Choose your education level.";
        }
        if (step === 1) {
            if (!p.incomeRange) e.incomeRange = "Choose an income range â€” an estimate is fine.";
            if (!p.familySize || p.familySize < 1 || p.familySize > 30) e.familySize = "Enter a number between 1 and 30.";
        }
        setErrors(e);
        return Object.keys(e).length === 0;
    };

    const next = () => validate() && setStep((s) => s + 1);
    const submit = async () => {
        setBusy(true);
        const body = {
            ...p,
            student: p.occupation === "STUDENT" ? true : p.student,
            farmer: p.occupation === "FARMER" ? true : ask.farmer ? p.farmer : false,
            ownsLand: ask.ownsLand ? p.ownsLand : null,
            disabilityLevel: ask.disabilityLevel ? p.disabilityLevel : null,
            pregnant: ask.pregnant ? p.pregnant : false,
        };
        try {
            await api.profile.assess(body);
            toast.success("Eligibility check complete");
            nav("/results");
        } catch (e) {
            toast.error(errorMessage(e));
        } finally {
            setBusy(false);
        }
    };

    const steps = [t("wiz.s1"), t("wiz.s2"), t("wiz.s3"), t("wiz.s4")];
    const sel = (name, group, required) => (
        <Field name={name} label={t(`q.${name}`)} required={required} error={errors[name]} voice={vOpt(name, group)}>
            <select id={name} value={p[name] || ""} onChange={(e) => set(name, e.target.value || null)} className={inputCls} data-testid={`input-${name}`}>
                <option value="">{t("common.select")}</option>
                {opt(group).map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
            </select>
        </Field>
    );
    const yesNo = (name) => (
        <Field name={name} label={t(`q.${name}`)} voice={vYN(name)}>
            <Choice name={name} value={p[name] ?? null} onChange={(v) => set(name, v)} options={yn} />
        </Field>
    );

    const reviewRows = [
        [0, ["age", "state", "district", "area", "occupation", "education", "gender"]],
        [1, ["incomeRange", "familySize", "householdCategory", "rationCard", "incomeTaxPayer", "hasBankAccount", "ownsPuccaHouse", "hasLpg"]],
        [2, ["student", "farmer", "ownsLand", "disability", "disabilityLevel", "healthcareNeed", "pregnant", "hasGirlChildUnder10"]],
    ];
    const display = (k) => {
        const v = p[k];
        if (v === true) return t("common.yes");
        if (v === false) return t("common.no");
        if (v == null || v === "") return <span className="text-slate-400">â€”</span>;
        return OPTIONS[k] ? t(`opt.${k}.${v}`) : String(v);
    };

    return (
        <Page className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#07966B]">{t("wiz.title")}</p>
            <ol className="mt-4 flex gap-2" aria-label="Progress" data-testid="wizard-progress">
                {[...steps, t("wiz.s5")].map((s, i) => (
                    <li key={s} className="flex-1">
                        <div className={`h-1.5 rounded-full transition-colors ${i <= step ? "bg-[#07966B]" : "bg-slate-200"}`} />
                        <p className={`mt-2 hidden text-xs sm:block ${i === step ? "font-semibold text-slate-900" : "text-slate-500"}`}>{i + 1}. {s}</p>
                    </li>
                ))}
            </ol>
            <p className="mt-6 flex items-start gap-2 rounded-lg bg-[#F0FDF4] p-3 text-sm text-[#064E3B]"><Lock className="mt-0.5 h-4 w-4 shrink-0" />{t("wiz.why")}</p>
            <p className="mt-3 flex items-start gap-2 rounded-lg border border-[#E8E3D9] bg-white p-3 text-sm text-slate-700" data-testid="voice-hint">
                <Mic className="mt-0.5 h-4 w-4 shrink-0 text-[#07966B]" />
                {SpeechRecognition ? t("voice.hint") : t("voice.unsupported")}
            </p>

            <section className="mt-8 rounded-2xl border border-[#E8E3D9] bg-white p-6 shadow-sm sm:p-8" data-testid={`wizard-step-${step + 1}`}>
                <h1 className="mb-6 text-2xl font-bold text-slate-900">{steps[step]}</h1>
                <div className="space-y-6">
                    {step === 0 && <>
                        <Field name="age" label={t("q.age")} required error={errors.age} voice={vNum("age")}>
                            <input id="age" type="number" inputMode="numeric" min={0} max={120} value={p.age ?? ""} onChange={(e) => set("age", e.target.value === "" ? null : Number(e.target.value))} className={inputCls} data-testid="input-age" />
                        </Field>
                        <div className="grid gap-6 sm:grid-cols-2">
                            <Field name="state" label={t("q.state")} required error={errors.state} voice={(tr) => heard("state", matchOption(tr, STATES, null), tr)}>
                                <select id="state" value={p.state || ""} onChange={(e) => set("state", e.target.value)} className={inputCls} data-testid="input-state">
                                    <option value="">{t("common.select")}</option>{STATES.map((s) => <option key={s}>{s}</option>)}
                                </select>
                            </Field>
                            <Field name="district" label={t("q.district")} voice={(tr) => heard("district", tr[0]?.trim(), tr)}>
                                <input id="district" value={p.district || ""} maxLength={80} onChange={(e) => set("district", e.target.value)} className={inputCls} data-testid="input-district" />
                            </Field>
                        </div>
                        <Field name="area" label={t("q.area")} required error={errors.area} voice={vOpt("area", "area")}>
                            <Choice name="area" value={p.area} onChange={(v) => set("area", v)} options={opt("area")} />
                        </Field>
                        {sel("occupation", "occupation", true)}
                        {sel("education", "education", true)}
                        <Field name="gender" label={t("q.gender")} voice={vOpt("gender", "gender")}><Choice name="gender" value={p.gender} onChange={(v) => set("gender", v)} options={opt("gender")} /></Field>
                    </>}
                    {step === 1 && <>
                        {sel("incomeRange", "incomeRange", true)}
                        <Field name="familySize" label={t("q.familySize")} required error={errors.familySize} voice={vNum("familySize")}>
                            <input id="familySize" type="number" min={1} max={30} value={p.familySize ?? ""} onChange={(e) => set("familySize", e.target.value === "" ? null : Number(e.target.value))} className={inputCls} data-testid="input-familySize" />
                        </Field>
                        {sel("householdCategory", "householdCategory", false)}
                        {["rationCard", "incomeTaxPayer", "hasBankAccount", "ownsPuccaHouse", "hasLpg"].map((k) => <div key={k}>{yesNo(k)}</div>)}
                    </>}
                    {step === 2 && <>
                        {ask.student && yesNo("student")}
                        {ask.farmer && yesNo("farmer")}
                        {ask.ownsLand && yesNo("ownsLand")}
                        {yesNo("disability")}
                        {ask.disabilityLevel && sel("disabilityLevel", "disabilityLevel", false)}
                        {yesNo("healthcareNeed")}
                        {ask.pregnant && yesNo("pregnant")}
                        {ask.hasGirlChildUnder10 && yesNo("hasGirlChildUnder10")}
                        {p.age >= 60 && <p className="rounded-lg bg-slate-50 p-3 text-sm text-slate-600" data-testid="senior-note">As you are {p.age}, senior-citizen schemes will be included automatically.</p>}
                    </>}
                    {step === 3 && reviewRows.map(([s, keys]) => (
                        <div key={s} className="rounded-xl border border-[#E8E3D9] p-4" data-testid={`review-section-${s + 1}`}>
                            <div className="mb-3 flex items-center justify-between">
                                <h2 className="font-semibold text-slate-900">{steps[s]}</h2>
                                <button onClick={() => setStep(s)} className="inline-flex items-center gap-1 text-sm font-semibold text-[#07966B] hover:underline" data-testid={`review-edit-${s + 1}`}><Pencil className="h-3.5 w-3.5" />{t("common.edit")}</button>
                            </div>
                            <dl className="grid gap-x-6 gap-y-2 text-sm sm:grid-cols-2">
                                {keys.map((k) => <div key={k} className="flex justify-between gap-3 border-b border-dashed border-slate-100 py-1"><dt className="text-slate-500">{t(`q.${k}`).replace(/\?$/, "")}</dt><dd className="text-right font-medium text-slate-800">{display(k)}</dd></div>)}
                            </dl>
                        </div>
                    ))}
                </div>
            </section>

            <div className="mt-6 flex items-center justify-between">
                <button onClick={() => setStep((s) => s - 1)} disabled={step === 0} className={btn.ghost} data-testid="eligibility-wizard-prev-step"><ArrowLeft className="h-4 w-4" />{t("common.back")}</button>
                {step < 3 ? (
                    <button onClick={next} className={btn.primary} data-testid="eligibility-wizard-next-step">{t("common.next")}<ArrowRight className="h-4 w-4" /></button>
                ) : (
                    <button onClick={submit} disabled={busy} className={btn.teal} data-testid="eligibility-wizard-submit">{busy ? <Loader2 className="h-4 w-4 animate-spin" /> : <Check className="h-4 w-4" />}{t("common.submit")}</button>
                )}
            </div>
        </Page>
    );
}
