import { CheckCircleIcon } from "@heroicons/react/24/outline";
import styles from "./CheckoutSuccessPage.module.css";
import PrimaryButton from "../../components/buttons/PrimaryButton";

const CheckoutSuccessPage = () => {
  return (
    <>
      <section>
        <article className={styles.headlineWrapper}>
          <CheckCircleIcon className={styles.icon} aria-hidden="true" />
          <h1>Order confirmed!</h1>
          <p>
            Thank you for your purchase. Your order has been confirmed and will be shipped
            soon.
          </p>
          <PrimaryButton path="/" text="Back to home" />
        </article>
      </section>
    </>
  );
};

export default CheckoutSuccessPage;
