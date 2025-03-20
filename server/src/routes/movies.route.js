import { Router } from "express";
import { getMoviesByList } from "../controllers/movies.controller.js";

const router = Router();

router.get("/:list", getMoviesByList);

export default router;
