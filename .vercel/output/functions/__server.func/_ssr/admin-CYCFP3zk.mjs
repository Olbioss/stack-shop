import { T as redirect } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as createMiddleware } from "./ssr.mjs";
import { t as auth } from "./auth-DHeFNCFg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/admin-CYCFP3zk.js
var getRequestUrl = (request) => {
	try {
		return new URL(request.url);
	} catch {
		const headers = request.headers;
		const proto = headers.get("x-forwarded-proto") ?? "http";
		const host = headers.get("x-forwarded-host") ?? headers.get("host") ?? "localhost:3000";
		return new URL(request.url, `${proto}://${host}`);
	}
};
var adminMiddleware = createMiddleware().server(async ({ next, request }) => {
	const session = await auth.api.getSession({ headers: request.headers });
	if (!session || !session.user) {
		const url = getRequestUrl(request);
		throw redirect({
			to: "/sign-in",
			search: { redirectTo: url.pathname + url.search }
		});
	}
	if (session.user.role !== "admin") throw redirect({ to: "/forbidden" });
	return next({ context: {
		session,
		headers: request.headers
	} });
});
//#endregion
export { adminMiddleware as t };
