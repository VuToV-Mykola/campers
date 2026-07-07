"use client";

import { useState } from "react";
import { IoCloseOutline, IoLocationOutline } from "react-icons/io5";

import {
  ENGINE_OPTIONS,
  FORM_OPTIONS,
  TRANSMISSION_OPTIONS,
} from "@/lib/formatters";
import type {
  CamperEngine,
  CamperFilters,
  CamperForm,
  CamperTransmission,
} from "@/types/camper";

import styles from "./CatalogFilters.module.css";

type Props = {
  filters: CamperFilters;
  onSearch: (filters: CamperFilters) => void;
  onClear: () => void;
};

export default function CatalogFilters({
  filters,
  onSearch,
  onClear,
}: Props) {
  const [location, setLocation] = useState(filters.location ?? "");
  const [form, setForm] = useState<CamperForm | "">(filters.form ?? "");
  const [engine, setEngine] = useState<CamperEngine | "">(filters.engine ?? "");
  const [transmission, setTransmission] = useState<CamperTransmission | "">(
    filters.transmission ?? "",
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSearch({
      location: location.trim() || undefined,
      form: form || undefined,
      engine: engine || undefined,
      transmission: transmission || undefined,
    });
  };

  const handleClear = () => {
    setLocation("");
    setForm("");
    setEngine("");
    setTransmission("");
    onClear();
  };

  return (
    <aside className={styles.sidebar}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label} htmlFor="location">
            Location
          </label>
          <div className={styles.inputWrap}>
            <IoLocationOutline aria-hidden="true" />
            <input
              id="location"
              name="location"
              type="text"
              value={location}
              onChange={(event) => setLocation(event.target.value)}
              placeholder="Kyiv"
              className={styles.input}
            />
          </div>
        </div>

        <div className={styles.filtersGroup}>
          <h2 className={styles.filtersTitle}>Filters</h2>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Camper form</legend>
            <ul className={styles.options}>
              {FORM_OPTIONS.map((option) => (
                <li key={option.value}>
                  <label className={styles.option}>
                    <input
                      type="radio"
                      name="form"
                      value={option.value}
                      checked={form === option.value}
                      onChange={() => setForm(option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Engine</legend>
            <ul className={styles.options}>
              {ENGINE_OPTIONS.map((option) => (
                <li key={option.value}>
                  <label className={styles.option}>
                    <input
                      type="radio"
                      name="engine"
                      value={option.value}
                      checked={engine === option.value}
                      onChange={() => setEngine(option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>

          <fieldset className={styles.fieldset}>
            <legend className={styles.legend}>Transmission</legend>
            <ul className={styles.options}>
              {TRANSMISSION_OPTIONS.map((option) => (
                <li key={option.value}>
                  <label className={styles.option}>
                    <input
                      type="radio"
                      name="transmission"
                      value={option.value}
                      checked={transmission === option.value}
                      onChange={() => setTransmission(option.value)}
                    />
                    <span>{option.label}</span>
                  </label>
                </li>
              ))}
            </ul>
          </fieldset>
        </div>

        <div className={styles.actions}>
          <button type="submit" className={styles.searchButton}>
            Search
          </button>
          <button
            type="button"
            className={styles.clearButton}
            onClick={handleClear}
          >
            <IoCloseOutline aria-hidden="true" />
            Clear filters
          </button>
        </div>
      </form>
    </aside>
  );
}
