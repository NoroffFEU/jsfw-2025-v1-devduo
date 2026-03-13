import type { Discount } from "../../../types/types";

// function returns null if the arguments matches
// function can return a number or null
export const calculateDiscount = ({
  defaultPrice,
  discountedPrice,
}: Discount): number | null => {
  if (defaultPrice <= 0 || discountedPrice > defaultPrice) {
    return null;
  }

  const discountAmount = defaultPrice - discountedPrice;
  const discountPercentage = (discountAmount / defaultPrice) * 100;

  return Number(discountPercentage.toFixed(0));
};
