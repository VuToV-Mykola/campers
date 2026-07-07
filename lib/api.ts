import axios from "axios";

import type {
  BookingPayload,
  CamperDetails,
  CamperFilters,
  CampersResponse,
  Review,
} from "@/types/camper";

const API_BASE_URL = "https://campers-api.goit.study";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const PER_PAGE = 4;

export async function fetchCampers(
  page: number,
  filters: CamperFilters,
): Promise<CampersResponse> {
  const { data } = await api.get<CampersResponse>("/campers", {
    params: {
      page,
      perPage: PER_PAGE,
      ...filters,
    },
  });

  return data;
}

export async function fetchCamperById(id: string): Promise<CamperDetails> {
  const { data } = await api.get<CamperDetails>(`/campers/${id}`);
  return data;
}

export async function fetchCamperReviews(id: string): Promise<Review[]> {
  const { data } = await api.get<Review[]>(`/campers/${id}/reviews`);
  return data;
}

export async function createBooking(
  camperId: string,
  payload: BookingPayload,
): Promise<void> {
  await api.post(`/campers/${camperId}/bookings`, payload);
}
