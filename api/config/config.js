const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
<<<<<<< HEAD

  password: '1140914064',
  database: 'kipilu' 
=======
  password: 'manuelq12345',
  database: 'kipilu'
>>>>>>> d592dd2a8778249b3fa75450e1fd3356bf124f00
});

db.connect(function(err) {
  if (err) throw err;
  console.log('Base de datos conectada');
});

module.exports = db;
