import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as ConfirmDeleteDialog } from "./confirm-delete-dialog-BCCUdt4j.mjs";
import { i as createAdminCouponsFetcher, m as useAdminCoupons } from "./use-admin-entity-fetchers-DkFElJdN.mjs";
import { t as useEntityCRUD } from "./use-entity-crud-bXISf9GP.mjs";
import { n as CouponHeader, t as AdminCouponTable } from "./coupon-table-CEoIDHm1.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/coupons-CAeU9RNt.js
var import_jsx_runtime = require_jsx_runtime();
var ADMIN_COUPON_PERMISSIONS = {
	canDelete: true,
	canEdit: true,
	canView: true,
	canToggleStatus: true
};
function AdminCouponsTemplate({ server, onDeleteCoupon, onToggleStatus, mutationState, isCouponMutating }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CouponHeader, {
		role: "admin",
		showAddButton: false
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminCouponTable, {
		server,
		permissions: ADMIN_COUPON_PERMISSIONS,
		onDelete: onDeleteCoupon,
		onToggleStatus,
		mutationState,
		isCouponMutating
	})] });
}
function AdminCouponsPage() {
	const server = createAdminCouponsFetcher();
	const { toggleActive, deleteCoupon, mutationState, isCouponMutating } = useAdminCoupons();
	const { deletingItem: deletingCoupon, setDeletingItem: setDeletingCoupon, handleDelete: handleDeleteCoupon, confirmDelete } = useEntityCRUD({ onDelete: async (id) => {
		await deleteCoupon(id);
	} });
	const handleToggleStatus = async (coupon) => {
		await toggleActive({
			id: coupon.id,
			isActive: !coupon.isActive
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminCouponsTemplate, {
		server,
		onDeleteCoupon: handleDeleteCoupon,
		onToggleStatus: handleToggleStatus,
		mutationState,
		isCouponMutating
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDeleteDialog, {
		open: !!deletingCoupon,
		onOpenChange: (open) => !open && setDeletingCoupon(null),
		onConfirm: confirmDelete,
		isDeleting: mutationState.deletingId === deletingCoupon?.id,
		itemName: deletingCoupon?.code,
		entityType: "coupon"
	})] });
}
//#endregion
export { AdminCouponsPage as component };
