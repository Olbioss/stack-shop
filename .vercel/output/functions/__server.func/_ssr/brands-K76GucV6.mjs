import { d as createFileRoute, u as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageSkeleton } from "./page-skeleton-DTaB0ooE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brands-K76GucV6.js
var $$splitComponentImporter = () => import("./brands-CMFuqYbZ.mjs");
var Route = createFileRoute("/(vendor)/shop/$slug/brands")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	pendingComponent: PageSkeleton
});
//#endregion
export { Route as t };
