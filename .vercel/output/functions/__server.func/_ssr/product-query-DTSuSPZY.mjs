import { $t as boolean$1, Jt as number, Kt as boolean, Qt as array, Xt as _enum, an as number$1, cn as record, ln as string, on as object } from "../_libs/@better-auth/core+[...].mjs";
import { a as isActiveField, c as paginationFields, d as shopSlugFields, f as sortDirectionEnum, i as createToggleActiveSchema, l as searchFields, n as createGetByIdSchema, o as optionalShopIdField, r as createGetBySlugSchema, s as optionalVendorIdField, t as createDeleteSchema, u as shopScopeFields } from "./base-query-CXHTKIVK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-query-DTSuSPZY.js
/**
* Shared Product Query Validators
*
* Composable z schemas for product queries.
* Uses base-query for common schemas to ensure DRY compliance.
*/
var productStatusEnum = _enum([
	"draft",
	"active",
	"archived"
]);
var productTypeEnum = _enum(["simple", "variable"]);
var productSortByEnum = _enum([
	"name",
	"sellingPrice",
	"stock",
	"createdAt",
	"averageRating",
	"reviewCount"
]);
({ ...isActiveField }), productStatusEnum.optional(), productTypeEnum.optional(), string().optional(), string().optional(), number().min(0).optional(), number().min(0).optional(), boolean().optional(), boolean().optional();
/**
* Common filter fields - used across all contexts
*/
var productBaseFilterFields = {
	categoryId: string().optional(),
	brandId: string().optional(),
	tagId: string().optional(),
	productType: productTypeEnum.optional(),
	minPrice: number().optional(),
	maxPrice: number().optional()
};
/**
* Stock filter fields
*/
var stockFilterFields = {
	inStock: boolean().optional(),
	lowStock: boolean().optional()
};
/**
* Rating filter fields
*/
var ratingFilterFields = { minRating: number().min(1).max(5).optional() };
/**
* Status filter fields
*/
var statusFilterFields = {
	status: productStatusEnum.optional(),
	isFeatured: boolean().optional(),
	isActive: boolean().optional()
};
/**
* Attribute filter field
*/
var attributeFilterFields = { attributeId: string().optional() };
var sortFields = {
	sortBy: productSortByEnum.optional().default("createdAt"),
	sortDirection: sortDirectionEnum.optional().default("desc")
};
var storeSortFields = {
	sortBy: _enum([
		"name",
		"price",
		"createdAt",
		"updatedAt",
		"averageRating"
	]).optional().default("createdAt"),
	sortDirection: sortDirectionEnum.optional().default("desc")
};
var getProductByIdSchema = createGetByIdSchema("Product");
var getProductBySlugSchema = createGetBySlugSchema("Product");
/**
* Store Front Query Schema
* - Public access (no auth)
* - Limited filters (customer-facing only)
* - Only active products
*/
var storeProductsQuerySchema = object({
	...paginationFields,
	limit: paginationFields.limit.default(12),
	...storeSortFields,
	...searchFields,
	...productBaseFilterFields,
	isFeatured: statusFilterFields.isFeatured,
	inStock: stockFilterFields.inStock,
	...ratingFilterFields,
	...shopSlugFields,
	...optionalShopIdField
});
/**
* Admin Query Schema
* - Admin auth required
* - Full filter access
* - Can see all products across all shops
*/
var adminProductsQuerySchema = object({
	...paginationFields,
	limit: paginationFields.limit.default(10),
	...sortFields,
	...searchFields,
	...productBaseFilterFields,
	...stockFilterFields,
	...statusFilterFields,
	...attributeFilterFields,
	...optionalShopIdField,
	...optionalVendorIdField
});
/**
* Vendor Query Schema
* - Vendor auth required
* - Shop ID is required (scoped to their shop)
*/
var vendorProductsQuerySchema = object({
	...shopScopeFields,
	...paginationFields,
	limit: paginationFields.limit.default(10),
	...sortFields,
	...searchFields,
	...productBaseFilterFields,
	...stockFilterFields,
	...statusFilterFields,
	...attributeFilterFields
});
createToggleActiveSchema("Product");
var deleteProductSchema = createDeleteSchema("Product");
object({
	id: string(),
	productId: string(),
	url: string(),
	alt: string().optional().nullable(),
	sortOrder: number$1().default(0),
	isPrimary: boolean$1().default(false),
	createdAt: string()
});
/**
* Product Image Input Schema (for create/update operations)
* - id is optional since it's generated server-side
* - productId is optional since it's assigned server-side
* - createdAt is optional since it's set server-side
*/
var productImageInputSchema = object({
	id: string().optional(),
	productId: string().optional(),
	url: string(),
	alt: string().optional().nullable(),
	sortOrder: number$1().default(0),
	isPrimary: boolean$1().default(false),
	createdAt: string().optional()
});
object({
	productId: string(),
	tagId: string()
});
object({
	productId: string(),
	attributeId: string(),
	value: string().optional().nullable()
});
object({
	productId: string(),
	shippingMethodId: string()
});
/**
* Variation Price Schema
* { [valueId]: { regularPrice?, sellingPrice?, image? } }
*/
var variationPriceSchema = object({
	regularPrice: number$1().optional(),
	sellingPrice: number$1().optional(),
	image: string().optional()
});
object({
	id: string(),
	shopId: string(),
	name: string(),
	slug: string(),
	sku: string().optional().nullable(),
	description: string().optional().nullable(),
	shortDescription: string().optional().nullable(),
	sellingPrice: string(),
	regularPrice: string().optional().nullable(),
	costPrice: string().optional().nullable(),
	stock: number$1().default(0),
	lowStockThreshold: number$1().default(5),
	trackInventory: boolean$1().default(true),
	categoryId: string().optional().nullable(),
	brandId: string().optional().nullable(),
	taxId: string().optional().nullable(),
	status: productStatusEnum.default("draft"),
	productType: productTypeEnum.default("simple"),
	isFeatured: boolean$1().default(false),
	isActive: boolean$1().default(true),
	metaTitle: string().optional().nullable(),
	metaDescription: string().optional().nullable(),
	variationPrices: record(string(), variationPriceSchema).optional().nullable(),
	averageRating: string().default("0"),
	reviewCount: number$1().default(0),
	createdAt: string(),
	updatedAt: string()
});
/**
* Required product identification fields (for create)
*/
var productRequiredIdFields = { shopId: string().min(1, "Shop ID is required") };
/**
* Optional product identification fields (for update)
*/
var productOptionalIdFields = {
	id: string().min(1, "Product ID is required"),
	shopId: string().min(1, "Shop ID is required")
};
/**
* Product name field with validation
*/
var productNameField = string().min(2, "Product name must be at least 2 characters").max(200, "Product name must be at most 200 characters");
/**
* Product slug field with validation
*/
var productSlugField = string().min(2, "Slug must be at least 2 characters").max(200, "Slug must be at most 200 characters").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only");
/**
* Product SKU field
*/
var productSkuField = string().max(100);
/**
* Product description fields
*/
var productDescriptionFields = {
	description: string(),
	shortDescription: string().max(500)
};
/**
* Product pricing fields (for create - required sellingPrice)
*/
var productPricingFieldsCreate = {
	sellingPrice: string().min(1, "Selling price is required"),
	regularPrice: string().optional(),
	costPrice: string().optional()
};
/**
* Product pricing fields (for update - all optional)
*/
var productPricingFieldsUpdate = {
	sellingPrice: string().optional(),
	regularPrice: string().optional().nullable(),
	costPrice: string().optional().nullable()
};
/**
* Product inventory fields (for create - with defaults)
*/
var productInventoryFieldsCreate = {
	stock: number().min(0).optional().default(0),
	lowStockThreshold: number().min(0).optional().default(5),
	trackInventory: boolean$1().optional().default(true)
};
/**
* Product inventory fields (for update - no defaults)
*/
var productInventoryFieldsUpdate = {
	stock: number().min(0).optional(),
	lowStockThreshold: number().min(0).optional(),
	trackInventory: boolean$1().optional()
};
/**
* Product relation fields (for create - optional)
*/
var productRelationFieldsCreate = {
	categoryId: string().optional(),
	brandId: string().optional(),
	taxId: string().optional()
};
/**
* Product relation fields (for update - optional nullable)
*/
var productRelationFieldsUpdate = {
	categoryId: string().optional().nullable(),
	brandId: string().optional().nullable(),
	taxId: string().optional().nullable()
};
/**
* Product status and type fields (for create - with defaults)
*/
var productStatusFieldsCreate = {
	status: productStatusEnum.optional().default("draft"),
	productType: productTypeEnum.optional().default("simple")
};
/**
* Product status and type fields (for update - no defaults)
*/
var productStatusFieldsUpdate = {
	status: productStatusEnum.optional(),
	productType: productTypeEnum.optional()
};
/**
* Product flag fields (for create - with defaults)
*/
var productFlagFieldsCreate = {
	isFeatured: boolean$1().optional().default(false),
	isActive: boolean$1().optional().default(true)
};
/**
* Product flag fields (for update - no defaults)
*/
var productFlagFieldsUpdate = {
	isFeatured: boolean$1().optional(),
	isActive: boolean$1().optional()
};
/**
* Product SEO fields (for create - optional)
*/
var productSeoFieldsCreate = {
	metaTitle: string().max(100).optional(),
	metaDescription: string().max(300).optional()
};
/**
* Product SEO fields (for update - optional nullable)
*/
var productSeoFieldsUpdate = {
	metaTitle: string().max(100).optional().nullable(),
	metaDescription: string().max(300).optional().nullable()
};
/**
* Variation price entry schema (reusable)
*/
var variationPriceEntrySchema = object({
	regularPrice: string().optional(),
	sellingPrice: string().optional(),
	image: string().optional()
});
/**
* Product relation arrays (for create - with defaults)
* Uses productImageInputSchema since productId is assigned server-side
*/
var productRelationArraysCreate = {
	images: array(productImageInputSchema).optional().default([]),
	tagIds: array(string()).optional().default([]),
	attributeIds: array(string()).optional().default([]),
	shippingMethodIds: array(string()).optional().default([]),
	attributeValues: record(string(), array(string())).optional().default({}),
	variationPrices: record(string(), variationPriceEntrySchema).optional().default({})
};
/**
* Product relation arrays (for update - no defaults)
* Uses productImageInputSchema since productId is assigned server-side
*/
var productRelationArraysUpdate = {
	images: array(productImageInputSchema).optional(),
	tagIds: array(string()).optional(),
	attributeIds: array(string()).optional(),
	shippingMethodIds: array(string()).optional(),
	attributeValues: record(string(), array(string())).optional(),
	variationPrices: record(string(), variationPriceEntrySchema).optional()
};
/**
* Schema for creating a new product (Vendor)
*/
var createProductSchema = object({
	...productRequiredIdFields,
	name: productNameField,
	slug: productSlugField.optional(),
	sku: productSkuField.optional(),
	description: string().optional(),
	shortDescription: string().max(500).optional(),
	...productPricingFieldsCreate,
	...productInventoryFieldsCreate,
	...productRelationFieldsCreate,
	...productStatusFieldsCreate,
	...productFlagFieldsCreate,
	...productSeoFieldsCreate,
	...productRelationArraysCreate
});
var updateProductStatusSchema = object({
	id: string().min(1, "Product ID is required"),
	status: productStatusEnum
});
var toggleProductFeaturedSchema = object({
	id: string().min(1, "Product ID is required"),
	isFeatured: boolean$1()
});
/**
* Schema for product form values (UI-specific)
*/
var productFormSchema = object({
	name: productNameField,
	slug: productSlugField.optional(),
	sku: productSkuField.optional(),
	description: string().optional(),
	shortDescription: string().max(500).optional(),
	...productPricingFieldsCreate,
	...productInventoryFieldsCreate,
	...productRelationFieldsCreate,
	...productStatusFieldsCreate,
	...productFlagFieldsCreate,
	...productSeoFieldsCreate,
	tagIds: array(string()).optional().default([]),
	attributeIds: array(string()).optional().default([]),
	shippingMethodIds: array(string()).optional().default([]),
	attributeValues: record(string(), array(string())).optional().default({}),
	variationPrices: record(string(), object({
		regularPrice: string().optional(),
		sellingPrice: string().optional(),
		image: string().optional()
	})).optional().default({}),
	thumbnailImage: string().nullable().optional(),
	galleryImages: array(string()).optional().default([])
});
/**
* Schema for updating an existing product (Vendor)
*/
var updateProductSchema = object({
	...productOptionalIdFields,
	name: productNameField.optional(),
	slug: productSlugField.optional(),
	sku: productSkuField.optional().nullable(),
	description: productDescriptionFields.description.optional().nullable(),
	shortDescription: productDescriptionFields.shortDescription.optional().nullable(),
	...productPricingFieldsUpdate,
	...productInventoryFieldsUpdate,
	...productRelationFieldsUpdate,
	...productStatusFieldsUpdate,
	...productFlagFieldsUpdate,
	...productSeoFieldsUpdate,
	...productRelationArraysUpdate
});
var getFeaturedProductsSchema = object({ limit: number().min(1).max(20).optional().default(8) });
var getRelatedProductsSchema = object({
	productId: string().min(1, "Product ID is required"),
	limit: number().min(1).max(10).optional().default(4)
});
//#endregion
export { getProductByIdSchema as a, productFormSchema as c, updateProductSchema as d, updateProductStatusSchema as f, getFeaturedProductsSchema as i, storeProductsQuerySchema as l, createProductSchema as n, getProductBySlugSchema as o, vendorProductsQuerySchema as p, deleteProductSchema as r, getRelatedProductsSchema as s, adminProductsQuerySchema as t, toggleProductFeaturedSchema as u };
