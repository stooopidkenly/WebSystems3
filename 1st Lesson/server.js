const http = require("http");
const utils = require("./utils.js");

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
        res.write("<h1>Hi! I am John Kenly</h1>")
    }else if(req.url === "/contact"){
        res.write("<h1>Contact Page</h1>");
        res.write("<h1>My Contact Number is: </h1>" + utils.contact);
    }else if(req.url === "/utility"){
        res.write("<h1>Utility Page</h1>");
        res.write("<p>" +utils.add(13, 15) + "</p>")
        res.write("<p>" +utils.multiply(17, 8) + "</p>")
        res.write("<p>" +utils.color(3) + "</p>")
        res.write("<p>" +utils.age + "</p>")
        res.write("<p>" +utils.greeting + "</p>")
    }
    else{
        res.write("<h1>Page Not Found!</h1>")
    }


    res.end();
});

server.listen(port, hostname, () => {
    console.log("Server Running at http://" + hostname + ":" + port);
});
