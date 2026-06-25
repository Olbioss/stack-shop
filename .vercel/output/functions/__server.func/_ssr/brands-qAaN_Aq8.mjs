import { a as and, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { a as brands } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { Jt as number, ln as string, on as object } from "../_libs/@better-auth/core+[...].mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { r as emptyPaginatedResponse, t as createPaginatedResponse } from "./api-response-CYQsbkXz.mjs";
import { a as getBrandBySlugSchema, i as getBrandByIdSchema, o as storeBrandsQuerySchema } from "./brand-query-w-wFF7Pb.mjs";
import { n as fetchBrandWithRelations, t as executeBrandQuery } from "./brands-query-helpers-BR5G_JqE.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brands-qAaN_Aq8.js
/**
* Store Front Brand Server Functions
*
* Public server functions for the storefront/customer-facing pages.
* No authentication required - anyone can browse brands.
* Only returns active brands.
*/
var getStoreBrands_createServerFn_handler = createServerRpc({
	id: "c985c0257038d3af45d238f094c72530ff46348e05a8e839a96f08372a98fa0d",
	name: "getStoreBrands",
	filename: "src/lib/functions/store/brands.ts"
}, (opts) => getStoreBrands.__executeServer(opts));
var getStoreBrands = createServerFn({ method: "GET" }).inputValidator(storeBrandsQuerySchema).handler(getStoreBrands_createServerFn_handler, async ({ data }) => {
	const { limit, offset, search, sortBy, sortDirection, shopId, shopSlug } = data;
	const baseConditions = [eq(brands.isActive, true)];
	if (shopId) baseConditions.push(eq(brands.shopId, shopId));
	if (shopSlug && !shopId) {
		const { shops } = await import("./shop-schema-C3PbWNTi.mjs");
		const [shop] = await db.select({ id: shops.id }).from(shops).where(eq(shops.slug, shopSlug));
		if (shop) baseConditions.push(eq(brands.shopId, shop.id));
		else return emptyPaginatedResponse(limit, offset);
	}
	const result = await executeBrandQuery({
		baseConditions,
		search,
		isActive: true,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: true
	});
	return createPaginatedResponse(result.data, result.total, result.limit, result.offset);
});
var getStoreBrandBySlug_createServerFn_handler = createServerRpc({
	id: "cc2c2f4bdcb5655d563a05bd48beb517d988a4abec57d3df351baf5976f22b69",
	name: "getStoreBrandBySlug",
	filename: "src/lib/functions/store/brands.ts"
}, (opts) => getStoreBrandBySlug.__executeServer(opts));
var getStoreBrandBySlug = createServerFn({ method: "GET" }).inputValidator(getBrandBySlugSchema).handler(getStoreBrandBySlug_createServerFn_handler, async ({ data }) => {
	const { slug, shopSlug } = data;
	const conditions = [eq(brands.slug, slug), eq(brands.isActive, true)];
	if (shopSlug) {
		const { shops } = await import("./shop-schema-C3PbWNTi.mjs");
		const [shop] = await db.select({ id: shops.id }).from(shops).where(eq(shops.slug, shopSlug));
		if (shop) conditions.push(eq(brands.shopId, shop.id));
		else throw new Error("Shop not found.");
	}
	const [brand] = await db.select().from(brands).where(and(...conditions));
	if (!brand) throw new Error("Brand not found.");
	return { brand: await fetchBrandWithRelations(brand, { includeShopInfo: true }) };
});
var getStoreBrandById_createServerFn_handler = createServerRpc({
	id: "8e28051b09bd6de4147b4d803d99d4942da10f33349108e88311b7ace8777e5e",
	name: "getStoreBrandById",
	filename: "src/lib/functions/store/brands.ts"
}, (opts) => getStoreBrandById.__executeServer(opts));
var getStoreBrandById = createServerFn({ method: "GET" }).inputValidator(getBrandByIdSchema).handler(getStoreBrandById_createServerFn_handler, async ({ data }) => {
	const { id } = data;
	const [brand] = await db.select().from(brands).where(and(eq(brands.id, id), eq(brands.isActive, true)));
	if (!brand) throw new Error("Brand not found.");
	return { brand: await fetchBrandWithRelations(brand, { includeShopInfo: true }) };
});
var getPopularBrands_createServerFn_handler = createServerRpc({
	id: "a4a4240aa356429c0a3ffe747814824c0385bece1760fcacc844a6614637d8cb",
	name: "getPopularBrands",
	filename: "src/lib/functions/store/brands.ts"
}, (opts) => getPopularBrands.__executeServer(opts));
var getPopularBrands = createServerFn({ method: "GET" }).inputValidator(object({
	limit: number().min(1).max(20).optional().default(10),
	shopSlug: string().optional()
})).handler(getPopularBrands_createServerFn_handler, async ({ data }) => {
	const { limit, shopSlug } = data;
	const baseConditions = [eq(brands.isActive, true)];
	if (shopSlug) {
		const { shops } = await import("./shop-schema-C3PbWNTi.mjs");
		const [shop] = await db.select({ id: shops.id }).from(shops).where(eq(shops.slug, shopSlug));
		if (shop) baseConditions.push(eq(brands.shopId, shop.id));
	}
	return { brands: (await executeBrandQuery({
		baseConditions,
		limit,
		offset: 0,
		sortBy: "productCount",
		sortDirection: "desc",
		includeShopInfo: true
	})).data };
});
//#endregion
export { getPopularBrands_createServerFn_handler, getStoreBrandById_createServerFn_handler, getStoreBrandBySlug_createServerFn_handler, getStoreBrands_createServerFn_handler };
