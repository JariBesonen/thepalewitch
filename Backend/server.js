// Backend/server.js

require("dotenv").config();
const express = require("express");
const app = express();
const helmet = require("helmet");
const cors = require("cors");
const authRouter = require("./Routers/authRouter");
const DetailRouter = require("./Routers/DetailRouter");
const messageRouter = require("./Routers/messageRouter");

app.disable("x-powered-by");

// -----------------------------
// 1. JSON + URL parsing FIRST
// -----------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -----------------------------
// 2. CORS (must come BEFORE Helmet)
// -----------------------------
const allowedOrigins = ["http://localhost:5173", "https://thepalewitch.com"];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow Postman, curl, etc.

      const isAllowed =
        allowedOrigins.includes(origin) || origin.endsWith(".vercel.app");

      if (isAllowed) return callback(null, true);

      return callback(new Error("Not allowed by CORS"));
    },
  })
);

// -----------------------------
// 3. Helmet (must come AFTER CORS)
// Adjusted to allow cross-origin API usage
// -----------------------------
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
    crossOriginOpenerPolicy: false,
  })
);

// -----------------------------
// 5. Database + Routes
// -----------------------------
const pool = require("./db");

// Test DB route
app.get("/api/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json(result.rows);
  } catch (err) {
    console.error("DB TEST ERROR:", err);
    res.status(500).json({ error: "db test failed" });
  }
});

// ROUTES
app.use("/api/users", authRouter);
app.use("/api/details", DetailRouter);
app.use("/api/message", messageRouter);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

// -----------------------------
// 6. Start Server
// -----------------------------
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port http://localhost:${PORT}`);
});
