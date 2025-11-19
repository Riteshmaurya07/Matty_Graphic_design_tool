// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
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
