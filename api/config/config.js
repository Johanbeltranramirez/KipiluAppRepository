const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'manuelq12345',
  database: 'kipilu'
});

db.connect(function(err) {
  if (err) throw err;
  console.log('Base de datos conectada');
});

module.exports = db;
