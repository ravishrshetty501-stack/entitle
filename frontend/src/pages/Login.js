import { useEffect, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { GraduationCap, HeartPulse, Home, Loader2, ShieldCheck } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { api, errorMessage } from "@/lib/api";
import { toast } from "sonner";

const ICONS = { student: GraduationCap, household: Home, healthcare: HeartPulse };

export default function Login() {
    const { user, loginDemo } = useAuth();
    const nav = useNavigate();
    const location = useLocation();
    const [personas, setPersonas] = useState([]);
    const [busy, setBusy] = useState(null);
    useEffect(() => { api.demo.personas().then(setPersonas).catch(() => { }); }, []);

    if (user) return <Navigate to={location.state?.from || "/dashboard"} replace />;

    const google = () => {
        // REMINDER: DO NOT HARDCODE THE URL, OR ADD ANY FALLBACKS OR REDIRECT URLS, THIS BREAKS THE AUTH
        const redirectUrl = window.location.origin + "/dashboard";
        window.location.href = `https://auth.emergentagent.com/?redirect=${encodeURIComponent(redirectUrl)}`;
    };

    const demo = async (id) => {
        setBusy(id);
        try {
            await loginDemo(id);
            nav(location.state?.from || "/dashboard");
        } catch (e) {
            toast.error(errorMessage(e));
        } finally {
            setBusy(null);
        }
    };

    return (
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
            <div className="rise">
                <h1 className="text-4xl font-bold text-[#101B30]">Sign in to ADIKHAR</h1>
                <p className="mt-3 text-slate-600">Save your results, prepare documents and track applications. We only use your name and email from Google.</p>
                <button onClick={google} data-testid="google-signin-button"
                    className="mt-8 flex w-full max-w-sm items-center justify-center gap-3 rounded-full border border-[#E8E3D9] bg-white px-6 py-3.5 font-semibold text-slate-800 shadow-sm transition-colors hover:bg-slate-50">
                    <svg className="h-5 w-5" viewBox="0 0 48 48" aria-hidden><path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.4-.4-3.5z" /><path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7z" /><path fill="#4CAF50" d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.2 35.1 26.7 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.5 39.6 16.2 44 24 44z" /><path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.2-2.2 4.2-4.1 5.6l6.2 5.2C37 39.2 44 34 44 24c0-1.3-.1-2.4-.4-3.5z" /></svg>
                    Continue with Google
                </button>
                <p className="mt-6 flex items-center gap-2 text-xs text-slate-500"><ShieldCheck className="h-4 w-4 text-[#07966B]" />No Aadhaar, bank or government ID numbers are ever requested.</p>
            </div>
            <div className="rise rounded-2xl border border-[#E8E3D9] bg-white p-6 shadow-sm" style={{ animationDelay: "120ms" }}>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#07966B]">Demo access</p>
                <h2 className="mt-1 text-xl font-semibold text-slate-900">Explore instantly as a demo citizen</h2>
                <p className="mt-1 text-sm text-slate-500">Fictional personas with pre-filled profiles. Data is shared demo data.</p>
                <div className="mt-5 space-y-3">
                    {personas.map((p) => {
                        const Icon = ICONS[p.id] || HeartPulse;
                        return (
                            <button key={p.id} onClick={() => demo(p.id)} disabled={!!busy} data-testid={`demo-persona-${p.id}`}
                                className="flex w-full items-start gap-4 rounded-xl border border-[#E8E3D9] p-4 text-left transition-colors hover:border-teal-400 hover:bg-[#F0FDF4]/40 disabled:opacity-60">
                                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#101B30] text-white">{busy === p.id ? <Loader2 className="h-5 w-5 animate-spin" /> : <Icon className="h-5 w-5" />}</span>
                                <span>
                                    <span className="block font-semibold text-slate-900">{p.name} <span className="font-normal text-slate-500">Â· {p.role}</span></span>
                                    <span className="mt-0.5 block text-sm text-slate-600">{p.story}</span>
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
