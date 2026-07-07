import type {
  CamperAmenity,
  CamperEngine,
  CamperForm,
  CamperTransmission,
} from "@/types/camper";

export const FORM_OPTIONS: { value: CamperForm; label: string }[] = [
  { value: "alcove", label: "Alcove" },
  { value: "panel_van", label: "Panel Van" },
  { value: "integrated", label: "Integrated" },
  { value: "semi_integrated", label: "Semi Integrated" },
];

export const ENGINE_OPTIONS: { value: CamperEngine; label: string }[] = [
  { value: "diesel", label: "Diesel" },
  { value: "petrol", label: "Petrol" },
  { value: "hybrid", label: "Hybrid" },
  { value: "electric", label: "Electric" },
];

export const TRANSMISSION_OPTIONS: {
  value: CamperTransmission;
  label: string;
}[] = [
  { value: "automatic", label: "Automatic" },
  { value: "manual", label: "Manual" },
];

export function formatFormLabel(value: CamperForm): string {
  return FORM_OPTIONS.find((item) => item.value === value)?.label ?? value;
}

export function formatEngineLabel(value: CamperEngine): string {
  return ENGINE_OPTIONS.find((item) => item.value === value)?.label ?? value;
}

export function formatTransmissionLabel(value: CamperTransmission): string {
  return (
    TRANSMISSION_OPTIONS.find((item) => item.value === value)?.label ?? value
  );
}

export function formatPrice(price: number): string {
  return `€${price}`;
}

export function formatReviewsCount(count: number): string {
  const label = count === 1 ? "Review" : "Reviews";
  return `${count} ${label}`;
}

export function formatReviewsLabel(rating: number, count: number): string {
  return `${rating}(${formatReviewsCount(count)})`;
}

const AMENITY_LABELS: Record<CamperAmenity, string> = {
  ac: "AC",
  bathroom: "Bathroom",
  kitchen: "Kitchen",
  tv: "TV",
  radio: "Radio",
  refrigerator: "Refrigerator",
  microwave: "Microwave",
  water: "Water",
};

export function formatAmenityLabel(value: CamperAmenity): string {
  return AMENITY_LABELS[value] ?? value;
}

export function formatLocation(location: string): string {
  const parts = location.split(",").map((part) => part.trim());
  if (parts.length < 2) {
    return location;
  }

  const [country, city] = parts;
  return `${city}, ${country}`;
}
