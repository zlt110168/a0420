import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {VantResolver} from "@vant/auto-import-resolver";
import react from "@astrojs/react";
import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), react()],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "load",
  },
  build: {
    format: "file",
  },
  vite: {
    plugins: [
      AutoImport({
        resolvers: [VantResolver()],
      }),
      Components({
        resolvers: [VantResolver()],
      }),
    ],
  },
  output: "server",
  adapter: vercel(),
});
