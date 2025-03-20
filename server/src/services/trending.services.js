import axios from "axios";

async function fetchAllTrendingAPI(language) {
  const url = "https://api.themoviedb.org/3/trending/all/week";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    params: {
      language: language || "en-US",
    },
  };

  try {
    const response = await axios.get(url, options);
    return response;
  } catch (error) {
    const data = error.response.data;
    throw Error(data);
  }
}

async function fetchMoviesTrendingAPI(language) {
  const url = "https://api.themoviedb.org/3/trending/movie/week";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    params: {
      language: language || "en-US",
    },
  };

  try {
    const response = await axios.get(url, options);
    return response;
  } catch (error) {
    const data = error.response.data;
    throw Error(data);
  }
}

async function fetchTVShowsTrendingAPI(language) {
  const url = "https://api.themoviedb.org/3/trending/tv/week";

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    params: {
      language: language || "en-US",
    },
  };

  try {
    const response = await axios.get(url, options);
    return response;
  } catch (error) {
    const data = error.response.data;
    throw Error(data);
  }
}

export { fetchAllTrendingAPI, fetchMoviesTrendingAPI, fetchTVShowsTrendingAPI };
