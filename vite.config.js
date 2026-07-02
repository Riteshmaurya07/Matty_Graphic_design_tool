// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: false, // disable sourcemaps
  },
  optimizeDeps: {
    exclude: ["lucide-react"], // <-- prevent vite from optimizing lucide-react
    esbuildOptions: {
      sourcemap: false,
    },
  },
});
