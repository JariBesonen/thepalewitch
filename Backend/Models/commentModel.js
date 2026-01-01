const pool = require("../db.js");

const displayComments = async (id) => {
  const query =
    "SELECT messages.message, comments.comment FROM messages LEFT JOIN comments ON messages.messageid = comments.postid WHERE messages.messageid = $1;";
  const result = await pool.query(query, [id]);
  return result.rows;
};

const postComment = async (comment, postid) => {
  const query = "INSERT INTO comments (comment, postid) VALUES ($1, $2)";
  const result = await pool.query(query, [comment, postid]);
  return result.rows[0];
};

module.exports = { displayComments, postComment };
