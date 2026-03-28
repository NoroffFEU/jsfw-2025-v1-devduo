import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ProductType = {
  id: string;
  title: string;
  image: {
    url: string;
    alt: string;
  };
  price: number;
  discountedPrice?: number;
};

export type CartItemType = ProductType & {
  quantity: number;
};

export type CartStoreType = {
  cart: CartItemType[];
  addProductToCart: (product: ProductType) => void;
  removeProductFromCart: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;
};

// Uses Zustands Persist middleware to store the cart state in local storage.
export const useCartStore = create<CartStoreType>()(
  persist(
    // The Store
    (set) => ({
      // create en empty cart array
      cart: [],
      addProductToCart: (product) =>
        set((state) => {
          const existing = state.cart.find((item) => item.id === product.id);

          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
              ),
            };
          }

          return {
            cart: [...state.cart, { ...product, quantity: 1 }],
          };
        }),
      // Removes a product from cart by filtering out the product with the given id (productId)
      removeProductFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== productId),
        })),
      //
      decreaseQuantity: (productId) =>
        set((state) => {
          return {
            cart: state.cart
              .map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
              )
              .filter((item) => item.quantity > 0),
          };
        }),
      clearCart: () => set({ cart: [] }),
    }),
    {
      name: "cart-storage",
    },
  ),
);
