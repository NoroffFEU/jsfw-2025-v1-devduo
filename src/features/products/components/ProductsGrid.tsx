import ProductCard from "./ProductCard";
import styles from "./ProductsGrid.module.css";
import ErrorMessage from "../../../components/shared/error/ErrorMessage";
import Loader from "../../../components/shared/loader/Loader";
import type { ProductGridProps } from "../../../types/types";

const ProductsGrid = ({
  error,
  loading,
  productsList,
  className = "",
}: ProductGridProps) => {
  // Only display error and loader if they are true
  // These statements prevents both from being displayed at the same time, rather than having them inside the section element.
  if (error) return <ErrorMessage message={error} />;
  if (loading) return <Loader />;

  return (
    <div className={`${styles.productsGridContainer} ${className}`}>
      {productsList?.map((product) => (
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
    </div>
  );
};

export default ProductsGrid;
