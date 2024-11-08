import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  output: "static",
  public: "./public/",
  site: "https://www.moriartyengineering.com",
  base: "/moriartyengineering",
  integrations: [tailwind(), react()],
});
