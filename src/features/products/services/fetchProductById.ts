import type { Product } from "../../../types/api";

export const fetchProductById = async (id: string): Promise<Product> => {
  const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);

  if (!response.ok) {
    throw new Error(`Product not found`);
  }

  const data = await response.json();
  return data.data;
};
