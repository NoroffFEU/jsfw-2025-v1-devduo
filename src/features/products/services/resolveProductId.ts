import { fetchProducts } from "./fetchProducts";
import { findIdBySlug } from "../utils/findIdBySlug";

export const resolveProductId = async (slug: string): Promise<string> => {
  const response = await fetchProducts();
  const id = findIdBySlug(response.data, slug);

  if (!id) throw new Error("Product not found");

  return id;
};
