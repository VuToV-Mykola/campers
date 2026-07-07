"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import clsx from "clsx";

import { createBooking } from "@/lib/api";
import type { BookingPayload } from "@/types/camper";

import styles from "./BookingForm.module.css";

type Props = {
  camperId: string;
  variant?: "default" | "details";
};

const initialValues: BookingPayload = {
  name: "",
  email: "",
  date: "",
  comment: "",
};

export default function BookingForm({
  camperId,
  variant = "default",
}: Props) {
  const [values, setValues] = useState<BookingPayload>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      await createBooking(camperId, {
        name: values.name.trim(),
        email: values.email.trim(),
        date: values.date,
        comment: values.comment?.trim() || undefined,
      });

      toast.success("Booking successful! We will contact you shortly.");
      setValues(initialValues);
    } catch {
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isDetails = variant === "details";

  return (
    <form
      className={clsx(styles.form, isDetails && styles.formDetails)}
      onSubmit={handleSubmit}
    >
      <div className={styles.header}>
        <h3 className={styles.title}>
          {isDetails ? "Book your campervan now" : "Book your camper now"}
        </h3>
        <p className={styles.subtitle}>
          Stay connected! We are always ready to help you.
        </p>
      </div>

      <div className={styles.fields}>
        <label className={styles.field}>
          <span className="visually-hidden">Name</span>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
            placeholder="Name*"
            className={styles.input}
          />
        </label>

        <label className={styles.field}>
          <span className="visually-hidden">Email</span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
            placeholder="Email*"
            className={styles.input}
          />
        </label>

        {!isDetails && (
          <>
            <label className={styles.field}>
              <span className={styles.label}>Booking date*</span>
              <input
                type="date"
                name="date"
                value={values.date}
                onChange={handleChange}
                required
                className={styles.inputDefault}
              />
            </label>

            <label className={styles.field}>
              <span className={styles.label}>Comment</span>
              <textarea
                name="comment"
                value={values.comment}
                onChange={handleChange}
                rows={4}
                className={styles.textarea}
              />
            </label>
          </>
        )}

        {isDetails && (
          <label className={styles.field}>
            <span className="visually-hidden">Booking date</span>
            <input
              type="date"
              name="date"
              value={values.date}
              onChange={handleChange}
              required
              placeholder="Booking date*"
              className={styles.input}
            />
          </label>
        )}
      </div>

      <button
        type="submit"
        className={clsx(styles.button, isDetails && styles.buttonFull)}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
