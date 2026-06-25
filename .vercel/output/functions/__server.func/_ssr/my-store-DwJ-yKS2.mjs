import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as useSuspenseQuery } from "../_libs/tanstack__react-query.mjs";
import { i as vendorShopsQueryOptions, n as useShops } from "./use-shops-Cbmwju82.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import { n as MyShopsTemplate, t as AddShopDialog } from "./my-shops-template-SMPNntl6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/my-store-DwJ-yKS2.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { createShop, isCreating } = useShops();
	const { data } = useSuspenseQuery(vendorShopsQueryOptions({ filterByVendor: true }));
	const { shops: transformedShops, vendorId } = data;
	const { isDialogOpen, setIsDialogOpen, handleAdd: handleAddShop, handleDialogClose } = useEntityCRUD({ onDelete: async (id) => {
		console.log("Delete shop with ID:", id);
	} });
	const handleShopSubmit = async (data) => {
		try {
			await createShop({
				name: data.name,
				slug: data.slug,
				description: data.description,
				logo: typeof data.logo === "string" ? data.logo : void 0,
				banner: typeof data.banner === "string" ? data.banner : void 0,
				address: data.address,
				phone: data.phone,
				email: data.email,
				enableNotifications: data.enableNotification
			});
			handleDialogClose();
		} catch (err) {
			console.error("Failed to create shop:", err);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MyShopsTemplate, {
		shops: transformedShops,
		onCreateShop: handleAddShop,
		currentVendorId: vendorId,
		title: "My Store",
		description: "Manage your own store directly from the admin panel."
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
