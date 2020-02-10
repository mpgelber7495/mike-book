var mysql = require("mysql2");

var connection = mysql.createConnection(
  process.env.JAWSDB_URL || {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "mike_book"
  }
);

module.exports = connection;
