import axios from "axios";

async function fetchTVShowsByListAPI(list, page, language) {
  const url = `https://api.themoviedb.org/3/tv/${list}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.API_KEY}`,
    },
    params: {
      language: language || "en-US",
      page: page || 1,
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

export { fetchTVShowsByListAPI };
