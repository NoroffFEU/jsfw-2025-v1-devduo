import { Link } from "react-router-dom";
import placeholderImage from "../../../assets/images/placeholder.webp";
import styles from "./ProductCard.module.css";
import { StarIcon } from "@heroicons/react/24/solid";
import DiscountBadge from "./DiscountBadge";
import { calculateDiscount } from "../utils/calculateDiscount";
import { isDiscounted } from "../utils/isDiscounted";
import { slugify } from "../utils/slugify";
import type { ProductType } from "../../../types/types";

const ProductCard = ({
  productName,
  productImage,
  imageAltText,
  defaultPrice,
  discountedPrice,
  rating,
}: ProductType) => {
  const slug = slugify(productName);
  // Stores the discount percentage value in a new variable for better readability
  const discountValue = calculateDiscount({ defaultPrice, discountedPrice });

  // Returns as true or false
  const hasDiscount = isDiscounted({ defaultPrice, discountedPrice });

  return (
    <Link to={`../product/${slug}`} className={styles.productLink}>
      <article className={styles.productCardContainer}>
        <img
          className={styles.productImage}
          src={productImage ? productImage : placeholderImage}
          alt={imageAltText ? imageAltText : "Product image"}
          loading="lazy"
        />
        {discountValue ? <DiscountBadge discount={discountValue} /> : null}
        <div className={styles.infoContainer}>
          <h3>{productName}</h3>
          {/*  */}
          {rating != null && (
            <p className={styles.ratingElement}>
              <span className={styles.starIcon}>
                <StarIcon />
              </span>
              {rating}
            </p>
          )}
          <div className={styles.priceContainer}>
            {hasDiscount ? (
              <>
                <p className={styles.discountPrice}>${discountedPrice}</p>
                <p className={styles.defaultPrice}>${defaultPrice}</p>
              </>
            ) : (
              <p className={styles.discountPrice}>{defaultPrice}</p>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default ProductCard;
