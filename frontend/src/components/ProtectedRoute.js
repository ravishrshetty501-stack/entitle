import { Navigate, useLocation } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export function PageLoader({ label = "Loading…" }) {
    return (
        <div className="grid min-h-[50vh] place-items-center" data-testid="page-loader" role="status">
            <span className="flex items-center gap-2 text-slate-500"><Loader2 className="h-5 w-5 animate-spin" />{label}</span>
        </div>
    );
}

export default function ProtectedRoute({ children }) {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) return <PageLoader />;
    if (!user) return <Navigate to="/login" replace state={{ from: location.pathname }} />;
    return children;
}
