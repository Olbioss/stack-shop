import { A as sql } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { a as pgTable, d as integer, f as boolean, l as numeric, n as index, o as timestamp, r as relations, s as text } from "../_libs/drizzle-orm.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-schema-C6uNILQs.js
var user = pgTable("user", {
	id: text("id").primaryKey(),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	emailVerified: boolean("email_verified").default(false).notNull(),
	image: text("image"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull(),
	role: text("role").default("customer"),
	banned: boolean("banned").default(false),
	banReason: text("ban_reason"),
	banExpires: timestamp("ban_expires"),
	twoFactorEnabled: boolean("two_factor_enabled").default(false),
	orderEmailsEnabled: boolean("order_emails_enabled").default(true)
});
var session = pgTable("session", {
	id: text("id").primaryKey(),
	expiresAt: timestamp("expires_at").notNull(),
	token: text("token").notNull().unique(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").$onUpdate(() => /* @__PURE__ */ new Date()).notNull(),
	ipAddress: text("ip_address"),
	userAgent: text("user_agent"),
	userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	impersonatedBy: text("impersonated_by")
}, (table) => [index("session_userId_idx").on(table.userId)]);
var account = pgTable("account", {
	id: text("id").primaryKey(),
	accountId: text("account_id").notNull(),
	providerId: text("provider_id").notNull(),
	userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" }),
	accessToken: text("access_token"),
	refreshToken: text("refresh_token"),
	idToken: text("id_token"),
	accessTokenExpiresAt: timestamp("access_token_expires_at"),
	refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
	scope: text("scope"),
	password: text("password"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
}, (table) => [index("account_userId_idx").on(table.userId)]);
var verification = pgTable("verification", {
	id: text("id").primaryKey(),
	identifier: text("identifier").notNull(),
	value: text("value").notNull(),
	expiresAt: timestamp("expires_at").notNull(),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
}, (table) => [index("verification_identifier_idx").on(table.identifier)]);
var twoFactor = pgTable("two_factor", {
	id: text("id").primaryKey(),
	secret: text("secret").notNull(),
	backupCodes: text("backup_codes").notNull(),
	userId: text("user_id").notNull().references(() => user.id, { onDelete: "cascade" })
}, (table) => [index("twoFactor_secret_idx").on(table.secret), index("twoFactor_userId_idx").on(table.userId)]);
relations(user, ({ many }) => ({
	sessions: many(session),
	accounts: many(account),
	twoFactors: many(twoFactor)
}));
relations(session, ({ one }) => ({ user: one(user, {
	fields: [session.userId],
	references: [user.id]
}) }));
relations(account, ({ one }) => ({ user: one(user, {
	fields: [account.userId],
	references: [user.id]
}) }));
relations(twoFactor, ({ one }) => ({ user: one(user, {
	fields: [twoFactor.userId],
	references: [user.id]
}) }));
/**
* Vendors and Shops Schema
*
* Database schema for vendor profiles and their shops in the multi-vendor marketplace.
* Each user can have only one vendor profile (userId is unique).
* Vendors can create multiple shops under their profile.
*/
/**
* Vendors Table
* Stores vendor business profile information.
* One-to-one relationship with users (userId is unique).
*/
var vendors = pgTable("vendors", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	userId: text("user_id").notNull().unique().references(() => user.id, { onDelete: "cascade" }),
	businessName: text("business_name"),
	commissionRate: numeric("commission_rate", {
		precision: 5,
		scale: 2
	}).default("10.00"),
	status: text("status").default("pending_approval"),
	contactEmail: text("contact_email"),
	contactPhone: text("contact_phone"),
	address: text("address"),
	approvedAt: timestamp("approved_at"),
	approvedBy: text("approved_by").references(() => user.id),
	stripeConnectedAccountId: text("stripe_connected_account_id"),
	stripeOnboardingComplete: boolean("stripe_onboarding_complete").default(false),
	stripeChargesEnabled: boolean("stripe_charges_enabled").default(false),
	stripePayoutsEnabled: boolean("stripe_payouts_enabled").default(false),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
/**
* Shops Table
* Stores individual shop/store information for vendors.
* One vendor can have multiple shops.
*/
var shops = pgTable("shops", {
	id: text("id").primaryKey().default(sql`gen_random_uuid()`),
	vendorId: text("vendor_id").notNull().references(() => vendors.id, { onDelete: "cascade" }),
	name: text("name").notNull().unique(),
	slug: text("slug").notNull().unique(),
	description: text("description"),
	logo: text("logo"),
	banner: text("banner"),
	category: text("category"),
	address: text("address"),
	phone: text("phone"),
	email: text("email"),
	enableNotifications: boolean("enable_notifications").default(false),
	monthlyRevenue: text("monthlyRevenue"),
	status: text("status").default("pending"),
	rating: numeric("rating", {
		precision: 2,
		scale: 1
	}).default("0.0"),
	totalProducts: integer("total_products").default(0),
	totalOrders: integer("total_orders").default(0),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	updatedAt: timestamp("updated_at").defaultNow().$onUpdate(() => /* @__PURE__ */ new Date()).notNull()
});
/**
* Relations
*/
var vendorsRelations = relations(vendors, ({ one, many }) => ({
	user: one(user, {
		fields: [vendors.userId],
		references: [user.id]
	}),
	shops: many(shops)
}));
var shopsRelations = relations(shops, ({ one }) => ({ vendor: one(vendors, {
	fields: [shops.vendorId],
	references: [vendors.id]
}) }));
//#endregion
export { twoFactor as a, vendorsRelations as c, shopsRelations as i, verification as l, session as n, user as o, shops as r, vendors as s, account as t };
