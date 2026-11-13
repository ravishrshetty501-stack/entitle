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
    ExternalLink,
    HelpCircle
} from "lucide-react";
import Logo from "@/components/Logo";
import AssistantLogo from "@/components/AssistantLogo";
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
                className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 px-2.5 py-1 text-[11px] font-bold text-amber-800 hover:bg-amber-500/25 transition-colors"
                title="New ADIKHAR update available"
            >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-ping" />
                UPDATE AVAILABLE
            </Link>
        );
    }

    return (
        <Link
            to="/offline-download"
            data-testid="header-connectivity-badge"
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-bold border transition-colors ${online
                ? "border-[#07966B]/30 bg-[#F0FDF4] text-[#046C4E] hover:bg-[#DCFCE7]"
                : "border-amber-500/30 bg-amber-50 text-amber-800 hover:bg-amber-100"
                }`}
            title={online ? "Connected to Internet. Real-time RAG & cloud services active." : "Operating in 100% Offline Mode. Local IndexedDB storage active."}
        >
            <span className={`h-1.5 w-1.5 rounded-full ${online ? "bg-[#07966B]" : "bg-amber-500 animate-pulse"}`} />
            <span className="text-[10px] tracking-wider uppercase">{online ? "ONLINE" : "OFFLINE"}</span>
        </Link>
    );
}

function LanguageSelect() {
    const { lang, setLang } = useLang();
    return (
        <label className="flex items-center gap-1.5 rounded-full border border-[#E8E3D9] px-2.5 py-1 text-xs text-[#101B30] hover:border-[#07966B] transition-colors bg-white shadow-2xs">
            <Globe className="h-3.5 w-3.5 text-[#07966B]" aria-hidden />
            <span className="sr-only">Language</span>
            <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                data-testid="language-selector"
                className="cursor-pointer bg-transparent text-xs font-semibold text-[#101B30] focus:outline-none"
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
            {count > 0 && <span data-testid="notification-count" className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-[#07966B] px-1 text-[10px] font-bold text-white">{count}</span>}
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
    const [headerSearch, setHeaderSearch] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 15);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (headerSearch.trim()) {
            nav(`/schemes?q=${encodeURIComponent(headerSearch.trim())}`);
            setHeaderSearch("");
        }
    };

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
            { to: "/vault", label: "Document Vault" },
            { to: "/impact", label: "Impact" },
            { to: "/#about", label: "About", isAnchor: true }
        ];

    const doLogout = async () => { await logout(); nav("/"); };
    
    const linkCls = ({ isActive }) => 
        `px-3.5 py-1.5 text-xs sm:text-sm font-semibold transition-colors rounded-full ${
            isActive 
                ? "text-[#046C4E] bg-[#E8F7F0] font-bold" 
                : "text-[#101B30]/80 hover:text-[#101B30] hover:bg-[#F4EFE6]"
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
        <header className="sticky top-0 z-40">
            {/* Indian Tricolor Stripe Accent at the very top (matching reference header) */}
            <div className="h-1 bg-gradient-to-r from-[#F28C28] via-white to-[#07966B]" />

            <div className={`transition-all duration-300 ${
                scrolled 
                    ? "border-b border-[#E8E3D9] bg-[#FBF8F1]/95 backdrop-blur-md shadow-xs" 
                    : "border-b border-[#E8E3D9]/80 bg-[#FBF8F1]/90 backdrop-blur-xs"
            }`}>
                <div className="mx-auto flex h-16 max-w-7xl items-center gap-2 px-4 sm:gap-4 sm:px-6 lg:px-8">
                    
                    {/* ADIKHAR Official Logo */}
                    <Logo />

                    {/* Header Quick Search Pill (Direct inspiration from reference image top bar) */}
                    <form 
                        onSubmit={handleSearchSubmit}
                        className="hidden md:flex items-center gap-2 rounded-full border border-[#E8E3D9] bg-white px-3.5 py-1.5 shadow-2xs focus-within:border-[#07966B] focus-within:ring-2 focus-within:ring-[#07966B]/15 transition-all max-w-xs lg:max-w-sm w-full ml-4"
                    >
                        <Search className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                        <input
                            type="text"
                            value={headerSearch}
                            onChange={(e) => setHeaderSearch(e.target.value)}
                            placeholder="Enter scheme name to search..."
                            className="w-full text-xs text-[#101B30] placeholder:text-slate-400 bg-transparent focus:outline-none font-medium"
                        />
                    </form>

                    {/* Center Navigation Links */}
                    <nav className="ml-4 hidden items-center gap-1 xl:flex" aria-label="Main">
                        {links.map((item) => (
                            item.isAnchor ? (
                                <a
                                    key={item.to}
                                    href={item.to}
                                    onClick={(e) => handleAnchorClick(e, item.to)}
                                    className="px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#101B30]/80 hover:text-[#101B30] hover:bg-[#F4EFE6] rounded-full transition-colors"
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

                    {/* Right Action Controls */}
                    <div className="ml-auto flex items-center gap-2 sm:gap-3">
                        <ConnectivityBadge />

                        {/* Ask ADIKHAR Assistant Button */}
                        <button
                            onClick={toggleAssistant}
                            data-testid="header-ask-assistant-button"
                            title="Open ADIKHAR Smart Assistant"
                            className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#07966B]/30 bg-white hover:bg-[#E8F7F0] px-3.5 py-1.5 text-xs font-bold text-[#046C4E] transition-all shadow-2xs hover:scale-102"
                        >
                            <AssistantLogo size="sm" />
                            <span>Ask ADIKHAR</span>
                        </button>

                        <LanguageSelect />

                        {user ? (
                            <>
                                <Bellicon />
                                <Link to="/profile" data-testid="nav-profile" className="hidden items-center gap-2 rounded-full px-2.5 py-1 text-sm font-semibold text-[#101B30] hover:bg-white sm:flex transition-colors border border-transparent hover:border-[#E8E3D9]">
                                    {user.picture ? <img src={user.picture} alt="" className="h-6 w-6 rounded-full border border-[#07966B]/40" /> : <User className="h-4 w-4" />}
                                    <span className="max-w-[7rem] truncate">{user.name}</span>
                                </Link>
                                <button onClick={doLogout} data-testid="logout-button" aria-label={t("nav.signout")} className="hidden h-8 w-8 place-items-center rounded-full text-slate-500 hover:bg-white sm:grid transition-colors">
                                    <LogOut className="h-4 w-4" />
                                </button>
                            </>
                        ) : (
                            <Link 
                                to="/login" 
                                data-testid="nav-signin" 
                                className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-[#07966B] hover:bg-[#057A55] px-4 py-1.5 text-xs sm:text-sm font-bold text-white transition-all shadow-sm hover:shadow-md"
                            >
                                <span>Sign In</span>
                                <span className="text-white/80 font-normal">→</span>
                            </Link>
                        )}

                        {/* Mobile Menu Trigger */}
                        <button className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-[#101B30] xl:hidden hover:bg-white" onClick={() => setOpen(!open)} data-testid="mobile-menu-toggle" aria-label="Menu">
                            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {open && (
                    <nav className="border-t border-[#E8E3D9] bg-[#FBF8F1] px-4 py-4 xl:hidden space-y-1 shadow-lg" aria-label="Mobile">
                        {/* Mobile Search */}
                        <form onSubmit={handleSearchSubmit} className="mb-3 flex items-center gap-2 rounded-full border border-[#E8E3D9] bg-white px-3.5 py-2">
                            <Search className="h-4 w-4 text-slate-400" />
                            <input
                                type="text"
                                value={headerSearch}
                                onChange={(e) => setHeaderSearch(e.target.value)}
                                placeholder="Search schemes (ADIP, PM-KISAN)..."
                                className="w-full text-xs text-[#101B30] bg-transparent focus:outline-none font-medium"
                            />
                        </form>

                        {links.map((item) => (
                            item.isAnchor ? (
                                <a
                                    key={item.to}
                                    href={item.to}
                                    onClick={(e) => handleAnchorClick(e, item.to)}
                                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#101B30] hover:bg-white"
                                >
                                    {item.label}
                                </a>
                            ) : (
                                <NavLink 
                                    key={item.to} 
                                    to={item.to} 
                                    onClick={() => setOpen(false)} 
                                    className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#101B30] hover:bg-white"
                                >
                                    {item.label}
                                </NavLink>
                            )
                        ))}
                        
                        <NavLink to="/vault" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#101B30] hover:bg-white">
                            Document Vault
                        </NavLink>
                        <NavLink to="/offline-download" onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2 text-sm font-semibold text-[#101B30] hover:bg-white">
                            Offline Download Center
                        </NavLink>

                        <button
                            onClick={() => {
                                setOpen(false);
                                toggleAssistant();
                            }}
                            className="flex items-center gap-2 w-full text-left rounded-lg px-3 py-2 text-sm text-[#046C4E] hover:bg-[#E8F7F0] font-bold"
                        >
                            <AssistantLogo size="sm" /> Ask ADIKHAR Assistant
                        </button>

                        {user && (
                            <button onClick={doLogout} className="block w-full rounded-lg px-3 py-2 text-left text-sm text-rose-600 hover:bg-rose-50 font-bold">
                                {t("nav.signout")}
                            </button>
                        )}
                    </nav>
                )}
            </div>
        </header>
    );
}

export function Footer() {
    const { openAssistant } = useAssistant();
    return (
        <footer className="bg-[#101B30] text-white border-t border-[#1E293B]" data-testid="site-footer">
            
            {/* Top Hashtag Banner (inspired directly by reference image #GOVERNMENTSCHEMES / #SCHEMESFORYOU) */}
            <div className="border-b border-white/10 bg-[#0A1120] py-3.5 px-4 text-center">
                <p className="font-mono text-xs sm:text-sm font-bold tracking-[0.2em] text-[#34D399]">
                    #GOVERNMENTSCHEMES &nbsp;/&nbsp; #SCHEMESFORYOU &nbsp;/&nbsp; #ADIKHARBHARAT
                </p>
            </div>

            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8">
                <div className="md:col-span-2 space-y-4">
                    <Logo light />
                    <p className="max-w-md text-sm leading-relaxed text-slate-300 font-normal">
                        ADIKHAR is India's dedicated public-welfare scheme discovery and explainable eligibility platform. We organize 107 verified Central and State initiatives into an accessible, multilingual, and offline-capable digital public service.
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
                        <Link to="/offline-download" className="hover:text-[#34D399] hover:underline">
                            Offline Center & Cache
                        </Link>
                        <span>•</span>
                        <Link to="/vault" className="hover:text-[#34D399] hover:underline">
                            Client-Side Document Vault
                        </Link>
                        <span>•</span>
                        <Link to="/privacy" className="hover:text-[#34D399] hover:underline">
                            Privacy Policy
                        </Link>
                        <span>•</span>
                        <Link to="/impact" className="hover:text-[#34D399] hover:underline">
                            UN SDG Alignment
                        </Link>
                    </div>
                </div>

                <div>
                    <p className="mb-3.5 text-xs font-bold uppercase tracking-wider text-slate-200">Platform Navigation</p>
                    <ul className="space-y-2.5 text-sm text-slate-300">
                        <li><Link to="/schemes" className="hover:text-white font-medium text-[#34D399]">Explore 107 Schemes</Link></li>
                        <li>
                            <button
                                onClick={() => openAssistant()}
                                className="hover:text-white text-left font-medium text-[#34D399] flex items-center gap-1.5"
                            >
                                <AssistantLogo size="sm" /> Ask ADIKHAR Assistant
                            </button>
                        </li>
                        <li><Link to="/simulator" className="hover:text-white">Discovery Simulator</Link></li>
                        <li><Link to="/vault" className="hover:text-white">Encrypted Document Vault</Link></li>
                        <li><Link to="/impact" className="hover:text-white">Impact & SDG Metrics</Link></li>
                        <li><Link to="/privacy" className="hover:text-white">About ADIKHAR</Link></li>
                    </ul>
                </div>

                <div>
                    <p className="mb-3.5 text-xs font-bold uppercase tracking-wider text-slate-200">Official Public Portals</p>
                    <ul className="space-y-2.5 text-sm text-slate-300">
                        <li><a href="https://www.myscheme.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">myScheme.gov.in <ExternalLink className="h-3 w-3 text-slate-400" /></a></li>
                        <li><a href="https://scholarships.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">National Scholarship Portal <ExternalLink className="h-3 w-3 text-slate-400" /></a></li>
                        <li><a href="https://pmjay.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">Ayushman Bharat (PM-JAY) <ExternalLink className="h-3 w-3 text-slate-400" /></a></li>
                        <li><a href="https://adip.disabilityaffairs.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">ADIP Portal (DEPwD) <ExternalLink className="h-3 w-3 text-slate-400" /></a></li>
                        <li><a href="https://sevasindhu.karnataka.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1">Karnataka Seva Sindhu <ExternalLink className="h-3 w-3 text-slate-400" /></a></li>
                    </ul>
                </div>
            </div>

            {/* Public Service Government Source Disclaimer */}
            <div className="border-t border-white/10 bg-[#060B14] py-6 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-7xl text-center space-y-2">
                    <p className="text-xs font-semibold text-slate-300">
                        Official Notice: ADIKHAR is an open civic welfare discovery and explainable pre-qualification platform. It is not an issuing authority and does not collect application fees.
                    </p>
                    <p className="text-[11px] text-slate-400">
                        All welfare applications are submitted and verified directly on official central/state government portals or at authorized district Seva Kendra camps.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default function AppShell({ children }) {
    const { lang, t } = useLang();
    return (
        <div className="flex min-h-screen flex-col bg-[#FBF8F1] text-[#101B30]">
            <Header />
            {lang !== "en" && <div className="bg-[#FFF7ED] border-b border-[#FED7AA] px-4 py-2 text-center text-xs text-[#9A3412] font-semibold" data-testid="translation-notice">{t("lang.notice")}</div>}
            <main className="flex-1">{children}</main>
            <Footer />
            {/* Unified Floating ADIKHAR Assistant on every page */}
            <SmartAssistant />
        </div>
    );
}
