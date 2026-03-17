import { Link } from "react-router-dom";
import ProductsGrid from "../../products/components/ProductsGrid";
import { fetchProducts } from "../../products/services/fetchProducts";
import { useEffect, useState } from "react";
import type { APIResponse } from "../../../types/types";
import styles from "./NewProductsSection.module.css";

const NewProductsSection = () => {
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
    <section className={styles.productOuterContainer}>
      <div className={styles.productHeadingWrapper}>
        <h2>New products</h2>
        <div>
          <Link to="/products">
            View all<span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
      <ProductsGrid
        error={error}
        loading={loading}
        productsList={productsList}
        className={styles.productWrapper}
      />
    </section>
  );
};

export default NewProductsSection;
