// Backend/server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();


const allowedOrigins = [
  "http://localhost:5173",
  "https://thepalewitch.com",
  "https://thepalewitch.vercel.app",
  "https://thepalewitch-git-main-jari-besonens-projects.vercel.app",
  "https://thepalewitch-7f39pk6k7-jari-besonens-projects.vercel.app", // <-- new one
];

app.use(
  cors({
    origin: allowedOrigins,
  })
);

const PORT = process.env.PORT || 3000;


const pool = require("./db");

app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    console.error("DB TEST ERROR:", err);
    res.status(500).json({ error: "db test failed" });
  }
});


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
