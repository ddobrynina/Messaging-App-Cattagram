const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
        "name": String,
        "id": String,
        "avatar": String,
        "messageids": [String]
});

module.exports = mongoose.model("Conversation", conversationSchema);