import { c as CollapsibleTrigger$1, l as Root, s as CollapsibleContent$1, w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/collapsible-CrHAV_WW.js
var import_jsx_runtime = require_jsx_runtime();
function Collapsible$1({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
		"data-slot": "collapsible",
		...props
	});
}
function CollapsibleTrigger({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleTrigger$1, {
		"data-slot": "collapsible-trigger",
		...props
	});
}
function CollapsibleContent({ ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CollapsibleContent$1, {
		"data-slot": "collapsible-content",
		...props
	});
}
//#endregion
export { CollapsibleContent as n, CollapsibleTrigger as r, Collapsible$1 as t };
