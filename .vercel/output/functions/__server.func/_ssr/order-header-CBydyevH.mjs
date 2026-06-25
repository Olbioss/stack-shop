import { n as formatCurrency } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { bt as Download, gt as Eye, yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuLabel, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { n as PageHeader } from "./page-header-DLbA-yB-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-header-CBydyevH.js
var import_jsx_runtime = require_jsx_runtime();
var ORDER_STATUS_OPTIONS = [
	{
		label: "Pending",
		value: "pending"
	},
	{
		label: "Confirmed",
		value: "confirmed"
	},
	{
		label: "Processing",
		value: "processing"
	},
	{
		label: "Shipped",
		value: "shipped"
	},
	{
		label: "Delivered",
		value: "delivered"
	},
	{
		label: "Cancelled",
		value: "cancelled"
	},
	{
		label: "Refunded",
		value: "refunded"
	}
];
var PAYMENT_STATUS_OPTIONS = [
	{
		label: "Paid",
		value: "paid"
	},
	{
		label: "Unpaid",
		value: "unpaid"
	},
	{
		label: "Refunded",
		value: "refunded"
	}
];
var getSharedOrderFilters = () => {
	return [{
		id: "status",
		label: "Order Status",
		type: "select",
		options: ORDER_STATUS_OPTIONS,
		placeholder: "Filter by status"
	}, {
		id: "paymentStatus",
		label: "Payment Status",
		type: "select",
		options: PAYMENT_STATUS_OPTIONS,
		placeholder: "Filter by payment"
	}];
};
/**
* Shared column definitions for vendor order tables
*/
var createOrderColumns = ({ shopSlug, isOrderMutating }) => {
	return [
		{
			accessorKey: "orderNumber",
			header: "Order",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-sm font-medium",
				children: row.getValue("orderNumber")
			}),
			enableSorting: true
		},
		{
			accessorKey: "customer",
			header: "Customer",
			cell: ({ row }) => {
				const customer = row.original.customer;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium",
					children: customer?.name ?? "Guest"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-muted-foreground text-xs",
					children: customer?.email ?? "No email"
				})] });
			},
			enableSorting: false
		},
		{
			accessorKey: "itemCount",
			header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center",
				children: "Items"
			}),
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center",
				children: row.getValue("itemCount")
			}),
			enableSorting: true
		},
		{
			accessorKey: "totalAmount",
			header: "Total",
			cell: ({ row }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium",
					children: formatCurrency(row.getValue("totalAmount"))
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }) => {
				const status = row.getValue("status");
				const config = {
					pending: {
						variant: "secondary",
						className: "",
						label: "Pending"
					},
					confirmed: {
						variant: "secondary",
						className: "",
						label: "Confirmed"
					},
					processing: {
						variant: "outline",
						className: "",
						label: "Processing"
					},
					shipped: {
						variant: "outline",
						className: "",
						label: "Shipped"
					},
					delivered: {
						variant: "default",
						className: "bg-green-500",
						label: "Delivered"
					},
					cancelled: {
						variant: "destructive",
						className: "",
						label: "Cancelled"
					},
					refunded: {
						variant: "destructive",
						className: "",
						label: "Refunded"
					}
				}[status] || {
					variant: "outline",
					className: "",
					label: status
				};
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: config.variant,
					className: config.className,
					children: config.label
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "paymentStatus",
			header: "Payment",
			cell: ({ row }) => {
				const status = row.getValue("paymentStatus");
				const config = {
					paid: {
						variant: "default",
						className: "bg-green-500",
						label: "Paid"
					},
					unpaid: {
						variant: "secondary",
						className: "",
						label: "Unpaid"
					},
					refunded: {
						variant: "outline",
						className: "",
						label: "Refunded"
					}
				}[status] || {
					variant: "outline",
					className: "",
					label: status
				};
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: config.variant,
					className: config.className,
					children: config.label
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "createdAt",
			header: "Date",
			cell: ({ row }) => {
				const date = row.getValue("createdAt");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-muted-foreground",
					children: new Date(date).toLocaleDateString("en-US", {
						year: "numeric",
						month: "short",
						day: "numeric",
						hour: "2-digit",
						minute: "2-digit"
					})
				});
			},
			enableSorting: true
		},
		{
			id: "actions",
			header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-right",
				children: "Actions"
			}),
			cell: ({ row }) => {
				const order = row.original;
				const isMutating = isOrderMutating?.(order.id) ?? false;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						disabled: isMutating,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							className: "h-8 w-8 p-0",
							disabled: isMutating,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Open menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Actions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/shop/$slug/orders/$orderId",
								params: {
									slug: shopSlug,
									orderId: order.id
								},
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-2 h-4 w-4" }), "View Details"]
							})
						})]
					})] })
				});
			},
			enableSorting: false
		}
	];
};
/**
* Shared column definitions for admin order tables
*/
var createAdminOrderColumns = ({ isOrderMutating }) => {
	return [
		{
			accessorKey: "orderNumber",
			header: "Order",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-mono text-sm font-medium",
				children: row.getValue("orderNumber")
			}),
			enableSorting: true
		},
		{
			accessorKey: "shopName",
			header: "Shop",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-medium",
				children: row.getValue("shopName")
			}),
			enableSorting: true
		},
		{
			accessorKey: "customer",
			header: "Customer",
			cell: ({ row }) => {
				const customer = row.original.customer ?? {
					name: null,
					email: null
				};
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium",
					children: customer.name ?? "Guest"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-muted-foreground text-xs",
					children: customer.email ?? "No email"
				})] });
			},
			enableSorting: false
		},
		{
			accessorKey: "itemCount",
			header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center",
				children: "Items"
			}),
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center",
				children: row.getValue("itemCount")
			}),
			enableSorting: true
		},
		{
			accessorKey: "totalAmount",
			header: "Total",
			cell: ({ row }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium",
					children: formatCurrency(row.getValue("totalAmount"))
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }) => {
				const status = row.getValue("status");
				const config = {
					pending: {
						variant: "secondary",
						className: "",
						label: "Pending"
					},
					confirmed: {
						variant: "secondary",
						className: "",
						label: "Confirmed"
					},
					processing: {
						variant: "outline",
						className: "",
						label: "Processing"
					},
					shipped: {
						variant: "outline",
						className: "",
						label: "Shipped"
					},
					delivered: {
						variant: "default",
						className: "bg-green-500",
						label: "Delivered"
					},
					cancelled: {
						variant: "destructive",
						className: "",
						label: "Cancelled"
					},
					refunded: {
						variant: "destructive",
						className: "",
						label: "Refunded"
					}
				}[status] || {
					variant: "outline",
					className: "",
					label: status
				};
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: config.variant,
					className: config.className,
					children: config.label
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "paymentStatus",
			header: "Payment",
			cell: ({ row }) => {
				const status = row.getValue("paymentStatus");
				const config = {
					paid: {
						variant: "default",
						className: "bg-green-500",
						label: "Paid"
					},
					unpaid: {
						variant: "secondary",
						className: "",
						label: "Unpaid"
					},
					refunded: {
						variant: "outline",
						className: "",
						label: "Refunded"
					}
				}[status] || {
					variant: "outline",
					className: "",
					label: status
				};
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: config.variant,
					className: config.className,
					children: config.label
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "createdAt",
			header: "Date",
			cell: ({ row }) => {
				const date = row.getValue("createdAt");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-muted-foreground",
					children: new Date(date).toLocaleDateString("en-US", {
						year: "numeric",
						month: "short",
						day: "numeric",
						hour: "2-digit",
						minute: "2-digit"
					})
				});
			},
			enableSorting: true
		},
		{
			id: "actions",
			header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-right",
				children: "Actions"
			}),
			cell: ({ row }) => {
				const order = row.original;
				const isMutating = isOrderMutating?.(order.id) ?? false;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						disabled: isMutating,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							className: "h-8 w-8 p-0",
							disabled: isMutating,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Open menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Actions" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/admin/orders/$orderId",
								params: { orderId: order.id },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-2 h-4 w-4" }), "View Details"]
							})
						})]
					})] })
				});
			},
			enableSorting: false
		}
	];
};
function OrderHeader({ role = "vendor", children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHeader, {
		title: "Orders",
		description: role === "admin" ? "Manage platform-wide orders and shipping" : "Manage and track your shop orders",
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			variant: "outline",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "mr-2 size-4" }), "Export Orders"]
		}), children]
	});
}
//#endregion
export { getSharedOrderFilters as i, createAdminOrderColumns as n, createOrderColumns as r, OrderHeader as t };
