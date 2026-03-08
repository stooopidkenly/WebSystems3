const path = require("path");

const filePath = "/users/docs/file.txt";

console.log("Directory Name: ", path.dirname(filePath));
console.log("File Name: ", path.basename(filePath));
console.log("File Extension: ", path.extname(filePath));