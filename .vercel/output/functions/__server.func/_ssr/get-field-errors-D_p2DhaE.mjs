//#region node_modules/.nitro/vite/services/ssr/assets/get-field-errors-D_p2DhaE.js
function getFieldErrors(errors) {
	if (!Array.isArray(errors)) return [];
	return errors.filter((e) => typeof e === "string");
}
//#endregion
export { getFieldErrors as t };
