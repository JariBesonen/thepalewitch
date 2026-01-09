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

const deleteMessage = async (postId, userId) => {
  const query = `
    DELETE FROM messages
    WHERE messageid = $1 AND userid = $2
    RETURNING *;
  `;
  const result = await pool.query(query, [postId, userId]);
  return result.rows[0]; // undefined if not owned or not found
};


module.exports = { postMessage, getMessage, deleteMessage };
