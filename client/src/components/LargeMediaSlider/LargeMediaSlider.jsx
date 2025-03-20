import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const LargeMediaSlider = ({ results }) => {
  const largeMediaSlides = results.map((t) => {
    const imageUrl = `https://image.tmdb.org/t/p/original${t.backdrop_path}`;

    return (
      <SwiperSlide key={t.id}>
        <div
          className=" bg-cover bg-top h-[700px]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        >
          <div className=" absolute top-0 left-0 bottom-0 right-0 bg-black/70 flex flex-col justify-end gap-2 p-3 lg:p-8">
            <p className=" text-3xl text-white font-bold">
              {t.title || t.name}
            </p>
            <p className=" text-white max-w-[650px] sm:text-lg">{t.overview}</p>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return <Swiper grabCursor={true}>{largeMediaSlides}</Swiper>;
};
