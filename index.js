const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const dotenv = require("dotenv");
dotenv.config();

const staticRouter = require("./Routes/staticRouter");
const signupRouter = require("./Routes/signupRouter");
const signinRouter = require("./Routes/signinRouter");
const userRouter = require("./Routes/userRouter");

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Database connected successfully"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());
app.use(expressValidator());

app.set("view engine", "ejs");

app.use("/", staticRouter);
app.use("/signup", signupRouter);
app.use("/signin", signinRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
