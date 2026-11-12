import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { DICTS } from "@/lib/i18n";

const LangContext = createContext(null);

export function LangProvider({ children }) {
    const [lang, setLang] = useState(() => localStorage.getItem("entitle_lang") || "en");
    useEffect(() => {
        localStorage.setItem("entitle_lang", lang);
        document.documentElement.lang = lang;
    }, [lang]);
    const t = useCallback((key) => DICTS[lang]?.[key] ?? DICTS.en[key] ?? key, [lang]);
    return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);
