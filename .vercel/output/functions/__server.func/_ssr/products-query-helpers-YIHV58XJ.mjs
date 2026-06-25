import { T as or, _ as lte, a as and, d as ilike, f as inArray, i as desc, n as count, r as asc, s as eq, u as gte } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops, s as vendors } from "./shop-schema-C6uNILQs.mjs";
import { _ as shippingMethods, a as brands, d as productShippingMethods, h as products, l as productImages, o as categories, p as productTags, r as attributes, s as productAttributes, t as attributeValues, x as taxRates, y as tags } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-query-helpers-YIHV58XJ.js
function buildProductFilterConditions(options) {
	const conditions = [];
	if (options.baseConditions) conditions.push(...options.baseConditions);
	if (options.search) conditions.push(or(ilike(products.name, `%${options.search}%`), ilike(products.slug, `%${options.search}%`), ilike(products.sku, `%${options.search}%`), ilike(products.description, `%${options.search}%`)));
	if (options.status) conditions.push(eq(products.status, options.status));
	if (options.productType) conditions.push(eq(products.productType, options.productType));
	if (options.categoryId) conditions.push(eq(products.categoryId, options.categoryId));
	if (options.brandId) conditions.push(eq(products.brandId, options.brandId));
	if (options.isFeatured !== void 0) conditions.push(eq(products.isFeatured, options.isFeatured));
	if (options.isActive !== void 0) conditions.push(eq(products.isActive, options.isActive));
	if (options.inStock) conditions.push(gte(products.stock, 1));
	if (options.lowStock) conditions.push(lte(products.stock, products.lowStockThreshold));
	if (options.minPrice !== void 0) conditions.push(gte(products.sellingPrice, String(options.minPrice)));
	if (options.maxPrice !== void 0) conditions.push(lte(products.sellingPrice, String(options.maxPrice)));
	return conditions;
}
async function batchFetchProductRelations(productIds, productList, options = {}) {
	if (productIds.length === 0) return {
		imagesMap: /* @__PURE__ */ new Map(),
		tagsMap: /* @__PURE__ */ new Map(),
		attributesMap: /* @__PURE__ */ new Map(),
		attributeValuesMap: /* @__PURE__ */ new Map(),
		categoriesMap: /* @__PURE__ */ new Map(),
		brandsMap: /* @__PURE__ */ new Map(),
		taxRatesMap: /* @__PURE__ */ new Map(),
		shopsMap: /* @__PURE__ */ new Map(),
		vendorsMap: /* @__PURE__ */ new Map(),
		shippingMethodsMap: /* @__PURE__ */ new Map()
	};
	const categoryIds = [...new Set(productList.map((p) => p.categoryId).filter(Boolean))];
	const brandIds = [...new Set(productList.map((p) => p.brandId).filter(Boolean))];
	const taxIds = [...new Set(productList.map((p) => p.taxId).filter(Boolean))];
	const shopIds = [...new Set(productList.map((p) => p.shopId))];
	const queries = [
		db.select().from(productImages).where(inArray(productImages.productId, productIds)).orderBy(asc(productImages.sortOrder)),
		db.select({
			productId: productTags.productId,
			tagId: productTags.tagId,
			tagName: tags.name
		}).from(productTags).innerJoin(tags, eq(productTags.tagId, tags.id)).where(inArray(productTags.productId, productIds)),
		db.select({
			productId: productAttributes.productId,
			attributeId: productAttributes.attributeId,
			attributeName: attributes.name,
			value: productAttributes.value
		}).from(productAttributes).innerJoin(attributes, eq(productAttributes.attributeId, attributes.id)).where(inArray(productAttributes.productId, productIds)),
		categoryIds.length > 0 ? db.select({
			id: categories.id,
			name: categories.name
		}).from(categories).where(inArray(categories.id, categoryIds)) : Promise.resolve([]),
		brandIds.length > 0 ? db.select({
			id: brands.id,
			name: brands.name
		}).from(brands).where(inArray(brands.id, brandIds)) : Promise.resolve([]),
		taxIds.length > 0 ? db.select({
			id: taxRates.id,
			name: taxRates.name
		}).from(taxRates).where(inArray(taxRates.id, taxIds)) : Promise.resolve([]),
		db.select({
			productId: productShippingMethods.productId,
			shippingMethodId: productShippingMethods.shippingMethodId,
			shippingMethodName: shippingMethods.name
		}).from(productShippingMethods).innerJoin(shippingMethods, eq(productShippingMethods.shippingMethodId, shippingMethods.id)).where(inArray(productShippingMethods.productId, productIds))
	];
	if (options.includeShopInfo && shopIds.length > 0) queries.push(db.select({
		id: shops.id,
		name: shops.name,
		slug: shops.slug,
		vendorId: shops.vendorId
	}).from(shops).where(inArray(shops.id, shopIds)));
	else queries.push(Promise.resolve([]));
	const [allImages, allProductTags, allProductAttrs, categoryRecords, brandRecords, taxRecords, allShippingMethods, shopRecords] = await Promise.all(queries);
	let vendorRecords = [];
	if (options.includeVendorInfo && shopRecords.length > 0) {
		const vendorIds = [...new Set(shopRecords.map((s) => s.vendorId).filter(Boolean))];
		if (vendorIds.length > 0) vendorRecords = await db.select({
			id: vendors.id,
			businessName: vendors.businessName
		}).from(vendors).where(inArray(vendors.id, vendorIds));
	}
	let allAttributeValues = [];
	const attributeIds = [...new Set(allProductAttrs.map((pa) => pa.attributeId))];
	if (attributeIds.length > 0) allAttributeValues = await db.select({
		id: attributeValues.id,
		name: attributeValues.name,
		value: attributeValues.value
	}).from(attributeValues).where(inArray(attributeValues.attributeId, attributeIds));
	const imagesMap = /* @__PURE__ */ new Map();
	for (const img of allImages) {
		const existing = imagesMap.get(img.productId) || [];
		existing.push(img);
		imagesMap.set(img.productId, existing);
	}
	const tagsMap = /* @__PURE__ */ new Map();
	for (const pt of allProductTags) {
		const existing = tagsMap.get(pt.productId) || [];
		existing.push({
			tagId: pt.tagId,
			tagName: pt.tagName
		});
		tagsMap.set(pt.productId, existing);
	}
	const attributesMap = /* @__PURE__ */ new Map();
	for (const pa of allProductAttrs) {
		const existing = attributesMap.get(pa.productId) || [];
		existing.push({
			attributeId: pa.attributeId,
			attributeName: pa.attributeName,
			value: pa.value
		});
		attributesMap.set(pa.productId, existing);
	}
	const attributeValuesMap = /* @__PURE__ */ new Map();
	for (const av of allAttributeValues) attributeValuesMap.set(av.id, {
		name: av.name,
		value: av.value
	});
	const categoriesMap = /* @__PURE__ */ new Map();
	for (const cat of categoryRecords) categoriesMap.set(cat.id, cat.name);
	const brandsMap = /* @__PURE__ */ new Map();
	for (const brand of brandRecords) brandsMap.set(brand.id, brand.name);
	const taxRatesMap = /* @__PURE__ */ new Map();
	for (const tax of taxRecords) taxRatesMap.set(tax.id, tax.name);
	const shopsMap = /* @__PURE__ */ new Map();
	for (const shop of shopRecords) shopsMap.set(shop.id, shop);
	const vendorsMap = /* @__PURE__ */ new Map();
	for (const vendor of vendorRecords) vendorsMap.set(vendor.id, vendor);
	const shippingMethodsMap = /* @__PURE__ */ new Map();
	for (const sm of allShippingMethods) {
		const existing = shippingMethodsMap.get(sm.productId) || [];
		existing.push({
			shippingMethodId: sm.shippingMethodId,
			shippingMethodName: sm.shippingMethodName
		});
		shippingMethodsMap.set(sm.productId, existing);
	}
	return {
		imagesMap,
		tagsMap,
		attributesMap,
		attributeValuesMap,
		categoriesMap,
		brandsMap,
		taxRatesMap,
		shopsMap,
		vendorsMap,
		shippingMethodsMap
	};
}
function normalizeProduct(product, relations, options = {}) {
	const imagesList = relations.imagesMap.get(product.id) || [];
	const tagsList = relations.tagsMap.get(product.id) || [];
	const attrsList = relations.attributesMap.get(product.id) || [];
	const shippingMethodsList = relations.shippingMethodsMap.get(product.id) || [];
	const categoryName = product.categoryId ? relations.categoriesMap.get(product.categoryId) ?? null : null;
	const brandName = product.brandId ? relations.brandsMap.get(product.brandId) ?? null : null;
	const taxName = product.taxId ? relations.taxRatesMap.get(product.taxId) ?? null : null;
	let shopName = null;
	let shopSlug = null;
	let vendorId = null;
	let vendorName = null;
	if (options.includeShopInfo) {
		const shopInfo = relations.shopsMap.get(product.shopId);
		if (shopInfo) {
			shopName = shopInfo.name;
			shopSlug = shopInfo.slug;
			vendorId = shopInfo.vendorId || null;
			if (options.includeVendorInfo && vendorId) vendorName = relations.vendorsMap.get(vendorId)?.businessName || null;
		}
	}
	const attributeValues = {};
	for (const pa of attrsList) if (pa.value) try {
		attributeValues[pa.attributeId] = JSON.parse(pa.value);
	} catch {
		attributeValues[pa.attributeId] = [pa.value];
	}
	else attributeValues[pa.attributeId] = [];
	let variationPrices = {};
	if (product.variationPrices) try {
		variationPrices = JSON.parse(product.variationPrices);
	} catch {
		variationPrices = {};
	}
	const attributeValueNames = {};
	for (const valueIds of Object.values(attributeValues)) for (const valueId of valueIds) {
		const valueInfo = relations.attributeValuesMap.get(valueId);
		if (valueInfo) attributeValueNames[valueId] = valueInfo.name;
	}
	for (const valueId of Object.keys(variationPrices)) if (!attributeValueNames[valueId]) {
		const valueInfo = relations.attributeValuesMap.get(valueId);
		if (valueInfo) attributeValueNames[valueId] = valueInfo.name;
	}
	return {
		id: product.id,
		shopId: product.shopId,
		shopName,
		shopSlug,
		vendorId,
		vendorName,
		name: product.name,
		slug: product.slug,
		sku: product.sku,
		description: product.description,
		shortDescription: product.shortDescription,
		sellingPrice: product.sellingPrice,
		regularPrice: product.regularPrice,
		costPrice: options.excludeCostPrice ? null : product.costPrice,
		stock: product.stock ?? 0,
		lowStockThreshold: product.lowStockThreshold ?? 5,
		trackInventory: product.trackInventory ?? true,
		categoryId: product.categoryId,
		categoryName,
		brandId: product.brandId,
		brandName,
		taxId: product.taxId,
		taxName,
		status: product.status,
		productType: product.productType,
		isFeatured: product.isFeatured ?? false,
		isActive: product.isActive ?? true,
		averageRating: product.averageRating?.toString() || "0",
		reviewCount: product.reviewCount ?? 0,
		metaTitle: product.metaTitle,
		metaDescription: product.metaDescription,
		images: imagesList.map((img) => ({
			id: img.id,
			productId: img.productId,
			url: img.url,
			alt: img.alt,
			sortOrder: img.sortOrder ?? 0,
			isPrimary: img.isPrimary ?? false,
			createdAt: img.createdAt
		})),
		thumbnailImage: imagesList.find((img) => img.isPrimary)?.url || imagesList[0]?.url || null,
		galleryImages: imagesList.filter((img) => !img.isPrimary).map((img) => img.url),
		tagIds: tagsList.map((t) => t.tagId),
		tagNames: tagsList.map((t) => t.tagName),
		shippingMethodIds: shippingMethodsList.map((s) => s.shippingMethodId),
		shippingMethodNames: shippingMethodsList.map((s) => s.shippingMethodName),
		attributeIds: attrsList.map((a) => a.attributeId),
		attributeNames: attrsList.map((a) => a.attributeName),
		attributeValues,
		attributeValueNames,
		variationPrices,
		createdAt: product.createdAt.toISOString(),
		updatedAt: product.updatedAt.toISOString()
	};
}
async function executeProductQuery(options) {
	const limit = options.limit ?? 10;
	const offset = options.offset ?? 0;
	const sortDirection = options.sortDirection ?? "desc";
	const conditions = buildProductFilterConditions(options);
	const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
	const orderFn = sortDirection === "desc" ? desc : asc;
	const orderByClause = (() => {
		switch (options.sortBy) {
			case "name": return orderFn(products.name);
			case "sellingPrice": return orderFn(products.sellingPrice);
			case "stock": return orderFn(products.stock);
			case "averageRating": return orderFn(products.averageRating);
			case "reviewCount": return orderFn(products.reviewCount);
			case "updatedAt": return orderFn(products.updatedAt);
			default: return orderFn(products.createdAt);
		}
	})();
	const [countResult, productList] = await Promise.all([db.select({ count: count() }).from(products).where(whereClause), db.select().from(products).where(whereClause).orderBy(orderByClause).limit(limit).offset(offset)]);
	const total = countResult[0]?.count ?? 0;
	let filteredProducts = productList;
	if (options.tagId || options.attributeId) {
		const [tagAssociations, attrAssociations] = await Promise.all([options.tagId ? db.select({ productId: productTags.productId }).from(productTags).where(eq(productTags.tagId, options.tagId)) : Promise.resolve(null), options.attributeId ? db.select({ productId: productAttributes.productId }).from(productAttributes).where(eq(productAttributes.attributeId, options.attributeId)) : Promise.resolve(null)]);
		if (tagAssociations) {
			const tagProductIds = new Set(tagAssociations.map((p) => p.productId));
			filteredProducts = filteredProducts.filter((p) => tagProductIds.has(p.id));
		}
		if (attrAssociations) {
			const attrProductIds = new Set(attrAssociations.map((p) => p.productId));
			filteredProducts = filteredProducts.filter((p) => attrProductIds.has(p.id));
		}
	}
	const relations = await batchFetchProductRelations(filteredProducts.map((p) => p.id), filteredProducts, {
		includeShopInfo: options.includeShopInfo,
		includeVendorInfo: options.includeVendorInfo
	});
	return {
		data: filteredProducts.map((product) => normalizeProduct(product, relations, {
			includeShopInfo: options.includeShopInfo,
			includeVendorInfo: options.includeVendorInfo,
			excludeCostPrice: options.excludeCostPrice
		})),
		total,
		limit,
		offset
	};
}
async function fetchProductWithRelations(product, options = {}) {
	return normalizeProduct(product, await batchFetchProductRelations([product.id], [product], {
		includeShopInfo: options.includeShopInfo,
		includeVendorInfo: options.includeVendorInfo
	}), options);
}
/**
* Calculate discount percentage from prices
*/
function calculateDiscount(selling, regular) {
	if (regular <= selling || regular === 0) return 0;
	return Math.round((regular - selling) / regular * 100);
}
/**
* Check if product is "new" (created within last 30 days)
*/
function isNewProduct(createdAt) {
	const createdDate = new Date(createdAt);
	const thirtyDaysAgo = /* @__PURE__ */ new Date();
	thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
	return createdDate > thirtyDaysAgo;
}
/**
* Transform API StoreProduct to DisplayProduct for UI components
*/
function toDisplayProduct(product) {
	const sellingPrice = parseFloat(product.sellingPrice) || 0;
	const regularPrice = parseFloat(product.regularPrice || product.sellingPrice) || sellingPrice;
	return {
		id: product.id,
		slug: product.slug,
		name: product.name,
		description: product.description || "",
		shortDescription: product.shortDescription,
		category: {
			id: product.categoryId || "",
			name: product.categoryName || "Uncategorized",
			slug: (product.categoryName || "uncategorized").toLowerCase().replace(/\s+/g, "-")
		},
		price: {
			current: sellingPrice,
			original: regularPrice,
			currency: "$",
			discountPercentage: calculateDiscount(sellingPrice, regularPrice)
		},
		images: product.images?.map((img) => ({
			id: img.id,
			url: img.url,
			alt: img.alt || product.name
		})) || [{
			id: "placeholder",
			url: `https://placehold.co/600x600?text=${encodeURIComponent(product.name)}`,
			alt: product.name
		}],
		rating: {
			average: parseFloat(product.averageRating) || 0,
			count: product.reviewCount || 0
		},
		stock: {
			inStock: (product.stock || 0) > 0,
			quantity: product.stock || 0
		},
		store: {
			id: product.shopId,
			name: product.shopName || "Shop",
			slug: product.shopSlug || "shop"
		},
		brand: product.brandName || "",
		colors: [],
		sizes: [],
		isNew: isNewProduct(product.createdAt),
		isFeatured: product.isFeatured || false,
		createdAt: product.createdAt
	};
}
/**
* Transform array of API products to display products
*/
function toDisplayProducts(products) {
	return products.map(toDisplayProduct);
}
//#endregion
export { fetchProductWithRelations as n, toDisplayProducts as r, executeProductQuery as t };
