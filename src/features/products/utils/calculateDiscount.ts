import type { Discount } from "../../../types/types";

/**
 * Calculates the discount percentage based on the default and discounted prices.
 *
 * @param {Discount} params - The discount parameters.
 * @param {number} params.defaultPrice - The original price before discount.
 * @param {number} params.discountedPrice - The price after discount.
 * @returns {number} The discount percentage rounded to the nearest integer (0 if invalid or no discount).
 */

export const calculateDiscount = ({
  defaultPrice,
  discountedPrice,
}: Discount): number => {
  if (discountedPrice === undefined) {
    return 0;
  }
  if (defaultPrice <= 0 || discountedPrice > defaultPrice) {
    return 0;
  }

  const discountAmount = defaultPrice - discountedPrice;
  const discountPercentage = (discountAmount / defaultPrice) * 100;

  return Number(discountPercentage.toFixed(0));
};
