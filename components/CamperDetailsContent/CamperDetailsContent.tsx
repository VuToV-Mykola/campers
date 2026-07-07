"use client";

import { IoLocationOutline } from "react-icons/io5";

import BookingForm from "@/components/BookingForm/BookingForm";
import CamperGallery from "@/components/CamperGallery/CamperGallery";
import StarRating from "@/components/StarRating/StarRating";
import {
  formatAmenityLabel,
  formatEngineLabel,
  formatFormLabel,
  formatLocation,
  formatPrice,
  formatTransmissionLabel,
} from "@/lib/formatters";
import type { CamperDetails, Review } from "@/types/camper";

import styles from "./CamperDetailsContent.module.css";

type Props = {
  camper: CamperDetails;
  reviews: Review[];
};

function getInitial(name: string): string {
  return name.trim().charAt(0).toUpperCase();
}

export default function CamperDetailsContent({ camper, reviews }: Props) {
  const detailBadges = Array.from(
    new Set([
      formatTransmissionLabel(camper.transmission),
      ...camper.amenities.map(formatAmenityLabel),
      formatEngineLabel(camper.engine),
      formatFormLabel(camper.form),
    ]),
  );

  const specs = [
    { label: "Form", value: formatFormLabel(camper.form) },
    { label: "Length", value: camper.length },
    { label: "Width", value: camper.width },
    { label: "Height", value: camper.height },
    { label: "Tank", value: camper.tank },
    { label: "Consumption", value: camper.consumption },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.top}>
        <CamperGallery images={camper.gallery} camperName={camper.name} />

        <div className={styles.infoColumn}>
          <article className={styles.summaryCard}>
            <div className={styles.summaryHeader}>
              <h1 className={styles.title}>{camper.name}</h1>
              <div className={styles.meta}>
                <StarRating
                  rating={camper.rating}
                  reviewsCount={camper.totalReviews}
                  singleStar
                />
                <p className={styles.location}>
                  <IoLocationOutline aria-hidden="true" />
                  <span>{formatLocation(camper.location)}</span>
                </p>
              </div>
              <p className={styles.price}>{formatPrice(camper.price)}</p>
            </div>
            <p className={styles.description}>{camper.description}</p>
          </article>

          <article className={styles.detailsCard}>
            <h2 className={styles.detailsTitle}>Vehicle details</h2>
            <ul className={styles.badges} aria-label="Vehicle features">
              {detailBadges.map((badge) => (
                <li key={badge} className={styles.badge}>
                  {badge}
                </li>
              ))}
            </ul>
            <hr className={styles.divider} />
            <dl className={styles.specs}>
              {specs.map((spec) => (
                <div key={spec.label} className={styles.specRow}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.reviewsSection}>
          <h2 className={styles.reviewsTitle}>Reviews</h2>
          {reviews.length === 0 ? (
            <p className={styles.emptyReviews}>No reviews yet.</p>
          ) : (
            <ul className={styles.reviews}>
              {reviews.map((review) => (
                <li key={review.id} className={styles.review}>
                  <div className={styles.reviewPerson}>
                    <div className={styles.avatar} aria-hidden="true">
                      <span>{getInitial(review.reviewer_name)}</span>
                    </div>
                    <div className={styles.reviewMeta}>
                      <p className={styles.reviewer}>{review.reviewer_name}</p>
                      <StarRating
                        rating={review.reviewer_rating}
                        showLabel={false}
                      />
                    </div>
                  </div>
                  <p className={styles.comment}>{review.comment}</p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.bookingSection}>
          <BookingForm camperId={camper.id} variant="details" />
        </div>
      </div>
    </section>
  );
}
