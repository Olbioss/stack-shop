import "../_runtime.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { t as Button } from "./button-DQSToWRX.mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as RotateCcw, Ot as CircleAlert, at as House } from "../_libs/lucide-react.mjs";
import "./scroll-area-CZTHPdUq.mjs";
import { a as CardHeader, i as CardFooter, n as CardContent, o as CardTitle, t as Card } from "./card-BDvQuHpQ.mjs";
import "./collapsible-CrHAV_WW.mjs";
require_react();
var import_jsx_runtime = require_jsx_runtime();
function AdminAccessDenied() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen flex-col items-center justify-center p-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "w-full max-w-md border-border/40 shadow-xl backdrop-blur-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardHeader, {
					className: "flex flex-col items-center gap-2 pb-2 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rounded-full bg-destructive/10 p-3 text-destructive ring-1 ring-destructive/20",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-6" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardTitle, {
							className: "font-bold text-2xl text-destructive",
							children: "Access Denied"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-muted-foreground text-sm",
							children: "You do not have permission to access the admin area."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardContent, {
					className: "flex flex-col gap-4 text-center text-sm text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "This section is restricted to administrators only." })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CardFooter, {
					className: "flex flex-col gap-2 sm:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						onClick: () => window.history.back(),
						className: "w-full gap-2 sm:flex-1",
						size: "lg",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), "Go Back"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						asChild: true,
						className: "w-full gap-2 sm:flex-1",
						size: "lg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "size-4" }), "Home"]
						})
					})]
				})
			]
		})
	});
}
var SplitComponent = AdminAccessDenied;
//#endregion
export { SplitComponent as component };
