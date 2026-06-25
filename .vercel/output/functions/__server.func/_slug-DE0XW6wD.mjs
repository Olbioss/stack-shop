import { d as createFileRoute, u as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { i as storeCategoryBySlugQueryOptions } from "./_ssr/use-store-categories-BiYNy2a5.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DE0XW6wD.js
var $$splitComponentImporter = () => import("./_slug-BAxStvyN.mjs");
var Route = createFileRoute("/(store)/_layout/category/$slug")({
	loader: async ({ context, params }) => {
		await context.queryClient.prefetchQuery(storeCategoryBySlugQueryOptions(params.slug));
		return {};
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
