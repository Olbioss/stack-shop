import { o as __toESM } from "./_runtime.mjs";
import { Gt as string, Ht as object } from "./_libs/@better-auth/core+[...].mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { w as require_jsx_runtime } from "./_libs/@radix-ui/react-accordion+[...].mjs";
import { B as Package, it as Image, l as TrendingUp, r as Users, x as ShoppingBag, xt as DollarSign } from "./_libs/lucide-react.mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar$1 } from "./_ssr/avatar-BfSlRT72.mjs";
import { r as createServerFn } from "./_ssr/ssr.mjs";
import { t as createSsrRpc } from "./_ssr/createSsrRpc-CXFXGZZ3.mjs";
import { a as useSuspenseQuery, i as queryOptions } from "./_libs/tanstack__react-query.mjs";
import { t as authMiddleware } from "./_ssr/auth-BM1BErpv.mjs";
import { t as shopBySlugQueryOptions } from "./_ssr/use-shops-Cbmwju82.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./_ssr/card-BDvQuHpQ.mjs";
import { t as Badge } from "./_ssr/badge-NA1wPZ4a.mjs";
import { l as getStatusColor, n as formatPercentChange, r as formatRelativeTime, t as formatCurrency } from "./_ssr/dashboard-COukaLhv.mjs";
import { t as Route } from "./_slug-Cbine0wH.mjs";
import { a as XAxis, c as CartesianGrid, i as YAxis, o as Bar, r as BarChart } from "./_libs/recharts+[...].mjs";
import { n as ChartTooltip, r as ChartTooltipContent, t as ChartContainer } from "./_ssr/chart-BMDEcWkq.mjs";
import { t as StatsCard } from "./_ssr/stats-card-Bz2O5cPN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-BVY0DkZq.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CustomerInsights({ orders, className }) {
	const customers = (0, import_react.useMemo)(() => {
		const customerMap = /* @__PURE__ */ new Map();
		for (const order of orders) {
			const key = order.customerEmail;
			const existing = customerMap.get(key);
			if (existing) {
				existing.totalSpent += order.totalAmount;
				existing.orderCount += 1;
			} else customerMap.set(key, {
				name: order.customerName,
				email: order.customerEmail,
				totalSpent: order.totalAmount,
				orderCount: 1
			});
		}
		return Array.from(customerMap.values()).sort((a, b) => b.totalSpent - a.totalSpent);
	}, [orders]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Customer Insights" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: customers.length > 0 ? "Top customers from recent orders" : "No customer data yet" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: customers.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: customers.map((customer) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
							className: "size-9",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
								className: "text-xs",
								children: customer.name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1 min-w-0 space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-sm leading-none truncate",
								children: customer.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-xs truncate",
								children: customer.email
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-right space-y-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-sm",
								children: formatCurrency(customer.totalSpent)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground text-xs",
								children: [
									customer.orderCount,
									" ",
									customer.orderCount === 1 ? "order" : "orders"
								]
							})]
						})
					]
				}, customer.email);
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-50 flex-col items-center justify-center gap-2 text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: "Customer insights will appear here"
			})]
		}) })]
	});
}
function RecentOrders({ orders, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Recent Orders" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: orders.length > 0 ? `Your ${orders.length} most recent orders` : "No orders yet" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: orders.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: orders.map((order) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
						className: "size-9",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "text-xs",
							children: order.customerName.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2)
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-sm leading-none truncate",
								children: order.customerName
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-medium text-sm whitespace-nowrap",
								children: formatCurrency(order.totalAmount)
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-xs truncate",
								children: order.orderNumber
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "secondary",
									className: `text-[10px] px-1.5 py-0 ${getStatusColor(order.status)}`,
									children: order.status
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-muted-foreground text-[10px] whitespace-nowrap",
									children: formatRelativeTime(order.createdAt)
								})]
							})]
						})]
					})]
				}, order.id);
			})
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-50 flex-col items-center justify-center gap-2 text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: "No orders received yet"
			})]
		}) })]
	});
}
var chartConfig = { revenue: {
	label: "Revenue",
	color: "var(--chart-1)"
} };
function SalesOverview({ shopName, monthlySales, className }) {
	const hasData = monthlySales.some((m) => m.revenue > 0 || m.orders > 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Sales Overview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardDescription, { children: [
			"Monthly revenue for ",
			shopName,
			" over the last 6 months"
		] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
			className: "pl-2",
			children: hasData ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
				config: chartConfig,
				className: "h-75 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(BarChart, {
					accessibilityLayer: true,
					data: monthlySales,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, { vertical: false }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
							dataKey: "month",
							tickLine: false,
							tickMargin: 10,
							axisLine: false,
							fontSize: 12
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
							tickLine: false,
							axisLine: false,
							fontSize: 12,
							tickFormatter: (value) => `$${value}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, {
							cursor: false,
							content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, { formatter: (value) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium",
								children: ["$", Number(value).toLocaleString()]
							}) })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bar, {
							dataKey: "revenue",
							fill: "var(--color-revenue)",
							radius: [
								6,
								6,
								0,
								0
							]
						})
					]
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex h-75 items-center justify-center text-muted-foreground",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No sales data available yet. Orders will appear here once fulfilled." })
			})
		})]
	});
}
function TopProducts({ products, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Top Products" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: products.length > 0 ? "Your best selling products by quantity" : "No sales data yet" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: products.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "space-y-4",
			children: products.map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "w-5 text-center font-medium text-muted-foreground text-sm",
						children: index + 1
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
						className: "size-9 rounded-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
							src: product.image || void 0,
							alt: product.name,
							className: "object-cover"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
							className: "rounded-md",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, { className: "size-4 text-muted-foreground" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 min-w-0 space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-medium text-sm leading-none truncate",
							children: product.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted-foreground text-xs",
							children: [product.totalSold, " sold"]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-medium text-sm whitespace-nowrap",
						children: formatCurrency(product.revenue)
					})
				]
			}, product.id))
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-50 flex-col items-center justify-center gap-2 text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: "Sales data will appear here"
			})]
		}) })]
	});
}
function getTrend(current, previous) {
	if (current > previous) return "up";
	if (current < previous) return "down";
	return "neutral";
}
function ShopDashboardTemplate({ shopName, dashboardData }) {
	const { stats, recentOrders, topProducts, monthlySales } = dashboardData;
	const revenueChange = formatPercentChange(stats.monthlyRevenue, stats.previousMonthRevenue);
	const ordersChange = formatPercentChange(stats.totalOrders, stats.previousMonthOrders);
	const conversionChange = formatPercentChange(stats.conversionRate, stats.previousConversionRate);
	const shopStats = [
		{
			title: "Monthly Revenue",
			value: formatCurrency(stats.monthlyRevenue),
			change: revenueChange,
			icon: DollarSign,
			trend: getTrend(stats.monthlyRevenue, stats.previousMonthRevenue)
		},
		{
			title: "Total Products",
			value: stats.totalProducts.toLocaleString(),
			change: `+${stats.newProductsThisMonth} new this month`,
			icon: Package,
			trend: stats.newProductsThisMonth > 0 ? "up" : "neutral"
		},
		{
			title: "Total Orders",
			value: stats.totalOrders.toLocaleString(),
			change: ordersChange,
			icon: ShoppingBag,
			trend: getTrend(stats.totalOrders, stats.previousMonthOrders)
		},
		{
			title: "Conversion Rate",
			value: `${stats.conversionRate}%`,
			change: conversionChange,
			icon: TrendingUp,
			trend: getTrend(stats.conversionRate, stats.previousConversionRate)
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-bold text-3xl tracking-tight",
				children: "Shop Overview"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground",
				children: "Monitor your shop's performance and key metrics"
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: shopStats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsCard, {
					title: stat.title,
					value: stat.value,
					change: stat.change,
					icon: stat.icon
				}, stat.title))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SalesOverview, {
					className: "col-span-4",
					shopName,
					monthlySales
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentOrders, {
					className: "col-span-3",
					orders: recentOrders
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopProducts, { products: topProducts }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomerInsights, { orders: recentOrders })]
			})
		]
	});
}
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
var getShopDashboardData = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getShopDashboardSchema).handler(createSsrRpc("00ddaffaf3588a784802330aaff1cbbb40ccdd60550166a3bbea5088d522bc23"));
/**
* Shop Dashboard Hook
*
* React Query hook for fetching aggregated shop dashboard data.
* Follows the queryOptions pattern for consistency with the codebase.
*/
var shopDashboardKeys = {
	all: ["vendor", "dashboard"],
	byShop: (shopId) => [...shopDashboardKeys.all, shopId]
};
var shopDashboardQueryOptions = (shopId, shopSlug) => queryOptions({
	queryKey: shopDashboardKeys.byShop(shopId),
	queryFn: () => getShopDashboardData({ data: {
		shopId,
		shopSlug
	} }),
	enabled: !!shopId && !!shopSlug,
	staleTime: 120 * 1e3
});
/**
* Hook to fetch aggregated shop dashboard data
*/
function useShopDashboard(shopId, shopSlug) {
	const { data, ...rest } = useSuspenseQuery(shopDashboardQueryOptions(shopId, shopSlug));
	return {
		data,
		...rest
	};
}
function RouteComponent() {
	const { slug } = Route.useParams();
	const { data: shopData } = useSuspenseQuery(shopBySlugQueryOptions(slug));
	const { data: dashboardData } = useShopDashboard(shopData?.shop?.id ?? "", slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopDashboardTemplate, {
		shopName: slug,
		dashboardData
	});
}
//#endregion
export { RouteComponent as component };
