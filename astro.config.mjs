import sitemap from "@astrojs/sitemap";
import vercelServerless from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercelServerless(),
  site: "https://www.alexandra-liard.com",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
