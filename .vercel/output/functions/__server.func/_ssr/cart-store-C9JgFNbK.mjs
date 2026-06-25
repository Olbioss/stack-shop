import { n as create, t as persist } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-store-C9JgFNbK.js
var calculateTotals = (items) => {
	return {
		totalItems: items.reduce((total, item) => total + item.quantity, 0),
		subtotal: items.reduce((total, item) => total + item.price * item.quantity, 0)
	};
};
var useCartStore = create()(persist((set, get) => ({
	items: [],
	isOpen: false,
	totalItems: 0,
	subtotal: 0,
	shippingMethod: null,
	shippingAddress: null,
	shippingCost: 0,
	appliedCoupons: [],
	addItem: (item) => {
		const currentItems = get().items;
		const itemId = `${item.productId}-${item.color || ""}-${item.size || ""}`;
		const existingItem = currentItems.find((i) => i.id === itemId);
		let newItems;
		if (existingItem) newItems = currentItems.map((i) => i.id === itemId ? {
			...i,
			quantity: i.quantity + item.quantity
		} : i);
		else newItems = [...currentItems, {
			...item,
			id: itemId
		}];
		set({
			items: newItems,
			isOpen: true,
			...calculateTotals(newItems)
		});
	},
	removeItem: (id) => {
		const newItems = get().items.filter((i) => i.id !== id);
		set({
			items: newItems,
			...calculateTotals(newItems)
		});
	},
	updateQuantity: (id, quantity) => {
		if (quantity < 1) return;
		const newItems = get().items.map((i) => i.id === id ? {
			...i,
			quantity
		} : i);
		set({
			items: newItems,
			...calculateTotals(newItems)
		});
	},
	clearCart: () => set({
		items: [],
		totalItems: 0,
		subtotal: 0,
		appliedCoupons: []
	}),
	setIsOpen: (isOpen) => set({ isOpen }),
	toggleOpen: () => set({ isOpen: !get().isOpen }),
	setShippingMethod: (method) => {
		set({
			shippingMethod: method,
			shippingCost: method ? Number(method.price) : 0
		});
	},
	setShippingAddress: (address) => set({ shippingAddress: address }),
	addCoupon: (coupon) => {
		const current = get().appliedCoupons;
		if (current.some((c) => c.code.toLowerCase() === coupon.code.toLowerCase())) return;
		set({ appliedCoupons: [...current, coupon] });
	},
	removeCoupon: (code) => set({ appliedCoupons: get().appliedCoupons.filter((c) => c.code !== code) }),
	clearCoupons: () => set({ appliedCoupons: [] })
}), {
	name: "cart-storage",
	partialize: (state) => ({
		items: state.items,
		appliedCoupons: state.appliedCoupons
	}),
	onRehydrateStorage: () => (state) => {
		if (state) {
			const { totalItems, subtotal } = calculateTotals(state.items);
			state.totalItems = totalItems;
			state.subtotal = subtotal;
		}
	}
}));
//#endregion
export { useCartStore as t };
