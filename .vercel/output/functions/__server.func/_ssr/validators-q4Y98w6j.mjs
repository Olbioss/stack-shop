//#region node_modules/.nitro/vite/services/ssr/assets/validators-q4Y98w6j.js
function validateField(schema) {
	return ({ value }) => {
		const result = schema.safeParse(value);
		return result.success ? void 0 : result.error.issues[0].message;
	};
}
function validateOptionalField(schema) {
	return ({ value }) => {
		if (value === null || value === void 0) return void 0;
		if (typeof value === "string" && value.trim() === "") return void 0;
		if (value === "") return void 0;
		const result = schema.safeParse(value);
		return result.success ? void 0 : result.error.issues[0]?.message;
	};
}
//#endregion
export { validateOptionalField as n, validateField as t };
