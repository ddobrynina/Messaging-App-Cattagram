import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import Profile from "./Profile.js";
import Conversation from "./Conversation.js";
import Message from "./Message.js";
import { randomUUID } from 'crypto';
import cors from 'cors';



const app = express();
app.use(
  cors()
); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mongoUri = process.env.MONGO_URI;
if (!mongoUri) {
  throw new Error("Missing MONGO_URI environment variable");
} 

mongoose.connect(mongoUri)
  .then(() => console.log("Database connected!"))
  .catch(err => console.log(err));;


app.get('/conversations/:id', async (req, res) => {
  const index = req.params.id;
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
  const index = req.params.id;
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

async function getProfile (id:string) {
  const profile = await Profile.findOne({ id: id });
  return profile;
}

async function getConversation (id:string) {
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



export default app;
