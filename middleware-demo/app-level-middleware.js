const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 8080;

// Global Application-level Middleware
// This runs for every single request to the server.
app.use((req, res, next) => {
	const timestamp = new Date().toISOString();
	console.log(`Time: ${timestamp}`);
	next();
});

// Path-specific Application-level Middleware
// This only runs for requests starting with /admin
app.use('/admin', (req, res, next) => {
	console.log(`Admin access attempt detected`);
	next();
});

app.get('/', (req, res) => {	
	res.send(`Welcome to Homepage!`);
});

app.get('/admin', (req, res) => {
	res.send(`Welcome to Admin Page!`);
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});