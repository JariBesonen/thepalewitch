const express = require("express");
const router = express.Router();
const {
  displayCommentsController,postCommentController
} = require("../Controllers/commentController");
router.get("/display/:id", displayCommentsController);
router.post("/post/:id", postCommentController);

module.exports = router;
