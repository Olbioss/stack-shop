import { Gt as string, Ht as object, Mt as _enum, Vt as number } from "../_libs/@better-auth/core+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { A as sql, a as and, i as desc, n as count, s as eq, u as gte } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { o as user, r as shops, s as vendors } from "./shop-schema-C6uNILQs.mjs";
import { c as db, f as orders, p as payments } from "./db-DORSFQFR.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/transaction-CKUmn5AN.js
/**
* Admin Transaction Server Functions
*
* Server functions for admin transaction/payment management.
* Provides platform-wide view of all financial transactions.
*/
var getAdminTransactionsSchema = object({
	limit: number().min(1).max(100).optional().default(50),
	offset: number().min(0).optional().default(0),
	status: _enum([
		"pending",
		"processing",
		"succeeded",
		"failed",
		"refunded"
	]).optional(),
	shopId: string().optional(),
	vendorId: string().optional()
});
var getAdminTransactions_createServerFn_handler = createServerRpc({
	id: "809b3dd5d0ad5dd1f952187f8e7ffc123ff2a73600bb5508d4b0af315fc85c12",
	name: "getAdminTransactions",
	filename: "src/lib/functions/admin/transaction.ts"
}, (opts) => getAdminTransactions.__executeServer(opts));
var getAdminTransactions = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(getAdminTransactionsSchema).handler(getAdminTransactions_createServerFn_handler, async ({ data }) => {
	const { limit, offset, status, shopId, vendorId } = data;
	const conditions = [];
	if (status) conditions.push(eq(payments.status, status));
	if (shopId) conditions.push(eq(orders.shopId, shopId));
	const query = db.select({
		payment: payments,
		order: orders,
		shop: shops,
		vendor: vendors,
		customer: user
	}).from(payments).innerJoin(orders, eq(payments.orderId, orders.id)).innerJoin(shops, eq(orders.shopId, shops.id)).innerJoin(vendors, eq(shops.vendorId, vendors.id)).leftJoin(user, eq(orders.userId, user.id)).orderBy(desc(payments.createdAt));
	if (vendorId) conditions.push(eq(vendors.id, vendorId));
	const whereClause = conditions.length > 0 ? and(...conditions) : void 0;
	const [results, [countResult]] = await Promise.all([whereClause ? query.where(whereClause).limit(limit).offset(offset) : query.limit(limit).offset(offset), db.select({ count: count() }).from(payments).innerJoin(orders, eq(payments.orderId, orders.id)).innerJoin(shops, eq(orders.shopId, shops.id)).innerJoin(vendors, eq(shops.vendorId, vendors.id)).where(whereClause)]);
	return {
		transactions: results.map((row) => {
			const amount = parseFloat(row.payment.amount);
			const applicationFee = row.payment.applicationFeeAmount ? parseFloat(row.payment.applicationFeeAmount) : null;
			const vendorAmount = applicationFee !== null ? amount - applicationFee : null;
			return {
				id: row.payment.id,
				paymentIntentId: row.payment.stripePaymentIntentId,
				orderId: row.order.id,
				orderNumber: row.order.orderNumber,
				amount,
				currency: row.payment.currency,
				status: row.payment.status,
				paymentMethod: row.payment.paymentMethod,
				provider: row.payment.provider,
				connectedAccountId: row.payment.connectedAccountId,
				applicationFeeAmount: applicationFee,
				vendorAmount,
				customer: {
					id: row.customer?.id ?? null,
					name: row.customer?.name ?? null,
					email: row.order.guestEmail ?? row.customer?.email ?? "Unknown"
				},
				shop: {
					id: row.shop.id,
					name: row.shop.name,
					slug: row.shop.slug
				},
				vendor: {
					id: row.vendor.id,
					businessName: row.vendor.businessName
				},
				createdAt: row.payment.createdAt.toISOString()
			};
		}),
		total: countResult.count
	};
});
var getAdminTransactionStats_createServerFn_handler = createServerRpc({
	id: "2c2c619106088cb82b1227f8ff6b7b35c224b298c04e698b5e80f27c6174c0da",
	name: "getAdminTransactionStats",
	filename: "src/lib/functions/admin/transaction.ts"
}, (opts) => getAdminTransactionStats.__executeServer(opts));
var getAdminTransactionStats = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(getAdminTransactionStats_createServerFn_handler, async () => {
	const thirtyDaysAgo = /* @__PURE__ */ new Date();
	thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
	const [revenueResult, platformFeesResult, transactionCountsResult, pendingResult] = await Promise.all([
		db.select({ total: sql`COALESCE(SUM(${payments.amount}), 0)` }).from(payments).where(and(eq(payments.status, "succeeded"), gte(payments.createdAt, thirtyDaysAgo))),
		db.select({ total: sql`COALESCE(SUM(${payments.applicationFeeAmount}), 0)` }).from(payments).where(and(eq(payments.status, "succeeded"), gte(payments.createdAt, thirtyDaysAgo))),
		db.select({
			status: payments.status,
			count: count()
		}).from(payments).where(gte(payments.createdAt, thirtyDaysAgo)).groupBy(payments.status),
		db.select({ total: sql`COALESCE(SUM(${payments.amount}), 0)` }).from(payments).where(eq(payments.status, "pending"))
	]);
	const totalRevenue = parseFloat(revenueResult[0]?.total || "0");
	const platformFees = parseFloat(platformFeesResult[0]?.total || "0");
	const vendorPayouts = totalRevenue - platformFees;
	const pendingPayments = parseFloat(pendingResult[0]?.total || "0");
	let totalTransactions = 0;
	let successfulTransactions = 0;
	let failedTransactions = 0;
	let refundedTransactions = 0;
	for (const row of transactionCountsResult) {
		totalTransactions += row.count;
		if (row.status === "succeeded") successfulTransactions = row.count;
		if (row.status === "failed") failedTransactions = row.count;
		if (row.status === "refunded") refundedTransactions = row.count;
	}
	return {
		totalRevenue,
		platformFees,
		vendorPayouts,
		pendingPayments,
		totalTransactions,
		successfulTransactions,
		failedTransactions,
		refundedTransactions
	};
});
//#endregion
export { getAdminTransactionStats_createServerFn_handler, getAdminTransactions_createServerFn_handler };
