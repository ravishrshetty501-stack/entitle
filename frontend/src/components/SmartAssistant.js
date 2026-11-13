import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
    Sparkles,
    X,
    Minus,
    Send,
    Mic,
    MicOff,
    Volume2,
    VolumeX,
    RotateCcw,
    Trash2,
    Wifi,
    WifiOff,
    FileText,
    ExternalLink,
    ChevronDown,
    CheckCircle2,
    Compass
} from "lucide-react";
import AssistantLogo from "@/components/AssistantLogo";
import { useAssistant } from "@/context/AssistantContext";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/lib/api";
import {
    SpeechRecognition,
    LOCALE,
    speak,
    stopSpeaking,
    isSpeaking
} from "@/lib/voice";
import { processOfflineVoiceQuery, getSchemeTitle } from "@/lib/offlineIntelligence";
import {
    getAllOfflineSchemes,
    saveVoiceMessageToDB,
    getVoiceHistoryFromDB,
    clearVoiceHistoryFromDB
} from "@/lib/offlineDb";
import { toast } from "sonner";

const LANGUAGES = [
    { code: "en", label: "English", locale: "en-IN" },
    { code: "hi", label: "à¤¹à¤¿à¤¨à¥à¤¦à¥€", locale: "hi-IN" },
    { code: "kn", label: "à²•à²¨à³à²¨à²¡", locale: "kn-IN" }
];

export default function SmartAssistant() {
    const { isOpen, setIsOpen, activeScheme, setActiveScheme, prefilledMessage, setPrefilledMessage } = useAssistant();
    const { user } = useAuth();

    const [isOnline, setIsOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true);
    const [selectedLang, setSelectedLang] = useState("en");
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [speakingActive, setSpeakingActive] = useState(false);
    const [activeAudioMsgIndex, setActiveAudioMsgIndex] = useState(null);
    const [previousSchemeId, setPreviousSchemeId] = useState(null);
    const [allOfflineSchemes, setAllOfflineSchemes] = useState([]);

    const recognitionRef = useRef(null);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // Track connectivity
    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);
        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    // Load offline schemes & initial conversation history
    useEffect(() => {
        let isMounted = true;
        async function loadHistory() {
            try {
                const schemes = await getAllOfflineSchemes();
                if (isMounted) setAllOfflineSchemes(schemes);

                // Load history from backend if logged in and online, or from IndexedDB
                if (navigator.onLine && user) {
                    try {
                        const hist = await api.guide.history();
                        if (isMounted && hist && hist.length > 0) {
                            setMessages(hist.map(m => ({
                                role: m.role,
                                text: m.content,
                                schemeId: m.schemeId,
                                timestamp: m.createdAt
                            })));
                            return;
                        }
                    } catch (e) { }
                }

                const localHist = await getVoiceHistoryFromDB();
                if (isMounted && localHist && localHist.length > 0) {
                    setMessages(localHist.map(m => ({
                        role: m.role,
                        text: m.text,
                        schemeId: m.schemeId,
                        timestamp: m.timestamp
                    })));
                } else if (isMounted) {
                    // Welcome message
                    setMessages([
                        {
                            role: "assistant",
                            text: "Hello! I am **ADIKHAR Assistant**, your civic intelligence guide for Indian Government welfare schemes, eligibility rules, and citizen services.\n\nI can answer questions about **107 verified schemes** (Central & State), documents, application procedures, and general knowledge in English, à¤¹à¤¿à¤¨à¥à¤¦à¥€, and à²•à²¨à³à²¨à²¡.\n\nHow can I help you today?",
                            suggestions: [
                                "What is ADIP Scheme?",
                                "Gruha Lakshmi Karnataka",
                                "Ayushman Bharat eligibility",
                                "Who can get PM-KISAN?"
                            ],
                            timestamp: new Date().toISOString()
                        }
                    ]);
                }
            } catch (err) {
                console.warn("Failed to load initial assistant data:", err);
            }
        }
        loadHistory();
        return () => {
            isMounted = false;
            stopSpeaking();
            if (recognitionRef.current) {
                try { recognitionRef.current.abort(); } catch (e) { }
            }
        };
    }, [user]);

    // Handle incoming prefilled message or active scheme
    useEffect(() => {
        if (prefilledMessage) {
            setInputValue(prefilledMessage);
            setPrefilledMessage("");
            if (inputRef.current) inputRef.current.focus();
        }
        if (activeScheme) {
            setPreviousSchemeId(activeScheme.id);
        }
    }, [prefilledMessage, activeScheme, setPrefilledMessage]);

    // Auto-scroll to latest message
    useEffect(() => {
        if (isOpen) {
            messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages, isOpen, isLoading]);

    // Initialize speech recognition
    useEffect(() => {
        if (!SpeechRecognition) return;

        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = true;
        recognition.lang = LOCALE[selectedLang] || "en-IN";

        recognition.onstart = () => {
            setIsListening(true);
            stopSpeaking();
            setSpeakingActive(false);
        };

        recognition.onresult = (event) => {
            let currentText = "";
            for (let i = event.resultIndex; i < event.results.length; i++) {
                currentText += event.results[i][0].transcript;
            }
            // Put recognized text into chat input so user can inspect and edit it!
            setInputValue(currentText);
        };

        recognition.onerror = (event) => {
            console.warn("Speech recognition error:", event.error);
            setIsListening(false);
            if (event.error === "not-allowed") {
                toast.error("Microphone access was blocked. Please allow permissions in browser.");
            }
        };

        recognition.onend = () => {
            setIsListening(false);
            if (inputRef.current) inputRef.current.focus();
        };

        recognitionRef.current = recognition;

        return () => {
            try { recognition.abort(); } catch (e) { }
        };
    }, [selectedLang]);

    const toggleListening = () => {
        if (!SpeechRecognition) {
            toast.error("Speech Recognition is not supported on this browser. You can type your question.");
            return;
        }

        if (isListening) {
            try { recognitionRef.current?.stop(); } catch (e) { }
            setIsListening(false);
        } else {
            try {
                recognitionRef.current.lang = LOCALE[selectedLang] || "en-IN";
                recognitionRef.current.start();
            } catch (e) {
                console.error("Recognition start error:", e);
                setIsListening(false);
            }
        }
    };

    const handleSendMessage = async (textToSend) => {
        const query = (textToSend || inputValue).trim();
        if (!query || isLoading) return;

        setInputValue("");
        setIsLoading(true);
        if (isListening) {
            try { recognitionRef.current?.stop(); } catch (e) { }
            setIsListening(false);
        }

        const userMsg = {
            role: "user",
            text: query,
            timestamp: new Date().toISOString()
        };

        setMessages(prev => [...prev, userMsg]);
        saveVoiceMessageToDB(userMsg).catch(() => { });

        try {
            // Check connectivity
            if (navigator.onLine) {
                // Online: call backend guide service
                const response = await api.guide.chat({
                    message: query,
                    schemeId: activeScheme ? activeScheme.id : null,
                    previousSchemeId: previousSchemeId,
                    language: selectedLang
                });

                if (response && response.schemeId) {
                    setPreviousSchemeId(response.schemeId);
                }

                const assistantMsg = {
                    role: "assistant",
                    text: response.reply,
                    schemeId: response.schemeId,
                    schemeName: response.schemeName,
                    officialUrl: response.officialUrl,
                    suggestions: response.suggestions || [],
                    source: response.source || "ai",
                    timestamp: new Date().toISOString()
                };

                setMessages(prev => [...prev, assistantMsg]);
                saveVoiceMessageToDB(assistantMsg).catch(() => { });
            } else {
                // Offline: execute client-side intelligence
                const offlineResponse = await processOfflineVoiceQuery({
                    query: query,
                    lang: selectedLang,
                    activeSchemeId: activeScheme ? activeScheme.id : previousSchemeId,
                    allSchemes: allOfflineSchemes
                });

                if (offlineResponse.matchedSchemes && offlineResponse.matchedSchemes.length > 0) {
                    setPreviousSchemeId(offlineResponse.matchedSchemes[0].id);
                }

                const assistantMsg = {
                    role: "assistant",
                    text: offlineResponse.text,
                    schemeId: offlineResponse.matchedSchemes?.[0]?.id,
                    schemeName: offlineResponse.matchedSchemes?.[0] ? getSchemeTitle(offlineResponse.matchedSchemes[0]) : null,
                    officialUrl: offlineResponse.matchedSchemes?.[0]?.officialUrl || offlineResponse.matchedSchemes?.[0]?.sourceUrl,
                    suggestions: [
                        "Who can apply?",
                        "What documents are needed?",
                        "How do I apply?"
                    ],
                    source: "offline_database",
                    timestamp: new Date().toISOString()
                };

                setMessages(prev => [...prev, assistantMsg]);
                saveVoiceMessageToDB(assistantMsg).catch(() => { });
            }
        } catch (err) {
            console.error("Chat response error:", err);
            // Fallback to local offline intelligence if online fetch failed
            try {
                const fallbackRes = await processOfflineVoiceQuery({
                    query: query,
                    lang: selectedLang,
                    activeSchemeId: activeScheme ? activeScheme.id : previousSchemeId,
                    allSchemes: allOfflineSchemes
                });

                const assistantMsg = {
                    role: "assistant",
                    text: fallbackRes.text,
                    suggestions: ["Who can apply?", "What documents are needed?"],
                    source: "offline_fallback",
                    timestamp: new Date().toISOString()
                };
                setMessages(prev => [...prev, assistantMsg]);
            } catch (e2) {
                setMessages(prev => [...prev, {
                    role: "assistant",
                    text: "I experienced an issue processing that query. Please check your connectivity or ask about another scheme.",
                    timestamp: new Date().toISOString()
                }]);
            }
        } finally {
            setIsLoading(false);
            if (inputRef.current) inputRef.current.focus();
        }
    };

    const handlePlayAloud = (text, idx) => {
        stopSpeaking();
        setSpeakingActive(true);
        setActiveAudioMsgIndex(idx);

        // Strip markdown headers / bullets for smoother voice synthesis
        const plainText = text
            .replace(/[#*`_~]/g, "")
            .replace(/â€¢/g, "")
            .replace(/https?:\/\/\S+/g, "the official portal")
            .trim();

        speak(plainText, selectedLang, () => {
            setSpeakingActive(false);
            setActiveAudioMsgIndex(null);
        });
    };

    const handleStopSpeaking = () => {
        stopSpeaking();
        setSpeakingActive(false);
        setActiveAudioMsgIndex(null);
    };

    const handleClearHistory = async () => {
        if (window.confirm("Clear conversation history with ADIKHAR Assistant?")) {
            await clearVoiceHistoryFromDB();
            if (user && navigator.onLine) {
                await api.guide.clearHistory().catch(() => { });
            }
            setMessages([
                {
                    role: "assistant",
                    text: "Conversation cleared. How can I help you today?",
                    suggestions: [
                        "What is ADIP Scheme?",
                        "Gruha Lakshmi Karnataka",
                        "Ayushman Bharat eligibility",
                        "PM-KISAN status"
                    ],
                    timestamp: new Date().toISOString()
                }
            ]);
            setPreviousSchemeId(null);
            stopSpeaking();
            setSpeakingActive(false);
            toast.success("Conversation history cleared.");
        }
    };

    return (
        <>
            {/* 1. Floating Launcher Button (Fixed bottom-right corner of every page) */}
            {!isOpen && (
                <div className="fixed bottom-5 right-5 z-40 group">
                    {/* Tooltip */}
                    <div className="pointer-events-none absolute -top-10 right-0 whitespace-nowrap rounded-lg bg-[#101B30] px-3 py-1 text-[11px] font-bold text-white opacity-0 shadow-md transition-opacity duration-200 group-hover:opacity-100 border border-white/10">
                        Ask ADIKHAR
                    </div>

                    <button
                        onClick={() => setIsOpen(true)}
                        data-testid="smart-assistant-floating-launcher"
                        aria-label="Ask ADIKHAR Assistant"
                        className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#07966B] via-[#057A55] to-[#101B30] text-white shadow-xl ring-2 ring-[#07966B]/30 transition-all duration-200 hover:scale-105 active:scale-95 border border-white/20"
                    >
                        <AssistantLogo size="md" className="border-none shadow-none bg-transparent" />
                    </button>
                </div>
            )}

            {/* 2. Floating Chatbot Panel (Desktop: bottom-right 420x640px, Mobile: responsive bottom sheet) */}
            {isOpen && (
                <div
                    data-testid="smart-assistant-panel"
                    className="fixed bottom-3 right-3 sm:bottom-5 sm:right-5 z-50 flex w-[calc(100vw-24px)] sm:w-[420px] h-[85vh] sm:h-[640px] flex-col rounded-3xl border border-[#E8E3D9] bg-[#FBF8F1] shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200"
                >
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/10 bg-[#101B30] px-4 py-3.5 text-white">
                        <div className="flex items-center gap-2.5 min-w-0">
                            <AssistantLogo size="sm" />
                            <div className="min-w-0">
                                <div className="flex items-center gap-1.5">
                                    <h3 className="text-sm font-extrabold tracking-tight truncate">ADIKHAR Assistant</h3>
                                    <span
                                        className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.2 text-[9px] font-bold border ${isOnline
                                            ? "border-emerald-400/40 bg-emerald-500/20 text-emerald-300"
                                            : "border-amber-400/40 bg-amber-500/20 text-amber-300"
                                            }`}
                                    >
                                        <span className={`h-1.5 w-1.5 rounded-full ${isOnline ? "bg-emerald-400" : "bg-amber-400 animate-pulse"}`} />
                                        {isOnline ? "ONLINE" : "OFFLINE"}
                                    </span>
                                </div>
                                <p className="text-[10px] text-slate-300 truncate">National Scheme & Citizen Intelligence</p>
                            </div>
                        </div>

                        {/* Top Controls: Language, Clear, Minimize, Close */}
                        <div className="flex items-center gap-1 shrink-0">
                            <select
                                value={selectedLang}
                                onChange={(e) => {
                                    setSelectedLang(e.target.value);
                                    stopSpeaking();
                                }}
                                className="cursor-pointer rounded-lg bg-white/10 px-2 py-1 text-[11px] font-bold text-slate-200 hover:bg-white/20 focus:outline-none [&>option]:text-slate-900"
                                title="Select Conversation Language"
                            >
                                {LANGUAGES.map(l => (
                                    <option key={l.code} value={l.code}>{l.label}</option>
                                ))}
                            </select>

                            <button
                                onClick={handleClearHistory}
                                title="Clear conversation"
                                className="grid h-7 w-7 place-items-center rounded-lg text-[#101B30]/50 hover:bg-white/10 hover:text-rose-400"
                            >
                                <Trash2 className="h-3.5 w-3.5" />
                            </button>

                            <button
                                onClick={() => setIsOpen(false)}
                                title="Minimize assistant"
                                className="grid h-7 w-7 place-items-center rounded-lg text-[#101B30]/50 hover:bg-white/10 hover:text-white"
                            >
                                <Minus className="h-4 w-4" />
                            </button>

                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    stopSpeaking();
                                }}
                                title="Close assistant"
                                className="grid h-7 w-7 place-items-center rounded-lg text-[#101B30]/50 hover:bg-white/10 hover:text-white"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Active Context Banner (if exploring a specific scheme) */}
                    {activeScheme && (
                        <div className="flex items-center justify-between gap-2 bg-[#F0FDF4] px-3.5 py-1.5 border-b border-[#BBF7D0] text-xs">
                            <div className="flex items-center gap-1.5 min-w-0">
                                <FileText className="h-3.5 w-3.5 text-[#046C4E] shrink-0" />
                                <span className="text-[11px] text-[#065F46] font-semibold truncate">
                                    Context: <strong className="font-bold">{activeScheme.name || activeScheme.title}</strong>
                                </span>
                            </div>
                            <button
                                onClick={() => setActiveScheme(null)}
                                className="text-[10px] font-bold text-[#046C4E] hover:underline shrink-0"
                            >
                                Clear
                            </button>
                        </div>
                    )}

                    {/* Conversation Area */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs sm:text-sm">
                        {messages.map((m, idx) => {
                            const isUser = m.role === "user";
                            const isSpeakingThis = activeAudioMsgIndex === idx && speakingActive;

                            return (
                                <div
                                    key={idx}
                                    className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                                >
                                    <div
                                        className={`max-w-[88%] rounded-2xl p-3.5 leading-relaxed shadow-xs ${isUser
                                            ? "bg-[#101B30] text-white rounded-br-xs"
                                            : "bg-white border border-[#E8E3D9] text-slate-800 rounded-bl-xs"
                                            }`}
                                    >
                                        <div className="flex items-center justify-between gap-3 mb-1">
                                            <span className={`text-[10px] font-bold uppercase tracking-wider ${isUser ? "text-emerald-300" : "text-[#046C4E]"}`}>
                                                {isUser ? "You" : "ADIKHAR Assistant"}
                                            </span>
                                            <span className="text-[9px] text-[#101B30]/50">
                                                {m.timestamp ? new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ""}
                                            </span>
                                        </div>

                                        {/* Render formatted message */}
                                        <div className="whitespace-pre-wrap space-y-1">
                                            {m.text.split("\n").map((line, i) => {
                                                if (line.startsWith("### ")) {
                                                    return <h4 key={i} className="font-bold text-slate-900 text-sm mt-1.5 mb-1">{line.replace("### ", "")}</h4>;
                                                }
                                                if (line.startsWith("**") && line.endsWith("**")) {
                                                    return <div key={i} className="font-bold text-slate-900 mt-1">{line.replace(/\*\*/g, "")}</div>;
                                                }
                                                return <p key={i}>{line}</p>;
                                            })}
                                        </div>

                                        {/* Official Portal Link if referenced */}
                                        {m.officialUrl && (
                                            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
                                                <a
                                                    href={m.officialUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1 font-bold text-[#046C4E] hover:underline text-xs"
                                                >
                                                    Open Official Portal <ExternalLink className="h-3 w-3" />
                                                </a>
                                            </div>
                                        )}

                                        {/* Speech synthesis controls on assistant response */}
                                        {!isUser && (
                                            <div className="mt-2.5 pt-1.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                                                {isSpeakingThis ? (
                                                    <button
                                                        onClick={handleStopSpeaking}
                                                        className="inline-flex items-center gap-1 font-bold text-rose-600 hover:text-rose-700"
                                                    >
                                                        <VolumeX className="h-3 w-3" /> Stop Speaking
                                                    </button>
                                                ) : (
                                                    <button
                                                        onClick={() => handlePlayAloud(m.text, idx)}
                                                        className="inline-flex items-center gap-1 font-semibold text-[#046C4E] hover:text-[#046C4E]"
                                                    >
                                                        <Volume2 className="h-3 w-3" /> Listen
                                                    </button>
                                                )}

                                                <span className="text-[10px] text-[#101B30]/50">
                                                    {m.source === "offline_database" ? "Offline Storage" : "Verified Guide"}
                                                </span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Follow-up suggestion pills */}
                                    {!isUser && m.suggestions && m.suggestions.length > 0 && (
                                        <div className="mt-2 flex flex-wrap gap-1.5 max-w-[90%]">
                                            {m.suggestions.map((sug, sIdx) => (
                                                <button
                                                    key={sIdx}
                                                    onClick={() => handleSendMessage(sug)}
                                                    className="rounded-full border border-[#BBF7D0] bg-white px-2.5 py-1 text-[11px] font-semibold text-[#046C4E] hover:bg-[#F0FDF4] transition-colors shadow-2xs text-left"
                                                >
                                                    {sug}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}

                        {/* Loading pulse indicator */}
                        {isLoading && (
                            <div className="flex items-center gap-2 text-[#101B30]/60 bg-white border border-[#E8E3D9] rounded-2xl p-3 w-36 shadow-xs">
                                <div className="h-2 w-2 rounded-full bg-[#07966B] animate-ping" />
                                <span className="text-xs font-semibold">Thinking...</span>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* Unified Input Section: Text Input + Microphone inside container */}
                    <div className="border-t border-[#E8E3D9] bg-white p-3">
                        {/* Audio Waveform / Listening State indicator */}
                        {isListening && (
                            <div className="mb-2 flex items-center justify-between rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] px-3 py-1.5 text-xs text-[#065F46]">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-0.5 h-3">
                                        <div className="h-full w-1 bg-[#07966B] animate-pulse" />
                                        <div className="h-2 w-1 bg-[#07966B] animate-pulse delay-75" />
                                        <div className="h-full w-1 bg-[#07966B] animate-pulse delay-150" />
                                    </div>
                                    <span className="font-bold">
                                        Listening in {LANGUAGES.find(l => l.code === selectedLang)?.label}... Speak now.
                                    </span>
                                </div>
                                <button
                                    onClick={toggleListening}
                                    className="font-bold text-rose-600 hover:underline text-[11px]"
                                >
                                    Stop
                                </button>
                            </div>
                        )}

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSendMessage();
                            }}
                            className="flex items-center gap-1.5 rounded-2xl border border-[#E8E3D9] bg-slate-50/70 p-1.5 focus-within:border-[#07966B] focus-within:bg-white transition-all shadow-xs"
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Ask anything about government schemes, healthcare, education, or other topics..."
                                className="flex-1 bg-transparent px-3 py-1.5 text-xs sm:text-sm text-slate-900 placeholder:text-[#101B30]/50 focus:outline-none"
                            />

                            {/* Integrated Microphone Button */}
                            <button
                                type="button"
                                onClick={toggleListening}
                                data-testid="smart-assistant-mic-button"
                                title={isListening ? "Stop listening" : "Speak your question"}
                                className={`grid h-8 w-8 place-items-center rounded-xl transition-all ${isListening
                                    ? "bg-rose-600 text-white animate-pulse"
                                    : "text-[#101B30]/60 hover:bg-slate-200 hover:text-slate-800"
                                    }`}
                            >
                                {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                            </button>

                            {/* Send Button */}
                            <button
                                type="submit"
                                disabled={!inputValue.trim() || isLoading}
                                data-testid="smart-assistant-send-button"
                                title="Send question"
                                className="grid h-8 w-8 place-items-center rounded-xl bg-[#07966B] text-white hover:bg-[#057A55] disabled:opacity-40 transition-colors shadow-xs"
                            >
                                <Send className="h-3.5 w-3.5" />
                            </button>
                        </form>

                        <div className="mt-1.5 flex items-center justify-between text-[10px] text-[#101B30]/50 px-1">
                            <span>ADIKHAR verified schemes & citizen intelligence</span>
                            <span>{selectedLang.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

