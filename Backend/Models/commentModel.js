const pool = require("../db.js");

const displayComments = async (id) => {
  const query =
    "SELECT messages.message, comments.comment FROM messages LEFT JOIN comments ON messages.messageid = comments.postid WHERE messages.messageid = $1;";
  const result = await pool.query(query, [id]);
  return result.rows;
};

const postComment = async (comment, postid, userId) => {
  const query =
    "INSERT INTO comments (comment, postid, userid) VALUES ($1, $2, $3)";
  const result = await pool.query(query, [comment, postid, userId]);
  return result.rows[0];
};

const deleteComment = async (id, userId) => {
  console.log("made it into the model");
  const query = `
    DELETE FROM comments
    WHERE id = $1 AND userid = $2;
  `;
  const result = await pool.query(query, [id, userId]);
  return result.rows[0]; // undefined if not owned or not found
};

const displayMyComments = async (id) => {
  const query =
    "SELECT users.id, comments.comment, comments.id FROM users INNER JOIN comments ON users.id = comments.userid WHERE userid = $1;";
  const result = await pool.query(query, [id]);

  return result.rows;
};

module.exports = {
  displayComments,
  postComment,
  displayMyComments,
  deleteComment,
};
