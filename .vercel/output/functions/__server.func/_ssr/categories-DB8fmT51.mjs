import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { N as Plus } from "../_libs/lucide-react.mjs";
import { a as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as shopBySlugQueryOptions } from "./use-shops-Cbmwju82.mjs";
import { n as createCategorySchema } from "./category-query-C0zo9q64.mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { t as EntityFormDialogExtended } from "./entity-form-dialog-extended-DEYvjcQR.mjs";
import { n as PageHeader } from "./page-header-DLbA-yB-.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import "./category-Cw6oCYeI.mjs";
import { o as createVendorCategoriesFetcher } from "./use-vendor-entity-fetcher-C_d9aXVF.mjs";
import { t as Route } from "./categories-BSmuGq7U.mjs";
import { n as CATEGORY_ICON_OPTIONS, r as VendorCategoryTable } from "./category-table-BJNGJwLZ.mjs";
import { n as useCategories } from "./use-category-CArlVryS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/categories-DB8fmT51.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AddCategoryDialog({ open, onOpenChange, onSubmit, categories, isSubmitting = false, initialValues }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityFormDialogExtended, {
		open,
		onOpenChange,
		onSubmit,
		isSubmitting,
		initialValues,
		title: "Category",
		description: "Create a new product category for your shop.",
		validationSchema: createCategorySchema,
		submitButtonText: {
			create: "Create Category",
			update: "Update Category"
		},
		fields: [
			{
				name: "name",
				label: "Category Name",
				required: true,
				placeholder: "Electronics",
				autoGenerateSlug: true
			},
			{
				name: "slug",
				label: "Slug",
				required: true,
				placeholder: "electronics (auto-generated if empty)",
				description: "URL-friendly identifier for your category"
			},
			{
				name: "description",
				label: "Description",
				type: "textarea",
				placeholder: "Latest gadgets and electronic accessories"
			},
			{
				name: "parentId",
				label: "Parent Category",
				type: "select",
				placeholder: "Select parent category (Optional)",
				selectOptions: [{
					label: "None (Root Category)",
					value: "none"
				}, ...categories.map((cat) => ({
					label: cat.name,
					value: cat.id
				}))]
			},
			{
				name: "icon",
				label: "Icon",
				type: "select",
				placeholder: "Select an icon",
				selectOptions: CATEGORY_ICON_OPTIONS
			},
			{
				name: "image",
				label: "Category Image",
				type: "file"
			}
		]
	});
}
function CategoryHeader({ onAddCategory, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Categories",
		description: "Manage your product categories and organization",
		className,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
			onClick: onAddCategory,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 size-4" }), "Add Category"]
		})
	});
}
function ShopCategoriesTemplate({ server, onAddCategory, onEditCategory, onDeleteCategory, mutationState, isCategoryMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryHeader, { onAddCategory }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorCategoryTable, {
			server,
			onEdit: onEditCategory,
			onDelete: onDeleteCategory,
			mutationState,
			isCategoryMutating
		})]
	});
}
function RouteComponent() {
	const { slug } = Route.useParams();
	const { data: shopData } = useSuspenseQuery(shopBySlugQueryOptions(slug));
	const shopId = shopData?.shop.id ?? "";
	const server = (0, import_react.useMemo)(() => createVendorCategoriesFetcher(shopId), [shopId]);
	const { categoriesQueryOptions: categoriesOptions, createCategory, updateCategory, deleteCategory, mutationState, isCategoryMutating } = useCategories(shopId);
	const { data: categoriesData } = useSuspenseQuery(categoriesOptions({
		limit: 100,
		offset: 0,
		sortBy: "sortOrder",
		sortDirection: "asc"
	}));
	const { isDialogOpen, setIsDialogOpen, editingItem: editingCategory, deletingItem: deletingCategory, setDeletingItem: setDeletingCategory, handleAdd: handleAddCategory, handleEdit: handleEditCategory, handleDelete: handleDeleteCategory, confirmDelete, handleDialogClose } = useEntityCRUD({ onDelete: async (id) => {
		await deleteCategory(id);
	} });
	const categoryOptions = (categoriesData?.data ?? []).map((c) => ({
		id: c.id,
		name: c.name
	}));
	const handleCategorySubmit = async (data) => {
		try {
			if (editingCategory) await updateCategory({
				id: editingCategory.id,
				name: data.name,
				slug: data.slug,
				description: data.description || void 0,
				icon: data.icon || void 0,
				parentId: data.parentId === "none" ? void 0 : data.parentId,
				image: data.image || void 0
			});
			else await createCategory({
				name: data.name,
				slug: data.slug,
				description: data.description || void 0,
				icon: data.icon || void 0,
				parentId: data.parentId === "none" ? void 0 : data.parentId,
				sortOrder: 0,
				isActive: true,
				featured: false,
				image: data.image || void 0
			});
			handleDialogClose();
		} catch (error) {
			console.error("Failed to save category:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopCategoriesTemplate, {
			server,
			onAddCategory: handleAddCategory,
			onEditCategory: handleEditCategory,
			onDeleteCategory: handleDeleteCategory,
			mutationState,
			isCategoryMutating
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddCategoryDialog, {
			open: isDialogOpen,
			onOpenChange: (open) => {
				setIsDialogOpen(open);
				if (!open) handleDialogClose();
			},
			onSubmit: handleCategorySubmit,
			categories: categoryOptions,
			isSubmitting: mutationState.isAnyMutating,
			initialValues: editingCategory ? {
				name: editingCategory.name,
				slug: editingCategory.slug,
				description: editingCategory.description ?? "",
				image: editingCategory.image ?? null,
				icon: editingCategory.icon ?? "",
				parentId: editingCategory.parentId ?? "none"
			} : null
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
			open: !!deletingCategory,
			onOpenChange: (open) => !open && setDeletingCategory(null),
			onConfirm: confirmDelete,
			isDeleting: mutationState.deletingId === deletingCategory?.id,
			itemName: deletingCategory?.name,
			entityType: "category"
		})
	] });
}
//#endregion
export { RouteComponent as component };
