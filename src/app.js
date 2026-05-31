const express = require("express");
const app = express();
const dotenv = require("dotenv").config({ override: true });
const authRouter = require("./routes/auth.routes");
//to read the body data from request body
app.use(express.json());
//Cookie Parser
const cookieParser = require("cookie-parser");
app.use(cookieParser());

//Auth Routes
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
