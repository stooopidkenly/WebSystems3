const express = require("express");
const path = require("path");
const app = express();

const hostname = "127.0.0.1";
const port = 8080;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

//middlewares
app.use('/dashboard', (req, res, next) => {
  console.log('Landing Page visited');
  next();
});
app.use('/tables', (req, res, next) => {
  console.log('List of Basic TABLES Visited');
  next();
});
app.use('/charts', (req, res, next) => {
  console.log('List of Basic CHARTS Visited');
  next();
});

app.get('/dashboard', (req, res) => {
  const users = [{
    "id": "1",
    "firstname": "Alden Reyes",
    "progress": "85",
    "amount": "$250.50",
    "deadline": "April 15, 2026"
  },
  {
    "id": "2",
    "firstname": "Maria Santos",
    "progress": "60",
    "amount": "$120.00",
    "deadline": "May 10, 2026"
  },
  {
    "id": "3",
    "firstname": "Carlos Mendoza",
    "progress": "45",
    "amount": "$89.99",
    "deadline": "June 1, 2026"
  },
  {
    "id": "4",
    "firstname": "Liza Cruz",
    "progress": "90",
    "amount": "$310.75",
    "deadline": "April 25, 2026"
  },
  {
    "id": "5",
    "firstname": "Kevin Tan",
    "progress": "70",
    "amount": "$199.99",
    "deadline": "May 30, 2026"
  },
  {
    "id": "6",
    "firstname": "Angela Lopez",
    "progress": "55",
    "amount": "$140.20",
    "deadline": "June 18, 2026"
  },
  {
    "id": "7",
    "firstname": "Joshua Lim",
    "progress": "30",
    "amount": "$75.00",
    "deadline": "July 5, 2026"
  },
  {
    "id": "8",
    "firstname": "Patricia Gomez",
    "progress": "95",
    "amount": "$420.10",
    "deadline": "April 12, 2026"
  },
  {
    "id": "9",
    "firstname": "Daniel Aquino",
    "progress": "80",
    "amount": "$260.00",
    "deadline": "May 22, 2026"
  },
  {
    "id": "10",
    "firstname": "Samantha Lee",
    "progress": "50",
    "amount": "$110.45",
    "deadline": "June 30, 2026"
  }
];
const pieData = [
  {
    pie1: 50,
    pie2: 20,
    pie3: 10,
    pie4: 20
  }
]
res.render('index', { users, pieData });
  
});

// app.get('/profile', (req, res) => {
//   res.render('profile',
//     {
//       name: "John Kenly Pamor",
//       section: "BSIT 3E"
//     }
//   );
// });

app.get('/tables', (req, res) => {
  res.render('basic-table');
});

app.get('/charts', (req, res) => {
  res.render('chartjs');
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/dashboard`);
});

module.exports = app;