import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as shopBySlugQueryOptions } from "./use-shops-Cbmwju82.mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { t as EntityFormDialogExtended } from "./entity-form-dialog-extended-DEYvjcQR.mjs";
import { t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { n as createBrandSchema } from "./brand-query-w-wFF7Pb.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import "./brands-DdHqH_d3.mjs";
import { C as useBrands, a as createVendorBrandsFetcher } from "./use-vendor-entity-fetcher-C_d9aXVF.mjs";
import { n as createBrandColumns, r as getSharedBrandFilters, t as BrandHeader } from "./brand-header-CrHN9-RH.mjs";
import { t as Route } from "./brands-K76GucV6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brands-CMFuqYbZ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AddBrandDialog({ open, onOpenChange, onSubmit, isSubmitting = false, initialValues }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityFormDialogExtended, {
		scrollable: false,
		contentClassName: "sm:max-w-150",
		open,
		onOpenChange,
		onSubmit,
		isSubmitting,
		initialValues,
		title: "Brand",
		description: "Create a new product Brand for your shop.",
		validationSchema: createBrandSchema,
		submitButtonText: {
			create: "Create Brand",
			update: "Update Brand"
		},
		fields: [
			{
				name: "name",
				label: "Brand Name",
				type: "text",
				required: true,
				placeholder: "e.g. Nike, Adidas",
				description: "URL-friendly identifier for your brand",
				autoGenerateSlug: true
			},
			{
				name: "slug",
				label: "Slug",
				type: "text",
				required: true,
				placeholder: "e.g. nike, adidas"
			},
			{
				name: "logo",
				label: "Logo",
				type: "file",
				required: false,
				placeholder: "e.g. https://www.nike.com/logo.png"
			},
			{
				name: "website",
				label: "Website",
				type: "text",
				required: false,
				placeholder: "e.g. https://www.nike.com"
			},
			{
				name: "description",
				label: "Description",
				type: "textarea",
				required: false,
				placeholder: "e.g. Leading sportswear brand"
			}
		]
	});
}
function VendorBrandTable({ server, className, onEdit, onDelete, onToggleActive, mutationState, isBrandMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns: (0, import_react.useMemo)(() => {
			return createBrandColumns({
				mode: "vendor",
				actions: {
					onEdit,
					onDelete,
					onToggleActive
				},
				isBrandMutating,
				mutationState
			});
		}, [
			onEdit,
			onDelete,
			onToggleActive,
			isBrandMutating,
			mutationState
		]),
		server,
		context: "shop",
		initialPageSize: 10,
		filterableColumns: (0, import_react.useMemo)(() => getSharedBrandFilters(), []),
		globalFilterPlaceholder: "Search brands...",
		className
	});
}
function ShopBrandsTemplate({ server, onAddBrand, onEditBrand, onDeleteBrand, onToggleActive, mutationState, isBrandMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandHeader, { onAdd: onAddBrand }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VendorBrandTable, {
			server,
			onEdit: onEditBrand,
			onDelete: onDeleteBrand,
			onToggleActive,
			mutationState,
			isBrandMutating
		})]
	});
}
function RouteComponent() {
	const { slug } = Route.useParams();
	const { data: shopData } = useSuspenseQuery(shopBySlugQueryOptions(slug));
	const shopId = shopData?.shop?.id ?? "";
	const server = (0, import_react.useMemo)(() => createVendorBrandsFetcher(shopId), [shopId]);
	const { createBrand, isCreating, updateBrand, isUpdating, deleteBrand, mutationState, isBrandMutating } = useBrands(shopId);
	const { isDialogOpen, setIsDialogOpen, editingItem: editingBrand, deletingItem: deletingBrand, setDeletingItem: setDeletingBrand, handleAdd: handleAddBrand, handleEdit: handleEditBrand, handleDelete: handleDeleteBrand, confirmDelete, handleDialogClose } = useEntityCRUD({ onDelete: async (id) => {
		await deleteBrand(id);
	} });
	const handleBrandSubmit = async (data) => {
		try {
			if (editingBrand) await updateBrand({
				id: editingBrand.id,
				name: data.name,
				slug: data.slug,
				description: data.description || void 0,
				website: data.website || void 0,
				logo: data.logo || void 0
			});
			else await createBrand({
				name: data.name,
				slug: data.slug,
				description: data.description || void 0,
				website: data.website || void 0,
				logo: data.logo || void 0,
				sortOrder: 0,
				isActive: true
			});
			handleDialogClose();
		} catch (error) {
			console.error("Failed to save brand:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopBrandsTemplate, {
			server,
			onAddBrand: handleAddBrand,
			onEditBrand: handleEditBrand,
			onDeleteBrand: handleDeleteBrand,
			mutationState,
			isBrandMutating
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddBrandDialog, {
			open: isDialogOpen,
			onOpenChange: (open) => {
				setIsDialogOpen(open);
				if (!open) handleDialogClose();
			},
			onSubmit: handleBrandSubmit,
			isSubmitting: isCreating || isUpdating,
			initialValues: editingBrand ? {
				name: editingBrand.name,
				slug: editingBrand.slug,
				description: editingBrand.description ?? "",
				logo: editingBrand.logo ?? null,
				website: editingBrand.website ?? ""
			} : null
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
			open: !!deletingBrand,
			onOpenChange: (open) => !open && setDeletingBrand(null),
			onConfirm: confirmDelete,
			itemName: deletingBrand?.name,
			entityType: "brand"
		})
	] });
}
//#endregion
export { RouteComponent as component };
