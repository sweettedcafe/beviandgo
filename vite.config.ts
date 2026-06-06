import { createApp } from "vinxi";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default createApp({
  routers: [
    {
      name: "public",
      type: "static",
      dir: "./public",
    },
    {
      name: "client",
      type: "client",
      handler: "./src/router.tsx",
      plugins: () => [TanStackRouterVite(), tsconfigPaths()],
    },
    {
      name: "server",
      type: "http",
      handler: "./src/server.ts",
      plugins: () => [tsconfigPaths()],
    },
  ],
});