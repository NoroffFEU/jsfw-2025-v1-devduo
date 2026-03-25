import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import { fetchProductBySlug } from "./services/fetchProductBySlug";
import { useProductsCache } from "../../hooks/useProductsCache";
import Loader from "../../components/shared/loader/Loader";
import ErrorMessage from "../../components/shared/error/ErrorMessage";
import type { Product } from "../../types/api";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { fetchAndCache, loading } = useProductsCache();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const loadProduct = async () => {
      try {
        setError(null);
        const products = await fetchAndCache();
        const foundProduct = fetchProductBySlug(slug, products);
        setProduct(foundProduct);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Something went wrong. Try again later.";
        setError(errorMessage);
        console.error(err);
      }
    };

    loadProduct();
  }, [slug, fetchAndCache]);

  if (!slug) {
    return <ErrorMessage message="No product slug provided" />;
  }

  const handleAddToCart = (productToAdd: Product) => {
    console.log("Add to cart:", productToAdd);
    // TODO: Connect to cart context later
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!product) return <ErrorMessage message="Product not found" />;

  return (
    <main>
      <ProductDetail product={product} onAddToCart={handleAddToCart} />
    </main>
  );
};

export default ProductDetailPage;
