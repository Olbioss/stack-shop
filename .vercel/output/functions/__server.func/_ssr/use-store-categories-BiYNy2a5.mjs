import { Dt as zod_default } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { i as queryOptions } from "../_libs/tanstack__react-query.mjs";
import { a as getCategoryBySlugSchema, i as getCategoryByIdSchema, o as storeCategoriesQuerySchema } from "./category-query-C0zo9q64.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-store-categories-BiYNy2a5.js
/**
* Get categories for the public storefront
* Only returns active categories
* No authentication required
*/
var getStoreCategories = createServerFn({ method: "GET" }).inputValidator(storeCategoriesQuerySchema).handler(createSsrRpc("c567abc8ffc2823303791710a8c503849791a1df81c7a43b43f89caf86ef4098"));
/**
* Get a single category by slug for category pages
* Only returns if the category is active
*/
var getStoreCategoryBySlug = createServerFn({ method: "GET" }).inputValidator(getCategoryBySlugSchema).handler(createSsrRpc("734b2361df9eff0475bcc2516bdbfc29864cdd5a1558f762d885a94d15c31fb6"));
createServerFn({ method: "GET" }).inputValidator(getCategoryByIdSchema).handler(createSsrRpc("37c14bdda1c06420d9f19ea86d8bdaa9dbefa888ec09e2ed8bc2067862dba0a4"));
/**
* Get featured categories for homepage or promotional sections
*/
var getFeaturedCategories = createServerFn({ method: "GET" }).inputValidator(zod_default.object({
	limit: zod_default.coerce.number().min(1).max(20).optional().default(8),
	shopSlug: zod_default.string().optional()
})).handler(createSsrRpc("b4e3a1a25c36a3ddc60d2dedfaf4816cda947625b5d662a9282b73a4ddf96f9c"));
/**
* Get hierarchical category tree for navigation menus
*/
var getCategoryTree = createServerFn({ method: "GET" }).inputValidator(zod_default.object({
	shopSlug: zod_default.string().optional(),
	shopId: zod_default.string().optional(),
	maxDepth: zod_default.coerce.number().min(1).max(5).optional().default(3)
})).handler(createSsrRpc("97b2e0b9bf2c85cd93e46256e9c9a790794b670d2a8532c08c85298d7a0a7d6a"));
/**
* Get subcategories of a parent category
*/
var getSubcategories = createServerFn({ method: "GET" }).inputValidator(zod_default.object({
	parentId: zod_default.string().min(1, "Parent category ID is required"),
	limit: zod_default.coerce.number().min(1).max(50).optional().default(20)
})).handler(createSsrRpc("d47c76b2fa391803458e772b8f6a8e298bbcb1c74cb8347d451aa488f32570bd"));
/**
* Store Categories Hook
*
* React Query hooks for store front category listing.
* Used in the public-facing product filter pages.
*/
var storeCategoriesKeys = {
	all: ["store", "categories"],
	lists: () => [...storeCategoriesKeys.all, "list"],
	list: (params) => [...storeCategoriesKeys.lists(), params],
	details: () => [...storeCategoriesKeys.all, "detail"],
	detailBySlug: (slug, shopSlug) => [
		...storeCategoriesKeys.details(),
		"slug",
		slug,
		shopSlug
	],
	featured: (limit) => [
		...storeCategoriesKeys.all,
		"featured",
		limit
	],
	tree: (shopSlug, maxDepth) => [
		...storeCategoriesKeys.all,
		"tree",
		shopSlug,
		maxDepth
	],
	subcategories: (parentId) => [
		...storeCategoriesKeys.all,
		"subcategories",
		parentId
	]
};
var defaultParams = {
	limit: 50,
	offset: 0,
	sortBy: "sortOrder",
	sortDirection: "asc"
};
/**
* Query options for fetching store categories
*/
var storeCategoriesQueryOptions = (params = {}) => {
	const mergedParams = {
		...defaultParams,
		...params
	};
	return queryOptions({
		queryKey: storeCategoriesKeys.list(mergedParams),
		queryFn: () => getStoreCategories({ data: mergedParams })
	});
};
/**
* Query options for fetching a single category by slug
*/
var storeCategoryBySlugQueryOptions = (slug, shopSlug) => queryOptions({
	queryKey: storeCategoriesKeys.detailBySlug(slug, shopSlug),
	queryFn: () => getStoreCategoryBySlug({ data: {
		slug,
		shopSlug
	} }),
	enabled: !!slug
});
/**
* Query options for fetching featured categories
*/
var featuredCategoriesQueryOptions = (limit = 8) => queryOptions({
	queryKey: storeCategoriesKeys.featured(limit),
	queryFn: () => getFeaturedCategories({ data: { limit } })
});
/**
* Query options for fetching the category tree
*/
var categoryTreeQueryOptions = (shopSlug, maxDepth = 3) => queryOptions({
	queryKey: storeCategoriesKeys.tree(shopSlug, maxDepth),
	queryFn: () => getCategoryTree({ data: {
		shopSlug,
		maxDepth
	} })
});
/**
* Query options for fetching subcategories of a parent category
*/
var subcategoriesQueryOptions = (parentId, limit = 20) => queryOptions({
	queryKey: storeCategoriesKeys.subcategories(parentId),
	queryFn: () => getSubcategories({ data: {
		parentId,
		limit
	} }),
	enabled: !!parentId
});
//#endregion
export { subcategoriesQueryOptions as a, storeCategoryBySlugQueryOptions as i, featuredCategoriesQueryOptions as n, storeCategoriesQueryOptions as r, categoryTreeQueryOptions as t };
