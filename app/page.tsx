import type { Metadata } from "next";
import Link from "next/link";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Discover campers of your dreams and start your next adventure with TravelTrucks.",
};

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <div className={styles.imageWrap} aria-hidden="true">
        <img
          src="/images/hero-source.jpg"
          alt=""
          className={styles.heroImage}
          fetchPriority="high"
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.textGroup}>
          <h1 className={styles.title}>Campers of your dreams</h1>
          <p className={styles.text}>
            You can find everything you want in our catalog
          </p>
        </div>
        <Link href="/catalog" className={styles.button}>
          View Now
        </Link>
      </div>
    </section>
  );
}
