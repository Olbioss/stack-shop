import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { _ as SquarePen, u as Trash2, yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { a as FieldLabel } from "./field--Rw3cGW0.mjs";
import { a as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as shopBySlugQueryOptions } from "./use-shops-Cbmwju82.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { t as EntityFormDialogExtended } from "./entity-form-dialog-extended-DEYvjcQR.mjs";
import { t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { t as createEntityHeader } from "./entity-header-DzvDdutM.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import { t as createShippingMethodSchema } from "./shipping-BnpSxyrq.mjs";
import { E as useShipping, d as createVendorShippingFetcher } from "./use-vendor-entity-fetcher-C_d9aXVF.mjs";
import { t as Switch$1 } from "./switch-CuGkaFH3.mjs";
import { t as Route } from "./shipping-Ut0bSRTq.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shipping-YMqgaUZz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AddShippingDialog({ open, onOpenChange, onSubmit, isSubmitting, initialValues }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityFormDialogExtended, {
		open,
		onOpenChange,
		onSubmit: (data) => {
			onSubmit({
				...data,
				price: Number(data.price)
			});
		},
		isSubmitting,
		title: "Shipping Method",
		description: "Add a new shipping method for your shop.",
		validationSchema: createShippingMethodSchema,
		submitButtonText: {
			create: "Create Method",
			update: "Update Method"
		},
		fields: (0, import_react.useMemo)(() => [
			{
				name: "name",
				label: "Name",
				required: true,
				placeholder: "e.g. Standard Shipping",
				defaultValue: ""
			},
			{
				name: "price",
				label: "Price",
				required: true,
				placeholder: "0.00",
				defaultValue: 0
			},
			{
				name: "duration",
				label: "Duration",
				required: true,
				placeholder: "e.g. 3-5 business days",
				defaultValue: ""
			},
			{
				name: "description",
				label: "Description",
				type: "textarea",
				placeholder: "Describe this shipping method...",
				defaultValue: ""
			},
			{
				name: "isActive",
				label: "Active Status",
				type: "custom",
				defaultValue: true,
				render: ({ form, isSubmitting: isSubmittingExternal }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
					name: "isActive",
					children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
							id: "isActive",
							checked: field.state.value,
							onCheckedChange: field.handleChange,
							disabled: isSubmittingExternal
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
							htmlFor: "isActive",
							className: "m-0",
							children: "Active"
						})]
					})
				})
			}
		], []),
		initialValues
	});
}
var ShippingHeader = createEntityHeader({
	entityName: "Shipping Method",
	entityNamePlural: "Shipping Methods",
	adminDescription: "Manage platform-wide shipping options and delivery methods",
	vendorDescription: "Manage your shipping options and delivery methods"
});
var getSharedShippingFilters = (options) => {
	return [{
		id: "isActive",
		label: "Status",
		type: "select",
		options: options.statusOptions,
		placeholder: "Filter by status"
	}];
};
var SHIPPING_STATUS_OPTIONS = [{
	label: "Active",
	value: "true"
}, {
	label: "Inactive",
	value: "false"
}];
var createShippingColumns = ({ actions, mutationState, isMutating, mode: _mode = "vendor" }) => {
	return [
		{
			accessorKey: "name",
			header: "Name",
			cell: ({ row }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-medium",
					children: row.getValue("name")
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "price",
			header: "Price",
			cell: ({ row }) => {
				const price = row.getValue("price");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-medium",
					children: ["$", typeof price === "number" ? price.toFixed(2) : parseFloat(price).toFixed(2)]
				});
			},
			enableSorting: true
		},
		{
			accessorKey: "duration",
			header: "Duration",
			cell: ({ row }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					children: row.getValue("duration")
				});
			}
		},
		{
			accessorKey: "isActive",
			header: "Status",
			cell: ({ row }) => {
				const isActive = row.getValue("isActive");
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: isActive ? "default" : "secondary",
					children: isActive ? "Active" : "Inactive"
				});
			},
			filterFn: (row, id, value) => {
				return value.includes(String(row.getValue(id)));
			}
		},
		{
			accessorKey: "description",
			header: "Description",
			cell: ({ row }) => {
				return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "max-w-xs truncate text-muted-foreground",
					children: row.getValue("description") || "No description"
				});
			}
		},
		{
			id: "actions",
			enableHiding: false,
			cell: ({ row }) => {
				const shippingMethod = row.original;
				return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "ghost",
						className: "h-8 w-8 p-0",
						disabled: mutationState?.deletingId === shippingMethod.id || isMutating?.(shippingMethod.id),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "sr-only",
							children: "Open menu"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
					align: "end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						onClick: () => actions.onEdit?.(shippingMethod),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "mr-2 h-4 w-4" }), "Edit"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
						onClick: () => actions.onDelete?.(shippingMethod),
						className: "text-destructive",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 h-4 w-4" }), "Delete"]
					})]
				})] });
			}
		}
	];
};
function ShippingTable({ shippingMethods, server, onEdit, onDelete, className, mutationState, isMutating, mode = "vendor" }) {
	const columns = (0, import_react.useMemo)(() => {
		return createShippingColumns({
			actions: {
				onEdit,
				onDelete
			},
			isMutating,
			mutationState,
			mode
		});
	}, [
		onEdit,
		onDelete,
		isMutating,
		mutationState,
		mode
	]);
	const filterableColumns = (0, import_react.useMemo)(() => getSharedShippingFilters({ statusOptions: SHIPPING_STATUS_OPTIONS }), []);
	if (server) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		server,
		context: "shop",
		initialPageSize: 10,
		filterableColumns,
		globalFilterPlaceholder: "Search shipping methods...",
		className
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		data: shippingMethods || [],
		filterableColumns,
		globalFilterPlaceholder: "Search shipping methods...",
		className
	});
}
function ShopShippingTemplate({ server, onAddShipping, onEdit, onDelete, mutationState, isShippingMutating, showAddButton = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShippingHeader, {
			role: "vendor",
			onAdd: onAddShipping,
			showAddButton
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShippingTable, {
			server,
			onEdit,
			onDelete,
			mutationState,
			isMutating: isShippingMutating,
			mode: "vendor"
		})]
	});
}
function RouteComponent() {
	const { slug } = Route.useParams();
	const { data: { shop } } = useSuspenseQuery(shopBySlugQueryOptions(slug));
	const { createShipping, updateShipping, deleteShipping, mutationState, isShippingMutating } = useShipping(shop.id);
	const server = (0, import_react.useMemo)(() => createVendorShippingFetcher(shop.id), [shop.id]);
	const { isDialogOpen, setIsDialogOpen, editingItem: editingShipping, deletingItem: deletingShipping, setDeletingItem: setDeletingShipping, handleAdd: handleAddShipping, handleEdit: handleEditShipping, handleDelete: handleDeleteShipping, confirmDelete, handleDialogClose } = useEntityCRUD({ onDelete: async (id) => {
		await deleteShipping(id);
	} });
	const handleShippingSubmit = async (data) => {
		try {
			if (editingShipping) await updateShipping({
				...data,
				id: editingShipping.id
			});
			else await createShipping(data);
			handleDialogClose();
		} catch (error) {
			console.error("Failed to save shipping method:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopShippingTemplate, {
			server,
			onAddShipping: handleAddShipping,
			onDelete: handleDeleteShipping,
			onEdit: handleEditShipping,
			mutationState,
			isShippingMutating
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddShippingDialog, {
			open: isDialogOpen,
			onOpenChange: (open) => {
				setIsDialogOpen(open);
				if (!open) handleDialogClose();
			},
			onSubmit: handleShippingSubmit,
			isSubmitting: mutationState.isAnyMutating,
			initialValues: editingShipping ? {
				name: editingShipping.name,
				price: Number(editingShipping.price),
				duration: editingShipping.duration,
				description: editingShipping.description || "",
				isActive: editingShipping.isActive
			} : null
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
			open: !!deletingShipping,
			onOpenChange: (open) => !open && setDeletingShipping(null),
			onConfirm: confirmDelete,
			isDeleting: mutationState.deletingId === deletingShipping?.id,
			itemName: deletingShipping?.name,
			entityType: "shipping method"
		})
	] });
}
//#endregion
export { RouteComponent as component };
