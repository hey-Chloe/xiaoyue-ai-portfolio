import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";

const root = path.resolve("out");
const port = Number.parseInt(process.env.PORT ?? "3000", 10);
const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".glb": "model/gltf-binary",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
};

const resolveFile = async (pathname) => {
  const decoded = decodeURIComponent(pathname);
  const relative = decoded === "/" ? "index.html" : decoded.replace(/^\/+/, "");
  const candidates = [
    path.resolve(root, relative),
    path.resolve(root, `${relative}.html`),
    path.resolve(root, relative, "index.html"),
  ];

  for (const candidate of candidates) {
    if (!candidate.startsWith(`${root}${path.sep}`) && candidate !== root) {
      continue;
    }

    try {
      if ((await stat(candidate)).isFile()) return candidate;
    } catch {
      // Try the next static-export path.
    }
  }

  return null;
};

createServer(async (request, response) => {
  try {
    const file = await resolveFile(new URL(request.url ?? "/", "http://localhost").pathname);

    if (!file) {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      response.end("Not Found");
      return;
    }

    response.writeHead(200, {
      "content-type":
        contentTypes[path.extname(file)] ?? "application/octet-stream",
    });
    createReadStream(file).pipe(response);
  } catch {
    response.writeHead(400, { "content-type": "text/plain; charset=utf-8" });
    response.end("Bad Request");
  }
}).listen(port, () => {
  console.log(`Static portfolio ready at http://localhost:${port}`);
});
