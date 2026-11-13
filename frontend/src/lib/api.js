import axios from "axios";
import {
    saveSchemesToOfflineDB,
    getAllOfflineSchemes,
    getOfflineSchemeById
} from "@/lib/offlineDb";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const http = axios.create({ baseURL: `${BACKEND_URL}/api`, withCredentials: true });

const d = (p) => p.then((r) => r.data);

export const errorMessage = (e) =>
    e?.response?.data?.details || e?.response?.data?.error || e?.message || "Something went wrong";

// Offline filter helper for schemes
function filterOfflineSchemes(schemes, params = {}) {
    let result = [...schemes];
    if (params.category) {
        result = result.filter(s => s.category?.toLowerCase() === params.category.toLowerCase());
    }
    if (params.state) {
        result = result.filter(s => s.state?.toLowerCase() === params.state.toLowerCase() || s.state === "All India");
    }
    if (params.level) {
        result = result.filter(s => s.level?.toLowerCase() === params.level.toLowerCase());
    }
    if (params.sdg) {
        result = result.filter(s => s.sdg === params.sdg);
    }
    if (params.search) {
        const q = params.search.toLowerCase();
        result = result.filter(s =>
            s.title?.toLowerCase().includes(q) ||
            s.description?.toLowerCase().includes(q) ||
            s.category?.toLowerCase().includes(q) ||
            s.state?.toLowerCase().includes(q)
        );
    }
    return result;
}

export const api = {
    auth: {
        me: () => d(http.get("/auth/me")),
        session: (session_id) => d(http.post("/auth/session", { session_id })),
        demo: (persona) => d(http.post("/auth/demo", { persona })),
        logout: () => d(http.post("/auth/logout")),
    },
    profile: {
        get: () => d(http.get("/profile")),
        update: (p) => d(http.put("/profile", p)),
        assess: (p) => d(http.post("/profile/assessment", p)),
        deleteAccount: () => d(http.delete("/profile/account")),
    },
    schemes: {
        list: async (params) => {
            if (navigator.onLine) {
                try {
                    const data = await d(http.get("/schemes", { params }));
                    if (Array.isArray(data) && data.length > 0) {
                        saveSchemesToOfflineDB(data).catch(() => { });
                    }
                    return data;
                } catch (e) {
                    console.warn("Network fetch failed, falling back to offline DB", e);
                }
            }
            // Offline fallback
            const offlineData = await getAllOfflineSchemes();
            return filterOfflineSchemes(offlineData, params);
        },
        stats: async () => {
            if (navigator.onLine) {
                try {
                    return await d(http.get("/schemes/stats"));
                } catch (e) {
                    console.warn("Stats fetch failed, calculating offline stats", e);
                }
            }
            const all = await getAllOfflineSchemes();
            return {
                totalSchemes: all.length,
                centralCount: all.filter(s => s.level === "Central").length,
                stateCount: all.filter(s => s.level === "State").length,
                sdg2Count: all.filter(s => s.sdg === "SDG 2").length,
                sdg3Count: all.filter(s => s.sdg === "SDG 3").length,
                karnatakaCount: all.filter(s => s.state === "Karnataka").length
            };
        },
        categories: async () => {
            if (navigator.onLine) {
                try {
                    return await d(http.get("/schemes/categories"));
                } catch (e) { }
            }
            const all = await getAllOfflineSchemes();
            return Array.from(new Set(all.map(s => s.category).filter(Boolean)));
        },
        get: async (id) => {
            if (navigator.onLine) {
                try {
                    const data = await d(http.get(`/schemes/${id}`));
                    return data;
                } catch (e) {
                    console.warn("Network scheme get failed, trying offline DB", e);
                }
            }
            const offline = await getOfflineSchemeById(id);
            if (offline) return offline;
            throw new Error("Scheme not found in offline database");
        },
        recommended: () => d(http.get("/schemes/recommended")),
    },
    eligibility: {
        results: () => d(http.get("/eligibility/results")),
        result: (id) => d(http.get(`/eligibility/results/${id}`)),
        assess: () => d(http.post("/eligibility/assess")),
        preview: (profile) => d(http.post("/eligibility/preview", profile)),
    },
    saved: {
        list: () => d(http.get("/saved-schemes")),
        add: (schemeId) => d(http.post("/saved-schemes", { schemeId })),
        remove: (schemeId) => d(http.delete(`/saved-schemes/${schemeId}`)),
    },
    applications: {
        list: () => d(http.get("/applications")),
        add: (schemeId, extra = {}) => d(http.post("/applications", { schemeId, ...extra })),
        update: (id, body) => d(http.put(`/applications/${id}`, body)),
        remove: (id) => d(http.delete(`/applications/${id}`)),
    },
    checklists: {
        list: () => d(http.get("/checklists")),
        get: (schemeId) => d(http.get(`/checklists/${schemeId}`)),
        update: (schemeId, prepared) => d(http.put(`/checklists/${schemeId}`, { prepared })),
    },
    notifications: {
        list: () => d(http.get("/notifications")),
        read: (id) => d(http.put(`/notifications/${id}/read`)),
        readAll: () => d(http.put("/notifications/read-all")),
        dismiss: (id) => d(http.delete(`/notifications/${id}`)),
        prefs: () => d(http.get("/notifications/preferences")),
        updatePrefs: (p) => d(http.put("/notifications/preferences", p)),
    },
    guide: {
        chat: ({ message, schemeId, language, previousSchemeId }) =>
            d(http.post("/guide/chat", { message, schemeId, language, previousSchemeId })),
        history: () => d(http.get("/guide/history")),
        clearHistory: () => d(http.delete("/guide/history")),
    },
    demo: { personas: () => d(http.get("/demo/personas")) },
    analytics: { impact: () => d(http.get("/analytics/impact")) },
};
