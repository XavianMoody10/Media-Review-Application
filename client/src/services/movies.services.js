import axios from "axios";

async function fetchMoviesByList(
  list = "now_playing",
  page = 1,
  language = "en-US"
) {
  const url = `http://localhost:3001/movies/${list}`;

  try {
    const response = await axios.get(url, {
      params: {
        language,
        page,
      },
    });

    return response.data;
  } catch (error) {
    throw Error(error.response.data);
  }
}

export { fetchMoviesByList };
