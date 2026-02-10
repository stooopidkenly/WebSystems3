const express = require("express");

// import the route modules
const adminRouter = require("./routers/admin");

const app = express();
const hostname = "127.0.0.1";
const port = 8080;

// mount all routes from the admin route modules
app.use('/admin', adminRouter);

app.get('/', (req, res) => {
	res.send("Home");
});

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}`);
});