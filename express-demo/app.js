const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 8080;

//GET METHOD
app.get("/", (req, res) => {
  res.send("Welcome to Express.js");
});
// POST METHOD
app.post("/", (req, res) => {
  res.send("This is a POST METHOD");
});

// PUT METHOD
app.put("/", (req, res) => {
  res.send("This is a PUT METHOD");
});

// PATCH
app.patch("/", (req, res) => {
  res.send("This is a PATCH METHOD");
});

//DELETE
app.delete("/", (req, res) => {
  res.send("This is a DELETE METHOD");
});

//all
app.all("/any", (req, res) => {
  res.send("PAGE NOT FOUND!");
});

app.listen(port, hostname, () => {
  console.log(`Server Running at http://${hostname}:${port}`);
});
