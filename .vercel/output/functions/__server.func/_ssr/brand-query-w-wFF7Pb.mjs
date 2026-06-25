import { At as number$1, Ft as boolean, Gt as string, Ht as object, Mt as _enum, Vt as number } from "../_libs/@better-auth/core+[...].mjs";
import { a as isActiveField, c as paginationFields, d as shopSlugFields, f as sortDirectionEnum, i as createToggleActiveSchema, l as searchFields, n as createGetByIdSchema, o as optionalShopIdField, p as storeIsActiveField, r as createGetBySlugSchema, s as optionalVendorIdField, t as createDeleteSchema, u as shopScopeFields } from "./base-query-CXHTKIVK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brand-query-w-wFF7Pb.js
/**
* Shared Brand Query Validators
*
* Composable Zod schemas for brand queries.
* Uses base-query for common schemas to ensure DRY compliance.
*/
var brandSortByEnum = _enum([
	"name",
	"createdAt",
	"sortOrder",
	"productCount"
]);
var brandFilterFields = { ...isActiveField };
var sortFields = {
	sortBy: brandSortByEnum.optional().default("sortOrder"),
	sortDirection: sortDirectionEnum.optional().default("asc")
};
var getBrandByIdSchema = createGetByIdSchema("Brand");
var getBrandBySlugSchema = createGetBySlugSchema("Brand");
/**
* Store Front Query Schema
* - Public access (no auth)
* - Limited filters (customer-facing only)
* - Only active brands
*/
var storeBrandsQuerySchema = object({
	...paginationFields,
	limit: paginationFields.limit.default(50),
	...sortFields,
	...searchFields,
	...brandFilterFields,
	...storeIsActiveField,
	...shopSlugFields,
	...optionalShopIdField
});
/**
* Admin Query Schema
* - Admin auth required
* - Full filter access
* - Can see all brands across all shops
*/
var adminBrandsQuerySchema = object({
	...paginationFields,
	limit: paginationFields.limit.default(10),
	...sortFields,
	...searchFields,
	...brandFilterFields,
	...optionalShopIdField,
	...optionalVendorIdField
});
/**
* Vendor Query Schema
* - Vendor auth required
* - Shop ID is required (scoped to their shop)
*/
var vendorBrandsQuerySchema = object({
	...shopScopeFields,
	...paginationFields,
	limit: paginationFields.limit.default(10),
	...sortFields,
	...searchFields,
	...brandFilterFields
});
var toggleBrandActiveSchema = createToggleActiveSchema("Brand");
var deleteBrandSchema = createDeleteSchema("Brand");
object({
	id: string(),
	shopId: string(),
	name: string(),
	slug: string(),
	description: string().optional().nullable(),
	logo: string().optional().nullable(),
	website: string().optional().nullable(),
	sortOrder: number().default(0),
	isActive: boolean().default(true),
	productCount: number().default(0),
	createdAt: string(),
	updatedAt: string()
});
/**
* Schema for creating a new brand
*/
var createBrandSchema = object({
	shopId: string().min(1, "Shop ID is required"),
	name: string().min(2, "Brand name must be at least 2 characters").max(100, "Brand name must be at most 100 characters"),
	slug: string().min(2, "Slug must be at least 2 characters").max(100, "Slug must be at most 100 characters").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only").optional(),
	description: string().max(500, "Description must be at most 500 characters").optional(),
	logo: string().optional(),
	website: string().optional(),
	sortOrder: number$1().min(0).optional().default(0),
	isActive: boolean().optional().default(true)
});
/**
* Schema for updating an existing brand
*/
var updateBrandSchema = object({
	id: string().min(1, "Brand ID is required"),
	shopId: string().min(1, "Shop ID is required"),
	name: string().min(2, "Brand name must be at least 2 characters").max(100, "Brand name must be at most 100 characters").optional(),
	slug: string().min(2, "Slug must be at least 2 characters").max(100, "Slug must be at most 100 characters").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase with hyphens only").optional(),
	description: string().max(500).optional().nullable(),
	logo: string().optional().nullable(),
	website: string().optional().nullable(),
	sortOrder: number$1().min(0).optional(),
	isActive: boolean().optional()
});
//#endregion
export { getBrandBySlugSchema as a, updateBrandSchema as c, getBrandByIdSchema as i, vendorBrandsQuerySchema as l, createBrandSchema as n, storeBrandsQuerySchema as o, deleteBrandSchema as r, toggleBrandActiveSchema as s, adminBrandsQuerySchema as t };
