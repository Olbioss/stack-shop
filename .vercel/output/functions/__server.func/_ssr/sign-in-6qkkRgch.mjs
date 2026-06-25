import { d as createFileRoute, u as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { Gt as zod_default } from "../_libs/@better-auth/core+[...].mjs";
import { n as zodSearchValidator, t as fallback } from "../_libs/tanstack__router-zod-adapter.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sign-in-6qkkRgch.js
var $$splitComponentImporter = () => import("./sign-in-ras4b8zD.mjs");
var signInSearchSchema = zod_default.object({ redirectTo: fallback(zod_default.string(), "/").default("/") });
var Route = createFileRoute("/(auth)/sign-in")({
	validateSearch: zodSearchValidator(signInSearchSchema),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
