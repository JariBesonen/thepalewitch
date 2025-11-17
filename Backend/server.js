// Backend/server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://thepalewitch.com",
      "https://thepalewitch.vercel.app",
      "https://thepalewitch-git-main-jari-besonens-projects.vercel.app",
    ],
  })
);

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Routes
const DetailRouter = require("./Routers/DetailRouter");
app.use("/api/details", DetailRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
