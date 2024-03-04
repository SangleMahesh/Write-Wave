async function validateUserData(req, res, next) {
  req
    .check("password", "Password must be at least 6 characters long")
    .isLength({
      min: 6,
      max: 12,
    });
  const errors = req.validationErrors();
  if (errors && errors.length > 0) {
    return res.status(400).json({ errors: errors[0]["msg"] });
  }

  next();
}

module.exports = validateUserData;
