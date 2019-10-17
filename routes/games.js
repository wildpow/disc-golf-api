const router = require("express").Router();
const Games = require("../models/user.model");

router.route("/").get((req, res) => {
  Games.find()
    .then(games => res.json(games))
    .catch(err => res.status(400).json("Error: + err"));
});

router.route("/:id").get((req, res) => {
  Games.findById(req.params.id)
    .then(game => res.json(game))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const users = req.body.users;
  const course = req.body.course;
  const newGame = new Game({
    users,
    course
  });
  newGame
    .save()
    .then(() => res.json("Game added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Game.findByIdAndDelete(req.params.id)
    .then(() => res.json("Game deleted."))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
