import { slugify } from "./slugify";
import type { ProductAPIData } from "../../../types/types";

export const findIdBySlug = (
  products: ProductAPIData[],
  slug: string,
): string | undefined => {
  const match = products.find((p) => slugify(p.title) === slug);
  return match?.id;
};
