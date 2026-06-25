import { a as and, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops } from "./shop-schema-C6uNILQs.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { n as isUserAdmin, t as getVendorForUser } from "./vendor-S8D_d0RQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-helpers-CtFv1HPY.js
function generateOrderNumber() {
	return `ORD-${Date.now().toString(36).toUpperCase()}${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
}
async function getShopIdsForOrderQuery(userId, shopSlug) {
	const isAdmin = await isUserAdmin(userId);
	if (shopSlug) {
		const shop = await db.query.shops.findFirst({ where: eq(shops.slug, shopSlug) });
		if (!shop) return [];
		if (isAdmin) return [shop.id];
		const vendor = await getVendorForUser(userId);
		if (vendor && shop.vendorId === vendor.id) return [shop.id];
		return [];
	}
	if (isAdmin) return [];
	const vendor = await getVendorForUser(userId);
	if (!vendor) return [];
	return (await db.select({ id: shops.id }).from(shops).where(eq(shops.vendorId, vendor.id))).map((s) => s.id);
}
async function verifyShopAccess(userId, shopId) {
	if (await isUserAdmin(userId)) return true;
	const vendor = await getVendorForUser(userId);
	if (!vendor) return false;
	return !!await db.query.shops.findFirst({ where: and(eq(shops.id, shopId), eq(shops.vendorId, vendor.id)) });
}
//#endregion
export { getShopIdsForOrderQuery as n, verifyShopAccess as r, generateOrderNumber as t };
