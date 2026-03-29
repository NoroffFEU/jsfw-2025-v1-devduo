// Interface cart item/input
import type { Product } from "./api.ts";
export interface CartItem {
  productId: string;
  title: string;
  price: number;
  discountedPrice: number;
  quantity: number;
  imageUrl: string;
  imageAlt: string;
}

export type CartItemInput = Pick<
  Product,
  "id" | "title" | "price" | "discountedPrice" | "image"
> & { quantity?: number };

// Cart Link/icon
export type CartLinkProps = {
  linkStyle?: string;
  circleStyle?: string;
};
