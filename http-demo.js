const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200,
        {"Content-Type" : "text/plain"}
    );

    res.end("Hello World! This is my first web server!");
});

server.listen(port, hostname, () => {
    console.log("Server Running at http://" + hostname + ":" + port);
});
