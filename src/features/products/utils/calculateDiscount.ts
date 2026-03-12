import type { Discount } from "../../../types/types";

export const calculateDiscount = ({ defaultPrice, discountedPrice }: Discount) => {
  if (defaultPrice <= 0 || discountedPrice > defaultPrice) {
    console.warn(
      `${defaultPrice} is less than 0, or ${discountedPrice} is higher than ${defaultPrice}`,
    );

    return 0;
  }

  const discountAmount = defaultPrice - discountedPrice;
  const discountPercentage = (discountAmount / defaultPrice) * 100;

  return Number(discountPercentage.toFixed(0));
};
