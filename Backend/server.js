const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();
const app = express();
app.use(express.json()); //middleware

app.get("/", (req, res) => {
  res.send("app is runnig");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.bgCyan);
});
