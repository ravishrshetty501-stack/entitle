import { useEffect, useRef, useState } from "react";
import { Bot, Loader2, Send, ShieldAlert, Sparkles } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { useGuide } from "@/context/GuideContext";
import { useLang } from "@/context/LangContext";
import { api, errorMessage } from "@/lib/api";

const SUGGESTIONS = ["What does this scheme provide?", "Why am I marked like this?", "What documents do I need?", "Explain this in simple English.", "What should I do next?"];

export default function GuideDrawer() {
    const { open, setOpen, scheme } = useGuide();
    const { lang } = useLang();
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [busy, setBusy] = useState(false);
    const endRef = useRef(null);

    useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages, busy]);

    const send = async (text) => {
        const msg = (text ?? input).trim();
        if (!msg || busy) return;
        setInput("");
        setMessages((m) => [...m, { role: "user", content: msg }]);
        setBusy(true);
        try {
            const res = await api.guide.chat(msg, scheme?.id, lang);
            setMessages((m) => [...m, { role: "assistant", content: res.reply.replace(/\*\*|^#+\s/gm, ""), source: res.source }]);
        } catch (e) {
            setMessages((m) => [...m, { role: "assistant", content: `Sorry — ${errorMessage(e)}`, source: "error" }]);
        } finally {
            setBusy(false);
        }
    };

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetContent side="right" className="flex w-full flex-col gap-0 bg-[#fbfaf7] p-0 sm:max-w-md" data-testid="ai-guide-drawer">
                <SheetHeader className="border-b border-slate-200 bg-[#0a192f] p-5 text-left text-white">
                    <SheetTitle className="flex items-center gap-2 text-white"><Bot className="h-5 w-5 text-teal-300" />ENTITLE Guide</SheetTitle>
                    <SheetDescription className="text-slate-300">
                        {scheme ? <>Asking about <span className="font-semibold text-white">{scheme.name}</span></> : "Ask about any scheme listed on ENTITLE."}
                    </SheetDescription>
                </SheetHeader>
                <div className="flex-1 space-y-3 overflow-y-auto p-5" data-testid="ai-guide-messages">
                    <p className="flex gap-2 rounded-lg border border-amber-200 bg-amber-50 p-3 text-xs text-amber-900">
                        <ShieldAlert className="h-4 w-4 shrink-0" />
                        I explain using ENTITLE's scheme data only. I can't approve benefits. Never share Aadhaar or bank numbers here.
                    </p>
                    {messages.length === 0 && (
                        <div className="flex flex-wrap gap-2">
                            {SUGGESTIONS.map((s) => (
                                <button key={s} onClick={() => send(s)} data-testid={`guide-suggestion-${s.slice(0, 12).replace(/\W+/g, "-").toLowerCase()}`}
                                    className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-700 transition-colors hover:border-teal-400 hover:text-teal-800">
                                    {s}
                                </button>
                            ))}
                        </div>
                    )}
                    {messages.map((m, i) => (
                        <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                            <div className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${m.role === "user" ? "bg-[#0a192f] text-white" : "border border-slate-200 bg-white text-slate-800"}`}
                                data-testid={`guide-message-${i}`}>
                                {m.content}
                                {m.source && m.role === "assistant" && (
                                    <span className="mt-1.5 flex items-center gap-1 text-[10px] uppercase tracking-wider text-slate-400">
                                        <Sparkles className="h-3 w-3" />{m.source === "ai" ? "AI explanation · verify officially" : m.source === "faq" ? "FAQ answer (AI unavailable)" : "Error"}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}
                    {busy && <p className="flex items-center gap-2 text-sm text-slate-500"><Loader2 className="h-4 w-4 animate-spin" />Thinking…</p>}
                    <div ref={endRef} />
                </div>
                <form className="flex gap-2 border-t border-slate-200 bg-white p-4" onSubmit={(e) => { e.preventDefault(); send(); }}>
                    <label htmlFor="guide-input" className="sr-only">Your question</label>
                    <input id="guide-input" value={input} onChange={(e) => setInput(e.target.value)} maxLength={1000}
                        placeholder="Ask in English, ಕನ್ನಡ or हिंदी…" data-testid="ai-guide-input"
                        className="flex-1 rounded-full border border-slate-300 px-4 py-2.5 text-sm focus:border-teal-500 focus:outline-none" />
                    <button type="submit" disabled={busy || !input.trim()} data-testid="ai-guide-send" aria-label="Send"
                        className="grid h-10 w-10 place-items-center rounded-full bg-[#0d9488] text-white transition-opacity disabled:opacity-40">
                        <Send className="h-4 w-4" />
                    </button>
                </form>
            </SheetContent>
        </Sheet>
    );
}
