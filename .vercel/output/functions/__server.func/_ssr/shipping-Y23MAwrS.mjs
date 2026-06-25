import { a as and, f as inArray, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { _ as shippingMethods, d as productShippingMethods, h as products } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { Qt as array, ln as string, on as object } from "../_libs/@better-auth/core+[...].mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shipping-Y23MAwrS.js
var getAvailableShippingMethods_createServerFn_handler = createServerRpc({
	id: "24da5e63e48c86de0dd254b103a3ec8116e7e976dd24d640ce31369a555052f5",
	name: "getAvailableShippingMethods",
	filename: "src/lib/functions/store/shipping.ts"
}, (opts) => getAvailableShippingMethods.__executeServer(opts));
var getAvailableShippingMethods = createServerFn({ method: "POST" }).inputValidator(object({ productIds: array(string()) })).handler(getAvailableShippingMethods_createServerFn_handler, async ({ data }) => {
	const { productIds } = data;
	if (!productIds || productIds.length === 0) return [];
	const productsList = await db.select({ shopId: products.shopId }).from(products).where(inArray(products.id, productIds));
	if (productsList.length === 0) return [];
	const shopId = productsList[0].shopId;
	if (!productsList.every((p) => p.shopId === shopId)) return [];
	const shopMethods = await db.select().from(shippingMethods).where(and(eq(shippingMethods.shopId, shopId), eq(shippingMethods.isActive, true)));
	const productRestrictions = await db.select().from(productShippingMethods).where(inArray(productShippingMethods.productId, productIds));
	const productMethodMap = /* @__PURE__ */ new Map();
	if (productRestrictions.length === 0) return shopMethods;
	for (const pr of productRestrictions) {
		if (!productMethodMap.has(pr.productId)) productMethodMap.set(pr.productId, /* @__PURE__ */ new Set());
		productMethodMap.get(pr.productId).add(pr.shippingMethodId);
	}
	return shopMethods.filter((method) => {
		return productIds.every((pid) => {
			const allowedMethods = productMethodMap.get(pid);
			if (!allowedMethods) return true;
			return allowedMethods.has(method.id);
		});
	});
});
//#endregion
export { getAvailableShippingMethods_createServerFn_handler };
