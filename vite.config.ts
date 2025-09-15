import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // --- penting untuk GitHub Pages ---
  base: "/Vimotion-Academy/",

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    // aktifkan componentTagger hanya saat development
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
