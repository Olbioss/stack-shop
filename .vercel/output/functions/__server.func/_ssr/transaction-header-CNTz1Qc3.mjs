import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as PageHeader } from "./page-header-DLbA-yB-.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/transaction-header-CNTz1Qc3.js
var import_jsx_runtime = require_jsx_runtime();
function TransactionHeader({ role = "vendor", children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
		title: "Transactions",
		description: role === "admin" ? "View and manage platform-wide transactions" : "View and manage your shop transactions",
		className,
		children
	});
}
//#endregion
export { TransactionHeader as t };
