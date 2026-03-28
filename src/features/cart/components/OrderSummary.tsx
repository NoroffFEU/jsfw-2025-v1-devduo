import styles from "./OrderSummary.module.css";
import PrimaryButton from "../../../components/buttons/PrimaryButton";
import SecondaryButton from "../../../components/buttons/SecondaryButton";

const OrderSummary = () => {
  return (
    <article className={styles.summaryContainer}>
      <div className={styles.summaryWrapper}>
        <h2>Order summary</h2>
        <div className={styles.summaryContentWrapper}>
          <div>
            <p>items</p>
            <span>${"299"}</span>
          </div>
          <div>
            <p>Shipping</p>
            <span>Free</span>
          </div>
          <hr className={styles.horizontalLine} />
          <div className={styles.totalWrapper}>
            <p>Total</p>
            <span>${"299"}</span>
          </div>
        </div>
        <PrimaryButton text="Checkout now" path="/checkout-success" />
        <SecondaryButton text="Continue shopping" path="/" />
      </div>
    </article>
  );
};

export default OrderSummary;
