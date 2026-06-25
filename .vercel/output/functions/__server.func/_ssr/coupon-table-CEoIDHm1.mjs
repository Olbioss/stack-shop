import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { Z as LoaderCircle, _t as EyeOff, gt as Eye, yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { t as createEntityHeader } from "./entity-header-DzvDdutM.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coupon-table-CEoIDHm1.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CouponHeader = createEntityHeader({
	entityName: "Coupon",
	entityNamePlural: "Coupons",
	adminDescription: "Manage coupons across the platform",
	vendorDescription: "Manage your coupons and organization"
});
var getSharedCouponFilters = (options) => {
	return [{
		id: "isActive",
		label: "Status",
		type: "select",
		options: [{
			label: "Active",
			value: "true"
		}, {
			label: "Inactive",
			value: "false"
		}],
		placeholder: "Filter by status"
	}, {
		id: "type",
		label: "Type",
		type: "select",
		options: options.typeOptions,
		placeholder: "Filter by type"
	}];
};
/**
* Shared column definitions for coupon tables (Admin & Vendor)
*/
var createCouponColumns = ({ mode: _mode, actions, permissions, mutationState, isCouponMutating }) => {
	return [
		{
			accessorKey: "code",
			header: "Code",
			cell: ({ row }) => {
				const isMutating = isCouponMutating?.(row.original.id) ?? false;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("font-mono font-semibold", isMutating && "opacity-60"),
					children: [isMutating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "mr-2 inline h-3 w-3 animate-spin" }), row.getValue("code")]
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "type",
			header: "Type",
			cell: ({ row }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					className: "capitalize",
					children: row.getValue("type").replace("_", " ")
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "discountAmount",
			header: "Discount",
			cell: ({ row }) => {
				const type = row.original.type;
				const amount = row.getValue("discountAmount");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium",
					children: type === "percentage" ? `${amount}%` : type === "free_shipping" ? "Free Shipping" : `$${amount}`
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "usageCount",
			header: "Usage",
			cell: ({ row }) => {
				const usageCount = row.getValue("usageCount");
				const usageLimit = row.original.usageLimit;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-sm text-muted-foreground",
					children: [
						usageCount,
						" ",
						usageLimit ? `/ ${usageLimit}` : "(unlimited)"
					]
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "activeTo",
			header: "Expires",
			cell: ({ row }) => {
				const activeTo = row.getValue("activeTo");
				const date = new Date(activeTo);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("text-sm", date < /* @__PURE__ */ new Date() ? "text-destructive" : "text-muted-foreground"),
					children: date.toLocaleDateString()
				});
			},
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
			enableSorting: true
		},
		{
			id: "actions",
			header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-right",
				children: "Actions"
			}),
			cell: ({ row }) => {
				const isMutating = isCouponMutating?.(row.original.id) ?? false;
				const isDeleting = mutationState?.deletingId === row.original.id;
				const isToggling = mutationState?.togglingId === row.original.id;
				const canEdit = permissions?.canEdit ?? true;
				const canDelete = permissions?.canDelete ?? true;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2",
					children: [(permissions?.canToggleStatus ?? true) && actions.onToggleStatus && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "ghost",
						size: "icon",
						className: "h-8 w-8",
						onClick: () => actions.onToggleStatus(row.original),
						disabled: isToggling || isMutating,
						children: isToggling ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : row.original.isActive ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						disabled: isMutating,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							className: "h-8 w-8 p-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Open menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Actions" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => navigator.clipboard.writeText(row.original.id),
								children: "Copy ID"
							}),
							canEdit && actions.onEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => actions.onEdit(row.original),
								children: "Edit"
							}),
							canDelete && actions.onDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => actions.onDelete(row.original),
								className: "text-destructive",
								disabled: isDeleting,
								children: isDeleting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), "Deleting..."]
								}) : "Delete"
							})] })
						]
					})] })]
				});
			}
		}
	];
};
var STATUS_OPTIONS = [{
	label: "Active",
	value: "true"
}, {
	label: "Inactive",
	value: "false"
}];
var TYPE_OPTIONS = [
	{
		label: "Percentage",
		value: "percentage"
	},
	{
		label: "Fixed Amount",
		value: "fixed"
	},
	{
		label: "Free Shipping",
		value: "free_shipping"
	}
];
function AdminCouponTable({ coupons, server, className, onEdit, onDelete, onToggleStatus, mutationState, isCouponMutating, permissions }) {
	const columns = (0, import_react.useMemo)(() => {
		return createCouponColumns({
			mode: "admin",
			actions: {
				onEdit,
				onDelete,
				onToggleStatus
			},
			isCouponMutating,
			mutationState,
			permissions
		});
	}, [
		onEdit,
		onDelete,
		onToggleStatus,
		isCouponMutating,
		mutationState,
		permissions
	]);
	const filterableColumns = (0, import_react.useMemo)(() => getSharedCouponFilters({
		statusOptions: STATUS_OPTIONS,
		typeOptions: TYPE_OPTIONS
	}), []);
	if (server) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		server,
		context: "admin",
		initialPageSize: 10,
		filterableColumns,
		globalFilterPlaceholder: "Search coupons...",
		className
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		data: coupons || [],
		initialPageSize: 10,
		filterableColumns,
		globalFilterPlaceholder: "Search coupons...",
		className
	});
}
function VendorCouponTable({ server, className, onEdit, onDelete, onToggleStatus, mutationState, isCouponMutating, permissions }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns: (0, import_react.useMemo)(() => {
			return createCouponColumns({
				mode: "vendor",
				actions: {
					onEdit,
					onDelete,
					onToggleStatus
				},
				isCouponMutating,
				mutationState,
				permissions
			});
		}, [
			onEdit,
			onDelete,
			onToggleStatus,
			isCouponMutating,
			mutationState,
			permissions
		]),
		server,
		context: "shop",
		initialPageSize: 10,
		filterableColumns: (0, import_react.useMemo)(() => getSharedCouponFilters({
			statusOptions: STATUS_OPTIONS,
			typeOptions: TYPE_OPTIONS
		}), []),
		globalFilterPlaceholder: "Search coupons...",
		className
	});
}
//#endregion
export { CouponHeader as n, VendorCouponTable as r, AdminCouponTable as t };
