import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const openNextDir = path.join(projectRoot, ".open-next");
const distDir = path.join(projectRoot, "dist");
const serverDir = path.join(distDir, "server");

await rm(distDir, { recursive: true, force: true });
await cp(openNextDir, distDir, { recursive: true });
await mkdir(serverDir, { recursive: true });
await writeFile(
  path.join(serverDir, "index.js"),
  'export { default } from "../worker.js";\n',
  "utf8"
);
