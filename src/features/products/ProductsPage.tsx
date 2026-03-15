import type { APIResponse } from "../../types/types";
import ProductCard from "./components/ProductCard";
import styles from "./ProductsPage.module.css";
import { useEffect, useState } from "react";
import { fetchProducts } from "./services/fetchProducts";
import ErrorMessage from "../../components/shared/error/ErrorMessage";
import Loader from "../../components/shared/loader/Loader";

const ProductsPage = () => {
  const [products, setProducts] = useState<APIResponse | null>(null);
  const [loading, setLoading] = useState(false);
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

  console.log(itemsArray);

  return (
    <>
      <section>
        <h1 className={styles.productHeadline}>Our Products</h1>
        {/* Sort by categories here */}
        {/* Grid for all products here */}
      </section>
      <section className={styles.productsGridContainer}>
        {error && <ErrorMessage message={error} />}
        {loading && <Loader />}
        {itemsArray?.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            productName={product.title}
            productImage={product.image?.url}
            imageAltText={product.image?.alt}
            defaultPrice={product.price}
            discountedPrice={product.discountedPrice}
            rating={product.reviews[0]?.rating}
          />
        ))}
      </section>
    </>
  );
};

export default ProductsPage;
