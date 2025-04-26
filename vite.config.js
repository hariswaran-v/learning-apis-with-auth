import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // base: '/YOUR_BASE/'
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        detail: resolve(__dirname, "detail.html"),
        detail: resolve(__dirname, "login.html"),
      },
    },
  },
});
