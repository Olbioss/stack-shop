import { Dt as zod_default } from "../_libs/@better-auth/core+[...].mjs";
import { d as createFileRoute, u as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-LLM9sGEi.js
var $$splitComponentImporter = () => import("./settings-Dl3uwQLo.mjs");
var settingsSearchSchema = zod_default.object({
	tab: zod_default.enum(["general", "payments"]).optional().default("general"),
	stripe_onboarding: zod_default.enum(["success", "refresh"]).optional()
});
var Route = createFileRoute("/(vendor)/shop/$slug/settings")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	validateSearch: (search) => settingsSearchSchema.parse(search)
});
//#endregion
export { Route as t };
