import { r as createServerFn } from "./ssr.mjs";
import { t as createSsrRpc } from "./createSsrRpc-CXFXGZZ3.mjs";
import { t as optionalAuthMiddleware } from "./optional-auth-D6kWcuST.mjs";
import { t as authMiddleware } from "./auth-BM1BErpv.mjs";
import { a as getOrdersByIdsSchema, i as getOrderByIdSchema, n as confirmPaymentSchema, o as getOrdersSchema, r as createCheckoutSessionSchema, t as cancelOrderSchema } from "./order-Bl2io5m_.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/order-CWYBszKz.js
var createCheckoutSession = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(createCheckoutSessionSchema).handler(createSsrRpc("67b074e17b14bdcde92e8dd706a5430fda53dc12cc945883bfc91aa29b0c17d7"));
var confirmPayment = createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(confirmPaymentSchema).handler(createSsrRpc("46aeca2a42764cc885835d19f70af86b125de00769de4e200ba5be9445565b53"));
var getCustomerOrders = createServerFn({ method: "GET" }).middleware([authMiddleware]).inputValidator(getOrdersSchema).handler(createSsrRpc("b38001c73eb49fc64730eb3ec7d9a82d0997941cb00a1a0e8ace384a7c5ffdb3"));
var getOrderById = createServerFn({ method: "GET" }).middleware([optionalAuthMiddleware]).inputValidator(getOrderByIdSchema).handler(createSsrRpc("aa07c741fc437f2298332b3268b51bc809b0333d6c941ea742117f20efc10728"));
var getOrdersByIds = createServerFn({ method: "GET" }).middleware([optionalAuthMiddleware]).inputValidator(getOrdersByIdsSchema).handler(createSsrRpc("52f95d99b7e4becccc15010c454fb611d7834132f48700499113d1ebe55b7138"));
createServerFn({ method: "POST" }).middleware([authMiddleware]).inputValidator(cancelOrderSchema).handler(createSsrRpc("789a2b84dcba48a7c915a72511f53d2f0b7d812649a81426a4db36804186eb40"));
createServerFn({ method: "POST" }).middleware([optionalAuthMiddleware]).inputValidator(getOrderByIdSchema).handler(createSsrRpc("243003ddda7bbebf54d255c4ce101c00f44ea33daf7ab89b585dff534c8bcc5a"));
//#endregion
export { getOrdersByIds as a, getOrderById as i, createCheckoutSession as n, getCustomerOrders as r, confirmPayment as t };
