import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { LangProvider } from "@/context/LangContext";
import { AssistantProvider } from "@/context/AssistantContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import AppShell from "@/components/AppShell";
import ProtectedRoute from "@/components/ProtectedRoute";
import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import AuthCallback from "@/pages/AuthCallback";
import Assessment from "@/pages/Assessment";
import Results from "@/pages/Results";
import Dashboard from "@/pages/Dashboard";
import Schemes from "@/pages/Schemes";
import SchemeDetail from "@/pages/SchemeDetail";
import Checklist from "@/pages/Checklist";
import Applications from "@/pages/Applications";
import Notifications from "@/pages/Notifications";
import Simulator from "@/pages/Simulator";
import Impact from "@/pages/Impact";
import Privacy from "@/pages/Privacy";
import Profile from "@/pages/Profile";
import ResultsPrint from "@/pages/ResultsPrint";
import DocumentVault from "@/pages/DocumentVault";
import DownloadCenter from "@/pages/DownloadCenter";

const guard = (el) => <ProtectedRoute>{el}</ProtectedRoute>;

function AppRouter() {
    const location = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [location.pathname]);
    if (location.hash?.includes("session_id=")) return <AuthCallback />;
    return (
        <AppShell>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<Login />} />
                <Route path="/simulator" element={<Simulator />} />
                <Route path="/schemes" element={<Schemes />} />
                <Route path="/schemes/:id" element={<SchemeDetail />} />
                <Route path="/vault" element={<DocumentVault />} />
                <Route path="/documents" element={<DocumentVault />} />
                <Route path="/offline-download" element={<DownloadCenter />} />
                <Route path="/impact" element={<Impact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/assessment" element={guard(<Assessment />)} />
                <Route path="/results" element={guard(<Results />)} />
                <Route path="/results/print" element={guard(<ResultsPrint />)} />
                <Route path="/dashboard" element={guard(<Dashboard />)} />
                <Route path="/checklist/:schemeId" element={guard(<Checklist />)} />
                <Route path="/applications" element={guard(<Applications />)} />
                <Route path="/notifications" element={guard(<Notifications />)} />
                <Route path="/profile" element={guard(<Profile />)} />
                <Route path="*" element={<Landing />} />
            </Routes>
        </AppShell>
    );
}

export default function App() {
    return (
        <LangProvider>
            <AuthProvider>
                <AssistantProvider>
                    <TooltipProvider delayDuration={150}>
                        <BrowserRouter>
                            <AppRouter />
                        </BrowserRouter>
                        <Toaster position="top-center" richColors />
                    </TooltipProvider>
                </AssistantProvider>
            </AuthProvider>
        </LangProvider>
    );
}
