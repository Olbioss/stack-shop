import { O as notFound, d as createFileRoute, u as lazyRouteComponent } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as getStoreProductById } from "./_ssr/products-Yly5xhyF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_productId-UVfxBhZ7.js
var $$splitComponentImporter = () => import("./_productId-BgVknWJW.mjs");
var Route = createFileRoute("/(store)/_layout/product/$productId")({
	loader: async ({ params }) => {
		try {
			const { product } = await getStoreProductById({ data: { id: params.productId } });
			return { product };
		} catch {
			throw notFound();
		}
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
