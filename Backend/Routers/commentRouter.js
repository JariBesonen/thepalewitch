const express = require("express");
const router = express.Router();
const {
  displayCommentsController,
  postCommentController,
  deleteCommentController,
  displayMyCommentsController
} = require("../Controllers/commentController");
router.get("/display/:id", displayCommentsController);
router.post("/post/:id", postCommentController);
router.delete("/deleteComment/:id", deleteCommentController);
router.get("/displayMyComments", displayMyCommentsController);

module.exports = router;
