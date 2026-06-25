import { T as or, a as and, d as ilike, f as inArray, i as desc, n as count, r as asc, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { a as brands } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brands-query-helpers-BR5G_JqE.js
/**
* Batch fetch all related data for a list of brands
* Uses parallel queries for optimal performance
*/
async function batchFetchBrandRelations(brandIds, brandList, options = {}) {
	if (brandIds.length === 0) return {
		productCountsMap: /* @__PURE__ */ new Map(),
		shopsMap: /* @__PURE__ */ new Map()
	};
	const shopIds = [...new Set(brandList.map((b) => b.shopId))];
	const shopRecords = options.includeShopInfo && shopIds.length > 0 ? await db.select({
		id: shops.id,
		name: shops.name,
		slug: shops.slug
	}).from(shops).where(inArray(shops.id, shopIds)) : [];
	const productCountsMap = /* @__PURE__ */ new Map();
	const shopsMap = /* @__PURE__ */ new Map();
	for (const shop of shopRecords) shopsMap.set(shop.id, shop);
	return {
		productCountsMap,
		shopsMap
	};
}
/**
* Transform a database brand record into a normalized response object
*/
function normalizeBrand(brand, relations, options = {}) {
	const productCount = relations.productCountsMap.get(brand.id) ?? 0;
	let shopName = null;
	let shopSlug = null;
	if (options.includeShopInfo) {
		const shopInfo = relations.shopsMap.get(brand.shopId);
		if (shopInfo) {
			shopName = shopInfo.name;
			shopSlug = shopInfo.slug;
		}
	}
	return {
		id: brand.id,
		shopId: brand.shopId,
		shopName,
		shopSlug,
		name: brand.name,
		slug: brand.slug,
		description: brand.description,
		logo: brand.logo,
		website: brand.website,
		sortOrder: brand.sortOrder ?? 0,
		isActive: brand.isActive ?? true,
		productCount,
		createdAt: brand.createdAt.toISOString(),
		updatedAt: brand.updatedAt.toISOString()
	};
}
/**
* Build SQL WHERE conditions from filter parameters
*/
function buildBrandFilterConditions(options) {
	const conditions = [];
	if (options.baseConditions) conditions.push(...options.baseConditions);
	if (options.search) {
		const searchTerm = `%${options.search}%`;
		conditions.push(or(ilike(brands.name, searchTerm), ilike(brands.slug, searchTerm), ilike(brands.description, searchTerm)));
	}
	if (options.isActive !== void 0) conditions.push(eq(brands.isActive, options.isActive));
	return conditions;
}
async function executeBrandQuery(options) {
	const limit = options.limit ?? 10;
	const offset = options.offset ?? 0;
	const sortDirection = options.sortDirection ?? "asc";
	const conditions = buildBrandFilterConditions(options);
	const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
	const orderFn = sortDirection === "desc" ? desc : asc;
	const orderByClause = (() => {
		switch (options.sortBy) {
			case "name": return orderFn(brands.name);
			case "createdAt": return orderFn(brands.createdAt);
			case "productCount": return orderFn(brands.productCount);
			default: return orderFn(brands.sortOrder);
		}
	})();
	const [countResult, brandList] = await Promise.all([db.select({ count: count() }).from(brands).where(whereClause), db.select().from(brands).where(whereClause).orderBy(orderByClause).limit(limit).offset(offset)]);
	const total = countResult[0]?.count ?? 0;
	if (brandList.length === 0) return {
		data: [],
		total,
		limit,
		offset
	};
	const relations = await batchFetchBrandRelations(brandList.map((b) => b.id), brandList, { includeShopInfo: options.includeShopInfo });
	return {
		data: brandList.map((brand) => normalizeBrand(brand, relations, { includeShopInfo: options.includeShopInfo })),
		total,
		limit,
		offset
	};
}
/**
* Fetch a single brand with all its relations
*/
async function fetchBrandWithRelations(brand, options = {}) {
	return normalizeBrand(brand, await batchFetchBrandRelations([brand.id], [brand], { includeShopInfo: options.includeShopInfo }), options);
}
//#endregion
export { fetchBrandWithRelations as n, executeBrandQuery as t };
