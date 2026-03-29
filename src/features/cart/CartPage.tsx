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
        <div className={styles.componentWrapper}>
          {cart[0] ? (
            <div className={styles.flexContainer}>
              {cart.map((product) => (
                <CartProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <h2 style={{ textAlign: "center", margin: "4rem 0 0 0" }}>
              Shopping cart is empty..
            </h2>
          )}
          <OrderSummary />
        </div>
      </section>
    </>
  );
};

export default CartPage;
