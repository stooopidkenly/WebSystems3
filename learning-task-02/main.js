const express = require('express');
const app = express();
const hostname = "127.0.0.1";
const port = 8080;

const mathUtils = require('./mathutils.js');

//get method
app.get('/', (req, res) => {
    res.send('Welcome to Learning Task 2');
    });
// ABOUT PAGE
app.get('/about', (req, res) => {
    res.send('This application demonstrates Express Routing Laboratory');
});

// CONTACT PAGE
app.get('/contact', (req, res) => {
    res.send('Contact us at: support@expresslab.com');
});

// STUDENT ROUTE
app.get('/student/:name/:program', (req, res) => {
    res.send(`Student Name: ${req.params.name} <br> Program: ${req.params.program}`);
});

// PRODUCT ROUTE
app.get('/product/:item/:price', (req, res) => {
    res.send(`Product: ${req.params.item} <br> Price:  ₱${req.params.price}`);
});

// QUERY PARAMETERS
app.get('/calculate', (req, res) => {
    (`${req.query.num1}, ${req.query.num2}, ${req.query.op}`);
    if(req.query.op == 'multiply'){
        const answer = mathUtils.multiply(req.query.num1, req.query.num2);
        res.send(`Result: ${answer}`);
    }else if(req.query.op == 'subtract'){
        const answer = mathUtils.subtract(req.query.num1, req.query.num2);
        res.send(`Result: ${answer}`);
    }else if(req.query.op == 'add'){
        const answer = mathUtils.add(req.query.num1, req.query.num2);
        res.send(`Result: ${answer}`);
    }else if(req.query.op == 'divide'){
        const answer = mathUtils.divide(req.query.num1, req.query.num2);
        res.send(`Result: ${answer}`);
    }else{
        res.send("Operator Not Valid");
    }
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
