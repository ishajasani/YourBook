const express = require("express");
const router = express.Router();
const User = require('../models/User');

//Create a user using: POST "/api/auth". Doesn't require auth

router.post("/", (req, res) => {
  // console.log(req.body);
  const user = User(req.body);
  user.save();
  res.send(req.body);
  res.json([]);
});

module.exports = router;