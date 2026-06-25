import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { Z as LoaderCircle, yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { t as createEntityHeader } from "./entity-header-DzvDdutM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tag-table-bCtdW36v.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var TagHeader = createEntityHeader({
	entityName: "Tag",
	entityNamePlural: "Tags",
	adminDescription: "Manage tags across the platform",
	vendorDescription: "Manage your tags"
});
var TAG_STATUS_OPTIONS = [{
	label: "Active",
	value: "true"
}, {
	label: "Inactive",
	value: "false"
}];
var getSharedTagFilters = () => {
	return [{
		id: "isActive",
		label: "Status",
		type: "select",
		options: TAG_STATUS_OPTIONS,
		placeholder: "Filter by status"
	}];
};
var createTagColumns = ({ mode, actions, mutationState, isTagMutating }) => {
	const isAdmin = mode === "admin";
	return [
		{
			accessorKey: "id",
			header: "ID",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-20 truncate text-muted-foreground text-xs",
				children: row.getValue("id")
			}),
			enableSorting: true
		},
		{
			accessorKey: "name",
			header: "Name",
			cell: ({ row }) => {
				const isMutating = isTagMutating?.(row.original.id) ?? false;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("font-medium", isMutating && "opacity-60"),
					children: [isMutating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "inline h-3 w-3 animate-spin mr-1" }), row.getValue("name")]
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "slug",
			header: "Slug",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("code", {
				className: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono font-semibold text-sm",
				children: row.getValue("slug")
			}),
			enableSorting: false
		},
		{
			accessorKey: "description",
			header: "Description",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-48 truncate text-sm text-muted-foreground",
				children: row.original.description || "-"
			}),
			enableSorting: false
		},
		...isAdmin ? [{
			accessorKey: "shopName",
			header: "Shop",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-muted-foreground text-sm",
				children: row.original.shopName || "-"
			}),
			enableSorting: false
		}] : [],
		{
			accessorKey: "productCount",
			header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center",
				children: "Products"
			}),
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-center",
				children: row.getValue("productCount") ?? 0
			}),
			enableSorting: true
		},
		{
			accessorKey: "isActive",
			header: "Status",
			cell: ({ row }) => {
				const isActive = row.original.isActive;
				const isToggling = mutationState?.togglingId === row.original.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: isActive ? "default" : "secondary",
						className: cn("capitalize", isToggling && "opacity-60"),
						children: isActive ? "Active" : "Inactive"
					}), isToggling && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" })]
				});
			},
			enableSorting: false
		},
		{
			id: "actions",
			header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-right",
				children: "Actions"
			}),
			cell: ({ row }) => {
				const isMutating = isTagMutating?.(row.original.id) ?? false;
				const isDeleting = mutationState?.deletingId === row.original.id;
				const isToggling = mutationState?.togglingId === row.original.id;
				const isUpdating = mutationState?.updatingId === row.original.id;
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
							}), isMutating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Actions" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => navigator.clipboard.writeText(row.original.id),
								children: "Copy ID"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
							actions.onEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => actions.onEdit(row.original),
								disabled: isMutating,
								children: isUpdating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), "Updating..."]
								}) : "Edit"
							}),
							isAdmin && actions.onToggleActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => actions.onToggleActive(row.original),
								disabled: isToggling,
								children: isToggling ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), "Updating..."]
								}) : row.original.isActive ? "Deactivate" : "Activate"
							}),
							actions.onDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								className: "text-destructive",
								onClick: () => actions.onDelete(row.original),
								disabled: isDeleting,
								children: isDeleting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), "Deleting..."]
								}) : "Delete"
							})] })
						]
					})] })
				});
			},
			enableSorting: false
		}
	];
};
function TagTable({ tags, server, onEdit, onDelete, onToggleActive, mutationState, isTagMutating, className, mode = "vendor" }) {
	const columns = (0, import_react.useMemo)(() => {
		return createTagColumns({
			mode,
			actions: {
				onEdit,
				onDelete,
				onToggleActive
			},
			isTagMutating,
			mutationState
		});
	}, [
		onEdit,
		onDelete,
		onToggleActive,
		isTagMutating,
		mutationState,
		mode
	]);
	const filterableColumns = (0, import_react.useMemo)(() => getSharedTagFilters(), []);
	if (server) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		server,
		context: mode === "admin" ? "admin" : "shop",
		initialPageSize: 10,
		filterableColumns,
		globalFilterPlaceholder: "Search tags...",
		className
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		data: tags || [],
		className
	});
}
//#endregion
export { TagTable as n, TagHeader as t };
