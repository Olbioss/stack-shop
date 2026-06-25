import { Dt as zod_default } from "../_libs/@better-auth/core+[...].mjs";
import { d as createFileRoute, u as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-confirmation-K7XWNyQ3.js
var $$splitComponentImporter = () => import("./order-confirmation-BA0XjH26.mjs");
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
