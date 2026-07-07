import type { Metadata } from "next";
import { notFound } from "next/navigation";

import CamperDetailsContent from "@/components/CamperDetailsContent/CamperDetailsContent";
import { fetchCamperById, fetchCamperReviews } from "@/lib/api";

type Props = {
  params: Promise<{ camperId: string }>;
};

export async function generateStaticParams() {
  const params: { camperId: string }[] = [];
  let page = 1;
  let totalPages = 1;

  try {
    while (page <= totalPages) {
      const response = await fetch(
        `https://campers-api.goit.study/campers?page=${page}&perPage=4`,
      );

      if (!response.ok) {
        break;
      }

      const data = (await response.json()) as {
        campers: { id: string }[];
        totalPages: number;
      };

      totalPages = data.totalPages;
      params.push(...data.campers.map((camper) => ({ camperId: camper.id })));
      page += 1;
    }
  } catch {
    return [];
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { camperId } = await params;
    const camper = await fetchCamperById(camperId);

    return {
      title: camper.name,
      description: camper.description,
    };
  } catch {
    return {
      title: "Camper details",
    };
  }
}

export default async function CamperDetailsPage({ params }: Props) {
  const { camperId } = await params;

  try {
    const [camper, reviews] = await Promise.all([
      fetchCamperById(camperId),
      fetchCamperReviews(camperId),
    ]);

    return <CamperDetailsContent camper={camper} reviews={reviews} />;
  } catch {
    notFound();
  }
}
