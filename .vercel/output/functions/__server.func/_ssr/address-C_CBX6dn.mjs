import { $t as boolean, Xt as _enum, ln as string, on as object } from "../_libs/@better-auth/core+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/address-C_CBX6dn.js
/**
* Address Validators
*
* Zod schemas for validating customer address data.
*/
/**
* Address type enum
*/
var addressTypeSchema = _enum(["billing", "shipping"]);
/**
* Create Address Schema
*/
var createAddressSchema = object({
	type: addressTypeSchema.default("shipping"),
	title: string().min(1, "Title is required"),
	firstName: string().optional(),
	lastName: string().optional(),
	phone: string().optional(),
	street: string().min(1, "Street address is required"),
	city: string().min(1, "City is required"),
	state: string().min(1, "State is required"),
	zip: string().min(1, "ZIP code is required"),
	country: string().min(1, "Country is required"),
	isDefault: boolean().optional().default(false)
});
/**
* Update Address Schema
*/
var updateAddressSchema = object({
	id: string().min(1, "Address ID is required"),
	type: addressTypeSchema.optional(),
	title: string().min(1, "Title is required").optional(),
	firstName: string().optional(),
	lastName: string().optional(),
	phone: string().optional(),
	street: string().min(1, "Street address is required").optional(),
	city: string().min(1, "City is required").optional(),
	state: string().min(1, "State is required").optional(),
	zip: string().min(1, "ZIP code is required").optional(),
	country: string().min(1, "Country is required").optional(),
	isDefault: boolean().optional()
});
/**
* Delete Address Schema
*/
var deleteAddressSchema = object({ id: string().min(1, "Address ID is required") });
//#endregion
export { deleteAddressSchema as n, updateAddressSchema as r, createAddressSchema as t };
