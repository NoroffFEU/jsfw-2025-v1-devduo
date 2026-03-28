import { create } from "zustand";

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

export type CartStoreType = {
  cart: ProductType[];
  addProductToCart: (product: ProductType) => void;
  removeProductFromCart: (productId: string) => void;
};

export const useCartStore = create<CartStoreType>((set) => ({
  // create en empty cart array
  cart: [],
  // Adds product to the existing cart array
  addProductToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
  // Removes a product from cart by filtering out the product with the given id (productId)
  removeProductFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((product) => product.id !== productId),
    })),
}));
