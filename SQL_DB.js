const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.PASSWORD,
  database: "wannabe_spotify",
  multipleStatements: true,
});

db.connect((err) => {
  if (err) throw err;
  console.log("database connected..");
});

module.exports = db;
