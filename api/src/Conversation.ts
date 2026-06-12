import { Schema, model } from 'mongoose';

const conversationSchema = new Schema({
        "name": String,
        "id": String,
        "avatar": String,
        "messageids": [String]
});

const Conversation = model("Conversation", conversationSchema);

export default Conversation;