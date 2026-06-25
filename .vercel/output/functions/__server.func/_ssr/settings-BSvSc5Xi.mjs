import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { yt as Ellipsis } from "../_libs/lucide-react.mjs";
import { a as DropdownMenuLabel, c as DropdownMenuSeparator, f as DropdownMenuTrigger, i as DropdownMenuItem, r as DropdownMenuContent, t as DropdownMenu$1 } from "./dropdown-menu-uJlchZ0e.mjs";
import { i as TooltipTrigger, n as TooltipContent, r as TooltipProvider, t as Tooltip$1 } from "./tooltip-DECwMe-N.mjs";
import { n as PageHeader, t as DataTable } from "./page-header-DLbA-yB-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/settings-BSvSc5Xi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var columns = [
	{
		accessorKey: "id",
		header: "ID",
		cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "w-20 truncate text-muted-foreground text-xs",
			children: row.getValue("id")
		})
	},
	{
		accessorKey: "key",
		header: "Key",
		cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-mono text-sm",
			children: row.getValue("key")
		})
	},
	{
		accessorKey: "value",
		header: "Value",
		cell: ({ row }) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-32 truncate text-sm",
				children: row.getValue("value")
			});
		}
	},
	{
		accessorKey: "description",
		header: "Description",
		cell: ({ row }) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-48 truncate text-sm text-muted-foreground",
				children: row.getValue("description")
			});
		}
	},
	{
		accessorKey: "category",
		header: "Category",
		cell: ({ row }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-sm",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary",
				children: row.getValue("category")
			})
		})
	},
	{
		accessorKey: "updatedAt",
		header: "Updated",
		cell: ({ row }) => {
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-sm",
				children: new Date(row.getValue("updatedAt")).toLocaleDateString()
			});
		}
	},
	{
		id: "actions",
		header: "Actions",
		cell: ({ row }) => {
			const setting = row.original;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
				asChild: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu$1, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
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
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: "Actions" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							onClick: () => navigator.clipboard.writeText(setting.key),
							children: "Copy Key"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, { children: "Edit" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuItem, {
							className: "text-destructive",
							children: "Reset to Default"
						})
					]
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "More options" }) })] }) });
		}
	}
];
function AdminSettingsTable({ data }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTable, {
		columns,
		data
	});
}
function AdminSettingsTemplate({ settings }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Settings",
			description: "Manage platform settings and configurations"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSettingsTable, { data: settings })]
	});
}
var mockSettings = [
	{
		id: "1",
		key: "site.name",
		value: "ShopStack",
		description: "The name of the platform",
		category: "General",
		updatedAt: /* @__PURE__ */ new Date("2024-01-01")
	},
	{
		id: "2",
		key: "site.description",
		value: "Multi-vendor e-commerce platform",
		description: "Platform description shown in meta tags",
		category: "General",
		updatedAt: /* @__PURE__ */ new Date("2024-01-01")
	},
	{
		id: "3",
		key: "site.contact.email",
		value: "support@shopstack.com",
		description: "Primary contact email address",
		category: "Contact",
		updatedAt: /* @__PURE__ */ new Date("2024-01-15")
	},
	{
		id: "4",
		key: "site.contact.phone",
		value: "+1 (555) 123-4567",
		description: "Primary contact phone number",
		category: "Contact",
		updatedAt: /* @__PURE__ */ new Date("2024-01-15")
	},
	{
		id: "5",
		key: "payment.default.currency",
		value: "USD",
		description: "Default currency for transactions",
		category: "Payment",
		updatedAt: /* @__PURE__ */ new Date("2024-02-01")
	},
	{
		id: "6",
		key: "payment.stripe.enabled",
		value: "true",
		description: "Enable Stripe payment gateway",
		category: "Payment",
		updatedAt: /* @__PURE__ */ new Date("2024-02-01")
	},
	{
		id: "7",
		key: "shipping.default.method",
		value: "standard",
		description: "Default shipping method",
		category: "Shipping",
		updatedAt: /* @__PURE__ */ new Date("2024-02-15")
	},
	{
		id: "8",
		key: "shipping.free.threshold",
		value: "50.00",
		description: "Minimum order value for free shipping",
		category: "Shipping",
		updatedAt: /* @__PURE__ */ new Date("2024-02-15")
	},
	{
		id: "9",
		key: "email.smtp.host",
		value: "smtp.gmail.com",
		description: "SMTP server hostname",
		category: "Email",
		updatedAt: /* @__PURE__ */ new Date("2024-03-01")
	},
	{
		id: "10",
		key: "email.smtp.port",
		value: "587",
		description: "SMTP server port",
		category: "Email",
		updatedAt: /* @__PURE__ */ new Date("2024-03-01")
	},
	{
		id: "11",
		key: "security.session.timeout",
		value: "3600",
		description: "Session timeout in seconds",
		category: "Security",
		updatedAt: /* @__PURE__ */ new Date("2024-03-15")
	},
	{
		id: "12",
		key: "security.password.min_length",
		value: "8",
		description: "Minimum password length",
		category: "Security",
		updatedAt: /* @__PURE__ */ new Date("2024-03-15")
	}
];
function RouteComponent() {
	const [settings] = (0, import_react.useState)(mockSettings);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminSettingsTemplate, { settings });
}
//#endregion
export { RouteComponent as component };
