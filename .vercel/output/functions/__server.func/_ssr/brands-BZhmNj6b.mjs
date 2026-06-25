import { o as __toESM } from "../_runtime.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { f as useAdminBrands, n as createAdminBrandsFetcher } from "./use-admin-entity-fetchers-DkFElJdN.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import { n as createBrandColumns, r as getSharedBrandFilters, t as BrandHeader } from "./brand-header-CrHN9-RH.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/brands-BZhmNj6b.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminBrandsTable({ server, className, onEdit, onDelete, onToggleActive, mutationState, isBrandMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns: (0, import_react.useMemo)(() => {
			return createBrandColumns({
				mode: "admin",
				actions: {
					onEdit,
					onDelete,
					onToggleActive
				},
				mutationState,
				isBrandMutating
			});
		}, [
			onEdit,
			onDelete,
			onToggleActive,
			mutationState,
			isBrandMutating
		]),
		server,
		context: "admin",
		initialPageSize: 10,
		filterableColumns: (0, import_react.useMemo)(() => getSharedBrandFilters(), []),
		globalFilterPlaceholder: "Search brands...",
		className
	});
}
function AdminBrandsTemplate({ server, onEditBrand, onDeleteBrand, onToggleActive, mutationState, isBrandMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandHeader, { role: "admin" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminBrandsTable, {
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
	const server = createAdminBrandsFetcher();
	const { toggleActive, deleteBrand, mutationState, isBrandMutating } = useAdminBrands();
	const { deletingItem: deletingBrand, setDeletingItem: setDeletingBrand, handleDelete: handleDeleteBrand, confirmDelete } = useEntityCRUD({ onDelete: async (id) => {
		await deleteBrand(id);
	} });
	const handleToggleActive = async (brand) => await toggleActive({
		id: brand.id,
		isActive: !brand.isActive
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminBrandsTemplate, {
		server,
		onDeleteBrand: handleDeleteBrand,
		onToggleActive: handleToggleActive,
		mutationState,
		isBrandMutating
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
		open: !!deletingBrand,
		onOpenChange: (open) => !open && setDeletingBrand(null),
		onConfirm: confirmDelete,
		isDeleting: mutationState.deletingId === deletingBrand?.id,
		itemName: deletingBrand?.name,
		entityType: "brand"
	})] });
}
//#endregion
export { RouteComponent as component };
