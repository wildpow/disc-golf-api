const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gameSchema = new Schema({
  users: [{ type: Schema.Types.ObjectId, ref: "User" }],
  course: { type: Schema.Types.ObjectId, ref: "Course" },
  scores: [{ type: Schema.Types.ObjectId, ref: "Score" }],
  finished: Boolean,
  startDate: Date,
  endDate: Date,
  _id: Schema.Types.ObjectId
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
