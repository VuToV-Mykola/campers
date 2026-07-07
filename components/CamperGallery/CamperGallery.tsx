"use client";

import Image from "next/image";
import { useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import type { GalleryImage } from "@/types/camper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import styles from "./CamperGallery.module.css";

type Props = {
  images: GalleryImage[];
  camperName: string;
};

export default function CamperGallery({ images, camperName }: Props) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

  if (images.length === 0) {
    return null;
  }

  return (
    <section className={styles.gallery} aria-label={`${camperName} gallery`}>
      <Swiper
        className={styles.main}
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <div className={styles.mainImageWrap}>
              <Image
                src={image.original}
                alt={`${camperName} photo ${image.order}`}
                fill
                sizes="(max-width: 1440px) 50vw, 638px"
                className={styles.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        className={styles.thumbs}
        modules={[FreeMode, Navigation, Thumbs]}
        onSwiper={setThumbsSwiper}
        spaceBetween={32}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
      >
        {images.map((image) => (
          <SwiperSlide key={`thumb-${image.id}`}>
            <div className={styles.thumbWrap}>
              <Image
                src={image.thumb}
                alt={`${camperName} thumbnail ${image.order}`}
                fill
                sizes="136px"
                className={styles.image}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
