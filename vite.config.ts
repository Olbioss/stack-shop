import tailwindcss from "@tailwindcss/vite";
import { devtools } from "@tanstack/devtools-vite";

import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import viteReact from "@vitejs/plugin-react";
import { nitro } from "nitro/vite";
import { defineConfig } from "vite";

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    // tslib / @swc/helpers are TS runtime-helper packages imported as bare
    // specifiers by some deps (e.g. @radix-ui/react-alert-dialog). Nitro's
    // external tracing for them was non-deterministic across build
    // environments and dropped them from the Vercel lambda
    // (ERR_MODULE_NOT_FOUND: Cannot find package 'tslib' at runtime).
    // noExternals bundles them into the server output so there is no runtime
    // module resolution to fail.
    nitro({
      noExternals: ["tslib", "@swc/helpers"],
      rollupConfig: { external: [/^@sentry\//] },
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
});

export default config;
