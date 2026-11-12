import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { api } from "@/lib/api";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const refresh = useCallback(async () => {
        try {
            setUser(await api.auth.me());
        } catch {
            setUser(null);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        // Skip /me while returning from Google OAuth; AuthCallback exchanges the session first.
        if (window.location.hash?.includes("session_id=")) {
            setLoading(false);
            return;
        }
        refresh();
    }, [refresh]);

    const loginDemo = async (persona) => {
        const u = await api.auth.demo(persona);
        setUser(u);
        return u;
    };

    const logout = async () => {
        await api.auth.logout().catch(() => { });
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, setUser, loading, refresh, loginDemo, logout }}>{children}</AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
