import { d as createFileRoute, u as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { Gt as zod_default } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-confirmation-Bw5A2DJF.js
var $$splitComponentImporter = () => import("./order-confirmation-CjwKu4bV.mjs");
var searchSchema = zod_default.object({
	orderIds: zod_default.union([zod_default.string(), zod_default.array(zod_default.string())]).transform((value) => Array.isArray(value) ? value : [value]).optional(),
	paymentIntentId: zod_default.string().optional()
});
var Route = createFileRoute("/(store)/_layout/order-confirmation")({
	validateSearch: (search) => searchSchema.parse(search),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
