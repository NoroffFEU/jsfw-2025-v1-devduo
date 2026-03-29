import { Link } from "react-router-dom";
import styles from "./CartLink.module.css";
import { useCartStore } from "../../../store/cartStore";
import type { CartLinkProps } from "../../../types/cart";

/**
 * CartLink component that displays a shopping cart icon with an item count badge.
 *
 * This component renders a link to the cart page with a cart icon SVG and conditionally
 * displays a notification circle showing the total quantity of items in the cart.
 *
 * @param {string} props.linkStyle - Optional CSS class name(s) to apply to the cart link element
 * @param {string} props.circleStyle - Optional CSS class name(s) to apply to the count badge circle
 * @returns {JSX.Element} A cart link component with optional item count badge
 *
 * @example
 * // Basic usage with custom styles
 * <CartLink linkStyle={styles.headerLink} circleStyle={styles.countCircle} />
 */
const CartLink = ({ linkStyle, circleStyle }: CartLinkProps) => {
  // Using the Zustand to access the cart state, and the reduce method to calculate the total quantity of products in the cart
  const count = useCartStore((state) =>
    state.cart.reduce((sum, item) => sum + item.quantity, 0),
  );
  return (
    <div className={styles.cartIconWrapper}>
      <Link to="/cart" className={`${styles.cartLink} ${linkStyle}`} aria-label="Cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
          />
        </svg>
        {count > 0 && (
          <div className={`${styles.circle} ${circleStyle}`}>
            <span className={styles.numberCount}>{count}</span>
          </div>
        )}
      </Link>
    </div>
  );
};

export default CartLink;
