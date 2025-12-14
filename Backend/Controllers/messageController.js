const { postMessage, getMessage } = require("../Models/messageModel");
const jwt = require("jsonwebtoken");
const postMessageController = async (req, res) => {
  const { message } = req.body;
  const authorization = req.headers.authorization;
  const token = authorization.split(" ")[1];
  if (!token) {
    return res.status(400).json({ error: "token is missing" });
  }
  console.log(token);
  const decodedToken = jwt.decode(token);
  const userId = decodedToken.id;
  console.log(userId);
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
    console.log(newMessage);
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

module.exports = { postMessageController, getMessageController };
