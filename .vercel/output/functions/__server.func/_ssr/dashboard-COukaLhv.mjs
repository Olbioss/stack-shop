//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-COukaLhv.js
/**
* Dashboard Utility Functions
*
* Shared formatting helpers for the shop dashboard.
*/
/**
* Format a number as USD currency
*/
function formatCurrency(amount) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 0
	}).format(amount);
}
/**
* Calculate and format the percentage change between current and previous values
*/
function formatPercentChange(current, previous) {
	if (previous === 0) return current > 0 ? "+100% from last month" : "No data last month";
	const change = (current - previous) / previous * 100;
	return `${change >= 0 ? "+" : ""}${change.toFixed(1)}% from last month`;
}
/**
* Format a date string relative to now (e.g., "2 hours ago", "3 days ago")
*/
function formatRelativeTime(dateString) {
	const date = new Date(dateString);
	const diffMs = (/* @__PURE__ */ new Date()).getTime() - date.getTime();
	const diffMins = Math.floor(diffMs / 6e4);
	const diffHours = Math.floor(diffMs / 36e5);
	const diffDays = Math.floor(diffMs / 864e5);
	if (diffMins < 1) return "Just now";
	if (diffMins < 60) return `${diffMins}m ago`;
	if (diffHours < 24) return `${diffHours}h ago`;
	if (diffDays < 7) return `${diffDays}d ago`;
	return date.toLocaleDateString("en-US", {
		month: "short",
		day: "numeric"
	});
}
/**
* Get a status badge color class based on order status
*/
function getStatusColor(status) {
	switch (status) {
		case "delivered": return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
		case "shipped": return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
		case "processing": return "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400";
		case "confirmed": return "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-400";
		case "pending": return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
		case "cancelled":
		case "refunded": return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
		default: return "bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-400";
	}
}
function getStartOfDay(date) {
	const result = new Date(date);
	result.setHours(0, 0, 0, 0);
	return result;
}
function getStartOfWeek(date) {
	const result = new Date(date);
	const day = result.getDay();
	const diff = result.getDate() - day;
	result.setDate(diff);
	result.setHours(0, 0, 0, 0);
	return result;
}
function getStartOfMonth(date) {
	const result = new Date(date);
	result.setDate(1);
	result.setHours(0, 0, 0, 0);
	return result;
}
function getStartOfLastMonth(date) {
	const result = new Date(date);
	result.setMonth(result.getMonth() - 1);
	result.setDate(1);
	result.setHours(0, 0, 0, 0);
	return result;
}
function getDaysAgo(days) {
	const result = /* @__PURE__ */ new Date();
	result.setDate(result.getDate() - days);
	result.setHours(0, 0, 0, 0);
	return result;
}
//#endregion
export { getStartOfDay as a, getStartOfWeek as c, getDaysAgo as i, getStatusColor as l, formatPercentChange as n, getStartOfLastMonth as o, formatRelativeTime as r, getStartOfMonth as s, formatCurrency as t };
