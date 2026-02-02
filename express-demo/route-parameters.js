const express = require('express');
const app = express();
const hostname = "127.0.0.1";
const port = 8080;


//get method
app.get('/', (req, res) => {
    res.send('ROUTE PARAMETER');
    });

app.get('/about', (req, res) => {
    res.send('This is the about page');
});

app.get('/users/:userId/books/:bookId', (req, res) => {
    // use req.params. <routeParameter> to access the value
    res.send(`User: ${req.params.userId}, Book: ${req.params.bookId}`);
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});