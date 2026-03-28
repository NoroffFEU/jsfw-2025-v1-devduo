import styles from "./CartProductCard.module.css";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useCartStore, type ProductType } from "../../../store/cartStore";

type CartPageProps = {
  product: ProductType;
};

const CartProductCard = ({ product }: CartPageProps) => {
  const addProductToCart = useCartStore((state) => state.addProductToCart);
  const removeProductFromCart = useCartStore((state) => state.removeProductFromCart);

  const handleAddToCart = () => {
    addProductToCart(product);
  };

  const handleRemoveFromCart = () => {
    removeProductFromCart(product.id);
  };
  console.log(product);

  return (
    <article>
      <div className={styles.cardContainer}>
        <img className={styles.cardImg} src={product.image.url} alt={product.image.alt} />
        <div className={styles.centerWrapper}>
          <Link to="{`/product/${product.id}`">{product.title}</Link>
          <div className={styles.priceWrapper}>
            <span className={styles.discountedPrice}>{product.discountedPrice}</span>
            <span className={styles.price}>{product.price}</span>
          </div>
          <div className={styles.quantityContainer}>
            <div className={styles.qtyWrapper}>
              <button className={styles.qtyButton}>-</button>
              <span>{"1"}</span>
              <button className={styles.qtyButton} onClick={handleAddToCart}>
                +
              </button>
            </div>
            <div className={styles.trashWrapper}>
              <button className={styles.delButton} onClick={handleRemoveFromCart}>
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
