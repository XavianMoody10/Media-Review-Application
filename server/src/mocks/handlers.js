import { delay, http, HttpResponse } from "msw";
import allTrendingMockdata from "./mocksdata/trending/allTrending.mockdata.js";
import trendingMoviesMockdata from "./mocksdata/trending/trendingMovies.mockdata.js";
import trendingTVShowsMockdata from "./mocksdata/trending/trendingTVShows.mockdata.js";
import nowPlayingMoviesMockdata from "./mocksdata/movies/nowPlayingMovies.mockdata.js";
import popularMoviesMockdata from "./mocksdata/movies/popularMovies.mockdata.js";
import topRatedMoviesMockdata from "./mocksdata/movies/topRatedMovies.mockdata.js";
import upcomingMoviesMockdata from "./mocksdata/movies/upcomingMovies.mockdata.js";
import airingTodayTVShowsMockdata from "./mocksdata/tvShows/airingTodayTVShows.mockdata.js";
import onTheAirTVShowsMockdata from "./mocksdata/tvShows/onTheAirTVShows.mockdata.js";
import popularTVShowsMockdata from "./mocksdata/tvShows/popularTVShows.mockdata.js";
import topRatedTVShowsMockdata from "./mocksdata/tvShows/topRatedTVShows.mockdata.js";
import movieDetailsMockdata from "./mocksdata/movies/movieDetails.mockdata.js";
import movieVideosMockdata from "./mocksdata/movies/movieVideos.mockdata.js";
import movieImagesMockdata from "./mocksdata/movies/movieImages.mockdata.js";

export const handlers = [
  http.get("https://api.themoviedb.org/3/trending/all/week", async () => {
    await delay(3000);
    return HttpResponse.json(allTrendingMockdata);
    // return HttpResponse.text("Failed to fetch trending data", { status: 404 });
  }),

  http.get("https://api.themoviedb.org/3/trending/movie/week", async () => {
    await delay(3000);
    return HttpResponse.json(trendingMoviesMockdata);
    // return HttpResponse.text("Failed to fetch trending movies", { status: 404 });
  }),

  http.get("https://api.themoviedb.org/3/trending/tv/week", async () => {
    await delay(3000);
    return HttpResponse.json(trendingTVShowsMockdata);
    // return HttpResponse.text("Failed to fetch trending TV shows", { status: 404 });
  }),

  http.get(
    "https://api.themoviedb.org/3/movie/now_playing",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get("page"));

      await delay(3000);
      return HttpResponse.json(nowPlayingMoviesMockdata[page - 1]);
      // return HttpResponse.text("Failed to fetch trending TV shows", { status: 404 });
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/movie/popular",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get("page"));

      await delay(3000);
      return HttpResponse.json(popularMoviesMockdata[page - 1]);
      // return HttpResponse.text("Failed to fetch trending TV shows", { status: 404 });
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/movie/top_rated",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get("page"));

      await delay(3000);
      return HttpResponse.json(topRatedMoviesMockdata[page - 1]);
      // return HttpResponse.text("Failed to fetch trending TV shows", { status: 404 });
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/movie/upcoming",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get("page"));

      await delay(3000);
      return HttpResponse.json(upcomingMoviesMockdata[page - 1]);
      // return HttpResponse.text("Failed to fetch trending TV shows", { status: 404 });
    }
  ),

  http.get("https://api.themoviedb.org/3/movie/934433", async () => {
    await delay(3000);
    return HttpResponse.json(movieDetailsMockdata);
    // return HttpResponse.text("Failed to fetch trending TV shows", { status: 404 });
  }),

  http.get("https://api.themoviedb.org/3/movie/934433/images", async () => {
    await delay(3000);
    return HttpResponse.json(movieImagesMockdata);
    // return HttpResponse.text("Failed to fetch trending TV shows", { status: 404 });
  }),

  http.get("https://api.themoviedb.org/3/movie/934433/videos", async () => {
    await delay(3000);
    return HttpResponse.json(movieVideosMockdata);
    // return HttpResponse.text("Failed to fetch trending TV shows", { status: 404 });
  }),

  http.get(
    "https://api.themoviedb.org/3/tv/airing_today",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get("page"));

      await delay(3000);
      return HttpResponse.json(airingTodayTVShowsMockdata[page - 1]);
      // return HttpResponse.text("Failed to fetch trending TV shows", { status: 404 });
    }
  ),

  http.get(
    "https://api.themoviedb.org/3/tv/on_the_air",
    async ({ request }) => {
      const url = new URL(request.url);
      const page = Number(url.searchParams.get("page"));

      await delay(3000);
      return HttpResponse.json(onTheAirTVShowsMockdata[page - 1]);
      // return HttpResponse.text("Failed to fetch trending TV shows", { status: 404 });
    }
  ),

  http.get("https://api.themoviedb.org/3/tv/popular", async ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page"));

    await delay(3000);
    return HttpResponse.json(popularTVShowsMockdata[page - 1]);
    // return HttpResponse.text("Failed to fetch trending TV shows", { status: 404 });
  }),

  http.get("https://api.themoviedb.org/3/tv/top_rated", async ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get("page"));

    await delay(3000);
    return HttpResponse.json(topRatedTVShowsMockdata[page - 1]);
    // return HttpResponse.text("Failed to fetch trending TV shows", { status: 404 });
  }),
];
