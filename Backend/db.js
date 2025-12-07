// Backend/db.js
const { Pool } = require("pg");
const dns = require("dns");
require("dotenv").config();

const dbUrl = process.env.DATABASE_URL;

if (!dbUrl) {
  console.log("DB DEBUG: DATABASE_URL is UNDEFINED");
} else {
  try {
    const parsed = new URL(dbUrl);
    console.log("DB DEBUG: Connecting to host:", parsed.hostname);
  } catch (err) {
    console.log("DB DEBUG: Failed to parse DATABASE_URL:", dbUrl);
  }
}

// Force IPv4 lookup so we don't hit the IPv6 (2600:...) address
const pool = new Pool({
  connectionString: dbUrl,
  ssl: {
    rejectUnauthorized: false, // required for Supabase
  }
});

module.exports = pool;
