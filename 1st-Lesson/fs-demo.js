const fs = require("fs");
// fs means File System

//Write to a file 
fs.writeFileSync("sample.txt", "This file was created using Node.js\n");
const demo = "This is a demo.";
fs.appendFileSync("sample.txt", demo + "\n" );



// Read from a file.
const content = fs.readFileSync("sample.txt", "utf8");

console.log(content);