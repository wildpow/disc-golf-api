const router = require("express").Router();
const Games = require("../models/game.model");

router.route("/").get((req, res) => {
  Games.find()
    .populate("users")
    .populate("course")
    .exec()
    .then(games => res.json(games))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Games.findById(req.params.id)
    .then(game => res.json(game))
    .catch(err => res.status(400).json("Error: " + err));
});
router.route("/user/:id").get((req, res) => {
  Games.find({ users: req.params.id })
    .then(game => res.json(game))
    .catch(err => res.status(400).json("Error: " + err));
});
// NOT WORKING!!!!!!!!!!!
router.route("/add").post((req, res) => {
  const users = req.body.users;
  const course = req.body.course;
  const newGame = new Games({
    course,
    users
  });
  newGame
    .save()
    .then(() => res.json("game added!"))
    .catch(err => res.status(400).json("Error: " + err));
});
//////////////////////////////////////////////////////////

router.route("/:id").delete((req, res) => {
  Games.findByIdAndDelete(req.params.id)
    .then(() => res.json("Game deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
