const express = require("express");

// import the route modules
const usersRouter = require("./routers/users");
const booksRouter = require("./routers/books");

const app = express();
const hostname = "127.0.0.1";
const port = 8080;

// mount all routes from the route modules
app.use('/users', usersRouter);
app.use('/books', booksRouter);

app.get('/', (req, res) => {
	res.send("Home");
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});