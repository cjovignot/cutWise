import { useState, useEffect } from "react";
import { useSettings } from "../hooks/useSettings";
import type { SettingsProps } from "../types/Globals/Pages";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { PiCopyrightLight } from "react-icons/pi";

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // Charger l'avatar depuis localStorage au montage
    useEffect(() => {
      const savedAvatar = localStorage.getItem("selectedAvatar");
      if (savedAvatar) {
        setSelectedAvatar(savedAvatar);
        setAvatarUrl(savedAvatar);
      }
    }, []);

    const closeModal = () => {
      setIsClosing(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsClosing(false);
      }, 300);
    };

    const handleSelectAvatar = (src: string) => {
      setSelectedAvatar(src);
      setAvatarUrl(src); // mise à jour globale
      localStorage.setItem("selectedAvatar", src); // sauvegarde locale
      setIsModalOpen(false);
    };

    return (
      <div className="mb-10">
        <h3 className="mb-2 font-semibold border-b border-gray-700 dark:border-gray-200">
          {t("avatar")}
        </h3>
        <div className="flex justify-center">
          <img
            src={selectedAvatar || avatarUrl || avatarLibrary[0]}
            className="mt-4 border-2 border-gray-300 rounded-full cursor-pointer w-30 h-30"
            onClick={() => setIsModalOpen(true)}
            title={t("selectAvatar")}
          />
        </div>

        {isModalOpen && (
          <div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${
              isClosing ? "opacity-0" : "opacity-100"
            }`}
            onClick={closeModal}
          >
            <div
              className={`w-full max-w-lg p-4 px-10 m-4 bg-white dark:bg-gray-900 rounded-lg transform transition-transform duration-300 ${
                isClosing
                  ? "scale-95 opacity-0"
                  : "scale-100 opacity-100 animate-modal-in"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="mb-2 font-semibold">{t("chooseAvatar")}</h3>
              <div className="grid grid-cols-4 gap-1 md:grid-cols-5 md:gap-1 md:max-h-60">
                {avatarLibrary.map((src) => (
                  <div className="flex justify-center" key={src}>
                    <img
                      src={src}
                      className="w-12 h-12 rounded-full cursor-pointer border-2 border-transparent hover:border-(--theme-primary) transition-all duration-200"
                      onClick={() => handleSelectAvatar(src)}
                      title={t("selectAvatar")}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Composant Thème
  const ThemeSettings = () => (
    <div className="mb-10">
      <h3 className="mb-2 font-semibold border-b border-gray-700 dark:border-gray-200">
        {t("theme")}
      </h3>
      <div className="grid grid-cols-2 gap-2">
        {["light", "dark"].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m as "light" | "dark")}
            className={`px-4 py-2 rounded  dark:text-gray-300 ${
              mode === m ? "bg-(--theme-primary)/20" : "bg-white/0"
            }`}
          >
            {m === "light" ? `☀️ ${t("light")}` : `🌙 ${t("dark")}`}
          </button>
        ))}
      </div>
    </div>
  );

  // Composant Couleur
  const ColorSettings = () => (
    <div className="mb-10">
      <h3 className="mb-2 font-semibold border-b border-gray-700 dark:border-gray-200">
        {t("color")}
      </h3>
      <div className="grid grid-cols-8 gap-1">
        {themes.map((t) => (
          <button
            key={t.id}
            onClick={() => {
              setColor(t.id);
            }}
            className={`w-8 h-8 rounded-full border-2`}
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
      <div className="mb-10">
        <h3 className="mb-2 font-semibold border-b border-gray-700 dark:border-gray-200">
          {t("language")}
        </h3>
        <div className="grid grid-cols-7 gap-1">
          {languages.map((lang) => (
            <ReactCountryFlag
              key={lang.code}
              onClick={() =>
                changeLanguage(lang.code as "fr" | "en" | "es" | "it")
              }
              countryCode={lang.countryCode}
              svg
              className={`rounded-lg border-2 transition-all duration-200`}
              style={{
                width: "auto",
                height: "32px",
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
      <div className="md:col-span-1 md:space-y-4">
        <AvatarSettings />
        <ThemeSettings />
        <ColorSettings />
        <LanguageSettings />
        <AppVersion />
      </div>
    </div>
  );
}
