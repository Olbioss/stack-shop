import { Ft as boolean, Gt as string, Ht as object, qt as url } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { s as eq } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { o as user } from "./shop-schema-C6uNILQs.mjs";
import { c as db } from "./db-DORSFQFR.mjs";
import { t as auth } from "./auth-DHeFNCFg.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as isUserAdmin } from "./vendor-S8D_d0RQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/users-JBnlFcvf.js
/**
* Admin User Management Server Functions
*
* Server functions for managing users in the admin panel.
* Uses TanStack Start's createServerFn with Better Auth admin plugin.
*/
var transformUser = (u) => ({
	id: u.id,
	name: u.name ?? u.email,
	email: u.email,
	image: u.image ?? void 0,
	role: u.role ?? "customer",
	banned: u.banned ?? false,
	status: u.banned ? "banned" : "active",
	createdAt: u.createdAt,
	updatedAt: u.updatedAt
});
var currentUser_createServerFn_handler = createServerRpc({
	id: "87caa8bd223f38d78ccad0506fc11618ee7df5dea85bc88d9d915ad2b7c281a8",
	name: "currentUser",
	filename: "src/lib/functions/users.ts"
}, (opts) => currentUser.__executeServer(opts));
var currentUser = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(currentUser_createServerFn_handler, async ({ context }) => {
	return context.session;
});
var updateUserProfileSchema = object({
	name: string().min(1, "Name is required"),
	image: url().optional().nullable(),
	orderEmailsEnabled: boolean().optional()
});
var updateUserProfile_createServerFn_handler = createServerRpc({
	id: "2aa65bef0cdc90a074deeb02730646bd0d9afb797c2fe2403563faca0eb16127",
	name: "updateUserProfile",
	filename: "src/lib/functions/users.ts"
}, (opts) => updateUserProfile.__executeServer(opts));
var updateUserProfile = createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(updateUserProfileSchema).handler(updateUserProfile_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Unauthorized: User not found");
	const [updatedUser] = await db.update(user).set({
		name: data.name,
		image: data.image || null,
		...data.orderEmailsEnabled !== void 0 ? { orderEmailsEnabled: data.orderEmailsEnabled } : {}
	}).where(eq(user.id, userId)).returning();
	if (!updatedUser) throw new Error("Failed to update user profile");
	return {
		success: true,
		user: {
			id: updatedUser.id,
			name: updatedUser.name,
			email: updatedUser.email,
			image: updatedUser.image,
			orderEmailsEnabled: updatedUser.orderEmailsEnabled
		}
	};
});
var getUsers_createServerFn_handler = createServerRpc({
	id: "7c03b72b82f640d4512a324b6f8f63d0a7fd43ee5086600503b278246a98c685",
	name: "getUsers",
	filename: "src/lib/functions/users.ts"
}, (opts) => getUsers.__executeServer(opts));
var getUsers = createServerFn({ method: "GET" }).middleware([authMiddleware]).handler(getUsers_createServerFn_handler, async ({ context }) => {
	if (!await isUserAdmin(context.session.user.id)) throw new Error("Unauthorized: Admin access required");
	const rawUsers = (await auth.api.listUsers({
		query: { limit: 100 },
		headers: context.headers
	}))?.users ?? [];
	return {
		users: rawUsers.map(transformUser),
		total: rawUsers.length,
		limit: 100,
		offset: 0
	};
});
//#endregion
export { currentUser_createServerFn_handler, getUsers_createServerFn_handler, updateUserProfile_createServerFn_handler };
