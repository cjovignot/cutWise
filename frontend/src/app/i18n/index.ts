import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en.json";
import fr from "./fr.json";
import it from "./it.json";
import es from "./es.json";

const savedLang = localStorage.getItem("language") || "fr";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    fr: { translation: fr },
    it: { translation: it },
    es: { translation: es },
  },
  lng: savedLang,
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
});

export default i18n;
