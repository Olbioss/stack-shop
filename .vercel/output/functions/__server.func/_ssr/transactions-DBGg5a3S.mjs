import { o as __toESM } from "../_runtime.mjs";
import { n as formatCurrency } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { Ct as Clock, Et as CircleCheck, F as Percent, gt as Eye, l as TrendingUp, yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-BDvQuHpQ.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { A as useVendorTransactionStats, m as createVendorTransactionsFetcher } from "./use-vendor-entity-fetcher-DwnqReOY.mjs";
import { t as Route } from "./transactions-BA2Ohaa3.mjs";
import { t as TransactionHeader } from "./transaction-header-CNTz1Qc3.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/transactions-DBGg5a3S.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TRANSACTION_STATUS_OPTIONS = [
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
var getSharedTransactionFilters = () => {
	return [{
		id: "status",
		label: "Status",
		type: "select",
		options: TRANSACTION_STATUS_OPTIONS,
		placeholder: "Filter by status"
	}];
};
/**
* Shared column definitions for vendor transaction tables
*/
var createTransactionColumns = ({ actions, mutationState, isTransactionMutating }) => {
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
					children: customer.name ?? "Guest"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-muted-foreground text-xs",
					children: customer.email
				})] });
			},
			enableSorting: false
		},
		{
			accessorKey: "totalAmount",
			header: "Amount",
			cell: ({ row }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium",
					children: formatCurrency(row.getValue("totalAmount"))
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "vendorAmount",
			header: "Earnings",
			cell: ({ row }) => {
				const amount = row.original.vendorAmount;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium text-green-600",
					children: formatCurrency(amount)
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "platformFee",
			header: "Fee",
			cell: ({ row }) => {
				const fee = row.original.platformFee;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-muted-foreground text-sm",
					children: formatCurrency(fee)
				});
			},
			enableSorting: false
		},
		{
			accessorKey: "paymentMethod",
			header: "Method",
			cell: ({ row }) => {
				const method = row.getValue("paymentMethod");
				const provider = row.original.provider;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
					variant: "outline",
					className: "text-xs",
					children: [
						method,
						" (",
						provider,
						")"
					]
				});
			},
			enableSorting: false
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }) => {
				const status = row.getValue("status");
				const config = {
					succeeded: {
						variant: "default",
						className: "bg-green-500",
						label: "Paid"
					},
					pending: {
						variant: "secondary",
						className: "",
						label: "Pending"
					},
					processing: {
						variant: "outline",
						className: "",
						label: "Processing"
					},
					failed: {
						variant: "destructive",
						className: "",
						label: "Failed"
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
				const transaction = row.original;
				const isMutating = isTransactionMutating?.(transaction.id) ?? false;
				const isRefunding = mutationState?.refundingId === transaction.id;
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
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Actions" }),
							actions.onViewTransaction && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
								onClick: () => actions.onViewTransaction(transaction),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-2 h-4 w-4" }), "View Details"]
							}),
							actions.onRefundTransaction && transaction.status === "succeeded" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								className: "text-destructive",
								onClick: () => actions.onRefundTransaction(transaction),
								disabled: isRefunding,
								children: isRefunding ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "animate-spin",
										children: "⟳"
									}), "Refunding..."]
								}) : "Refund"
							})] })
						]
					})] })
				});
			},
			enableSorting: false
		}
	];
};
function VendorTransactionTable({ server, className, onViewTransaction, onRefundTransaction, mutationState, isTransactionMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns: (0, import_react.useMemo)(() => {
			return createTransactionColumns({
				actions: {
					onViewTransaction,
					onRefundTransaction
				},
				isTransactionMutating,
				mutationState
			});
		}, [
			onViewTransaction,
			onRefundTransaction,
			isTransactionMutating,
			mutationState
		]),
		server,
		context: "shop",
		initialPageSize: 10,
		filterableColumns: (0, import_react.useMemo)(() => getSharedTransactionFilters(), []),
		globalFilterPlaceholder: "Search transactions...",
		className
	});
}
function ShopTransactionsTemplate({ server, stats }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TransactionHeader, {}),
			stats && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "flex flex-row items-center justify-between space-y-0 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-medium text-sm",
							children: "Total Earnings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TrendingUp, { className: "size-4 text-green-600" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-2xl text-green-600",
						children: formatCurrency(stats.totalEarnings)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: "Last 30 days"
					})] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "flex flex-row items-center justify-between space-y-0 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-medium text-sm",
							children: "Pending Earnings"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4 text-yellow-600" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-2xl",
						children: formatCurrency(stats.pendingEarnings)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground text-xs",
						children: [stats.pendingTransactions, " pending transaction(s)"]
					})] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
						className: "flex flex-row items-center justify-between space-y-0 pb-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-medium text-sm",
							children: "Platform Fees"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Percent, { className: "size-4 text-muted-foreground" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-bold text-2xl",
						children: formatCurrency(stats.platformFeesPaid)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-muted-foreground text-xs",
						children: "Last 30 days"
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
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorTransactionTable, { server })
			})
		]
	});
}
function RouteComponent() {
	const { slug } = Route.useParams();
	const server = (0, import_react.useMemo)(() => createVendorTransactionsFetcher(slug), [slug]);
	const { data: stats } = useVendorTransactionStats(slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTransactionsTemplate, {
		server,
		stats,
		shopSlug: slug
	});
}
//#endregion
export { RouteComponent as component };
