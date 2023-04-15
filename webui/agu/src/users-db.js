const mysql = require('mysql');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL server!');
});

// Create a table to store user data
const createTableQuery = 'CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))';
connection.query(createTableQuery, (err, results) => {
  if (err) throw err;
  console.log('Created the users table!');
});

module.exports = connection;