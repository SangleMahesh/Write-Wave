const express = require("express");
const handleSignup = require("../Controllers/signupHandler");
const validateUserData = require("../Middlewares/validation");
const signupRouter = express.Router();

signupRouter.post("/", validateUserData, handleSignup);

module.exports = signupRouter;
