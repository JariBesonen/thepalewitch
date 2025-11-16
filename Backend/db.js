// backend/db.js
const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function testDb() {
  const res = await pool.query("SELECT NOW()");
  console.log("DB connected at:", res.rows[0].now);
}

module.exports = { pool, testDb };
