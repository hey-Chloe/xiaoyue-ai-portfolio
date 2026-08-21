const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function sitePath(pathname) {
  if (!pathname.startsWith("/")) {
    throw new Error("sitePath expects an absolute pathname");
  }

  return `${basePath}${pathname}`;
}
