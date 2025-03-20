import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { MediaPoster } from "../MediaPoster/MediaPoster";

export const SmallMediaSlider = ({ results }) => {
  const smallMediaSlides = results.map((t) => {
    return (
      <SwiperSlide key={t.id}>
        <MediaPoster media={t} />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      spaceBetween={10}
      grabCursor={true}
      breakpoints={{
        400: {
          slidesPerView: 2,
        },

        600: {
          slidesPerView: 2.1,
        },

        768: {
          slidesPerView: 3.1,
        },

        1024: {
          slidesPerView: 4.1,
        },

        1500: {
          slidesPerView: 5.1,
        },
      }}
    >
      {smallMediaSlides}
    </Swiper>
  );
};
