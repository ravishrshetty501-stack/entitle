import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { api } from "@/lib/api";
import { PageLoader } from "@/components/ProtectedRoute";

export default function AuthCallback() {
    const location = useLocation();
    const nav = useNavigate();
    const { setUser } = useAuth();
    const processed = useRef(false);

    useEffect(() => {
        if (processed.current) return;
        processed.current = true;
        const sessionId = new URLSearchParams(location.hash.slice(1)).get("session_id");
        api.auth.session(sessionId)
            .then((user) => {
                setUser(user);
                window.history.replaceState(null, "", "/dashboard");
                nav("/dashboard", { replace: true, state: { user } });
            })
            .catch(() => nav("/login", { replace: true }));
    }, [location.hash, nav, setUser]);

    return <PageLoader label="Signing you in…" />;
}
