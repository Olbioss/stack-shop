import { o as __toESM } from "../_runtime.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as shopBySlugQueryOptions } from "./use-shops-Cbmwju82.mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { n as AttributeHeader, r as AttributeTable, t as AddAttributeDialog } from "./attribute-header-MWCHeCVD.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import { t as Route } from "./attributes-_4Me4R-p.mjs";
import { S as useAttributes, i as createVendorAttributesFetcher } from "./use-vendor-entity-fetcher-DwnqReOY.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/attributes-IY-rgohU.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ShopAttributesTemplate({ server, onAddAttribute, onEditAttribute, onDeleteAttribute, onToggleActive, mutationState, isAttributeMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttributeHeader, {
			onAdd: onAddAttribute,
			role: "vendor",
			showAddButton: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttributeTable, {
			server,
			onEdit: onEditAttribute,
			onDelete: onDeleteAttribute,
			onToggleActive,
			mutationState,
			isAttributeMutating,
			mode: "vendor"
		})]
	});
}
function RouteComponent() {
	const { slug } = Route.useParams();
	const { data: shopData } = useSuspenseQuery(shopBySlugQueryOptions(slug));
	const shopId = shopData?.shop?.id ?? "";
	const server = (0, import_react.useMemo)(() => createVendorAttributesFetcher(shopId), [shopId]);
	const { createAttribute, isCreating, updateAttribute, isUpdating, deleteAttribute, mutationState, isAttributeMutating } = useAttributes(shopId);
	const { isDialogOpen, setIsDialogOpen, editingItem: editingAttribute, deletingItem: deletingAttribute, setDeletingItem: setDeletingAttribute, handleAdd: handleAddAttribute, handleEdit: handleEditAttribute, handleDelete: handleDeleteAttribute, confirmDelete, handleDialogClose } = useEntityCRUD({ onDelete: async (id) => {
		await deleteAttribute(id);
	} });
	const handleAttributeSubmit = async (data) => {
		try {
			if (editingAttribute) await updateAttribute({
				id: editingAttribute.id,
				name: data.name,
				slug: data.slug || void 0,
				type: data.type,
				values: data.values
			});
			else await createAttribute({
				name: data.name,
				slug: data.slug || void 0,
				type: data.type,
				values: data.values,
				sortOrder: 0,
				isActive: true
			});
			handleDialogClose();
		} catch (error) {
			console.error("Failed to save attribute:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopAttributesTemplate, {
			server,
			onAddAttribute: handleAddAttribute,
			onEditAttribute: handleEditAttribute,
			onDeleteAttribute: handleDeleteAttribute,
			mutationState,
			isAttributeMutating
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddAttributeDialog, {
			open: isDialogOpen,
			onOpenChange: (open) => {
				setIsDialogOpen(open);
				if (!open) handleDialogClose();
			},
			onSubmit: handleAttributeSubmit,
			isSubmitting: isCreating || isUpdating,
			initialValues: editingAttribute ? {
				name: editingAttribute.name,
				slug: editingAttribute.slug,
				type: editingAttribute.type,
				values: editingAttribute.values.map((v) => ({
					id: v.id,
					name: v.name,
					slug: v.slug,
					value: v.value ?? ""
				}))
			} : null
		}, editingAttribute?.id ?? "new"),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
			open: !!deletingAttribute,
			onOpenChange: (open) => !open && setDeletingAttribute(null),
			onConfirm: confirmDelete,
			itemName: deletingAttribute?.name,
			entityType: "attribute"
		})
	] });
}
//#endregion
export { RouteComponent as component };
