import { d as createFileRoute, u as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as PageSkeleton } from "./page-skeleton-DTaB0ooE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-BSmuGq7U.js
var $$splitComponentImporter = () => import("./categories-DB8fmT51.mjs");
var Route = createFileRoute("/(vendor)/shop/$slug/categories")({
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	pendingComponent: PageSkeleton
});
//#endregion
export { Route as t };
