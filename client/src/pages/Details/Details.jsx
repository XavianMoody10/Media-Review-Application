import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import {
  fetchMoviesByID,
  fetchMoviesImages,
  fetchMoviesVideos,
} from "../../services/movies.services";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import { motion, AnimatePresence } from "motion/react";
import ClipLoader from "react-spinners/ClipLoader";

const VideoThumbnail = ({ imageURL }) => {
  return (
    <div
      className=" h-[270px] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      <div className=" absolute top-0 left-0 bottom-0 right-0 bg-black/40 flex items-center justify-center">
        <PlayCircleFilledIcon sx={{ color: "white", fontSize: 80 }} />
      </div>
    </div>
  );
};

const ImageCard = ({ imageURL }) => {
  return (
    <div className=" h-[270px]">
      <img src={imageURL} alt="" width={"100%"} loading="lazy" />
    </div>
  );
};

const VideosSlider = ({ data }) => {
  const slides = data.map((d, i) => {
    const thumbnail = `https://img.youtube.com/vi/${d.key}/maxresdefault.jpg`;

    if (i <= 5 && (d.site === "YouTube" || d.type === "Trailer")) {
      return (
        <SwiperSlide key={d.id}>
          <VideoThumbnail imageURL={thumbnail} />
        </SwiperSlide>
      );
    }
  });

  return (
    <Swiper
      slidesPerView={1.1}
      spaceBetween={10}
      grabCursor={true}
      breakpoints={{
        700: {
          slidesPerView: 2.1,
        },

        1200: {
          slidesPerView: 3.1,
        },
      }}
    >
      {slides}
    </Swiper>
  );
};

const ImageSlider = ({ data }) => {
  const slides = data.map((d, i) => {
    const imageUrl = `https://image.tmdb.org/t/p/original${d.file_path}`;

    if (i > 2 && i <= 10) {
      return (
        <SwiperSlide key={d.file_path}>
          <ImageCard imageURL={imageUrl} />
        </SwiperSlide>
      );
    }
  });

  return (
    <Swiper
      slidesPerView={1.1}
      spaceBetween={10}
      grabCursor={true}
      breakpoints={{
        700: {
          slidesPerView: 2.1,
        },

        1200: {
          slidesPerView: 3.1,
        },
      }}
    >
      {slides}
    </Swiper>
  );
};

export const Details = () => {
  const { id } = useParams();

  const detailsQuery = useQuery({
    queryKey: ["movie-details", id],
    queryFn: () => fetchMoviesByID(id),
    retry: false,
    staleTime: 100000,
  });

  const videosQuery = useQuery({
    queryKey: ["movie-videos", id],
    queryFn: () => fetchMoviesVideos(id),
    retry: false,
    staleTime: 100000,
  });

  const imagesQuery = useQuery({
    queryKey: ["movie-images", id],
    queryFn: () => fetchMoviesImages(id),
    retry: false,
    staleTime: 100000,
  });

  return (
    <main>
      <AnimatePresence>
        {detailsQuery.isFetching &&
          videosQuery.isFetching &&
          imagesQuery.isFetching && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{
                opacity:
                  detailsQuery.isFetching &&
                  videosQuery.isFetching &&
                  imagesQuery.isFetching
                    ? 1
                    : 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, delay: 0 }}
              className=" fixed top-0 left-0 bottom-0 right-0 w-full h-screen flex items-center justify-center bg-white z-20 border border-black/20"
            >
              <ClipLoader />
            </motion.div>
          )}
      </AnimatePresence>

      <section>
        <div className=" max-w-[1500px] w-[90%] min-h-[700px] mx-auto relative">
          <div
            className=" bg-cover bg-top h-[700px]"
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original${
                detailsQuery.isFetched && detailsQuery.data.backdrop_path
              })`,
            }}
          ></div>

          {/* <LoadingOverlay isLoading={detailsQuery.isFetching} /> */}
        </div>

        <div className=" max-w-[1500px] w-[90%] mx-auto mt-20 space-y-16">
          <>
            <div className=" space-y-5 min-h-[120px]">
              <h3 className=" text-3xl border-b-2 border-gray-200 pb-2 font-medium text-gray-400">
                Title
              </h3>

              {detailsQuery.isFetched && (
                <p className=" text-3xl font-bold">
                  {detailsQuery.data.title || detailsQuery.data.name}
                </p>
              )}
            </div>

            <div className=" space-y-5 min-h-[120px]">
              <h3 className=" text-3xl border-b-2 border-gray-200 pb-2 font-medium text-gray-400">
                Overview
              </h3>

              {detailsQuery.isFetched && (
                <p className=" text-xl">{detailsQuery.data.overview}</p>
              )}
            </div>
          </>

          <div className=" space-y-5 min-h-[270px]">
            <h3 className=" text-3xl border-b-2 border-gray-200 pb-2 font-medium text-gray-400">
              Trailers and Clips
            </h3>

            {videosQuery.isFetched && (
              <VideosSlider data={videosQuery.data.results} />
            )}
          </div>

          <div className=" space-y-5 min-h-[270px]">
            <h3 className=" text-3xl border-b-2 border-gray-200 pb-2 font-medium text-gray-400">
              Images
            </h3>

            {imagesQuery.isFetched && (
              <ImageSlider data={imagesQuery.data.backdrops} />
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
