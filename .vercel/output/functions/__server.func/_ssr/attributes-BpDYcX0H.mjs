import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { n as AttributeHeader, r as AttributeTable, t as AddAttributeDialog } from "./attribute-header-MWCHeCVD.mjs";
import { d as useAdminAttributes, t as createAdminAttributesFetcher } from "./use-admin-entity-fetchers-DkFElJdN.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/attributes-BpDYcX0H.js
var import_jsx_runtime = require_jsx_runtime();
function AdminAttributesTemplate({ server, onEditAttribute, onDeleteAttribute, onToggleActive, mutationState, isAttributeMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttributeHeader, { role: "admin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AttributeTable, {
			server,
			onEdit: onEditAttribute,
			onDelete: onDeleteAttribute,
			onToggleActive,
			mutationState,
			isAttributeMutating,
			mode: "admin"
		})]
	});
}
function RouteComponent() {
	const server = createAdminAttributesFetcher();
	const { toggleActive, deleteAttribute, updateAttribute, mutationState, isAttributeMutating, isUpdating } = useAdminAttributes();
	const { isDialogOpen, setIsDialogOpen, editingItem: editingAttribute, deletingItem: deletingAttribute, setDeletingItem: setDeletingAttribute, handleEdit: handleEditAttribute, handleDelete: handleDeleteAttribute, confirmDelete, handleDialogClose } = useEntityCRUD({ onDelete: async (id) => {
		await deleteAttribute(id);
	} });
	const handleToggleActive = async (attribute) => await toggleActive({
		id: attribute.id,
		isActive: !!attribute.isActive
	});
	const handleAttributeSubmit = async (data) => {
		if (!editingAttribute) return;
		try {
			await updateAttribute({
				id: editingAttribute.id,
				name: data.name,
				slug: data.slug,
				type: data.type,
				values: data.values
			});
			handleDialogClose();
		} catch (error) {
			console.error("Failed to update attribute:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminAttributesTemplate, {
			server,
			onEditAttribute: handleEditAttribute,
			onDeleteAttribute: handleDeleteAttribute,
			onToggleActive: handleToggleActive,
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
			isSubmitting: isUpdating,
			role: "admin",
			initialValues: editingAttribute ? {
				name: editingAttribute.name,
				slug: editingAttribute.slug,
				type: editingAttribute.type,
				values: (editingAttribute.values || []).map((value) => ({
					id: value.id,
					name: value.name,
					slug: value.slug,
					value: value.value || ""
				}))
			} : null
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
			open: !!deletingAttribute,
			onOpenChange: (open) => !open && setDeletingAttribute(null),
			onConfirm: confirmDelete,
			isDeleting: mutationState.deletingId === deletingAttribute?.id,
			itemName: deletingAttribute?.name,
			entityType: "attribute"
		})
	] });
}
//#endregion
export { RouteComponent as component };
