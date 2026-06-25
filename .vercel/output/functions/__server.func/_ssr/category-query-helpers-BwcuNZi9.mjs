import { T as or, a as and, d as ilike, f as inArray, i as desc, n as count, r as asc, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { h as products, o as categories } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category-query-helpers-BwcuNZi9.js
/**
* Build SQL WHERE conditions from filter parameters
*/
function buildCategoryFilterConditions(options) {
	const conditions = [];
	if (options.baseConditions) conditions.push(...options.baseConditions);
	if (options.search) conditions.push(or(ilike(categories.name, `%${options.search}%`), ilike(categories.slug, `%${options.search}%`), ilike(categories.description, `%${options.search}%`)));
	if (options.parentId !== void 0) {
		if (options.parentId === "" || options.parentId === "root") conditions.push(eq(categories.parentId, null));
		else if (options.parentId) conditions.push(eq(categories.parentId, options.parentId));
	}
	if (options.isActive !== void 0) conditions.push(eq(categories.isActive, options.isActive));
	if (options.featured !== void 0) conditions.push(eq(categories.featured, options.featured));
	return conditions;
}
async function batchFetchCategoryRelations(categoryIds, categoryList, options = {}) {
	if (categoryIds.length === 0) return {
		parentNamesMap: /* @__PURE__ */ new Map(),
		productCountsMap: /* @__PURE__ */ new Map(),
		shopsMap: /* @__PURE__ */ new Map()
	};
	const parentIds = [...new Set(categoryList.map((c) => c.parentId).filter(Boolean))];
	const shopIds = [...new Set(categoryList.map((c) => c.shopId))];
	const [parentRecords, shopRecords, productCountRecords] = await Promise.all([
		parentIds.length > 0 ? db.select({
			id: categories.id,
			name: categories.name
		}).from(categories).where(inArray(categories.id, parentIds)) : Promise.resolve([]),
		options.includeShopInfo && shopIds.length > 0 ? db.select({
			id: shops.id,
			name: shops.name,
			slug: shops.slug
		}).from(shops).where(inArray(shops.id, shopIds)) : Promise.resolve([]),
		db.select({
			categoryId: products.categoryId,
			count: count()
		}).from(products).where(inArray(products.categoryId, categoryIds)).groupBy(products.categoryId)
	]);
	const productCountsMap = /* @__PURE__ */ new Map();
	for (const record of productCountRecords) if (record.categoryId) productCountsMap.set(record.categoryId, record.count);
	const parentNamesMap = /* @__PURE__ */ new Map();
	for (const parent of parentRecords) parentNamesMap.set(parent.id, parent.name);
	const shopsMap = /* @__PURE__ */ new Map();
	for (const shop of shopRecords) shopsMap.set(shop.id, shop);
	return {
		parentNamesMap,
		productCountsMap,
		shopsMap
	};
}
function normalizeCategory(category, relations, options = {}) {
	const parentName = category.parentId ? relations.parentNamesMap.get(category.parentId) ?? null : null;
	const productCount = relations.productCountsMap.get(category.id) ?? 0;
	let shopName = null;
	let shopSlug = null;
	if (options.includeShopInfo) {
		const shopInfo = relations.shopsMap.get(category.shopId);
		if (shopInfo) {
			shopName = shopInfo.name;
			shopSlug = shopInfo.slug;
		}
	}
	return {
		id: category.id,
		shopId: category.shopId,
		shopName,
		shopSlug,
		name: category.name,
		slug: category.slug,
		description: category.description,
		image: category.image,
		icon: category.icon,
		parentId: category.parentId,
		parentName,
		level: category.level ?? 0,
		sortOrder: category.sortOrder ?? 0,
		isActive: category.isActive ?? true,
		featured: category.featured ?? false,
		productCount,
		createdAt: category.createdAt.toISOString(),
		updatedAt: category.updatedAt.toISOString()
	};
}
async function executeCategoryQuery(options) {
	const limit = options.limit ?? 10;
	const offset = options.offset ?? 0;
	const sortDirection = options.sortDirection ?? "asc";
	const conditions = buildCategoryFilterConditions(options);
	const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
	const orderFn = sortDirection === "desc" ? desc : asc;
	const orderByClause = (() => {
		switch (options.sortBy) {
			case "name": return orderFn(categories.name);
			case "createdAt": return orderFn(categories.createdAt);
			case "productCount": return orderFn(categories.productCount);
			default: return orderFn(categories.sortOrder);
		}
	})();
	const [countResult, categoryList] = await Promise.all([db.select({ count: count() }).from(categories).where(whereClause), db.select().from(categories).where(whereClause).orderBy(orderByClause).limit(limit).offset(offset)]);
	const total = countResult[0]?.count ?? 0;
	if (categoryList.length === 0) return {
		data: [],
		total,
		limit,
		offset
	};
	const relations = await batchFetchCategoryRelations(categoryList.map((c) => c.id), categoryList, { includeShopInfo: options.includeShopInfo });
	return {
		data: categoryList.map((category) => normalizeCategory(category, relations, { includeShopInfo: options.includeShopInfo })),
		total,
		limit,
		offset
	};
}
async function fetchCategoryWithRelations(category, options = {}) {
	return normalizeCategory(category, await batchFetchCategoryRelations([category.id], [category], { includeShopInfo: options.includeShopInfo }), options);
}
/**
* Build a hierarchical category tree from a flat list
*/
function buildCategoryTree(flatCategories) {
	const categoryMap = /* @__PURE__ */ new Map();
	for (const category of flatCategories) categoryMap.set(category.id, {
		...category,
		children: []
	});
	const roots = [];
	for (const category of flatCategories) {
		const node = categoryMap.get(category.id);
		if (category.parentId && categoryMap.has(category.parentId)) categoryMap.get(category.parentId).children.push(node);
		else roots.push(node);
	}
	const sortByOrder = (a, b) => a.sortOrder - b.sortOrder;
	const sortChildren = (nodes) => {
		nodes.sort(sortByOrder);
		for (const node of nodes) sortChildren(node.children);
	};
	sortChildren(roots);
	return roots;
}
//#endregion
export { executeCategoryQuery as n, fetchCategoryWithRelations as r, buildCategoryTree as t };
