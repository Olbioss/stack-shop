import { T as or, a as and, d as ilike, f as inArray, i as desc, n as count, r as asc, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { x as taxRates } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tax-rate-query-helpers-YKU-0hrc.js
/**
* Tax Rate Query Helpers
*
* Shared utilities for tax rate queries across vendor, admin, and store contexts.
* Centralizes normalization and query building logic.
*/
/**
* Batch fetch all related data for a list of tax rates
*/
async function batchFetchTaxRateRelations(taxRateIds, taxRateList, options = {}) {
	if (taxRateIds.length === 0) return { shopsMap: /* @__PURE__ */ new Map() };
	const shopIds = [...new Set(taxRateList.map((tr) => tr.shopId))];
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
* Transform a database tax rate record into a normalized response object
*/
function normalizeTaxRate(taxRate, _relations, _options = {}) {
	return {
		id: taxRate.id,
		shopId: taxRate.shopId,
		name: taxRate.name,
		rate: taxRate.rate,
		country: taxRate.country,
		state: taxRate.state || void 0,
		zip: taxRate.zip || void 0,
		priority: taxRate.priority || "",
		isActive: taxRate.isActive || true,
		isCompound: taxRate.isCompound || false,
		createdAt: taxRate.createdAt.toISOString(),
		updatedAt: taxRate.updatedAt.toISOString()
	};
}
/**
* Build SQL WHERE conditions from filter parameters
*/
function buildTaxRateFilterConditions(options) {
	const conditions = [];
	if (options.baseConditions) conditions.push(...options.baseConditions);
	if (options.search) conditions.push(or(ilike(taxRates.name, `%${options.search}%`), ilike(taxRates.country, `%${options.search}%`), ilike(taxRates.state, `%${options.search}%`)));
	if (options.country) conditions.push(eq(taxRates.country, options.country));
	if (options.isActive !== void 0) conditions.push(eq(taxRates.isActive, options.isActive));
	return conditions;
}
/**
* Execute a tax rate query with the given options
* Handles filtering, pagination, sorting, and batch fetching relations
*/
async function executeTaxRateQuery(options) {
	const limit = options.limit ?? 10;
	const offset = options.offset ?? 0;
	const sortDirection = options.sortDirection ?? "asc";
	const conditions = buildTaxRateFilterConditions(options);
	const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
	const orderFn = sortDirection === "desc" ? desc : asc;
	const orderByClause = (() => {
		switch (options.sortBy) {
			case "name": return orderFn(taxRates.name);
			case "rate": return orderFn(taxRates.rate);
			case "priority": return orderFn(taxRates.priority);
			case "createdAt": return orderFn(taxRates.createdAt);
			default: return orderFn(taxRates.priority);
		}
	})();
	const [countResult, taxRateList] = await Promise.all([db.select({ count: count() }).from(taxRates).where(whereClause), db.select().from(taxRates).where(whereClause).orderBy(orderByClause).limit(limit).offset(offset)]);
	const total = countResult[0]?.count ?? 0;
	if (taxRateList.length === 0) return {
		data: [],
		total,
		limit,
		offset
	};
	const relations = await batchFetchTaxRateRelations(taxRateList.map((tr) => tr.id), taxRateList, { includeShopInfo: options.includeShopInfo });
	return {
		data: taxRateList.map((taxRate) => normalizeTaxRate(taxRate, relations, { includeShopInfo: options.includeShopInfo })),
		total,
		limit,
		offset
	};
}
/**
* Fetch a single tax rate with all its relations
*/
async function fetchTaxRateWithRelations(taxRate, options = {}) {
	return normalizeTaxRate(taxRate, await batchFetchTaxRateRelations([taxRate.id], [taxRate], { includeShopInfo: options.includeShopInfo }), options);
}
//#endregion
export { fetchTaxRateWithRelations as n, executeTaxRateQuery as t };
