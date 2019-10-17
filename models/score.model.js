const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  game: { type: Schema.Types.ObjectId, ref: "Game" },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  score: Number,
  hole: Number,
  course: { type: Schema.Types.ObjectId, ref: "Course" }
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;
