const express = require("express");
const userRouter = express.Router();
const User = require("../Models/user");

userRouter.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Error occurred while retrieving users", err);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = userRouter;
