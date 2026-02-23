const express = require("express");
const app = express();
const path = require("path");

const hostname = "127.0.0.1";
const port = 8080;

// Set EJS as templating engine
// DEFAULT FOLDER IS VIEWS
app.set("view engine", "ejs");

// Set Custom Directory or folder
app.set("views", __dirname + "/views");

//to access public files use built in middleware
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/about", (req, res) => {
  //to render html/ejs files
  res.render("home");
});

app.get("/profile", (req, res) => {
  res.render("mypage", {
    title: "Profile Page",
    headerTitle: "Welcome to my Profile",
    contentTitle: "John Kenly Pamor",
    content: "I am a Bachelor of Science in Information Technology Student",
    year: "2027",
  });
});

app.get("/dashboard", (req, res) => {
  res.render("mypage", {
    title: "Dashboard Page",
    headerTitle: "Welcome to my Dashboard",
    contentTitle: "Dashboard",
    content: "This is an example content",
    year: "2027",
  });
});

app.get("/blank", (req, res) => {
  res.render("blank", {
    title: "BLANK PAGE",
    headerTitle: "Welcome to BLANK PAGE",
    contentTitle: "BLANK PAGE",
    content: "This is a BLANK PAGE",
    year: "2027",
  });
});

const studentsData = [
  { id: "001", name: "James", program: "BSIT" },
  { id: "002", name: "Peter", program: "BSCS" },
  { id: "003", name: "John", program: "BSIS" },
];

app.get("/students", (req, res) => {
  res.render("students", {
    title: "Students Page",
    headerTitle: "List of Students",
    contentTitle: "These are the students: ",
    content: "Students from CCS",
    year: "2027",
    students: studentsData
  });
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
