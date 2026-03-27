import type { Product, ProductSingle } from "../../../types/api";

const BASE_URL = "https://v2.api.noroff.dev/online-shop";

export const fetchSingleProduct = async (id: string): Promise<Product> => {
  if (!id) {
    throw new Error("Product ID is required");
  }

  const response = await fetch(`${BASE_URL}/${id}`);

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error("Product not found");
    }
    throw new Error("Failed to fetch product");
  }

  const data: ProductSingle = await response.json();
  return data.data;
};
