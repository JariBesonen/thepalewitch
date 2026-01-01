const { displayComments, postComment } = require("../Models/commentModel");

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
  console.log("controller reached");
  const { id } = req.params;
  console.log(newComment);
  console.log(id);
  try {
    const commentPosted = await postComment(newComment, id);
    
    return res.status(201).json({ message: "posted", commentPosted });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "server issue within comments postComment" });
  }
};

module.exports = { displayCommentsController, postCommentController };
