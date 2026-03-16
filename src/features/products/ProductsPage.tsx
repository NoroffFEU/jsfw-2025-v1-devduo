import ProductsGrid from "./components/ProductsGrid";
import styles from "./ProductsPage.module.css";

const ProductsPage = () => {
  return (
    <>
      <section>
        <h1 className={styles.productHeadline}>Our Products</h1>
        {/* Sort by categories here */}
        {/* Grid for all products here */}
      </section>
      <ProductsGrid />
    </>
  );
};

export default ProductsPage;
