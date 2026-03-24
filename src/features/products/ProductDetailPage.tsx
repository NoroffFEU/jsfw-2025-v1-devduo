import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import { fetchProducts } from "./services/fetchProducts";
import { slugify } from "./utils/slugify";
import Loader from "../../components/shared/loader/Loader";
import ErrorMessage from "../../components/shared/error/ErrorMessage";
import type { Product } from "../../types/api";
import type { ProductAPIData } from "../../types/types";

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const loadProduct = async () => {
      try {
        setLoading(true);
        const response = await fetchProducts();

        const foundProduct = response.data.find(
          (p: ProductAPIData) => slugify(p.title) === slug,
        ) as Product | undefined;

        if (!foundProduct) {
          setError("Product not found");
          return;
        }

        setProduct(foundProduct);
      } catch (err) {
        setError(
          err instanceof Error
            ? `${err.message}. Try again later.`
            : "Something went wrong. Try again later.",
        );
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [slug]);

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
