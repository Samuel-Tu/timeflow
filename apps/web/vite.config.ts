import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": "/src",
    },
  },

  server: {
    port: 7344
  },

  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer()],
    },
  },
});
