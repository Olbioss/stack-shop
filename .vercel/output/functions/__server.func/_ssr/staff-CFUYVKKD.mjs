import { o as __toESM } from "../_runtime.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as createEntityHeader } from "./entity-header-DzvDdutM.mjs";
import { a as mockStaff, i as VENDOR_STAFF_PERMISSIONS, n as AddStaffDialog, r as StaffTable } from "./staff-DWWhh8kS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/staff-CFUYVKKD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var StaffHeader = createEntityHeader({
	entityName: "Staff",
	entityNamePlural: "Staff",
	adminDescription: "Manage staff across the platform",
	vendorDescription: "Manage your staff"
});
function ShopStaffTemplate({ staff, onAddStaff, onEditStaff, onDeleteStaff }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaffHeader, {
			role: "vendor",
			onAdd: onAddStaff,
			showAddButton: !!onAddStaff
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaffTable, {
			staff,
			permissions: VENDOR_STAFF_PERMISSIONS,
			onEditStaff,
			onDeleteStaff
		})]
	});
}
function RouteComponent() {
	const [staff, setStaff] = (0, import_react.useState)(mockStaff);
	const [isDialogOpen, setIsDialogOpen] = (0, import_react.useState)(false);
	const handleAddStaff = () => {
		setIsDialogOpen(true);
	};
	const handleStaffSubmit = (data) => {
		const newStaff = {
			id: String(staff.length + 1),
			name: data.name,
			email: data.email,
			role: data.role,
			avatar: data.avatar ? URL.createObjectURL(data.avatar[0]) : void 0,
			status: data.status,
			joinedDate: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
		};
		setStaff([...staff, newStaff]);
		console.log("Created staff:", newStaff);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShopStaffTemplate, {
		staff,
		onAddStaff: handleAddStaff
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddStaffDialog, {
		open: isDialogOpen,
		onOpenChange: setIsDialogOpen,
		onSubmit: handleStaffSubmit
	})] });
}
//#endregion
export { RouteComponent as component };
