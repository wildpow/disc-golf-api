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

// Took me awhile to figure this out just to find out I don't need this route
// to wake up Heroku on the client just any route. I'll keep this code around to
// admire it a little more
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
