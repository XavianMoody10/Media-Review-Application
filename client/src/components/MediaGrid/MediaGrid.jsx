import React from "react";
import { MediaPoster } from "../MediaPoster/MediaPoster";

export const MediaGrid = ({ results }) => {
  // Diplay slides
  const media = results.map((m) => {
    return <MediaPoster key={m.id} media={m} />;
  });

  return (
    <div className=" min-h-[90vh] max-w-[1500px] grid gap-5 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {media}
    </div>
  );
};
