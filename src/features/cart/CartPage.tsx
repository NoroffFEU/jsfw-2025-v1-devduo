import styles from "./CartPage.module.css";
import OrderSummary from "./components/OrderSummary";
import CartProductCard from "./components/CartProductCard";
import { useCartStore } from "../../store/cartStore";

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  return (
    <>
      <section className={styles.mainContainer}>
        <h1 className={styles.headline}>Shopping cart</h1>
        <div className={styles.flexContainer}>
          {cart.map((product) => (
            <CartProductCard key={product.id} product={product} />
          ))}
          <OrderSummary />
        </div>
      </section>
    </>
  );
};

export default CartPage;
