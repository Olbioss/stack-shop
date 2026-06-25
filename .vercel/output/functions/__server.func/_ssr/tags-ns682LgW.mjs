import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { g as useAdminTags, s as createAdminTagsFetcher } from "./use-admin-entity-fetchers-DkFElJdN.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import { n as TagTable, t as TagHeader } from "./tag-table-bCtdW36v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tags-ns682LgW.js
var import_jsx_runtime = require_jsx_runtime();
function AdminTagsTemplate({ server, onDelete, onToggleActive, mutationState, isTagMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagHeader, {
			role: "admin",
			showAddButton: false
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagTable, {
			server,
			onDelete,
			onToggleActive,
			mutationState,
			isTagMutating,
			mode: "admin"
		})]
	});
}
function RouteComponent() {
	const server = createAdminTagsFetcher();
	const { toggleActive, deleteTag, mutationState, isTagMutating } = useAdminTags();
	const { deletingItem: deletingTag, setDeletingItem: setDeletingTag, handleDelete, confirmDelete } = useEntityCRUD({ onDelete: async (id) => {
		await deleteTag(id);
	} });
	const handleToggleActive = async (tag) => await toggleActive({
		id: tag.id,
		isActive: !tag.isActive
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTagsTemplate, {
		server,
		onDelete: handleDelete,
		onToggleActive: handleToggleActive,
		mutationState,
		isTagMutating
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
		open: !!deletingTag,
		onOpenChange: (open) => !open && setDeletingTag(null),
		onConfirm: confirmDelete,
		isDeleting: mutationState.deletingId === deletingTag?.id,
		itemName: deletingTag?.name,
		entityType: "tag"
	})] });
}
//#endregion
export { RouteComponent as component };
