const pool = require("../db.js");

const postMessage = async (message) => {
  const query = "INSERT INTO messages (message) VALUES ($1) RETURNING *";
  const result = await pool.query(query, [message]);
  return result.rows[0];
};

const getMessage = async () => {
  const query = "SELECT * FROM messages";
  const results = await pool.query(query);
  return results.rows;
};

module.exports = { postMessage, getMessage };
