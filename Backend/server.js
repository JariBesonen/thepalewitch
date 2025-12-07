// Backend/server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
app.use(helmet());
app.disable("x-powered-by");

const app = express();

const allowedOrigins = ["http://localhost:5173", "https://thepalewitch.com"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow Postman, curl, etc.

      const isAllowed =
        allowedOrigins.includes(origin) || origin.endsWith(".vercel.app");

      if (isAllowed) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
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

//imported routes
const authRouter = require("./Routers/authRouter");
//routes
app.use("/api/users", authRouter);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// Routes
const DetailRouter = require("./Routers/DetailRouter");
app.use("/api/details", DetailRouter);

app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
