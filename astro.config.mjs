import { defineConfig } from "astro/config";
import db from "@astrojs/db";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

import webVitals from "@astrojs/web-vitals";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), tailwind({
    applyBaseStyles: false
  }), webVitals()],
  output: "server",
  adapter: vercel()
});