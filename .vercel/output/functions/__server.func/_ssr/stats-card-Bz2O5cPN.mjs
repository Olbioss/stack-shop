import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as CardHeader, n as CardContent, o as CardTitle, t as Card } from "./card-BDvQuHpQ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/stats-card-Bz2O5cPN.js
var import_jsx_runtime = require_jsx_runtime();
function StatsCard({ title, value, change, icon: Icon, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
			className: "flex flex-row items-center justify-between space-y-0 pb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
				className: "font-medium text-sm",
				children: title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 text-muted-foreground" })]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "font-bold text-2xl",
			children: value
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground text-xs",
			children: change
		})] })]
	});
}
//#endregion
export { StatsCard as t };
