import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Bell, Bot, Globe, LogOut, Menu, User, X } from "lucide-react";
import Logo from "@/components/Logo";
import GuideDrawer from "@/components/GuideDrawer";
import { useAuth } from "@/context/AuthContext";
import { useLang } from "@/context/LangContext";
import { useGuide } from "@/context/GuideContext";
import { LANGS } from "@/lib/i18n";
import { api } from "@/lib/api";

function LanguageSelect() {
    const { lang, setLang } = useLang();
    return (
        <label className="flex items-center gap-1.5 rounded-full border border-white/15 px-2 py-1.5 text-sm text-slate-200 sm:px-2.5">
            <Globe className="hidden h-4 w-4 sm:block" aria-hidden />
            <span className="sr-only">Language</span>
            <select value={lang} onChange={(e) => setLang(e.target.value)} data-testid="language-selector"
                className="cursor-pointer bg-transparent text-sm text-white focus:outline-none [&>option]:text-slate-900">
                {LANGS.map((l) => <option key={l.code} value={l.code}>{l.label}</option>)}
            </select>
        </label>
    );
}

function Bellicon() {
    const { pathname } = useLocation();
    const [count, setCount] = useState(0);
    useEffect(() => {
        const load = () => api.notifications.list().then((n) => setCount(n.filter((x) => !x.readStatus).length)).catch(() => { });
        load();
        window.addEventListener("entitle:notifications", load);
        return () => window.removeEventListener("entitle:notifications", load);
    }, [pathname]);
    return (
        <Link to="/notifications" data-testid="notification-bell" aria-label={`Notifications, ${count} unread`} className="relative grid h-9 w-9 place-items-center rounded-full text-slate-200 hover:bg-white/10">
            <Bell className="h-5 w-5" />
            {count > 0 && <span data-testid="notification-count" className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-amber-400 px-1 text-[11px] font-bold text-[#0a192f]">{count}</span>}
        </Link>
    );
}

export function Header() {
    const { user, logout } = useAuth();
    const { t } = useLang();
    const nav = useNavigate();
    const [open, setOpen] = useState(false);
    const links = user
        ? [["/dashboard", "nav.dashboard"], ["/results", "nav.results"], ["/schemes", "nav.schemes"], ["/applications", "nav.applications"], ["/simulator", "nav.simulator"]]
        : [["/simulator", "nav.simulator"], ["/schemes", "nav.schemes"], ["/impact", "nav.impact"], ["/privacy", "nav.privacy"]];
    const doLogout = async () => { await logout(); nav("/"); };
    const linkCls = ({ isActive }) => `rounded-full px-3 py-1.5 text-sm transition-colors ${isActive ? "bg-white/10 text-white" : "text-slate-300 hover:text-white"}`;

    return (
        <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a192f]/95 backdrop-blur-md">
            <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-3 sm:gap-4 sm:px-6 lg:px-8">
                <Logo light />
                <nav className="ml-6 hidden items-center gap-1 lg:flex" aria-label="Main">
                    {links.map(([to, k]) => <NavLink key={to} to={to} className={linkCls} data-testid={`nav-${to.slice(1)}`}>{t(k)}</NavLink>)}
                </nav>
                <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
                    <LanguageSelect />
                    {user ? (
                        <>
                            <Bellicon />
                            <Link to="/profile" data-testid="nav-profile" className="hidden items-center gap-2 rounded-full px-2 py-1 text-sm text-slate-200 hover:bg-white/10 sm:flex">
                                {user.picture ? <img src={user.picture} alt="" className="h-7 w-7 rounded-full" /> : <User className="h-5 w-5" />}
                                <span className="max-w-[8rem] truncate">{user.name}</span>
                            </Link>
                            <button onClick={doLogout} data-testid="logout-button" aria-label={t("nav.signout")} className="hidden h-9 w-9 place-items-center rounded-full text-slate-300 hover:bg-white/10 sm:grid">
                                <LogOut className="h-4 w-4" />
                            </button>
                        </>
                    ) : (
                        <Link to="/login" data-testid="nav-signin" className="whitespace-nowrap rounded-full bg-white px-3 py-2 text-sm font-semibold text-[#0a192f] sm:px-4 transition-colors hover:bg-teal-50">{t("nav.signin")}</Link>
                    )}
                    <button className="grid h-9 w-9 shrink-0 place-items-center rounded-full text-white lg:hidden" onClick={() => setOpen(!open)} data-testid="mobile-menu-toggle" aria-label="Menu">
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>
            {open && (
                <nav className="border-t border-white/10 px-4 py-3 lg:hidden" aria-label="Mobile">
                    {[...links, ...(user ? [["/profile", "nav.profile"], ["/notifications", "nav.notifications"]] : [])].map(([to, k]) => (
                        <NavLink key={to} to={to} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 text-slate-200 hover:bg-white/10">{t(k)}</NavLink>
                    ))}
                    {user && <button onClick={doLogout} className="block w-full rounded-lg px-3 py-2.5 text-left text-slate-200 hover:bg-white/10">{t("nav.signout")}</button>}
                </nav>
            )}
        </header>
    );
}

export function Footer() {
    return (
        <footer className="mt-24 bg-[#0a192f] text-slate-300" data-testid="site-footer">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
                <div className="md:col-span-2">
                    <Logo light />
                    <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">Benefits You Deserve. Access You Can Trust. An independent prototype — not affiliated with any government body.</p>
                </div>
                <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Platform</p>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/simulator" className="hover:text-white">Benefits Discovery Simulator</Link></li>
                        <li><Link to="/schemes" className="hover:text-white">Explore schemes</Link></li>
                        <li><Link to="/impact" className="hover:text-white">Impact (demo data)</Link></li>
                    </ul>
                </div>
                <div>
                    <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">Trust</p>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/privacy" className="hover:text-white">Privacy & transparency</Link></li>
                        <li><a href="https://www.myscheme.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white">myScheme (official)</a></li>
                        <li><a href="https://www.india.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white">National Portal of India</a></li>
                    </ul>
                </div>
            </div>
            <p className="border-t border-white/10 py-5 text-center text-xs text-slate-500">Eligibility results are informational and are not official government decisions.</p>
        </footer>
    );
}

export default function AppShell({ children }) {
    const { lang, t } = useLang();
    const { openGuide } = useGuide();
    return (
        <div className="flex min-h-screen flex-col bg-[#fbfaf7]">
            <Header />
            {lang !== "en" && <div className="bg-amber-50 px-4 py-2 text-center text-xs text-amber-900" data-testid="translation-notice">{t("lang.notice")}</div>}
            <main className="flex-1">{children}</main>
            <Footer />
            <button onClick={() => openGuide(null)} data-testid="ai-guide-chat-trigger"
                className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#0d9488] px-4 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5">
                <Bot className="h-5 w-5" /> <span className="hidden sm:inline">ENTITLE Guide</span>
            </button>
            <GuideDrawer />
        </div>
    );
}
