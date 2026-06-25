import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { Pt as Check, Z as LoaderCircle, t as X, yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Badge } from "./badge-NA1wPZ4a.mjs";
import { r as useAdminShops } from "./use-admin-shops-ClDB9K08.mjs";
import { n as PageHeader, t as DataTable } from "./page-header-DLbA-yB-.mjs";
import { l as createAdminTenantsFetcher } from "./use-admin-entity-fetchers-DkFElJdN.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/tenants-CyQzUBmV.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AdminTenantTable({ server, className }) {
	const { updateStatus, isUpdatingStatus } = useAdminShops();
	const [updatingTenantId, setUpdatingTenantId] = (0, import_react.useState)(null);
	const handleUpdateStatus = (0, import_react.useCallback)(async (tenantId, status) => {
		setUpdatingTenantId(tenantId);
		try {
			await updateStatus({
				id: tenantId,
				status
			});
		} finally {
			setUpdatingTenantId(null);
		}
	}, [updateStatus]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns: (0, import_react.useMemo)(() => {
			return [
				{
					accessorKey: "id",
					header: "ID",
					cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-20 truncate text-muted-foreground text-xs",
						children: row.getValue("id")
					})
				},
				{
					accessorKey: "name",
					header: "Store Name",
					cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: row.getValue("name")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground text-xs",
						children: row.original.slug
					})] })
				},
				{
					accessorKey: "ownerName",
					header: "Owner",
					cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium text-sm",
						children: row.getValue("ownerName")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground text-xs",
						children: row.original.ownerEmail
					})] })
				},
				{
					accessorKey: "plan",
					header: "Plan",
					cell: ({ row }) => {
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							className: "capitalize",
							children: row.getValue("plan")
						});
					}
				},
				{
					accessorKey: "status",
					header: "Status",
					cell: ({ row }) => {
						const status = row.getValue("status");
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: status === "active" ? "default" : status === "suspended" ? "destructive" : "secondary",
							className: "capitalize",
							children: status
						});
					}
				},
				{
					accessorKey: "productCount",
					header: "Products",
					cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-center",
						children: row.getValue("productCount")
					})
				},
				{
					accessorKey: "joinedDate",
					header: "Joined",
					cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-muted-foreground text-xs",
						children: new Date(row.getValue("joinedDate")).toLocaleDateString()
					})
				},
				{
					id: "actions",
					header: () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-right",
						children: "Actions"
					}),
					cell: ({ row }) => {
						const tenant = row.original;
						const isRowUpdating = isUpdatingStatus && updatingTenantId === tenant.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex justify-end",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
								asChild: true,
								disabled: isRowUpdating,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "ghost",
									className: "h-8 w-8 p-0",
									disabled: isRowUpdating,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sr-only",
										children: "Open menu"
									}), isRowUpdating ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
								align: "end",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Actions" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/admin/tenants/$tenantId",
											params: { tenantId: tenant.id },
											className: "w-full cursor-pointer",
											children: "View Details"
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
									tenant.status !== "active" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
										onClick: () => handleUpdateStatus(tenant.id, "active"),
										disabled: isRowUpdating,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), "Approve"]
										})
									}),
									tenant.status !== "suspended" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
										className: "text-destructive focus:text-destructive",
										onClick: () => handleUpdateStatus(tenant.id, "suspended"),
										disabled: isRowUpdating,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), "Reject"]
										})
									})
								]
							})] })
						});
					}
				}
			];
		}, [
			handleUpdateStatus,
			isUpdatingStatus,
			updatingTenantId
		]),
		server,
		context: "admin",
		initialPageSize: 10,
		filterableColumns: (0, import_react.useMemo)(() => {
			return [{
				id: "status",
				label: "Status",
				type: "select",
				options: [
					{
						label: "Active",
						value: "active"
					},
					{
						label: "Suspended",
						value: "suspended"
					},
					{
						label: "Pending",
						value: "pending"
					}
				]
			}];
		}, []),
		globalFilterPlaceholder: "Search tenants...",
		className
	});
}
function AdminTenantsTemplate({ server }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Tenants",
		description: "Manage all registered shops and vendors"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTenantTable, { server })] });
}
function RouteComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminTenantsTemplate, { server: createAdminTenantsFetcher() });
}
//#endregion
export { RouteComponent as component };
