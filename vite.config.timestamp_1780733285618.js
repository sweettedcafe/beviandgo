// vite.config.ts
import { defineConfig } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
var vite_config_default = defineConfig({
  tsr: {
    appDirectory: "src"
  },
  vite: {
    plugins: [tsconfigPaths()]
  }
});
export {
  vite_config_default as default
};
