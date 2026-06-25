import { o as __toESM } from "../_runtime.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { a as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { t as shopBySlugQueryOptions } from "./use-shops-Cbmwju82.mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { t as EntityFormDialogExtended } from "./entity-form-dialog-extended-DEYvjcQR.mjs";
import { n as createTaxRateSchema } from "./tax-rate-query-BZqT2dMh.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import { O as useTaxRates, p as createVendorTaxRatesFetcher } from "./use-vendor-entity-fetcher-DwnqReOY.mjs";
import { t as Route } from "./taxes-BYrMgwCj.mjs";
import { n as TaxTable, t as TaxHeader } from "./tax-header-CuuwApby.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/taxes-C75GYrnP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fields = [
	{
		name: "name",
		label: "Name",
		type: "text",
		required: true,
		placeholder: "Enter tax rate name",
		description: "Name for your tax rate (e.g., VAT, Sales Tax)"
	},
	{
		name: "rate",
		label: "Rate (%)",
		type: "number",
		required: true,
		placeholder: "0.00",
		description: "Tax rate percentage (between 0.01 and 100)"
	},
	{
		name: "country",
		label: "Country",
		required: true,
		type: "text",
		placeholder: "US, UK, CA",
		description: "ISO country code (2 characters)"
	},
	{
		name: "state",
		label: "State",
		type: "text",
		placeholder: "NY, CA, TX",
		description: "State/Province code (optional)"
	},
	{
		name: "zip",
		label: "ZIP Code",
		type: "text",
		placeholder: "12345",
		description: "ZIP/Postal code pattern (optional)"
	},
	{
		name: "priority",
		label: "Priority",
		type: "number",
		min: 1,
		required: true,
		placeholder: "1",
		description: "Priority for tax calculation (lower number = higher priority)"
	}
];
function AddTaxDialog({ open, onOpenChange, onSubmit, isSubmitting, initialValues }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityFormDialogExtended, {
		open,
		onOpenChange,
		onSubmit,
		isSubmitting,
		initialValues,
		title: "Tax Rate",
		description: "Create or update a tax rate for your shop.",
		validationSchema: createTaxRateSchema,
		submitButtonText: {
			create: "Create Tax Rate",
			update: "Update Tax Rate"
		},
		fields
	});
}
function ShopTaxesTemplate({ server, onAddTax, onEdit, onDelete, onToggleActive, mutationState, isTaxMutating, showAddButton = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaxHeader, {
			onAdd: onAddTax,
			role: "vendor",
			showAddButton
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TaxTable, {
			server,
			onEdit,
			onDelete,
			onToggleActive: onToggleActive ? (taxRate) => onToggleActive(taxRate.id) : void 0,
			mutationState,
			isMutating: isTaxMutating,
			mode: "vendor"
		})]
	});
}
function RouteComponent() {
	const { slug } = Route.useParams();
	const { data: shopData } = useSuspenseQuery(shopBySlugQueryOptions(slug));
	const shopId = shopData?.shop?.id ?? "";
	const server = (0, import_react.useMemo)(() => createVendorTaxRatesFetcher(shopId), [shopId]);
	const { createTaxRate, isCreating, updateTaxRate, isUpdating, deleteTaxRate, toggleTaxRateActive, mutationState, isTaxRateMutating } = useTaxRates(shopId);
	const { isDialogOpen, setIsDialogOpen, editingItem: editingTax, deletingItem: deletingTax, setDeletingItem: setDeletingTax, handleAdd: handleAddTax, handleEdit: handleEditTax, handleDelete: handleDeleteTax, confirmDelete, handleDialogClose } = useEntityCRUD({ onDelete: async (id) => {
		await deleteTaxRate(id);
	} });
	const handleTaxSubmit = async (data) => {
		try {
			if (editingTax) await updateTaxRate({
				id: editingTax.id,
				name: data.name,
				rate: data.rate,
				country: data.country,
				state: data.state,
				zip: data.zip,
				priority: data.priority,
				isActive: data.isActive,
				isCompound: data.isCompound
			});
			else await createTaxRate({
				name: data.name,
				rate: data.rate,
				country: data.country,
				state: data.state,
				zip: data.zip,
				priority: data.priority,
				isActive: data.isActive || false,
				isCompound: data.isCompound || false
			});
			handleDialogClose();
		} catch (error) {
			console.error("Failed to save tax rate:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopTaxesTemplate, {
			server,
			onAddTax: handleAddTax,
			onEdit: handleEditTax,
			onDelete: handleDeleteTax,
			onToggleActive: toggleTaxRateActive,
			mutationState,
			isTaxMutating: isTaxRateMutating
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddTaxDialog, {
			open: isDialogOpen,
			onOpenChange: (open) => {
				setIsDialogOpen(open);
				if (!open) handleDialogClose();
			},
			onSubmit: handleTaxSubmit,
			isSubmitting: isCreating || isUpdating,
			initialValues: editingTax ? {
				name: editingTax.name,
				rate: Number(editingTax.rate),
				country: editingTax.country,
				state: editingTax.state,
				zip: editingTax.zip,
				priority: Number(editingTax.priority),
				isActive: editingTax.isActive,
				isCompound: editingTax.isCompound
			} : void 0
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
			open: !!deletingTax,
			onOpenChange: (open) => !open && setDeletingTax(null),
			onConfirm: confirmDelete,
			itemName: deletingTax?.name,
			entityType: "tax rate"
		})
	] });
}
//#endregion
export { RouteComponent as component };
