import styles from "./CartProductCard.module.css";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

// delete after dynamic rendered ProductCard
import testImage from "../../../assets/images/test-image.webp";

const CartProductCard = () => {
  return (
    <article>
      <div className={styles.cardContainer}>
        <img className={styles.cardImg} src={testImage} alt={testImage} />
        <div className={styles.centerWrapper}>
          <Link to={"ProductDetailPage"}>Wireless noise-cancelling headphones</Link>
          <div className={styles.priceWrapper}>
            <span className={styles.discountedPrice}>{"$299"}</span>
            <span className={styles.price}>{"$399"}</span>
          </div>
          <div className={styles.quantityContainer}>
            <div className={styles.qtyWrapper}>
              <button className={styles.qtyButton}>-</button>
              <span>{"1"}</span>
              <button className={styles.qtyButton}>+</button>
            </div>
            <div className={styles.trashWrapper}>
              <button className={styles.delButton}>
                <TrashIcon className={styles.trashIcon} />
                <span>Remove</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CartProductCard;
