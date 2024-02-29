const express = require("express");

const staticRouter = express.Router();

staticRouter.get("/", (req, res) => {
  res.render("home");
});

staticRouter.get("/signup", (req, res) => {
  res.render("signup");
});

staticRouter.get("/signin", (req, res) => {
  res.render("signin");
});

module.exports = staticRouter;
