const express = require("express");
const router = express.Router();
const {
  postMessageController,
  getMessageController,
  deleteMessageController,
  displayMyPostsController
} = require("../Controllers/messageController");

router.post("/post", postMessageController);
router.get("/display", getMessageController);
router.delete('/deletePost/:postId', deleteMessageController);
router.get('/displayMyPosts', displayMyPostsController);

module.exports = router;
