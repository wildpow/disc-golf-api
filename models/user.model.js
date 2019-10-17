const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userShema = new Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    // unique: true,
    lowercase: true
  },
  games: [{ type: Schema.Types.ObjectId, ref: "Game" }]
});

const User = mongoose.model("User", userShema);

module.exports = User;
