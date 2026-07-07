"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";

import CamperCard from "@/components/CamperCard/CamperCard";
import CatalogFilters from "@/components/CatalogFilters/CatalogFilters";
import Loader from "@/components/Loader/Loader";
import { fetchCampers } from "@/lib/api";
import type { CamperFilters } from "@/types/camper";

import styles from "./CatalogContent.module.css";

export default function CatalogContent() {
  const [filters, setFilters] = useState<CamperFilters>({});

  const {
    data,
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isError,
  } = useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam }) => fetchCampers(pageParam, filters),
    initialPageParam: 1,
    getNextPageParam: (lastPage) =>
      lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
  });

  const campers = useMemo(
    () => data?.pages.flatMap((page) => page.campers) ?? [],
    [data],
  );

  const isInitialLoading = isLoading && campers.length === 0;
  const isEmpty = !isLoading && !isError && campers.length === 0;

  return (
    <section className={styles.section}>
      {isInitialLoading && <Loader variant="overlay" />}

      <div className={styles.layout}>
        <CatalogFilters
          filters={filters}
          onSearch={setFilters}
          onClear={() => setFilters({})}
        />

        <div className={styles.content}>
          {isError && (
            <p className={styles.message} role="alert">
              Failed to load campers. Please try again later.
            </p>
          )}

          {isEmpty && (
            <div className={styles.empty}>
              <div className={styles.emptyIllustration} aria-hidden="true">
                <svg
                  width="120"
                  height="80"
                  viewBox="0 0 120 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 55h90l-8-20H18l-8 20z"
                    stroke="#829b91"
                    strokeWidth="2"
                    fill="#f2f4f7"
                  />
                  <circle cx="28" cy="58" r="6" fill="#829b91" />
                  <circle cx="82" cy="58" r="6" fill="#829b91" />
                  <path
                    d="M40 35l20-15 20 15"
                    stroke="#dadde1"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <h2 className={styles.emptyTitle}>No campers found</h2>
              <p className={styles.emptyText}>
                Try adjusting your filters or clearing them to see more results.
              </p>
            </div>
          )}

          {campers.length > 0 && (
            <ul className={styles.list}>
              {campers.map((camper) => (
                <li key={camper.id}>
                  <CamperCard camper={camper} />
                </li>
              ))}
            </ul>
          )}

          {isFetching && !isInitialLoading && !isFetchingNextPage && (
            <Loader />
          )}

          {hasNextPage && campers.length > 0 && (
            <button
              type="button"
              className={styles.loadMore}
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
            >
              {isFetchingNextPage ? "Loading..." : "Load more"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
