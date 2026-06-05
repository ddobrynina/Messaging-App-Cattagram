const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    "id": String,
    "conversationid": String,
    "user": String,
    "currentUser": Boolean,
    "time": String,
    "message": String,
    "readStatus": Boolean     
});

module.exports = mongoose.model("Message", messageSchema);
