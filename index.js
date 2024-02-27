const express = require("express");
const dotenv = require("dotenv");
const e = require("express");
dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
