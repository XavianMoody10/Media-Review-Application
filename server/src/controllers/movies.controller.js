import { fetchMoviesByListAPI } from "../services/movies.services.js";

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

export { getMoviesByList };
