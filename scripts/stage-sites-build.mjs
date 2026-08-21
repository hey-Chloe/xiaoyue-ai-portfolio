import { cp, mkdir, rm } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const openNextDir = path.join(projectRoot, ".open-next");
const distDir = path.join(projectRoot, "dist");
const serverDir = path.join(distDir, "server");

await rm(distDir, { recursive: true, force: true });
await mkdir(serverDir, { recursive: true });
await cp(openNextDir, serverDir, { recursive: true });
await cp(
  path.join(openNextDir, "worker.js"),
  path.join(serverDir, "index.js")
);
await cp(path.join(openNextDir, "assets"), path.join(distDir, "assets"), {
  recursive: true,
});
