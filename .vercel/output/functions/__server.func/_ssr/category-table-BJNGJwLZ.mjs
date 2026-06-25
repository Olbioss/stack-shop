import { o as __toESM } from "../_runtime.mjs";
import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { Lt as Camera, S as Shirt, Z as LoaderCircle, at as House, dt as Gamepad, lt as Glasses, n as Watch, pt as Footprints, st as Headphones, tt as Laptop, v as Smartphone, yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar$1 } from "./avatar-BfSlRT72.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { t as DataTable } from "./page-header-DLbA-yB-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/category-table-BJNGJwLZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var VENDOR_STATUS_OPTIONS = [{
	label: "Active",
	value: "true"
}, {
	label: "Inactive",
	value: "false"
}];
var CATEGORY_ICONS = {
	smartphone: {
		value: "smartphone",
		label: "Smartphone",
		icon: Smartphone
	},
	laptop: {
		value: "laptop",
		label: "Laptop",
		icon: Laptop
	},
	shirt: {
		value: "shirt",
		label: "Clothing",
		icon: Shirt
	},
	home: {
		value: "home",
		label: "Home",
		icon: House
	},
	footprints: {
		value: "footprints",
		label: "Shoes",
		icon: Footprints
	},
	watch: {
		value: "watch",
		label: "Accessories",
		icon: Watch
	},
	camera: {
		value: "camera",
		label: "Camera",
		icon: Camera
	},
	headphones: {
		value: "headphones",
		label: "Audio",
		icon: Headphones
	},
	gamepad: {
		value: "gamepad",
		label: "Gaming",
		icon: Gamepad
	},
	glasses: {
		value: "glasses",
		label: "Eyewear",
		icon: Glasses
	}
};
var CATEGORY_ICON_OPTIONS = Object.values(CATEGORY_ICONS);
var getSharedCategoryFilters = (options) => {
	const filters = [{
		id: "isActive",
		label: "Status",
		type: "select",
		options: options.statusOptions,
		placeholder: "Filter by status"
	}];
	if (options.includeFeatured) filters.push({
		id: "featured",
		label: "Featured",
		type: "select",
		options: [{
			label: "Featured",
			value: "true"
		}, {
			label: "Not Featured",
			value: "false"
		}],
		placeholder: "Filter by featured"
	});
	return filters;
};
/**
* Shared column definitions for category tables (Admin & Vendor)
*/
var createCategoryColumns = ({ mode, actions, mutationState, isCategoryMutating }) => {
	const isAdmin = mode === "admin";
	return [
		{
			accessorKey: "image",
			header: "Image",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
				className: "h-9 w-9 rounded-md border",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
					src: row.original.image ?? void 0,
					alt: row.original.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, {
					className: "rounded-md uppercase",
					children: (row.original.name || "CA").slice(0, 2)
				})]
			}),
			enableSorting: false
		},
		{
			accessorKey: "name",
			header: "Name",
			cell: ({ row }) => {
				const isMutating = isCategoryMutating?.(row.original.id) ?? false;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("flex items-center gap-2", isMutating && "opacity-60"),
					children: [isMutating && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: row.getValue("name")
						}),
						row.original.icon && CATEGORY_ICONS[row.original.icon] && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 text-muted-foreground",
							children: (() => {
								const Icon = CATEGORY_ICONS[row.original.icon].icon;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "inline size-3.5" });
							})()
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-muted-foreground text-xs",
							children: row.original.slug
						})
					] })]
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "parentName",
			header: "Parent",
			cell: ({ row }) => {
				const parentName = row.original.parentName;
				if (!parentName) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					className: "text-xs",
					children: "Root"
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: parentName
				});
			},
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
			header: "Products",
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
						children: isActive ? "Active" : "Hidden"
					}), isToggling && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" })]
				});
			},
			enableSorting: false
		},
		...isAdmin ? [{
			accessorKey: "featured",
			header: "Featured",
			cell: ({ row }) => {
				const featured = row.original.featured;
				const isToggling = mutationState?.togglingId === row.original.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: featured ? "default" : "outline",
						className: cn("capitalize", isToggling && "opacity-60"),
						children: featured ? "Yes" : "No"
					}), isToggling && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" })]
				});
			},
			enableSorting: false
		}] : [],
		{
			id: "actions",
			header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-right",
				children: "Actions"
			}),
			cell: ({ row }) => {
				const isMutating = isCategoryMutating?.(row.original.id) ?? false;
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
							isAdmin && actions.onToggleFeatured && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => actions.onToggleFeatured(row.original),
								disabled: isToggling,
								children: isToggling ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), "Updating..."]
								}) : row.original.featured ? "Remove Featured" : "Mark Featured"
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
function VendorCategoryTable({ server, className, onEdit, onDelete, mutationState, isCategoryMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns: (0, import_react.useMemo)(() => {
			return createCategoryColumns({
				mode: "vendor",
				actions: {
					onEdit,
					onDelete
				},
				isCategoryMutating,
				mutationState
			});
		}, [
			onEdit,
			onDelete,
			isCategoryMutating,
			mutationState
		]),
		server,
		context: "shop",
		initialPageSize: 10,
		filterableColumns: (0, import_react.useMemo)(() => getSharedCategoryFilters({
			statusOptions: VENDOR_STATUS_OPTIONS,
			includeFeatured: true
		}), []),
		globalFilterPlaceholder: "Search categories...",
		className
	});
}
function AdminCategoryTable({ server, className, onEdit, onDelete, onToggleActive, onToggleFeatured, mutationState, isCategoryMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns: (0, import_react.useMemo)(() => {
			return createCategoryColumns({
				mode: "admin",
				actions: {
					onEdit,
					onDelete,
					onToggleActive,
					onToggleFeatured
				},
				isCategoryMutating,
				mutationState
			});
		}, [
			onEdit,
			onDelete,
			onToggleActive,
			onToggleFeatured,
			isCategoryMutating,
			mutationState
		]),
		server,
		context: "admin",
		initialPageSize: 10,
		filterableColumns: (0, import_react.useMemo)(() => getSharedCategoryFilters({
			statusOptions: VENDOR_STATUS_OPTIONS,
			includeFeatured: true
		}), []),
		globalFilterPlaceholder: "Search categories...",
		className
	});
}
//#endregion
export { CATEGORY_ICON_OPTIONS as n, VendorCategoryTable as r, AdminCategoryTable as t };
