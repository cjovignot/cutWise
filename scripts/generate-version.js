const fs = require("fs");
const path = require("path");

// Chemin vers package.json
const pkg = require("../package.json");

// Contenu du fichier version.ts
const content = `export const APP_VERSION = "${pkg.version}";\n`;

fs.writeFileSync(path.resolve(__dirname, "../src/version.ts"), content);

console.log("✅ version.ts généré :", pkg.version);
