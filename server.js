const express = require("express");
// const router = require("express").Router();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

const userRouter = require("./routes/users");
const courseRouter = require("./routes/courses");
const gameRouter = require("./routes/games");
const wakeUpRouter = require("./routes/wakeUp");

app.use("/", wakeUpRouter);
app.use("/user", userRouter);
app.use("/course", courseRouter);
app.use("/game", gameRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
