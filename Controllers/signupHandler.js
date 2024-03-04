const User = require("../Models/user");

async function handleSignUp(req, res) {
  const { fullName, email, password } = req.body;
  const newUser = new User({
    fullName,
    email,
    password,
  });
  try {
    await newUser.save();
    res.redirect("/");
  } catch (error) {
    console.error("Error occurred while saving user:", error);
    return res.status(500).json({ error: "Failed to create user" });
  }
}

module.exports = handleSignUp;
