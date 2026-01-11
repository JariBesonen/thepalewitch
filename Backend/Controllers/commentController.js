const {
  displayComments,
  postComment,
  displayMyComments,
  deleteComment,
} = require("../Models/commentModel");

const jwt = require("jsonwebtoken");

const displayCommentsController = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(404).json({ error: "id is missing for comments" });
  }
  try {
    const postAndComments = await displayComments(id);
    if (!postAndComments) {
      return res
        .status(404)
        .json({ error: "could not connect to model for comments" });
    }
    console.log(postAndComments);

    return res.status(200).json(postAndComments);
  } catch (error) {
    return res.status(500).json({ error: "server issue within comments" });
  }
};

const postCommentController = async (req, res) => {
  const { newComment } = req.body;
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  console.log("post comment token", token);
  const decoded = jwt.decode(token);
  const userId = decoded.id;
  console.log(userId, "this is the users id");
  const { id } = req.params;
  console.log(newComment);
  console.log(id);
  try {
    const commentPosted = await postComment(newComment, id, userId);

    return res.status(201).json({ message: "posted", commentPosted });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "server issue within comments postComment" });
  }
};

const deleteCommentController = async (req, res) => {
  const { id } = req.params;

  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  const decoded = jwt.decode(token);
  const userId = decoded.id;
  console.log("this is my userid", userId);
  try {
    const deleted = await deleteComment(id, userId);

    if (!deleted) {
      // either post doesn't exist OR it exists but isn't theirs
      return res
        .status(403)
        .json({ error: "Not allowed to delete this comment" });
    }
    console.log(deleted);

    return res.status(200).json(deleted);
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

const displayMyCommentsController = async (req, res) => {
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  const decoded = jwt.decode(token);
  const id = decoded.id;

  try {
    const myComments = await displayMyComments(id);
    if (!myComments) {
      return res.status(404).json({ error: "myComments was not found" });
    }

    return res.status(200).json(myComments);
  } catch (error) {
    return res.status(500).json({ error: "server error" });
  }
};

module.exports = {
  displayCommentsController,
  postCommentController,
  displayMyCommentsController,
  deleteCommentController,
};
