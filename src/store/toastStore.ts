// types, store and subscription for toast notifications
import { create } from "zustand";
import { useCartStore } from "./cartStore";
import type { CartItemType } from "./cartStore";

export interface ToastMessage {
  id: string;
  message: string;
  type: "success" | "error";
}

interface ToastState {
  toasts: ToastMessage[];
  // caller provides message + type, store generates id
  addToast: (toast: Omit<ToastMessage, "id">) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  // spreads existing toasts + new toast with a generated id into a new array
  addToast: (toast) =>
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id: crypto.randomUUID() }],
    })),

  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));

const getTotalQuantity = (items: CartItemType[]) =>
  items.reduce((total, item) => total + item.quantity, 0);

// capture baseline before subscription starts
let previousItems: CartItemType[] = useCartStore.getState().cart;

// runs every time cartStore state changes
useCartStore.subscribe((state) => {
  const currentItems = state.cart;

  const previouseTotal = getTotalQuantity(previousItems);
  const currentTotal = getTotalQuantity(currentItems);

  if (currentTotal > previouseTotal) {
    //find the item that is new or has increased quantity
    const added = currentItems.find((item) => {
      const previous = previousItems.find((prev) => prev.id === item.id);
      return !previous || item.quantity > previous.quantity;
    });
    if (added) {
      useToastStore.getState().addToast({
        message: `${added.title} added to your cart`,
        type: "success",
      });
    }
  } else if (currentTotal < previouseTotal) {
    // find the item that is gone or has decreased quantity
    const removed = previousItems.find((item) => {
      const current = currentItems.find((curr) => curr.id === item.id);
      return !current || item.quantity > current.quantity;
    });
    if (removed) {
      useToastStore.getState().addToast({
        message: `${removed.title} removed from your cart`,
        type: "error",
      });
    }
  }
  // always update baseline after each change
  previousItems = currentItems;
});
