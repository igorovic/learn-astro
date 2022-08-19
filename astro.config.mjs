import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import astroI18next from "astro-i18next";


// https://astro.build/config
export default defineConfig({
  // enable experimental integration for astro-i18next
  experimental: { integrations: true },
  integrations: [
    tailwind({
      config: { applyBaseStyles: false },
    }),
    astroI18next({
      baseLocale: "en",
      resourcesPath: "./src/locales",
      supportedLocales: ["en", "fr"],
      i18next: {
        debug: true, // convenient during development to check for missing keys
        defaultNS: "common",
        supportedLngs: ["en", "fr"],
      },
    }),
  ],
});
