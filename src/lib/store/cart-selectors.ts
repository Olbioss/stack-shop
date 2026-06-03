import { useShallow } from "zustand/shallow";
import { useCartStore } from "./cart-store";

export const useCartItems = () => useCartStore((s) => s.items);
export const useCartShippingCost = () => useCartStore((s) => s.shippingCost);
export const useCartTotalItems = () => useCartStore((s) => s.totalItems);
export const useCartSubtotal = () => useCartStore((s) => s.subtotal);
export const useCartIsOpen = () => useCartStore((s) => s.isOpen);
export const useCartShippingMethod = () =>
  useCartStore((s) => s.shippingMethod);

export const useCartActions = () =>
  useCartStore(
    useShallow((s) => ({
      addItem: s.addItem,
      removeItem: s.removeItem,
      updateQuantity: s.updateQuantity,
      clearCart: s.clearCart,
      setIsOpen: s.setIsOpen,
      toggleOpen: s.toggleOpen,
      setShippingMethod: s.setShippingMethod,
    }))
  );
