//#region node_modules/.nitro/vite/services/ssr/assets/api-response-CYQsbkXz.js
/**
* Create a paginated response object
*/
function createPaginatedResponse(data, total, limit, offset) {
	return {
		data,
		total,
		limit,
		offset
	};
}
/**
* Create a success mutation response
*/
function createSuccessResponse(message, data) {
	return {
		success: true,
		message,
		data
	};
}
/**
* Create an empty paginated response
*/
function emptyPaginatedResponse(limit, offset) {
	return {
		data: [],
		total: 0,
		limit,
		offset
	};
}
//#endregion
export { createSuccessResponse as n, emptyPaginatedResponse as r, createPaginatedResponse as t };
