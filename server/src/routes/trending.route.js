import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/all", async (req, res) => {
  const { language } = req.query;

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
    res.send(response.data);
  } catch (error) {
    const status = error.response.status;
    const data = error.response.data;
    res.status(status).send(data);
  }
});

router.get("/movies", async (req, res) => {
  const { language } = req.query;

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
    res.send(response.data);
  } catch (error) {
    const status = error.response.status;
    const data = error.response.data;
    res.status(status).send(data);
  }
});

router.get("/tv_shows", async (req, res) => {
  const { language } = req.query;

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
    res.send(response.data);
  } catch (error) {
    const status = error.response.status;
    const data = error.response.data;
    res.status(status).send(data);
  }
});

export default router;
