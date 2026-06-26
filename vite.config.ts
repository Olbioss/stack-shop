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
    // specifiers by some deps (e.g. @radix-ui/react-alert-dialog). They must
    // stay EXTERNAL — inlining them (noExternals) breaks tslib's CJS interop
    // ("Cannot destructure '__extends' of __toESM(...).default"). traceDeps
    // forces Nitro to copy them into the Vercel lambda's node_modules so the
    // external import resolves at runtime.
    nitro({
      traceDeps: ["tslib", "@swc/helpers"],
      rollupConfig: { external: [/^@sentry\//] },
    }),
    tailwindcss(),
    tanstackStart(),
    viteReact(),
  ],
});

export default config;
