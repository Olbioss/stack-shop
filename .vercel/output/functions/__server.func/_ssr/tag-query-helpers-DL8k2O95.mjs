import { T as or, a as and, d as ilike, f as inArray, i as desc, n as count, r as asc, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { y as tags } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tag-query-helpers-DL8k2O95.js
/**
* Tag Query Helpers
*
* Shared utilities for tag queries across vendor, admin, and store contexts.
* Centralizes batch fetching, normalization, and query building logic.
*/
/**
* Batch fetch all related data for a list of tags
* Uses parallel queries for optimal performance
*/
async function batchFetchTagRelations(tagIds, tagList, options = {}) {
	if (tagIds.length === 0) return { shopsMap: /* @__PURE__ */ new Map() };
	const shopIds = [...new Set(tagList.map((t) => t.shopId))];
	const shopRecords = options.includeShopInfo && shopIds.length > 0 ? await db.select({
		id: shops.id,
		name: shops.name,
		slug: shops.slug
	}).from(shops).where(inArray(shops.id, shopIds)) : [];
	const shopsMap = /* @__PURE__ */ new Map();
	for (const shop of shopRecords) shopsMap.set(shop.id, shop);
	return { shopsMap };
}
/**
* Transform a database tag record into a normalized response object
*/
function normalizeTag(tag, relations, options = {}) {
	let shopName = null;
	let shopSlug = null;
	if (options.includeShopInfo) {
		const shopInfo = relations.shopsMap.get(tag.shopId);
		if (shopInfo) {
			shopName = shopInfo.name;
			shopSlug = shopInfo.slug;
		}
	}
	return {
		id: tag.id,
		shopId: tag.shopId,
		shopName,
		shopSlug,
		name: tag.name,
		slug: tag.slug,
		description: tag.description,
		sortOrder: tag.sortOrder ?? 0,
		isActive: tag.isActive ?? true,
		productCount: tag.productCount ?? 0,
		createdAt: tag.createdAt.toISOString(),
		updatedAt: tag.updatedAt.toISOString()
	};
}
/**
* Build SQL WHERE conditions from filter parameters
*/
function buildTagFilterConditions(options) {
	const conditions = [];
	if (options.baseConditions) conditions.push(...options.baseConditions);
	if (options.search) conditions.push(or(ilike(tags.name, `%${options.search}%`), ilike(tags.slug, `%${options.search}%`), ilike(tags.description, `%${options.search}%`)));
	if (options.isActive !== void 0) conditions.push(eq(tags.isActive, options.isActive));
	return conditions;
}
/**
* Execute a tag query with the given options
* Handles filtering, pagination, sorting, and batch fetching relations
*/
async function executeTagQuery(options) {
	const limit = options.limit ?? 10;
	const offset = options.offset ?? 0;
	const sortDirection = options.sortDirection ?? "asc";
	const conditions = buildTagFilterConditions(options);
	const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
	const orderFn = sortDirection === "desc" ? desc : asc;
	const orderByClause = (() => {
		switch (options.sortBy) {
			case "name": return orderFn(tags.name);
			case "createdAt": return orderFn(tags.createdAt);
			case "productCount": return orderFn(tags.productCount);
			default: return orderFn(tags.sortOrder);
		}
	})();
	const [countResult, tagList] = await Promise.all([db.select({ count: count() }).from(tags).where(whereClause), db.select().from(tags).where(whereClause).orderBy(orderByClause).limit(limit).offset(offset)]);
	const total = countResult[0]?.count ?? 0;
	if (tagList.length === 0) return {
		data: [],
		total,
		limit,
		offset
	};
	const relations = await batchFetchTagRelations(tagList.map((t) => t.id), tagList, { includeShopInfo: options.includeShopInfo });
	return {
		data: tagList.map((tag) => normalizeTag(tag, relations, { includeShopInfo: options.includeShopInfo })),
		total,
		limit,
		offset
	};
}
/**
* Fetch a single tag with all its relations
*/
async function fetchTagWithRelations(tag, options = {}) {
	return normalizeTag(tag, await batchFetchTagRelations([tag.id], [tag], { includeShopInfo: options.includeShopInfo }), options);
}
//#endregion
export { fetchTagWithRelations as n, executeTagQuery as t };
