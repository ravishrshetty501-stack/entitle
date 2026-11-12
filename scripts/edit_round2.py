import os
os.chdir('/app/frontend/src')
def edit(p, pairs):
    s = open(p).read()
    for a, b in pairs:
        if a not in s: print("MISSING", p, a[:70])
        s = s.replace(a, b)
    open(p, 'w').write(s)

edit('pages/Assessment.js', [
('import { toast } from "sonner";', '''import { toast } from "sonner";
import VoiceButton, { SpeakButton } from "@/components/VoiceButton";
import { SpeechRecognition, matchOption, parseNumber, parseYesNo } from "@/lib/voice";'''),
('''function Field({ name, label, required, error, children }) {
  const { t } = useLang();
  return (
    <div data-testid={`field-${name}`}>
      <label htmlFor={name} className="text-sm font-medium text-slate-800">
        {label} <span className="font-normal text-slate-400">· {required ? t("common.required") : t("common.optional")}</span>
      </label>''', '''function Field({ name, label, required, error, voice, children }) {
  const { t } = useLang();
  return (
    <div data-testid={`field-${name}`}>
      <div className="flex items-center justify-between gap-2">
        <label htmlFor={name} className="text-sm font-medium text-slate-800">
          {label} <span className="font-normal text-slate-400">· {required ? t("common.required") : t("common.optional")}</span>
        </label>
        <span className="flex shrink-0 items-center">
          <SpeakButton text={label} testId={`speak-${name}`} />
          {voice && <VoiceButton onResult={voice} testId={`voice-${name}`} />}
        </span>
      </div>'''),
('''  const set = (k, v) => { setP((prev) => ({ ...prev, [k]: v })); setErrors((e) => ({ ...e, [k]: undefined })); };''',
'''  const set = (k, v) => { setP((prev) => ({ ...prev, [k]: v })); setErrors((e) => ({ ...e, [k]: undefined })); };
  const heard = (k, v, raw) => {
    if (v === undefined) toast.error(`Didn't catch “${raw[0] || ""}”. Try again or choose manually.`);
    else { set(k, v); toast.success(`Heard: “${raw[0]}”`); }
  };
  const vNum = (k) => (tr) => heard(k, parseNumber(tr) ?? undefined, tr);
  const vYN = (k) => (tr) => { const r = parseYesNo(tr); heard(k, r === undefined ? undefined : r.value, tr); };
  const vOpt = (k, group) => (tr) => heard(k, matchOption(tr, OPTIONS[group], `opt.${group}`), tr);'''),
('''    <Field name={name} label={t(`q.${name}`)} required={required} error={errors[name]}>
      <select id={name}''', '''    <Field name={name} label={t(`q.${name}`)} required={required} error={errors[name]} voice={vOpt(name, group)}>
      <select id={name}'''),
('''    <Field name={name} label={t(`q.${name}`)}>
      <Choice name={name} value={p[name] ?? null}''', '''    <Field name={name} label={t(`q.${name}`)} voice={vYN(name)}>
      <Choice name={name} value={p[name] ?? null}'''),
('''<Field name="age" label={t("q.age")} required error={errors.age}>''', '''<Field name="age" label={t("q.age")} required error={errors.age} voice={vNum("age")}>'''),
('''<Field name="state" label={t("q.state")} required error={errors.state}>''', '''<Field name="state" label={t("q.state")} required error={errors.state} voice={(tr) => heard("state", matchOption(tr, STATES, null), tr)}>'''),
('''<Field name="district" label={t("q.district")}>''', '''<Field name="district" label={t("q.district")} voice={(tr) => heard("district", tr[0]?.trim(), tr)}>'''),
('''<Field name="area" label={t("q.area")} required error={errors.area}>''', '''<Field name="area" label={t("q.area")} required error={errors.area} voice={vOpt("area", "area")}>'''),
('''<Field name="gender" label={t("q.gender")}>''', '''<Field name="gender" label={t("q.gender")} voice={vOpt("gender", "gender")}>'''),
('''<Field name="familySize" label={t("q.familySize")} required error={errors.familySize}>''', '''<Field name="familySize" label={t("q.familySize")} required error={errors.familySize} voice={vNum("familySize")}>'''),
('''<p className="mt-6 flex items-start gap-2 rounded-lg bg-teal-50 p-3 text-sm text-teal-900"><Lock className="mt-0.5 h-4 w-4 shrink-0" />{t("wiz.why")}</p>''',
'''<p className="mt-6 flex items-start gap-2 rounded-lg bg-teal-50 p-3 text-sm text-teal-900"><Lock className="mt-0.5 h-4 w-4 shrink-0" />{t("wiz.why")}</p>
      <p className="mt-3 flex items-start gap-2 rounded-lg border border-slate-200 bg-white p-3 text-sm text-slate-700" data-testid="voice-hint">
        <Mic className="mt-0.5 h-4 w-4 shrink-0 text-[#0d9488]" />
        {SpeechRecognition ? t("voice.hint") : t("voice.unsupported")}
      </p>'''),
('import { ArrowLeft, ArrowRight, Check, Loader2, Lock, Pencil } from "lucide-react";', 'import { ArrowLeft, ArrowRight, Check, Loader2, Lock, Mic, Pencil } from "lucide-react";'),
])

edit('lib/i18n.js', [
('  "lang.notice": "",', '  "lang.notice": "",\n  "voice.hint": "Tap the microphone next to any question to answer by speaking (English, Kannada or Hindi). Tap the speaker to hear the question.",\n  "voice.unsupported": "Voice answers need Chrome or Edge. You can still tap the speaker to hear each question.",\n  "nav.print": "Printable summary",'),
('  "lang.notice": "ಪ್ರಮುಖ', '  "voice.hint": "ಮಾತನಾಡಿ ಉತ್ತರಿಸಲು ಪ್ರಶ್ನೆಯ ಪಕ್ಕದ ಮೈಕ್ ಒತ್ತಿ (ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್ ಅಥವಾ ಹಿಂದಿ). ಪ್ರಶ್ನೆಯನ್ನು ಕೇಳಲು ಸ್ಪೀಕರ್ ಒತ್ತಿ.",\n  "voice.unsupported": "ಧ್ವನಿ ಉತ್ತರಗಳಿಗೆ Chrome ಅಥವಾ Edge ಬೇಕು. ಪ್ರಶ್ನೆ ಕೇಳಲು ಸ್ಪೀಕರ್ ಒತ್ತಬಹುದು.",\n  "nav.print": "ಮುದ್ರಿಸಬಹುದಾದ ಸಾರಾಂಶ",\n  "lang.notice": "ಪ್ರಮುಖ'),
('  "lang.notice": "मुख्य', '  "voice.hint": "बोलकर जवाब देने के लिए सवाल के पास माइक दबाएँ (हिंदी, अंग्रेज़ी या कन्नड़)। सवाल सुनने के लिए स्पीकर दबाएँ।",\n  "voice.unsupported": "आवाज़ से जवाब के लिए Chrome या Edge चाहिए। सवाल सुनने के लिए स्पीकर दबा सकते हैं।",\n  "nav.print": "प्रिंट योग्य सारांश",\n  "lang.notice": "मुख्य'),
])

edit('pages/Results.js', [
('import { ClipboardList, RefreshCw } from "lucide-react";', 'import { ClipboardList, Printer, RefreshCw } from "lucide-react";'),
('''        <Link to="/assessment" className={btn.ghost} data-testid="rerun-assessment">''', '''        <Link to="/results/print" className={btn.primary} data-testid="print-summary-link"><Printer className="h-4 w-4" />Printable summary</Link>
        <Link to="/assessment" className={btn.ghost} data-testid="rerun-assessment">'''),
])

edit('App.js', [
('import Profile from "@/pages/Profile";', 'import Profile from "@/pages/Profile";\nimport ResultsPrint from "@/pages/ResultsPrint";'),
('        <Route path="/results" element={guard(<Results />)} />', '        <Route path="/results" element={guard(<Results />)} />\n        <Route path="/results/print" element={guard(<ResultsPrint />)} />'),
])

edit('components/SchemeCard.js', [
('''<span className="inline-flex items-center gap-1 text-xs text-slate-500"><MapPin className="h-3 w-3" />{s.level === "State" ? s.state : "National"}</span>''',
'''{s.level === "Private" ? <span className="rounded-md bg-violet-50 px-2 py-0.5 text-xs font-medium text-violet-800" data-testid={`scheme-card-nongov-${s.id}`}>Non-government</span>
          : <span className="inline-flex items-center gap-1 text-xs text-slate-500"><MapPin className="h-3 w-3" />{s.level === "State" ? s.state : "National"}</span>}'''),
])

edit('pages/SchemeDetail.js', [
('''<span className="rounded-md bg-[#0a192f] px-2 py-0.5 text-xs font-medium text-white">{s.level === "State" ? `State · ${s.state}` : "National"}</span>''',
'''<span className="rounded-md bg-[#0a192f] px-2 py-0.5 text-xs font-medium text-white">{s.level === "State" ? `State · ${s.state}` : s.level === "Private" ? `Non-government · ${s.provider}` : "National"}</span>'''),
])

edit('pages/Schemes.js', [
('["q", "category", "state", "age", "incomeRange", "status"]', '["q", "category", "state", "age", "incomeRange", "status", "provider"]'),
('incomeRange: f.incomeRange || undefined })', 'incomeRange: f.incomeRange || undefined, provider: f.provider || undefined })'),
('}, [f.q, f.category, f.state, f.age, f.incomeRange]);', '}, [f.q, f.category, f.state, f.age, f.incomeRange, f.provider]);'),
('''          {user && (
            <select aria-label="Eligibility status"''', '''          <select aria-label="Provider" value={f.provider} onChange={(e) => setF("provider", e.target.value)} className={selCls} data-testid="filter-provider">
            <option value="">Govt + non-govt</option><option value="government">Government only</option><option value="private">Non-government (CSR / foundations)</option>
          </select>
          {user && (
            <select aria-label="Eligibility status"'''),
('sub="Real national and Karnataka schemes, each linked to its official government source."', 'sub="Real national, state and non-government schemes, each linked to its official source."'),
])

edit('pages/Landing.js', [
('<p className="mt-2 text-slate-400">21 real national and Karnataka schemes in the prototype catalogue.</p>', '<p className="mt-2 text-slate-400">{stats?.prototype?.schemesInCatalogue ?? "60+"} real schemes — national, 10+ states and non-government scholarships.</p>'),
])

edit('pages/Simulator.js', [
('Checking {scanIdx} of 21 schemes', 'Checking {scanIdx} schemes'),
('style={{ width: `${(scanIdx / 21) * 100}%` }}', 'style={{ width: `${Math.min(100, (scanIdx / 63) * 100)}%` }}'),
('for (let i = 1; i <= res.length; i++) { await new Promise((r) => setTimeout(r, 90)); setScanIdx(i); }', 'for (let i = 1; i <= res.length; i += 3) { await new Promise((r) => setTimeout(r, 60)); setScanIdx(i); }\n      setScanIdx(res.length);'),
])
print("ok")
