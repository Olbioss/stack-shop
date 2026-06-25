import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as useShops, r as useTransformedShops } from "./use-shops-Cbmwju82.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import { n as MyShopsTemplate, t as AddShopDialog } from "./my-shops-template-SMPNntl6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-shop-DskcqVjx.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { createShop, isCreating } = useShops();
	const { shops, vendorId: currentVendorId } = useTransformedShops();
	const { isDialogOpen, setIsDialogOpen, handleAdd: handleAddShop, handleDialogClose } = useEntityCRUD({ onDelete: async (_id) => {} });
	const handleShopSubmit = async (data) => {
		try {
			await createShop({
				name: data.name,
				slug: data.slug,
				description: data.description,
				logo: data.logo || void 0,
				banner: data.banner || void 0,
				address: data.address,
				phone: data.phone,
				email: data.email,
				enableNotifications: data.enableNotification
			});
			handleDialogClose();
		} catch (error) {
			console.error("Failed to create shop:", error);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyShopsTemplate, {
		shops,
		onCreateShop: handleAddShop,
		currentVendorId
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddShopDialog, {
		open: isDialogOpen,
		onOpenChange: (open) => {
			setIsDialogOpen(open);
			if (!open) handleDialogClose();
		},
		onSubmit: handleShopSubmit,
		isSubmitting: isCreating
	})] });
}
//#endregion
export { RouteComponent as component };
