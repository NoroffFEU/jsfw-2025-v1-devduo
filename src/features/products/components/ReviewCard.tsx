import { StarIcon } from "@heroicons/react/24/solid";
import styles from "./ReviewCard.module.css";
import type { Review } from "../../../types/api";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <StarIcon
        key={i}
        className={`${styles.star} ${i < rating ? styles.filled : styles.empty}`}
        aria-hidden="true"
      />
    ));
  };

  return (
    <article className={styles.reviewCard}>
      <div className={styles.reviewHeader}>
        <p className={styles.username}>{review.username}</p>
        <p className={styles.date}>Verified</p>
      </div>

      <div className={styles.ratingStars}>{renderStars(review.rating)}</div>
      <p className={styles.description}>{review.description}</p>
    </article>
  );
};

export default ReviewCard;
