import { Router } from "express";
import {
  getAllTrending,
  getMoviesTrending,
  getTVShowsTrending,
} from "../controllers/trending.controller.js";

const router = Router();

router.get("/all", getAllTrending);

router.get("/movies", getMoviesTrending);

router.get("/tv_shows", getTVShowsTrending);

export default router;
