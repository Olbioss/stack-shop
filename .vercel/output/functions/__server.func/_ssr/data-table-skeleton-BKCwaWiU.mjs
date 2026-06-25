import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { t as Skeleton } from "./skeleton-CLsJI6lr.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./table-D-104eYZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/data-table-skeleton-BKCwaWiU.js
var import_jsx_runtime = require_jsx_runtime();
function DataTableSkeleton({ columnCount, rowCount = 10, hasCheckbox = false, hasActions = true }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full overflow-hidden rounded-md border",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute inset-0 z-10 animate-shimmer bg-linear-to-r from-transparent via-muted/30 to-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
			className: "hover:bg-transparent",
			children: [
				hasCheckbox && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "w-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-4" })
				}),
				Array.from({ length: columnCount }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-[60%]" }) }, i)),
				hasActions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "w-20 text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "ml-auto h-4 w-12" })
				})
			]
		}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: Array.from({ length: rowCount }).map((_, rowIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
			className: "hover:bg-transparent",
			children: [
				hasCheckbox && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "w-10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-4" })
				}),
				Array.from({ length: columnCount }).map((_, colIndex) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, {
						className: "h-4",
						style: { width: `${40 + (rowIndex * 31 + colIndex * 17) % 9 * 5}%` }
					}) }, colIndex);
				}),
				hasActions && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					className: "text-right",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "ml-auto h-8 w-8 rounded-md" })
				})
			]
		}, rowIndex)) })] })]
	});
}
//#endregion
export { DataTableSkeleton as t };
