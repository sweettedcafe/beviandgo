import { createApp } from "vinxi";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

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
      handler: "./src/client.tsx",
      plugins: () => [
        TanStackRouterVite({ autoCodeSplitting: true }),
        react(),
        tsconfigPaths(),
      ],
      vite: {
        resolve: {
          alias: [
            {
              find: /^node:async_hooks$/,
              replacement: path.resolve("./src/async-hooks-mock.js"),
            },
            { find: "@", replacement: path.resolve("./src") },
          ],
        },
      },
    },
    {
      name: "server",
      type: "http",
      handler: "./src/server.ts",
      plugins: () => [tsconfigPaths()],
    },
  ],
});