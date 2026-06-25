import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { N as Plus } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./page-header-DLbA-yB-.mjs";
import { a as mockStaff, n as AddStaffDialog, r as StaffTable, t as ADMIN_STAFF_PERMISSIONS } from "./staff-DWWhh8kS.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/staff-mYEEUiTH.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function StaffHeader({ onAddStaff, role = "vendor", showAddButton = true, children, className }) {
	const [isAddDialogOpen, setIsAddDialogOpen] = (0, import_react.useState)(false);
	const handleAddStaff = (data) => {
		onAddStaff?.(data);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHeader, {
		title: "Staff Members",
		description: role === "admin" ? "Manage platform-wide staff and their roles" : "Manage your shop staff and their roles",
		className,
		children: [children, showAddButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddStaffDialog, {
			open: isAddDialogOpen,
			onOpenChange: setIsAddDialogOpen,
			onSubmit: handleAddStaff
		})]
	});
}
function AdminStaffTemplate({ staff, onAddStaff, onDeleteStaff }) {
	const [isAddDialogOpen, setIsAddDialogOpen] = (0, import_react.useState)(false);
	const handleAddStaff = (data) => {
		onAddStaff({
			...data,
			avatar: void 0
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(StaffHeader, {
			role: "admin",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AddStaffDialog, {
				open: isAddDialogOpen,
				onOpenChange: setIsAddDialogOpen,
				onSubmit: handleAddStaff
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => setIsAddDialogOpen(true),
				size: "sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }), "Add Staff"]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StaffTable, {
			staff,
			permissions: ADMIN_STAFF_PERMISSIONS,
			onDeleteStaff
		})]
	});
}
function RouteComponent() {
	const [staff, setStaff] = (0, import_react.useState)(mockStaff);
	const handleAddStaff = (data) => {
		const newStaff = {
			...data,
			id: String(staff.length + 1),
			joinedDate: (/* @__PURE__ */ new Date()).toISOString()
		};
		setStaff([...staff, newStaff]);
	};
	const handleDeleteStaff = (id) => {
		setStaff(staff.filter((s) => s.id !== id));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminStaffTemplate, {
		staff,
		onAddStaff: handleAddStaff,
		onDeleteStaff: handleDeleteStaff
	});
}
//#endregion
export { RouteComponent as component };
