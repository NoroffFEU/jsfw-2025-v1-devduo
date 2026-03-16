import { useEffect, useState } from "react";
import ProductsGrid from "./components/ProductsGrid";
import styles from "./ProductsPage.module.css";
import type { APIResponse } from "../../types/types";
import { fetchProducts } from "./services/fetchProducts";

const ProductsPage = () => {
  const [products, setProducts] = useState<APIResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(
          err instanceof Error
            ? `${err.message}. Try again later`
            : `Something went wrong. Try again later`,
        );

        console.error(err, "Fetch request failed");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const productsList = products?.data;
  return (
    <>
      <section>
        <h1 className={styles.productHeadline}>Our Products</h1>
      </section>
      <ProductsGrid error={error} loading={loading} productsList={productsList} />
    </>
  );
};

export default ProductsPage;
