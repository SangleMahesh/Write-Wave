const express = require("express");
const handleUserSignIn = require("../Controllers/signinHandler");
const validateUserByToken = require("../Middlewares/validateToken");

const signinRouter = express.Router();

signinRouter.post("/", validateUserByToken, handleUserSignIn);

module.exports = signinRouter;
