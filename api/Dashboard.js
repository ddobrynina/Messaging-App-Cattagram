const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema({
    "name": String,
    "id": Number,
    "avatar": String, 
    "lastMessage": {
        "currentUser": Boolean,
        "time": String,
        "message": String,
        "readStatus": Boolean
    }
});

module.exports = mongoose.model("Dashboard", dashboardSchema);