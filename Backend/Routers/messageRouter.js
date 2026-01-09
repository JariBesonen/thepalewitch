const express = require("express");
const router = express.Router();
const {
  postMessageController,
  getMessageController,
  deleteMessageController
} = require("../Controllers/messageController");

router.post("/post", postMessageController);
router.get("/display", getMessageController);
router.delete('/deletePost/:postId', deleteMessageController);

module.exports = router;
