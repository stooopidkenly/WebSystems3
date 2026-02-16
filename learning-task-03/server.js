const express = require("express");
const app = express();
const hostname = "127.0.0.1";
const port = 8080;

// import routes
const studentRouter = require('./routes/students.js');
const subjectRouter = require('./routes/subjects.js');

// GLOBAL MIDDLEWARE
app.use((req, res, next) => {
	console.log(`Time: ${new Date().toISOString()}`);
	console.log(`HTTP Method: ${req.method}`);
	console.log(`URL: ${req.url}`);
	next();
});

//Only runs for /students
app.use('/students', (req, res, next) => {
    console.log("Middleware A executed");
    next(); 
});

//Only runs for /subjects
app.use('/subjects', (req, res, next) => {
    console.log("Middleware B executed");
    next(); 
});	

// Routes
app.use('/students', studentRouter);
app.use('/subjects', subjectRouter);

app.get('/', (req, res) => {
	res.send("John Kenly Pamor");
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});
