import { a as and, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { o as categories } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { Gt as zod_default } from "../_libs/@better-auth/core+[...].mjs";
import { a as getCategoryBySlugSchema, i as getCategoryByIdSchema, o as storeCategoriesQuerySchema } from "./category-query-C0zo9q64.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { r as emptyPaginatedResponse, t as createPaginatedResponse } from "./api-response-CYQsbkXz.mjs";
import { n as executeCategoryQuery, r as fetchCategoryWithRelations, t as buildCategoryTree } from "./category-query-helpers-BwcuNZi9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-Dz-NobGy.js
var getStoreCategories_createServerFn_handler = createServerRpc({
	id: "c567abc8ffc2823303791710a8c503849791a1df81c7a43b43f89caf86ef4098",
	name: "getStoreCategories",
	filename: "src/lib/functions/store/categories.ts"
}, (opts) => getStoreCategories.__executeServer(opts));
var getStoreCategories = createServerFn({ method: "GET" }).inputValidator(storeCategoriesQuerySchema).handler(getStoreCategories_createServerFn_handler, async ({ data }) => {
	const { limit, offset, search, parentId, featured, sortBy, sortDirection, shopId, shopSlug } = data;
	const baseConditions = [eq(categories.isActive, true)];
	if (shopId) baseConditions.push(eq(categories.shopId, shopId));
	if (shopSlug && !shopId) {
		const { shops } = await import("./shop-schema-C3PbWNTi.mjs");
		const [shop] = await db.select({ id: shops.id }).from(shops).where(eq(shops.slug, shopSlug));
		if (shop) baseConditions.push(eq(categories.shopId, shop.id));
		else return emptyPaginatedResponse(limit, offset);
	}
	const result = await executeCategoryQuery({
		baseConditions,
		search,
		parentId: parentId ?? void 0,
		isActive: true,
		featured,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: true
	});
	return createPaginatedResponse(result.data, result.total, result.limit, result.offset);
});
var getStoreCategoryBySlug_createServerFn_handler = createServerRpc({
	id: "734b2361df9eff0475bcc2516bdbfc29864cdd5a1558f762d885a94d15c31fb6",
	name: "getStoreCategoryBySlug",
	filename: "src/lib/functions/store/categories.ts"
}, (opts) => getStoreCategoryBySlug.__executeServer(opts));
var getStoreCategoryBySlug = createServerFn({ method: "GET" }).inputValidator(getCategoryBySlugSchema).handler(getStoreCategoryBySlug_createServerFn_handler, async ({ data }) => {
	const { slug, shopSlug } = data;
	const conditions = [eq(categories.slug, slug), eq(categories.isActive, true)];
	if (shopSlug) {
		const { shops } = await import("./shop-schema-C3PbWNTi.mjs");
		const [shop] = await db.select({ id: shops.id }).from(shops).where(eq(shops.slug, shopSlug));
		if (shop) conditions.push(eq(categories.shopId, shop.id));
		else throw new Error("Shop not found.");
	}
	const [category] = await db.select().from(categories).where(and(...conditions));
	if (!category) throw new Error("Category not found.");
	return { category: await fetchCategoryWithRelations(category, { includeShopInfo: true }) };
});
var getStoreCategoryById_createServerFn_handler = createServerRpc({
	id: "37c14bdda1c06420d9f19ea86d8bdaa9dbefa888ec09e2ed8bc2067862dba0a4",
	name: "getStoreCategoryById",
	filename: "src/lib/functions/store/categories.ts"
}, (opts) => getStoreCategoryById.__executeServer(opts));
var getStoreCategoryById = createServerFn({ method: "GET" }).inputValidator(getCategoryByIdSchema).handler(getStoreCategoryById_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [category] = await db.select().from(categories).where(and(eq(categories.id, id), eq(categories.isActive, true)));
	if (!category) throw new Error("Category not found.");
	return { category: await fetchCategoryWithRelations(category, { includeShopInfo: true }) };
});
var getFeaturedCategories_createServerFn_handler = createServerRpc({
	id: "b4e3a1a25c36a3ddc60d2dedfaf4816cda947625b5d662a9282b73a4ddf96f9c",
	name: "getFeaturedCategories",
	filename: "src/lib/functions/store/categories.ts"
}, (opts) => getFeaturedCategories.__executeServer(opts));
var getFeaturedCategories = createServerFn({ method: "GET" }).inputValidator(zod_default.object({
	limit: zod_default.coerce.number().min(1).max(20).optional().default(8),
	shopSlug: zod_default.string().optional()
})).handler(getFeaturedCategories_createServerFn_handler, async ({ data }) => {
	const { limit, shopSlug } = data;
	const baseConditions = [eq(categories.isActive, true), eq(categories.featured, true)];
	if (shopSlug) {
		const { shops } = await import("./shop-schema-C3PbWNTi.mjs");
		const [shop] = await db.select({ id: shops.id }).from(shops).where(eq(shops.slug, shopSlug));
		if (shop) baseConditions.push(eq(categories.shopId, shop.id));
	}
	return { categories: (await executeCategoryQuery({
		baseConditions,
		limit,
		offset: 0,
		sortBy: "sortOrder",
		sortDirection: "asc",
		includeShopInfo: true
	})).data };
});
var getCategoryTree_createServerFn_handler = createServerRpc({
	id: "97b2e0b9bf2c85cd93e46256e9c9a790794b670d2a8532c08c85298d7a0a7d6a",
	name: "getCategoryTree",
	filename: "src/lib/functions/store/categories.ts"
}, (opts) => getCategoryTree.__executeServer(opts));
var getCategoryTree = createServerFn({ method: "GET" }).inputValidator(zod_default.object({
	shopSlug: zod_default.string().optional(),
	shopId: zod_default.string().optional(),
	maxDepth: zod_default.coerce.number().min(1).max(5).optional().default(3)
})).handler(getCategoryTree_createServerFn_handler, async ({ data }) => {
	const { shopSlug, shopId, maxDepth } = data;
	const baseConditions = [eq(categories.isActive, true)];
	if (shopId) baseConditions.push(eq(categories.shopId, shopId));
	else if (shopSlug) {
		const { shops } = await import("./shop-schema-C3PbWNTi.mjs");
		const [shop] = await db.select({ id: shops.id }).from(shops).where(eq(shops.slug, shopSlug));
		if (shop) baseConditions.push(eq(categories.shopId, shop.id));
	}
	return { tree: buildCategoryTree((await executeCategoryQuery({
		baseConditions,
		limit: 500,
		offset: 0,
		sortBy: "sortOrder",
		sortDirection: "asc",
		includeShopInfo: false
	})).data.filter((c) => c.level < maxDepth)) };
});
var getSubcategories_createServerFn_handler = createServerRpc({
	id: "d47c76b2fa391803458e772b8f6a8e298bbcb1c74cb8347d451aa488f32570bd",
	name: "getSubcategories",
	filename: "src/lib/functions/store/categories.ts"
}, (opts) => getSubcategories.__executeServer(opts));
var getSubcategories = createServerFn({ method: "GET" }).inputValidator(zod_default.object({
	parentId: zod_default.string().min(1, "Parent category ID is required"),
	limit: zod_default.coerce.number().min(1).max(50).optional().default(20)
})).handler(getSubcategories_createServerFn_handler, async ({ data }) => {
	const { parentId, limit } = data;
	return { categories: (await executeCategoryQuery({
		baseConditions: [eq(categories.isActive, true), eq(categories.parentId, parentId)],
		limit,
		offset: 0,
		sortBy: "sortOrder",
		sortDirection: "asc",
		includeShopInfo: false
	})).data };
});
//#endregion
export { getCategoryTree_createServerFn_handler, getFeaturedCategories_createServerFn_handler, getStoreCategories_createServerFn_handler, getStoreCategoryById_createServerFn_handler, getStoreCategoryBySlug_createServerFn_handler, getSubcategories_createServerFn_handler };
