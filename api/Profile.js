const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    "name": String,
    "id": Number,
    "avatar": String,
    "bio": String
});

module.exports = mongoose.model("Profile", profileSchema);