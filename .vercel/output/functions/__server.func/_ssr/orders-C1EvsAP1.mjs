import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { n as DataTablePagination, r as DataTableToolbar, t as DataTableCore } from "./data-table-toolbar-Iu7ZK-0-.mjs";
import { t as AccountLayout } from "./account-layout-BBuyu67D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/orders-C1EvsAP1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var columns = [
	{
		accessorKey: "id",
		header: "Order ID",
		cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-medium",
			children: row.getValue("id")
		})
	},
	{
		accessorKey: "date",
		header: "Date"
	},
	{
		accessorKey: "status",
		header: "Status",
		cell: ({ row }) => {
			const status = row.getValue("status");
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: status === "Delivered" ? "secondary" : status === "Processing" ? "default" : "destructive",
				children: status
			});
		}
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
						onClick: () => navigator.clipboard.writeText(order.id),
						children: "Copy order ID"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: "View details" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: "View invoice" })
				]
			})] });
		}
	}
];
var data = [
	{
		id: "ORD-001",
		date: "2023-10-25",
		status: "Delivered",
		total: 120.5,
		items: 3
	},
	{
		id: "ORD-002",
		date: "2023-11-02",
		status: "Processing",
		total: 45,
		items: 1
	},
	{
		id: "ORD-003",
		date: "2023-11-10",
		status: "Cancelled",
		total: 89.99,
		items: 2
	},
	{
		id: "ORD-004",
		date: "2023-11-15",
		status: "Delivered",
		total: 250,
		items: 5
	},
	{
		id: "ORD-005",
		date: "2023-11-20",
		status: "Processing",
		total: 35.5,
		items: 1
	}
];
function OrdersTable() {
	const [sorting, setSorting] = import_react.useState([]);
	const [columnFilters, setColumnFilters] = import_react.useState([]);
	const [_rowSelection, setRowSelection] = import_react.useState({});
	const [globalFilter, setGlobalFilter] = import_react.useState("");
	const [pagination, setPagination] = import_react.useState({
		pageIndex: 0,
		pageSize: 10
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
				data,
				pageIndex: pagination.pageIndex,
				pageSize: pagination.pageSize,
				pageCount: Math.ceil(data.length / pagination.pageSize),
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
				pageCount: Math.ceil(data.length / pagination.pageSize),
				total: data.length,
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
