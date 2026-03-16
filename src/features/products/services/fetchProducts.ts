import type { APIResponse } from "../../../types/types";

export const fetchProducts = async (): Promise<APIResponse> => {
  const response = await fetch("https://v2.api.noroff.dev/online-shop");

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const products = await response.json();
  return products;
};
