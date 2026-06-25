import { T as or, a as and, d as ilike, f as inArray, i as desc, n as count, r as asc, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { r as attributes, t as attributeValues } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/attribute-query-helpers-BnCC7tjp.js
/**
* Attribute Query Helpers
*
* Shared utilities for attribute queries across vendor, admin, and store contexts.
* Centralizes batch fetching, normalization, and query building logic.
*/
/**
* Batch fetch all related data for a list of attributes
* Uses parallel queries for optimal performance
*/
async function batchFetchAttributeRelations(attributeIds, attributeList, options = {}) {
	if (attributeIds.length === 0) return {
		productCountsMap: /* @__PURE__ */ new Map(),
		valuesMap: /* @__PURE__ */ new Map(),
		shopsMap: /* @__PURE__ */ new Map()
	};
	const shopIds = [...new Set(attributeList.map((a) => a.shopId))];
	const [valueRecords, shopRecords, productCountRecords] = await Promise.all([
		options.includeValues !== false ? db.select().from(attributeValues).where(inArray(attributeValues.attributeId, attributeIds)).orderBy(asc(attributeValues.sortOrder)) : Promise.resolve([]),
		options.includeShopInfo && shopIds.length > 0 ? db.select({
			id: shops.id,
			name: shops.name,
			slug: shops.slug
		}).from(shops).where(inArray(shops.id, shopIds)) : Promise.resolve([]),
		Promise.resolve([])
	]);
	const productCountsMap = /* @__PURE__ */ new Map();
	for (const record of productCountRecords) productCountsMap.set(record.attributeId, record.count);
	const valuesMap = /* @__PURE__ */ new Map();
	for (const value of valueRecords) {
		const existing = valuesMap.get(value.attributeId) ?? [];
		existing.push({
			id: value.id,
			name: value.name,
			slug: value.slug,
			value: value.value,
			sortOrder: value.sortOrder ?? 0,
			createdAt: value.createdAt.toISOString(),
			updatedAt: value.updatedAt.toISOString()
		});
		valuesMap.set(value.attributeId, existing);
	}
	const shopsMap = /* @__PURE__ */ new Map();
	for (const shop of shopRecords) shopsMap.set(shop.id, shop);
	return {
		productCountsMap,
		valuesMap,
		shopsMap
	};
}
/**
* Transform a database attribute record into a normalized response object
*/
function normalizeAttribute(attribute, relations, options = {}) {
	const productCount = relations.productCountsMap.get(attribute.id) ?? 0;
	const values = relations.valuesMap.get(attribute.id) ?? [];
	let shopName = null;
	let shopSlug = null;
	if (options.includeShopInfo) {
		const shopInfo = relations.shopsMap.get(attribute.shopId);
		if (shopInfo) {
			shopName = shopInfo.name;
			shopSlug = shopInfo.slug;
		}
	}
	return {
		id: attribute.id,
		shopId: attribute.shopId,
		shopName,
		shopSlug,
		name: attribute.name,
		slug: attribute.slug,
		type: attribute.type,
		values,
		sortOrder: attribute.sortOrder ?? 0,
		isActive: attribute.isActive ?? true,
		productCount,
		createdAt: attribute.createdAt.toISOString(),
		updatedAt: attribute.updatedAt.toISOString()
	};
}
/**
* Build SQL WHERE conditions from filter parameters
*/
function buildAttributeFilterConditions(options) {
	const conditions = [];
	if (options.baseConditions) conditions.push(...options.baseConditions);
	if (options.search) conditions.push(or(ilike(attributes.name, `%${options.search}%`), ilike(attributes.slug, `%${options.search}%`)));
	if (options.type) conditions.push(eq(attributes.type, options.type));
	if (options.isActive !== void 0) conditions.push(eq(attributes.isActive, options.isActive));
	return conditions;
}
/**
* Execute an attribute query with the given options
* Handles filtering, pagination, sorting, and batch fetching relations
*/
async function executeAttributeQuery(options) {
	const limit = options.limit ?? 10;
	const offset = options.offset ?? 0;
	const sortDirection = options.sortDirection ?? "asc";
	const conditions = buildAttributeFilterConditions(options);
	const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
	const orderFn = sortDirection === "desc" ? desc : asc;
	const orderByClause = (() => {
		switch (options.sortBy) {
			case "name": return orderFn(attributes.name);
			case "createdAt": return orderFn(attributes.createdAt);
			default: return orderFn(attributes.sortOrder);
		}
	})();
	const [countResult, attributeList] = await Promise.all([db.select({ count: count() }).from(attributes).where(whereClause), db.select().from(attributes).where(whereClause).orderBy(orderByClause).limit(limit).offset(offset)]);
	const total = countResult[0]?.count ?? 0;
	if (attributeList.length === 0) return {
		data: [],
		total,
		limit,
		offset
	};
	const relations = await batchFetchAttributeRelations(attributeList.map((a) => a.id), attributeList, {
		includeShopInfo: options.includeShopInfo,
		includeValues: options.includeValues !== false
	});
	return {
		data: attributeList.map((attribute) => normalizeAttribute(attribute, relations, { includeShopInfo: options.includeShopInfo })),
		total,
		limit,
		offset
	};
}
/**
* Fetch a single attribute with all its relations
*/
async function fetchAttributeWithRelations(attribute, options = {}) {
	return normalizeAttribute(attribute, await batchFetchAttributeRelations([attribute.id], [attribute], {
		includeShopInfo: options.includeShopInfo,
		includeValues: options.includeValues ?? true
	}), options);
}
//#endregion
export { fetchAttributeWithRelations as n, executeAttributeQuery as t };
