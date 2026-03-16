import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import styles from "./ProductsGrid.module.css";
import { fetchProducts } from "../services/fetchProducts";
import ErrorMessage from "../../../components/shared/error/ErrorMessage";
import Loader from "../../../components/shared/loader/Loader";
import type { APIResponse } from "../../../types/types";

const ProductsGrid = () => {
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

  const itemsArray = products?.data;

  return (
    <section className={styles.productsGridContainer}>
      {error && <ErrorMessage message={error} />}
      {loading && <Loader />}
      {itemsArray?.map((product) => (
        <ProductCard
          key={product.id}
          productId={product.id}
          productName={product.title}
          productImage={product.image.url}
          imageAltText={product.image.alt}
          defaultPrice={product.price}
          discountedPrice={product.discountedPrice}
          rating={product.rating}
        />
      ))}
    </section>
  );
};

export default ProductsGrid;
