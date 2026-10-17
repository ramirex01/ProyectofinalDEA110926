import { createServer } from "vite";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";

const names = [
  "inicio",
  "diagnostico",
  "impactos",
  "soluciones",
  "aprende",
  "referencias",
];
const htmlFiles = names.map((name) =>
  name === "inicio" ? "index.html" : `${name}.html`,
);
const vite = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
});
const errors = [];

try {
  const { default: PageApp } = await vite.ssrLoadModule("/src/PageApp.jsx");
  const output = new Map();
  for (let index = 0; index < names.length; index++) {
    const file = htmlFiles[index];
    if (!existsSync(resolve("dist", file))) errors.push(`Falta dist/${file}`);
    const source = readFileSync(resolve(file), "utf8");
    if (!source.includes(`data-page="${names[index]}"`))
      errors.push(`Entrada incorrecta en ${file}`);
    const markup = renderToStaticMarkup(
      React.createElement(PageApp, { page: names[index] }),
    );
    output.set(file, markup);
    if (!markup.includes('aria-current="page"'))
      errors.push(`No se marca la página activa en ${file}`);
    if (names[index] !== "inicio" && !markup.includes("Página siguiente"))
      errors.push(`Falta navegación de recorrido en ${file}`);
    console.log(`Renderizado: ${file} (${markup.length} caracteres)`);
  }

  for (const [file, markup] of output) {
    for (const match of markup.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const url = match[1].replaceAll("&amp;", "&");
      if (url.startsWith("http:") || url.startsWith("https:")) continue;
      if (url.startsWith("#")) {
        if (!markup.includes(`id="${url.slice(1)}"`))
          errors.push(`${file}: ancla ausente ${url}`);
        continue;
      }
      if (url.startsWith("./")) {
        const [target, hash] = url.slice(2).split("#");
        if (!htmlFiles.includes(target))
          errors.push(`${file}: página interna ausente ${url}`);
        else if (hash && !output.get(target)?.includes(`id="${hash}"`))
          errors.push(`${file}: ancla interna ausente ${url}`);
        continue;
      }
      const base = "/ProyectofinalDEA110926/";
      if (url.startsWith(base)) {
        const asset = url.slice(base.length);
        if (!existsSync(resolve("dist", asset)))
          errors.push(`${file}: recurso ausente ${url}`);
      } else errors.push(`${file}: ruta no reconocida ${url}`);
    }
  }
} finally {
  await vite.close();
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exitCode = 1;
} else console.log("Seis páginas, navegación, anclas e imágenes verificadas.");
