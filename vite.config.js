import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [react()],
  base: "/ProyectofinalDEA110926/",
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        [
          "index",
          "diagnostico",
          "impactos",
          "soluciones",
          "aprende",
          "referencias",
        ].map((page) => [page, resolve(process.cwd(), `${page}.html`)]),
      ),
    },
  },
});
