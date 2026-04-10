const express = require("express");
const { conversations, dashboard, profiles } = require("./messages.json");

const app = express();

app.get('/conversations', (req, res) => {
  return res.json(conversations);
});

app.get('/dashboard', (req, res) => {
  return res.json(dashboard);
});

app.get('/profiles', (req, res) => {
  return res.json(profiles);
});


const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
});

module.exports = app;
