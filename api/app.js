const express = require("express");
const mongoose = require("mongoose");
const Dashboard = require("./Dashboard");
const Profile = require("./Profile");
const { conversations } = require("./messages.json");
const cors = require("cors");
require('dotenv').config();

const app = express();
app.use(
  cors()
); 

mongoose.connect(process.env.MONGO_URI);


app.get('/conversations', (req, res) => {
  return res.json(conversations);
});

app.get('/conversations/:id', (req, res) => {
  const index = parseInt(req.params.id);
  return res.json(conversations[index-1]);
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
  const dashboard = await Dashboard.find();
  return dashboard;
}

async function getProfile (id) {
  const profile = await Profile.findOne().where("id").equals(id);
  return profile;
}


const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
});



module.exports = app;
