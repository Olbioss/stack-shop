import { t as cn } from "./utils-Pgq5HWQm.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { B as Package, Pt as Check, wt as Circle } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-status-timeline-obxIndBm.js
var import_jsx_runtime = require_jsx_runtime();
function OrderStatusTimeline({ stages }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-6 right-0 left-0 flex items-center px-6",
			children: stages.map((stage, index) => index < stages.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: cn("h-0.5 flex-1 transition-colors", stage.status === "completed" ? "bg-primary" : "bg-muted") }, `line-${stage.id}`))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative flex items-start justify-between",
			children: stages.map((stage) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-background transition-colors", stage.status === "completed" && "border-primary bg-primary text-primary-foreground", stage.status === "active" && "border-primary text-primary", stage.status === "pending" && "border-muted text-muted-foreground"),
					children: stage.status === "completed" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-6 w-6" }) : stage.status === "active" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Package, { className: "h-6 w-6" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Circle, { className: "h-6 w-6" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: cn("font-medium text-sm", stage.status === "pending" && "text-muted-foreground"),
						children: stage.label
					}), stage.date && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted-foreground text-xs",
						children: stage.date
					})]
				})]
			}, stage.id))
		})]
	});
}
//#endregion
export { OrderStatusTimeline as t };
