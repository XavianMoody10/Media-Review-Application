import {
  fetchAllTrendingAPI,
  fetchMoviesTrendingAPI,
  fetchTVShowsTrendingAPI,
} from "../services/trending.services.js";

async function getAllTrending(req, res) {
  const { language } = req.query;

  try {
    const response = await fetchAllTrendingAPI(language);
    res.send(response.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
}

async function getMoviesTrending(req, res) {
  const { language } = req.query;

  try {
    const response = await fetchMoviesTrendingAPI(language);
    res.send(response.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
}

async function getTVShowsTrending(req, res) {
  const { language } = req.query;

  try {
    const response = await fetchTVShowsTrendingAPI(language);
    res.send(response.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
}

export { getAllTrending, getMoviesTrending, getTVShowsTrending };
