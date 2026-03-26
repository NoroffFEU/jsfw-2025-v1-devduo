import { TrashIcon } from "@heroicons/react/24/outline";
import testImage from "../../assets/images/test-image.webp";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import styles from "./CartPage.module.css";

const CartPage = () => {
  return (
    <>
      <section className={styles.mainContainer}>
        <h1 className={styles.headline}>Shopping cart</h1>
        <article>
          <div className={styles.cardWrapper}>
            <img className={styles.cardImg} src={testImage} alt={testImage} />
            <div className={styles.centerWrapper}>
              <p>Wireless noise-cancelling headphones</p>
              <div className={styles.priceWrapper}>
                <span className={styles.discountedPrice}>$299</span>
                <span className={styles.price}>$399</span>
              </div>
              <div className={styles.quantityWrapper}>
                <div>
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
                <div className={styles.trashWrapper}>
                  <button>
                    <TrashIcon className={styles.trashIcon} />
                  </button>
                  <p>Remove</p>
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className={styles.summaryContainer}>
          <div>
            <h2>Order summary</h2>
            <div>
              <div>
                <p>items</p>
                <span>$299</span>
              </div>
              <div>
                <p>Shipping</p>
                <span>Free</span>
              </div>
              <hr />
              <div>
                <p>Total</p>
                <span>$299</span>
              </div>
            </div>
            <PrimaryButton text="Checkout now" path="/checkout-success" />
            <SecondaryButton text="Continue shopping" path="/" />
          </div>
        </article>
      </section>
    </>
  );
};

export default CartPage;
