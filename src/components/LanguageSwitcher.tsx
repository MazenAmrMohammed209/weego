"use client";

import { Globe } from "lucide-react";
import { useState } from "react";

export function LanguageSwitcher() {
  const [lang, setLang] = useState<"EN" | "AR">("EN");

  const toggleLang = () => {
    const newLang = lang === "EN" ? "AR" : "EN";
    setLang(newLang);
    // In a real app this would trigger routing or context change
    // For skeletal layout testing we can toggle the html dir attribute
    if (typeof document !== "undefined") {
      document.documentElement.dir = newLang === "AR" ? "rtl" : "ltr";
    }
  };

  return (
    <button
      onClick={toggleLang}
      className="inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      aria-label="Toggle Language"
    >
      <Globe className="h-4 w-4" />
      <span>{lang}</span>
    </button>
  );
}
