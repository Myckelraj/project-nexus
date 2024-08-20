const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345", // replace with your MySQL password
  database: "techysoftware_db", // replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

// Example Route
app.get("/api/services", (req, res) => {
  connection.query("SELECT * FROM services", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Add more routes as needed...

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
