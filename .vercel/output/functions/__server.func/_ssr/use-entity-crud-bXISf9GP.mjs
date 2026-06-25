import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-entity-crud-bXISf9GP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useEntityCRUD(options) {
	const { onDelete } = options;
	const [isDialogOpen, setIsDialogOpen] = (0, import_react.useState)(false);
	const [editingItem, setEditingItem] = (0, import_react.useState)(null);
	const [deletingItem, setDeletingItem] = (0, import_react.useState)(null);
	return {
		isDialogOpen,
		setIsDialogOpen,
		editingItem,
		setEditingItem,
		deletingItem,
		setDeletingItem,
		handleAdd: (0, import_react.useCallback)(() => {
			setEditingItem(null);
			setIsDialogOpen(true);
		}, []),
		handleEdit: (0, import_react.useCallback)((item) => {
			setEditingItem(item);
			setIsDialogOpen(true);
		}, []),
		handleDelete: (0, import_react.useCallback)((item) => {
			setDeletingItem(item);
		}, []),
		confirmDelete: (0, import_react.useCallback)(async () => {
			if (!deletingItem) return;
			try {
				await onDelete(deletingItem.id);
			} catch (error) {
				console.error("Failed to delete item:", error);
			} finally {
				setDeletingItem(null);
			}
		}, [deletingItem, onDelete]),
		handleDialogClose: (0, import_react.useCallback)(() => {
			setIsDialogOpen(false);
			setEditingItem(null);
		}, [])
	};
}
//#endregion
export { useEntityCRUD as t };
