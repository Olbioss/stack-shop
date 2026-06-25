import { At as number, Gt as string, Ht as object } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { i as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { a as getBrandBySlugSchema, i as getBrandByIdSchema, o as storeBrandsQuerySchema } from "./brand-query-w-wFF7Pb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-store-brands-Snb0r2-j.js
/**
* Store Front Brand Server Functions
*
* Public server functions for the storefront/customer-facing pages.
* No authentication required - anyone can browse brands.
* Only returns active brands.
*/
/**
* Get brands for the public storefront
* Only returns active brands
* No authentication required
*/
var getStoreBrands = createServerFn({ method: "GET" }).inputValidator(storeBrandsQuerySchema).handler(createSsrRpc("c985c0257038d3af45d238f094c72530ff46348e05a8e839a96f08372a98fa0d"));
createServerFn({ method: "GET" }).inputValidator(getBrandBySlugSchema).handler(createSsrRpc("cc2c2f4bdcb5655d563a05bd48beb517d988a4abec57d3df351baf5976f22b69"));
createServerFn({ method: "GET" }).inputValidator(getBrandByIdSchema).handler(createSsrRpc("8e28051b09bd6de4147b4d803d99d4942da10f33349108e88311b7ace8777e5e"));
createServerFn({ method: "GET" }).inputValidator(object({
	limit: number().min(1).max(20).optional().default(10),
	shopSlug: string().optional()
})).handler(createSsrRpc("a4a4240aa356429c0a3ffe747814824c0385bece1760fcacc844a6614637d8cb"));
/**
* Store Brands Hook
*
* React Query hooks for store front brand listing.
* Used in the public-facing product filter pages.
*/
var storeBrandsKeys = {
	all: ["store", "brands"],
	lists: () => [...storeBrandsKeys.all, "list"],
	list: (params) => [...storeBrandsKeys.lists(), params],
	details: () => [...storeBrandsKeys.all, "detail"],
	detailBySlug: (slug, shopSlug) => [
		...storeBrandsKeys.details(),
		"slug",
		slug,
		shopSlug
	],
	popular: (limit) => [
		...storeBrandsKeys.all,
		"popular",
		limit
	]
};
var defaultParams = {
	limit: 50,
	offset: 0,
	sortBy: "name",
	sortDirection: "asc"
};
/**
* Query options for fetching store brands
*/
var storeBrandsQueryOptions = (params = {}) => {
	const mergedParams = {
		...defaultParams,
		...params
	};
	return queryOptions({
		queryKey: storeBrandsKeys.list(mergedParams),
		queryFn: () => getStoreBrands({ data: mergedParams })
	});
};
//#endregion
export { storeBrandsQueryOptions as t };
