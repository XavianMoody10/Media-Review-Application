import {
  fetchMovieDetailsByIDAPI,
  fetchMoviesByListAPI,
  fetchMoviesImagesAPI,
  fetchMoviesVideosAPI,
} from "../services/movies.services.js";

async function getMoviesByList(req, res) {
  const { list } = req.params;
  const { language, page } = req.query;

  try {
    const response = await fetchMoviesByListAPI(list, page, language);
    res.send(response.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
}

async function getMovieDetailsByID(req, res) {
  const { id } = req.params;
  const { language } = req.query;

  try {
    const response = await fetchMovieDetailsByIDAPI(id, language);
    res.send(response.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
}

async function getMovieVideos(req, res) {
  const { id } = req.params;
  const { language } = req.query;

  try {
    const response = await fetchMoviesVideosAPI(id, language);
    res.send(response.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
}

async function getMovieImages(req, res) {
  const { id } = req.params;
  const { language } = req.query;

  try {
    const response = await fetchMoviesImagesAPI(id, language);
    res.send(response.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
}

export { getMoviesByList, getMovieDetailsByID, getMovieVideos, getMovieImages };
