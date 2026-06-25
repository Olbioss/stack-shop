import { $t as boolean$1, Jt as number, Kt as boolean, Xt as _enum, ln as string, on as object, rn as literal } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/base-query-CXHTKIVK.js
/**
* Base Query Validators - Single Source of Truth
*
* This module contains all shared, reusable z schemas and factory functions
* used across entity-specific query validators. Import from here to ensure
* DRY compliance and consistent validation across the application.
*/
/**
* Sort direction enum - used in all list queries
*/
var sortDirectionEnum = _enum(["asc", "desc"]);
/**
* Pagination fields - used in all list queries
* - limit: 1-100, optional
* - offset: 0+, defaults to 0
*/
var paginationFields = {
	limit: number().min(1).max(100).optional(),
	offset: number().min(0).optional().default(0)
};
/**
* Search field - used for full-text search
*/
var searchFields = { search: string().optional() };
/**
* Shop scope fields - for vendor context (shopId required)
*/
var shopScopeFields = { shopId: string().min(1, "Shop ID is required") };
/**
* Optional shop ID field - for admin/public contexts
*/
var optionalShopIdField = { shopId: string().optional() };
/**
* Optional vendor ID field - for admin context
*/
var optionalVendorIdField = { vendorId: string().optional() };
/**
* Shop slug filter - for public store pages
*/
var shopSlugFields = { shopSlug: string().optional() };
/**
* isActive filter field - used across most entities
*/
var isActiveField = { isActive: boolean().optional() };
/**
* Store-only isActive field - always defaults to true
*/
var storeIsActiveField = { isActive: literal(true).optional().default(true) };
/**
* Creates a "get by ID" schema for any entity
*/
var createGetByIdSchema = (entityName) => object({ id: string().min(1, `${entityName} ID is required`) });
/**
* Creates a "get by slug" schema for any entity
*/
var createGetBySlugSchema = (entityName) => object({
	slug: string().min(1, `${entityName} slug is required`),
	shopSlug: string().optional()
});
/**
* Creates a "toggle active" schema for any entity
*/
var createToggleActiveSchema = (entityName) => object({
	id: string().min(1, `${entityName} ID is required`),
	isActive: boolean$1()
});
/**
* Creates a "delete" schema for any entity
*/
var createDeleteSchema = (entityName) => object({ id: string().min(1, `${entityName} ID is required`) });
//#endregion
export { isActiveField as a, paginationFields as c, shopSlugFields as d, sortDirectionEnum as f, createToggleActiveSchema as i, searchFields as l, createGetByIdSchema as n, optionalShopIdField as o, storeIsActiveField as p, createGetBySlugSchema as r, optionalVendorIdField as s, createDeleteSchema as t, shopScopeFields as u };
