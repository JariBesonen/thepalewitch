const { postMessage, getMessage } = require("../Models/messageModel");


const postMessageController = async (req, res) => {
    const {message} = req.body;
    if(!message) {
        return res.status(400).json({error: "message is missing"});
    }
    try {
        const newMessage = await postMessage(message);
        return res.status(201).json(newMessage);
    }catch(error) {
        return res.status(500).json({error: 'error with messageController'});
    }
}

const getMessageController = async (req, res) => {
try {
const message = await getMessage();
if(!message) {
    return res.status(404).json({error: 'messages cannot be found'});
}
return res.status(200).json(message);
}catch(error) {
    return res.status(500).json({error: 'error with getMessageController'});
}
}


module.exports = {postMessageController, getMessageController};