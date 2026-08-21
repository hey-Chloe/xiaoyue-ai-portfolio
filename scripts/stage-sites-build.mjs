import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = process.cwd();
const staticExportDir = path.join(projectRoot, "out");
const distDir = path.join(projectRoot, "dist");
const serverDir = path.join(distDir, "server");

await rm(distDir, { recursive: true, force: true });
await mkdir(serverDir, { recursive: true });
await cp(staticExportDir, path.join(distDir, "assets"), {
  recursive: true,
});
await writeFile(
  path.join(serverDir, "index.js"),
  `export default {
  async fetch(request, env) {
    let response = await env.ASSETS.fetch(request);
    if (response.status !== 404 || !["GET", "HEAD"].includes(request.method)) {
      return response;
    }

    const url = new URL(request.url);
    if (!url.pathname.includes(".")) {
      for (const pathname of [url.pathname + ".html", url.pathname + "/index.html"]) {
        url.pathname = pathname.replace("//", "/");
        response = await env.ASSETS.fetch(new Request(url, request));
        if (response.status !== 404) return response;
      }
    }

    return response;
  },
};
`,
  "utf8"
);
