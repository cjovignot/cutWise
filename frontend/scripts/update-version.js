import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Pour __dirname en ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chemin vers package.json
const pkgPath = path.resolve(__dirname, "../package.json"); // ou "./frontend/package.json"
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));

// Chemin vers version.ts
const versionFile = path.resolve(__dirname, "../src/version.ts"); // adapte selon ton projet

// Contenu à écrire
const content = `export const APP_VERSION = "${pkg.version}";\n`;

// Écriture
fs.writeFileSync(versionFile, content);

console.log(`✅ version.ts mise à jour : ${pkg.version}`);
