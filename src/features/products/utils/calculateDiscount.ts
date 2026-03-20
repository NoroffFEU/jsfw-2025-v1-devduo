import type { Discount } from "../../../types/types";

/**
 * Calculates the discount percentage based on the default and discounted prices.
 *
 * @param {Discount} params - The discount parameters.
 * @param {number} params.defaultPrice - The original price before discount.
 * @param {number} params.discountedPrice - The price after discount.
 * @returns {number | null} The discount percentage rounded to the nearest integer,
 * or null if the input is invalid (e.g., defaultPrice <= 0 or discountedPrice > defaultPrice).
 */

export const calculateDiscount = ({
  defaultPrice,
  discountedPrice,
}: Discount): number | null => {
  if (discountedPrice === undefined) {
    return null;
  }
  if (defaultPrice <= 0 || discountedPrice > defaultPrice) {
    return null;
  }

  const discountAmount = defaultPrice - discountedPrice;
  const discountPercentage = (discountAmount / defaultPrice) * 100;

  return Number(discountPercentage.toFixed(0));
};
