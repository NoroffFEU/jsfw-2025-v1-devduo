import { Link } from "react-router-dom";
import productImage from "../../../assets/images/test-image.webp";
import placeholderImage from "../../../assets/images/placeholder.webp";
import styles from "./ProductCard.module.css";
import { StarIcon } from "@heroicons/react/24/solid";
import DiscountBadge from "./DiscountBadge";
import { calculateDiscount } from "../utils/calculateDiscount";

// THESE CONSTANTS/VALUES WILL GET REPLACED WITH API DATA.
// DELETE BEFORE DEPLOYMENT
const productName: string = "Awesome title";
const discountedPrice: number = 450;
const defaultPrice: number = 499;
const rating: number = 4.5;
const imageAltText = "";
// ------------------------------------

// Stores the discount percentage value in a new variable for better readability
const discountValue = calculateDiscount({ defaultPrice, discountedPrice });

// If discount price is less than default it displays both prices, if not, only the default.
const displayedPrice =
  discountedPrice < defaultPrice ? (
    <>
      <p className={styles.discountPrice}>${discountedPrice}</p>
      <p className={styles.defaultPrice}>${defaultPrice}</p>
    </>
  ) : (
    <p className={styles.discountPrice}>${defaultPrice}</p>
  );

const ProductCard = () => {
  return (
    <Link to="../ProductDetailPage" className={styles.productLink}>
      <article className={styles.productCardContainer}>
        <img
          className={styles.productImage}
          src={productImage ? productImage : placeholderImage}
          alt={imageAltText ? imageAltText : "Product image"}
        />
        {discountValue ? <DiscountBadge discount={discountValue} /> : ""}
        <div className={styles.infoContainer}>
          <h3>{productName}</h3>
          <p className={styles.ratingElement}>
            <span className={styles.starIcon}>
              <StarIcon />
            </span>
            {rating}
          </p>
          <div className={styles.priceContainer}>{displayedPrice}</div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
