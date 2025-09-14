import { useEffect } from "react";

export function useInitPreferences() {
  useEffect(() => {
    const savedMode =
      (localStorage.getItem("theme-mode") as "light" | "dark") || "light";
    const savedColor = localStorage.getItem("theme-color") || "blue";

    // Appliquer dark/light mode
    if (savedMode === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");

    // Charger thèmes dynamiques
    fetch("/themes.json")
      .then((res) => res.json())
      .then((themes: { id: string; primary: string }[]) => {
        const current = themes.find((t) => t.id === savedColor);
        if (current) {
          document.documentElement.style.setProperty(
            "--theme-primary",
            current.primary
          );
        } else {
          document.documentElement.style.setProperty(
            "--theme-primary",
            "#3B82F6"
          );
        }
      })
      .catch(() => {
        document.documentElement.style.setProperty(
          "--theme-primary",
          "#3B82F6"
        );
      });
  }, []);
}
