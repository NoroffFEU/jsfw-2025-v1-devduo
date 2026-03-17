import { useEffect, useState } from "react";
import ProductsGrid from "../products/components/ProductsGrid";
import styles from "./HomePage.module.css";
import { fetchProducts } from "../products/services/fetchProducts";
import type { APIResponse } from "./../../types/types";

const HomePage = () => {
  const [products, setProducts] = useState<APIResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
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

  // Only display the first 4 products
  const productsList = products?.data.slice(0, 4);

  return (
    <>
      <section className={styles.heroWrapper}>
        <h1 className="color-text">Welcome to our store</h1>
        <p>
          Discover amazing products at great prices. Quality and style delivered to your
          door.
        </p>
        {/* Search bar is displayed here */}
      </section>
      <section className={styles.productOuterContainer}>
        <ProductsGrid
          error={error}
          loading={loading}
          productsList={productsList}
          className={styles.productWrapper}
        />
      </section>
    </>
  );
};

export default HomePage;
