import { Dt as zod_default } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { A as sql, a as and, f as inArray, i as desc, n as count, s as eq, u as gte } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { o as user, r as shops } from "./shop-schema-C6uNILQs.mjs";
import { c as db, f as orders, p as payments } from "./db-DORSFQFR.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { n as isUserAdmin, t as getVendorForUser } from "./vendor-S8D_d0RQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/transactions-BP7dEEgf.js
var getVendorTransactionsSchema = zod_default.object({
	limit: zod_default.number().min(1).max(100).optional().default(50),
	offset: zod_default.number().min(0).optional().default(0),
	status: zod_default.enum([
		"pending",
		"processing",
		"succeeded",
		"failed",
		"refunded"
	]).optional(),
	shopSlug: zod_default.string().optional()
});
var getVendorTransactionStatsSchema = zod_default.object({ shopSlug: zod_default.string().optional() });
async function getShopIdsForTransactionQuery(userId, shopSlug) {
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
var getVendorTransactions_createServerFn_handler = createServerRpc({
	id: "d8e25468e3a9cca3a78b3348b4431e674c2c3e0ddaaf5b32d805c33d8f5b10ed",
	name: "getVendorTransactions",
	filename: "src/lib/functions/vendor/transactions.ts"
}, (opts) => getVendorTransactions.__executeServer(opts));
var getVendorTransactions = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getVendorTransactionsSchema).handler(getVendorTransactions_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Authentication required");
	const { limit, offset, status, shopSlug } = data;
	const shopIds = await getShopIdsForTransactionQuery(userId, shopSlug);
	if (shopIds.length === 0) return {
		transactions: [],
		total: 0
	};
	const conditions = [];
	conditions.push(inArray(orders.shopId, shopIds));
	if (status) conditions.push(eq(payments.status, status));
	const whereClause = and(...conditions);
	const [results, [countResult]] = await Promise.all([db.select({
		payment: payments,
		order: orders,
		shop: shops,
		customer: user
	}).from(payments).innerJoin(orders, eq(payments.orderId, orders.id)).innerJoin(shops, eq(orders.shopId, shops.id)).leftJoin(user, eq(orders.userId, user.id)).where(whereClause).orderBy(desc(payments.createdAt)).limit(limit).offset(offset), db.select({ count: count() }).from(payments).innerJoin(orders, eq(payments.orderId, orders.id)).where(whereClause)]);
	return {
		transactions: results.map((row) => {
			const totalAmount = parseFloat(row.payment.amount);
			const platformFee = row.payment.applicationFeeAmount ? parseFloat(row.payment.applicationFeeAmount) : 0;
			const vendorAmount = totalAmount - platformFee;
			return {
				id: row.payment.id,
				paymentIntentId: row.payment.stripePaymentIntentId,
				orderId: row.order.id,
				orderNumber: row.order.orderNumber,
				totalAmount,
				vendorAmount,
				platformFee,
				currency: row.payment.currency,
				status: row.payment.status,
				paymentMethod: row.payment.paymentMethod,
				provider: row.payment.provider,
				customer: {
					name: row.customer?.name ?? null,
					email: row.order.guestEmail ?? row.customer?.email ?? "Unknown"
				},
				shop: {
					id: row.shop.id,
					name: row.shop.name
				},
				createdAt: row.payment.createdAt.toISOString()
			};
		}),
		total: countResult.count
	};
});
var getVendorTransactionStats_createServerFn_handler = createServerRpc({
	id: "f93abd37ca8fc9c7d1950ff83fb57b21887b78e01314cd2001cacafc7caa45ca",
	name: "getVendorTransactionStats",
	filename: "src/lib/functions/vendor/transactions.ts"
}, (opts) => getVendorTransactionStats.__executeServer(opts));
var getVendorTransactionStats = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getVendorTransactionStatsSchema).handler(getVendorTransactionStats_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Authentication required");
	const { shopSlug } = data;
	const shopIds = await getShopIdsForTransactionQuery(userId, shopSlug);
	if (shopIds.length === 0) return {
		totalEarnings: 0,
		pendingEarnings: 0,
		platformFeesPaid: 0,
		totalTransactions: 0,
		successfulTransactions: 0,
		pendingTransactions: 0,
		refundedTransactions: 0
	};
	const thirtyDaysAgo = /* @__PURE__ */ new Date();
	thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
	const shopFilter = inArray(orders.shopId, shopIds);
	const [earningsResult, platformFeesResult, pendingResult, transactionCountsResult] = await Promise.all([
		db.select({
			total: sql`COALESCE(SUM(${payments.amount}), 0)`,
			fees: sql`COALESCE(SUM(${payments.applicationFeeAmount}), 0)`
		}).from(payments).innerJoin(orders, eq(payments.orderId, orders.id)).where(and(shopFilter, eq(payments.status, "succeeded"), gte(payments.createdAt, thirtyDaysAgo))),
		db.select({ total: sql`COALESCE(SUM(${payments.applicationFeeAmount}), 0)` }).from(payments).innerJoin(orders, eq(payments.orderId, orders.id)).where(and(shopFilter, eq(payments.status, "succeeded"), gte(payments.createdAt, thirtyDaysAgo))),
		db.select({
			total: sql`COALESCE(SUM(${payments.amount}), 0)`,
			fees: sql`COALESCE(SUM(${payments.applicationFeeAmount}), 0)`
		}).from(payments).innerJoin(orders, eq(payments.orderId, orders.id)).where(and(shopFilter, eq(payments.status, "pending"))),
		db.select({
			status: payments.status,
			count: count()
		}).from(payments).innerJoin(orders, eq(payments.orderId, orders.id)).where(and(shopFilter, gte(payments.createdAt, thirtyDaysAgo))).groupBy(payments.status)
	]);
	const totalEarnings = parseFloat(earningsResult[0]?.total || "0") - parseFloat(earningsResult[0]?.fees || "0");
	const platformFeesPaid = parseFloat(platformFeesResult[0]?.total || "0");
	const pendingEarnings = parseFloat(pendingResult[0]?.total || "0") - parseFloat(pendingResult[0]?.fees || "0");
	let totalTransactions = 0;
	let successfulTransactions = 0;
	let pendingTransactions = 0;
	let refundedTransactions = 0;
	for (const row of transactionCountsResult) {
		totalTransactions += row.count;
		if (row.status === "succeeded") successfulTransactions = row.count;
		if (row.status === "pending") pendingTransactions = row.count;
		if (row.status === "refunded") refundedTransactions = row.count;
	}
	return {
		totalEarnings,
		pendingEarnings,
		platformFeesPaid,
		totalTransactions,
		successfulTransactions,
		pendingTransactions,
		refundedTransactions
	};
});
//#endregion
export { getVendorTransactionStats_createServerFn_handler, getVendorTransactions_createServerFn_handler };
