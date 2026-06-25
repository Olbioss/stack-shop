import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as Skeleton } from "./skeleton-CLsJI6lr.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as createServerFn } from "./ssr.mjs";
import { an as number, on as object } from "../_libs/@better-auth/core+[...].mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { B as Package, Ct as Clock, D as Settings, Dt as CircleCheckBig, E as ShieldAlert, Gt as ArrowUp, St as CreditCard, W as MessageSquare, Yt as ArrowDown, c as TriangleAlert, g as Star, h as Store, l as TrendingUp, p as Tag, r as Users, vt as ExternalLink, x as ShoppingBag, xt as DollarSign } from "../_libs/lucide-react.mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar$1 } from "./avatar-BfSlRT72.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, r as CardDescription, t as Card } from "./card-BDvQuHpQ.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { t as adminMiddleware } from "./admin-CYCFP3zk.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-D-104eYZ.mjs";
import { t as Progress$1 } from "./progress-ClMoOgm6.mjs";
import { a as XAxis, c as CartesianGrid, d as Tooltip, i as YAxis, l as Pie, n as PieChart, s as Area, t as AreaChart, u as Cell } from "../_libs/recharts+[...].mjs";
import { n as ChartTooltip, r as ChartTooltipContent, t as ChartContainer } from "./chart-BMDEcWkq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CkFmfVab.js
var import_jsx_runtime = require_jsx_runtime();
function LowStockAlert({ products, isLoading = false }) {
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-5 text-amber-500" }), "Low Stock Alerts"]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Products needing restocking" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-12 w-full" }, i))
	}) })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
		className: "flex flex-row items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-5 text-amber-500" }),
				"Low Stock Alerts",
				products.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					className: "ml-2",
					children: products.length
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Products needing restocking" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/admin/products",
			className: "flex items-center gap-1 text-muted-foreground text-sm hover:text-foreground",
			children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-4 text-center text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "All products are well stocked! 🎉" })
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: products.slice(0, 5).map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between rounded-lg border p-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0 flex-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate font-medium",
					title: product.name,
					children: product.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground text-xs",
					children: [product.sku && `SKU: ${product.sku} • `, product.shopName]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-4 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: product.stock === 0 ? "destructive" : "outline",
					className: "tabular-nums",
					children: [
						product.stock,
						" / ",
						product.threshold
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop/$slug/products",
					params: { slug: product.shopSlug },
					className: "text-muted-foreground text-sm hover:text-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" })
				})]
			})]
		}, product.id))
	}) })] });
}
var STATUS_COLORS = {
	pending: "#f59e0b",
	confirmed: "#3b82f6",
	processing: "#8b5cf6",
	shipped: "#06b6d4",
	delivered: "#22c55e",
	cancelled: "#ef4444",
	refunded: "#6b7280"
};
var STATUS_LABELS = {
	pending: "Pending",
	confirmed: "Confirmed",
	processing: "Processing",
	shipped: "Shipped",
	delivered: "Delivered",
	cancelled: "Cancelled",
	refunded: "Refunded"
};
var chartConfig$1 = { count: { label: "Orders" } };
function OrderStatusChart({ data, isLoading = false }) {
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "col-span-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Order Status" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mx-auto size-50 rounded-full" }) })]
	});
	const totalOrders = data.reduce((sum, d) => sum + d.count, 0);
	const chartData = data.map((d) => ({
		...d,
		label: STATUS_LABELS[d.status] || d.status,
		fill: STATUS_COLORS[d.status] || "#6b7280"
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "col-span-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Order Status Distribution" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "text-muted-foreground text-sm",
			children: [
				"Total: ",
				totalOrders.toLocaleString(),
				" orders"
			]
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
				config: chartConfig$1,
				className: "mx-auto h-50 w-full max-w-50",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
					data: chartData,
					cx: "50%",
					cy: "50%",
					innerRadius: 50,
					outerRadius: 80,
					paddingAngle: 2,
					dataKey: "count",
					nameKey: "label",
					shape: true,
					children: chartData.map((entry, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: entry.fill }, `cell-${index}`))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { content: ({ active, payload }) => {
					if (active && payload && payload.length) {
						const data = payload[0].payload;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border bg-background p-2 shadow-md",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: data.label
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground text-sm",
								children: [
									data.count,
									" orders (",
									data.percentage.toFixed(1),
									"%)"
								]
							})]
						});
					}
					return null;
				} })] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-2 text-sm",
				children: chartData.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "size-3 rounded-full",
							style: { backgroundColor: item.fill }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: item.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-auto font-medium",
							children: item.count
						})
					]
				}, item.status))
			})]
		}) })]
	});
}
function PendingReviewsList({ reviews, isLoading = false }) {
	const formatDate = (dateStr) => {
		return new Date(dateStr).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric"
		});
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-5 text-blue-500" }), "Pending Reviews"]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Reviews awaiting moderation" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: Array.from({ length: 3 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-16 w-full" }, i))
	}) })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
		className: "flex flex-row items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardTitle, {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageSquare, { className: "size-5 text-blue-500" }),
				"Pending Reviews",
				reviews.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "secondary",
					className: "ml-2",
					children: reviews.length
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Reviews awaiting moderation" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/admin/reviews",
			className: "flex items-center gap-1 text-muted-foreground text-sm hover:text-foreground",
			children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: reviews.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-4 text-center text-muted-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "No pending reviews! 🎉" })
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: reviews.slice(0, 5).map((review) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "rounded-lg border p-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex items-center gap-1",
						children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: `size-3 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground"}` }, i))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground text-xs",
						children: formatDate(review.createdAt)
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-medium",
					children: review.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-muted-foreground text-sm",
					children: [
						review.productName,
						" • by ",
						review.customerName
					]
				})
			]
		}, review.id))
	}) })] });
}
function PlatformHealthCard({ data, isLoading = false }) {
	if (isLoading || !data) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Platform Health" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-20 w-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-20 w-full" })]
	}) })] });
	const vendorConnectedPercent = data.vendors.total > 0 ? data.vendors.stripeConnected / data.vendors.total * 100 : 0;
	const shopActivePercent = data.shops.total > 0 ? data.shops.active / data.shops.total * 100 : 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Platform Health" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-4 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Vendors"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-auto text-muted-foreground text-sm",
							children: [data.vendors.total, " total"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CreditCard, { className: "size-3 text-green-500" }), "Stripe Connected"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							data.vendors.stripeConnected,
							" (",
							vendorConnectedPercent.toFixed(0),
							"%)"
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress$1, {
						value: vendorConnectedPercent,
						className: "h-1.5"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-md bg-muted/50 p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "size-3 text-green-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Active: ", data.vendors.active] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-md bg-muted/50 p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Pending: ", data.vendors.pendingApproval] })]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "size-4 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: "Shops"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "ml-auto text-muted-foreground text-sm",
							children: [data.shops.total, " total"]
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheckBig, { className: "size-3 text-green-500" }), "Active Shops"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
							data.shops.active,
							" (",
							shopActivePercent.toFixed(0),
							"%)"
						] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress$1, {
						value: shopActivePercent,
						className: "h-1.5"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-2 gap-2 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-md bg-muted/50 p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3 text-amber-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Pending: ", data.shops.pending] })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-md bg-muted/50 p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldAlert, { className: "size-3 text-red-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Suspended: ", data.shops.suspended] })]
					})]
				})
			]
		})]
	})] });
}
var quickActions = [
	{
		label: "View Orders",
		icon: ShoppingBag,
		href: "/admin/orders",
		variant: "default"
	},
	{
		label: "Manage Shops",
		icon: Store,
		href: "/admin/tenants",
		variant: "outline"
	},
	{
		label: "View Products",
		icon: Package,
		href: "/admin/products",
		variant: "outline"
	},
	{
		label: "Manage Users",
		icon: Users,
		href: "/admin/customers",
		variant: "outline"
	},
	{
		label: "Coupons",
		icon: Tag,
		href: "/admin/coupons",
		variant: "outline"
	},
	{
		label: "Settings",
		icon: Settings,
		href: "/admin/settings",
		variant: "outline"
	}
];
function QuickActionsPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Quick Actions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Common tasks and shortcuts" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-2 gap-2 sm:grid-cols-3",
		children: quickActions.map((action) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
			variant: action.variant || "outline",
			className: "h-auto flex-col gap-2 py-4",
			asChild: true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: action.href,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(action.icon, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs",
					children: action.label
				})]
			})
		}, action.href))
	}) })] });
}
var STATUS_VARIANTS = {
	pending: "outline",
	confirmed: "secondary",
	processing: "secondary",
	shipped: "default",
	delivered: "default",
	cancelled: "destructive",
	refunded: "destructive"
};
var PAYMENT_VARIANTS = {
	pending: "outline",
	paid: "default",
	failed: "destructive",
	refunded: "secondary"
};
function RecentOrdersTable({ orders, isLoading = false }) {
	const formatCurrency = (value) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD"
		}).format(value);
	};
	const formatDate = (dateStr) => {
		return new Date(dateStr).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric",
			hour: "2-digit",
			minute: "2-digit"
		});
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Recent Orders" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Latest orders across the platform" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-12 w-full" }, i))
	}) })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
		className: "flex flex-row items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Recent Orders" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Latest orders across the platform" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/admin/orders",
			className: "flex items-center gap-1 text-muted-foreground text-sm hover:text-foreground",
			children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Order" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Customer" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Shop" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
			className: "text-right",
			children: "Amount"
		})
	] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
		colSpan: 5,
		className: "py-8 text-center text-muted-foreground",
		children: "No orders yet"
	}) }) : orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/admin/orders/$orderId",
			params: { orderId: order.id },
			className: "font-medium hover:underline",
			children: order.orderNumber
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground text-xs",
			children: formatDate(order.createdAt)
		})] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-medium",
			children: order.customerName || "Guest"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground text-xs",
			children: order.customerEmail
		})] }) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
			className: "text-muted-foreground",
			children: order.shopName
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: STATUS_VARIANTS[order.status] || "outline",
				className: "w-fit capitalize",
				children: order.status
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: PAYMENT_VARIANTS[order.paymentStatus] || "outline",
				className: "w-fit capitalize",
				children: order.paymentStatus
			})]
		}) }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
			className: "text-right font-medium",
			children: formatCurrency(order.totalAmount)
		})
	] }, order.id)) })] }) })] });
}
var chartConfig = {
	revenue: {
		label: "Revenue",
		theme: {
			light: "#2563eb",
			dark: "#3b82f6"
		}
	},
	orders: {
		label: "Orders",
		theme: {
			light: "#64748b",
			dark: "#94a3b8"
		}
	}
};
function RevenueChart({ data, isLoading = false }) {
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "col-span-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Revenue Overview" }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-75 w-full" }) })]
	});
	const formatCurrency = (value) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(value);
	};
	const formatDate = (dateStr) => {
		return new Date(dateStr).toLocaleDateString("en-US", {
			month: "short",
			day: "numeric"
		});
	};
	const totalRevenue = data.reduce((sum, d) => sum + d.revenue, 0);
	const totalOrders = data.reduce((sum, d) => sum + d.orders, 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "col-span-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardHeader, {
			className: "flex flex-row items-center justify-between",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Revenue Overview" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-muted-foreground text-sm",
				children: [
					"Last 30 days: ",
					formatCurrency(totalRevenue),
					" from ",
					totalOrders,
					" ",
					"orders"
				]
			})] })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartContainer, {
			config: chartConfig,
			className: "h-75 w-full",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
				data,
				margin: {
					top: 10,
					right: 10,
					left: 0,
					bottom: 0
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
						id: "colorRevenue",
						x1: "0",
						y1: "0",
						x2: "0",
						y2: "1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "5%",
							stopColor: "var(--color-revenue)",
							stopOpacity: .4
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
							offset: "95%",
							stopColor: "var(--color-revenue)",
							stopOpacity: .05
						})]
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
						strokeDasharray: "3 3",
						className: "stroke-muted"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
						dataKey: "date",
						tickFormatter: formatDate,
						tick: { fontSize: 12 },
						tickLine: false,
						axisLine: false,
						interval: "preserveStartEnd"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
						tickFormatter: (value) => `$${(value / 1e3).toFixed(0)}k`,
						tick: { fontSize: 12 },
						tickLine: false,
						axisLine: false,
						width: 60
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltip, { content: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartTooltipContent, {
						formatter: (value, name) => {
							if (name === "revenue") return formatCurrency(value);
							return value;
						},
						labelFormatter: (label) => formatDate(label)
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
						type: "monotone",
						dataKey: "revenue",
						stroke: "var(--color-revenue)",
						strokeWidth: 2,
						fill: "url(#colorRevenue)"
					})
				]
			})
		}) })]
	});
}
function StatsCard({ title, value, change, changeLabel, icon: Icon, isLoading = false, format = "number" }) {
	const formatValue = (val) => {
		if (typeof val === "string") return val;
		switch (format) {
			case "currency": return new Intl.NumberFormat("en-US", {
				style: "currency",
				currency: "USD",
				minimumFractionDigits: 0,
				maximumFractionDigits: 0
			}).format(val);
			case "percentage": return `${val.toFixed(1)}%`;
			default: return new Intl.NumberFormat("en-US").format(val);
		}
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
		className: "flex flex-row items-center justify-between space-y-0 pb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-24" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "size-4" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "mb-1 h-8 w-20" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-32" })] })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
		className: "flex flex-row items-center justify-between space-y-0 pb-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
			className: "font-medium text-sm",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-muted-foreground" })]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "font-bold text-2xl",
		children: formatValue(value)
	}), (change !== void 0 || changeLabel) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex items-center gap-1 text-muted-foreground text-xs",
		children: [change !== void 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [change >= 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-3 text-green-500" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-3 text-red-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: cn("font-medium", change >= 0 ? "text-green-500" : "text-red-500"),
			children: [Math.abs(change).toFixed(1), "%"]
		})] }), changeLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: changeLabel })]
	})] })] });
}
function TopProductsList({ products, isLoading = false }) {
	const formatCurrency = (value) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(value);
	};
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Top Selling Products" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Best sellers by quantity" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "size-10 rounded" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-32" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-20" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-16" })
			]
		}, i))
	}) })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
		className: "flex flex-row items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Top Selling Products" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Best sellers by quantity" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/admin/products",
			className: "flex items-center gap-1 text-muted-foreground text-sm hover:text-foreground",
			children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: products.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-8 text-center text-muted-foreground",
		children: "No product sales yet"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3",
		children: products.slice(0, 5).map((product, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-4 font-bold text-muted-foreground text-sm",
					children: index + 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
					className: "size-10 rounded border",
					children: [product.image ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
						src: product.image,
						alt: product.name
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
						className: "rounded",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "size-4" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "truncate font-medium",
						title: product.name,
						children: product.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground text-xs",
						children: ["by ", product.shopName]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "font-medium",
						children: [product.totalSold, " sold"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: formatCurrency(product.revenue)
					})]
				})
			]
		}, product.id))
	}) })] });
}
function TopShopsList({ shops, isLoading = false }) {
	const formatCurrency = (value) => {
		return new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(value);
	};
	const maxRevenue = Math.max(...shops.map((s) => s.revenue), 1);
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Top Performing Shops" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Shops ranked by revenue" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "size-10 rounded-full" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex-1 space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-32" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-2 w-full" })]
			})]
		}, i))
	}) })] });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
		className: "flex flex-row items-center justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, { children: "Top Performing Shops" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardDescription, { children: "Shops ranked by revenue" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/admin/tenants",
			className: "flex items-center gap-1 text-muted-foreground text-sm hover:text-foreground",
			children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" })]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, { children: shops.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "py-8 text-center text-muted-foreground",
		children: "No shops with revenue yet"
	}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-4",
		children: shops.map((shop, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-4 font-bold text-muted-foreground text-sm",
					children: index + 1
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
					className: "border",
					children: [shop.logo ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
						src: shop.logo,
						alt: shop.name
					}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Store, { className: "size-4" }) })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex-1 space-y-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/admin/tenants/$tenantId",
								params: { tenantId: shop.id },
								className: "font-medium hover:underline",
								children: shop.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-bold text-sm",
								children: formatCurrency(shop.revenue)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress$1, {
							value: shop.revenue / maxRevenue * 100,
							className: "h-1.5"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-4 text-muted-foreground text-xs",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [shop.orderCount, " orders"] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [shop.productCount, " products"] })]
						})
					]
				})
			]
		}, shop.id))
	}) })] });
}
/**
* Admin Dashboard Server Functions
*
* Server functions for the admin dashboard analytics.
* Provides comprehensive platform-wide metrics and insights.
*/
var getDashboardStats = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(createSsrRpc("8dbc4d5ef5657e6cdfd0867d009137e8c2a7b34ff8b126630ee23aae7676bd61"));
var chartDataSchema = object({ days: number().min(7).max(90).optional().default(30) });
var getRevenueChartData = createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(chartDataSchema).handler(createSsrRpc("7b02acfa632e9c148016db4de617944906834b9d86f87b400ac90ee17b169d37"));
var getOrderDistribution = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(createSsrRpc("b7a179327e050011fd6d28a67935e25af58b73fcb1377f9e197801f0e5437983"));
var getTopShops = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(createSsrRpc("403be1d07ba7e1039c8907b6e884cc6d4a7994abfd0635063671bf277307bb85"));
var getTopProducts = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(createSsrRpc("5e5ce2dd0fb9d31347e39830280e97be01ea1d73b17c398b4be6af9d39286f6b"));
var getLowStockProducts = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(createSsrRpc("8484a23c1080d70879c2c2ac7b875b909bed3c79fae0da6c8d90fbe85c035234"));
var getRecentOrders = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(createSsrRpc("078888761aebb8cba0749e67c2bd3e9d16312a0ac93a953284b4b9e38b8f2ac8"));
var getPendingReviews = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(createSsrRpc("8fcad830bf5d4689a81ffe1fa93efbf4907aca5d91bd0df9572220963a821fbb"));
createServerFn({ method: "GET" }).middleware([adminMiddleware]).inputValidator(chartDataSchema).handler(createSsrRpc("eccfb08ae0cc5b808e80f8fcc69765cbb57652bb503d2abdae50e6920e5238b8"));
var getPlatformHealth = createServerFn({ method: "GET" }).middleware([adminMiddleware]).handler(createSsrRpc("af51e0f1a1095fc565c471e2d032d9754058d121b5f9a51f996b5fa520ecf34f"));
/**
* Admin Dashboard Hooks
*
* React Query hooks for admin dashboard analytics.
*/
var adminDashboardKeys = {
	all: ["admin-dashboard"],
	stats: () => [...adminDashboardKeys.all, "stats"],
	revenueChart: (days) => [
		...adminDashboardKeys.all,
		"revenue-chart",
		days
	],
	orderDistribution: () => [...adminDashboardKeys.all, "order-distribution"],
	topShops: () => [...adminDashboardKeys.all, "top-shops"],
	topProducts: () => [...adminDashboardKeys.all, "top-products"],
	lowStock: () => [...adminDashboardKeys.all, "low-stock"],
	recentOrders: () => [...adminDashboardKeys.all, "recent-orders"],
	pendingReviews: () => [...adminDashboardKeys.all, "pending-reviews"],
	customerGrowth: (days) => [
		...adminDashboardKeys.all,
		"customer-growth",
		days
	],
	platformHealth: () => [...adminDashboardKeys.all, "platform-health"]
};
/**
* Hook to fetch main dashboard statistics
*/
function useAdminDashboardStats() {
	return useQuery({
		queryKey: adminDashboardKeys.stats(),
		queryFn: async () => {
			return await getDashboardStats();
		},
		staleTime: 3e4
	});
}
/**
* Hook to fetch revenue chart data
*/
function useRevenueChartData(days = 30) {
	return useQuery({
		queryKey: adminDashboardKeys.revenueChart(days),
		queryFn: async () => {
			return await getRevenueChartData({ data: { days } });
		},
		staleTime: 6e4
	});
}
/**
* Hook to fetch order status distribution
*/
function useOrderDistribution() {
	return useQuery({
		queryKey: adminDashboardKeys.orderDistribution(),
		queryFn: async () => {
			return await getOrderDistribution();
		},
		staleTime: 6e4
	});
}
/**
* Hook to fetch top performing shops
*/
function useTopShops() {
	return useQuery({
		queryKey: adminDashboardKeys.topShops(),
		queryFn: async () => {
			return await getTopShops();
		},
		staleTime: 6e4
	});
}
/**
* Hook to fetch top selling products
*/
function useTopProducts() {
	return useQuery({
		queryKey: adminDashboardKeys.topProducts(),
		queryFn: async () => {
			return await getTopProducts();
		},
		staleTime: 6e4
	});
}
/**
* Hook to fetch low stock product alerts
*/
function useLowStockAlerts() {
	return useQuery({
		queryKey: adminDashboardKeys.lowStock(),
		queryFn: async () => {
			return await getLowStockProducts();
		},
		staleTime: 6e4
	});
}
/**
* Hook to fetch recent orders
*/
function useRecentOrders() {
	return useQuery({
		queryKey: adminDashboardKeys.recentOrders(),
		queryFn: async () => {
			return await getRecentOrders();
		},
		staleTime: 3e4
	});
}
/**
* Hook to fetch pending reviews for moderation
*/
function usePendingReviews() {
	return useQuery({
		queryKey: adminDashboardKeys.pendingReviews(),
		queryFn: async () => {
			return await getPendingReviews();
		},
		staleTime: 3e4
	});
}
/**
* Hook to fetch platform health status
*/
function usePlatformHealth() {
	return useQuery({
		queryKey: adminDashboardKeys.platformHealth(),
		queryFn: async () => {
			return await getPlatformHealth();
		},
		staleTime: 6e4
	});
}
function AdminDashboardTemplate() {
	const { data: stats, isLoading: statsLoading } = useAdminDashboardStats();
	const { data: revenueData, isLoading: revenueLoading } = useRevenueChartData();
	const { data: orderDistribution, isLoading: orderDistLoading } = useOrderDistribution();
	const { data: topShops, isLoading: topShopsLoading } = useTopShops();
	const { data: topProducts, isLoading: topProductsLoading } = useTopProducts();
	const { data: lowStock, isLoading: lowStockLoading } = useLowStockAlerts();
	const { data: recentOrders, isLoading: recentOrdersLoading } = useRecentOrders();
	const { data: pendingReviews, isLoading: pendingReviewsLoading } = usePendingReviews();
	const { data: platformHealth, isLoading: platformHealthLoading } = usePlatformHealth();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-bold text-3xl tracking-tight",
					children: "Admin Dashboard"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground",
					children: "Platform-wide overview and analytics"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 text-muted-foreground text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Real-time data" })]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsCard, {
						title: "Total Revenue",
						value: stats?.totalRevenue || 0,
						change: stats?.revenueGrowth,
						changeLabel: "vs last month",
						icon: DollarSign,
						format: "currency",
						isLoading: statsLoading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsCard, {
						title: "Total Orders",
						value: stats?.totalOrders || 0,
						change: stats?.ordersGrowth,
						changeLabel: "vs last month",
						icon: ShoppingBag,
						isLoading: statsLoading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsCard, {
						title: "Total Users",
						value: stats?.totalUsers || 0,
						changeLabel: `+${stats?.newUsersToday || 0} today`,
						icon: Users,
						isLoading: statsLoading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsCard, {
						title: "Active Shops",
						value: stats?.activeShops || 0,
						changeLabel: `of ${stats?.totalShops || 0} total`,
						icon: Store,
						isLoading: statsLoading
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsCard, {
						title: "Today's Revenue",
						value: stats?.todayRevenue || 0,
						icon: DollarSign,
						format: "currency",
						isLoading: statsLoading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsCard, {
						title: "Today's Orders",
						value: stats?.todayOrders || 0,
						icon: ShoppingBag,
						isLoading: statsLoading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsCard, {
						title: "Platform Fees",
						value: stats?.platformFees || 0,
						icon: TrendingUp,
						format: "currency",
						isLoading: statsLoading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsCard, {
						title: "Total Products",
						value: stats?.totalProducts || 0,
						icon: Package,
						isLoading: statsLoading
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RevenueChart, {
					data: revenueData || [],
					isLoading: revenueLoading
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrderStatusChart, {
					data: orderDistribution || [],
					isLoading: orderDistLoading
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopShopsList, {
					shops: topShops || [],
					isLoading: topShopsLoading
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopProductsList, {
					products: topProducts || [],
					isLoading: topProductsLoading
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RecentOrdersTable, {
				orders: recentOrders || [],
				isLoading: recentOrdersLoading
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LowStockAlert, {
						products: lowStock || [],
						isLoading: lowStockLoading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PendingReviewsList, {
						reviews: pendingReviews || [],
						isLoading: pendingReviewsLoading
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlatformHealthCard, {
						data: platformHealth || null,
						isLoading: platformHealthLoading
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuickActionsPanel, {})
		]
	});
}
function RouteComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminDashboardTemplate, {});
}
//#endregion
export { RouteComponent as component };
