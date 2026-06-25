import { d as createFileRoute, u as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { ln as string, on as object } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-order-D9_UtfCb.js
var $$splitComponentImporter = () => import("./track-order-CqCjUzYB.mjs");
var searchSchema = object({ orderId: string().optional() });
var Route = createFileRoute("/(store)/_layout/track-order")({
	validateSearch: (search) => searchSchema.parse(search),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
