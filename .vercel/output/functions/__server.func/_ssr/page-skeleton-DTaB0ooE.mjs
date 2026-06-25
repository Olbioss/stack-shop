import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Skeleton } from "./skeleton-CLsJI6lr.mjs";
import { t as DataTableSkeleton } from "./data-table-skeleton-BKCwaWiU.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-skeleton-DTaB0ooE.js
var import_jsx_runtime = require_jsx_runtime();
function PageSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-32" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-5 w-48" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-9 w-32" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DataTableSkeleton, {
			columnCount: 6,
			rowCount: 8
		})]
	});
}
//#endregion
export { PageSkeleton as t };
