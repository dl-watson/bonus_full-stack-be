const { Router } = require("express");
const Frog = require("../models/Frog");

module.exports = Router().post("/", (req, res, next) => {
  Frog.insert(req.body)
    .then((user) => res.send(user))
    .catch(next);
});
