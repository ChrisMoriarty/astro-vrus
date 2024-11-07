import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  site: "https://ChrisMoriarty.github.io/",
  // base: "/src",
  integrations: [tailwind(), react()],
});
