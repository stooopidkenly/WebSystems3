const express = require('express');
const app = express();

const hostname = "127.0.0.1";
const port = 8080;

// 1. A Normal Route
app.get('/', (req, res) => {
    res.send('Everything is working fine!');
});

// 2. A Route that triggers an error
app.get('/broken', (req, res, next) => {
    const error = new Error('Something went wrong!');
    error.status = 500;
  
    // Passing anything to next()
    // tells Express an error occurred and jumps straight to error middleware.
    next(error); 
});

// 3. 404 Handler (Catch-all)
// This isn't technically "error middleware," but it creates an error 
// if no other routes matched the request.
app.use((req, res, next) => {
    const err = new Error('Page Not Found');
    err.status = 404;
    next(err);
});

// 4. Centralized Error-Handling Middleware
// MUST have all 4 arguments: (err, req, res, next)
app.use((err, req, res, next) => {
    console.error(`[Error Log]: ${err.message}`);

    const statusCode = err.status || 500;
  
    res.status(statusCode).json({
        status: 'error',
        message: err.message,
    });
});

app.listen(port, hostname, () => {
    console.log(`Error-handling demo running at http://${hostname}:${port}`);
});