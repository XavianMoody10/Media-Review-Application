import { keepPreviousData, useQuery } from "@tanstack/react-query";
import React from "react";
import { MediaGrid } from "../../components/MediaGrid/MediaGrid";
import { useParams, useSearchParams } from "react-router-dom";
import { fetchMoviesByList } from "../../services/movies.services";
import Pagination from "@mui/material/Pagination";
import { fetchTVShowsByList } from "../../services/tvShows.services";
import { ListSelect } from "../../components/ListSelect/ListSelect";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";

export const Library = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { type } = useParams();

  const defaultListValue =
    (type === "movies" && "now_playing") ||
    (type === "tv_shows" && "airing_today");

  const list = searchParams.get("list") || defaultListValue;
  const page = searchParams.get("page") || 1;

  const moviesListOptions = [
    {
      text: "Now Playing",
      value: "now_playing",
    },
    {
      text: "Popular",
      value: "popular",
    },
    {
      text: "Top Rated",
      value: "top_rated",
    },
    {
      text: "Upcoming",
      value: "upcoming",
    },
  ];

  const tvShowsListOptions = [
    {
      text: "Airing Today",
      value: "airing_today",
    },
    {
      text: "On The Air",
      value: "on_the_air",
    },
    {
      text: "Popular",
      value: "popular",
    },
    {
      text: "Top Rated",
      value: "top_rated",
    },
  ];

  // Fetch movies
  const mediaQuery = useQuery({
    queryKey: [type, list, page],
    queryFn: () =>
      (type === "movies" && fetchMoviesByList(list, page, "en-US")) ||
      (type === "tv_shows" && fetchTVShowsByList(list, page, "en-US")),
    staleTime: 300000,
    placeholderData: keepPreviousData,
  });

  return (
    <main>
      <div className=" max-w-[1500px] mx-auto relative p-3 space-y-6">
        {type === "movies" && (
          <ListSelect
            optionsArray={moviesListOptions}
            defaultValue={list}
            onChange={(e) => {
              setSearchParams({
                list: e.target.value,
                page: page,
              });
            }}
          />
        )}

        {type === "tv_shows" && (
          <ListSelect
            optionsArray={tvShowsListOptions}
            defaultValue={list}
            onChange={(e) => {
              setSearchParams({
                list: e.target.value,
                page: page,
              });
            }}
          />
        )}

        <div className=" flex flex-col items-center gap-10 relative min-h-[95vh]">
          <LoadingOverlay isLoading={mediaQuery.isFetching} />

          {mediaQuery.data?.results && !mediaQuery.isFetching && (
            <>
              <MediaGrid results={mediaQuery.data.results} />

              <Pagination
                onChange={(e, v) => {
                  if (!mediaQuery.isPlaceholderData) {
                    setSearchParams({
                      page: Number(v),
                    });

                    window.scrollTo(0, 0);
                  }
                }}
                page={Number(page)}
                count={
                  mediaQuery.data?.total_pages ? mediaQuery.data.total_pages : 1
                }
              />
            </>
          )}
        </div>
      </div>
    </main>
  );
};
