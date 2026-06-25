import { n as createMiddleware } from "./ssr.mjs";
import { t as auth } from "./auth-DHeFNCFg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-BM1BErpv.js
/**
* Create a redirect Response understood by TanStack Router.
*
* Use from route `loader`/`beforeLoad` or server functions to trigger a
* navigation. If `throw: true` is set, the redirect is thrown instead of
* returned. When an absolute `href` is supplied and `reloadDocument` is not
* set, a full-document navigation is inferred.
*
* @param opts Options for the redirect. Common fields:
* - `href`: absolute URL for external redirects; infers `reloadDocument`.
* - `statusCode`: HTTP status code to use (defaults to 307).
* - `headers`: additional headers to include on the Response.
* - Standard navigation options like `to`, `params`, `search`, `replace`,
*   and `reloadDocument` for internal redirects.
* @returns A Response augmented with router navigation options.
* @link https://tanstack.com/router/latest/docs/framework/react/api/router/redirectFunction
*/
function redirect(opts) {
	opts.statusCode = opts.statusCode || opts.code || 307;
	if (!opts._builtLocation && !opts.reloadDocument && typeof opts.href === "string") try {
		new URL(opts.href);
		opts.reloadDocument = true;
	} catch {}
	const headers = new Headers(opts.headers);
	if (opts.href && headers.get("Location") === null) headers.set("Location", opts.href);
	const response = new Response(null, {
		status: opts.statusCode,
		headers
	});
	response.options = opts;
	if (opts.throw) throw response;
	return response;
}
var authMiddleware = createMiddleware().server(async ({ request, next }) => {
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session || !session.user) {
		const url = new URL(request.url);
		throw redirect({
			to: "/sign-in",
			search: { redirectTo: url.pathname + url.search }
		});
	}
	return next({ context: {
		session,
		headers: request.headers
	} });
});
//#endregion
export { authMiddleware as t };
