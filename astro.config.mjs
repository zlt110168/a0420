import {defineConfig} from "astro/config";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import {VantResolver} from "@vant/auto-import-resolver";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vue(), react()],
  prefetch: {
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
  adapter: node({
    mode: "standalone",
  }),
});
