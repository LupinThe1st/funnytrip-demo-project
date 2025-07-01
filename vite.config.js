import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import path from "path";
import pxToViewport from 'postcss-px-to-viewport';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 配置 @ 指向 src 目录
    },
  },
  css: {
    postcss: {
      plugins: [
        pxToViewport({
          viewportWidth: 375, // 基准视口宽度（对应设计稿的宽度）
        }),
      ],
    },
  },
});
