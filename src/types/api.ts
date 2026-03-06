/* types from noroff api*/
export interface Tag {
  tags: ["electronics", "fashion", "fitness", "lifestyle", "home"];
}

export interface ProductImage {
  url: string;
  alt: string;
}

export interface Review {
  id: string;
  username: string;
  rating: BigInteger;
  description: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: ProductImage;
  rating: number;
  tags: string[];
  reviews: Review[];
}

export interface ProductList {
  data: [Product];
  meta: ApiMeta;
}

export interface ProductSingle {
  data: Product;
  meta: Record<string, unknown>;
}

export interface ApiMeta {
  isFirstPage: boolean;
  isLastPage: boolean;
  currentPage: number;
  previousPage: number | null;
  nextPage: number | null;
  pageCount: number;
  totalCount: number;
}
