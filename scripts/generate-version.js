const fs = require("fs");
const path = require("path");

// Chemin vers le package.json frontend
const pkgPath = path.join(__dirname, "../frontend/package.json");
const pkg = require(pkgPath);

// Chemin vers le fichier à générer
const targetFile = path.join(__dirname, "../frontend/src/version.ts");

const content = `// Ce fichier est généré automatiquement
export const APP_VERSION = "${pkg.version}";
`;

fs.writeFileSync(targetFile, content);
console.log(`✅ version.ts généré : ${pkg.version}`);
