import { fetchTVShowsByListAPI } from "../services/tvShows.services.js";

async function getTVShowsByList(req, res) {
  const { list } = req.params;
  const { language, page } = req.query;

  try {
    const response = await fetchTVShowsByListAPI(list, page, language);
    res.send(response.data);
  } catch (error) {
    res.status(error.status).send(error.message);
  }
}

export { getTVShowsByList };
