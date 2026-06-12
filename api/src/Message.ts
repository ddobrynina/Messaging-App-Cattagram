import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
    "id": String,
    "conversationid": String,
    "user": String,
    "currentUser": Boolean,
    "time": String,
    "message": String,
    "readStatus": Boolean     
});

const Message = model("Message", messageSchema);

export default Message;
