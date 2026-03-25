import type { Product } from "../../../types/api";
import type { ProductAPIData } from "../../../types/types";
import { slugify } from "../utils/slugify";

/**
 *
 * @param slug Finds a product by slug from a list of products. Converts ProductAPIData to product shape
 *
 * @param slug - Human-readable slug ("product/blue-shoes")
 * @param products - list of products to search in
 * @returns full product object matching the slug
 * @throws Error is product not found
 */

export const fetchProductBySlug = (slug: string, products: ProductAPIData[]): Product => {
  const foundProduct = products.find((p) => slugify(p.title) === slug) as
    | Product
    | undefined;

  if (!foundProduct) {
    throw new Error(`Product "${slug}" not found`);
  }

  return foundProduct;
};
