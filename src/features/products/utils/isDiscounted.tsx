import type { DiscountPriceType } from "../../../types/types";

// returns true if discounted price is lesser than default price
export const isDiscounted = ({ defaultPrice, discountedPrice }: DiscountPriceType) => {
  return discountedPrice < defaultPrice;
};
