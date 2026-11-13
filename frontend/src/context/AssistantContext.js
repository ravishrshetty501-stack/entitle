import React, { createContext, useContext, useState, useCallback } from "react";

const AssistantContext = createContext(null);

export function AssistantProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeScheme, setActiveScheme] = useState(null);
    const [prefilledMessage, setPrefilledMessage] = useState("");

    const openAssistant = useCallback((scheme = null, initialQuery = "") => {
        if (scheme) {
            setActiveScheme(scheme);
        }
        if (initialQuery) {
            setPrefilledMessage(initialQuery);
        }
        setIsOpen(true);
    }, []);

    const closeAssistant = useCallback(() => {
        setIsOpen(false);
    }, []);

    const toggleAssistant = useCallback(() => {
        setIsOpen(prev => !prev);
    }, []);

    return (
        <AssistantContext.Provider
            value={{
                isOpen,
                setIsOpen,
                activeScheme,
                setActiveScheme,
                prefilledMessage,
                setPrefilledMessage,
                openAssistant,
                closeAssistant,
                toggleAssistant
            }}
        >
            {children}
        </AssistantContext.Provider>
    );
}

export const useAssistant = () => useContext(AssistantContext);

