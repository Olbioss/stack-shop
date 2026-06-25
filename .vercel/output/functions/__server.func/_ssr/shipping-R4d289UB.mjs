import { r as createServerFn } from "./ssr.mjs";
import { a as and, d as ilike, i as desc, n as count, r as asc, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { _ as shippingMethods } from "./products-schema-BRxXUpzG.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { a as updateShippingMethodSchema, i as getShippingMethodsQuerySchema, n as deleteShippingMethodSchema, r as getShippingMethodByIdSchema, t as createShippingMethodSchema } from "./shipping-BnpSxyrq.mjs";
import { r as requireShopAccess } from "./vendor-S8D_d0RQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shipping-R4d289UB.js
/**
* Shipping Server Functions
*
* Server functions for shipping management in the vendor dashboard.
*/
var getShippingMethods_createServerFn_handler = createServerRpc({
	id: "7db5e519f5bd8724e88cf3d70ee2f2b5402c2de398af7cd23db6f07579652336",
	name: "getShippingMethods",
	filename: "src/lib/functions/shipping.ts"
}, (opts) => getShippingMethods.__executeServer(opts));
var getShippingMethods = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getShippingMethodsQuerySchema).handler(getShippingMethods_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, limit, offset, search, isActive, sortBy, sortDirection } = data;
	await requireShopAccess(userId, shopId);
	const conditions = [eq(shippingMethods.shopId, shopId)];
	if (search) conditions.push(ilike(shippingMethods.name, `%${search}%`));
	if (isActive !== void 0) conditions.push(eq(shippingMethods.isActive, isActive));
	const whereClause = and(...conditions);
	const orderFn = sortDirection === "desc" ? desc : asc;
	const orderByClause = (() => {
		switch (sortBy) {
			case "name": return orderFn(shippingMethods.name);
			case "price": return orderFn(shippingMethods.price);
			default: return orderFn(shippingMethods.createdAt);
		}
	})();
	const [countResult, shippingList] = await Promise.all([db.select({ count: count() }).from(shippingMethods).where(whereClause), db.select().from(shippingMethods).where(whereClause).orderBy(orderByClause).limit(limit).offset(offset)]);
	const total = countResult[0]?.count ?? 0;
	return {
		data: shippingList.map((item) => ({
			...item,
			isActive: item.isActive ?? true,
			createdAt: item.createdAt.toISOString(),
			updatedAt: item.updatedAt.toISOString()
		})),
		total,
		limit,
		offset
	};
});
var getShippingMethodById_createServerFn_handler = createServerRpc({
	id: "90f57122889c8f101a25722ab8855857a89b60d7b615efa623477a2ce9699b9a",
	name: "getShippingMethodById",
	filename: "src/lib/functions/shipping.ts"
}, (opts) => getShippingMethodById.__executeServer(opts));
var getShippingMethodById = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getShippingMethodByIdSchema).handler(getShippingMethodById_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	const [shippingMethod] = await db.select().from(shippingMethods).where(and(eq(shippingMethods.id, id), eq(shippingMethods.shopId, shopId))).limit(1);
	if (!shippingMethod) throw new Error("Shipping method not found.");
	return { shippingMethod: {
		...shippingMethod,
		createdAt: shippingMethod.createdAt.toISOString(),
		updatedAt: shippingMethod.updatedAt.toISOString()
	} };
});
var createShippingMethod_createServerFn_handler = createServerRpc({
	id: "f4a6e2030fc964c0bce8d5e1a9cb707ddf90ece82acfec8b4b66b29ba82ab3bd",
	name: "createShippingMethod",
	filename: "src/lib/functions/shipping.ts"
}, (opts) => createShippingMethod.__executeServer(opts));
var createShippingMethod = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createShippingMethodSchema).handler(createShippingMethod_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { shopId, ...methodData } = data;
	await requireShopAccess(userId, shopId);
	const [newMethod] = await db.insert(shippingMethods).values({
		shopId,
		name: methodData.name,
		description: methodData.description,
		price: methodData.price.toString(),
		duration: methodData.duration,
		isActive: methodData.isActive
	}).returning();
	return {
		success: true,
		shippingMethod: {
			...newMethod,
			createdAt: newMethod.createdAt.toISOString(),
			updatedAt: newMethod.updatedAt.toISOString()
		}
	};
});
var updateShippingMethod_createServerFn_handler = createServerRpc({
	id: "8f3033892d0557a8569da1494cad3fd7fdf468c7069af8d7ecbd29363a0e56b9",
	name: "updateShippingMethod",
	filename: "src/lib/functions/shipping.ts"
}, (opts) => updateShippingMethod.__executeServer(opts));
var updateShippingMethod = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateShippingMethodSchema).handler(updateShippingMethod_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId, ...updates } = data;
	await requireShopAccess(userId, shopId);
	const updateData = { ...updates };
	if (updates.price !== void 0) updateData.price = updates.price.toString();
	const [updatedMethod] = await db.update(shippingMethods).set(updateData).where(and(eq(shippingMethods.id, id), eq(shippingMethods.shopId, shopId))).returning();
	if (!updatedMethod) throw new Error("Shipping method not found or update failed.");
	return {
		success: true,
		shippingMethod: {
			...updatedMethod,
			createdAt: updatedMethod.createdAt.toISOString(),
			updatedAt: updatedMethod.updatedAt.toISOString()
		}
	};
});
var deleteShippingMethod_createServerFn_handler = createServerRpc({
	id: "1a10ad7fbb6e0f6d37b874278a3d4a0e85359e33d07a6a2e1e8d3994795028c8",
	name: "deleteShippingMethod",
	filename: "src/lib/functions/shipping.ts"
}, (opts) => deleteShippingMethod.__executeServer(opts));
var deleteShippingMethod = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(deleteShippingMethodSchema).handler(deleteShippingMethod_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session.user.id;
	const { id, shopId } = data;
	await requireShopAccess(userId, shopId);
	const [deletedMethod] = await db.delete(shippingMethods).where(and(eq(shippingMethods.id, id), eq(shippingMethods.shopId, shopId))).returning();
	if (!deletedMethod) throw new Error("Shipping method not found or delete failed.");
	return {
		success: true,
		id
	};
});
//#endregion
export { createShippingMethod_createServerFn_handler, deleteShippingMethod_createServerFn_handler, getShippingMethodById_createServerFn_handler, getShippingMethods_createServerFn_handler, updateShippingMethod_createServerFn_handler };
