"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="TravelTrucks home">
          TravelTrucks
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <Link
            href="/"
            className={clsx(styles.link, pathname === "/" && styles.active)}
          >
            Home
          </Link>
          <Link
            href="/catalog"
            className={clsx(
              styles.link,
              pathname.startsWith("/catalog") && styles.active,
            )}
          >
            Catalog
          </Link>
        </nav>
      </div>
    </header>
  );
}
