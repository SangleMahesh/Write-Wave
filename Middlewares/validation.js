async function validateUserData(req, res, next) {
  // Validate password length
  req
    .check("password", "Password must be at least 6 characters long")
    .isLength({
      min: 6,
      max: 12,
    });

  // Check for validation errors
  const errors = req.validationErrors();
  if (errors && errors.length > 0) {
    return res.status(400).json({ errors: errors[0]["msg"] });
  }

  // If no validation errors, proceed to the next middleware
  next();
}

module.exports = validateUserData;
