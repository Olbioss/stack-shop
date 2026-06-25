import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { h as useAdminProducts, o as createAdminProductsFetcher } from "./use-admin-entity-fetchers-DkFElJdN.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import { n as ProductTable, t as ProductHeader } from "./product-table-DT6MkyLe.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-G2ipsUxc.js
var import_jsx_runtime = require_jsx_runtime();
function AdminProductsTemplate({ server, onEdit, onDelete, mutationState, isProductMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductHeader, {
			role: "admin",
			showAddButton: false
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductTable, {
			server,
			onEdit,
			onDelete,
			mutationState,
			isMutating: isProductMutating,
			mode: "vendor"
		})]
	});
}
function RouteComponent() {
	const server = createAdminProductsFetcher();
	const { deleteProduct, mutationState, isProductMutating } = useAdminProducts();
	const { deletingItem: deletingProduct, setDeletingItem: setDeletingProduct, handleDelete: handleDeleteProduct, confirmDelete } = useEntityCRUD({ onDelete: async (id) => {
		await deleteProduct(id);
	} });
	const productMutationState = {
		deletingId: mutationState.deletingId,
		updatingId: mutationState.updatingId,
		togglingId: mutationState.togglingId
	};
	const handleEditProduct = (product) => {
		toast.info(`Edit "${product.name}" is not available yet.`);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminProductsTemplate, {
		server,
		onEdit: handleEditProduct,
		onDelete: handleDeleteProduct,
		mutationState: productMutationState,
		isProductMutating
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
		open: !!deletingProduct,
		onOpenChange: (open) => !open && setDeletingProduct(null),
		onConfirm: confirmDelete,
		isDeleting: mutationState.deletingId === deletingProduct?.id,
		itemName: deletingProduct?.name,
		entityType: "product"
	})] });
}
//#endregion
export { RouteComponent as component };
