import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { i as queryOptions, r as infiniteQueryOptions } from "../_libs/tanstack__react-query.mjs";
import { a as storeShopsQuerySchema, i as storeShopBySlugSchema } from "./shop-CA4bt79N.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-store-shops-cZQ3-wBf.js
/**
* Get shops for the public storefront
* Only returns active shops
* No authentication required
*/
var getStoreShops = createServerFn({ method: "GET" }).inputValidator(storeShopsQuerySchema).handler(createSsrRpc("b04ce292aa7f9be0e63e14495def752bb27b1700d040ff7206f583fd839d4348"));
var getStoreShopBySlug = createServerFn({ method: "GET" }).inputValidator(storeShopBySlugSchema).handler(createSsrRpc("578ed4d8116e8b34a57f34531e688347e10256df8f2ac7de8c9c8845115301f5"));
/**
* Store Shops Hook
*
* React Query hooks for store front shop/store listing.
* Used in the public-facing store pages.
*/
var storeShopsKeys = {
	all: ["store", "shops"],
	lists: () => [...storeShopsKeys.all, "list"],
	list: (params) => [...storeShopsKeys.lists(), params],
	infinite: (params) => [
		...storeShopsKeys.lists(),
		"infinite",
		params
	],
	details: () => [...storeShopsKeys.all, "detail"],
	detailBySlug: (slug) => [
		...storeShopsKeys.details(),
		"slug",
		slug
	]
};
/**
* Infinite query options for fetching store shops with infinite scroll
*/
var storeShopsInfiniteQueryOptions = (params = {}) => {
	const initialLimit = params.limit ?? 12;
	const subsequentLimit = 6;
	return infiniteQueryOptions({
		queryKey: storeShopsKeys.infinite(params),
		queryFn: async ({ pageParam = 0 }) => {
			const limit = pageParam === 0 ? initialLimit : subsequentLimit;
			return await getStoreShops({ data: {
				...params,
				limit,
				offset: pageParam
			} });
		},
		initialPageParam: 0,
		getNextPageParam: (lastPage, allPages) => {
			const totalFetched = allPages.reduce((acc, page) => acc + page.data.length, 0);
			if (totalFetched >= lastPage.total) return;
			return totalFetched;
		}
	});
};
/**
* Query options for fetching a single shop by slug
*/
var storeShopBySlugQueryOptions = (slug) => queryOptions({
	queryKey: storeShopsKeys.detailBySlug(slug),
	queryFn: () => getStoreShopBySlug({ data: { slug } }),
	enabled: !!slug
});
//#endregion
export { storeShopsInfiniteQueryOptions as n, storeShopBySlugQueryOptions as t };
