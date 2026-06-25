import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { j as RefreshCw } from "../_libs/lucide-react.mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import { f as DropdownMenuTrigger, n as DropdownMenuCheckboxItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { a as SelectValue, i as SelectTrigger, n as SelectContent, r as SelectItem, t as Select$1 } from "./select-DjArhxEw.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-D-104eYZ.mjs";
import { a as getPaginationRowModel, i as getFilteredRowModel, n as useReactTable, o as getSortedRowModel, r as getCoreRowModel, t as flexRender } from "../_libs/@tanstack/react-table+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-table-toolbar-Iu7ZK-0-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DataTableCore({ columns, data, manual = false, pageCount, pageIndex, pageSize, onPaginationChange, sorting, onSortingChange, columnFilters, onColumnFiltersChange, globalFilter, onGlobalFilterChange, enableRowSelection, onRowSelection, className, onTableInstance }) {
	const [rowSelection, setRowSelection] = import_react.useState({});
	const table = useReactTable({
		data,
		columns,
		manualPagination: manual,
		manualSorting: manual,
		manualFiltering: manual,
		pageCount: manual ? pageCount : void 0,
		state: {
			pagination: {
				pageIndex,
				pageSize
			},
			sorting,
			columnFilters,
			globalFilter,
			rowSelection
		},
		onPaginationChange,
		onSortingChange,
		onColumnFiltersChange,
		onGlobalFilterChange,
		onRowSelectionChange: setRowSelection,
		getCoreRowModel: getCoreRowModel(),
		getFilteredRowModel: manual ? void 0 : getFilteredRowModel(),
		getSortedRowModel: manual ? void 0 : getSortedRowModel(),
		getPaginationRowModel: manual ? void 0 : getPaginationRowModel(),
		enableRowSelection
	});
	import_react.useEffect(() => {
		if (onTableInstance) onTableInstance(table);
	}, [table, onTableInstance]);
	import_react.useEffect(() => {
		if (!onRowSelection) return;
		onRowSelection(table.getSelectedRowModel().rows.map((r) => r.original));
	}, [table.getSelectedRowModel, onRowSelection]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("w-full overflow-x-auto rounded-md border", className),
		role: "region",
		"aria-label": "Data table",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: table.getHeaderGroups().map((headerGroup) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: headerGroup.headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext()) }, header.id)) }, headerGroup.id)) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: table.getRowModel().rows?.length ? table.getRowModel().rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, {
			"data-state": row.getIsSelected() && "selected",
			children: row.getVisibleCells().map((cell) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: flexRender(cell.column.columnDef.cell, cell.getContext()) }, cell.id))
		}, row.id)) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
			colSpan: columns.length,
			className: "h-24 text-center",
			children: "No results."
		}) }) })] })
	});
}
function DataTablePagination({ pageIndex, pageSize, pageCount, total, onPageChange, pageSizeOptions = [
	10,
	20,
	50,
	100
] }) {
	const canPrev = pageIndex > 0;
	const canNext = pageCount === -1 ? true : pageIndex + 1 < pageCount;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full items-center justify-between px-2 py-2",
		role: "navigation",
		"aria-label": "Table pagination",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted-foreground text-sm",
					children: ["Page ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: pageIndex + 1 })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground text-sm",
					children: "• Rows per page"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
					value: String(pageSize),
					onValueChange: (value) => onPageChange(() => ({
						pageIndex: 0,
						pageSize: Number(value)
					})),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: "h-8 w-25",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: String(pageSize) })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: pageSizeOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: String(opt),
						children: opt
					}, opt)) })]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				typeof total === "number" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-muted-foreground text-sm",
					"aria-live": "polite",
					children: [total, " total"]
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => onPageChange(({ pageIndex: i, pageSize: s }) => ({
						pageIndex: Math.max(i - 1, 0),
						pageSize: s
					})),
					disabled: !canPrev,
					"aria-label": "Previous page",
					children: "Prev"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					variant: "outline",
					size: "sm",
					onClick: () => onPageChange(({ pageIndex: i, pageSize: s }) => ({
						pageIndex: i + 1,
						pageSize: s
					})),
					disabled: !canNext,
					"aria-label": "Next page",
					children: "Next"
				})
			]
		})]
	});
}
function DataTableToolbar({ title, globalFilter, onGlobalFilterChange, filterableColumns, columnFilters, onColumnFilterChange, allColumns, isFetching, className, placeholder, onRefresh }) {
	const getFilterValue = (columnId) => {
		return columnFilters.find((f) => f.id === columnId)?.value ?? "";
	};
	const hasFilters = filterableColumns && filterableColumns.length > 0;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex w-full items-center justify-between gap-4 py-3", className),
		role: "toolbar",
		"aria-label": title ?? "Table toolbar",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				"aria-label": "Search",
				placeholder: placeholder ?? "Search...",
				value: globalFilter ?? "",
				onChange: (e) => onGlobalFilterChange(e.currentTarget.value),
				className: "w-full max-w-70"
			}), hasFilters && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-center gap-2",
				children: filterableColumns.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select$1, {
					value: getFilterValue(column.id) || "all",
					onValueChange: (value) => {
						onColumnFilterChange(column.id, value === "all" ? "" : value);
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
						className: cn("h-12 w-35 border-dashed", getFilterValue(column.id) && "border-primary"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: column.label })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem, {
						value: "all",
						children: ["All ", column.label]
					}), column.options?.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
						value: option.value,
						children: option.label
					}, option.value))] })]
				}, column.id))
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2",
			children: [
				isFetching && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-1.5 text-muted-foreground text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "h-3.5 w-3.5 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden sm:inline",
						children: "Loading..."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "outline",
						size: "sm",
						className: "h-9",
						"aria-label": "Toggle columns",
						children: "Columns"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuContent, {
					align: "end",
					className: "min-w-45",
					children: allColumns.map((col) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuCheckboxItem, {
						checked: col.visible,
						onCheckedChange: col.toggle,
						children: col.label
					}, col.id))
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					className: "h-9",
					disabled: isFetching,
					"aria-live": "polite",
					"aria-busy": isFetching,
					onClick: onRefresh,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: cn("mr-1.5 h-3.5 w-3.5", isFetching && "animate-spin") }), "Refresh"]
				})
			]
		})]
	});
}
//#endregion
export { DataTablePagination as n, DataTableToolbar as r, DataTableCore as t };
