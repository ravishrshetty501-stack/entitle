import { useRef, useState } from "react";
import { Mic, MicOff, Volume2 } from "lucide-react";
import { useLang } from "@/context/LangContext";
import { LOCALE, SpeechRecognition, speak } from "@/lib/voice";
import { toast } from "sonner";

export function SpeakButton({ text, testId }) {
    const { lang } = useLang();
    if (!window.speechSynthesis) return null;
    return (
        <button type="button" onClick={() => speak(text, lang)} aria-label="Read question aloud" title="Read question aloud" data-testid={testId}
            className="grid h-8 w-8 place-items-center rounded-full text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-800">
            <Volume2 className="h-4 w-4" />
        </button>
    );
}

export default function VoiceButton({ onResult, testId }) {
    const { lang } = useLang();
    const [listening, setListening] = useState(false);
    const rec = useRef(null);
    if (!SpeechRecognition) return null;

    const toggle = () => {
        if (listening) { rec.current?.stop(); return; }
        const r = new SpeechRecognition();
        r.lang = LOCALE[lang];
        r.interimResults = false;
        r.maxAlternatives = 3;
        r.onresult = (e) => onResult(Array.from(e.results[0]).map((a) => a.transcript));
        r.onerror = (e) => {
            if (e.error === "not-allowed") toast.error("Microphone permission was blocked. Allow it in your browser settings.");
            else if (e.error !== "aborted") toast.error("Couldn't hear clearly. Please try again or choose manually.");
        };
        r.onend = () => setListening(false);
        rec.current = r;
        r.start();
        setListening(true);
    };

    return (
        <button type="button" onClick={toggle} aria-pressed={listening} aria-label={listening ? "Stop listening" : "Answer by voice"} title="Answer by voice" data-testid={testId}
            className={`relative grid h-8 w-8 place-items-center rounded-full transition-colors ${listening ? "bg-red-500 text-white" : "text-[#07966B] hover:bg-[#F0FDF4]"}`}>
            {listening && <span className="absolute inset-0 animate-ping rounded-full bg-red-400/60" aria-hidden />}
            {listening ? <MicOff className="relative h-4 w-4" /> : <Mic className="h-4 w-4" />}
        </button>
    );
}
