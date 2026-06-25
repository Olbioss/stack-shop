import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { _ as useAdminTaxRates, c as createAdminTaxRatesFetcher } from "./use-admin-entity-fetchers-DkFElJdN.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import { n as TaxTable, t as TaxHeader } from "./tax-header-CuuwApby.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/taxes-BgwNzNwB.js
var import_jsx_runtime = require_jsx_runtime();
function AdminTaxesTemplate({ server, onDeleteTax, onEditTax, onToggleActive, mutationState, isTaxMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaxHeader, {
			role: "admin",
			showAddButton: false
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaxTable, {
			server,
			onDelete: onDeleteTax,
			onEdit: onEditTax,
			onToggleActive,
			mutationState,
			isMutating: isTaxMutating,
			mode: "admin"
		})]
	});
}
function RouteComponent() {
	const server = createAdminTaxRatesFetcher();
	const { toggleActive, deleteTaxRate, mutationState, isTaxRateMutating } = useAdminTaxRates();
	const { deletingItem: deletingTaxRate, setDeletingItem: setDeletingTaxRate, handleDelete, confirmDelete } = useEntityCRUD({ onDelete: async (id) => {
		await deleteTaxRate(id);
	} });
	const handleToggleActive = async (taxRate) => await toggleActive({
		id: taxRate.id,
		isActive: !taxRate.isActive
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTaxesTemplate, {
		server,
		onDeleteTax: handleDelete,
		onToggleActive: handleToggleActive,
		mutationState,
		isTaxMutating: isTaxRateMutating
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
		open: !!deletingTaxRate,
		onOpenChange: (open) => !open && setDeletingTaxRate(null),
		onConfirm: confirmDelete,
		isDeleting: mutationState.deletingId === deletingTaxRate?.id,
		itemName: deletingTaxRate?.name,
		entityType: "tax rate"
	})] });
}
//#endregion
export { RouteComponent as component };
