import styles from "./CartPage.module.css";
import OrderSummary from "./components/OrderSummary";
import CartProductCard from "./components/CartProductCard";

const CartPage = () => {
  return (
    <>
      <section className={styles.mainContainer}>
        <h1 className={styles.headline}>Shopping cart</h1>
        <div className={styles.flexContainer}>
          <CartProductCard />
          <OrderSummary />
        </div>
      </section>
    </>
  );
};

export default CartPage;
