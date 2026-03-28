import { useEffect, useState } from "react";
import ProductsGrid from "./components/ProductsGrid";
import styles from "./ProductsPage.module.css";
import type { APIResponse } from "../../types/types";
import { fetchProducts } from "./services/fetchProducts";
import { useNavigate } from "react-router";

const ProductsPage = () => {
  const [products, setProducts] = useState<APIResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        // Redirects to notfound page if response.status === 404
        if (err instanceof Error && err.message === "PAGE_NOT_FOUND") {
          navigate("/notfound");
        }
        setError("Something went wrong. Try again later");
        console.error(err, "Fetch request failed");
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const productsList = products?.data;

  return (
    <div className={styles.pageContainer}>
      <section>
        <h1 className={styles.productHeadline}>Our Products</h1>
      </section>
      <section>
        <ProductsGrid
          error={error}
          loading={loading}
          productsList={productsList}
          className={styles.productsGridWrapper}
        />
      </section>
    </div>
  );
};

export default ProductsPage;
