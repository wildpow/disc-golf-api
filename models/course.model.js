const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    unique: true,
    required: true
  },
  holeCount: Number,
  holes: [holeSchema]
});

const holeSchema = new Schema({
  pare: Number,
  number: Number
});

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
