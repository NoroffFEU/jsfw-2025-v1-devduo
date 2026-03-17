export type ButtonClickTypes = {
  onClick: () => void;
};

export type ClassNameProps = {
  className?: string;
};

export type CloseMenuProp = {
  closeMenu?: () => void;
};

export type ErrorMessageProps = {
  message: string;
};

// --- Product card component ---

export type Discount = {
  defaultPrice: number;
  discountedPrice?: number;
};

export type DiscountPriceType = {
  discountedPrice?: number;
  defaultPrice: number;
};

export type ProductType = {
  productId: string;
  productName: string;
  productImage: string;
  imageAltText: string;
  defaultPrice: number;
  discountedPrice?: number;
  rating?: number;
};

// --- Product Grid component ---

export interface ProductAPIData {
  id: string;
  title: string;
  image: {
    url: string;
    alt: string;
  };
  price: number;
  discountedPrice?: number;
  rating: number;
}

export interface APIResponse {
  data: ProductAPIData[];
  meta: object;
}

export type ProductGridProps = {
  error: string | null;
  loading: boolean;
  productsList?: Array<ProductAPIData>;
  className: string;
};
