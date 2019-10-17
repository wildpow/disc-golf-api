const router = require("express").Router();
const Course = require("../models/course.model");

router.route("/").get((req, res) => {
  User.find()
    .then(course => res.json(course))
    .catch(err => res.status(400).json("Error: + err"));
});

router.route("/:id").get((req, res) => {
  Course.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const holeCount = req.body.holeCount;
  const holes = req.body.holes;

  const newCourse = new User({
    name,
    holeCount,
    holes
  });
  newCourse
    .save()
    .then(() => res.json("Course added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Course.findByIdAndDelete(req.params.id)
    .then(() => res.json("Course deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
