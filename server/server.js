import express from "express";
import cors from "cors";
import { server } from "./src/mocks/node.js";
import trendingRouter from "./src/routes/trending.route.js";
import moviesRouter from "./src/routes/movies.route.js";
import tvShowsRouter from "./src/routes/tvShows.route.js";

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/trending", trendingRouter);
app.use("/movies", moviesRouter);
app.use("/tv_shows", tvShowsRouter);

// Server
app.listen(PORT, () => {
  server.listen(); // Mock Service Worker (For Production)
  console.log("Running on port " + PORT);
});
