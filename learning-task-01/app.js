const http = require('http');
const os = require('os');
const fs = require('fs');
const studentHelper = require('./studentHelper.js');

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200,
        {"Content-Type" : "text/html"}
    );

    if(req.url === "/"){
        res.write("<h1>Dashboard</h1>");
        res.write("<h1>John Kenly Pamor</h1>")
    }else if(req.url === "/about-os"){
        res.write("<h1>About-OS</h1>");
        res.write("<h1>Arch: " + os.arch() + "</h1>");
        res.write("<h1>TotalMem: " + os.totalmem() + "</h1>");
        res.write("<h1>Release: " + os.release() + "</h1>");
        res.write("<h1>Type: " + os.type() + "</h1>");
    }else if(req.url === "/pro-file"){
        res.write("<h1>Pro-file</h1>");
        res.write(fs.readFileSync("pro.txt", "utf-8"));
    }else if(req.url === "/author"){
        res.write("<h1>Author</h1>");
        res.write("<p>" +studentHelper.school + "</p>")
        res.write("<p>" +studentHelper.studentLevel(3)+ "</p>")
        res.write("<p>" +studentHelper.averageGrade(87, 94, 82, 91, 89)+ "</p>")
        res.write("<p>" +studentHelper.isPassing(36) + "</p>")
    }
    else{
        res.write("<h1>Page Not Found!</h1>")
    }

    res.end();
});

server.listen(port, hostname, () => {
    console.log("Server Running at http://" + hostname + ":" + port);
});

