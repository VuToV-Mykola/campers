import Link from "next/link";

import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>Page not found</h1>
      <p className={styles.text}>
        The camper you are looking for does not exist or has been removed.
      </p>
      <Link href="/catalog" className={styles.link}>
        Back to catalog
      </Link>
    </section>
  );
}
