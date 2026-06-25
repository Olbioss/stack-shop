import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { t as createEntityHeader } from "./entity-header-DzvDdutM.mjs";
import { p as useAdminCategories, r as createAdminCategoriesFetcher } from "./use-admin-entity-fetchers-DkFElJdN.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import { t as AdminCategoryTable } from "./category-table-BJNGJwLZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-ace9q0aN.js
var import_jsx_runtime = require_jsx_runtime();
var CategoryHeader = createEntityHeader({
	entityName: "Category",
	entityNamePlural: "Categories",
	adminDescription: "Manage product categories across the platform",
	vendorDescription: "Manage your product categories and organization"
});
function AdminCategoriesTemplate({ server, onEditCategory, onDeleteCategory, onToggleActive, onToggleFeatured, mutationState, isCategoryMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryHeader, { role: "admin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminCategoryTable, {
			server,
			onEdit: onEditCategory,
			onDelete: onDeleteCategory,
			onToggleActive,
			onToggleFeatured,
			mutationState,
			isCategoryMutating
		})]
	});
}
function RouteComponent() {
	const server = createAdminCategoriesFetcher();
	const { toggleActive, toggleFeatured, deleteCategory, mutationState, isCategoryMutating } = useAdminCategories();
	const { deletingItem: deletingCategory, setDeletingItem: setDeletingCategory, handleDelete: handleDeleteCategory, confirmDelete } = useEntityCRUD({ onDelete: async (id) => {
		await deleteCategory(id);
	} });
	const handleToggleActive = async (category) => {
		await toggleActive({
			id: category.id,
			isActive: !category.isActive
		});
	};
	const handleToggleFeatured = async (category) => {
		await toggleFeatured({
			id: category.id,
			featured: !category.featured
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminCategoriesTemplate, {
		server,
		onEditCategory: void 0,
		onDeleteCategory: handleDeleteCategory,
		onToggleActive: handleToggleActive,
		onToggleFeatured: handleToggleFeatured,
		mutationState,
		isCategoryMutating
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
		open: !!deletingCategory,
		onOpenChange: (open) => !open && setDeletingCategory(null),
		onConfirm: confirmDelete,
		isDeleting: mutationState.deletingId === deletingCategory?.id,
		itemName: deletingCategory?.name,
		entityType: "category"
	})] });
}
//#endregion
export { RouteComponent as component };
