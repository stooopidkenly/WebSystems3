const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200,
        {"Content-Type" : "text/html"}
    );

    if(req.url === "/"){
        res.write("<h1>Home Page</h1>");
    }else if(req.url === "/about"){
        res.write("<h1>About Page</h1>");
    }else if(req.url === "/Contact"){
        res.write("<h1>Contact Page</h1>");
    }else{
        res.write("<h1>Page Not Found!</h1>")
    }

    res.end();
});

server.listen(port, hostname, () => {
    console.log("Server Running at http://" + hostname + ":" + port);
});
