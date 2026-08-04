import fs from "fs";
import path from "path";

const mainPath = path.resolve(process.cwd(), "package.json");
const mainJSON = JSON.parse(fs.readFileSync(mainPath, "utf-8"));
const version = mainJSON.version;
const packages = ["site", "content"];

if (!version) {
  console.error("❌ Missing version argument");
  process.exit(1);
}

for (const pkg of packages) {
  const pkgPath = path.resolve(process.cwd(), pkg, "package.json");
  const pkgJson = JSON.parse(fs.readFileSync(pkgPath, "utf-8"));
  pkgJson.version = mainJSON.version;
  fs.writeFileSync(pkgPath, JSON.stringify(pkgJson, null, 2) + "\n");
  console.log(`✅ Updated ${pkg}/package.json to version ${version}`);
}
