import { Router } from "express";
import {
  getMovieDetailsByID,
  getMovieImages,
  getMoviesByList,
  getMovieVideos,
} from "../controllers/movies.controller.js";

const router = Router();

router.get("/:list", getMoviesByList);
router.get("/:id", getMovieDetailsByID);
router.get("/videos/:id", getMovieVideos);
router.get("/images/:id", getMovieImages);

export default router;
