const fs = require("fs");
const path = require("path");

// Chemin vers package.json
const pkg = require("../package.json"); // ou "./frontend/package.json" selon ton repo

// Chemin vers version.ts
const versionFile = path.resolve(__dirname, "./version.ts");

// Contenu à écrire
const content = `export const APP_VERSION = "${pkg.version}";\n`;

// Écriture
fs.writeFileSync(versionFile, content);

console.log(`✅ version.ts mise à jour : ${pkg.version}`);
