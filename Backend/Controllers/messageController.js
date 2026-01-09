const {
  postMessage,
  getMessage,
  deleteMessage,
} = require("../Models/messageModel");
const jwt = require("jsonwebtoken");
const postMessageController = async (req, res) => {
  const { message } = req.body;
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(400).json({ error: "token is missing" });
  }

  const decodedToken = jwt.decode(token);
  const userId = decodedToken.id;

  if (!userId) {
    return res.status(400).json({ error: "token exists must id is missing" });
  }

  if (!message) {
    return res.status(400).json({ error: "message is missing" });
  }

  try {
    const newMessage = await postMessage(message, userId);

    if (!newMessage) {
      console.log("newMessage is missing");
      return res.status(500).json({ error: "error with model" });
    }

    return res.status(201).json(newMessage);
  } catch (error) {
    return res.status(500).json({ error: "error with messageController" });
  }
};

const getMessageController = async (req, res) => {
  try {
    const message = await getMessage();
    if (!message) {
      return res.status(404).json({ error: "messages cannot be found" });
    }
    return res.status(200).json(message);
  } catch (error) {
    return res.status(500).json({ error: "error with getMessageController" });
  }
};
const deleteMessageController = async (req, res) => {
  const { postId } = req.params;

  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res
      .status(401)
      .json({ error: "Missing/invalid Authorization header" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // ✅ verify
    const userId = decoded.id; // or decoded.userId depending on your token

    const deleted = await deleteMessage(postId, userId);

    if (!deleted) {
      // either post doesn't exist OR it exists but isn't theirs
      return res.status(403).json({ error: "Not allowed to delete this post" });
    }

    return res.status(200).json({deleted, isOwnersPost: true});
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = {
  postMessageController,
  getMessageController,
  deleteMessageController,
};
