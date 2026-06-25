import { $t as boolean$1, Jt as number$1, Kt as boolean, Qt as array, Xt as _enum, an as number, ln as string, on as object, qt as date } from "../_libs/@better-auth/core+[...].mjs";
import { a as isActiveField, c as paginationFields, d as shopSlugFields, f as sortDirectionEnum, i as createToggleActiveSchema, l as searchFields, n as createGetByIdSchema, o as optionalShopIdField, p as storeIsActiveField, s as optionalVendorIdField, t as createDeleteSchema, u as shopScopeFields } from "./base-query-CXHTKIVK.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coupon-query-CudBYs7G.js
/**
* Shared Coupon Query Validators
*
* Composable z schemas for coupon queries.
* Uses base-query for common schemas to ensure DRY compliance.
*/
var couponTypeEnum = _enum([
	"percentage",
	"fixed",
	"free_shipping"
]);
var couponStatusEnum = _enum([
	"active",
	"inactive",
	"expired",
	"scheduled"
]);
var couponApplicabilityEnum = _enum([
	"all",
	"specific_products",
	"specific_categories"
]);
var couponSortByEnum = _enum([
	"code",
	"discountAmount",
	"usageCount",
	"activeFrom",
	"activeTo",
	"createdAt"
]);
var couponFilterFields = {
	...isActiveField,
	type: couponTypeEnum.optional(),
	status: couponStatusEnum.optional(),
	applicableTo: couponApplicabilityEnum.optional(),
	isExpired: boolean().optional(),
	isScheduled: boolean().optional()
};
/**
* Date range filter fields
*/
var dateRangeFilterFields = {
	activeFrom: date().optional(),
	activeTo: date().optional()
};
var sortFields = {
	sortBy: couponSortByEnum.optional().default("createdAt"),
	sortDirection: sortDirectionEnum.optional().default("desc")
};
var getCouponByIdSchema = createGetByIdSchema("Coupon");
/**
* Schema for getting a coupon by code
*/
var getCouponByCodeSchema = object({
	code: string().min(1, "Coupon code is required"),
	shopId: string().min(1, "Shop ID is required"),
	shopSlug: string().optional()
});
/**
* Store Front Query Schema
* - Public access (no auth)
* - Limited filters (customer-facing only)
* - Only active coupons
*/
var storeCouponsQuerySchema = object({
	...paginationFields,
	limit: paginationFields.limit.default(20),
	...sortFields,
	...searchFields,
	...shopSlugFields,
	...optionalShopIdField,
	...storeIsActiveField
});
/**
* Admin Query Schema
* - Admin auth required
* - Full filter access
* - Can see all coupons across all shops
*/
var adminCouponsQuerySchema = object({
	...paginationFields,
	limit: paginationFields.limit.default(10),
	...sortFields,
	...searchFields,
	...couponFilterFields,
	...dateRangeFilterFields,
	...optionalShopIdField,
	...optionalVendorIdField
});
/**
* Vendor Query Schema
* - Vendor auth required
* - Shop ID is required (scoped to their shop)
*/
var vendorCouponsQuerySchema = object({
	...shopScopeFields,
	...paginationFields,
	limit: paginationFields.limit.default(10),
	...sortFields,
	...searchFields,
	...couponFilterFields,
	...dateRangeFilterFields
});
var toggleCouponActiveSchema = createToggleActiveSchema("Coupon");
var deleteCouponSchema = createDeleteSchema("Coupon");
object({
	couponId: string().min(1, "Coupon ID is required"),
	shopId: string().min(1, "Shop ID is required")
});
object({
	couponId: string().min(1, "Coupon ID is required"),
	shopId: string().min(1, "Shop ID is required"),
	productIds: array(string()).min(1, "At least one product is required")
});
object({
	couponId: string().min(1, "Coupon ID is required"),
	shopId: string().min(1, "Shop ID is required"),
	categoryIds: array(string()).min(1, "At least one category is required")
});
object({
	couponId: string(),
	productId: string()
});
object({
	couponId: string(),
	categoryId: string()
});
object({
	id: string(),
	shopId: string(),
	code: string(),
	description: string().optional().nullable(),
	image: string().optional().nullable(),
	type: couponTypeEnum,
	discountAmount: string(),
	minimumCartAmount: string(),
	maximumDiscountAmount: string().optional().nullable(),
	activeFrom: string(),
	activeTo: string(),
	usageLimit: number().optional().nullable(),
	usageLimitPerUser: number().default(1),
	usageCount: number().default(0),
	isActive: boolean$1().default(true),
	status: couponStatusEnum,
	applicableTo: couponApplicabilityEnum,
	productIds: array(string()).default([]),
	categoryIds: array(string()).default([]),
	createdAt: string(),
	updatedAt: string()
});
/**
* Required coupon identification fields (for create)
*/
var couponRequiredIdFields = { shopId: string().min(1, "Shop ID is required") };
/**
* Optional coupon identification fields (for update)
*/
var couponOptionalIdFields = {
	id: string().min(1, "Coupon ID is required"),
	shopId: string().min(1, "Shop ID is required")
};
/**
* Coupon code field with validation
*/
var couponCodeField = string().min(2, "Coupon code must be at least 2 characters").max(50, "Coupon code must be at most 50 characters").regex(/^[A-Z0-9_-]+$/, "Coupon code must contain only uppercase letters, numbers, hyphens, and underscores");
/**
* Coupon description field
*/
var couponDescriptionField = string().max(500).optional();
/**
* Coupon type fields (for create - with defaults)
*/
var couponTypeFieldsCreate = {
	type: couponTypeEnum.optional().default("percentage"),
	applicableTo: couponApplicabilityEnum.optional().default("all")
};
/**
* Coupon type fields (for update - no defaults)
*/
var couponTypeFieldsUpdate = {
	type: couponTypeEnum.optional(),
	applicableTo: couponApplicabilityEnum.optional()
};
/**
* Coupon pricing fields (for create)
*/
var couponPricingFieldsCreate = {
	discountAmount: string().min(1, "Discount amount is required"),
	minimumCartAmount: string().optional().default("0"),
	maximumDiscountAmount: string().optional()
};
/**
* Coupon pricing fields (for update - all optional nullable)
*/
var couponPricingFieldsUpdate = {
	discountAmount: string().optional(),
	minimumCartAmount: string().optional().nullable(),
	maximumDiscountAmount: string().optional().nullable()
};
/**
* Coupon validity fields (for create)
*/
var couponValidityFieldsCreate = {
	activeFrom: string().min(1, "Start date is required"),
	activeTo: string().min(1, "End date is required")
};
/**
* Coupon validity fields (for update - optional)
*/
var couponValidityFieldsUpdate = {
	activeFrom: string().optional(),
	activeTo: string().optional()
};
/**
* Coupon usage limit fields (for create - with defaults)
*/
var couponUsageLimitFieldsCreate = {
	usageLimit: number$1().min(0).optional(),
	usageLimitPerUser: number$1().min(1).optional().default(1)
};
/**
* Coupon usage limit fields (for update - no defaults)
*/
var couponUsageLimitFieldsUpdate = {
	usageLimit: number$1().min(0).optional().nullable(),
	usageLimitPerUser: number$1().min(1).optional()
};
/**
* Coupon flag fields (for create - with defaults)
*/
var couponFlagFieldsCreate = { isActive: boolean$1().optional().default(true) };
/**
* Coupon flag fields (for update - no defaults)
*/
var couponFlagFieldsUpdate = { isActive: boolean$1().optional() };
/**
* Coupon relation arrays (for create)
*/
var couponRelationArraysCreate = {
	productIds: array(string()).optional().default([]),
	categoryIds: array(string()).optional().default([])
};
/**
* Coupon relation arrays (for update - no defaults)
*/
var couponRelationArraysUpdate = {
	productIds: array(string()).optional(),
	categoryIds: array(string()).optional()
};
/**
* Schema for creating a new coupon (Vendor)
*/
var createCouponSchema = object({
	...couponRequiredIdFields,
	code: couponCodeField,
	description: couponDescriptionField,
	image: string().optional(),
	...couponTypeFieldsCreate,
	...couponPricingFieldsCreate,
	...couponValidityFieldsCreate,
	...couponUsageLimitFieldsCreate,
	...couponFlagFieldsCreate,
	...couponRelationArraysCreate
}).refine((data) => {
	if (data.type !== "free_shipping" && parseFloat(data.discountAmount) <= 0) return false;
	return true;
}, {
	message: "Discount amount is required for percentage and fixed coupons",
	path: ["discountAmount"]
}).refine((data) => {
	if (data.type === "percentage" && parseFloat(data.discountAmount) > 100) return false;
	return true;
}, {
	message: "Percentage discount cannot exceed 100%",
	path: ["discountAmount"]
}).refine((data) => {
	return new Date(data.activeFrom) < new Date(data.activeTo);
}, {
	message: "Start date must be before end date",
	path: ["activeTo"]
}).refine((data) => {
	if (data.applicableTo === "specific_products") return data.productIds && data.productIds.length > 0;
	return true;
}, {
	message: "At least one product must be selected",
	path: ["productIds"]
}).refine((data) => {
	if (data.applicableTo === "specific_categories") return data.categoryIds && data.categoryIds.length > 0;
	return true;
}, {
	message: "At least one category must be selected",
	path: ["categoryIds"]
});
/**
* Schema for coupon form values (UI-specific)
*/
var couponFormSchema = object({
	code: couponCodeField,
	description: couponDescriptionField,
	image: string().optional(),
	type: couponTypeEnum.optional().default("percentage"),
	applicableTo: couponApplicabilityEnum.optional().default("all"),
	discountAmount: string().min(1, "Discount amount is required"),
	minimumCartAmount: string().optional().default("0"),
	maximumDiscountAmount: string().optional(),
	activeFrom: string().min(1, "Start date is required"),
	activeTo: string().min(1, "End date is required"),
	usageLimit: number$1().min(0).optional(),
	usageLimitPerUser: number$1().min(1).optional().default(1),
	isActive: boolean$1().optional().default(true),
	productIds: array(string()).optional().default([]),
	categoryIds: array(string()).optional().default([])
}).refine((data) => {
	if (data.type !== "free_shipping" && parseFloat(data.discountAmount) <= 0) return false;
	return true;
}, {
	message: "Discount amount is required for percentage and fixed coupons",
	path: ["discountAmount"]
}).refine((data) => {
	if (data.type === "percentage" && parseFloat(data.discountAmount) > 100) return false;
	return true;
}, {
	message: "Percentage discount cannot exceed 100%",
	path: ["discountAmount"]
}).refine((data) => {
	return new Date(data.activeFrom) < new Date(data.activeTo);
}, {
	message: "Start date must be before end date",
	path: ["activeTo"]
}).refine((data) => {
	if (data.applicableTo === "specific_products") return data.productIds && data.productIds.length > 0;
	return true;
}, {
	message: "At least one product must be selected",
	path: ["productIds"]
}).refine((data) => {
	if (data.applicableTo === "specific_categories") return data.categoryIds && data.categoryIds.length > 0;
	return true;
}, {
	message: "At least one category must be selected",
	path: ["categoryIds"]
});
/**
* Schema for updating an existing coupon (Vendor)
*/
var updateCouponSchema = object({
	...couponOptionalIdFields,
	code: couponCodeField.optional(),
	description: couponDescriptionField.optional().nullable(),
	image: string().optional().nullable(),
	...couponTypeFieldsUpdate,
	...couponPricingFieldsUpdate,
	...couponValidityFieldsUpdate,
	...couponUsageLimitFieldsUpdate,
	...couponFlagFieldsUpdate,
	...couponRelationArraysUpdate
}).refine((data) => {
	if (data.type === "percentage" && data.discountAmount !== void 0 && parseFloat(data.discountAmount) > 100) return false;
	return true;
}, {
	message: "Percentage discount cannot exceed 100%",
	path: ["discountAmount"]
}).refine((data) => {
	if (data.activeFrom && data.activeTo) return new Date(data.activeFrom) < new Date(data.activeTo);
	return true;
}, {
	message: "Start date must be before end date",
	path: ["activeTo"]
});
/**
* Cart Item for validation
*/
var cartItemSchema = object({
	productId: string().min(1, "Product ID is required"),
	categoryId: string().optional().nullable(),
	quantity: number().min(1, "Quantity must be at least 1"),
	price: string().min(1, "Price is required")
});
/**
* Schema for validating a coupon for checkout
*/
var validateCouponSchema = object({
	code: string().min(1, "Coupon code is required"),
	shopId: string().min(1, "Shop ID is required"),
	cartAmount: string().min(1, "Cart amount is required"),
	userId: string().optional(),
	cartItems: array(cartItemSchema).optional()
});
object({
	couponId: string().min(1, "Coupon ID is required"),
	userId: string().min(1, "User ID is required"),
	orderId: string().optional(),
	discountApplied: string().min(1, "Discount applied is required"),
	shopId: string().min(1, "Shop ID is required")
});
object({
	couponId: string().min(1, "Coupon ID is required"),
	userId: string().min(1, "User ID is required")
});
/**
* Schema for getting available coupons for a user
*/
var getAvailableCouponsForUserSchema = object({
	shopId: string().min(1, "Shop ID is required"),
	userId: string().optional(),
	cartAmount: string().optional(),
	cartItems: array(cartItemSchema).optional()
});
//#endregion
export { getAvailableCouponsForUserSchema as a, storeCouponsQuerySchema as c, validateCouponSchema as d, vendorCouponsQuerySchema as f, deleteCouponSchema as i, toggleCouponActiveSchema as l, couponFormSchema as n, getCouponByCodeSchema as o, createCouponSchema as r, getCouponByIdSchema as s, adminCouponsQuerySchema as t, updateCouponSchema as u };
