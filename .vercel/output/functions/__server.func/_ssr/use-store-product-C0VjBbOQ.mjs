import { a as getStoreProducts, i as getStoreProductBySlug, n as getRelatedProducts, r as getStoreProductById, t as getFeaturedProducts } from "./products-Yly5xhyF.mjs";
import { i as queryOptions, r as infiniteQueryOptions } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-store-product-C0VjBbOQ.js
var PRODUCTS_PAGE_SIZE = {
	initial: 12,
	subsequent: 6
};
/**
* Store Products Hook
*
* React Query hooks for store front product listing.
* Used in the public-facing product pages.
*/
var storeProductsKeys = {
	all: ["store", "products"],
	lists: () => [...storeProductsKeys.all, "list"],
	list: (params) => [...storeProductsKeys.lists(), params],
	infinite: (params) => [
		...storeProductsKeys.all,
		"infinite",
		params
	],
	details: () => [...storeProductsKeys.all, "detail"],
	detailBySlug: (slug, shopSlug) => [
		...storeProductsKeys.details(),
		"slug",
		slug,
		shopSlug
	],
	detailById: (id) => [
		...storeProductsKeys.details(),
		"id",
		id
	],
	featured: (limit) => [
		...storeProductsKeys.all,
		"featured",
		limit
	],
	related: (productId, limit) => [
		...storeProductsKeys.all,
		"related",
		productId,
		limit
	]
};
var defaultParams = {
	limit: PRODUCTS_PAGE_SIZE.initial,
	offset: 0,
	sortBy: "createdAt",
	sortDirection: "desc"
};
/**
* Query options for fetching store products with pagination and filters
*/
var storeProductsQueryOptions = (params = {}) => {
	const mergedParams = {
		...defaultParams,
		...params
	};
	return queryOptions({
		queryKey: storeProductsKeys.list(mergedParams),
		queryFn: () => getStoreProducts({ data: mergedParams })
	});
};
/**
* Infinite query options for fetching store products with infinite scrolling
* Used for the main product listing page with load-more pagination
*/
var storeProductsInfiniteQueryOptions = (params = {}) => {
	const baseParams = {
		search: params.search,
		minPrice: params.minPrice,
		maxPrice: params.maxPrice,
		inStock: params.inStock,
		sortBy: params.sortBy ?? defaultParams.sortBy,
		sortDirection: params.sortDirection ?? defaultParams.sortDirection
	};
	return infiniteQueryOptions({
		queryKey: storeProductsKeys.infinite(baseParams),
		queryFn: async ({ pageParam = 0 }) => {
			const limit = pageParam === 0 ? PRODUCTS_PAGE_SIZE.initial : PRODUCTS_PAGE_SIZE.subsequent;
			return await getStoreProducts({ data: {
				...baseParams,
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
* Query options for fetching a single product by slug
*/
var storeProductBySlugQueryOptions = (slug, shopSlug) => queryOptions({
	queryKey: storeProductsKeys.detailBySlug(slug, shopSlug),
	queryFn: () => getStoreProductBySlug({ data: {
		slug,
		shopSlug
	} }),
	enabled: !!slug
});
/**
* Query options for fetching a single product by ID
*/
var storeProductByIdQueryOptions = (id) => queryOptions({
	queryKey: storeProductsKeys.detailById(id),
	queryFn: () => getStoreProductById({ data: { id } }),
	enabled: !!id
});
/**
* Query options for fetching featured products
*/
var featuredProductsQueryOptions = (limit = 8) => queryOptions({
	queryKey: storeProductsKeys.featured(limit),
	queryFn: () => getFeaturedProducts({ data: { limit } })
});
/**
* Query options for fetching related products
*/
var relatedProductsQueryOptions = (productId, limit = 4) => queryOptions({
	queryKey: storeProductsKeys.related(productId, limit),
	queryFn: () => getRelatedProducts({ data: {
		productId,
		limit
	} }),
	enabled: !!productId
});
/**
* Combined hook for store product queries
* Provides a unified interface for all store product query options
*/
var useStoreProducts = () => ({
	productsQueryOptions: storeProductsQueryOptions,
	productBySlugQueryOptions: storeProductBySlugQueryOptions,
	productByIdQueryOptions: storeProductByIdQueryOptions,
	infiniteProductsQueryOptions: storeProductsInfiniteQueryOptions,
	featuredProductsQueryOptions,
	relatedProductsQueryOptions
});
//#endregion
export { storeProductsQueryOptions as n, useStoreProducts as r, storeProductsInfiniteQueryOptions as t };
