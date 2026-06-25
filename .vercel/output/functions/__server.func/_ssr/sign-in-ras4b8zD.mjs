import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { p as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./sign-in-6qkkRgch.mjs";
import { t as AuthForm } from "./auth-form-Bj-EqEVn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/sign-in-ras4b8zD.js
var import_jsx_runtime = require_jsx_runtime();
function RouteComponent() {
	const { redirectTo } = Route.useSearch();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto w-full max-w-lg px-4 py-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-semibold text-2xl",
					children: "Sign in to your account"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-sm",
					children: "Welcome back. Please enter your details."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-6",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthForm, {
					mode: "sign-in",
					includeSocial: true,
					redirectUrl: redirectTo
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-4 text-center text-muted-foreground text-sm",
				children: [
					"Don't have an account?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/sign-up",
						className: "underline",
						children: "Sign up"
					})
				]
			})
		]
	});
}
//#endregion
export { RouteComponent as component };
