import { useEffect, useState } from "react";
import ProductDetail from "./components/ProductDetail";
import Loader from "../../components/shared/loader/Loader";
import ErrorMessage from "../../components/shared/error/ErrorMessage";
import { getQueryParameter } from "./utils/getQueryParameter";
import { fetchSingleProduct } from "./services/fetchSingleProduct";
import type { Product } from "../../types/api";

const ProductDetailPage = () => {
  const id = getQueryParameter("id");

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("No product ID provided");
      setLoading(false);
      return;
    }

    const loadProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const fetchedProduct = await fetchSingleProduct(id);
        setProduct(fetchedProduct);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Something went wrong. Try again later.";
        setError(errorMessage);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

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
