import { Router } from "express";
import axios from "axios";

const router = Router();

router.get("/:list", async (req, res) => {
  const { list } = req.params;
  const { language, page } = req.query;

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
    res.send(response.data);
  } catch (error) {
    const status = error.response.status;
    const data = error.response.data;
    res.status(status).send(data);
  }
});

export default router;
