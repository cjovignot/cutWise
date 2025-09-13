// update-version.cjs
const fs = require("fs");
const path = require("path");

// Chemin absolu vers le dossier frontend
const frontendDir = path.resolve(__dirname, "..");

// Chemin vers package.json
const pkgPath = path.join(frontendDir, "package.json");

// Chemin vers src/version.ts
const versionFile = path.join(frontendDir, "src", "version.ts");

// Vérifie que package.json existe
if (!fs.existsSync(pkgPath)) {
  console.error("🚨 package.json introuvable dans frontend !");
  process.exit(1);
}

// Vérifie que src existe
const srcDir = path.join(frontendDir, "src");
if (!fs.existsSync(srcDir)) {
  console.error("🚨 dossier src introuvable dans frontend !");
  process.exit(1);
}

// Lecture de la version
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"));
const version = pkg.version || "0.0.0";

// Contenu à écrire
const content = `export const APP_VERSION = "${version}";\n`;

// Écriture dans version.ts
fs.writeFileSync(versionFile, content);

console.log(`✅ version.ts mise à jour : ${version}`);
