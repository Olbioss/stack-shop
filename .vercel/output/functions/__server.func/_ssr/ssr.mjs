import { r as __exportAll } from "../_runtime.mjs";
import { w as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { n as requestHandler, t as getResponse } from "./server-sdejvwzy.mjs";
import { A as invariant, C as isResolvedRedirect, D as isNotFound, E as rootRouteId, S as isRedirect, b as resolveManifestAssetLink, o as RouterProvider, t as renderRouterToStream, w as parseRedirect, x as executeRewriteInput } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as createMemoryHistory } from "../_libs/tanstack__history.mjs";
import { a as getOrigin, c as createSerializationAdapter, d as au, f as ou, i as getNormalizedURL, l as makeSerovalPlugin, n as mergeHeaders, o as defaultSerovalPlugins, r as attachRouterServerSsrUtils, s as createRawStreamRPCPlugin, t as defineHandlerCallback, u as Iu } from "../_libs/@tanstack/router-core+[...].mjs";
import { AsyncLocalStorage } from "node:async_hooks";
//#region node_modules/.nitro/vite/services/ssr/index.js
var ssr_exports = /* @__PURE__ */ __exportAll({
	createServerEntry: () => createServerEntry,
	default: () => server_default,
	i: () => getServerFnById,
	n: () => createServerFn,
	r: () => TSS_SERVER_FUNCTION,
	t: () => createMiddleware
});
require_react();
var import_jsx_runtime = require_jsx_runtime();
function StartServer(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RouterProvider, { router: props.router });
}
var defaultStreamHandler = defineHandlerCallback(({ request, router, responseHeaders }) => renderRouterToStream({
	request,
	router,
	responseHeaders,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StartServer, { router })
}));
var HEADERS = { TSS_SHELL: "X-TSS_SHELL" };
/**
* @description Returns the router manifest data that should be sent to the client.
* This includes only the assets and preloads for the current route and any
* special assets that are needed for the client. It does not include relationships
* between routes or any other data that is not needed for the client.
*
* The client entry URL is returned separately so that it can be transformed
* (e.g. for CDN rewriting) before being embedded into the `<script>` tag.
*
* @param matchedRoutes - In dev mode, the matched routes are used to build
* the dev styles URL for route-scoped CSS collection.
*/
async function getStartManifest(matchedRoutes) {
	const { tsrStartManifest } = await import("../_tanstack-start-manifest_v-D_1klpJ0.mjs");
	const startManifest = tsrStartManifest();
	const rootRoute = startManifest.routes[rootRouteId] = startManifest.routes["__root__"] || {};
	rootRoute.assets = rootRoute.assets || [];
	let injectedHeadScripts;
	return {
		manifest: { routes: Object.fromEntries(Object.entries(startManifest.routes).flatMap(([k, v]) => {
			const result = {};
			let hasData = false;
			if (v.preloads && v.preloads.length > 0) {
				result["preloads"] = v.preloads;
				hasData = true;
			}
			if (v.assets && v.assets.length > 0) {
				result["assets"] = v.assets;
				hasData = true;
			}
			if (!hasData) return [];
			return [[k, result]];
		})) },
		clientEntry: startManifest.clientEntry,
		injectedHeadScripts
	};
}
var manifest = {
	"4facdc37369dcfd178c84943309971bd0a4edb6d5552d354b6a8077b6e297491": {
		functionName: "getStoreProducts_createServerFn_handler",
		importer: () => import("./products-5ojfZLLw.mjs")
	},
	"f91411c8767c9c04ccef425a0be6149df18febcb289782cfe8bb1b5d482f9a8c": {
		functionName: "getStoreProductBySlug_createServerFn_handler",
		importer: () => import("./products-5ojfZLLw.mjs")
	},
	"efdc0326ba4e7e2b6efdcfca0c0141e1d1cfc940e187a30982dbaf30579ae6fa": {
		functionName: "getStoreProductById_createServerFn_handler",
		importer: () => import("./products-5ojfZLLw.mjs")
	},
	"0395b94cc1a6535b6b1672691acf0c005b8d0ac08917d2d4bb23c4d52c8d583a": {
		functionName: "getFeaturedProducts_createServerFn_handler",
		importer: () => import("./products-5ojfZLLw.mjs")
	},
	"075fc46c25bf5a6f06f653cc69e04797a973ad8068c7105c04d62acba1c758f3": {
		functionName: "getRelatedProducts_createServerFn_handler",
		importer: () => import("./products-5ojfZLLw.mjs")
	},
	"b04ce292aa7f9be0e63e14495def752bb27b1700d040ff7206f583fd839d4348": {
		functionName: "getStoreShops_createServerFn_handler",
		importer: () => import("./shop-DFu2uwBw.mjs")
	},
	"578ed4d8116e8b34a57f34531e688347e10256df8f2ac7de8c9c8845115301f5": {
		functionName: "getStoreShopBySlug_createServerFn_handler",
		importer: () => import("./shop-DFu2uwBw.mjs")
	},
	"c567abc8ffc2823303791710a8c503849791a1df81c7a43b43f89caf86ef4098": {
		functionName: "getStoreCategories_createServerFn_handler",
		importer: () => import("./categories-Dz-NobGy.mjs")
	},
	"734b2361df9eff0475bcc2516bdbfc29864cdd5a1558f762d885a94d15c31fb6": {
		functionName: "getStoreCategoryBySlug_createServerFn_handler",
		importer: () => import("./categories-Dz-NobGy.mjs")
	},
	"37c14bdda1c06420d9f19ea86d8bdaa9dbefa888ec09e2ed8bc2067862dba0a4": {
		functionName: "getStoreCategoryById_createServerFn_handler",
		importer: () => import("./categories-Dz-NobGy.mjs")
	},
	"b4e3a1a25c36a3ddc60d2dedfaf4816cda947625b5d662a9282b73a4ddf96f9c": {
		functionName: "getFeaturedCategories_createServerFn_handler",
		importer: () => import("./categories-Dz-NobGy.mjs")
	},
	"97b2e0b9bf2c85cd93e46256e9c9a790794b670d2a8532c08c85298d7a0a7d6a": {
		functionName: "getCategoryTree_createServerFn_handler",
		importer: () => import("./categories-Dz-NobGy.mjs")
	},
	"d47c76b2fa391803458e772b8f6a8e298bbcb1c74cb8347d451aa488f32570bd": {
		functionName: "getSubcategories_createServerFn_handler",
		importer: () => import("./categories-Dz-NobGy.mjs")
	},
	"a3fb4986a17e6149d8fe1a9fbde94c7dcd323396814f142dc4ada711156ea296": {
		functionName: "getVendorShops_createServerFn_handler",
		importer: () => import("./shops-DKUQksEf.mjs")
	},
	"da2d6690bfe9cb306f5dfac780f77bf310ef4add030ec3f94706abe6f353bbb6": {
		functionName: "getShopBySlug_createServerFn_handler",
		importer: () => import("./shops-DKUQksEf.mjs")
	},
	"782e654ce2e675ca9ad1c08239dde7600d31dbdae6acaba02aead69394491407": {
		functionName: "createShop_createServerFn_handler",
		importer: () => import("./shops-DKUQksEf.mjs")
	},
	"3241209ea36be4e052b0d372af3a4417a69a6b4f49191309e9b7d36fd52777dd": {
		functionName: "updateShop_createServerFn_handler",
		importer: () => import("./shops-DKUQksEf.mjs")
	},
	"77dd88faeb4c838de273ebcd6cab0ef8847d8ae150a680ee438bb27a87ab1be4": {
		functionName: "deleteShop_createServerFn_handler",
		importer: () => import("./shops-DKUQksEf.mjs")
	},
	"c985c0257038d3af45d238f094c72530ff46348e05a8e839a96f08372a98fa0d": {
		functionName: "getStoreBrands_createServerFn_handler",
		importer: () => import("./brands-qAaN_Aq8.mjs")
	},
	"cc2c2f4bdcb5655d563a05bd48beb517d988a4abec57d3df351baf5976f22b69": {
		functionName: "getStoreBrandBySlug_createServerFn_handler",
		importer: () => import("./brands-qAaN_Aq8.mjs")
	},
	"8e28051b09bd6de4147b4d803d99d4942da10f33349108e88311b7ace8777e5e": {
		functionName: "getStoreBrandById_createServerFn_handler",
		importer: () => import("./brands-qAaN_Aq8.mjs")
	},
	"a4a4240aa356429c0a3ffe747814824c0385bece1760fcacc844a6614637d8cb": {
		functionName: "getPopularBrands_createServerFn_handler",
		importer: () => import("./brands-qAaN_Aq8.mjs")
	},
	"569f5726728bc21c844611c73e4b004d0743a5bfff6f50ceae4644608a20939e": {
		functionName: "getAdminCoupons_createServerFn_handler",
		importer: () => import("./coupon-Ctj4T4dn.mjs")
	},
	"74d66f188050ba1abf820ca788531adb49f36cfea27a8eaac9f26f075b041e43": {
		functionName: "getAdminCouponById_createServerFn_handler",
		importer: () => import("./coupon-Ctj4T4dn.mjs")
	},
	"dbdc9b28a99030c7c739e5c8115679e15f4cb423cb249c00a84bbc5c03b64f99": {
		functionName: "toggleAdminCouponActive_createServerFn_handler",
		importer: () => import("./coupon-Ctj4T4dn.mjs")
	},
	"5910becd58485153b5fa191aa2a237dbc4eeeac8f0781da04dbd6aea2f0b45c8": {
		functionName: "deleteAdminCoupon_createServerFn_handler",
		importer: () => import("./coupon-Ctj4T4dn.mjs")
	},
	"67b074e17b14bdcde92e8dd706a5430fda53dc12cc945883bfc91aa29b0c17d7": {
		functionName: "createCheckoutSession_createServerFn_handler",
		importer: () => import("./order-By96E4UD.mjs")
	},
	"46aeca2a42764cc885835d19f70af86b125de00769de4e200ba5be9445565b53": {
		functionName: "confirmPayment_createServerFn_handler",
		importer: () => import("./order-By96E4UD.mjs")
	},
	"b38001c73eb49fc64730eb3ec7d9a82d0997941cb00a1a0e8ace384a7c5ffdb3": {
		functionName: "getCustomerOrders_createServerFn_handler",
		importer: () => import("./order-By96E4UD.mjs")
	},
	"aa07c741fc437f2298332b3268b51bc809b0333d6c941ea742117f20efc10728": {
		functionName: "getOrderById_createServerFn_handler",
		importer: () => import("./order-By96E4UD.mjs")
	},
	"52f95d99b7e4becccc15010c454fb611d7834132f48700499113d1ebe55b7138": {
		functionName: "getOrdersByIds_createServerFn_handler",
		importer: () => import("./order-By96E4UD.mjs")
	},
	"789a2b84dcba48a7c915a72511f53d2f0b7d812649a81426a4db36804186eb40": {
		functionName: "cancelOrder_createServerFn_handler",
		importer: () => import("./order-By96E4UD.mjs")
	},
	"243003ddda7bbebf54d255c4ce101c00f44ea33daf7ab89b585dff534c8bcc5a": {
		functionName: "getOrderPaymentSession_createServerFn_handler",
		importer: () => import("./order-By96E4UD.mjs")
	},
	"d2fb2bc9b075457362a756a7d05f17202b6eb26cf0b32def3a500550a5c04493": {
		functionName: "getTags_createServerFn_handler",
		importer: () => import("./tag-DBSLoV7R.mjs")
	},
	"48a77372ad7a396d4cf0051657794825ef3ac78bc6025863e9b53fa402cd9e81": {
		functionName: "getTagById_createServerFn_handler",
		importer: () => import("./tag-DBSLoV7R.mjs")
	},
	"3b269942628be306fbafe0e2930da88c6958d4311783e3d96a6118db2e467223": {
		functionName: "createTag_createServerFn_handler",
		importer: () => import("./tag-DBSLoV7R.mjs")
	},
	"ab3a551f36cc54683b3c0da85adb09243ad34a992c06e974dba1b2f5bb37b212": {
		functionName: "updateTag_createServerFn_handler",
		importer: () => import("./tag-DBSLoV7R.mjs")
	},
	"75b2829599b108257a73bf7e2448b03319aa873af7fd3b6066d8e1a634518f26": {
		functionName: "deleteTag_createServerFn_handler",
		importer: () => import("./tag-DBSLoV7R.mjs")
	},
	"dbc1125bd721eee6b100a424d3a3752081db6731a4f787eabc4c87172f2845cd": {
		functionName: "getTaxRates_createServerFn_handler",
		importer: () => import("./tax-CBfKuTUR.mjs")
	},
	"642855e375b3333080afe046d05f7f610c26b11d5533d1149b4444b8440896be": {
		functionName: "getTaxRateById_createServerFn_handler",
		importer: () => import("./tax-CBfKuTUR.mjs")
	},
	"ce70106983f078669668a9011fb44d28d13b212ad85c615ebb9e12df9729ada5": {
		functionName: "createTaxRate_createServerFn_handler",
		importer: () => import("./tax-CBfKuTUR.mjs")
	},
	"fcd31a5f30a48676a91b777b96cb2a8644d8cd54a7093002ac5bf1be2ac87413": {
		functionName: "updateTaxRate_createServerFn_handler",
		importer: () => import("./tax-CBfKuTUR.mjs")
	},
	"d12e29e873f5d448053b30c213dedb3e8242d4e457cd49b19165cc574288b418": {
		functionName: "deleteTaxRate_createServerFn_handler",
		importer: () => import("./tax-CBfKuTUR.mjs")
	},
	"6d0dc9578ade1131d633d9d1e81aa225fad2504a3e9f4ccb31b3720d540a3c0d": {
		functionName: "toggleTaxRateActive_createServerFn_handler",
		importer: () => import("./tax-CBfKuTUR.mjs")
	},
	"f9b4aa597073222881ec9dcfc9f5a5fe0c77d7f3b36be8e017c62f7992e153d2": {
		functionName: "getAdminTaxRates_createServerFn_handler",
		importer: () => import("./tax-vnFZLSgB.mjs")
	},
	"86196c83edf0bc205d26ccc17399255593b5c74428c2675543e39a6a32c926b3": {
		functionName: "getAdminTaxRateById_createServerFn_handler",
		importer: () => import("./tax-vnFZLSgB.mjs")
	},
	"b09a69df13bcfa8fad8e6db12be1d0a85cfa73b29c2f350b66421d01d1b91f74": {
		functionName: "toggleAdminTaxRateActive_createServerFn_handler",
		importer: () => import("./tax-vnFZLSgB.mjs")
	},
	"a2c58aaaac113054645de0ae0255757cfcb3354b2cd14f1c041615b10f333f45": {
		functionName: "deleteAdminTaxRate_createServerFn_handler",
		importer: () => import("./tax-vnFZLSgB.mjs")
	},
	"7e36a167532c758f1599c786fb3c1d77b7471c6b1720454ec1acc672eeac6821": {
		functionName: "getAdminBrands_createServerFn_handler",
		importer: () => import("./brand-sjdZpidi.mjs")
	},
	"0f65d61ef60c80e6adbbd26ad61a5f636d98e179b409f4bd704aad1c6a7eb6ac": {
		functionName: "getAdminBrandById_createServerFn_handler",
		importer: () => import("./brand-sjdZpidi.mjs")
	},
	"20dc87ef7a85ac89daa1f0a41f4ee6be3a555b247a3191b7892f7e3aa546850b": {
		functionName: "toggleAdminBrandActive_createServerFn_handler",
		importer: () => import("./brand-sjdZpidi.mjs")
	},
	"7272428238f6e2b9c516e661169e039491663c2d0552047b60dff58f04080130": {
		functionName: "deleteAdminBrand_createServerFn_handler",
		importer: () => import("./brand-sjdZpidi.mjs")
	},
	"7db5e519f5bd8724e88cf3d70ee2f2b5402c2de398af7cd23db6f07579652336": {
		functionName: "getShippingMethods_createServerFn_handler",
		importer: () => import("./shipping-R4d289UB.mjs")
	},
	"90f57122889c8f101a25722ab8855857a89b60d7b615efa623477a2ce9699b9a": {
		functionName: "getShippingMethodById_createServerFn_handler",
		importer: () => import("./shipping-R4d289UB.mjs")
	},
	"f4a6e2030fc964c0bce8d5e1a9cb707ddf90ece82acfec8b4b66b29ba82ab3bd": {
		functionName: "createShippingMethod_createServerFn_handler",
		importer: () => import("./shipping-R4d289UB.mjs")
	},
	"8f3033892d0557a8569da1494cad3fd7fdf468c7069af8d7ecbd29363a0e56b9": {
		functionName: "updateShippingMethod_createServerFn_handler",
		importer: () => import("./shipping-R4d289UB.mjs")
	},
	"1a10ad7fbb6e0f6d37b874278a3d4a0e85359e33d07a6a2e1e8d3994795028c8": {
		functionName: "deleteShippingMethod_createServerFn_handler",
		importer: () => import("./shipping-R4d289UB.mjs")
	},
	"4ef217286a43e24388263aadb9dabe3bfcf53aeac35c084494b834c6c3099cf8": {
		functionName: "getBrands_createServerFn_handler",
		importer: () => import("./brands-De7fqoHl.mjs")
	},
	"25446829858865e913c3521dfcd002be4e4cc7075577ce2c6273bfe9271c6a81": {
		functionName: "getBrandById_createServerFn_handler",
		importer: () => import("./brands-De7fqoHl.mjs")
	},
	"0eb4c4357baecb962af6d25b63c74eeee688219dc1fada1d51426d538849ddff": {
		functionName: "createBrand_createServerFn_handler",
		importer: () => import("./brands-De7fqoHl.mjs")
	},
	"140b47cb75b83dae8f75df9b5205562701650d8e6af56a70b0a40e2bcbdfa555": {
		functionName: "updateBrand_createServerFn_handler",
		importer: () => import("./brands-De7fqoHl.mjs")
	},
	"63b82dc9ffd443ff86a277a1aadc9d32bd490716e4367e529d3f8fb0053364cb": {
		functionName: "deleteBrand_createServerFn_handler",
		importer: () => import("./brands-De7fqoHl.mjs")
	},
	"4a996a56854488ac0707d39ffca766fef984da97f3973cb6ab3ae1da2106ecb6": {
		functionName: "getAdminCategories_createServerFn_handler",
		importer: () => import("./category-jwNQShYO.mjs")
	},
	"4482b03b70fbed4c8287fb29e75b93068a87c0ea450fc2d1bc3d8d4a760c2bec": {
		functionName: "getAdminCategoryById_createServerFn_handler",
		importer: () => import("./category-jwNQShYO.mjs")
	},
	"5343743de31ef139c2de66fe140049480d4466a0f173c4a57bc4f513483fa851": {
		functionName: "toggleAdminCategoryActive_createServerFn_handler",
		importer: () => import("./category-jwNQShYO.mjs")
	},
	"621e2ccced018a42e08209dee427b1ec8fded6fb5228eb63de05265ed8cf3699": {
		functionName: "toggleAdminCategoryFeatured_createServerFn_handler",
		importer: () => import("./category-jwNQShYO.mjs")
	},
	"f28d4e33f8ffbbdab91f906075db41272bfcbfcec6c064b870082fcb12a7db8a": {
		functionName: "deleteAdminCategory_createServerFn_handler",
		importer: () => import("./category-jwNQShYO.mjs")
	},
	"ac9426bb67c84a3999b7d6ca1c3cae0017d43a5e56b392b5222c9525672255d3": {
		functionName: "getCategories_createServerFn_handler",
		importer: () => import("./categories-D8wDvisT.mjs")
	},
	"86db024604b2bb22816a24d4ef0a9ada3dd75e44ebb5a44686a38d3d3ecda81b": {
		functionName: "getCategoryById_createServerFn_handler",
		importer: () => import("./categories-D8wDvisT.mjs")
	},
	"b507ba3651755eedbb5f942277f8dc6c1a03dae3e4a39a8b76280ce1fc959867": {
		functionName: "createCategory_createServerFn_handler",
		importer: () => import("./categories-D8wDvisT.mjs")
	},
	"2fbb467abe6871094ed16fe999c70ddbb827e8778fcafb49b4457a7221b25608": {
		functionName: "updateCategory_createServerFn_handler",
		importer: () => import("./categories-D8wDvisT.mjs")
	},
	"4fb6138a8ec260e12a52e5af65b3577b3970195c46db4167536f88be8fe4213d": {
		functionName: "deleteCategory_createServerFn_handler",
		importer: () => import("./categories-D8wDvisT.mjs")
	},
	"587789bfe7c37ecda4e35816350db3f39589de82c5fc7acebaaaa3be49491edc": {
		functionName: "getAttributes_createServerFn_handler",
		importer: () => import("./attributes-DN48EhMu.mjs")
	},
	"c000805e0f6582998eb2897ddc4a39631a80f83ed983f631dde09d6b61f64cc2": {
		functionName: "getAttributeById_createServerFn_handler",
		importer: () => import("./attributes-DN48EhMu.mjs")
	},
	"7b35d90dcbe7e347bcc5be1ccc0658a450170f65a68a3418c1cecd0fa7deebba": {
		functionName: "createAttribute_createServerFn_handler",
		importer: () => import("./attributes-DN48EhMu.mjs")
	},
	"be71035562387bfeee6a5c2e633fa7c9160d2f04ffbf9b85800aa9cad025bbf5": {
		functionName: "updateAttribute_createServerFn_handler",
		importer: () => import("./attributes-DN48EhMu.mjs")
	},
	"3260e2304aed9b928c68d5ebe29e99d9c9d433737b8012f44b27e8570ad13fa2": {
		functionName: "deleteAttribute_createServerFn_handler",
		importer: () => import("./attributes-DN48EhMu.mjs")
	},
	"8af94af91125a164f8bed6119e055a3ef1843df13819bbc13ad5fc9668f76403": {
		functionName: "getAdminProducts_createServerFn_handler",
		importer: () => import("./product-BshkskT4.mjs")
	},
	"9b9b9b283af1c2395e86a563f92f20ae7599380fa78e37b2befc68574e7f1c81": {
		functionName: "getAdminProductById_createServerFn_handler",
		importer: () => import("./product-BshkskT4.mjs")
	},
	"eb1ac3da5be0f3ea1ef0552fb7806959507cb9af53d1f69854a785a38988845f": {
		functionName: "updateAdminProductStatus_createServerFn_handler",
		importer: () => import("./product-BshkskT4.mjs")
	},
	"1b0c2c58b08ea7d1eba58eb10b22fad4f5005bd1e08ef85131c1b334a2fa62ea": {
		functionName: "toggleAdminProductFeatured_createServerFn_handler",
		importer: () => import("./product-BshkskT4.mjs")
	},
	"3bf0df45035a11781010001bf3077fac85a87a3a1adbf671de6c774156b07be6": {
		functionName: "deleteAdminProduct_createServerFn_handler",
		importer: () => import("./product-BshkskT4.mjs")
	},
	"f13d708f47c4bcd371dc7e84d9f3ca4c41da49ab6bea71aec8906008a26bd74f": {
		functionName: "getAdminTags_createServerFn_handler",
		importer: () => import("./tag-D2ba5ASQ.mjs")
	},
	"f78fa2f90c9646720f3104ea7a657cb22a9636bdabe399f56085d6380740f3ea": {
		functionName: "getAdminTagById_createServerFn_handler",
		importer: () => import("./tag-D2ba5ASQ.mjs")
	},
	"6ac389aea3648e98926f5c381ec85975e93ba796be8a3a9af6e2c1e3240f296e": {
		functionName: "toggleAdminTagActive_createServerFn_handler",
		importer: () => import("./tag-D2ba5ASQ.mjs")
	},
	"15e45ad8a73a280d6e77def1d9d6a5a43ffb9dd833b4f6ffe9a5295fa1cd0884": {
		functionName: "deleteAdminTag_createServerFn_handler",
		importer: () => import("./tag-D2ba5ASQ.mjs")
	},
	"12777805f64fb1fe810fdfb37b774af0f9d574f40e2017704cda61650821ed42": {
		functionName: "getAdminReviews_createServerFn_handler",
		importer: () => import("./review-Bj5wb0tr.mjs")
	},
	"18970c1ac69561c894837b0b85d11b2030ae60d9663d49925c3a3925a6eb7780": {
		functionName: "getAdminReviewStats_createServerFn_handler",
		importer: () => import("./review-Bj5wb0tr.mjs")
	},
	"a8ce7230c03f3611e526e06a9d2212ea7564780cc71b5b10b71cc213957065f7": {
		functionName: "updateReviewStatus_createServerFn_handler",
		importer: () => import("./review-Bj5wb0tr.mjs")
	},
	"e416445483c691ebfd2462e9e902a3c14977ac62a52080cc8df16f34849db403": {
		functionName: "adminDeleteReview_createServerFn_handler",
		importer: () => import("./review-Bj5wb0tr.mjs")
	},
	"c3282a8291deedaeda9357ce21851e48bcf3b4230293074ee5a5d88947223ded": {
		functionName: "getAdminReviewById_createServerFn_handler",
		importer: () => import("./review-Bj5wb0tr.mjs")
	},
	"3faca418e59f080a191f35a86f6ff5aedd8e22e6d329eeeecbc8ecbb4bdb0f26": {
		functionName: "getCoupons_createServerFn_handler",
		importer: () => import("./coupons-BmpL6DAK.mjs")
	},
	"8b18697112588ce4b34fc2e4f62fa767806b1d9e7cda9de108cfbf02a6486630": {
		functionName: "getCouponById_createServerFn_handler",
		importer: () => import("./coupons-BmpL6DAK.mjs")
	},
	"57993649a0a3f17945838c988690c671778fe9cdc0726fffdfe0db38389cbb95": {
		functionName: "getCouponByCode_createServerFn_handler",
		importer: () => import("./coupons-BmpL6DAK.mjs")
	},
	"44de5d3cca36cf84cd4c3f3fd6c7eadf15ca7c6a2b59b5008cfa5679ed0fffd9": {
		functionName: "createCoupon_createServerFn_handler",
		importer: () => import("./coupons-BmpL6DAK.mjs")
	},
	"9ef988ebe83cc84eb38e2280e042e6eec40082ce3e153c10f9553ad02b4e3a35": {
		functionName: "updateCoupon_createServerFn_handler",
		importer: () => import("./coupons-BmpL6DAK.mjs")
	},
	"4cafa832e934d622973c09980e4dbf3da7a27e63e8b2b0fe512ac461b7f8f6bc": {
		functionName: "deleteCoupon_createServerFn_handler",
		importer: () => import("./coupons-BmpL6DAK.mjs")
	},
	"fc717e6a587b23d33a2062a0540485d9dfe1b7403ef7429cf8c712bb7fef63ea": {
		functionName: "validateCoupon_createServerFn_handler",
		importer: () => import("./coupons-BmpL6DAK.mjs")
	},
	"758bad04bdbabb26a7ca466bc717e0fa43253d6ad32a5d53147c8c8b0afae726": {
		functionName: "getAvailableCouponsForUser_createServerFn_handler",
		importer: () => import("./coupons-BmpL6DAK.mjs")
	},
	"571870e3d5d8477b74ba42c576a28d51cfe4e4d7759cb3868427fd4bc82b7dbd": {
		functionName: "getAdminAttributes_createServerFn_handler",
		importer: () => import("./attribute-3OZxm8Hz.mjs")
	},
	"544f16e66abb7a47003bf4c854e72313242077b40715b8539d0fb0b0f08cb280": {
		functionName: "getAdminAttributeById_createServerFn_handler",
		importer: () => import("./attribute-3OZxm8Hz.mjs")
	},
	"ec7b6c3c79e96f4d3321bc1acce31cba64d7176e198918ce605cd28d7b6fcf79": {
		functionName: "toggleAdminAttributeActive_createServerFn_handler",
		importer: () => import("./attribute-3OZxm8Hz.mjs")
	},
	"35d0f1270c5ee22fe116ff235f010577a00f94bfc19efcf41549615970b6e3e2": {
		functionName: "updateAdminAttribute_createServerFn_handler",
		importer: () => import("./attribute-3OZxm8Hz.mjs")
	},
	"63803ef7efa2f99c78b773410fa89ea2061d9df386dd218de489424748137093": {
		functionName: "deleteAdminAttribute_createServerFn_handler",
		importer: () => import("./attribute-3OZxm8Hz.mjs")
	},
	"da8a6d05d4bb1eab7702a1bc0cac31da8b6c9f576df4c063a6b5ee63377b90c4": {
		functionName: "getAdminOrders_createServerFn_handler",
		importer: () => import("./order-B3XETuuk.mjs")
	},
	"8ea723f0277401280f14644a46a98c8c9b4da6162eca582e36533da66819047b": {
		functionName: "getAdminOrderDetails_createServerFn_handler",
		importer: () => import("./order-B3XETuuk.mjs")
	},
	"a1801a9022f9ecc873b9a5638cbd37d12341d581a211b780db92d7703dcf8fe3": {
		functionName: "updateAdminOrderStatus_createServerFn_handler",
		importer: () => import("./order-B3XETuuk.mjs")
	},
	"28fbbd217356e3abaf9763a0d72f028eeb248d022aa588429632b278060206d0": {
		functionName: "adminCancelOrder_createServerFn_handler",
		importer: () => import("./order-B3XETuuk.mjs")
	},
	"2854ce7585d82e96d203d25e4a1b5d00a8d4f7b3009e2e8ad9ed70e97928526f": {
		functionName: "getAdminOrderStats_createServerFn_handler",
		importer: () => import("./order-B3XETuuk.mjs")
	},
	"ac2c4a1d06ff99ff6c6cbedbb8d5784e3241c2d52c226a49e234e6e162b4dc01": {
		functionName: "getAdminShops_createServerFn_handler",
		importer: () => import("./shops-B9oDmKJQ.mjs")
	},
	"67fa3db952412772f8cc6f4563c8f85481ee1f3138c1bd159035c6c7f20e172c": {
		functionName: "getAdminShopById_createServerFn_handler",
		importer: () => import("./shops-B9oDmKJQ.mjs")
	},
	"33a845a8a9ad8219cc57494b62837a429087e63884bd45b57f01bee75622a32a": {
		functionName: "updateAdminShopStatus_createServerFn_handler",
		importer: () => import("./shops-B9oDmKJQ.mjs")
	},
	"65911f7e5db2a47f88dcc1fddef1d8a5dcfb141d136873a35b63c8835bf69778": {
		functionName: "deleteAdminShop_createServerFn_handler",
		importer: () => import("./shops-B9oDmKJQ.mjs")
	},
	"5180d7e5ee507ab98bd9911a5923070662c5cd373dbbb25fcf95b90efdc96995": {
		functionName: "updateVendorCommission_createServerFn_handler",
		importer: () => import("./shops-B9oDmKJQ.mjs")
	},
	"98315c507bfec44dce41e598015c64bcaa8f9768027ab711d3fb136d8f13e40c": {
		functionName: "getProducts_createServerFn_handler",
		importer: () => import("./products-b6QwIsf_.mjs")
	},
	"54d1a37b17d6aba826dea10efa3f6a99a128772a7f0fdd7e87ff5405a416b222": {
		functionName: "getProductById_createServerFn_handler",
		importer: () => import("./products-b6QwIsf_.mjs")
	},
	"36f7409d7cdd3490960a90dab8edf7cab13bdaeb0d6fced6cc1f679f0a5c6fc3": {
		functionName: "createProduct_createServerFn_handler",
		importer: () => import("./products-b6QwIsf_.mjs")
	},
	"269ca78e3e645938008c5fc1dd78f5f12a151d360101d7c843caefe33ea24890": {
		functionName: "updateProduct_createServerFn_handler",
		importer: () => import("./products-b6QwIsf_.mjs")
	},
	"41f4a38332ffa8c374057a8fb0c6b66f5d29ea1df7f766d4b97f00eb7f1ec198": {
		functionName: "deleteProduct_createServerFn_handler",
		importer: () => import("./products-b6QwIsf_.mjs")
	},
	"a666737e81104e36ec1c0c0de3a0595553c00115fe1e4c9fe61a1b048e5776aa": {
		functionName: "getVendorReviews_createServerFn_handler",
		importer: () => import("./review-Cg23-Ojc.mjs")
	},
	"1f3369c6a0980a59dd01c8bd508f53a49dc3b673c6ebe8a929dd524f338f3b71": {
		functionName: "updateVendorReviewStatus_createServerFn_handler",
		importer: () => import("./review-Cg23-Ojc.mjs")
	},
	"ed663de432dfbce4e241eab3267d1d1c7f71e38b7ef729f9ede9708654776643": {
		functionName: "respondToReview_createServerFn_handler",
		importer: () => import("./review-Cg23-Ojc.mjs")
	},
	"fa63f1354f704fc0a3cd3bb34a6a16ff934d52aca2f9bbda826229000a26f853": {
		functionName: "registerVendor_createServerFn_handler",
		importer: () => import("./vendor-Dyh3Xopr.mjs")
	},
	"89728cf8fd73c70694a0955356ca2e588c58a81e8c354e91241f0cb3d3715b1b": {
		functionName: "getStoreCoupons_createServerFn_handler",
		importer: () => import("./coupon-DCQUbQfe.mjs")
	},
	"3ed8497974fec34d619b6de41c04403b27a4b60bc6c7ee2f02da70e0b2a4cd92": {
		functionName: "getStoreCouponByCode_createServerFn_handler",
		importer: () => import("./coupon-DCQUbQfe.mjs")
	},
	"eca2c0e048a853f416b67db828522483e2f4f61e10cb9e3545ae2309a48c2b96": {
		functionName: "validateStoreCoupon_createServerFn_handler",
		importer: () => import("./coupon-DCQUbQfe.mjs")
	},
	"0c89d0f28c386616f83f1f91d4c8c1a75bb0b896a4f2c23135b87f35d6090ecf": {
		functionName: "getFeaturedCoupons_createServerFn_handler",
		importer: () => import("./coupon-DCQUbQfe.mjs")
	},
	"8cc2a15baac0ea5c3ed78fed023590481591f88ddbd41570d2b739a0bfede785": {
		functionName: "getVendorNotifications_createServerFn_handler",
		importer: () => import("./notification-XQHMWAus.mjs")
	},
	"c995827ce11d022207b5147c817dc15421b5ddd5f680635e27cdf142a3646400": {
		functionName: "markNotificationAsRead_createServerFn_handler",
		importer: () => import("./notification-XQHMWAus.mjs")
	},
	"c23d37665a6fc36ee1c99742623a9d973a5b6ca7d51c77425e10920b174a5324": {
		functionName: "markAllNotificationsAsRead_createServerFn_handler",
		importer: () => import("./notification-XQHMWAus.mjs")
	},
	"814123b36a9ef276651e09a036619d2a502f884eab8640e15bb53e7135dc13e4": {
		functionName: "createNotification_createServerFn_handler",
		importer: () => import("./notification-XQHMWAus.mjs")
	},
	"9324b57f4d3fc760530ab4820798d75e1358b52e7bcb3422006e04d3e0a3f3c0": {
		functionName: "getCart_createServerFn_handler",
		importer: () => import("./cart-DQHziFQ-.mjs")
	},
	"35160d3c72ac791024701e15b3ee882146e2e4d67179e97d309f95855ffa6096": {
		functionName: "addToCart_createServerFn_handler",
		importer: () => import("./cart-DQHziFQ-.mjs")
	},
	"8d5414a1d7a8f270108e7fa4b7a8915439b2fd3bed7c73b4ca156afca797c75f": {
		functionName: "updateCartItem_createServerFn_handler",
		importer: () => import("./cart-DQHziFQ-.mjs")
	},
	"daca747f7539f3366304dcaf0b0fc2681902f356b1b8caf9aa8a7a9973200125": {
		functionName: "removeFromCart_createServerFn_handler",
		importer: () => import("./cart-DQHziFQ-.mjs")
	},
	"c3d39d3ebabedf3aa74ef8ac43be44c1a2e9641619b611072732bb4c41134c5b": {
		functionName: "clearCart_createServerFn_handler",
		importer: () => import("./cart-DQHziFQ-.mjs")
	},
	"0111ee71fdba918a772ec11d9daba95f804c1f5b6f507ef4c735f3f35bf9360c": {
		functionName: "mergeCarts_createServerFn_handler",
		importer: () => import("./cart-DQHziFQ-.mjs")
	},
	"24da5e63e48c86de0dd254b103a3ec8116e7e976dd24d640ce31369a555052f5": {
		functionName: "getAvailableShippingMethods_createServerFn_handler",
		importer: () => import("./shipping-Y23MAwrS.mjs")
	},
	"87caa8bd223f38d78ccad0506fc11618ee7df5dea85bc88d9d915ad2b7c281a8": {
		functionName: "currentUser_createServerFn_handler",
		importer: () => import("./users-JBnlFcvf.mjs")
	},
	"2aa65bef0cdc90a074deeb02730646bd0d9afb797c2fe2403563faca0eb16127": {
		functionName: "updateUserProfile_createServerFn_handler",
		importer: () => import("./users-JBnlFcvf.mjs")
	},
	"7c03b72b82f640d4512a324b6f8f63d0a7fd43ee5086600503b278246a98c685": {
		functionName: "getUsers_createServerFn_handler",
		importer: () => import("./users-JBnlFcvf.mjs")
	},
	"00ddaffaf3588a784802330aaff1cbbb40ccdd60550166a3bbea5088d522bc23": {
		functionName: "getShopDashboardData_createServerFn_handler",
		importer: () => import("./dashboard-Bpcw9dy0.mjs")
	},
	"809b3dd5d0ad5dd1f952187f8e7ffc123ff2a73600bb5508d4b0af315fc85c12": {
		functionName: "getAdminTransactions_createServerFn_handler",
		importer: () => import("./transaction-CKUmn5AN.mjs")
	},
	"2c2c619106088cb82b1227f8ff6b7b35c224b298c04e698b5e80f27c6174c0da": {
		functionName: "getAdminTransactionStats_createServerFn_handler",
		importer: () => import("./transaction-CKUmn5AN.mjs")
	},
	"d8e25468e3a9cca3a78b3348b4431e674c2c3e0ddaaf5b32d805c33d8f5b10ed": {
		functionName: "getVendorTransactions_createServerFn_handler",
		importer: () => import("./transactions-BP7dEEgf.mjs")
	},
	"f93abd37ca8fc9c7d1950ff83fb57b21887b78e01314cd2001cacafc7caa45ca": {
		functionName: "getVendorTransactionStats_createServerFn_handler",
		importer: () => import("./transactions-BP7dEEgf.mjs")
	},
	"d8030022d2ee68b38e753810b1e88d494a532431773b5a1651823a3ad4d54445": {
		functionName: "getVendorOrders_createServerFn_handler",
		importer: () => import("./order-Dm331LD9.mjs")
	},
	"4fc0c2a1e3bf2e2626af837735b8f5d5729b9353c9d1cd26e8fbc2fc96b8a88f": {
		functionName: "getVendorOrderDetails_createServerFn_handler",
		importer: () => import("./order-Dm331LD9.mjs")
	},
	"4e1065eb552e4451758756bcb963d02ac29895005d43afcff9b8180a4466fe07": {
		functionName: "updateVendorOrderStatus_createServerFn_handler",
		importer: () => import("./order-Dm331LD9.mjs")
	},
	"cf9464380bf08096876a70e5fb5efbb80688d36188a26ebcfbdf473eb44caa3a": {
		functionName: "getVendorOrderStats_createServerFn_handler",
		importer: () => import("./order-Dm331LD9.mjs")
	},
	"8dbc4d5ef5657e6cdfd0867d009137e8c2a7b34ff8b126630ee23aae7676bd61": {
		functionName: "getDashboardStats_createServerFn_handler",
		importer: () => import("./dashboard-CMTXHaQp.mjs")
	},
	"7b02acfa632e9c148016db4de617944906834b9d86f87b400ac90ee17b169d37": {
		functionName: "getRevenueChartData_createServerFn_handler",
		importer: () => import("./dashboard-CMTXHaQp.mjs")
	},
	"b7a179327e050011fd6d28a67935e25af58b73fcb1377f9e197801f0e5437983": {
		functionName: "getOrderDistribution_createServerFn_handler",
		importer: () => import("./dashboard-CMTXHaQp.mjs")
	},
	"403be1d07ba7e1039c8907b6e884cc6d4a7994abfd0635063671bf277307bb85": {
		functionName: "getTopShops_createServerFn_handler",
		importer: () => import("./dashboard-CMTXHaQp.mjs")
	},
	"5e5ce2dd0fb9d31347e39830280e97be01ea1d73b17c398b4be6af9d39286f6b": {
		functionName: "getTopProducts_createServerFn_handler",
		importer: () => import("./dashboard-CMTXHaQp.mjs")
	},
	"8484a23c1080d70879c2c2ac7b875b909bed3c79fae0da6c8d90fbe85c035234": {
		functionName: "getLowStockProducts_createServerFn_handler",
		importer: () => import("./dashboard-CMTXHaQp.mjs")
	},
	"078888761aebb8cba0749e67c2bd3e9d16312a0ac93a953284b4b9e38b8f2ac8": {
		functionName: "getRecentOrders_createServerFn_handler",
		importer: () => import("./dashboard-CMTXHaQp.mjs")
	},
	"8fcad830bf5d4689a81ffe1fa93efbf4907aca5d91bd0df9572220963a821fbb": {
		functionName: "getPendingReviews_createServerFn_handler",
		importer: () => import("./dashboard-CMTXHaQp.mjs")
	},
	"eccfb08ae0cc5b808e80f8fcc69765cbb57652bb503d2abdae50e6920e5238b8": {
		functionName: "getCustomerGrowthData_createServerFn_handler",
		importer: () => import("./dashboard-CMTXHaQp.mjs")
	},
	"af51e0f1a1095fc565c471e2d032d9754058d121b5f9a51f996b5fa520ecf34f": {
		functionName: "getPlatformHealth_createServerFn_handler",
		importer: () => import("./dashboard-CMTXHaQp.mjs")
	},
	"85c3f1772072e6228b648c442b332a5ab1ce66e1b4e4a56577a4007587538a4c": {
		functionName: "startStripeOnboarding_createServerFn_handler",
		importer: () => import("./vendor-connect-Bbi9sslW.mjs")
	},
	"756d3100dac0b27bf66ab74c9fede1d1d125edc27e9d903ffebae07294ebe6b2": {
		functionName: "getVendorStripeStatus_createServerFn_handler",
		importer: () => import("./vendor-connect-Bbi9sslW.mjs")
	},
	"32c7f0ec3787dfc02d0bb9db3c138531651d3ee6b6e043e32b47d4606e0d1524": {
		functionName: "getStripeDashboardLink_createServerFn_handler",
		importer: () => import("./vendor-connect-Bbi9sslW.mjs")
	},
	"4972f4be4d5ea269f15d62867a558d5fb4ab0b2c5e666c6440974763736d88ed": {
		functionName: "disconnectStripeAccount_createServerFn_handler",
		importer: () => import("./vendor-connect-Bbi9sslW.mjs")
	},
	"6dbf2ed035dcf8ef932760b200dfc48bfe05b7bb449d2967b8b99ca0a7a126a2": {
		functionName: "getUserAddresses_createServerFn_handler",
		importer: () => import("./address-BzcR6X3n.mjs")
	},
	"d169e55f9006d88632bcc2369e47121e9fffd0d28e0d4595f1f321261993a930": {
		functionName: "createAddress_createServerFn_handler",
		importer: () => import("./address-BzcR6X3n.mjs")
	},
	"4036644a3c6066179e0827de38d0b6ea147489153deefe0d451465074ddb588c": {
		functionName: "updateAddress_createServerFn_handler",
		importer: () => import("./address-BzcR6X3n.mjs")
	},
	"6719ad971235867fab845c0b447018500d28bb27f5f76afbd329cd2b1ff1e472": {
		functionName: "deleteAddress_createServerFn_handler",
		importer: () => import("./address-BzcR6X3n.mjs")
	},
	"6cad83a32036f7f136f626b3783a0e184d864600d39b3c60158ea25c9a983920": {
		functionName: "setDefaultAddress_createServerFn_handler",
		importer: () => import("./address-BzcR6X3n.mjs")
	},
	"1a5aea9a8154500ebfc35f4e7a6aa68d7ee79bd4877ca5766c04cdbf15502ba1": {
		functionName: "checkReviewEligibility_createServerFn_handler",
		importer: () => import("./review-CEoKec8o.mjs")
	},
	"658db7789624a10e1caf06572a96b16ddf845d454aa76514ae49ffd850db63b3": {
		functionName: "createReview_createServerFn_handler",
		importer: () => import("./review-CEoKec8o.mjs")
	},
	"9b0279cfc84a0c14c510dc5996bd1a2d03a57905d4e9a628e5bc0bd2b2d6e5d6": {
		functionName: "updateReview_createServerFn_handler",
		importer: () => import("./review-CEoKec8o.mjs")
	},
	"1c608054a42f725d7dcffcec8bf30c6fe028f11c0545c35957d4d2383812aee4": {
		functionName: "deleteReview_createServerFn_handler",
		importer: () => import("./review-CEoKec8o.mjs")
	},
	"9cd4cb972d639c9379af00f4bb42e89dbaa8891e7df54a49ebb5c156c75051d8": {
		functionName: "getProductReviews_createServerFn_handler",
		importer: () => import("./review-CEoKec8o.mjs")
	},
	"13ec9a5931545cc64330cca9e6140d868959cec1d779eddd97100faed4776a96": {
		functionName: "voteReviewHelpful_createServerFn_handler",
		importer: () => import("./review-CEoKec8o.mjs")
	},
	"d3d278e74014659046f62b3a5007e443b3a49cd0888c3347d21ba4b0ff6a2ad0": {
		functionName: "getUserReviews_createServerFn_handler",
		importer: () => import("./review-CEoKec8o.mjs")
	},
	"c8b6c56920301b77108221d3cedac873faeda69cfe4b827025b35b220104a4de": {
		functionName: "getShopReviews_createServerFn_handler",
		importer: () => import("./review-CEoKec8o.mjs")
	},
	"245430af01ba4f382981d82ee4d30a75593d72179215e4bfa032fc1d0d1ea640": {
		functionName: "getWishlist_createServerFn_handler",
		importer: () => import("./wishlist-DBdYJJFk.mjs")
	},
	"3255777bc3528258b1411c218a598d72d90d34c1d61ca0220c35162d355617c6": {
		functionName: "toggleWishlist_createServerFn_handler",
		importer: () => import("./wishlist-DBdYJJFk.mjs")
	},
	"5b0adee9a0c2d5441423f75e2214368ff10b19701dc934c1cd5f250a46babe4d": {
		functionName: "checkWishlistStatus_createServerFn_handler",
		importer: () => import("./wishlist-DBdYJJFk.mjs")
	},
	"6847ea9a4634a90f932f170614f284865075c9842546864bce5cbd03c1edeeed": {
		functionName: "getInvoiceUrl_createServerFn_handler",
		importer: () => import("./invoice-BhWisPAu.mjs")
	}
};
async function getServerFnById(id, access) {
	const serverFnInfo = manifest[id];
	if (!serverFnInfo) throw new Error("Server function info not found for " + id);
	const fnModule = serverFnInfo.module ?? await serverFnInfo.importer();
	if (!fnModule) throw new Error("Server function module not resolved for " + id);
	const action = fnModule[serverFnInfo.functionName];
	if (!action) throw new Error("Server function module export not resolved for serverFn ID: " + id);
	return action;
}
var TSS_FORMDATA_CONTEXT = "__TSS_CONTEXT";
var TSS_SERVER_FUNCTION = Symbol.for("TSS_SERVER_FUNCTION");
var TSS_SERVER_FUNCTION_FACTORY = Symbol.for("TSS_SERVER_FUNCTION_FACTORY");
var X_TSS_SERIALIZED = "x-tss-serialized";
var X_TSS_RAW_RESPONSE = "x-tss-raw";
/** Content-Type for multiplexed framed responses (RawStream support) */
var TSS_CONTENT_TYPE_FRAMED = "application/x-tss-framed";
/**
* Frame types for binary multiplexing protocol.
*/
var FrameType = {
	JSON: 0,
	CHUNK: 1,
	END: 2,
	ERROR: 3
};
/** Full Content-Type header value with version parameter */
var TSS_CONTENT_TYPE_FRAMED_VERSIONED = `${TSS_CONTENT_TYPE_FRAMED}; v=1`;
function isSafeKey(key) {
	return key !== "__proto__" && key !== "constructor" && key !== "prototype";
}
/**
* Merge target and source into a new null-proto object, filtering dangerous keys.
*/
function safeObjectMerge(target, source) {
	const result = Object.create(null);
	if (target) {
		for (const key of Object.keys(target)) if (isSafeKey(key)) result[key] = target[key];
	}
	if (source && typeof source === "object") {
		for (const key of Object.keys(source)) if (isSafeKey(key)) result[key] = source[key];
	}
	return result;
}
/**
* Create a null-prototype object, optionally copying from source.
*/
function createNullProtoObject(source) {
	if (!source) return Object.create(null);
	const obj = Object.create(null);
	for (const key of Object.keys(source)) if (isSafeKey(key)) obj[key] = source[key];
	return obj;
}
var GLOBAL_STORAGE_KEY = Symbol.for("tanstack-start:start-storage-context");
var globalObj = globalThis;
if (!globalObj[GLOBAL_STORAGE_KEY]) globalObj[GLOBAL_STORAGE_KEY] = new AsyncLocalStorage();
var startStorage = globalObj[GLOBAL_STORAGE_KEY];
async function runWithStartContext(context, fn) {
	return startStorage.run(context, fn);
}
function getStartContext(opts) {
	const context = startStorage.getStore();
	if (!context && opts?.throwIfNotFound !== false) throw new Error(`No Start context found in AsyncLocalStorage. Make sure you are using the function within the server runtime.`);
	return context;
}
var getStartOptions = () => getStartContext().startOptions;
var getStartContextServerOnly = getStartContext;
var createServerFn = (options, __opts) => {
	const resolvedOptions = __opts || options || {};
	if (typeof resolvedOptions.method === "undefined") resolvedOptions.method = "GET";
	const res = {
		options: resolvedOptions,
		middleware: (middleware) => {
			const newMiddleware = [...resolvedOptions.middleware || []];
			middleware.map((m) => {
				if (TSS_SERVER_FUNCTION_FACTORY in m) {
					if (m.options.middleware) newMiddleware.push(...m.options.middleware);
				} else newMiddleware.push(m);
			});
			const res = createServerFn(void 0, {
				...resolvedOptions,
				middleware: newMiddleware
			});
			res[TSS_SERVER_FUNCTION_FACTORY] = true;
			return res;
		},
		inputValidator: (inputValidator) => {
			return createServerFn(void 0, {
				...resolvedOptions,
				inputValidator
			});
		},
		handler: (...args) => {
			const [extractedFn, serverFn] = args;
			const newOptions = {
				...resolvedOptions,
				extractedFn,
				serverFn
			};
			const resolvedMiddleware = [...newOptions.middleware || [], serverFnBaseToMiddleware(newOptions)];
			extractedFn.method = resolvedOptions.method;
			return Object.assign(async (opts) => {
				const result = await executeMiddleware$1(resolvedMiddleware, "client", {
					...extractedFn,
					...newOptions,
					data: opts?.data,
					headers: opts?.headers,
					signal: opts?.signal,
					fetch: opts?.fetch,
					context: createNullProtoObject()
				});
				const redirect = parseRedirect(result.error);
				if (redirect) throw redirect;
				if (result.error) throw result.error;
				return result.result;
			}, {
				...extractedFn,
				method: resolvedOptions.method,
				__executeServer: async (opts) => {
					const startContext = getStartContextServerOnly();
					const serverContextAfterGlobalMiddlewares = startContext.contextAfterGlobalMiddlewares;
					return await executeMiddleware$1(resolvedMiddleware, "server", {
						...extractedFn,
						...opts,
						serverFnMeta: extractedFn.serverFnMeta,
						context: safeObjectMerge(opts.context, serverContextAfterGlobalMiddlewares),
						request: startContext.request
					}).then((d) => ({
						result: d.result,
						error: d.error,
						context: d.sendContext
					}));
				}
			});
		}
	};
	const fun = (options) => {
		return createServerFn(void 0, {
			...resolvedOptions,
			...options
		});
	};
	return Object.assign(fun, res);
};
async function executeMiddleware$1(middlewares, env, opts) {
	let flattenedMiddlewares = flattenMiddlewares([...getStartOptions()?.functionMiddleware || [], ...middlewares]);
	if (env === "server") {
		const startContext = getStartContextServerOnly({ throwIfNotFound: false });
		if (startContext?.executedRequestMiddlewares) flattenedMiddlewares = flattenedMiddlewares.filter((m) => !startContext.executedRequestMiddlewares.has(m));
	}
	const callNextMiddleware = async (ctx) => {
		const nextMiddleware = flattenedMiddlewares.shift();
		if (!nextMiddleware) return ctx;
		try {
			if ("inputValidator" in nextMiddleware.options && nextMiddleware.options.inputValidator && env === "server") ctx.data = await execValidator(nextMiddleware.options.inputValidator, ctx.data);
			let middlewareFn = void 0;
			if (env === "client") {
				if ("client" in nextMiddleware.options) middlewareFn = nextMiddleware.options.client;
			} else if ("server" in nextMiddleware.options) middlewareFn = nextMiddleware.options.server;
			if (middlewareFn) {
				const userNext = async (userCtx = {}) => {
					const result = await callNextMiddleware({
						...ctx,
						...userCtx,
						context: safeObjectMerge(ctx.context, userCtx.context),
						sendContext: safeObjectMerge(ctx.sendContext, userCtx.sendContext),
						headers: mergeHeaders(ctx.headers, userCtx.headers),
						_callSiteFetch: ctx._callSiteFetch,
						fetch: ctx._callSiteFetch ?? userCtx.fetch ?? ctx.fetch,
						result: userCtx.result !== void 0 ? userCtx.result : userCtx instanceof Response ? userCtx : ctx.result,
						error: userCtx.error ?? ctx.error
					});
					if (result.error) throw result.error;
					return result;
				};
				const result = await middlewareFn({
					...ctx,
					next: userNext
				});
				if (isRedirect(result)) return {
					...ctx,
					error: result
				};
				if (result instanceof Response) return {
					...ctx,
					result
				};
				if (!result) throw new Error("User middleware returned undefined. You must call next() or return a result in your middlewares.");
				return result;
			}
			return callNextMiddleware(ctx);
		} catch (error) {
			return {
				...ctx,
				error
			};
		}
	};
	return callNextMiddleware({
		...opts,
		headers: opts.headers || {},
		sendContext: opts.sendContext || {},
		context: opts.context || createNullProtoObject(),
		_callSiteFetch: opts.fetch
	});
}
function flattenMiddlewares(middlewares, maxDepth = 100) {
	const seen = /* @__PURE__ */ new Set();
	const flattened = [];
	const recurse = (middleware, depth) => {
		if (depth > maxDepth) throw new Error(`Middleware nesting depth exceeded maximum of ${maxDepth}. Check for circular references.`);
		middleware.forEach((m) => {
			if (m.options.middleware) recurse(m.options.middleware, depth + 1);
			if (!seen.has(m)) {
				seen.add(m);
				flattened.push(m);
			}
		});
	};
	recurse(middlewares, 0);
	return flattened;
}
async function execValidator(validator, input) {
	if (validator == null) return {};
	if ("~standard" in validator) {
		const result = await validator["~standard"].validate(input);
		if (result.issues) throw new Error(JSON.stringify(result.issues, void 0, 2));
		return result.value;
	}
	if ("parse" in validator) return validator.parse(input);
	if (typeof validator === "function") return validator(input);
	throw new Error("Invalid validator type!");
}
function serverFnBaseToMiddleware(options) {
	return {
		"~types": void 0,
		options: {
			inputValidator: options.inputValidator,
			client: async ({ next, sendContext, fetch, ...ctx }) => {
				const payload = {
					...ctx,
					context: sendContext,
					fetch
				};
				return next(await options.extractedFn?.(payload));
			},
			server: async ({ next, ...ctx }) => {
				const result = await options.serverFn?.(ctx);
				return next({
					...ctx,
					result
				});
			}
		}
	};
}
var createMiddleware = (options, __opts) => {
	const resolvedOptions = {
		type: "request",
		...__opts || options
	};
	return {
		options: resolvedOptions,
		middleware: (middleware) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { middleware }));
		},
		inputValidator: (inputValidator) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { inputValidator }));
		},
		client: (client) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { client }));
		},
		server: (server) => {
			return createMiddleware({}, Object.assign(resolvedOptions, { server }));
		}
	};
};
function getDefaultSerovalPlugins() {
	return [...(getStartOptions()?.serializationAdapters)?.map(makeSerovalPlugin) ?? [], ...defaultSerovalPlugins];
}
/**
* Binary frame protocol for multiplexing JSON and raw streams over HTTP.
*
* Frame format: [type:1][streamId:4][length:4][payload:length]
* - type: 1 byte - frame type (JSON, CHUNK, END, ERROR)
* - streamId: 4 bytes big-endian uint32 - stream identifier
* - length: 4 bytes big-endian uint32 - payload length
* - payload: variable length bytes
*/
/** Cached TextEncoder for frame encoding */
var textEncoder = new TextEncoder();
/** Shared empty payload for END frames - avoids allocation per call */
var EMPTY_PAYLOAD = new Uint8Array(0);
/**
* Encodes a single frame with header and payload.
*/
function encodeFrame(type, streamId, payload) {
	const frame = new Uint8Array(9 + payload.length);
	frame[0] = type;
	frame[1] = streamId >>> 24 & 255;
	frame[2] = streamId >>> 16 & 255;
	frame[3] = streamId >>> 8 & 255;
	frame[4] = streamId & 255;
	frame[5] = payload.length >>> 24 & 255;
	frame[6] = payload.length >>> 16 & 255;
	frame[7] = payload.length >>> 8 & 255;
	frame[8] = payload.length & 255;
	frame.set(payload, 9);
	return frame;
}
/**
* Encodes a JSON frame (type 0, streamId 0).
*/
function encodeJSONFrame(json) {
	return encodeFrame(FrameType.JSON, 0, textEncoder.encode(json));
}
/**
* Encodes a raw stream chunk frame.
*/
function encodeChunkFrame(streamId, chunk) {
	return encodeFrame(FrameType.CHUNK, streamId, chunk);
}
/**
* Encodes a raw stream end frame.
*/
function encodeEndFrame(streamId) {
	return encodeFrame(FrameType.END, streamId, EMPTY_PAYLOAD);
}
/**
* Encodes a raw stream error frame.
*/
function encodeErrorFrame(streamId, error) {
	const message = error instanceof Error ? error.message : String(error ?? "Unknown error");
	return encodeFrame(FrameType.ERROR, streamId, textEncoder.encode(message));
}
/**
* Creates a multiplexed ReadableStream from JSON stream and raw streams.
*
* The JSON stream emits NDJSON lines (from seroval's toCrossJSONStream).
* Raw streams are pumped concurrently, interleaved with JSON frames.
*
* Supports late stream registration for RawStreams discovered after initial
* serialization (e.g., from resolved Promises).
*
* @param jsonStream Stream of JSON strings (each string is one NDJSON line)
* @param rawStreams Map of stream IDs to raw binary streams (known at start)
* @param lateStreamSource Optional stream of late registrations for streams discovered later
*/
function createMultiplexedStream(jsonStream, rawStreams, lateStreamSource) {
	let controller;
	let cancelled = false;
	const readers = [];
	const enqueue = (frame) => {
		if (cancelled) return false;
		try {
			controller.enqueue(frame);
			return true;
		} catch {
			return false;
		}
	};
	const errorOutput = (error) => {
		if (cancelled) return;
		cancelled = true;
		try {
			controller.error(error);
		} catch {}
		for (const reader of readers) reader.cancel().catch(() => {});
	};
	async function pumpRawStream(streamId, stream) {
		const reader = stream.getReader();
		readers.push(reader);
		try {
			while (!cancelled) {
				const { done, value } = await reader.read();
				if (done) {
					enqueue(encodeEndFrame(streamId));
					return;
				}
				if (!enqueue(encodeChunkFrame(streamId, value))) return;
			}
		} catch (error) {
			enqueue(encodeErrorFrame(streamId, error));
		} finally {
			reader.releaseLock();
		}
	}
	async function pumpJSON() {
		const reader = jsonStream.getReader();
		readers.push(reader);
		try {
			while (!cancelled) {
				const { done, value } = await reader.read();
				if (done) return;
				if (!enqueue(encodeJSONFrame(value))) return;
			}
		} catch (error) {
			errorOutput(error);
			throw error;
		} finally {
			reader.releaseLock();
		}
	}
	async function pumpLateStreams() {
		if (!lateStreamSource) return [];
		const lateStreamPumps = [];
		const reader = lateStreamSource.getReader();
		readers.push(reader);
		try {
			while (!cancelled) {
				const { done, value } = await reader.read();
				if (done) break;
				lateStreamPumps.push(pumpRawStream(value.id, value.stream));
			}
		} finally {
			reader.releaseLock();
		}
		return lateStreamPumps;
	}
	return new ReadableStream({
		async start(ctrl) {
			controller = ctrl;
			const pumps = [pumpJSON()];
			for (const [streamId, stream] of rawStreams) pumps.push(pumpRawStream(streamId, stream));
			if (lateStreamSource) pumps.push(pumpLateStreams());
			try {
				const latePumps = (await Promise.all(pumps)).find(Array.isArray);
				if (latePumps && latePumps.length > 0) await Promise.all(latePumps);
				if (!cancelled) try {
					controller.close();
				} catch {}
			} catch {}
		},
		cancel() {
			cancelled = true;
			for (const reader of readers) reader.cancel().catch(() => {});
			readers.length = 0;
		}
	});
}
var serovalPlugins = void 0;
var FORM_DATA_CONTENT_TYPES = ["multipart/form-data", "application/x-www-form-urlencoded"];
var MAX_PAYLOAD_SIZE = 1e6;
var handleServerAction = async ({ request, context, serverFnId }) => {
	const methodUpper = request.method.toUpperCase();
	const url = new URL(request.url);
	const action = await getServerFnById(serverFnId, { origin: "client" });
	if (action.method && methodUpper !== action.method) return new Response(`expected ${action.method} method. Got ${methodUpper}`, {
		status: 405,
		headers: { Allow: action.method }
	});
	const isServerFn = request.headers.get("x-tsr-serverFn") === "true";
	if (!serovalPlugins) serovalPlugins = getDefaultSerovalPlugins();
	const contentType = request.headers.get("Content-Type");
	function parsePayload(payload) {
		return Iu(payload, { plugins: serovalPlugins });
	}
	return await (async () => {
		try {
			let res = await (async () => {
				if (FORM_DATA_CONTENT_TYPES.some((type) => contentType && contentType.includes(type))) {
					if (methodUpper === "GET") invariant();
					const formData = await request.formData();
					const serializedContext = formData.get(TSS_FORMDATA_CONTEXT);
					formData.delete(TSS_FORMDATA_CONTEXT);
					const params = {
						context,
						data: formData,
						method: methodUpper
					};
					if (typeof serializedContext === "string") try {
						const deserializedContext = Iu(JSON.parse(serializedContext), { plugins: serovalPlugins });
						if (typeof deserializedContext === "object" && deserializedContext) params.context = safeObjectMerge(deserializedContext, context);
					} catch (e) {}
					return await action(params);
				}
				if (methodUpper === "GET") {
					const payloadParam = url.searchParams.get("payload");
					if (payloadParam && payloadParam.length > MAX_PAYLOAD_SIZE) throw new Error("Payload too large");
					const payload = payloadParam ? parsePayload(JSON.parse(payloadParam)) : {};
					payload.context = safeObjectMerge(payload.context, context);
					payload.method = methodUpper;
					return await action(payload);
				}
				let jsonPayload;
				if (contentType?.includes("application/json")) jsonPayload = await request.json();
				const payload = jsonPayload ? parsePayload(jsonPayload) : {};
				payload.context = safeObjectMerge(payload.context, context);
				payload.method = methodUpper;
				return await action(payload);
			})();
			const unwrapped = res.result || res.error;
			if (isNotFound(res)) res = isNotFoundResponse(res);
			if (!isServerFn) return unwrapped;
			if (unwrapped instanceof Response) {
				if (isRedirect(unwrapped)) return unwrapped;
				unwrapped.headers.set(X_TSS_RAW_RESPONSE, "true");
				return unwrapped;
			}
			return serializeResult(res);
			function serializeResult(res) {
				let nonStreamingBody = void 0;
				const alsResponse = getResponse();
				if (res !== void 0) {
					const rawStreams = /* @__PURE__ */ new Map();
					let initialPhase = true;
					let lateStreamWriter;
					let lateStreamReadable = void 0;
					const pendingLateStreams = [];
					const plugins = [createRawStreamRPCPlugin((id, stream) => {
						if (initialPhase) {
							rawStreams.set(id, stream);
							return;
						}
						if (lateStreamWriter) {
							lateStreamWriter.write({
								id,
								stream
							}).catch(() => {});
							return;
						}
						pendingLateStreams.push({
							id,
							stream
						});
					}), ...serovalPlugins || []];
					let done = false;
					const callbacks = {
						onParse: (value) => {
							nonStreamingBody = value;
						},
						onDone: () => {
							done = true;
						},
						onError: (error) => {
							throw error;
						}
					};
					au(res, {
						refs: /* @__PURE__ */ new Map(),
						plugins,
						onParse(value) {
							callbacks.onParse(value);
						},
						onDone() {
							callbacks.onDone();
						},
						onError: (error) => {
							callbacks.onError(error);
						}
					});
					initialPhase = false;
					if (done && rawStreams.size === 0) return new Response(nonStreamingBody ? JSON.stringify(nonStreamingBody) : void 0, {
						status: alsResponse.status,
						statusText: alsResponse.statusText,
						headers: {
							"Content-Type": "application/json",
							[X_TSS_SERIALIZED]: "true"
						}
					});
					const { readable, writable } = new TransformStream();
					lateStreamReadable = readable;
					lateStreamWriter = writable.getWriter();
					for (const registration of pendingLateStreams) lateStreamWriter.write(registration).catch(() => {});
					pendingLateStreams.length = 0;
					const multiplexedStream = createMultiplexedStream(new ReadableStream({
						start(controller) {
							callbacks.onParse = (value) => {
								controller.enqueue(JSON.stringify(value) + "\n");
							};
							callbacks.onDone = () => {
								try {
									controller.close();
								} catch {}
								lateStreamWriter?.close().catch(() => {}).finally(() => {
									lateStreamWriter = void 0;
								});
							};
							callbacks.onError = (error) => {
								controller.error(error);
								lateStreamWriter?.abort(error).catch(() => {}).finally(() => {
									lateStreamWriter = void 0;
								});
							};
							if (nonStreamingBody !== void 0) callbacks.onParse(nonStreamingBody);
							if (done) callbacks.onDone();
						},
						cancel() {
							lateStreamWriter?.abort().catch(() => {});
							lateStreamWriter = void 0;
						}
					}), rawStreams, lateStreamReadable);
					return new Response(multiplexedStream, {
						status: alsResponse.status,
						statusText: alsResponse.statusText,
						headers: {
							"Content-Type": TSS_CONTENT_TYPE_FRAMED_VERSIONED,
							[X_TSS_SERIALIZED]: "true"
						}
					});
				}
				return new Response(void 0, {
					status: alsResponse.status,
					statusText: alsResponse.statusText
				});
			}
		} catch (error) {
			if (error instanceof Response) return error;
			if (isNotFound(error)) return isNotFoundResponse(error);
			console.info();
			console.info("Server Fn Error!");
			console.info();
			console.error(error);
			console.info();
			const serializedError = JSON.stringify(await Promise.resolve(ou(error, {
				refs: /* @__PURE__ */ new Map(),
				plugins: serovalPlugins
			})));
			const response = getResponse();
			return new Response(serializedError, {
				status: response.status ?? 500,
				statusText: response.statusText,
				headers: {
					"Content-Type": "application/json",
					[X_TSS_SERIALIZED]: "true"
				}
			});
		}
	})();
};
function isNotFoundResponse(error) {
	const { headers, ...rest } = error;
	return new Response(JSON.stringify(rest), {
		status: 404,
		headers: {
			"Content-Type": "application/json",
			...headers || {}
		}
	});
}
function warnDeprecatedTransformAssetUrls() {}
function normalizeTransformAssetResult(result) {
	if (typeof result === "string") return { href: result };
	return result;
}
function resolveTransformAssetsCrossOrigin(config, kind) {
	if (!config) return void 0;
	if (typeof config === "string") return config;
	return config[kind];
}
function isObjectShorthand(transform) {
	return "prefix" in transform;
}
function resolveTransformAssetsConfig(transform) {
	if (typeof transform === "string") {
		const prefix = transform;
		return {
			type: "transform",
			transformFn: ({ url }) => ({ href: `${prefix}${url}` }),
			cache: true
		};
	}
	if (typeof transform === "function") return {
		type: "transform",
		transformFn: transform,
		cache: true
	};
	if (isObjectShorthand(transform)) {
		const { prefix, crossOrigin } = transform;
		return {
			type: "transform",
			transformFn: ({ url, kind }) => {
				const href = `${prefix}${url}`;
				if (kind === "clientEntry") return { href };
				const co = resolveTransformAssetsCrossOrigin(crossOrigin, kind);
				return co ? {
					href,
					crossOrigin: co
				} : { href };
			},
			cache: true
		};
	}
	if ("createTransform" in transform && transform.createTransform) return {
		type: "createTransform",
		createTransform: transform.createTransform,
		cache: transform.cache !== false
	};
	return {
		type: "transform",
		transformFn: typeof transform.transform === "string" ? (({ url }) => ({ href: `${transform.transform}${url}` })) : transform.transform,
		cache: transform.cache !== false
	};
}
function adaptTransformAssetUrlsToTransformAssets(transformFn) {
	return async ({ url, kind }) => ({ href: await transformFn({
		url,
		type: kind
	}) });
}
function adaptTransformAssetUrlsConfigToTransformAssets(transform) {
	warnDeprecatedTransformAssetUrls();
	if (typeof transform === "string") return transform;
	if (typeof transform === "function") return adaptTransformAssetUrlsToTransformAssets(transform);
	if ("createTransform" in transform && transform.createTransform) return {
		createTransform: async (ctx) => adaptTransformAssetUrlsToTransformAssets(await transform.createTransform(ctx)),
		cache: transform.cache,
		warmup: transform.warmup
	};
	return {
		transform: typeof transform.transform === "string" ? transform.transform : adaptTransformAssetUrlsToTransformAssets(transform.transform),
		cache: transform.cache,
		warmup: transform.warmup
	};
}
/**
* Builds the client entry `<script>` tag from a (possibly transformed) client
* entry URL and optional injected head scripts.
*/
function buildClientEntryScriptTag(clientEntry, injectedHeadScripts) {
	let script = `import(${JSON.stringify(clientEntry)})`;
	if (injectedHeadScripts) script = `${injectedHeadScripts};${script}`;
	return {
		tag: "script",
		attrs: {
			type: "module",
			async: true
		},
		children: script
	};
}
function assignManifestAssetLink(link, next) {
	if (typeof link === "string") return next.crossOrigin ? next : next.href;
	return next.crossOrigin ? next : { href: next.href };
}
async function transformManifestAssets(source, transformFn, _opts) {
	const manifest = structuredClone(source.manifest);
	for (const route of Object.values(manifest.routes)) {
		if (route.preloads) route.preloads = await Promise.all(route.preloads.map(async (link) => {
			const result = normalizeTransformAssetResult(await transformFn({
				url: resolveManifestAssetLink(link).href,
				kind: "modulepreload"
			}));
			return assignManifestAssetLink(link, {
				href: result.href,
				crossOrigin: result.crossOrigin
			});
		}));
		if (route.assets) {
			for (const asset of route.assets) if (asset.tag === "link" && asset.attrs?.href) {
				const rel = asset.attrs.rel;
				if (!(typeof rel === "string" ? rel.split(/\s+/) : []).includes("stylesheet")) continue;
				const result = normalizeTransformAssetResult(await transformFn({
					url: asset.attrs.href,
					kind: "stylesheet"
				}));
				asset.attrs.href = result.href;
				if (result.crossOrigin) asset.attrs.crossOrigin = result.crossOrigin;
				else delete asset.attrs.crossOrigin;
			}
		}
	}
	const transformedClientEntry = normalizeTransformAssetResult(await transformFn({
		url: source.clientEntry,
		kind: "clientEntry"
	}));
	const rootRoute = manifest.routes[rootRouteId] = manifest.routes["__root__"] || {};
	rootRoute.assets = rootRoute.assets || [];
	rootRoute.assets.push(buildClientEntryScriptTag(transformedClientEntry.href, source.injectedHeadScripts));
	return manifest;
}
/**
* Builds a final Manifest from a StartManifestWithClientEntry without any
* URL transforms. Used when no transformAssetUrls option is provided.
*
* Returns a new manifest object so the cached base manifest is never mutated.
*/
function buildManifestWithClientEntry(source) {
	const scriptTag = buildClientEntryScriptTag(source.clientEntry, source.injectedHeadScripts);
	const baseRootRoute = source.manifest.routes[rootRouteId];
	return { routes: {
		...source.manifest.routes,
		[rootRouteId]: {
			...baseRootRoute,
			assets: [...baseRootRoute?.assets || [], scriptTag]
		}
	} };
}
var ServerFunctionSerializationAdapter = createSerializationAdapter({
	key: "$TSS/serverfn",
	test: (v) => {
		if (typeof v !== "function") return false;
		if (!(TSS_SERVER_FUNCTION in v)) return false;
		return !!v[TSS_SERVER_FUNCTION];
	},
	toSerializable: ({ serverFnMeta }) => ({ functionId: serverFnMeta.id }),
	fromSerializable: ({ functionId }) => {
		const fn = async (opts, signal) => {
			return (await (await getServerFnById(functionId, { origin: "client" }))(opts ?? {}, signal)).result;
		};
		return fn;
	}
});
function getStartResponseHeaders(opts) {
	return mergeHeaders({ "Content-Type": "text/html; charset=utf-8" }, ...opts.router.stores.matches.get().map((match) => {
		return match.headers;
	}));
}
var entriesPromise;
var baseManifestPromise;
/**
* Cached final manifest (with client entry script tag). In production,
* this is computed once and reused for every request when caching is enabled.
*/
var cachedFinalManifestPromise;
async function loadEntries() {
	const [routerEntry, startEntry, pluginAdapters] = await Promise.all([
		import("./router-Cl6_EIHx.mjs"),
		import("./start-DBZ-RhOC.mjs"),
		import("../__23tanstack-start-plugin-adapters-BWZzj-RW.mjs")
	]);
	return {
		routerEntry,
		startEntry,
		pluginAdapters
	};
}
function getEntries() {
	if (!entriesPromise) entriesPromise = loadEntries();
	return entriesPromise;
}
/**
* Returns the raw manifest data (without client entry script tag baked in).
* In dev mode, always returns fresh data. In prod, cached.
*/
function getBaseManifest(matchedRoutes) {
	if (!baseManifestPromise) baseManifestPromise = getStartManifest();
	return baseManifestPromise;
}
/**
* Resolves a final Manifest for a given request.
*
* - No transform: builds client entry script tag and returns (cached in prod).
* - Cached transform: transforms all URLs + builds script tag, caches result.
* - Per-request transform: deep-clones base manifest, transforms per-request.
*/
async function resolveManifest(matchedRoutes, transformFn, cache) {
	const base = await getBaseManifest(matchedRoutes);
	const computeFinalManifest = async () => {
		return transformFn ? await transformManifestAssets(base, transformFn, { clone: !cache }) : buildManifestWithClientEntry(base);
	};
	if (!transformFn || cache) {
		if (!cachedFinalManifestPromise) cachedFinalManifestPromise = computeFinalManifest();
		return cachedFinalManifestPromise;
	}
	return computeFinalManifest();
}
var ROUTER_BASEPATH = "/";
var SERVER_FN_BASE = "/_serverFn/";
var IS_PRERENDERING = process.env.TSS_PRERENDERING === "true";
var IS_SHELL_ENV = process.env.TSS_SHELL === "true";
var IS_DEV = false;
var ERR_NO_RESPONSE = IS_DEV ? `It looks like you forgot to return a response from your server route handler. If you want to defer to the app router, make sure to have a component set in this route.` : "Internal Server Error";
var ERR_NO_DEFER = IS_DEV ? `You cannot defer to the app router if there is no component defined on this route.` : "Internal Server Error";
function throwRouteHandlerError() {
	throw new Error(ERR_NO_RESPONSE);
}
function throwIfMayNotDefer() {
	throw new Error(ERR_NO_DEFER);
}
/**
* Check if a value is a special response (Response or Redirect)
*/
function isSpecialResponse(value) {
	return value instanceof Response || isRedirect(value);
}
/**
* Normalize middleware result to context shape
*/
function handleCtxResult(result) {
	if (isSpecialResponse(result)) return { response: result };
	return result;
}
/**
* Execute a middleware chain
*/
function executeMiddleware(middlewares, ctx) {
	let index = -1;
	const next = async (nextCtx) => {
		if (nextCtx) {
			if (nextCtx.context) ctx.context = safeObjectMerge(ctx.context, nextCtx.context);
			for (const key of Object.keys(nextCtx)) if (key !== "context") ctx[key] = nextCtx[key];
		}
		index++;
		const middleware = middlewares[index];
		if (!middleware) return ctx;
		let result;
		try {
			result = await middleware({
				...ctx,
				next
			});
		} catch (err) {
			if (isSpecialResponse(err)) {
				ctx.response = err;
				return ctx;
			}
			throw err;
		}
		const normalized = handleCtxResult(result);
		if (normalized) {
			if (normalized.response !== void 0) ctx.response = normalized.response;
			if (normalized.context) ctx.context = safeObjectMerge(ctx.context, normalized.context);
		}
		return ctx;
	};
	return next();
}
/**
* Wrap a route handler as middleware
*/
function handlerToMiddleware(handler, mayDefer = false) {
	if (mayDefer) return handler;
	return async (ctx) => {
		const response = await handler({
			...ctx,
			next: throwIfMayNotDefer
		});
		if (!response) throwRouteHandlerError();
		return response;
	};
}
/**
* Creates the TanStack Start request handler.
*
* @example Backwards-compatible usage (handler callback only):
* ```ts
* export default createStartHandler(defaultStreamHandler)
* ```
*
* @example With CDN URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssets: 'https://cdn.example.com',
* })
* ```
*
* @example With per-request URL rewriting:
* ```ts
* export default createStartHandler({
*   handler: defaultStreamHandler,
*   transformAssets: {
*     transform: ({ url }) => {
*       const cdnBase = getRequest().headers.get('x-cdn-base') || ''
*       return { href: `${cdnBase}${url}` }
*     },
*     cache: false,
*   },
* })
* ```
*/
function createStartHandler(cbOrOptions) {
	const cb = typeof cbOrOptions === "function" ? cbOrOptions : cbOrOptions.handler;
	const transformAssetsOption = typeof cbOrOptions === "function" ? void 0 : cbOrOptions.transformAssets;
	const transformAssetUrlsOption = typeof cbOrOptions === "function" ? void 0 : cbOrOptions.transformAssetUrls;
	const transformOption = transformAssetsOption !== void 0 ? resolveTransformAssetsConfig(transformAssetsOption) : transformAssetUrlsOption !== void 0 ? resolveTransformAssetsConfig(adaptTransformAssetUrlsConfigToTransformAssets(transformAssetUrlsOption)) : void 0;
	const warmupTransformManifest = !!transformAssetsOption && typeof transformAssetsOption === "object" && "warmup" in transformAssetsOption && transformAssetsOption.warmup === true || !!transformAssetUrlsOption && typeof transformAssetUrlsOption === "object" && transformAssetUrlsOption.warmup === true;
	const resolvedTransformConfig = transformOption;
	const cache = resolvedTransformConfig ? resolvedTransformConfig.cache : true;
	const shouldCacheCreateTransform = cache && true;
	let cachedCreateTransformPromise;
	const getTransformFn = async (opts) => {
		if (!resolvedTransformConfig) return void 0;
		if (resolvedTransformConfig.type === "createTransform") {
			if (shouldCacheCreateTransform) {
				if (!cachedCreateTransformPromise) cachedCreateTransformPromise = Promise.resolve(resolvedTransformConfig.createTransform(opts)).catch((error) => {
					cachedCreateTransformPromise = void 0;
					throw error;
				});
				return cachedCreateTransformPromise;
			}
			return resolvedTransformConfig.createTransform(opts);
		}
		return resolvedTransformConfig.transformFn;
	};
	if (warmupTransformManifest && cache && !cachedFinalManifestPromise) {
		const warmupPromise = (async () => {
			const base = await getBaseManifest(void 0);
			const transformFn = await getTransformFn({ warmup: true });
			return transformFn ? await transformManifestAssets(base, transformFn, { clone: false }) : buildManifestWithClientEntry(base);
		})();
		cachedFinalManifestPromise = warmupPromise;
		warmupPromise.catch(() => {
			if (cachedFinalManifestPromise === warmupPromise) cachedFinalManifestPromise = void 0;
			cachedCreateTransformPromise = void 0;
		});
	}
	const startRequestResolver = async (request, requestOpts) => {
		let router = null;
		let cbWillCleanup = false;
		try {
			const { url, handledProtocolRelativeURL } = getNormalizedURL(request.url);
			const href = url.pathname + url.search + url.hash;
			const origin = getOrigin(request);
			if (handledProtocolRelativeURL) return Response.redirect(url, 308);
			const entries = await getEntries();
			const startOptions = await entries.startEntry.startInstance?.getOptions() || {};
			const { hasPluginAdapters, pluginSerializationAdapters } = entries.pluginAdapters;
			const serializationAdapters = [
				...startOptions.serializationAdapters || [],
				...hasPluginAdapters ? pluginSerializationAdapters : [],
				ServerFunctionSerializationAdapter
			];
			const requestStartOptions = {
				...startOptions,
				serializationAdapters
			};
			const flattenedRequestMiddlewares = startOptions.requestMiddleware ? flattenMiddlewares(startOptions.requestMiddleware) : [];
			const executedRequestMiddlewares = new Set(flattenedRequestMiddlewares);
			const getRouter = async () => {
				if (router) return router;
				router = await entries.routerEntry.getRouter();
				let isShell = IS_SHELL_ENV;
				if (IS_PRERENDERING && !isShell) isShell = request.headers.get(HEADERS.TSS_SHELL) === "true";
				const history = createMemoryHistory({ initialEntries: [href] });
				router.update({
					history,
					isShell,
					isPrerendering: IS_PRERENDERING,
					origin: router.options.origin ?? origin,
					defaultSsr: requestStartOptions.defaultSsr,
					serializationAdapters: [...requestStartOptions.serializationAdapters, ...router.options.serializationAdapters || []],
					basepath: ROUTER_BASEPATH
				});
				return router;
			};
			if (SERVER_FN_BASE && url.pathname.startsWith(SERVER_FN_BASE)) {
				const serverFnId = url.pathname.slice(SERVER_FN_BASE.length).split("/")[0];
				if (!serverFnId) throw new Error("Invalid server action param for serverFnId");
				const serverFnHandler = async ({ context }) => {
					return runWithStartContext({
						getRouter,
						startOptions: requestStartOptions,
						contextAfterGlobalMiddlewares: context,
						request,
						executedRequestMiddlewares,
						handlerType: "serverFn"
					}, () => handleServerAction({
						request,
						context: requestOpts?.context,
						serverFnId
					}));
				};
				return handleRedirectResponse((await executeMiddleware([...flattenedRequestMiddlewares.map((d) => d.options.server), serverFnHandler], {
					request,
					pathname: url.pathname,
					context: createNullProtoObject(requestOpts?.context)
				})).response, request, getRouter);
			}
			const executeRouter = async (serverContext, matchedRoutes) => {
				const acceptParts = (request.headers.get("Accept") || "*/*").split(",");
				if (!["*/*", "text/html"].some((mimeType) => acceptParts.some((part) => part.trim().startsWith(mimeType)))) return Response.json({ error: "Only HTML requests are supported here" }, { status: 500 });
				const manifest = await resolveManifest(matchedRoutes, await getTransformFn({
					warmup: false,
					request
				}), cache);
				const routerInstance = await getRouter();
				attachRouterServerSsrUtils({
					router: routerInstance,
					manifest,
					getRequestAssets: () => getStartContext({ throwIfNotFound: false })?.requestAssets,
					includeUnmatchedRouteAssets: false
				});
				routerInstance.update({ additionalContext: { serverContext } });
				await routerInstance.load();
				if (routerInstance.state.redirect) return routerInstance.state.redirect;
				const ctx = getStartContext({ throwIfNotFound: false });
				await routerInstance.serverSsr.dehydrate({ requestAssets: ctx?.requestAssets });
				const responseHeaders = getStartResponseHeaders({ router: routerInstance });
				cbWillCleanup = true;
				return cb({
					request,
					router: routerInstance,
					responseHeaders
				});
			};
			const requestHandlerMiddleware = async ({ context }) => {
				return runWithStartContext({
					getRouter,
					startOptions: requestStartOptions,
					contextAfterGlobalMiddlewares: context,
					request,
					executedRequestMiddlewares,
					handlerType: "router"
				}, async () => {
					try {
						return await handleServerRoutes({
							getRouter,
							request,
							url,
							executeRouter,
							context,
							executedRequestMiddlewares
						});
					} catch (err) {
						if (err instanceof Response) return err;
						throw err;
					}
				});
			};
			return handleRedirectResponse((await executeMiddleware([...flattenedRequestMiddlewares.map((d) => d.options.server), requestHandlerMiddleware], {
				request,
				pathname: url.pathname,
				context: createNullProtoObject(requestOpts?.context)
			})).response, request, getRouter);
		} finally {
			if (router && !cbWillCleanup) router.serverSsr?.cleanup();
			router = null;
		}
	};
	return requestHandler(startRequestResolver);
}
async function handleRedirectResponse(response, request, getRouter) {
	if (!isRedirect(response)) return response;
	if (isResolvedRedirect(response)) {
		if (request.headers.get("x-tsr-serverFn") === "true") return Response.json({
			...response.options,
			isSerializedRedirect: true
		}, { headers: response.headers });
		return response;
	}
	const opts = response.options;
	if (opts.to && typeof opts.to === "string" && !opts.to.startsWith("/")) throw new Error(`Server side redirects must use absolute paths via the 'href' or 'to' options. The redirect() method's "to" property accepts an internal path only. Use the "href" property to provide an external URL. Received: ${JSON.stringify(opts)}`);
	if ([
		"params",
		"search",
		"hash"
	].some((d) => typeof opts[d] === "function")) throw new Error(`Server side redirects must use static search, params, and hash values and do not support functional values. Received functional values for: ${Object.keys(opts).filter((d) => typeof opts[d] === "function").map((d) => `"${d}"`).join(", ")}`);
	const redirect = (await getRouter()).resolveRedirect(response);
	if (request.headers.get("x-tsr-serverFn") === "true") return Response.json({
		...response.options,
		isSerializedRedirect: true
	}, { headers: response.headers });
	return redirect;
}
async function handleServerRoutes({ getRouter, request, url, executeRouter, context, executedRequestMiddlewares }) {
	const router = await getRouter();
	const pathname = executeRewriteInput(router.rewrite, url).pathname;
	const { matchedRoutes, foundRoute, routeParams } = router.getMatchedRoutes(pathname);
	const isExactMatch = foundRoute && routeParams["**"] === void 0;
	const routeMiddlewares = [];
	for (const route of matchedRoutes) {
		const serverMiddleware = route.options.server?.middleware;
		if (serverMiddleware) {
			const flattened = flattenMiddlewares(serverMiddleware);
			for (const m of flattened) if (!executedRequestMiddlewares.has(m)) routeMiddlewares.push(m.options.server);
		}
	}
	const server = foundRoute?.options.server;
	if (server?.handlers && isExactMatch) {
		const handlers = typeof server.handlers === "function" ? server.handlers({ createHandlers: (d) => d }) : server.handlers;
		const handler = handlers[request.method.toUpperCase()] ?? handlers["ANY"];
		if (handler) {
			const mayDefer = !!foundRoute.options.component;
			if (typeof handler === "function") routeMiddlewares.push(handlerToMiddleware(handler, mayDefer));
			else {
				if (handler.middleware?.length) {
					const handlerMiddlewares = flattenMiddlewares(handler.middleware);
					for (const m of handlerMiddlewares) routeMiddlewares.push(m.options.server);
				}
				if (handler.handler) routeMiddlewares.push(handlerToMiddleware(handler.handler, mayDefer));
			}
		}
	}
	routeMiddlewares.push((ctx) => executeRouter(ctx.context, matchedRoutes));
	return (await executeMiddleware(routeMiddlewares, {
		request,
		context,
		params: routeParams,
		pathname
	})).response;
}
var fetch = createStartHandler(defaultStreamHandler);
function createServerEntry(entry) {
	return { async fetch(...args) {
		return await entry.fetch(...args);
	} };
}
var server_default = createServerEntry({ fetch });
//#endregion
export { ssr_exports as a, getServerFnById as i, createMiddleware as n, createServerFn as r, TSS_SERVER_FUNCTION as t };
