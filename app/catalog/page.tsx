import type { Metadata } from "next";

import CatalogContent from "@/components/CatalogContent/CatalogContent";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Browse available campers, apply filters, and load more vehicles with TravelTrucks.",
};

export default function CatalogPage() {
  return <CatalogContent />;
}
