import { o as __toESM } from "../_runtime.mjs";
import { n as formatCurrency } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { Et as CircleCheck, F as Percent, gt as Eye, l as TrendingUp, xt as DollarSign, yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-BDvQuHpQ.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { u as createAdminTransactionsFetcher, v as useAdminTransactionStats } from "./use-admin-entity-fetchers-DkFElJdN.mjs";
import { t as TransactionHeader } from "./transaction-header-CNTz1Qc3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/transactions-0FSNC9Xg.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statusOptions = [
	{
		label: "Pending",
		value: "pending"
	},
	{
		label: "Processing",
		value: "processing"
	},
	{
		label: "Succeeded",
		value: "succeeded"
	},
	{
		label: "Failed",
		value: "failed"
	},
	{
		label: "Refunded",
		value: "refunded"
	}
];
function AdminTransactionsTable({ server, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns: (0, import_react.useMemo)(() => {
			return [
				{
					accessorKey: "orderNumber",
					header: "Order",
					cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-mono text-sm font-medium",
						children: row.getValue("orderNumber")
					})
				},
				{
					accessorKey: "shop",
					header: "Shop",
					cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: row.original.shop.name
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground text-xs",
						children: row.original.shop.slug
					})] })
				},
				{
					accessorKey: "customer",
					header: "Customer",
					cell: ({ row }) => {
						const customer = row.original.customer;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium",
							children: customer.name ?? "Guest"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-muted-foreground text-xs",
							children: customer.email
						})] });
					}
				},
				{
					accessorKey: "amount",
					header: "Amount",
					cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: formatCurrency(row.original.amount)
					})
				},
				{
					accessorKey: "status",
					header: "Status",
					cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "capitalize",
						children: row.original.status
					})
				},
				{
					accessorKey: "createdAt",
					header: "Date",
					cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm",
						children: new Date(row.original.createdAt).toLocaleDateString()
					})
				},
				{
					id: "actions",
					header: "Actions",
					cell: ({ row }) => {
						const transaction = row.original;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								className: "h-8 w-8 p-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Open menu"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Actions" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									onClick: () => navigator.clipboard.writeText(transaction.id),
									children: "Copy Transaction ID"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
									onClick: () => navigator.clipboard.writeText(transaction.orderNumber),
									children: "Copy Order Number"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }), "View Details"]
								}) })
							]
						})] });
					},
					enableSorting: false
				}
			];
		}, []),
		server,
		context: "admin",
		initialPageSize: 10,
		filterableColumns: (0, import_react.useMemo)(() => [{
			id: "status",
			label: "Status",
			type: "select",
			options: statusOptions,
			placeholder: "Filter by status"
		}], []),
		globalFilterPlaceholder: "Search transactions...",
		className
	});
}
function AdminTransactionsTemplate({ server, stats }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionHeader, { role: "admin" }),
			stats && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "flex flex-row items-center justify-between space-y-0 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-medium text-sm",
							children: "Total Revenue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4 text-green-600" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-2xl text-green-600",
						children: formatCurrency(stats.totalRevenue)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: "Last 30 days"
					})] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "flex flex-row items-center justify-between space-y-0 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-medium text-sm",
							children: "Platform Fees"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Percent, { className: "size-4 text-muted-foreground" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-2xl",
						children: formatCurrency(stats.platformFees)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: "Last 30 days"
					})] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "flex flex-row items-center justify-between space-y-0 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-medium text-sm",
							children: "Vendor Payouts"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DollarSign, { className: "size-4 text-blue-600" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-2xl",
						children: formatCurrency(stats.vendorPayouts)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: "Net payouts"
					})] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "flex flex-row items-center justify-between space-y-0 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-medium text-sm",
							children: "Transactions"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-muted-foreground" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-2xl",
						children: stats.totalTransactions
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground text-xs",
						children: [stats.successfulTransactions, " successful"]
					})] })] })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-md",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTransactionsTable, { server })
			})
		]
	});
}
function RouteComponent() {
	const server = createAdminTransactionsFetcher();
	const { data: stats } = useAdminTransactionStats();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTransactionsTemplate, {
		server,
		stats
	});
}
//#endregion
export { RouteComponent as component };
