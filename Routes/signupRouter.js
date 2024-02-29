const express = require("express");
const handleSignup = require("../Controllers/signupHandler");
const signupRouter = express.Router();

signupRouter.post("/", validateUserData, handleSignup);

module.exports = signupRouter;
