const express = require("express");
const mongoose = require("mongoose");
const Profile = require("./Profile");
const Conversation = require("./Conversation");
const Message = require("./Message");
const { randomUUID } = require('crypto');
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(
  cors()
); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));;


app.get('/conversations/:id', async (req, res) => {
  const index = parseInt(req.params.id);
  const conversation = await getConversation(index);
  return res.json(conversation);
});

app.post('/conversations/:id', async (req, res) => {
  const index = req.params.id;
  const newMessage = req.body.newMessage;
  const messageIndex = randomUUID();

  const message = await Message.insertOne(
    {  
      "id": messageIndex,
      "conversationid": index,
      "user": "Tom",
      "currentUser":true,
      "time": "00:24",
      "message": newMessage,
      "readStatus": false
    }
  );

  const conversation = await Conversation.findOneAndUpdate(
    {id: index},
    {
      $push: 
      { "messageids" : messageIndex}
    }
  );
});

app.get('/dashboard', async (req, res) => {
  const dashboard = await getDashboard();
  return res.json(dashboard);
});


app.get('/profiles/:id', async (req, res) => {
  const index = parseInt(req.params.id);
  const profile = await getProfile(index);
  return res.json(profile);
});



async function getDashboard () {
  const conversations = await Conversation.find();

  const dashboard = await Promise.all(
    conversations.map(async (conversation) => {
      const lastMessageId = conversation.messageids[conversation.messageids.length - 1];

      const lastMessage = await Message.findOne({
        id: lastMessageId,
        conversationid: conversation.id
      });

      return {
        id: conversation.id,
        name: conversation.name,
        avatar: conversation.avatar,
        lastMessage: lastMessage
      };
    })
  );

  return dashboard;
}

async function getProfile (id) {
  const profile = await Profile.findOne({ id: id });
  return profile;
}

async function getConversation (id) {
  const conversation = await Conversation.findOne({ id: id });
  const messages = await Message.find({ conversationid: id });
  return {
    id: conversation.id,
    name: conversation.name,
    avatar: conversation.avatar,
    messages: messages
  };
}


const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
});



module.exports = app;
