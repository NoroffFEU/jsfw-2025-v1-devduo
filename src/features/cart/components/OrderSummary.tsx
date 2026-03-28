import styles from "./OrderSummary.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";
import { useCartStore } from "../../../store/cartStore";

const OrderSummary = () => {
  const cart = useCartStore((state) => state.cart);

  const total: string = cart
    .reduce((sum, item) => {
      // Use the discounted price, if not use the initial price
      const price = item.discountedPrice ?? item.price;
      const subTotal = sum + price * item.quantity;
      // Determines if the shipping is free
      const shipping: number = Number(subTotal) < 1000 ? 49.95 : 0;
      return subTotal + shipping;
    }, 0)
    .toFixed(2);

  return (
    <article className={styles.summaryContainer}>
      <div className={styles.summaryWrapper}>
        <h2>Order summary</h2>
        <div className={styles.summaryContentWrapper}>
          <div className={styles.itemsWrapper}>
            <p>items:</p>
            {cart.map((item) => {
              const price = item.discountedPrice ?? item.price;
              const itemTotal = price * item.quantity;

              return (
                <div className={styles.itemInfoSummary} key={item.id}>
                  <p>{item.quantity}x</p>
                  <p> {item.title}</p>
                  <p> ${itemTotal.toFixed(2)}</p>
                </div>
              );
            })}
          </div>
          <div>
            <p>Shipping:</p>
            <span>{Number(total) && Number(total) < 1000 ? "$49.95" : "Free"}</span>
          </div>
          <hr className={styles.horizontalLine} />
          <div className={styles.totalWrapper}>
            <p>Total:</p>
            <span>${total}</span>
          </div>
        </div>
        {Number(total) > 0 && (
          <PrimaryButton text="Checkout now" path="/checkout-success" />
        )}
        <SecondaryButton text="Continue shopping" path="/" />
      </div>
    </article>
  );
};

export default OrderSummary;
