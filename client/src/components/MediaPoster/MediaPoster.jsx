import React from "react";
import { motion } from "motion/react";
import posterPlacholder from "../../assets/movie-placeholder.png";

export const MediaPoster = ({ media }) => {
  const imageUrl = `https://image.tmdb.org/t/p/original${media.poster_path}`;

  return (
    <div className=" relative">
      <div>
        <img src={media.poster_path ? imageUrl : posterPlacholder} alt="" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        className=" absolute top-0 left-0 bottom-0 right-0 bg-black/70 flex flex-col justify-end gap-2 p-3"
      >
        <p className=" text-xl text-white font-bold">
          {media.title || media.name || media.original_title}
        </p>
      </motion.div>
    </div>
  );
};
