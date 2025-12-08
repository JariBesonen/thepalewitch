const pool = require("../db.js");

const registerUser = async (username, password) => {
  const query =
    "INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *";
  const results = await pool.query(query, [username, password]);
  return results.rows[0];
};

const userExists = async (username) => {
  const query = "SELECT * FROM users WHERE username = $1";
  const results = await pool.query(query, [username]);
  return results.rows[0];
};

const loginUser = async (username) => {
  const query = "SELECT * FROM users WHERE username = $1";
  const results = await pool.query(query, [username]);
  return results.rows[0];
};

module.exports = { registerUser, userExists, loginUser };
