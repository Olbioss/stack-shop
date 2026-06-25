import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { o as useQuery } from "../_libs/tanstack__react-query.mjs";
import { t as DataTableSkeleton } from "./data-table-skeleton-BKCwaWiU.mjs";
import { n as DataTablePagination, r as DataTableToolbar, t as DataTableCore } from "./data-table-toolbar-Iu7ZK-0-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-header-DLbA-yB-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useServerPagination({ fetcher, initialPageSize = 10, context, queryKey }) {
	const [pageIndex, setPageIndex] = (0, import_react.useState)(0);
	const [pageSize, setPageSize] = (0, import_react.useState)(initialPageSize);
	const [sorting, setSorting] = (0, import_react.useState)([]);
	const [columnFilters, setColumnFilters] = (0, import_react.useState)([]);
	const [globalFilter, setGlobalFilter] = (0, import_react.useState)("");
	const params = (0, import_react.useMemo)(() => ({
		pageIndex,
		pageSize,
		sorting,
		columnFilters,
		globalFilter,
		context
	}), [
		pageIndex,
		pageSize,
		sorting,
		columnFilters,
		globalFilter,
		context
	]);
	const query = useQuery({
		queryKey: queryKey ? [...queryKey, params] : [
			"datatable",
			context,
			params
		],
		queryFn: () => fetcher(params),
		placeholderData: (prev) => prev
	});
	const setPagination = (updaterOrValue) => {
		const next = typeof updaterOrValue === "function" ? updaterOrValue({
			pageIndex,
			pageSize
		}) : updaterOrValue;
		setPageIndex(next.pageIndex);
		setPageSize(next.pageSize);
	};
	return {
		pageIndex,
		pageSize,
		sorting,
		columnFilters,
		globalFilter,
		setPageIndex,
		setPageSize,
		setSorting,
		setColumnFilters,
		setGlobalFilter,
		setPagination,
		rows: query.data?.rows ?? [],
		pageCount: query.data?.pageCount ?? -1,
		total: query.data?.total ?? 0,
		isFetching: query.isFetching,
		error: query.error,
		refetch: query.refetch
	};
}
function DataTableContainer({ title, columns, data, manual, pageCount, pageIndex, pageSize, onPaginationChange, sorting, onSortingChange, columnFilters, onColumnFiltersChange, globalFilter, onGlobalFilterChange, filterableColumns, globalFilterPlaceholder, isFetching, enableRowSelection, onRowSelection, total, onRefresh }) {
	const hasData = data.length > 0;
	const showSkeleton = isFetching && !hasData;
	const [table, setTable] = import_react.useState(null);
	const allColumns = import_react.useMemo(() => {
		if (!table) return columns.map((col, idx) => {
			const id = col.id ?? `column_${idx}`;
			return {
				id,
				label: typeof col.header === "string" ? col.header : id,
				visible: true,
				toggle: () => {}
			};
		});
		return table.getAllLeafColumns().map((col) => {
			const id = col.id;
			const header = col.columnDef.header;
			return {
				id,
				label: typeof header === "string" ? header : id,
				visible: col.getIsVisible(),
				toggle: () => col.toggleVisibility()
			};
		});
	}, [table, columns]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex w-full flex-col gap-2",
		"aria-live": "polite",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableToolbar, {
				title,
				globalFilter,
				onGlobalFilterChange,
				filterableColumns,
				columnFilters,
				onColumnFilterChange: import_react.useCallback((columnId, value) => {
					onColumnFiltersChange((prev) => {
						const filtered = prev.filter((f) => f.id !== columnId);
						if (value !== "" && value !== void 0 && value !== null) filtered.push({
							id: columnId,
							value
						});
						return filtered;
					});
				}, [onColumnFiltersChange]),
				allColumns,
				isFetching,
				placeholder: globalFilterPlaceholder,
				onRefresh
			}),
			showSkeleton ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableSkeleton, {
				columnCount: columns.length - 1,
				rowCount: pageSize,
				hasCheckbox: enableRowSelection,
				hasActions: true
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [isFetching && hasData && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 z-10 flex items-center justify-center rounded-md bg-background/50 backdrop-blur-[1px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 rounded-md bg-background px-3 py-2 shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-4 w-4 animate-spin rounded-full border-2 border-primary border-t-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground text-sm",
							children: "Loading..."
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableCore, {
					columns,
					data,
					manual,
					pageCount,
					pageIndex,
					pageSize,
					onPaginationChange,
					sorting,
					onSortingChange,
					columnFilters,
					onColumnFiltersChange,
					globalFilter,
					onGlobalFilterChange,
					enableRowSelection,
					onRowSelection,
					onTableInstance: setTable
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTablePagination, {
				pageIndex,
				pageSize,
				pageCount: pageCount ?? -1,
				total,
				onPageChange: onPaginationChange
			})
		]
	});
}
function DataTable({ columns, server, data: clientData, initialPageSize = 10, context, enableRowSelection, onRowSelectionChange, filterableColumns, toolbarTitle, globalFilterPlaceholder, className }) {
	const isServer = !!server;
	const { pageIndex, pageSize, setPagination, sorting, setSorting, columnFilters, setColumnFilters, globalFilter, setGlobalFilter, rows, pageCount, total, isFetching, refetch } = useServerPagination({
		fetcher: server?.fetcher ?? (async () => ({
			rows: clientData ?? [],
			pageCount: 1,
			total: clientData?.length ?? 0
		})),
		initialPageSize,
		context,
		queryKey: server?.queryKey
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableContainer, {
			title: toolbarTitle,
			columns,
			data: isServer ? rows : clientData ?? [],
			manual: isServer,
			pageCount: isServer ? pageCount : void 0,
			pageIndex,
			pageSize,
			onPaginationChange: setPagination,
			sorting,
			onSortingChange: setSorting,
			columnFilters,
			onColumnFiltersChange: setColumnFilters,
			globalFilter,
			onGlobalFilterChange: setGlobalFilter,
			filterableColumns,
			globalFilterPlaceholder,
			isFetching,
			onRefresh: isServer ? () => refetch() : void 0,
			enableRowSelection,
			onRowSelection: onRowSelectionChange,
			total
		})
	});
}
function PageHeader({ title, description, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "space-y-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-bold text-3xl tracking-tight",
				children: title
			}), description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground text-sm",
				children: description
			})]
		}), children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center gap-3",
			children
		})]
	});
}
//#endregion
export { PageHeader as n, DataTable as t };
