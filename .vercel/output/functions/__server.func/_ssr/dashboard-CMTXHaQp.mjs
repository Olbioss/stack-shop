import { A as sql, a as and, g as lt, i as desc, n as count, s as eq, u as gte } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { o as user, r as shops, s as vendors } from "./shop-schema-C6uNILQs.mjs";
import { h as products } from "./products-schema-BRxXUpzG.mjs";
import { c as db, d as orderItems, f as orders, m as productReviews, p as payments } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { an as number, on as object } from "../_libs/@better-auth/core+[...].mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { a as getStartOfDay, c as getStartOfWeek, i as getDaysAgo, o as getStartOfLastMonth, s as getStartOfMonth } from "./dashboard-COukaLhv.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-CMTXHaQp.js
/**
* Admin Dashboard Server Functions
*
* Server functions for the admin dashboard analytics.
* Provides comprehensive platform-wide metrics and insights.
*/
var getDashboardStats_createServerFn_handler = createServerRpc({
	id: "8dbc4d5ef5657e6cdfd0867d009137e8c2a7b34ff8b126630ee23aae7676bd61",
	name: "getDashboardStats",
	filename: "src/lib/functions/admin/dashboard.ts"
}, (opts) => getDashboardStats.__executeServer(opts));
var getDashboardStats = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(getDashboardStats_createServerFn_handler, async () => {
	const now = /* @__PURE__ */ new Date();
	const startOfToday = getStartOfDay(now);
	const startOfWeek = getStartOfWeek(now);
	const startOfMonth = getStartOfMonth(now);
	const startOfLastMonth = getStartOfLastMonth(now);
	const [userCountResult, vendorCountResult, shopCountResult, productCountResult, orderCountResult, reviewCountResult, revenueResults, ordersByStatus, lastMonthStats, platformFeesResult, activeShopsResult, connectedVendorsResult, todayOrdersResult, newUsersTodayResult] = await Promise.all([
		db.select({ count: count() }).from(user),
		db.select({ count: count() }).from(vendors),
		db.select({ count: count() }).from(shops),
		db.select({ count: count() }).from(products).where(eq(products.isActive, true)),
		db.select({ count: count() }).from(orders),
		db.select({ count: count() }).from(productReviews),
		db.select({
			totalRevenue: sql`COALESCE(SUM(CASE WHEN ${orders.paymentStatus} = 'paid' THEN ${orders.totalAmount} ELSE 0 END), 0)`,
			todayRevenue: sql`COALESCE(SUM(CASE WHEN ${orders.paymentStatus} = 'paid' AND ${orders.createdAt} >= ${startOfToday} THEN ${orders.totalAmount} ELSE 0 END), 0)`,
			weekRevenue: sql`COALESCE(SUM(CASE WHEN ${orders.paymentStatus} = 'paid' AND ${orders.createdAt} >= ${startOfWeek} THEN ${orders.totalAmount} ELSE 0 END), 0)`,
			monthRevenue: sql`COALESCE(SUM(CASE WHEN ${orders.paymentStatus} = 'paid' AND ${orders.createdAt} >= ${startOfMonth} THEN ${orders.totalAmount} ELSE 0 END), 0)`
		}).from(orders),
		db.select({
			status: orders.status,
			count: count()
		}).from(orders).groupBy(orders.status),
		db.select({
			revenue: sql`COALESCE(SUM(CASE WHEN ${orders.paymentStatus} = 'paid' THEN ${orders.totalAmount} ELSE 0 END), 0)`,
			orderCount: count()
		}).from(orders).where(and(gte(orders.createdAt, startOfLastMonth), lt(orders.createdAt, startOfMonth))),
		db.select({ total: sql`COALESCE(SUM(${payments.applicationFeeAmount}), 0)` }).from(payments).where(eq(payments.status, "succeeded")),
		db.select({ count: count() }).from(shops).where(eq(shops.status, "active")),
		db.select({ count: count() }).from(vendors).where(eq(vendors.stripeChargesEnabled, true)),
		db.select({ count: count() }).from(orders).where(gte(orders.createdAt, startOfToday)),
		db.select({ count: count() }).from(user).where(gte(user.createdAt, startOfToday))
	]);
	const statusCounts = {
		pending: 0,
		processing: 0,
		shipped: 0,
		delivered: 0,
		cancelled: 0
	};
	for (const row of ordersByStatus) if (row.status === "pending" || row.status === "confirmed") statusCounts.pending += row.count;
	else if (row.status === "processing") statusCounts.processing = row.count;
	else if (row.status === "shipped") statusCounts.shipped = row.count;
	else if (row.status === "delivered") statusCounts.delivered = row.count;
	else if (row.status === "cancelled" || row.status === "refunded") statusCounts.cancelled += row.count;
	const currentMonthRevenue = parseFloat(revenueResults[0]?.monthRevenue || "0");
	const lastMonthRevenue = parseFloat(lastMonthStats[0]?.revenue || "0");
	const revenueGrowth = lastMonthRevenue > 0 ? (currentMonthRevenue - lastMonthRevenue) / lastMonthRevenue * 100 : 0;
	const currentMonthOrders = orderCountResult[0]?.count || 0;
	const lastMonthOrders = lastMonthStats[0]?.orderCount || 0;
	const ordersGrowth = lastMonthOrders > 0 ? (currentMonthOrders - lastMonthOrders) / lastMonthOrders * 100 : 0;
	return {
		totalUsers: userCountResult[0]?.count || 0,
		totalVendors: vendorCountResult[0]?.count || 0,
		totalShops: shopCountResult[0]?.count || 0,
		totalProducts: productCountResult[0]?.count || 0,
		totalOrders: orderCountResult[0]?.count || 0,
		totalReviews: reviewCountResult[0]?.count || 0,
		totalRevenue: parseFloat(revenueResults[0]?.totalRevenue || "0"),
		todayRevenue: parseFloat(revenueResults[0]?.todayRevenue || "0"),
		weekRevenue: parseFloat(revenueResults[0]?.weekRevenue || "0"),
		monthRevenue: parseFloat(revenueResults[0]?.monthRevenue || "0"),
		pendingOrders: statusCounts.pending,
		processingOrders: statusCounts.processing,
		shippedOrders: statusCounts.shipped,
		deliveredOrders: statusCounts.delivered,
		cancelledOrders: statusCounts.cancelled,
		revenueGrowth,
		ordersGrowth,
		usersGrowth: 0,
		activeShops: activeShopsResult[0]?.count || 0,
		connectedVendors: connectedVendorsResult[0]?.count || 0,
		platformFees: parseFloat(platformFeesResult[0]?.total || "0"),
		todayOrders: todayOrdersResult[0]?.count || 0,
		newUsersToday: newUsersTodayResult[0]?.count || 0
	};
});
var chartDataSchema = object({ days: number().min(7).max(90).optional().default(30) });
var getRevenueChartData_createServerFn_handler = createServerRpc({
	id: "7b02acfa632e9c148016db4de617944906834b9d86f87b400ac90ee17b169d37",
	name: "getRevenueChartData",
	filename: "src/lib/functions/admin/dashboard.ts"
}, (opts) => getRevenueChartData.__executeServer(opts));
var getRevenueChartData = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(chartDataSchema).handler(getRevenueChartData_createServerFn_handler, async ({ data }) => {
	const { days } = data;
	const startDate = getDaysAgo(days);
	const result = await db.select({
		date: sql`DATE(${orders.createdAt})`,
		revenue: sql`COALESCE(SUM(CASE WHEN ${orders.paymentStatus} = 'paid' THEN ${orders.totalAmount} ELSE 0 END), 0)`,
		orders: count()
	}).from(orders).where(gte(orders.createdAt, startDate)).groupBy(sql`DATE(${orders.createdAt})`).orderBy(sql`DATE(${orders.createdAt})`);
	const chartData = [];
	const dateMap = new Map(result.map((r) => [r.date, {
		revenue: parseFloat(r.revenue),
		orders: r.orders
	}]));
	for (let i = days - 1; i >= 0; i--) {
		const date = /* @__PURE__ */ new Date();
		date.setDate(date.getDate() - i);
		const dateStr = date.toISOString().split("T")[0];
		const dayData = dateMap.get(dateStr);
		chartData.push({
			date: dateStr,
			revenue: dayData?.revenue || 0,
			orders: dayData?.orders || 0
		});
	}
	return chartData;
});
var getOrderDistribution_createServerFn_handler = createServerRpc({
	id: "b7a179327e050011fd6d28a67935e25af58b73fcb1377f9e197801f0e5437983",
	name: "getOrderDistribution",
	filename: "src/lib/functions/admin/dashboard.ts"
}, (opts) => getOrderDistribution.__executeServer(opts));
var getOrderDistribution = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(getOrderDistribution_createServerFn_handler, async () => {
	const result = await db.select({
		status: orders.status,
		count: count()
	}).from(orders).groupBy(orders.status);
	const total = result.reduce((sum, r) => sum + r.count, 0);
	return result.map((r) => ({
		status: r.status,
		count: r.count,
		percentage: total > 0 ? r.count / total * 100 : 0
	}));
});
var getTopShops_createServerFn_handler = createServerRpc({
	id: "403be1d07ba7e1039c8907b6e884cc6d4a7994abfd0635063671bf277307bb85",
	name: "getTopShops",
	filename: "src/lib/functions/admin/dashboard.ts"
}, (opts) => getTopShops.__executeServer(opts));
var getTopShops = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(getTopShops_createServerFn_handler, async () => {
	const result = await db.select({
		shopId: shops.id,
		shopName: shops.name,
		shopSlug: shops.slug,
		shopLogo: shops.logo,
		revenue: sql`COALESCE(SUM(CASE WHEN ${orders.paymentStatus} = 'paid' THEN ${orders.totalAmount} ELSE 0 END), 0)`,
		orderCount: count(orders.id)
	}).from(shops).leftJoin(orders, eq(orders.shopId, shops.id)).groupBy(shops.id, shops.name, shops.slug, shops.logo).orderBy(desc(sql`SUM(CASE WHEN ${orders.paymentStatus} = 'paid' THEN ${orders.totalAmount} ELSE 0 END)`)).limit(5);
	const shopIds = result.map((r) => r.shopId);
	const productCounts = await db.select({
		shopId: products.shopId,
		count: count()
	}).from(products).where(and(eq(products.isActive, true), shopIds.length > 0 ? sql`${products.shopId} IN (${sql.join(shopIds.map((id) => sql`${id}`), sql`, `)})` : sql`1=0`)).groupBy(products.shopId);
	const productCountMap = new Map(productCounts.map((p) => [p.shopId, p.count]));
	return result.map((r) => ({
		id: r.shopId,
		name: r.shopName,
		slug: r.shopSlug,
		logo: r.shopLogo,
		revenue: parseFloat(r.revenue),
		orderCount: r.orderCount,
		productCount: productCountMap.get(r.shopId) || 0
	}));
});
var getTopProducts_createServerFn_handler = createServerRpc({
	id: "5e5ce2dd0fb9d31347e39830280e97be01ea1d73b17c398b4be6af9d39286f6b",
	name: "getTopProducts",
	filename: "src/lib/functions/admin/dashboard.ts"
}, (opts) => getTopProducts.__executeServer(opts));
var getTopProducts = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(getTopProducts_createServerFn_handler, async () => {
	return (await db.select({
		productId: orderItems.productId,
		productName: orderItems.productName,
		productImage: orderItems.productImage,
		shopName: shops.name,
		totalSold: sql`CAST(SUM(${orderItems.quantity}) AS INTEGER)`,
		revenue: sql`COALESCE(SUM(${orderItems.totalPrice}), 0)`
	}).from(orderItems).innerJoin(orders, eq(orders.id, orderItems.orderId)).innerJoin(shops, eq(shops.id, orders.shopId)).where(eq(orders.paymentStatus, "paid")).groupBy(orderItems.productId, orderItems.productName, orderItems.productImage, shops.name).orderBy(desc(sql`SUM(${orderItems.quantity})`)).limit(10)).map((r) => ({
		id: r.productId,
		name: r.productName,
		shopName: r.shopName,
		totalSold: r.totalSold,
		revenue: parseFloat(r.revenue),
		image: r.productImage
	}));
});
var getLowStockProducts_createServerFn_handler = createServerRpc({
	id: "8484a23c1080d70879c2c2ac7b875b909bed3c79fae0da6c8d90fbe85c035234",
	name: "getLowStockProducts",
	filename: "src/lib/functions/admin/dashboard.ts"
}, (opts) => getLowStockProducts.__executeServer(opts));
var getLowStockProducts = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(getLowStockProducts_createServerFn_handler, async () => {
	return (await db.select({
		productId: products.id,
		productName: products.name,
		productSku: products.sku,
		stock: products.stock,
		threshold: products.lowStockThreshold,
		shopName: shops.name,
		shopSlug: shops.slug
	}).from(products).innerJoin(shops, eq(shops.id, products.shopId)).where(and(eq(products.isActive, true), eq(products.trackInventory, true), sql`${products.stock} <= ${products.lowStockThreshold}`)).orderBy(products.stock).limit(10)).map((r) => ({
		id: r.productId,
		name: r.productName,
		sku: r.productSku,
		stock: r.stock || 0,
		threshold: r.threshold || 5,
		shopName: r.shopName,
		shopSlug: r.shopSlug
	}));
});
var getRecentOrders_createServerFn_handler = createServerRpc({
	id: "078888761aebb8cba0749e67c2bd3e9d16312a0ac93a953284b4b9e38b8f2ac8",
	name: "getRecentOrders",
	filename: "src/lib/functions/admin/dashboard.ts"
}, (opts) => getRecentOrders.__executeServer(opts));
var getRecentOrders = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(getRecentOrders_createServerFn_handler, async () => {
	return (await db.query.orders.findMany({
		with: {
			shop: { columns: { name: true } },
			user: { columns: {
				name: true,
				email: true
			} }
		},
		orderBy: [desc(orders.createdAt)],
		limit: 10
	})).map((order) => ({
		id: order.id,
		orderNumber: order.orderNumber,
		customerName: order.user?.name || null,
		customerEmail: order.user?.email || order.guestEmail || "Unknown",
		shopName: order.shop?.name || "Unknown",
		status: order.status,
		paymentStatus: order.paymentStatus,
		totalAmount: parseFloat(order.totalAmount),
		createdAt: order.createdAt.toISOString()
	}));
});
var getPendingReviews_createServerFn_handler = createServerRpc({
	id: "8fcad830bf5d4689a81ffe1fa93efbf4907aca5d91bd0df9572220963a821fbb",
	name: "getPendingReviews",
	filename: "src/lib/functions/admin/dashboard.ts"
}, (opts) => getPendingReviews.__executeServer(opts));
var getPendingReviews = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(getPendingReviews_createServerFn_handler, async () => {
	return (await db.query.productReviews.findMany({
		where: eq(productReviews.status, "pending"),
		with: {
			product: { columns: { name: true } },
			user: { columns: { name: true } }
		},
		orderBy: [desc(productReviews.createdAt)],
		limit: 10
	})).map((review) => ({
		id: review.id,
		productName: review.product?.name || "Unknown Product",
		customerName: review.user?.name || "Unknown",
		rating: review.rating,
		title: review.title,
		createdAt: review.createdAt.toISOString()
	}));
});
var getCustomerGrowthData_createServerFn_handler = createServerRpc({
	id: "eccfb08ae0cc5b808e80f8fcc69765cbb57652bb503d2abdae50e6920e5238b8",
	name: "getCustomerGrowthData",
	filename: "src/lib/functions/admin/dashboard.ts"
}, (opts) => getCustomerGrowthData.__executeServer(opts));
var getCustomerGrowthData = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(chartDataSchema).handler(getCustomerGrowthData_createServerFn_handler, async ({ data }) => {
	const { days } = data;
	const startDate = getDaysAgo(days);
	const result = await db.select({
		date: sql`DATE(${user.createdAt})`,
		count: count()
	}).from(user).where(gte(user.createdAt, startDate)).groupBy(sql`DATE(${user.createdAt})`).orderBy(sql`DATE(${user.createdAt})`);
	const chartData = [];
	const dateMap = new Map(result.map((r) => [r.date, r.count]));
	let cumulative = 0;
	for (let i = days - 1; i >= 0; i--) {
		const date = /* @__PURE__ */ new Date();
		date.setDate(date.getDate() - i);
		const dateStr = date.toISOString().split("T")[0];
		const newUsers = dateMap.get(dateStr) || 0;
		cumulative += newUsers;
		chartData.push({
			date: dateStr,
			newUsers,
			cumulativeUsers: cumulative
		});
	}
	return chartData;
});
var getPlatformHealth_createServerFn_handler = createServerRpc({
	id: "af51e0f1a1095fc565c471e2d032d9754058d121b5f9a51f996b5fa520ecf34f",
	name: "getPlatformHealth",
	filename: "src/lib/functions/admin/dashboard.ts"
}, (opts) => getPlatformHealth.__executeServer(opts));
var getPlatformHealth = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(getPlatformHealth_createServerFn_handler, async () => {
	const [vendorStats, shopStats] = await Promise.all([db.select({
		total: count(),
		stripeConnected: sql`SUM(CASE WHEN ${vendors.stripeChargesEnabled} = true THEN 1 ELSE 0 END)`,
		pendingOnboarding: sql`SUM(CASE WHEN ${vendors.stripeOnboardingComplete} = false THEN 1 ELSE 0 END)`,
		active: sql`SUM(CASE WHEN ${vendors.status} = 'active' THEN 1 ELSE 0 END)`,
		pendingApproval: sql`SUM(CASE WHEN ${vendors.status} = 'pending_approval' THEN 1 ELSE 0 END)`
	}).from(vendors), db.select({
		total: count(),
		active: sql`SUM(CASE WHEN ${shops.status} = 'active' THEN 1 ELSE 0 END)`,
		pending: sql`SUM(CASE WHEN ${shops.status} = 'pending' THEN 1 ELSE 0 END)`,
		suspended: sql`SUM(CASE WHEN ${shops.status} = 'suspended' THEN 1 ELSE 0 END)`
	}).from(shops)]);
	return {
		vendors: {
			total: vendorStats[0]?.total || 0,
			stripeConnected: Number(vendorStats[0]?.stripeConnected) || 0,
			pendingOnboarding: Number(vendorStats[0]?.pendingOnboarding) || 0,
			active: Number(vendorStats[0]?.active) || 0,
			pendingApproval: Number(vendorStats[0]?.pendingApproval) || 0
		},
		shops: {
			total: shopStats[0]?.total || 0,
			active: Number(shopStats[0]?.active) || 0,
			pending: Number(shopStats[0]?.pending) || 0,
			suspended: Number(shopStats[0]?.suspended) || 0
		}
	};
});
//#endregion
export { getCustomerGrowthData_createServerFn_handler, getDashboardStats_createServerFn_handler, getLowStockProducts_createServerFn_handler, getOrderDistribution_createServerFn_handler, getPendingReviews_createServerFn_handler, getPlatformHealth_createServerFn_handler, getRecentOrders_createServerFn_handler, getRevenueChartData_createServerFn_handler, getTopProducts_createServerFn_handler, getTopShops_createServerFn_handler };
