import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { t as Input } from "./input-BP4N0xFb.mjs";
import { _ as SquarePen, u as Trash2, yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { n as AvatarFallback, r as AvatarImage, t as Avatar$1 } from "./avatar-BfSlRT72.mjs";
import { a as FieldLabel, t as Field } from "./field--Rw3cGW0.mjs";
import { d as format } from "../_libs/date-fns.mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { t as EntityFormDialogExtended } from "./entity-form-dialog-extended-DEYvjcQR.mjs";
import { t as DataTable } from "./page-header-DLbA-yB-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/staff-DWWhh8kS.js
var import_jsx_runtime = require_jsx_runtime();
var fields = [
	{
		name: "name",
		label: "Name",
		type: "text",
		required: true,
		placeholder: "e.g. John Doe"
	},
	{
		name: "email",
		label: "Email",
		type: "text",
		required: true,
		placeholder: "e.g. john.doe@example.com"
	},
	{
		name: "role",
		label: "Role",
		type: "select",
		placeholder: "Select a role",
		required: true,
		selectOptions: [
			{
				value: "manager",
				label: "Manager"
			},
			{
				value: "staff",
				label: "Staff"
			},
			{
				value: "admin",
				label: "Admin"
			}
		]
	},
	{
		name: "status",
		label: "Status",
		type: "select",
		required: true,
		selectOptions: [
			{
				value: "active",
				label: "Active"
			},
			{
				value: "invited",
				label: "Invited"
			},
			{
				value: "inactive",
				label: "Inactive"
			}
		]
	},
	{
		name: "avatar",
		label: "Avatar",
		type: "custom",
		render: ({ form }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(form.Field, {
			name: "image",
			children: (field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Field, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
				htmlFor: field.name,
				children: "Avatar"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
				id: field.name,
				type: "file",
				accept: "image/*",
				onBlur: field.handleBlur,
				onChange: (e) => field.handleChange(e.target.files),
				className: "cursor-pointer"
			})] })
		})
	}
];
function AddStaffDialog({ open, onOpenChange, onSubmit }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EntityFormDialogExtended, {
		open,
		onOpenChange,
		onSubmit,
		title: "Staff Member",
		description: "Add a new staff member to your shop.",
		fields,
		submitButtonText: {
			create: "Add Staff",
			update: "Save Changes"
		},
		scrollable: false,
		contentClassName: "sm:max-w-150"
	});
}
function StaffTable({ staff, permissions = {
	canDelete: true,
	canEdit: true,
	canView: true,
	canCreate: true
}, onEditStaff, onDeleteStaff, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns: [
			{
				accessorKey: "name",
				header: "Name",
				cell: ({ row }) => {
					const staff = row.original;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Avatar$1, {
							className: "h-8 w-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
								src: staff.avatar,
								alt: staff.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { children: staff.name.split(" ").map((n) => n[0]).join("").toUpperCase() })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-medium",
							children: staff.name
						})]
					});
				}
			},
			{
				accessorKey: "email",
				header: "Email",
				cell: ({ row }) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground",
						children: row.getValue("email")
					});
				}
			},
			{
				accessorKey: "role",
				header: "Role",
				cell: ({ row }) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: row.getValue("role")
					});
				}
			},
			{
				accessorKey: "status",
				header: "Status",
				cell: ({ row }) => {
					const status = row.getValue("status");
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: status === "active" ? "default" : "secondary",
						className: status === "active" ? "bg-green-500" : "",
						children: status
					});
				}
			},
			{
				accessorKey: "joinedDate",
				header: "Joined Date",
				cell: ({ row }) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground",
						children: format(row.getValue("joinedDate"), "yyyy-MM-dd")
					});
				}
			},
			{
				id: "actions",
				enableHiding: false,
				cell: ({ row }) => {
					const staff = row.original;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							className: "h-8 w-8 p-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Open menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "h-4 w-4" })]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
						align: "end",
						children: [permissions.canEdit && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
							onClick: () => onEditStaff?.(staff.id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SquarePen, { className: "mr-2 h-4 w-4" }), "Edit"]
						}), permissions.canDelete && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
							onClick: () => onDeleteStaff?.(staff.id),
							className: "text-destructive",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "mr-2 h-4 w-4" }), "Delete"]
						})]
					})] });
				}
			}
		],
		data: staff,
		className
	});
}
var ADMIN_STAFF_PERMISSIONS = {
	canDelete: true,
	canEdit: true,
	canView: true,
	canCreate: true
};
var VENDOR_STAFF_PERMISSIONS = {
	canDelete: true,
	canEdit: true,
	canView: true,
	canCreate: true
};
var mockStaff = [
	{
		id: "1",
		name: "John Doe",
		email: "john@example.com",
		role: "admin",
		status: "active",
		joinedDate: "2024-01-15T10:00:00Z"
	},
	{
		id: "2",
		name: "Jane Smith",
		email: "jane@example.com",
		role: "manager",
		status: "active",
		joinedDate: "2024-02-01T14:30:00Z"
	},
	{
		id: "3",
		name: "Bob Johnson",
		email: "bob@example.com",
		role: "staff",
		status: "invited",
		joinedDate: "2024-03-10T09:15:00Z"
	}
];
//#endregion
export { mockStaff as a, VENDOR_STAFF_PERMISSIONS as i, AddStaffDialog as n, StaffTable as r, ADMIN_STAFF_PERMISSIONS as t };
