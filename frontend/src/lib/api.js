import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

export const http = axios.create({ baseURL: `${BACKEND_URL}/api`, withCredentials: true });

const d = (p) => p.then((r) => r.data);

export const errorMessage = (e) =>
    e?.response?.data?.details || e?.response?.data?.error || e?.message || "Something went wrong";

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
        list: (params) => d(http.get("/schemes", { params })),
        get: (id) => d(http.get(`/schemes/${id}`)),
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
        chat: (message, schemeId, language) => d(http.post("/guide/chat", { message, schemeId, language })),
        history: () => d(http.get("/guide/history")),
    },
    demo: { personas: () => d(http.get("/demo/personas")) },
    analytics: { impact: () => d(http.get("/analytics/impact")) },
};
