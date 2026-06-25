import { d as createFileRoute, u as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageSkeleton } from "./page-skeleton-DTaB0ooE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-BNNSwrrq.js
var $$splitComponentImporter = () => import("./products-Vo2FAWHs.mjs");
var Route = createFileRoute("/(vendor)/shop/$slug/products/")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	pendingComponent: PageSkeleton
});
//#endregion
export { Route as t };
