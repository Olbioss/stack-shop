import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { Z as LoaderCircle, yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { t as createEntityHeader } from "./entity-header-DzvDdutM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tax-header-CuuwApby.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var createTaxTableColumns = ({ mode, actions, mutationState, isMutating }) => {
	return [
		{
			accessorKey: "name",
			header: "Name",
			cell: ({ row }) => {
				const isBusy = isMutating?.(row.original.id) ?? false;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("font-medium", isBusy && "opacity-60"),
					children: [isBusy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "inline h-3 w-3 animate-spin mr-1" }), row.original.name]
				});
			}
		},
		{
			accessorKey: "rate",
			header: "Rate",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [row.original.rate, "%"] })
		},
		{
			accessorKey: "country",
			header: "Country",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.original.country })
		},
		{
			accessorKey: "state",
			header: "State",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.original.state || "-" })
		},
		{
			accessorKey: "zip",
			header: "ZIP",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.original.zip || "-" })
		},
		{
			accessorKey: "priority",
			header: "Priority",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.original.priority })
		},
		{
			accessorKey: "isCompound",
			header: "Compound",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
				variant: row.original.isCompound ? "default" : "secondary",
				children: row.original.isCompound ? "Yes" : "No"
			})
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
						className: cn(isToggling && "opacity-60"),
						children: isActive ? "Active" : "Inactive"
					}), isToggling && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" })]
				});
			}
		},
		{
			id: "actions",
			header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-right",
				children: "Actions"
			}),
			cell: ({ row }) => {
				const isBusy = isMutating?.(row.original.id) ?? false;
				const isDeleting = mutationState?.deletingId === row.original.id;
				const isToggling = mutationState?.togglingId === row.original.id;
				const isUpdating = mutationState?.updatingId === row.original.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex justify-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						disabled: isBusy,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							className: "h-8 w-8 p-0",
							disabled: isBusy,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Open menu"
							}), isBusy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })]
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
								disabled: isBusy,
								children: isUpdating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), "Updating..."]
								}) : "Edit"
							}),
							(mode === "vendor" || mode === "admin") && actions.onToggleActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
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
function TaxTable({ taxes, server, onDelete, onEdit, onToggleActive, isMutating, mutationState, className, mode = "vendor" }) {
	const columns = (0, import_react.useMemo)(() => {
		return createTaxTableColumns({
			mode,
			actions: {
				onDelete,
				onEdit,
				onToggleActive
			},
			mutationState,
			isMutating
		});
	}, [
		mode,
		onDelete,
		onEdit,
		onToggleActive,
		mutationState,
		isMutating
	]);
	if (server) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		server,
		context: mode === "admin" ? "admin" : "shop",
		initialPageSize: 10,
		globalFilterPlaceholder: "Search tax rates...",
		className
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		data: taxes || [],
		className
	});
}
var TaxHeader = createEntityHeader({
	entityName: "Tax Rate",
	entityNamePlural: "Tax Rates",
	adminDescription: "Manage tax rates across the platform",
	vendorDescription: "Manage your tax rates"
});
//#endregion
export { TaxTable as n, TaxHeader as t };
