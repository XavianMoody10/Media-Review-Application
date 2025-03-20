import axios from "axios";

async function fetchTrendingMedia() {
  const url = "http://localhost:3001/trending/all";
  try {
    const response = await axios.get(url, {
      params: {
        language: "en-US",
      },
    });

    return response.data;
  } catch (error) {
    throw Error(error.response.data);
  }
}

async function fetchTrendingMovies() {
  const url = "http://localhost:3001/trending/movies";
  try {
    const response = await axios.get(url, {
      params: {
        language: "en-US",
      },
    });

    return response.data;
  } catch (error) {
    throw Error(error.response.data);
  }
}

async function fetchTrendingTVShows() {
  const url = "http://localhost:3001/trending/tv_shows";
  try {
    const response = await axios.get(url, {
      params: {
        language: "en-US",
      },
    });

    return response.data;
  } catch (error) {
    throw Error(error.response.data);
  }
}

export { fetchTrendingMedia, fetchTrendingMovies, fetchTrendingTVShows };
