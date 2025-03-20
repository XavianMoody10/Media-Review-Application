import axios from "axios";

async function fetchTVShowsByList(
  list = "airing_today",
  page = 1,
  language = "en-US"
) {
  const url = `http://localhost:3001/tv_shows/${list}`;

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

export { fetchTVShowsByList };
