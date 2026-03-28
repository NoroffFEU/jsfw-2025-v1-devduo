import { StarIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import placeholderImage from "../../../assets/images/placeholder.webp";
import DiscountBadge from "./DiscountBadge";
import ReviewCard from "./ReviewCard";
import { calculateDiscount } from "../utils/calculateDiscount";
import { isDiscounted } from "../utils/isDiscounted";
import styles from "./ProductDetail.module.css";
import type { Product } from "../../../types/api";
import { useCartStore } from "../../../store/cartStore";

interface ProductDetailProps {
  product: Product;
}

const ProductDetail = ({ product }: ProductDetailProps) => {
  // Accessing state from Zustand useCartStore
  const addToCart = useCartStore((state) => state.addProductToCart);
  // Creating a handler function for adding products to cart
  const handleAddToCart = () => {
    addToCart(product);
  };

  const discountValue = calculateDiscount({
    defaultPrice: product.price,
    discountedPrice: product.discountedPrice,
  });
  const hasDiscount = isDiscounted({
    defaultPrice: product.price,
    discountedPrice: product.discountedPrice,
  });

  return (
    <article className={styles.detailContainer}>
      {/* Back Button */}
      <Link to="/products" className={styles.backlink}>
        <ArrowLeftIcon className={styles.backIcon} aria-hidden="true" />
        <span>Back to Products</span>
      </Link>

      {/* Product Image Section */}
      <section className={styles.imageSection}>
        <div className={styles.imageWrapper}>
          <img
            src={product.image?.url || placeholderImage}
            alt={product.image?.alt || product.title}
            className={styles.productImage}
          />
          {hasDiscount && <DiscountBadge discount={discountValue} />}
        </div>
      </section>

      {/* Product Info Section */}
      <section className={styles.infoSection}>
        {/* Title */}
        <h1 className={styles.title}>{product.title}</h1>

        {/* Rating */}
        <div className={styles.ratingContainer}>
          <StarIcon className={`${styles.star} ${styles.filled}`} aria-hidden="true" />
          <span className={styles.ratingValue}>{product.rating}</span>
          <span className={styles.reviewCount}>
            ({product.reviews?.length || 0} review
            {product.reviews?.length !== 1 ? "s" : ""})
          </span>
        </div>

        {/* Price */}
        <div className={styles.priceSection}>
          {hasDiscount ? (
            <>
              <p className={styles.discountedPrice}>${product.discountedPrice}</p>
              <p className={styles.originalPrice}>${product.price}</p>
            </>
          ) : (
            <p className={styles.discountedPrice}>${product.price}</p>
          )}
        </div>

        {/* Description */}
        {product.description && (
          <section className={styles.descriptionSection}>
            <h2 className={styles.descriptionHeading}>Description</h2>
            <p className={styles.descriptionText}>{product.description}</p>
          </section>
        )}

        {/* Tags */}
        {product.tags && product.tags.length > 0 && (
          <section className={styles.tagsSection}>
            <h3 className={styles.tagsHeading}>Tags</h3>
            <div className={styles.tagsPills}>
              {product.tags.map((tag) => (
                <span key={tag} className={styles.tag}>
                  {tag}
                </span>
              ))}
            </div>
          </section>
        )}

        <button type="button" onClick={handleAddToCart} className={styles.cartButton}>
          <ShoppingCartIcon className={styles.cartIcon} aria-hidden="true" />
          Add to Cart
        </button>
      </section>

      {/* Customer Reviews Section */}
      {product.reviews && product.reviews.length > 0 && (
        <section className={styles.reviewSection}>
          <h3 className={styles.reviewHeading}>Customer Reviews</h3>
          <div className={styles.reviewsList}>
            {product.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
};

export default ProductDetail;
