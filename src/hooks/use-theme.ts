import { useEffect, useState } from "react";

import type { ThemeMode } from "@/types/home";

const STORAGE_KEY = "portfolio-theme";

function applyTheme(theme: ThemeMode) {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  if (themeMeta instanceof HTMLMetaElement) {
    themeMeta.content = theme === "dark" ? "#050816" : "#f8fafc";
  }
}

export function useTheme() {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const nextTheme = root.classList.contains("light") ? "light" : "dark";
    applyTheme(nextTheme);
    setTimeout(() => {
      setTheme(nextTheme);
      setMounted(true);
    }, 0);
  }, []);

  const toggleTheme = () => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  };

  return {
    mounted,
    theme,
    toggleTheme,
  };
}

export const themeScript = `
(() => {
  const storageKey = "${STORAGE_KEY}";
  const storedTheme = window.localStorage.getItem(storageKey);
  const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  const theme = storedTheme === "light" || storedTheme === "dark"
    ? storedTheme
    : systemPrefersLight
      ? "light"
      : "dark";

  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(theme);
  root.style.colorScheme = theme;
})();
`;
