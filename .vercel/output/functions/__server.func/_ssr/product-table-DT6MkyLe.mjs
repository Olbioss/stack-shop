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
//#region node_modules/.nitro/vite/services/ssr/assets/product-table-DT6MkyLe.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ProductHeader = createEntityHeader({
	entityName: "Product",
	entityNamePlural: "Products",
	adminDescription: "Manage products across the platform",
	vendorDescription: "Manage your products"
});
var createProductTableColumns = ({ mode = "vendor", actions, mutationState, isMutating }) => {
	return [
		{
			accessorKey: "image",
			header: "Image",
			cell: ({ row }) => {
				const product = row.original;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "h-10 w-10 overflow-hidden rounded-md border bg-muted",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: (product.images?.find((img) => img.isPrimary) || product.images?.[0])?.url || "/placeholder.svg",
						alt: product.name,
						className: "h-full w-full object-cover"
					})
				});
			}
		},
		{
			accessorKey: "name",
			header: "Product",
			cell: ({ row }) => {
				const isBusy = isMutating?.(row.original.id) ?? false;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cn("font-medium", isBusy && "opacity-60"),
					children: [isBusy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "inline h-3 w-3 animate-spin mr-1" }), row.original.name]
				});
			}
		},
		{
			accessorKey: "categoryName",
			header: "Category",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-muted-foreground text-sm",
				children: row.original.categoryName || "-"
			})
		},
		{
			accessorKey: "brandName",
			header: "Brand",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-muted-foreground text-sm",
				children: row.original.brandName || "-"
			})
		},
		{
			accessorKey: "taxName",
			header: "Tax",
			cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-muted-foreground text-sm",
				children: row.original.taxName || "-"
			})
		},
		{
			accessorKey: "tagNames",
			header: "Tags",
			cell: ({ row }) => {
				const tags = row.original.tagNames;
				if (!tags || tags.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: "-"
				});
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-1",
					children: [tags.slice(0, 2).map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						className: "text-xs",
						children: tag
					}, tag)), tags.length > 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
						variant: "outline",
						className: "text-xs",
						children: ["+", tags.length - 2]
					})]
				});
			}
		},
		{
			accessorKey: "sellingPrice",
			header: "Price",
			cell: ({ row }) => {
				const price = parseFloat(row.original.sellingPrice);
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["$", Number.isNaN(price) ? "0.00" : price.toFixed(2)] });
			}
		},
		{
			accessorKey: "regularPrice",
			header: "Regular Price",
			cell: ({ row }) => {
				const price = parseFloat(row.original.regularPrice || "0.00");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["$", Number.isNaN(price) ? "0.00" : price.toFixed(2)] });
			}
		},
		{
			accessorKey: "costPrice",
			header: "Cost Price",
			cell: ({ row }) => {
				const price = parseFloat(row.original.costPrice || "0.00");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: ["$", Number.isNaN(price) ? "0.00" : price.toFixed(2)] });
			}
		},
		{
			accessorKey: "stock",
			header: "Stock",
			cell: ({ row }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: row.original.stock || 0 });
			}
		},
		{
			accessorKey: "status",
			header: "Status",
			cell: ({ row }) => {
				const status = row.original.status;
				const isToggling = mutationState?.togglingId === row.original.id;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: status === "active" ? "default" : "destructive",
						className: cn(isToggling && "opacity-60"),
						children: status === "active" ? "Active" : "Out of Stock"
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
							mode === "vendor" && actions.onToggleActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
								onClick: () => actions.onToggleActive(row.original),
								disabled: isToggling,
								children: isToggling ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-3 w-3 animate-spin" }), "Updating..."]
								}) : row.original.status === "active" ? "Deactivate" : "Activate"
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
function ProductTable({ products, server, onDelete, onEdit, onToggleActive, isMutating, mutationState, className, mode = "vendor" }) {
	const columns = (0, import_react.useMemo)(() => {
		return createProductTableColumns({
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
		context: "shop",
		initialPageSize: 10,
		globalFilterPlaceholder: "Search products...",
		className
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		data: products || [],
		className
	});
}
//#endregion
export { ProductTable as n, ProductHeader as t };
