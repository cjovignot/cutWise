const fs = require("fs");
const path = require("path");

// Chemin vers le package.json du frontend
const pkgPath = path.resolve(__dirname, "../package.json");

// Vérifie que package.json existe
if (!fs.existsSync(pkgPath)) {
  console.error("🚨 package.json introuvable !");
  process.exit(1);
}

// Lecture du package.json
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

// Chemin vers version.ts dans le frontend
const versionFile = path.resolve(__dirname, "../src/version.ts");

// Contenu à écrire
const content = `export const APP_VERSION = "${pkg.version}";\n`;

// Écriture
fs.writeFileSync(versionFile, content);

console.log(`✅ version.ts mise à jour : ${pkg.version}`);
