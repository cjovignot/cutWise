import fs from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Structure cible
const targetStructure = {
  ui: {
    actions: ["save", "cancel", "search", "chooseAvatar"],
    theme: ["light", "dark", "color"],
    language: "language",
  },
  pages: {
    dashboard: ["title", "dashboard_cards"],
    projects: ["title", "add_project"],
    orders: ["title"],
    stores: ["title"],
    stock: ["title", "raw_wood", "raw_wood_desc", "scraps", "scraps_desc"],
    settings: ["title"],
    analyze_3D: ["title", "header", "content", "footer"],
  },
  entities: {
    users: "users",
    avatar: "avatar",
    money: ["unit"],
  },
};

// Fonction pour restructurer
function restructure(original) {
  const restructured = { ui: {}, pages: {}, entities: {} };

  // UI: Actions
  restructured.ui.actions = {};
  targetStructure.ui.actions.forEach((key) => {
    if (original[key]) restructured.ui.actions[key] = original[key];
  });

  // UI: Theme
  restructured.ui.theme = {};
  targetStructure.ui.theme.forEach((key) => {
    if (original[key]) restructured.ui.theme[key] = original[key];
  });

  // UI: Language
  if (original[targetStructure.ui.language]) {
    restructured.ui.language = original[targetStructure.ui.language];
  }

  // Pages
  Object.entries(targetStructure.pages).forEach(([page, keys]) => {
    restructured.pages[page] = {};
    keys.forEach((key) => {
      if (original[page]?.[key]) {
        // Cas particulier pour les sous-objets (ex: dashboard_cards, add_project)
        if (typeof original[page][key] === "object") {
          restructured.pages[page][key] = { ...original[page][key] };
          // Réorganiser les items du stock
          if (page === "stock" && key === "raw_wood") {
            restructured.pages[page].items = {
              raw_wood: {
                label: original[page][key],
                description: original[page]["raw_wood_desc"],
              },
              scraps: {
                label: original[page]["scraps"],
                description: original[page]["scraps_desc"],
              },
            };
            delete restructured.pages[page]["raw_wood_desc"];
            delete restructured.pages[page]["scraps_desc"];
          }
        } else {
          restructured.pages[page][key] = original[page][key];
        }
      }
    });
  });

  // Entities
  targetStructure.entities.users &&
    (restructured.entities.users = original[targetStructure.entities.users]);
  targetStructure.entities.avatar &&
    (restructured.entities.avatar = original[targetStructure.entities.avatar]);
  if (original.money)
    restructured.entities.money = { unit: original.money.unit };

  return restructured;
}

// Chemins des fichiers
const inputPath = join(__dirname, "../src/app/i18n/fr.json");
const outputPath = join(__dirname, "../src/app/i18n/fr_restructured.json");

// Lire, restructurer, sauvegarder
const original = JSON.parse(fs.readFileSync(inputPath, "utf8"));
const restructured = restructure(original);
fs.writeFileSync(outputPath, JSON.stringify(restructured, null, 2));

console.log(
  "Fichier restructuré sauvegardé dans src/locales/fr_restructured.json"
);
