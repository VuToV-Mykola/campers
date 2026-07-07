import { FaStar } from "react-icons/fa";

import { formatReviewsLabel } from "@/lib/formatters";

import styles from "./StarRating.module.css";

type Props = {
  rating: number;
  reviewsCount?: number;
  compact?: boolean;
  singleStar?: boolean;
  showLabel?: boolean;
};

export default function StarRating({
  rating,
  reviewsCount,
  compact = false,
  singleStar = false,
  showLabel = true,
}: Props) {
  const stars = Array.from({ length: 5 }, (_, index) => {
    const value = index + 1;
    const filled = rating >= value;
    const half = !filled && rating > index && rating < value;

    return (
      <FaStar
        key={value}
        className={half ? styles.half : filled ? styles.filled : styles.empty}
        aria-hidden="true"
      />
    );
  });

  const labelText =
    reviewsCount !== undefined
      ? formatReviewsLabel(rating, reviewsCount)
      : String(rating);

  return (
    <div className={styles.wrap}>
      <div className={styles.stars} aria-hidden="true">
        {singleStar ? (
          <FaStar className={styles.filled} aria-hidden="true" />
        ) : (
          stars
        )}
      </div>
      {showLabel && (
        <p className={styles.text}>
          <span className="visually-hidden">Rating {rating} out of 5</span>
          {compact ? (
            <span aria-hidden="true">{rating}</span>
          ) : (
            <span aria-hidden="true">{labelText}</span>
          )}
        </p>
      )}
    </div>
  );
}
