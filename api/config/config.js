const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
<<<<<<< HEAD
  password: '1140914064',
  database: 'kipilu' 
=======
  password: '010706Yo',
  database: 'kipilu'
>>>>>>> 343f4a52900dc433a0b5bf4d27c9ddae2171ee14
});

db.connect(function(err) {
  if (err) throw err;
  console.log('Base de datos conectada');
});

module.exports = db;
