import { useQuery } from "@tanstack/react-query";
import React from "react";
import {
  fetchTrendingMedia,
  fetchTrendingMovies,
  fetchTrendingTVShows,
} from "../../services/trending.services";
import { LargeMediaSlider } from "../../components/LargeMediaSlider/LargeMediaSlider";
import { SmallMediaSlider } from "../../components/SmallMediaSlider/SmallMediaSlider";
import { LargeMediaErrorMessage } from "../../components/LargeMediaErrorMessage/LargeMediaErrorMessage";
import { SmallMediaErrorMessage } from "../../components/SmallMediaErrorMessage/SmallMediaErrorMessage";
import { Subheading } from "../../components/SubHeading/Subheading";
import { LoadingOverlay } from "../../components/LoadingOverlay/LoadingOverlay";

export const Home = () => {
  // Fetch trending media
  const trendingAllQuery = useQuery({
    queryKey: ["trending-all"],
    queryFn: fetchTrendingMedia,
    retry: false,
    staleTime: 20000,
  });

  // Fetch trending media
  const trendingMoviesQuery = useQuery({
    queryKey: ["trending-movies"],
    queryFn: fetchTrendingMovies,
    retry: false,
    staleTime: 20000,
  });

  // Fetch trending media
  const trendingTVShowsQuery = useQuery({
    queryKey: ["trending-tvshows"],
    queryFn: fetchTrendingTVShows,
    retry: false,
    staleTime: 20000,
  });

  return (
    <main>
      <section>
        <div className=" relative min-h-[700px] w-[90%] max-w-[1500px] mx-auto">
          {trendingAllQuery.data?.results && (
            <LargeMediaSlider results={trendingAllQuery.data.results} />
          )}

          <LoadingOverlay isLoading={trendingAllQuery.isFetching} />

          <LargeMediaErrorMessage error={trendingAllQuery.error} />
        </div>
      </section>

      <section className=" mt-10">
        <div className=" space-y-5 w-[90%] max-w-[1500px] mx-auto">
          <Subheading>Trending Movies</Subheading>

          <div className=" relative min-h-[300px]">
            {trendingMoviesQuery.data?.results && (
              <SmallMediaSlider results={trendingMoviesQuery.data.results} />
            )}

            <LoadingOverlay isLoading={trendingAllQuery.isFetching} />

            <SmallMediaErrorMessage error={trendingMoviesQuery.error} />
          </div>
        </div>
      </section>

      <section className=" mt-10">
        <div className=" space-y-5 w-[90%] max-w-[1500px] mx-auto">
          <Subheading>Trending TV Shows</Subheading>

          <div className=" relative min-h-[300px]">
            {trendingTVShowsQuery.data?.results && (
              <SmallMediaSlider results={trendingTVShowsQuery.data.results} />
            )}

            <LoadingOverlay isLoading={trendingAllQuery.isFetching} />

            <SmallMediaErrorMessage error={trendingTVShowsQuery.error} />
          </div>
        </div>
      </section>
    </main>
  );
};
