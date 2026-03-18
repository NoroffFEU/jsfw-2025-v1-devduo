import type { DiscountPriceType } from "../../../types/types";

// returns true if discounted price is lesser than default price
export const isDiscounted = ({ defaultPrice, discountedPrice }: DiscountPriceType) => {
  if (discountedPrice === undefined) {
    return null;
  }
  return discountedPrice < defaultPrice;
};
