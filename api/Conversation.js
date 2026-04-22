const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
        "name": String,
        "id": String,
        "avatar": String, 
        "messages" :[
        {
            "id": String,
            "user": String,
            "currentUser": Boolean,
            "time": String,
            "message": String,
            "readStatus": Boolean
        }
        ]
});

module.exports = mongoose.model("Conversation", conversationSchema);