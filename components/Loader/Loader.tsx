import clsx from "clsx";

import styles from "./Loader.module.css";

type Props = {
  variant?: "inline" | "overlay";
  title?: string;
  text?: string;
};

export default function Loader({
  variant = "inline",
  title = "Loading trucks...",
  text = "Please wait while we fetch the best camper vans for you.",
}: Props) {
  return (
    <div
      className={clsx(
        styles.wrapper,
        variant === "overlay" && styles.overlayWrapper,
      )}
      role="status"
      aria-live="polite"
    >
      {variant === "overlay" && (
        <div className={styles.modal}>
          <span className={styles.spinner} aria-hidden="true" />
          <p className={styles.title}>{title}</p>
          <p className={styles.text}>{text}</p>
        </div>
      )}

      {variant === "inline" && (
        <>
          <span className={styles.spinner} aria-hidden="true" />
          <span className={styles.text}>{title}</span>
        </>
      )}
    </div>
  );
}
