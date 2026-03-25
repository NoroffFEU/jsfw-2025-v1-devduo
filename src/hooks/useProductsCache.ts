import { useState, useCallback } from "react";
import { fetchProducts } from "../features/products/services/fetchProducts";
import type { ProductAPIData } from "../types/types";

/** Hook to cache and reuse products list across components. First call fetches from API, subsequent calls return cached data */

export const useProductsCache = () => {
  const [products, setProducts] = useState<ProductAPIData[] | null>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchAndCache = useCallback(async (): Promise<ProductAPIData[]> => {
    if (products) {
      return products;
    }

    try {
      setIsFetching(true);
      setError(null);
      const response = await fetchProducts();
      setProducts(response.data);
      return response.data;
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Failed to fetch products";
      setError(errorMessage);
      throw err;
    } finally {
      setIsFetching(false);
    }
  }, [products]);

  const loading = isFetching && !products;

  return { products, loading, error, fetchAndCache };
};
