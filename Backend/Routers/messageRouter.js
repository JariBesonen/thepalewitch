const express = require("express");
const router = express.Router();
const {
  postMessageController,
  getMessageController,
} = require("../Controllers/messageController");

router.post("/post", postMessageController);
router.get("/display", getMessageController);

module.exports = router;
