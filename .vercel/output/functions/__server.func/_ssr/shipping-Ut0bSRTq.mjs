import { d as createFileRoute, u as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as shopBySlugQueryOptions } from "./use-shops-Cbmwju82.mjs";
import { t as PageSkeleton } from "./page-skeleton-DTaB0ooE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shipping-Ut0bSRTq.js
var $$splitComponentImporter = () => import("./shipping-YMqgaUZz.mjs");
var Route = createFileRoute("/(vendor)/shop/$slug/shipping")({
	loader: async ({ context: { queryClient }, params: { slug } }) => {
		await queryClient.ensureQueryData(shopBySlugQueryOptions(slug));
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	pendingComponent: PageSkeleton
});
//#endregion
export { Route as t };
