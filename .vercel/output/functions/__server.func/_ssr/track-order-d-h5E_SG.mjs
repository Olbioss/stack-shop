import { Gt as string, Ht as object } from "../_libs/@better-auth/core+[...].mjs";
import { d as createFileRoute, u as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/track-order-d-h5E_SG.js
var $$splitComponentImporter = () => import("./track-order-CYrGV6Ac.mjs");
var searchSchema = object({ orderId: string().optional() });
var Route = createFileRoute("/(store)/_layout/track-order")({
	validateSearch: (search) => searchSchema.parse(search),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
