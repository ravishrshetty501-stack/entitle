import { DICTS } from "@/lib/i18n";

export const SpeechRecognition = typeof window !== "undefined" ? window.SpeechRecognition || window.webkitSpeechRecognition : null;
export const LOCALE = { en: "en-IN", kn: "kn-IN", hi: "hi-IN" };

const DIGITS = { "०": 0, "१": 1, "२": 2, "३": 3, "४": 4, "५": 5, "६": 6, "७": 7, "८": 8, "९": 9, "೦": 0, "೧": 1, "೨": 2, "೩": 3, "೪": 4, "೫": 5, "೬": 6, "೭": 7, "೮": 8, "೯": 9 };
const YES = ["yes", "yeah", "haan", "han", "ha", "हाँ", "हां", "हा", "जी", "ಹೌದು", "houdu", "howdu", "hu"];
const NO = ["no", "nahi", "nahin", "नहीं", "नही", "ना", "ಇಲ್ಲ", "illa", "beda", "ಬೇಡ"];
const UNSURE = ["not sure", "don't know", "pata nahi", "पता नहीं", "मालूम नहीं", "ಗೊತ್ತಿಲ್ಲ", "ಖಚಿತವಿಲ್ಲ", "gottilla"];

const norm = (s) => String(s).toLowerCase().replace(/[.,!?।]/g, "").trim();

export function parseNumber(transcripts) {
    for (const t of transcripts) {
        const ascii = String(t).replace(/[०-९೦-೯]/g, (d) => DIGITS[d]);
        const m = ascii.match(/\d+/);
        if (m) return Number(m[0]);
    }
    return null;
}

export function parseYesNo(transcripts) {
    for (const t of transcripts.map(norm)) {
        if (UNSURE.some((w) => t.includes(w))) return { value: null };
        if (NO.some((w) => t === w || t.startsWith(w + " ") || t.includes(" " + w))) return { value: false };
        if (YES.some((w) => t === w || t.startsWith(w + " ") || t.includes(" " + w))) return { value: true };
    }
    return undefined;
}

// Matches speech against option labels in all three languages plus the raw value.
export function matchOption(transcripts, values, labelKey) {
    const candidates = values.map((v) => ({
        v,
        labels: [v, ...Object.values(DICTS).map((d) => (labelKey ? d[`${labelKey}.${v}`] : null)).filter(Boolean)].map(norm),
    }));
    for (const t of transcripts.map(norm)) {
        for (const c of candidates) {
            if (c.labels.some((l) => l && (t === l || t.includes(l) || (t.length > 2 && l.includes(t))))) return c.v;
        }
    }
    return undefined;
}

export function speak(text, lang) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LOCALE[lang] || "en-IN";
    u.rate = 0.95;
    window.speechSynthesis.speak(u);
}
