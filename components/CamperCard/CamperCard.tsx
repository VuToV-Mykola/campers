import Image from "next/image";
import Link from "next/link";
import { FaGasPump } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

import {
  formatEngineLabel,
  formatFormLabel,
  formatLocation,
  formatPrice,
  formatTransmissionLabel,
} from "@/lib/formatters";
import type { CamperListItem } from "@/types/camper";

import StarRating from "@/components/StarRating/StarRating";

import styles from "./CamperCard.module.css";

type Props = {
  camper: CamperListItem;
};

export default function CamperCard({ camper }: Props) {
  return (
    <article className={styles.card}>
      <div className={styles.content}>
        <div className={styles.imageWrap}>
          <Image
            src={camper.coverImage}
            alt={camper.name}
            fill
            sizes="(max-width: 767px) 100vw, 219px"
            className={styles.image}
          />
        </div>

        <div className={styles.info}>
          <div className={styles.header}>
            <h2 className={styles.title}>{camper.name}</h2>
            <p className={styles.price}>{formatPrice(camper.price)}</p>
          </div>

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

          <p className={styles.description}>{camper.description}</p>

          <ul className={styles.badges} aria-label="Camper features">
            <li className={styles.badge}>
              <FaGasPump aria-hidden="true" />
              <span>{formatEngineLabel(camper.engine)}</span>
            </li>
            <li className={styles.badge}>
              <span>{formatTransmissionLabel(camper.transmission)}</span>
            </li>
            <li className={styles.badge}>
              <span>{formatFormLabel(camper.form)}</span>
            </li>
          </ul>

          <Link
            href={`/catalog/${camper.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.button}
          >
            Show more
          </Link>
        </div>
      </div>
    </article>
  );
}
