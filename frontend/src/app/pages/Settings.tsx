import { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { PiCopyrightLight } from "react-icons/pi";
import type { SettingsProps } from "@/types/Settings";
import { useSettings } from "@/hooks/useSettings";

export default function Settings({ user }: SettingsProps) {
  const {
    mode,
    setMode,
    color,
    setColor,
    themes,
    language,
    changeLanguage,
    avatarUrl,
    setAvatarUrl,
  } = useSettings(user?.id);
  const { t } = useTranslation();

  // Librairie d’avatars DiceBear
  const [avatarLibrary, setAvatarLibrary] = useState<string[]>([]);
  const [selectedAvatar, setSelectedAvatar] = useState<string>("");

  useEffect(() => {
    const avatars: string[] = [];

    const avatarNames = [
      "Amaya",
      "Alexander",
      "Oliver",
      "Jessica",
      "Robert",
      "Destiny",
      "Liliana",
      "Mason",
      "Sophia",
      "Kingston",
      "Liam",
      "Jack",
      "Eliza",
      "Aiden",
      "Sara",
      "Maria",
      "Christian",
      "Emery",
      "Jameson",
      "Avery",
    ];

    avatarNames.forEach((a) => {
      avatars.push(`https://api.dicebear.com/9.x/thumbs/svg?seed=${a}`);
    });
    setAvatarLibrary(avatars);
  }, []);

  // const uploadAvatar = async () => {
  //   if (!file) return;
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   const res = await fetch("http://localhost:5000/api/upload", {
  //     method: "POST",
  //     body: formData,
  //   });
  //   const data = await res.json();
  //   setAvatarUrl(data.url);
  // };

  // Composant Avatar
  const AvatarSettings = () => {
    // Charger l'avatar depuis localStorage au montage
    useEffect(() => {
      const savedAvatar = localStorage.getItem("selectedAvatar");
      if (savedAvatar) {
        setSelectedAvatar(savedAvatar);
        setAvatarUrl(savedAvatar);
      }
    }, []);

    const handleSelectAvatar = (src: string) => {
      setSelectedAvatar(src);
      setAvatarUrl(src); // mise à jour globale
      localStorage.setItem("selectedAvatar", src); // sauvegarde locale
    };

    return (
      <div className="mb-5">
        <h3 className="pb-1 mb-2 font-semibold border-b border-gray-700 dark:border-gray-200">
          {t("avatar")}
        </h3>
        <div className="flex">
          <img
            src={selectedAvatar || avatarUrl || avatarLibrary[0]}
            className="mt-4 border-2 border-gray-300 rounded-lg cursor-pointer w-30 h-30"
            title={t("selectAvatar")}
          />

          <div className="grid grid-cols-4 gap-1 p-4 md:grid-cols-10 md:gap-2">
            {avatarLibrary.map((src) => (
              <div className="flex justify-center" key={src}>
                <img
                  src={src}
                  className="w-12 h-12 rounded-lg cursor-pointer border-2 border-transparent hover:border-(--theme-primary) transition-all duration-200"
                  onClick={() => handleSelectAvatar(src)}
                  title={t("selectAvatar")}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Composant Thème
  const ThemeSettings = () => {
    const toggleMode = () => {
      const newMode = mode === "light" ? "dark" : "light";
      setMode(newMode);
      localStorage.setItem("theme-mode", newMode);
    };

    return (
      <div className="mb-5">
        <div className="flex items-end justify-between w-full pb-1 mb-2 font-semibold border-b border-gray-700 dark:border-gray-200">
          <h3>{t("theme")}</h3>
          <button
            onClick={toggleMode}
            className="relative flex items-center w-13 h-7 transition-colors bg-gray-300 dark:bg-green-600 !rounded-full dark:bg-gray-600"
          >
            <span
              className={`absolute left-1 top-1 w-5 h-5 rounded-full bg-white shadow-md transform transition-transform
            ${mode === "dark" ? "translate-x-5.5" : "translate-x-0"}`}
            />
          </button>
        </div>
      </div>
    );
  };

  // Composant Couleur
  const ColorSettings = () => (
    <div className="mb-5">
      <h3 className="pb-1 mb-2 font-semibold border-b border-gray-700 dark:border-gray-200">
        {t("color")}
      </h3>
      <div className="grid grid-cols-5 gap-1">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              setColor(t.id);
            }}
            className="w-14 sm:w-10 lg:w-16 h-6 border-2 !rounded-sm"
            style={{
              backgroundColor: t.primary,
              borderWidth:
                color === t.id
                  ? mode === "dark"
                    ? 2 // border en mode sombre
                    : 2 //border en mode clair
                  : 0, // gris neutre pour non sélectionné
              borderColor:
                color === t.id
                  ? mode === "dark"
                    ? "white" // border en mode sombre
                    : "black" // border en mode clair
                  : "#9CA3AF", // gris neutre pour non sélectionné
            }}
          />
        ))}
      </div>
    </div>
  );

  // Composant Langue
  const LanguageSettings = () => {
    const languages = [
      { code: "fr", label: "Français", countryCode: "FR" },
      { code: "en", label: "English", countryCode: "GB" },
      { code: "es", label: "Espanol", countryCode: "ES" },
      { code: "it", label: "Italiano", countryCode: "IT" },
    ];

    return (
      <div className="mb-5">
        <h3 className="pb-1 mb-2 font-semibold border-b border-gray-700 dark:border-gray-200">
          {t("language")}
        </h3>
        <div className="grid grid-cols-8 gap-1">
          {languages.map((lang) => (
            <ReactCountryFlag
              key={lang.code}
              onClick={() =>
                changeLanguage(lang.code as "fr" | "en" | "es" | "it")
              }
              countryCode={lang.countryCode}
              svg
              className="transition-all duration-200 border-2 rounded-sm hover:cursor-pointer"
              style={{
                width: "auto",
                height: "30px",
                borderColor:
                  language === lang.code
                    ? mode === "dark"
                      ? "#ffffffff" // border en mode sombre
                      : "#000000ff" // border en mode clair
                    : "#9ca3af01", // gris neutre pour non sélectionné
              }}
              title={lang.label}
            />
            // </button>
          ))}
        </div>
      </div>
    );
  };

  const AppVersion = () => (
    <div className="flex flex-col items-center mt-20 mb-20 text-sm text-gray-500 dark:text-gray-400">
      <span className="flex items-center text-md">
        <p className="font-bold">CutWise</p>
        <PiCopyrightLight />
        <p className="font-bold">2025</p>
      </span>
      <p className="text-sm"> Version {__APP_VERSION__}</p>{" "}
    </div>
  );

  return (
    <div className="md:grid md:grid-cols-3 md:gap-4">
      <div className="md:col-span-3 md:space-y-4">
        <AvatarSettings />
        <ThemeSettings />
        <ColorSettings />
        <LanguageSettings />
        <AppVersion />
      </div>
    </div>
  );
}
