import { s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { o as user, r as shops, s as vendors } from "./shop-schema-C6uNILQs.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as auth } from "./auth-DHeFNCFg.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { t as generateSlug } from "./slug-Bd7zy7tX.mjs";
import { i as vendorRegisterSchema } from "./auth-DLhAwWpU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/vendor-Dyh3Xopr.js
var registerVendor_createServerFn_handler = createServerRpc({
	id: "fa63f1354f704fc0a3cd3bb34a6a16ff934d52aca2f9bbda826229000a26f853",
	name: "registerVendor",
	filename: "src/lib/functions/vendor.ts"
}, (opts) => registerVendor.__executeServer(opts));
var registerVendor = createServerFn({ method: "POST" }).inputValidator(vendorRegisterSchema).handler(registerVendor_createServerFn_handler, async ({ data }) => {
	const { name, email, password, storeName, storeDescription, contactPhone, address } = data;
	let userId = null;
	try {
		if (await db.query.user.findFirst({ where: eq(user.email, data.email) })) throw new Error("A user with this email already exists");
		const shopSlug = generateSlug(data.storeName);
		if (await db.query.shops.findFirst({ where: eq(shops.name, storeName) })) throw new Error("A shop with this name already exists. Please choose a different name.");
		const signUpResult = await auth.api.signUpEmail({ body: {
			name,
			email,
			password
		} });
		if (!signUpResult || !signUpResult.user) throw new Error("Failed to create user account");
		userId = signUpResult.user.id;
		await db.update(user).set({ role: "vendor" }).where(eq(user.id, userId));
		const [newVendor] = await db.insert(vendors).values({
			userId,
			businessName: storeName,
			contactEmail: email,
			contactPhone: contactPhone || null,
			address: address || null,
			status: "pending_approval"
		}).returning({ id: vendors.id });
		const [newShop] = await db.insert(shops).values({
			vendorId: newVendor.id,
			name: storeName,
			slug: shopSlug,
			description: storeDescription || null,
			email,
			phone: contactPhone || null,
			address: address || null,
			status: "pending"
		}).returning({ id: shops.id });
		return {
			success: true,
			user: {
				id: userId,
				name,
				email,
				role: "vendor"
			},
			vendor: {
				id: newVendor.id,
				status: "pending_approval"
			},
			shop: {
				id: newShop.id,
				slug: shopSlug,
				name: storeName,
				status: "pending"
			}
		};
	} catch (err) {
		console.error("Error registering vendor:", err);
		if (userId) {
			console.warn(`Vendor registration failed after user creation. Rolling back user with ID: ${userId}`);
			try {
				await db.update(user).set({ role: "customer" }).where(eq(user.id, userId));
				console.log(`Reverted user ${userId} role to customer after failure`);
			} catch (revertErr) {
				console.error("Failed to revert user role:", revertErr);
			}
		}
		throw new Error(err instanceof Error ? err.message : "Failed to register vendor. Please try again.");
	}
});
//#endregion
export { registerVendor_createServerFn_handler };
