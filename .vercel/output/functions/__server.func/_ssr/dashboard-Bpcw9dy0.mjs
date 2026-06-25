import { A as sql, a as and, f as inArray, i as desc, n as count, s as eq, u as gte } from "../_libs/@better-auth/drizzle-adapter+[...].mjs";
import { o as user } from "./shop-schema-C6uNILQs.mjs";
import { h as products, l as productImages } from "./products-schema-BRxXUpzG.mjs";
import { c as db, d as orderItems, f as orders } from "./db-DORSFQFR.mjs";
import { r as createServerFn } from "./ssr.mjs";
import { ln as string, on as object } from "../_libs/@better-auth/core+[...].mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { t as createServerRpc } from "./createServerRpc-D97cGqBD.mjs";
import { r as requireShopAccess } from "./vendor-S8D_d0RQ.mjs";
import { n as getShopIdsForOrderQuery } from "./order-helpers-CtFv1HPY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-Bpcw9dy0.js
/**
* Shop Dashboard Server Functions
*
* Aggregated analytics endpoint for the vendor shop dashboard.
* Fetches all dashboard data in a single call to minimize round-trips.
*/
var getShopDashboardSchema = object({
	shopId: string(),
	shopSlug: string()
});
var getShopDashboardData_createServerFn_handler = createServerRpc({
	id: "00ddaffaf3588a784802330aaff1cbbb40ccdd60550166a3bbea5088d522bc23",
	name: "getShopDashboardData",
	filename: "src/lib/functions/vendor/dashboard.ts"
}, (opts) => getShopDashboardData.__executeServer(opts));
var getShopDashboardData = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getShopDashboardSchema).handler(getShopDashboardData_createServerFn_handler, async ({ context, data }) => {
	const userId = context.session?.user?.id;
	if (!userId) throw new Error("Authentication required");
	const { shopId, shopSlug } = data;
	await requireShopAccess(userId, shopId);
	const shopIds = await getShopIdsForOrderQuery(userId, shopSlug);
	if (shopIds.length === 0) return {
		stats: {
			monthlyRevenue: 0,
			previousMonthRevenue: 0,
			totalProducts: 0,
			newProductsThisMonth: 0,
			totalOrders: 0,
			previousMonthOrders: 0,
			conversionRate: 0,
			previousConversionRate: 0
		},
		recentOrders: [],
		topProducts: [],
		monthlySales: []
	};
	const now = /* @__PURE__ */ new Date();
	const startOfCurrentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
	const startOfPreviousMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
	const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1);
	const [currentMonthRevenueResult, previousMonthRevenueResult, totalProductsResult, newProductsResult, currentMonthOrdersResult, previousMonthOrdersResult, recentOrdersResult, topProductsResult, monthlySalesResult] = await Promise.all([
		db.select({ revenue: sql`COALESCE(SUM(${orders.totalAmount}), 0)` }).from(orders).where(and(inArray(orders.shopId, shopIds), gte(orders.createdAt, startOfCurrentMonth), eq(orders.status, "delivered"))),
		db.select({ revenue: sql`COALESCE(SUM(${orders.totalAmount}), 0)` }).from(orders).where(and(inArray(orders.shopId, shopIds), gte(orders.createdAt, startOfPreviousMonth), sql`${orders.createdAt} < ${startOfCurrentMonth}`, eq(orders.status, "delivered"))),
		db.select({ count: count() }).from(products).where(eq(products.shopId, shopId)),
		db.select({ count: count() }).from(products).where(and(eq(products.shopId, shopId), gte(products.createdAt, startOfCurrentMonth))),
		db.select({ count: count() }).from(orders).where(and(inArray(orders.shopId, shopIds), gte(orders.createdAt, startOfCurrentMonth))),
		db.select({ count: count() }).from(orders).where(and(inArray(orders.shopId, shopIds), gte(orders.createdAt, startOfPreviousMonth), sql`${orders.createdAt} < ${startOfCurrentMonth}`)),
		db.select({
			id: orders.id,
			orderNumber: orders.orderNumber,
			totalAmount: orders.totalAmount,
			status: orders.status,
			createdAt: orders.createdAt,
			customerName: user.name,
			customerEmail: user.email,
			guestEmail: orders.guestEmail
		}).from(orders).leftJoin(user, eq(orders.userId, user.id)).where(inArray(orders.shopId, shopIds)).orderBy(desc(orders.createdAt)).limit(5),
		db.select({
			id: products.id,
			name: products.name,
			totalSold: sql`COALESCE(SUM(${orderItems.quantity}), 0)`,
			revenue: sql`COALESCE(SUM(${orderItems.totalPrice}), 0)`
		}).from(orderItems).innerJoin(orders, eq(orderItems.orderId, orders.id)).innerJoin(products, eq(orderItems.productId, products.id)).where(inArray(orders.shopId, shopIds)).groupBy(products.id, products.name).orderBy(sql`SUM(${orderItems.quantity}) DESC`).limit(5),
		db.select({
			month: sql`TO_CHAR(${orders.createdAt}, 'YYYY-MM')`,
			revenue: sql`COALESCE(SUM(${orders.totalAmount}), 0)`,
			orders: count()
		}).from(orders).where(and(inArray(orders.shopId, shopIds), gte(orders.createdAt, sixMonthsAgo))).groupBy(sql`TO_CHAR(${orders.createdAt}, 'YYYY-MM')`).orderBy(sql`TO_CHAR(${orders.createdAt}, 'YYYY-MM') ASC`)
	]);
	const monthlyRevenue = parseFloat(currentMonthRevenueResult[0]?.revenue || "0");
	const previousMonthRevenue = parseFloat(previousMonthRevenueResult[0]?.revenue || "0");
	const totalProducts = totalProductsResult[0]?.count || 0;
	const newProductsThisMonth = newProductsResult[0]?.count || 0;
	const totalOrders = currentMonthOrdersResult[0]?.count || 0;
	const previousMonthOrders = previousMonthOrdersResult[0]?.count || 0;
	const conversionRate = totalProducts > 0 ? Math.round(totalOrders / totalProducts * 100 * 10) / 10 : 0;
	const previousConversionRate = totalProducts > 0 ? Math.round(previousMonthOrders / totalProducts * 100 * 10) / 10 : 0;
	const recentOrders = recentOrdersResult.map((order) => ({
		id: order.id,
		orderNumber: order.orderNumber,
		customerName: order.customerName || "Guest",
		customerEmail: order.guestEmail || order.customerEmail || "N/A",
		totalAmount: parseFloat(order.totalAmount),
		status: order.status,
		createdAt: order.createdAt.toISOString()
	}));
	const topProductIds = topProductsResult.map((p) => p.id);
	const productImagesMap = /* @__PURE__ */ new Map();
	if (topProductIds.length > 0) {
		const images = await db.select({
			productId: productImages.productId,
			url: productImages.url
		}).from(productImages).where(and(inArray(productImages.productId, topProductIds), eq(productImages.isPrimary, true)));
		for (const img of images) productImagesMap.set(img.productId, img.url);
	}
	const topProducts = topProductsResult.map((product) => ({
		id: product.id,
		name: product.name,
		image: productImagesMap.get(product.id) || null,
		totalSold: Number(product.totalSold),
		revenue: parseFloat(product.revenue)
	}));
	const monthlyMap = /* @__PURE__ */ new Map();
	for (const row of monthlySalesResult) monthlyMap.set(row.month, {
		revenue: parseFloat(row.revenue),
		orders: row.orders
	});
	const monthlySales = [];
	for (let i = 5; i >= 0; i--) {
		const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
		const key = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
		const data = monthlyMap.get(key) || {
			revenue: 0,
			orders: 0
		};
		monthlySales.push({
			month: date.toLocaleDateString("en-US", {
				month: "short",
				year: "numeric"
			}),
			...data
		});
	}
	return {
		stats: {
			monthlyRevenue,
			previousMonthRevenue,
			totalProducts,
			newProductsThisMonth,
			totalOrders,
			previousMonthOrders,
			conversionRate,
			previousConversionRate
		},
		recentOrders,
		topProducts,
		monthlySales
	};
});
//#endregion
export { getShopDashboardData_createServerFn_handler };
