import express from "express";
import cors from "cors";
import { server } from "./src/mocks/node";

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes

// Server
app.listen(PORT, () => {
  server.listen(); // Mock Service Worker (For Production)
});
