import ProductCard from "./components/ProductCard";
import styles from "./ProductsPage.module.css";

const ProductsPage = () => {
  return (
    <>
      <h1 className={styles.productHeadline}>Our Products</h1>
      <section>
        {/* Sort by categories here */}
        {/* Grid for all products here */}
        <ProductCard />
      </section>
    </>
  );
};

export default ProductsPage;
