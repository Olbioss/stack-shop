import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/utils-Pgq5HWQm.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function gridCellBorderClasses(index, columns2 = 2, columns3 = 3, includeTop = true) {
	const left4 = index % columns2 !== 0;
	const left6 = index % columns3 !== 0;
	return twMerge(clsx("border-dashed border-r-0 border-b-0", includeTop ? "border-t-2" : "border-t-0", left4 ? "@4xl:border-l-2" : "@4xl:border-l-0", left6 ? "@6xl:border-l-2" : "@6xl:border-l-0"));
}
var formatCurrency = (amount) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD"
	}).format(amount);
};
//#endregion
export { formatCurrency as n, gridCellBorderClasses as r, cn as t };
