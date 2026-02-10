const express = require('express');
const app = express();

const hostname = "127.0.0.1";
const port = 8080;

// First middleware
app.use((req, res, next) => {
  console.log(`First Middleware`);
  next();
});

// Second middleware
app.use((req, res, next) => {
  console.log(`Second Middleware`);
  next();
});

// Route handler
app.get('/', (req, res) => {
  res.send(`Home Page!`);
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});