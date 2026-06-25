import { a as and, s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { c as db, s as customerAddresses } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as deleteAddressSchema, r as updateAddressSchema, t as createAddressSchema } from "./address-C_CBX6dn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/address-BzcR6X3n.js
/**
* Customer Address Server Functions
*
* Server functions for managing customer addresses.
* Uses TanStack Start's createServerFn with authentication middleware.
*/
var getUserAddresses_createServerFn_handler = createServerRpc({
	id: "6dbf2ed035dcf8ef932760b200dfc48bfe05b7bb449d2967b8b99ca0a7a126a2",
	name: "getUserAddresses",
	filename: "src/lib/functions/store/address.ts"
}, (opts) => getUserAddresses.__executeServer(opts));
var getUserAddresses = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getUserAddresses_createServerFn_handler, async ({ context }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized: User not found");
	return { addresses: await db.select().from(customerAddresses).where(eq(customerAddresses.userId, userId)).orderBy(customerAddresses.createdAt) };
});
var createAddress_createServerFn_handler = createServerRpc({
	id: "d169e55f9006d88632bcc2369e47121e9fffd0d28e0d4595f1f321261993a930",
	name: "createAddress",
	filename: "src/lib/functions/store/address.ts"
}, (opts) => createAddress.__executeServer(opts));
var createAddress = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(createAddressSchema).handler(createAddress_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized: User not found");
	if (data.isDefault) await db.update(customerAddresses).set({ isDefault: false }).where(and(eq(customerAddresses.userId, userId), eq(customerAddresses.type, data.type)));
	const isFirstAddress = (await db.select().from(customerAddresses).where(and(eq(customerAddresses.userId, userId), eq(customerAddresses.type, data.type)))).length === 0;
	const [newAddress] = await db.insert(customerAddresses).values({
		userId,
		type: data.type,
		title: data.title,
		firstName: data.firstName || null,
		lastName: data.lastName || null,
		phone: data.phone || null,
		street: data.street,
		city: data.city,
		state: data.state,
		zip: data.zip,
		country: data.country,
		isDefault: data.isDefault || isFirstAddress
	}).returning();
	return { address: newAddress };
});
var updateAddress_createServerFn_handler = createServerRpc({
	id: "4036644a3c6066179e0827de38d0b6ea147489153deefe0d451465074ddb588c",
	name: "updateAddress",
	filename: "src/lib/functions/store/address.ts"
}, (opts) => updateAddress.__executeServer(opts));
var updateAddress = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateAddressSchema).handler(updateAddress_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized: User not found");
	const existingAddress = await db.query.customerAddresses.findFirst({ where: and(eq(customerAddresses.id, data.id), eq(customerAddresses.userId, userId)) });
	if (!existingAddress) throw new Error("Address not found");
	if (data.isDefault) {
		const addressType = data.type || existingAddress.type;
		await db.update(customerAddresses).set({ isDefault: false }).where(and(eq(customerAddresses.userId, userId), eq(customerAddresses.type, addressType)));
	}
	const [updatedAddress] = await db.update(customerAddresses).set({
		type: data.type ?? existingAddress.type,
		title: data.title ?? existingAddress.title,
		firstName: data.firstName ?? existingAddress.firstName,
		lastName: data.lastName ?? existingAddress.lastName,
		phone: data.phone ?? existingAddress.phone,
		street: data.street ?? existingAddress.street,
		city: data.city ?? existingAddress.city,
		state: data.state ?? existingAddress.state,
		zip: data.zip ?? existingAddress.zip,
		country: data.country ?? existingAddress.country,
		isDefault: data.isDefault ?? existingAddress.isDefault
	}).where(eq(customerAddresses.id, data.id)).returning();
	return { address: updatedAddress };
});
var deleteAddress_createServerFn_handler = createServerRpc({
	id: "6719ad971235867fab845c0b447018500d28bb27f5f76afbd329cd2b1ff1e472",
	name: "deleteAddress",
	filename: "src/lib/functions/store/address.ts"
}, (opts) => deleteAddress.__executeServer(opts));
var deleteAddress = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(deleteAddressSchema).handler(deleteAddress_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized: User not found");
	const existingAddress = await db.query.customerAddresses.findFirst({ where: and(eq(customerAddresses.id, data.id), eq(customerAddresses.userId, userId)) });
	if (!existingAddress) throw new Error("Address not found");
	await db.delete(customerAddresses).where(eq(customerAddresses.id, data.id));
	if (existingAddress.isDefault) {
		const [nextAddress] = await db.select().from(customerAddresses).where(and(eq(customerAddresses.userId, userId), eq(customerAddresses.type, existingAddress.type))).limit(1);
		if (nextAddress) await db.update(customerAddresses).set({ isDefault: true }).where(eq(customerAddresses.id, nextAddress.id));
	}
	return { success: true };
});
var setDefaultAddress_createServerFn_handler = createServerRpc({
	id: "6cad83a32036f7f136f626b3783a0e184d864600d39b3c60158ea25c9a983920",
	name: "setDefaultAddress",
	filename: "src/lib/functions/store/address.ts"
}, (opts) => setDefaultAddress.__executeServer(opts));
var setDefaultAddress = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(deleteAddressSchema).handler(setDefaultAddress_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized: User not found");
	const existingAddress = await db.query.customerAddresses.findFirst({ where: and(eq(customerAddresses.id, data.id), eq(customerAddresses.userId, userId)) });
	if (!existingAddress) throw new Error("Address not found");
	await db.update(customerAddresses).set({ isDefault: false }).where(and(eq(customerAddresses.userId, userId), eq(customerAddresses.type, existingAddress.type)));
	const [updatedAddress] = await db.update(customerAddresses).set({ isDefault: true }).where(eq(customerAddresses.id, data.id)).returning();
	return { address: updatedAddress };
});
//#endregion
export { createAddress_createServerFn_handler, deleteAddress_createServerFn_handler, getUserAddresses_createServerFn_handler, setDefaultAddress_createServerFn_handler, updateAddress_createServerFn_handler };
