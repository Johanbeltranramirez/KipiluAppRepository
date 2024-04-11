const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost: 3000',
  user: 'root',
  password: 'SKZpina143vanessa',
  database: 'kipiludb'
});

db.connect(function(err) {
  if (err) throw err;
  console.log('Base de datos conectada');
});

module.exports = db;
