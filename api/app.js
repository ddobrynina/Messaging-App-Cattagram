const express = require("express");
const { conversations, dashboard, profiles } = require("./messages.json");
const cors = require("cors");

const app = express();
app.use(
  cors()
); 
app.get('/conversations', (req, res) => {
  return res.json(conversations);
});

app.get('/conversations/:id', (req, res) => {
  const index = parseInt(req.params.id);
  return res.json(conversations[index-1]);
});

app.get('/dashboard', (req, res) => {
  return res.json(dashboard);
});

app.get('/profiles', (req, res) => {
  return res.json(profiles);
});

app.get('/profiles/:id', (req, res) => {
  const index = parseInt(req.params.id);
  return res.json(profiles[index-1]);
});


const PORT = 3000;

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }
});



module.exports = app;
