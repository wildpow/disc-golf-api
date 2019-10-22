const router = require("express").Router();
var https = require("https");
// Not working!!!!!!!!!!!!!
// const mongoose = require("mongoose");
// const connection = mongoose.connection;
// function A() {
//   return new Promise(resolve => {
//     connection.once("open", res => {
//       return resolve(res);
//     });
//   });
// }

function herokuWakeUp() {
  return new Promise(resolve => {
    https.get("https://aw-disc-golf.herokuapp.com/", res => {
      return resolve("heroku awake");
    });
  });
}

// const asyncMiddleware = fn => (req, res, next) => {
//   Promise.resolve(fn(req, res, next)).catch(next);
// };
router.get("/", async (req, res) => {
  // var a = await A();
  var awake = await herokuWakeUp();
  res.status("200").json(awake);
});

module.exports = router;
