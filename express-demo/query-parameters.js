const express = require('express');
const app = express();
const hostname = "127.0.0.1";
const port = 8080;


//get method
app.get('/', (req, res) => {
    res.send('QUERY PARAMETER');
    });

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

// QUERY PARAMETER
app.get('/search', (req, res) => {
    // use req.query <queryParameter> to access the value
    res.send(`User: ${req.query.user}, Book: ${req.query.book}`);
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
