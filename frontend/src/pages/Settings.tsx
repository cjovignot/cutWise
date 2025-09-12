import { useState } from "react";
import { useSettings } from "../hooks/useSettings";
import type { SettingsProps } from "../types/Globals/Pages";

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
  const [file, setFile] = useState<File | null>(null);

  const uploadAvatar = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    const res = await fetch("http://localhost:5000/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await res.json();
    setAvatarUrl(data.url);
  };

  return (
    <>
      {/* Avatar */}
      <div>
        <img
          src={avatarUrl || "/default-avatar.png"}
          className="w-20 h-20 mb-2 rounded-full"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button
          onClick={uploadAvatar}
          className="px-4 py-2 bg-(--theme-primary) text-white rounded mt-2"
        >
          Upload Avatar
        </button>
      </div>

      {/* Thème */}
      <div>
        <h3 className="mb-2 font-semibold">Thème</h3>
        <div className="flex gap-4">
          <button
            onClick={() => setMode("light")}
            className={`px-4 py-2 rounded ${
              mode === "light"
                ? "bg-(--theme-primary) text-white"
                : "bg-gray-200"
            }`}
          >
            ☀️ Clair
          </button>
          <button
            onClick={() => setMode("dark")}
            className={`px-4 py-2 rounded ${
              mode === "dark"
                ? "bg-(--theme-primary) text-white"
                : "bg-gray-200"
            }`}
          >
            🌙 Sombre
          </button>
        </div>
      </div>

      {/* Couleur */}
      <div>
        <h3 className="mb-2 font-semibold">Couleur</h3>
        <div className="flex gap-4">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setColor(t.id)}
              className={`w-10 h-10 rounded-full border-2 ${
                color === t.id
                  ? "border-black dark:border-white"
                  : "border-gray-400"
              }`}
              style={{ backgroundColor: t.primary }}
            />
          ))}
        </div>
      </div>

      {/* Langue */}
      <div>
        <h3 className="mb-2 font-semibold">Langue</h3>
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value as "fr" | "en")}
          className="px-3 py-2 border rounded"
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div>

      {/* DUPLICATION POUR SCROLL */}
      <h2 className="text-2xl font-bold text-sky-700">⚙️ Paramètres</h2>

      {/* Avatar */}
      <div>
        <img
          src={avatarUrl || "/default-avatar.png"}
          className="w-20 h-20 mb-2 rounded-full"
        />
        <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
        <button
          onClick={uploadAvatar}
          className="px-4 py-2 bg-(--theme-primary) text-white rounded mt-2"
        >
          Upload Avatar
        </button>
      </div>

      {/* Thème */}
      <div>
        <h3 className="mb-2 font-semibold">Thème</h3>
        <div className="flex gap-4">
          <button
            onClick={() => setMode("light")}
            className={`px-4 py-2 rounded ${
              mode === "light"
                ? "bg-(--theme-primary) text-white"
                : "bg-gray-200"
            }`}
          >
            ☀️ Clair
          </button>
          <button
            onClick={() => setMode("dark")}
            className={`px-4 py-2 rounded ${
              mode === "dark"
                ? "bg-(--theme-primary) text-white"
                : "bg-gray-200"
            }`}
          >
            🌙 Sombre
          </button>
        </div>
      </div>

      {/* Couleur */}
      <div>
        <h3 className="mb-2 font-semibold">Couleur</h3>
        <div className="flex gap-4">
          {themes.map((t) => (
            <button
              key={t.id}
              onClick={() => setColor(t.id)}
              className={`w-10 h-10 rounded-full border-2 ${
                color === t.id
                  ? "border-black dark:border-white"
                  : "border-gray-400"
              }`}
              style={{ backgroundColor: t.primary }}
            />
          ))}
        </div>
      </div>

      {/* Langue */}
      <div>
        <h3 className="mb-2 font-semibold">Langue</h3>
        <select
          value={language}
          onChange={(e) => changeLanguage(e.target.value as "fr" | "en")}
          className="px-3 py-2 border rounded"
        >
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div>
    </>
  );
}
