// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Lazy initializer to avoid reading localStorage during SSR
  const getInitial = (): Theme => {
    try {
      if (typeof window === "undefined") return "light";
      const stored = localStorage.getItem("theme") as Theme | null;
      if (stored === "dark" || stored === "light") return stored;
      // Optionally detect OS preference
      if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
      return "light";
    } catch (e) {
      return "light";
    }
  };

  const [theme, setTheme] = useState<Theme>(getInitial);

  useEffect(() => {
    try {
      const root = window.document.documentElement;
      if (theme === "dark") {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore (safe guard for non-browser env)
      // console.warn("Theme effect failed", e);
    }
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

// Keep throwing in production — it's helpful to find wiring mistakes.
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used inside ThemeProvider");
  }
  return context;
};

export default ThemeProvider;
