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

async function fetchMoviesByID(id, language) {
  const url = `http://localhost:3001/movies/${id}`;

  if (!id) {
    throw Error("An ID is required");
  }

  try {
    const response = await axios.get(url, {
      params: {
        language,
      },
    });

    return response.data;
  } catch (error) {
    if (error.message) {
      throw Error(error.message);
    }

    throw Error(error.response.data);
  }
}

async function fetchMoviesVideos(id, language) {
  const url = `http://localhost:3001/movies/videos/${id}`;

  if (!id) {
    throw Error("An ID is required");
  }

  try {
    const response = await axios.get(url, {
      params: {
        language,
      },
    });

    return response.data;
  } catch (error) {
    if (error.message) {
      throw Error(error.message);
    }

    throw Error(error.response.data);
  }
}

async function fetchMoviesImages(id, language) {
  const url = `http://localhost:3001/movies/images/${id}`;

  if (!id) {
    throw Error("An ID is required");
  }

  try {
    const response = await axios.get(url, {
      params: {
        language,
      },
    });

    return response.data;
  } catch (error) {
    if (error.message) {
      throw Error(error.message);
    }

    throw Error(error.response.data);
  }
}

export {
  fetchMoviesByList,
  fetchMoviesByID,
  fetchMoviesVideos,
  fetchMoviesImages,
};
