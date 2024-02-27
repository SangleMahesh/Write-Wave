const express = require("express");
const handleSignup = require("../Controllers/signupHandler");
const signupRouter = express.Router();

signupRouter.post("/", handleSignup);

module.exports = signupRouter;
