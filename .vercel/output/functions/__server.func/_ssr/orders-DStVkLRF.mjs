import { o as __toESM } from "../_runtime.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { V as PackageOpen, yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { n as DataTablePagination, r as DataTableToolbar, t as DataTableCore } from "./data-table-toolbar-Iu7ZK-0-.mjs";
import { r as getCustomerOrders } from "./order-CWYBszKz.mjs";
import { t as AccountLayout } from "./account-layout-DPxGQ5LX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-DStVkLRF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var statusVariant = {
	pending: "default",
	confirmed: "default",
	processing: "default",
	shipped: "default",
	delivered: "secondary",
	cancelled: "destructive",
	refunded: "destructive"
};
var columns = [
	{
		accessorKey: "orderNumber",
		header: "Order ID",
		cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-medium",
			children: row.getValue("orderNumber")
		})
	},
	{
		accessorKey: "createdAt",
		header: "Date",
		cell: ({ row }) => {
			const value = row.getValue("createdAt");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: new Date(value).toLocaleDateString("en-US", {
				month: "short",
				day: "numeric",
				year: "numeric"
			}) });
		}
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			const status = row.getValue("status");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: statusVariant[status] ?? "default",
				className: "capitalize",
				children: status
			});
		}
	},
	{
		accessorKey: "itemCount",
		header: "Items",
		cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.getValue("itemCount") })
	},
	{
		accessorKey: "total",
		header: "Total",
		cell: ({ row }) => {
			const amount = parseFloat(row.getValue("total"));
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-medium",
				children: new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "USD"
				}).format(amount)
			});
		}
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const order = row.original;
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
						onClick: () => navigator.clipboard.writeText(order.orderNumber),
						children: "Copy order ID"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: "View details" })
				]
			})] });
		}
	}
];
var customerOrderKeys = {
	all: ["customer-orders"],
	list: (params) => [
		...customerOrderKeys.all,
		"list",
		params
	]
};
function useCustomerOrders(params) {
	return useQuery({
		queryKey: customerOrderKeys.list(params),
		queryFn: async () => {
			return await getCustomerOrders({ data: {
				limit: params?.limit ?? 50,
				offset: params?.offset ?? 0,
				status: params?.status
			} });
		}
	});
}
function OrdersTable() {
	const { data, isLoading, error } = useCustomerOrders();
	const orders = import_react.useMemo(() => (data?.orders ?? []).map((order) => ({
		id: order.id,
		orderNumber: order.orderNumber,
		createdAt: order.createdAt,
		status: order.status,
		itemCount: order.items.length,
		total: order.totalAmount
	})), [data]);
	const [sorting, setSorting] = import_react.useState([]);
	const [columnFilters, setColumnFilters] = import_react.useState([]);
	const [_rowSelection, setRowSelection] = import_react.useState({});
	const [globalFilter, setGlobalFilter] = import_react.useState("");
	const [pagination, setPagination] = import_react.useState({
		pageIndex: 0,
		pageSize: 10
	});
	if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "space-y-3 py-2",
		children: [...Array(5)].map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-12 animate-pulse rounded bg-muted" }, i))
	});
	if (error) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageOpen, { className: "mb-4 size-12 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-2 font-semibold text-lg",
				children: "Unable to load orders"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: "There was an error loading your orders. Please try again later."
			})
		]
	});
	if (orders.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center justify-center py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PackageOpen, { className: "mb-4 size-12 text-muted-foreground" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mb-2 font-semibold text-lg",
				children: "No orders yet"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: "You haven't placed any orders yet."
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableToolbar, {
				globalFilter,
				onGlobalFilterChange: setGlobalFilter,
				columnFilters,
				onColumnFilterChange: (columnId, value) => {
					setColumnFilters((prev) => {
						const filtered = prev.filter((f) => f.id !== columnId);
						if (value !== "" && value !== void 0 && value !== null) filtered.push({
							id: columnId,
							value
						});
						return filtered;
					});
				},
				allColumns: columns.map((col) => ({
					id: col.accessorKey || col.id,
					label: col.header || col.id,
					visible: true,
					toggle: () => {}
				}))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCore, {
				columns,
				data: orders,
				pageIndex: pagination.pageIndex,
				pageSize: pagination.pageSize,
				pageCount: Math.ceil(orders.length / pagination.pageSize),
				onPaginationChange: setPagination,
				sorting,
				onSortingChange: setSorting,
				columnFilters,
				onColumnFiltersChange: setColumnFilters,
				globalFilter,
				onGlobalFilterChange: setGlobalFilter,
				enableRowSelection: true,
				onRowSelection: setRowSelection
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTablePagination, {
				pageIndex: pagination.pageIndex,
				pageSize: pagination.pageSize,
				pageCount: Math.ceil(orders.length / pagination.pageSize),
				total: orders.length,
				onPageChange: setPagination
			})
		]
	});
}
function OrderTemplate() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccountLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-between",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-bold text-2xl tracking-tight",
				children: "My Orders"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-lg border bg-card px-6 py-3 text-card-foreground shadow-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(OrdersTable, {})
		})]
	}) });
}
var SplitComponent = OrderTemplate;
//#endregion
export { SplitComponent as component };
