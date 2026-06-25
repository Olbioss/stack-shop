import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as BreadcrumbPage, i as BreadcrumbList, n as BreadcrumbItem, o as BreadcrumbSeparator, r as BreadcrumbLink, t as Breadcrumb } from "./breadcrumb-CWxKtsMG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/breadcrumb-nav-C6qkBKW3.js
var import_jsx_runtime = require_jsx_runtime();
function BreadcrumbNav({ items, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, {
		className: cn("mb-6", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbList, { children: items.map((item, index) => {
			const isLast = item.isActive ?? index === items.length - 1;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbItem, { children: isLast || !item.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbPage, { children: item.label }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbLink, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.href,
						children: item.label
					})
				}) }), !isLast && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BreadcrumbSeparator, {})]
			}, item.label);
		}) })
	});
}
//#endregion
export { BreadcrumbNav as t };
