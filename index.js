require("dotenv").config();
const express = require("express");

const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello vijay");
});

app.get("/twitter", (req, res) => {
  res.send("vijay dada");
});

app.listen(process.env.PORT, () => {
  console.log(`exaple app listen port on ${port}`);
});
