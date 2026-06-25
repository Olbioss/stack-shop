//#region node_modules/.nitro/vite/services/ssr/assets/create-server-fetcher-Cvil3itN.js
/**
* Creates a server-side fetcher function compatible with DataTable
*
* This factory translates DataTable's internal state (pagination, sorting, filters)
* into server API query parameters, executes the fetch, and formats the response
* for DataTable consumption.
*
* @param config - Configuration object for the fetcher
* @returns A fetcher function that can be passed to DataTable's server prop
*
* @example
* const productsFetcher = createServerFetcher({
*   fetchFn: (query) => getAdminProducts({ data: query }),
*   sortFieldMap: { name: 'name', price: 'sellingPrice' },
*   defaultQuery: { sortBy: 'createdAt', sortDirection: 'desc' },
* });
*
* <DataTable server={{ fetcher: productsFetcher }} />
*/
function createServerFetcher(config) {
	const { fetchFn, sortFieldMap = {}, filterFieldMap = {}, defaultQuery = {}, transformFilters, buildQuery } = config;
	return async (params) => {
		const { pageIndex, pageSize, sorting, columnFilters, globalFilter } = params;
		const baseQuery = {
			limit: pageSize,
			offset: pageIndex * pageSize
		};
		if (sorting.length > 0) {
			const sortCol = sorting[0];
			baseQuery.sortBy = sortFieldMap[sortCol.id] ?? sortCol.id;
			baseQuery.sortDirection = sortCol.desc ? "desc" : "asc";
		}
		if (globalFilter?.trim()) baseQuery.search = globalFilter.trim();
		const filters = {};
		for (const filter of columnFilters) {
			const mappedField = filterFieldMap[filter.id] ?? filter.id;
			filters[mappedField] = filter.value;
		}
		const transformedFilters = transformFilters ? transformFilters(filters) : filters;
		Object.assign(baseQuery, transformedFilters);
		const mergedQuery = {
			...defaultQuery,
			...baseQuery
		};
		const response = await fetchFn(buildQuery ? buildQuery(params, mergedQuery) : mergedQuery);
		return {
			rows: response.data ?? [],
			pageCount: Math.ceil((response.total ?? 0) / pageSize),
			total: response.total ?? 0
		};
	};
}
/**
* Creates a simple fetcher for boolean filters
* Converts string 'true'/'false' to actual booleans
*/
function booleanFilterTransform(filters) {
	const result = {};
	for (const [key, value] of Object.entries(filters)) if (value === "true") result[key] = true;
	else if (value === "false") result[key] = false;
	else result[key] = value;
	return result;
}
//#endregion
export { createServerFetcher as n, booleanFilterTransform as t };
