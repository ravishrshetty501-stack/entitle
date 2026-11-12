import { createContext, useContext, useState } from "react";

const GuideContext = createContext(null);

export function GuideProvider({ children }) {
    const [open, setOpen] = useState(false);
    const [scheme, setScheme] = useState(null);
    const openGuide = (s = null) => {
        setScheme(s);
        setOpen(true);
    };
    return <GuideContext.Provider value={{ open, setOpen, scheme, setScheme, openGuide }}>{children}</GuideContext.Provider>;
}

export const useGuide = () => useContext(GuideContext);
