import { a as and, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { d as productShippingMethods, h as products, l as productImages, p as productTags, s as productAttributes } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { n as fetchProductWithRelations, t as executeProductQuery } from "./products-query-helpers-YIHV58XJ.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { a as getProductByIdSchema, d as updateProductSchema, n as createProductSchema, p as vendorProductsQuerySchema, r as deleteProductSchema } from "./product-query-DTSuSPZY.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { t as generateSlug } from "./slug-Bd7zy7tX.mjs";
import { n as createSuccessResponse } from "./api-response-CYQsbkXz.mjs";
import { r as requireShopAccess } from "./vendors-BeGb8yN7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-b6QwIsf_.js
var getProducts_createServerFn_handler = createServerRpc({
	id: "98315c507bfec44dce41e598015c64bcaa8f9768027ab711d3fb136d8f13e40c",
	name: "getProducts",
	filename: "src/lib/functions/vendor/products.ts"
}, (opts) => getProducts.__executeServer(opts));
var getProducts = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(vendorProductsQuerySchema).handler(getProducts_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, limit, offset, search, status, productType, categoryId, brandId, tagId, attributeId, isFeatured, isActive, inStock, lowStock, minPrice, maxPrice, sortBy, sortDirection } = data;
	await requireShopAccess(userId, shopId);
	return executeProductQuery({
		baseConditions: [eq(products.shopId, shopId)],
		search,
		status,
		productType,
		categoryId,
		brandId,
		tagId,
		attributeId,
		isFeatured,
		isActive,
		inStock,
		lowStock,
		minPrice,
		maxPrice,
		limit,
		offset,
		sortBy,
		sortDirection,
		includeShopInfo: false,
		includeVendorInfo: false,
		excludeCostPrice: false
	});
});
var getProductById_createServerFn_handler = createServerRpc({
	id: "54d1a37b17d6aba826dea10efa3f6a99a128772a7f0fdd7e87ff5405a416b222",
	name: "getProductById",
	filename: "src/lib/functions/vendor/products.ts"
}, (opts) => getProductById.__executeServer(opts));
var getProductById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getProductByIdSchema.extend({ shopId: getProductByIdSchema.shape.id }).omit({ id: true }).extend({
	id: getProductByIdSchema.shape.id,
	shopId: getProductByIdSchema.shape.id
})).handler(getProductById_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	const [product] = await db.select().from(products).where(and(eq(products.id, id), eq(products.shopId, shopId)));
	if (!product) throw new Error("Product not found.");
	return { product: await fetchProductWithRelations(product, {
		includeShopInfo: false,
		includeVendorInfo: false,
		excludeCostPrice: false
	}) };
});
var createProduct_createServerFn_handler = createServerRpc({
	id: "36f7409d7cdd3490960a90dab8edf7cab13bdaeb0d6fced6cc1f679f0a5c6fc3",
	name: "createProduct",
	filename: "src/lib/functions/vendor/products.ts"
}, (opts) => createProduct.__executeServer(opts));
var createProduct = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createProductSchema).handler(createProduct_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, images, tagIds, attributeIds, shippingMethodIds, attributeValues, variationPrices, ...productData } = data;
	await requireShopAccess(userId, shopId);
	let slug = productData.slug;
	if (!slug) slug = generateSlug(productData.name);
	if (await db.query.products.findFirst({ where: and(eq(products.shopId, shopId), eq(products.slug, slug)) })) throw new Error("A product with this slug already exists in this shop. Please choose a different name or slug.");
	const [newProduct] = await db.insert(products).values({
		shopId,
		name: productData.name,
		slug,
		sku: productData.sku || null,
		description: productData.description || null,
		shortDescription: productData.shortDescription || null,
		sellingPrice: productData.sellingPrice,
		regularPrice: productData.regularPrice || null,
		costPrice: productData.costPrice || null,
		stock: productData.stock ?? 0,
		lowStockThreshold: productData.lowStockThreshold ?? 5,
		trackInventory: productData.trackInventory ?? true,
		categoryId: productData.categoryId || null,
		brandId: productData.brandId || null,
		taxId: productData.taxId || null,
		status: productData.status || "draft",
		productType: productData.productType || "simple",
		isFeatured: productData.isFeatured ?? false,
		isActive: productData.isActive ?? true,
		metaTitle: productData.metaTitle || null,
		metaDescription: productData.metaDescription || null,
		variationPrices: variationPrices ? JSON.stringify(variationPrices) : null
	}).returning();
	const insertPromises = [];
	if (images && images.length > 0) {
		const imageRecords = images.map((img, index) => ({
			productId: newProduct.id,
			url: img.url,
			alt: img.alt || null,
			sortOrder: img.sortOrder ?? index,
			isPrimary: img.isPrimary ?? index === 0
		}));
		insertPromises.push(db.insert(productImages).values(imageRecords));
	}
	if (tagIds && tagIds.length > 0) {
		const tagRecords = tagIds.map((tagId) => ({
			productId: newProduct.id,
			tagId
		}));
		insertPromises.push(db.insert(productTags).values(tagRecords));
	}
	if (attributeIds && attributeIds.length > 0) {
		const attrRecords = attributeIds.map((attrId) => ({
			productId: newProduct.id,
			attributeId: attrId,
			value: attributeValues?.[attrId] ? JSON.stringify(attributeValues[attrId]) : null
		}));
		insertPromises.push(db.insert(productAttributes).values(attrRecords));
	}
	if (shippingMethodIds && shippingMethodIds.length > 0) {
		const shippingRecords = shippingMethodIds.map((methodId) => ({
			productId: newProduct.id,
			shippingMethodId: methodId
		}));
		insertPromises.push(db.insert(productShippingMethods).values(shippingRecords));
	}
	await Promise.all(insertPromises);
	const normalizedProduct = await fetchProductWithRelations(newProduct, { excludeCostPrice: false });
	return {
		...createSuccessResponse("Product created successfully"),
		product: normalizedProduct
	};
});
var updateProduct_createServerFn_handler = createServerRpc({
	id: "269ca78e3e645938008c5fc1dd78f5f12a151d360101d7c843caefe33ea24890",
	name: "updateProduct",
	filename: "src/lib/functions/vendor/products.ts"
}, (opts) => updateProduct.__executeServer(opts));
var updateProduct = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateProductSchema).handler(updateProduct_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId, images, tagIds, attributeIds, shippingMethodIds, attributeValues, variationPrices, ...updateData } = data;
	await requireShopAccess(userId, shopId);
	const [existingProduct] = await db.select().from(products).where(and(eq(products.id, id), eq(products.shopId, shopId)));
	if (!existingProduct) throw new Error("Product not found.");
	if (updateData.slug && updateData.slug !== existingProduct.slug) {
		if (await db.query.products.findFirst({ where: and(eq(products.shopId, shopId), eq(products.slug, updateData.slug)) })) throw new Error("A product with this slug already exists in this shop.");
	}
	const updateValues = {};
	if (updateData.name !== void 0) updateValues.name = updateData.name;
	if (updateData.slug !== void 0) updateValues.slug = updateData.slug;
	if (updateData.sku !== void 0) updateValues.sku = updateData.sku;
	if (updateData.description !== void 0) updateValues.description = updateData.description;
	if (updateData.shortDescription !== void 0) updateValues.shortDescription = updateData.shortDescription;
	if (updateData.sellingPrice !== void 0) updateValues.sellingPrice = updateData.sellingPrice;
	if (updateData.regularPrice !== void 0) updateValues.regularPrice = updateData.regularPrice;
	if (updateData.costPrice !== void 0) updateValues.costPrice = updateData.costPrice;
	if (updateData.stock !== void 0) updateValues.stock = updateData.stock;
	if (updateData.lowStockThreshold !== void 0) updateValues.lowStockThreshold = updateData.lowStockThreshold;
	if (updateData.trackInventory !== void 0) updateValues.trackInventory = updateData.trackInventory;
	if (updateData.categoryId !== void 0) updateValues.categoryId = updateData.categoryId;
	if (updateData.brandId !== void 0) updateValues.brandId = updateData.brandId;
	if (updateData.taxId !== void 0) updateValues.taxId = updateData.taxId;
	if (updateData.status !== void 0) updateValues.status = updateData.status;
	if (updateData.productType !== void 0) updateValues.productType = updateData.productType;
	if (updateData.isFeatured !== void 0) updateValues.isFeatured = updateData.isFeatured;
	if (updateData.isActive !== void 0) updateValues.isActive = updateData.isActive;
	if (updateData.metaTitle !== void 0) updateValues.metaTitle = updateData.metaTitle;
	if (updateData.metaDescription !== void 0) updateValues.metaDescription = updateData.metaDescription;
	if (variationPrices !== void 0) updateValues.variationPrices = variationPrices ? JSON.stringify(variationPrices) : null;
	const updatePromises = [];
	if (Object.keys(updateValues).length > 0) updatePromises.push(db.update(products).set(updateValues).where(eq(products.id, id)));
	if (images !== void 0) updatePromises.push(db.delete(productImages).where(eq(productImages.productId, id)));
	if (tagIds !== void 0) updatePromises.push(db.delete(productTags).where(eq(productTags.productId, id)));
	if (attributeIds !== void 0) updatePromises.push(db.delete(productAttributes).where(eq(productAttributes.productId, id)));
	if (shippingMethodIds !== void 0) updatePromises.push(db.delete(productShippingMethods).where(eq(productShippingMethods.productId, id)));
	await Promise.all(updatePromises);
	const insertPromises = [];
	if (images !== void 0 && images.length > 0) {
		const imageRecords = images.map((img, index) => ({
			productId: id,
			url: img.url,
			alt: img.alt || null,
			sortOrder: img.sortOrder ?? index,
			isPrimary: img.isPrimary ?? index === 0
		}));
		insertPromises.push(db.insert(productImages).values(imageRecords));
	}
	if (tagIds !== void 0 && tagIds.length > 0) {
		const tagRecords = tagIds.map((tagId) => ({
			productId: id,
			tagId
		}));
		insertPromises.push(db.insert(productTags).values(tagRecords));
	}
	if (attributeIds !== void 0 && attributeIds.length > 0) {
		const attrRecords = attributeIds.map((attrId) => ({
			productId: id,
			attributeId: attrId,
			value: attributeValues?.[attrId] ? JSON.stringify(attributeValues[attrId]) : null
		}));
		insertPromises.push(db.insert(productAttributes).values(attrRecords));
	}
	if (shippingMethodIds !== void 0 && shippingMethodIds.length > 0) {
		const shippingRecords = shippingMethodIds.map((methodId) => ({
			productId: id,
			shippingMethodId: methodId
		}));
		insertPromises.push(db.insert(productShippingMethods).values(shippingRecords));
	}
	await Promise.all(insertPromises);
	const [updatedProduct] = await db.select().from(products).where(eq(products.id, id));
	const normalizedProduct = await fetchProductWithRelations(updatedProduct, { excludeCostPrice: false });
	return {
		...createSuccessResponse("Product updated successfully"),
		product: normalizedProduct
	};
});
var deleteProduct_createServerFn_handler = createServerRpc({
	id: "41f4a38332ffa8c374057a8fb0c6b66f5d29ea1df7f766d4b97f00eb7f1ec198",
	name: "deleteProduct",
	filename: "src/lib/functions/vendor/products.ts"
}, (opts) => deleteProduct.__executeServer(opts));
var deleteProduct = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(deleteProductSchema.extend({ shopId: deleteProductSchema.shape.id })).handler(deleteProduct_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	const [existingProduct] = await db.select().from(products).where(and(eq(products.id, id), eq(products.shopId, shopId)));
	if (!existingProduct) throw new Error("Product not found.");
	await db.delete(products).where(eq(products.id, id));
	return createSuccessResponse("Product deleted successfully");
});
//#endregion
export { createProduct_createServerFn_handler, deleteProduct_createServerFn_handler, getProductById_createServerFn_handler, getProducts_createServerFn_handler, updateProduct_createServerFn_handler };
