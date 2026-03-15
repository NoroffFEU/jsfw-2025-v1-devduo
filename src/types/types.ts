export type ButtonClickTypes = {
  onClick: () => void;
};

export type ClassNameProps = {
  className?: string;
};

export type CloseMenuProp = {
  closeMenu?: () => void;
};

export type Discount = {
  defaultPrice: number;
  discountedPrice: number;
};

export type DiscountPriceType = {
  discountedPrice: number;
  defaultPrice: number;
};

export type ProductType = {
  productId: string;
  productName: string;
  productImage: string;
  imageAltText: string;
  defaultPrice: number;
  discountedPrice: number;
  rating: number;
};
