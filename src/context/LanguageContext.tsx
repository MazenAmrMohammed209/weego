"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

type Language = "en" | "ar";

const translations: Record<Language, any> = {
  en,
  ar,
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  useEffect(() => {
    // Only access document inside useEffect so it safely runs on client side
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    if (lang === "ar") {
      document.documentElement.classList.add("lang-ar");
    } else {
      document.documentElement.classList.remove("lang-ar");
    }
  }, [lang]);

  // Helper function to get translation string deeply by key (e.g., "navbar.home")
  const t = (key: string): string => {
    const keys = key.split(".");
    let value = translations[lang];
    
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        // Fallback or missing key message
        return key;
      }
    }
    
    return value as string;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
