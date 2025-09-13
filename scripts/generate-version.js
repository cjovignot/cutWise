import fs from "fs";
import path from "path";

const pkgPath = path.resolve(__dirname, "../frontend/package.json");
const versionTsPath = path.resolve(__dirname, "../frontend/src/version.ts");

const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
const version = pkg.version || "0.0.0";

const content = `export const APP_VERSION = "${version}";\n`;
fs.writeFileSync(versionTsPath, content);

console.log(`✅ version.ts généré : ${version}`);
