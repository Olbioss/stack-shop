import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as shopBySlugQueryOptions } from "./use-shops-Cbmwju82.mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { t as EntityFormDialogExtended } from "./entity-form-dialog-extended-DEYvjcQR.mjs";
import { n as createTagSchema } from "./tag-query-B-OjxzSS.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import { D as useTags, f as createVendorTagsFetcher } from "./use-vendor-entity-fetcher-C_d9aXVF.mjs";
import { t as Route } from "./tags-CcWktYPF.mjs";
import { n as TagTable, t as TagHeader } from "./tag-table-bCtdW36v.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tags-LRzELV-X.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fields = [
	{
		name: "name",
		label: "Tag Name",
		type: "text",
		required: true,
		placeholder: "e.g. New Arrival, Best Seller, On Sale",
		autoGenerateSlug: true
	},
	{
		name: "slug",
		label: "Slug",
		type: "text",
		required: true,
		placeholder: "e.g. new-arrival, best-seller, on-sale",
		description: "URL-friendly identifier for your tag"
	},
	{
		name: "description",
		label: "Description",
		required: false,
		type: "textarea",
		placeholder: "Optional description for this tag",
		description: "Brief explanation of what this tag represents"
	}
];
function AddTagDialog({ open, onOpenChange, onSubmit, isSubmitting = false, initialValues }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityFormDialogExtended, {
		open,
		onOpenChange,
		onSubmit,
		isSubmitting,
		initialValues,
		title: "Tag",
		description: "Create a new tag to organize your products.",
		validationSchema: createTagSchema,
		submitButtonText: {
			create: "Create Tag",
			update: "Update Tag"
		},
		fields
	});
}
function ShopTagsTemplate({ server, onAddTag, onEdit, onDelete, onToggleActive, mutationState, isTagMutating, showAddButton = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagHeader, {
			onAdd: onAddTag,
			role: "vendor",
			showAddButton
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TagTable, {
			server,
			onEdit,
			onDelete,
			onToggleActive,
			mutationState,
			isTagMutating,
			mode: "vendor"
		})]
	});
}
function RouteComponent() {
	const { slug } = Route.useParams();
	const { data: shopData } = useSuspenseQuery(shopBySlugQueryOptions(slug));
	const shopId = shopData?.shop?.id ?? "";
	const server = (0, import_react.useMemo)(() => createVendorTagsFetcher(shopId), [shopId]);
	const { createTag, isCreating, updateTag, isUpdating, deleteTag, mutationState, isTagMutating } = useTags(shopId);
	const { isDialogOpen, setIsDialogOpen, editingItem: editingTag, deletingItem: deletingTag, setDeletingItem: setDeletingTag, handleAdd: handleAddTag, handleEdit: handleEditTag, handleDelete: handleDeleteTag, confirmDelete, handleDialogClose } = useEntityCRUD({ onDelete: async (id) => {
		await deleteTag(id);
	} });
	const handleTagSubmit = async (data) => {
		try {
			if (editingTag) await updateTag({
				id: editingTag.id,
				name: data.name,
				slug: data.slug,
				description: data.description,
				sortOrder: data.sortOrder,
				isActive: data.isActive
			});
			else await createTag({
				name: data.name,
				slug: data.slug,
				description: data.description,
				sortOrder: data.sortOrder ?? 0,
				isActive: data.isActive ?? true
			});
			handleDialogClose();
		} catch (error) {
			console.error("Failed to save tag:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTagsTemplate, {
			server,
			onAddTag: handleAddTag,
			onEdit: handleEditTag,
			onDelete: handleDeleteTag,
			mutationState,
			isTagMutating
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddTagDialog, {
			open: isDialogOpen,
			onOpenChange: (open) => {
				setIsDialogOpen(open);
				if (!open) handleDialogClose();
			},
			onSubmit: handleTagSubmit,
			isSubmitting: isCreating || isUpdating,
			initialValues: editingTag ? {
				name: editingTag.name,
				slug: editingTag.slug,
				description: editingTag.description,
				sortOrder: editingTag.sortOrder,
				isActive: editingTag.isActive
			} : null
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
			open: !!deletingTag,
			onOpenChange: (open) => !open && setDeletingTag(null),
			onConfirm: confirmDelete,
			itemName: deletingTag?.name,
			entityType: "tag"
		})
	] });
}
//#endregion
export { RouteComponent as component };
