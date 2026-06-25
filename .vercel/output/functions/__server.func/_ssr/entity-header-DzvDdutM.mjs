import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { N as Plus } from "../_libs/lucide-react.mjs";
import { n as PageHeader } from "./page-header-DLbA-yB-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/entity-header-DzvDdutM.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Factory function to create entity-specific header components.
* Eliminates duplication across tag-header, brand-header, category-header, etc.
*
* @example
* ```tsx
* // Create a TagHeader component
* export const TagHeader = createEntityHeader({
*   entityName: "Tag",
*   entityNamePlural: "Tags",
*   adminDescription: "Manage tags across the platform",
*   vendorDescription: "Manage your tags",
* });
* ```
*/
function createEntityHeader(config) {
	return function EntityHeader({ onAdd, role = "vendor", showAddButton = true, children, className }) {
		const description = role === "admin" ? config.adminDescription ?? `Manage ${config.entityNamePlural.toLowerCase()} across the platform` : config.vendorDescription ?? `Manage your ${config.entityNamePlural.toLowerCase()}`;
		return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PageHeader, {
			title: config.entityNamePlural,
			description,
			className,
			children: [children, showAddButton && onAdd && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: onAdd,
				size: config.addButtonSize,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "mr-2 h-4 w-4" }),
					"Add ",
					config.entityName
				]
			})]
		});
	};
}
//#endregion
export { createEntityHeader as t };
