import { a as and, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { o as user, r as shops, s as vendors } from "./shop-schema-C6uNILQs.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vendor-S8D_d0RQ.js
var getVendorForUser = async (userId) => {
	return await db.query.vendors.findFirst({ where: eq(vendors.userId, userId) });
};
var isUserAdmin = async (userId) => {
	const [userData] = await db.select({ role: user.role }).from(user).where(eq(user.id, userId));
	return userData?.role === "admin";
};
var verifyShopOwnership = async (shopId, vendorId) => {
	return await db.query.shops.findFirst({ where: and(eq(shops.id, shopId), eq(shops.vendorId, vendorId)) });
};
var verifyShopAccess = async (userId, shopId) => {
	if (await isUserAdmin(userId)) {
		const shop = await db.query.shops.findFirst({ where: eq(shops.id, shopId) });
		return {
			hasAccess: !!shop,
			isAdmin: true,
			shop: shop || null,
			vendor: null
		};
	}
	const vendor = await getVendorForUser(userId);
	if (!vendor) return {
		hasAccess: false,
		isAdmin: false,
		shop: null,
		vendor: null
	};
	const shop = await verifyShopOwnership(shopId, vendor.id);
	return {
		hasAccess: !!shop,
		isAdmin: false,
		shop: shop || null,
		vendor
	};
};
var requireShopAccess = async (userId, shopId) => {
	const access = await verifyShopAccess(userId, shopId);
	if (!access.hasAccess) {
		if (!access.vendor && !access.isAdmin) throw new Error("Vendor profile not found.");
		throw new Error("Shop not found or you do not have access to it.");
	}
	return access;
};
//#endregion
export { isUserAdmin as n, requireShopAccess as r, getVendorForUser as t };
