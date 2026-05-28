const express = require("express");
const app = express();
const dotenv = require("dotenv").config({ override: true });

app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
