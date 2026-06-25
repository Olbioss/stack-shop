import { d as createFileRoute, u as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { t as storeShopBySlugQueryOptions } from "./_ssr/use-store-shops-cZQ3-wBf.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DaFJdXdC.js
var $$splitComponentImporter = () => import("./_slug-C2qBGhsg.mjs");
var Route = createFileRoute("/(store)/_layout/store/$slug")({
	loader: async ({ context, params }) => {
		await context.queryClient.prefetchQuery(storeShopBySlugQueryOptions(params.slug));
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
