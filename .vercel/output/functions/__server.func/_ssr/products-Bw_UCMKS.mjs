import { d as createFileRoute, u as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageSkeleton } from "./page-skeleton-DTaB0ooE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-Bw_UCMKS.js
var $$splitComponentImporter = () => import("./products-BRXxvgaQ.mjs");
var Route = createFileRoute("/(vendor)/shop/$slug/products/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	pendingComponent: PageSkeleton
});
//#endregion
export { Route as t };
