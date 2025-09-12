import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export interface Theme {
  id: string;
  label: string;
  primary: string;
}

export type ThemeMode = "light" | "dark";
export type Language = "fr" | "en" | "es" | "it";

export interface Preferences {
  themeMode: ThemeMode;
  themeColor: string;
  language: Language;
  avatarUrl?: string;
}

export function useSettings(userId?: string) {
  const { i18n } = useTranslation();

  const [mode, setMode] = useState<ThemeMode>(
    (localStorage.getItem("theme-mode") as ThemeMode) || "light"
  );
  const [color, setColor] = useState<string>(
    localStorage.getItem("theme-color") || "blue"
  );
  const [themes, setThemes] = useState<Theme[]>([]);
  const [language, setLanguage] = useState<Language>(
    (localStorage.getItem("language") as Language) || "fr"
  );
  const [avatarUrl, setAvatarUrl] = useState<string>("");

  // Charger les thèmes depuis themes.json
  useEffect(() => {
    fetch("/themes.json")
      .then((res) => res.json())
      .then((data: Theme[]) => setThemes(data))
      .catch(() => {
        setThemes([{ id: "blue", label: "Bleu", primary: "#3B82F6" }]);
      });
  }, []);

  // Charger préférences depuis API si dispo
  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:5000/api/users/${userId}/preferences`)
      .then((res) => res.json())
      .then((prefs: Preferences) => {
        setMode(prefs.themeMode);
        setColor(prefs.themeColor);
        setLanguage(prefs.language);
        setAvatarUrl(prefs.avatarUrl || "");
        i18n.changeLanguage(prefs.language);
      })
      .catch(() => {
        // fallback localStorage
        const savedMode = localStorage.getItem(
          "theme-mode"
        ) as ThemeMode | null;
        const savedColor = localStorage.getItem("theme-color");
        const savedLang = localStorage.getItem("language") as Language | null;

        if (savedMode) setMode(savedMode);
        if (savedColor) setColor(savedColor);
        if (savedLang) {
          setLanguage(savedLang);
          i18n.changeLanguage(savedLang);
        }
      });
  }, [userId, i18n]);

  // Appliquer dark/light mode dynamiquement
  useEffect(() => {
    const html = document.documentElement;
    if (mode === "dark") html.classList.add("dark");
    else html.classList.remove("dark");

    localStorage.setItem("theme-mode", mode);
    if (userId) updatePreferences();
  }, [mode, userId]);

  // Appliquer couleur dynamique
  useEffect(() => {
    const current = themes.find((t) => t.id === color);
    if (current) {
      document.documentElement.style.setProperty(
        "--theme-primary",
        current.primary
      );
    }
    localStorage.setItem("theme-color", color);
    if (userId) updatePreferences();
  }, [color, themes, userId]);

  // Changer langue
  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    if (userId) updatePreferences();
  };

  // Sauvegarder préférences sur serveur si API dispo
  const updatePreferences = async () => {
    if (!userId) return;

    try {
      await fetch(`http://localhost:5000/api/users/${userId}/preferences`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          themeMode: mode,
          themeColor: color,
          language,
          avatarUrl,
        }),
      });
    } catch {
      // API non dispo => ignore
    }
  };

  return {
    mode,
    setMode,
    color,
    setColor,
    themes,
    language,
    changeLanguage,
    avatarUrl,
    setAvatarUrl,
  };
}
