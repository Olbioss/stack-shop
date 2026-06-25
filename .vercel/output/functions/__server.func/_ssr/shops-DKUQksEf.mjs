import { s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { r as shops, s as vendors } from "./shop-schema-C6uNILQs.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { n as deleteShopSchema, o as updateShopSchema, r as getShopBySlugSchema, t as createShopSchema } from "./shop-CA4bt79N.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { t as generateSlug } from "./slug-Bd7zy7tX.mjs";
import { n as isUserAdmin, t as getVendorForUser } from "./vendors-BeGb8yN7.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shops-DKUQksEf.js
async function getShopStates(shopIds) {
	if (shopIds.length === 0) return /* @__PURE__ */ new Map();
}
var getVendorShops_createServerFn_handler = createServerRpc({
	id: "a3fb4986a17e6149d8fe1a9fbde94c7dcd323396814f142dc4ada711156ea296",
	name: "getVendorShops",
	filename: "src/lib/functions/shops.ts"
}, (opts) => getVendorShops.__executeServer(opts));
var getVendorShops = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getVendorShops_createServerFn_handler, async ({ context }) => {
	const userId = context.session.user.id;
	const vendor = await getVendorForUser(userId);
	const isAdmin = await isUserAdmin(userId);
	let allShops = [];
	if (isAdmin) allShops = await db.query.shops.findMany({ orderBy: (shops, { desc }) => desc(shops.createdAt) });
	else {
		if (!vendor) throw new Error("Vendor profile not found. Please complete vendor registration.");
		allShops = await db.query.shops.findMany({
			where: (shops, { eq }) => eq(shops.vendorId, vendor.id),
			orderBy: (shops, { desc }) => desc(shops.createdAt)
		});
	}
	const stateMap = await getShopStates(allShops.map((shop) => shop.id));
	return {
		shops: allShops.map((shop) => {
			const stats = stateMap?.get(shop.id) || {
				productCount: 0,
				orderCount: 0,
				totalRevenue: 0
			};
			return {
				...shop,
				totalProducts: stats.productCount,
				totalOrders: stats.orderCount,
				totalRevenue: stats.totalRevenue
			};
		}),
		vendorId: vendor?.id || null,
		isAdmin
	};
});
var getShopBySlug_createServerFn_handler = createServerRpc({
	id: "da2d6690bfe9cb306f5dfac780f77bf310ef4add030ec3f94706abe6f353bbb6",
	name: "getShopBySlug",
	filename: "src/lib/functions/shops.ts"
}, (opts) => getShopBySlug.__executeServer(opts));
var getShopBySlug = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getShopBySlugSchema).handler(getShopBySlug_createServerFn_handler, async ({ data, context }) => {
	const userId = context.session.user.id;
	const { slug } = data;
	if (await isUserAdmin(userId)) {
		const shop = await db.query.shops.findFirst({ where: (shops, { eq }) => eq(shops.slug, slug) });
		if (!shop) throw new Error("Shop not found");
		return {
			shop,
			isAdmin: true
		};
	}
	const vendor = await getVendorForUser(userId);
	if (!vendor) throw new Error("Vendor profile not found.");
	const shop = await db.query.shops.findFirst({ where: (shops, { and, eq }) => and(eq(shops.slug, slug), eq(shops.vendorId, vendor.id)) });
	if (!shop) throw new Error("Shop not found or you do not have access.");
	return {
		shop,
		isAdmin: false
	};
});
var createShop_createServerFn_handler = createServerRpc({
	id: "782e654ce2e675ca9ad1c08239dde7600d31dbdae6acaba02aead69394491407",
	name: "createShop",
	filename: "src/lib/functions/shops.ts"
}, (opts) => createShop.__executeServer(opts));
var createShop = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createShopSchema).handler(createShop_createServerFn_handler, async ({ data, context }) => {
	const userId = context.session.user.id;
	let vendor = await getVendorForUser(userId);
	if (!vendor) {
		if (await isUserAdmin(userId)) {
			await db.insert(vendors).values({
				userId,
				businessName: "Admin Vendor Profile",
				status: "active",
				contactEmail: context.session.user.email
			});
			vendor = await getVendorForUser(userId);
		}
	}
	if (!vendor) throw new Error("Vendor profile not found. Please complete vendor registration.");
	if (vendor.status !== "active" && vendor.status !== "pending_approval") throw new Error("Your vendor account is not active.");
	let slug = data.slug;
	if (!slug) slug = generateSlug(data.name);
	if (await db.query.shops.findFirst({ where: (shops, { eq }) => eq(shops.slug, slug) })) throw new Error("Slug already in use. Please choose another.");
	const [newShop] = await db.insert(shops).values({
		vendorId: vendor.id,
		name: data.name,
		slug,
		description: data.description || null,
		logo: data.logo || null,
		banner: data.banner || null,
		category: data.category || null,
		address: data.address || null,
		phone: data.phone || null,
		email: data.email || null,
		enableNotifications: data.enableNotifications ?? false,
		status: "pending"
	}).returning();
	return {
		success: true,
		shop: newShop
	};
});
var updateShop_createServerFn_handler = createServerRpc({
	id: "3241209ea36be4e052b0d372af3a4417a69a6b4f49191309e9b7d36fd52777dd",
	name: "updateShop",
	filename: "src/lib/functions/shops.ts"
}, (opts) => updateShop.__executeServer(opts));
var updateShop = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateShopSchema).handler(updateShop_createServerFn_handler, async ({ data, context }) => {
	const userId = context.session.user.id;
	const { id: shopId, ...updateData } = data;
	const vendor = await getVendorForUser(userId);
	if (!vendor) throw new Error("Vendor profile not found.");
	const existingShop = await db.query.shops.findFirst({ where: (shops, { and, eq }) => and(eq(shops.id, shopId), eq(shops.vendorId, vendor.id)) });
	if (!existingShop) throw new Error("Shop not found or you do not have access to it.");
	if (updateData.slug && updateData.slug !== existingShop.slug) {
		if (await db.query.shops.findFirst({ where: eq(shops.slug, updateData.slug) })) throw new Error("A shop with this slug already exists.");
	}
	const updateValues = {};
	if (updateData.name !== void 0) updateValues.name = updateData.name;
	if (updateData.slug !== void 0) updateValues.slug = updateData.slug;
	if (updateData.description !== void 0) updateValues.description = updateData.description;
	if (updateData.logo !== void 0) updateValues.logo = updateData.logo;
	if (updateData.banner !== void 0) updateValues.banner = updateData.banner;
	if (updateData.category !== void 0) updateValues.category = updateData.category;
	if (updateData.address !== void 0) updateValues.address = updateData.address;
	if (updateData.phone !== void 0) updateValues.phone = updateData.phone;
	if (updateData.email !== void 0) updateValues.email = updateData.email;
	if (updateData.enableNotifications !== void 0) updateValues.enableNotifications = updateData.enableNotifications;
	if (updateData.status !== void 0) updateValues.status = updateData.status;
	await db.update(shops).set(updateValues).where(eq(shops.id, shopId));
	return {
		success: true,
		shop: await db.query.shops.findFirst({ where: (shops, { eq }) => eq(shops.id, shopId) })
	};
});
var deleteShop_createServerFn_handler = createServerRpc({
	id: "77dd88faeb4c838de273ebcd6cab0ef8847d8ae150a680ee438bb27a87ab1be4",
	name: "deleteShop",
	filename: "src/lib/functions/shops.ts"
}, (opts) => deleteShop.__executeServer(opts));
var deleteShop = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(deleteShopSchema).handler(deleteShop_createServerFn_handler, async ({ data, context }) => {
	const userId = context.session.user.id;
	const { id: shopId } = data;
	const vendor = await getVendorForUser(userId);
	if (!vendor) throw new Error("Vendor profile not found.");
	if (!await db.query.shops.findFirst({ where: (shops, { and, eq }) => and(eq(shops.id, shopId), eq(shops.vendorId, vendor.id)) })) throw new Error("Shop not found or you do not have access to it.");
	await db.delete(shops).where(eq(shops.id, shopId));
	return {
		success: true,
		message: "Shop deleted successfully."
	};
});
//#endregion
export { createShop_createServerFn_handler, deleteShop_createServerFn_handler, getShopBySlug_createServerFn_handler, getVendorShops_createServerFn_handler, updateShop_createServerFn_handler };
