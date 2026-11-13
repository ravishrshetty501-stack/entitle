import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import {
    Bell,
    Globe,
    LogOut,
    Menu,
    User,
    X,
    Search,
    Shield,
    DownloadCloud,
    Sparkles,
    ExternalLink
} from "lucide-react";
import Logo from "@/components/Logo";
import SmartAssistant from "@/components/SmartAssistant";
import { useAuth } from "@/context/AuthContext";
import { useLang } from "@/context/LangContext";
import { useAssistant } from "@/context/AssistantContext";
import { LANGS } from "@/lib/i18n";
import { api } from "@/lib/api";

function ConnectivityBadge() {
    const [online, setOnline] = useState(typeof navigator !== "undefined" ? navigator.onLine : true);
    const [hasUpdate, setHasUpdate] = useState(false);

    useEffect(() => {
        const on = () => setOnline(true);
        const off = () => setOnline(false);
        const update = () => setHasUpdate(true);
        window.addEventListener("online", on);
        window.addEventListener("offline", off);
        window.addEventListener("entitle:sw-update-available", update);
        return () => {
            window.removeEventListener("online", on);
            window.removeEventListener("offline", off);
            window.removeEventListener("entitle:sw-update-available", update);
        };
    }, []);

    if (hasUpdate) {
        return (
            <Link
                to="/offline-download"
                className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 px-2.5 py-1 text-[11px] font-bold text-amber-700 hover:bg-amber-500/25 transition-colors"
                title="Application update available"
            >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping" />
                UPDATE
            </Link>
        );
    }

    return (
        <Link
            to="/offline-download"
            data-testid="header-connectivity-badge"
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold border transition-colors ${online
                ? "border-emerald-500/30 bg-emerald-50 text-emerald-800 hover:bg-emerald-100/70"
                : "border-amber-500/30 bg-amber-50 text-amber-800 hover:bg-amber-100"
                }`}
            title={online ? "Connected to internet. Live RAG & external portal sync active." : "Operating in offline mode. Local IndexedDB storage active."}
        >
            <span className={`h-1.5 w-1.5 rounded-full ${online ? "bg-emerald-500" : "bg-amber-500 animate-pulse"}`} />
            <span className="text-[10px] tracking-wider uppercase">{online ? "ONLINE" : "OFFLINE"}</span>
        </Link>
    );
}

function LanguageSelect() {
    const { lang, setLang } = useLang();
    return (
        <label className="flex items-center gap-1.5 rounded-full border border-slate-200 px-2.5 py-1 text-xs text-slate-700 hover:border-emerald-500/50 transition-colors bg-white">
            <Globe className="h-3.5 w-3.5 text-emerald-600" aria-hidden />
            <span className="sr-only">Language</span>
            <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                data-testid="language-selector"
                className="cursor-pointer bg-transparent text-xs font-semibold text-slate-800 focus:outline-none"
            >
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
        <Link to="/notifications" data-testid="notification-bell" aria-label={`Notifications, ${count} unread`} className="relative grid h-8 w-8 place-items-center rounded-full text-slate-600 hover:bg-slate-100 transition-colors">
            <Bell className="h-4 w-4" />
            {count > 0 && <span data-testid="notification-count" className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-emerald-600 px-1 text-[10px] font-bold text-white">{count}</span>}
        </Link>
    );
}

export function Header() {
    const { user, logout } = useAuth();
    const { t } = useLang();
    const { toggleAssistant } = useAssistant();
    const nav = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 15);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = user
        ? [
            { to: "/schemes", label: "Explore Schemes" },
            { to: "/simulator", label: "Discovery Simulator" },
            { to: "/vault", label: "Document Vault" },
            { to: "/dashboard", label: "Dashboard" },
            { to: "/impact", label: "Impact" }
        ]
        : [
            { to: "/schemes", label: "Explore Schemes" },
            { to: "/simulator", label: "Discovery Simulator" },
            { to: "/impact", label: "Impact" },
            { to: "/#about", label: "About", isAnchor: true }
        ];

    const doLogout = async () => { await logout(); nav("/"); };
    
    const linkCls = ({ isActive }) => 
        `px-3 py-1.5 text-sm font-semibold transition-colors rounded-full ${
            isActive 
                ? "text-emerald-700 bg-emerald-50 font-bold" 
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/70"
        }`;

    const handleAnchorClick = (e, to) => {
        if (to === "/#about") {
            e.preventDefault();
            if (location.pathname !== "/") {
                nav("/#about");
            } else {
                const el = document.getElementById("about");
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }
            setOpen(false);
        }
    };

    return (
        <header className={`sticky top-0 z-40 transition-all duration-300 ${
            scrolled 
                ? "border-b border-slate-200/90 bg-white/95 backdrop-blur-md shadow-xs" 
                : "border-b border-slate-200/60 bg-white/85 backdrop-blur-xs"
        }`}>
            <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
                <Logo />

                {/* Minimalist Center Navigation */}
                <nav className="ml-8 hidden items-center gap-1.5 lg:flex" aria-label="Main">
                    {links.map((item) => (
                        item.isAnchor ? (
                            <a
                                key={item.to}
                                href={item.to}
                                onClick={(e) => handleAnchorClick(e, item.to)}
                                className="px-3 py-1.5 text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 rounded-full transition-colors"
                            >
                                {item.label}
                            </a>
                        ) : (
                            <NavLink 
                                key={item.to} 
                                to={item.to} 
                                className={linkCls} 
                                data-testid={`nav-${item.to.replace(/[^a-zA-Z0-9]/g, "")}`}
                            >
                                {item.label}
                            </NavLink>
                        )
                    ))}
                </nav>

                {/* Right Controls */}
                <div className="ml-auto flex items-center gap-2 sm:gap-3">
                    <ConnectivityBadge />

                    <button
                        onClick={toggleAssistant}
                        data-testid="header-ask-assistant-button"
                        title="Open ENTITLE Smart Assistant"
                        className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-emerald-600/30 bg-emerald-50 hover:bg-emerald-100 px-3.5 py-1.5 text-xs font-bold text-emerald-800 transition-colors shadow-2xs"
                    >
                        <Sparkles className="h-3.5 w-3.5 text-emerald-600" /> Ask ENTITLE
                    </button>

                    <LanguageSelect />

                    {user ? (
                        <>
                            <Bellicon />
                            <Link to="/profile" data-testid="nav-profile" className="hidden items-center gap-2 rounded-full px-2.5 py-1 text-sm font-semibold text-slate-700 hover:bg-slate-100 sm:flex transition-colors">
                                {user.picture ? <img src={user.picture} alt="" className="h-6 w-6 rounded-full border border-emerald-500/40" /> : <User className="h-4 w-4" />}
                                <span className="max-w-[7rem] truncate">{user.name}</span>
                            </Link>
                            <button onClick={doLogout} data-testid="logout-button" aria-label={t("nav.signout")} className="hidden h-8 w-8 place-items-center rounded-full text-slate-500 hover:bg-slate-100 sm:grid transition-colors">
                                <LogOut className="h-4 w-4" />
                            </button>
                        </>
                    ) : (
                        <Link to="/login" data-testid="nav-signin" className="whitespace-nowrap rounded-full bg-slate-900 hover:bg-emerald-700 px-4 py-1.5 text-xs sm:text-sm font-bold text-white transition-colors shadow-xs">
                            {t("nav.signin")}
                        </Link>
                    )}

                    {/* Mobile toggle */}
                    <button className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-slate-700 lg:hidden hover:bg-slate-100" onClick={() => setOpen(!open)} data-testid="mobile-menu-toggle" aria-label="Menu">
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {open && (
                <nav className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden space-y-1 shadow-lg" aria-label="Mobile">
                    {links.map((item) => (
                        item.isAnchor ? (
                            <a
                                key={item.to}
                                href={item.to}
                                onClick={(e) => handleAnchorClick(e, item.to)}
                                className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                            >
                                {item.label}
                            </a>
                        ) : (
                            <NavLink 
                                key={item.to} 
                                to={item.to} 
                                onClick={() => setOpen(false)} 
                                className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100"
                            >
                                {item.label}
                            </NavLink>
                        )
                    ))}
                    
                    <NavLink to="/vault" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                        Document Vault
                    </NavLink>
                    <NavLink to="/offline-download" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100">
                        Offline Download Center
                    </NavLink>

                    <button
                        onClick={() => {
                            setOpen(false);
                            toggleAssistant();
                        }}
                        className="block w-full text-left rounded-lg px-3 py-2 text-sm text-emerald-700 hover:bg-emerald-50 font-bold"
                    >
                        ✨ Ask ENTITLE Smart Assistant
                    </button>

                    {user && (
                        <button onClick={doLogout} className="block w-full rounded-lg px-3 py-2 text-left text-sm text-rose-600 hover:bg-rose-50 font-bold">
                            {t("nav.signout")}
                        </button>
                    )}
                </nav>
            )}
        </header>
    );
}

export function Footer() {
    const { openAssistant } = useAssistant();
    return (
        <footer className="bg-[#090D16] text-white border-t border-slate-800" data-testid="site-footer">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
                <div className="md:col-span-2 space-y-4">
                    <Logo light />
                    <p className="max-w-md text-sm leading-relaxed text-slate-400">
                        ENTITLE is India's independent public-interest welfare scheme discovery and eligibility intelligence platform. We organize 107 verified Central and State initiatives into an explainable, accessible, and offline-capable resource.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                        <Link to="/offline-download" className="hover:text-emerald-400 hover:underline">
                            Offline Center & Cache
                        </Link>
                        <span>•</span>
                        <Link to="/vault" className="hover:text-emerald-400 hover:underline">
                            Client-Side Document Vault
                        </Link>
                        <span>•</span>
                        <Link to="/privacy" className="hover:text-emerald-400 hover:underline">
                            Privacy Policy
                        </Link>
                    </div>
                </div>

                <div>
                    <p className="mb-3.5 text-xs font-bold uppercase tracking-wider text-slate-300">Platform Navigation</p>
                    <ul className="space-y-2.5 text-sm text-slate-400">
                        <li><Link to="/schemes" className="hover:text-white font-medium text-emerald-400">Explore 107 Schemes</Link></li>
                        <li>
                            <button
                                onClick={() => openAssistant()}
                                className="hover:text-white text-left font-medium text-emerald-400 flex items-center gap-1.5"
                            >
                                <Sparkles className="h-3 w-3 text-emerald-400" /> Ask Smart Assistant
                            </button>
                        </li>
                        <li><Link to="/simulator" className="hover:text-white">Discovery Simulator</Link></li>
                        <li><Link to="/vault" className="hover:text-white">Encrypted Document Vault</Link></li>
                        <li><Link to="/impact" className="hover:text-white">Impact & SDG Metrics</Link></li>
                        <li><Link to="/privacy" className="hover:text-white">About ENTITLE</Link></li>
                    </ul>
                </div>

                <div>
                    <p className="mb-3.5 text-xs font-bold uppercase tracking-wider text-slate-300">Official Public Portals</p>
                    <ul className="space-y-2.5 text-sm text-slate-400">
                        <li><a href="https://www.myscheme.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">myScheme.gov.in <ExternalLink className="h-3 w-3 text-slate-500" /></a></li>
                        <li><a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">National Scholarship Portal <ExternalLink className="h-3 w-3 text-slate-500" /></a></li>
                        <li><a href="https://pmjay.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">Ayushman Bharat (PM-JAY) <ExternalLink className="h-3 w-3 text-slate-500" /></a></li>
                        <li><a href="https://adip.disabilityaffairs.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">ADIP Portal (DEPwD) <ExternalLink className="h-3 w-3 text-slate-500" /></a></li>
                        <li><a href="https://sevasindhu.karnataka.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">Karnataka Seva Sindhu <ExternalLink className="h-3 w-3 text-slate-500" /></a></li>
                    </ul>
                </div>
            </div>

            {/* Mandatory Government Source Disclaimer */}
            <div className="border-t border-slate-800 bg-[#060910] py-6 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl text-center space-y-2">
                    <p className="text-xs font-semibold text-slate-300">
                        Official Disclaimer: ENTITLE is an independent scheme discovery and eligibility guidance platform. It is not a government authority and does not directly approve or process government applications.
                    </p>
                    <p className="text-[11px] text-slate-500">
                        All applications must be submitted directly through official central and state government portals or designated district administrative centers.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default function AppShell({ children }) {
    const { lang, t } = useLang();
    return (
        <div className="flex min-h-screen flex-col bg-white text-slate-900">
            <Header />
            {lang !== "en" && <div className="bg-amber-50 border-b border-amber-200 px-4 py-2 text-center text-xs text-amber-900 font-semibold" data-testid="translation-notice">{t("lang.notice")}</div>}
            <main className="flex-1">{children}</main>
            <Footer />
            {/* Unified Floating Smart Assistant on every page */}
            <SmartAssistant />
        </div>
    );
}