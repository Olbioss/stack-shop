import { n as createMiddleware } from "./ssr.mjs";
import { t as auth } from "./auth-DHeFNCFg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/optional-auth-D6kWcuST.js
var optionalAuthMiddleware = createMiddleware().server(async ({ request, next }) => {
	let session = null;
	try {
		session = await auth.api.getSession({ headers: request.headers });
	} catch {}
	return next({ context: {
		session,
		headers: request.headers
	} });
});
//#endregion
export { optionalAuthMiddleware as t };
