const express = require("express");
const path = require("path"); // require the PATH 
const app = express();

const hostname = "127.0.0.1";
const port = 8080;

//Built-in Middleware (Serves the Static Files)

// __dirname is the project folder (middleware2-demo/public)
// SETTING VIRTUAL PATH
app.use('/home', express.static(path.join('public')));

app.get('/', (req, res) => {
    res.send('Home Page');
})

app.listen(port, hostname, () => {
    console.log(`Server Running at http://${hostname}:${port}`);
})