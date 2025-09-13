const fs = require("fs");
const path = require("path");

// Chemin vers package.json
const pkgPath = path.resolve(__dirname, "../frontend/package.json"); // adapte si nécessaire
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

// Chemin vers version.ts
const versionFile = path.resolve(__dirname, "../src/version.ts"); // cible finale

// Contenu à écrire
const content = `export const APP_VERSION = "${pkg.version}";\n`;

// Écriture
fs.writeFileSync(versionFile, content);

console.log(`✅ version.ts mise à jour : ${pkg.version}`);
