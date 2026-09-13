import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
    allowedHosts: [
      "codebricks.gmbh",
      "www.codebricks.gmbh",
      "codebricks.solutions",
      "www.codebricks.solutions",
      "codebricks-gmbh.com",
      "www.codebricks-gmbh.com",
      ".lovable.app",
    ],
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
