const pool = require("../db.js");

const postMessage = async (message, userId) => {
  const query =
    "INSERT INTO messages (message, userid) VALUES ($1, $2) RETURNING *";
  const result = await pool.query(query, [message, userId]);
  return result.rows[0];
};

const getMessage = async () => {
  const query =
    "SELECT users.username, messages.message, messages.messageid, messages.userid FROM messages INNER JOIN users ON users.id = messages.userid";
  const results = await pool.query(query);

  return results.rows;
};

module.exports = { postMessage, getMessage };
