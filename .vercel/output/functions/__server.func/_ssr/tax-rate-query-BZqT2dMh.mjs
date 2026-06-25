import { At as number, Ft as boolean, Gt as string, Ht as object, Mt as _enum } from "../_libs/@better-auth/core+[...].mjs";
import { a as isActiveField, c as paginationFields, f as sortDirectionEnum, i as createToggleActiveSchema, l as searchFields, n as createGetByIdSchema, o as optionalShopIdField, s as optionalVendorIdField, t as createDeleteSchema, u as shopScopeFields } from "./base-query-CXHTKIVK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tax-rate-query-BZqT2dMh.js
/**
* Shared Tax Rate Query Validators
*
* Composable z schemas for tax rate queries.
* Uses base-query for common schemas to ensure DRY compliance.
*/
var taxRateSortByEnum = _enum([
	"name",
	"rate",
	"priority",
	"createdAt"
]);
var taxRateFilterFields = {
	...isActiveField,
	country: string().optional()
};
var sortFields = {
	sortBy: taxRateSortByEnum.optional().default("priority"),
	sortDirection: sortDirectionEnum.optional().default("asc")
};
var getTaxRateByIdSchema = createGetByIdSchema("TaxRate");
/**
* Admin Query Schema
* - Admin auth required
* - Full filter access
* - Can see all tax rates across all shops
*/
var adminTaxRatesQuerySchema = object({
	...paginationFields,
	limit: paginationFields.limit.default(10),
	...sortFields,
	...searchFields,
	...taxRateFilterFields,
	...optionalShopIdField,
	...optionalVendorIdField
});
/**
* Vendor Query Schema
* - Vendor auth required
* - Shop ID is required (scoped to their shop)
*/
var vendorTaxRatesQuerySchema = object({
	...shopScopeFields,
	...paginationFields,
	limit: paginationFields.limit.default(10),
	...sortFields,
	...searchFields,
	...taxRateFilterFields
});
var toggleTaxRateActiveSchema = createToggleActiveSchema("TaxRate");
var deleteTaxRateSchema = createDeleteSchema("TaxRate");
/**
* Schema for creating a new tax rate (Vendor)
*/
var createTaxRateSchema = object({
	shopId: string().min(1, "Shop ID is required"),
	name: string().min(2, "Tax rate name must be at least 2 characters").max(100, "Tax rate name must be at most 100 characters"),
	rate: number({ message: "Tax rate is required" }).min(.01, "Tax rate must be between 0.01 and 100").max(100, "Tax rate must be between 0.01 and 100"),
	country: string().min(2, "Country code is required").max(2, "Country code must be 2 characters"),
	state: string().max(50, "State must be at most 50 characters").optional().nullable(),
	zip: string().max(20, "ZIP code must be at most 20 characters").optional().nullable(),
	priority: number({ message: "Priority is required" }).min(1, "Priority must be at least 1"),
	isActive: boolean().optional().default(true),
	isCompound: boolean().optional().default(false)
});
/**
* Schema for updating an existing tax rate (Vendor)
*/
var updateTaxRateSchema = object({
	id: string().min(1, "Tax rate ID is required"),
	shopId: string().min(1, "Shop ID is required"),
	name: string().min(2, "Tax rate name must be at least 2 characters").max(100, "Tax rate name must be at most 100 characters").optional(),
	rate: number().min(.01, "Tax rate must be between 0.01 and 100").max(100, "Tax rate must be between 0.01 and 100").optional(),
	country: string().min(2, "Country code is required").max(2, "Country code must be 2 characters").optional(),
	state: string().max(50, "State must be at most 50 characters").optional().nullable(),
	zip: string().max(20, "ZIP code must be at most 20 characters").optional().nullable(),
	priority: number().min(1, "Priority must be at least 1").optional(),
	isActive: boolean().optional(),
	isCompound: boolean().optional()
});
//#endregion
export { toggleTaxRateActiveSchema as a, getTaxRateByIdSchema as i, createTaxRateSchema as n, updateTaxRateSchema as o, deleteTaxRateSchema as r, vendorTaxRatesQuerySchema as s, adminTaxRatesQuerySchema as t };
