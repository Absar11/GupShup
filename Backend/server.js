const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("app is runnig");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.bgCyan);
});
