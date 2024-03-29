const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');
// Importar rutas
const animalRoutes = require('./routes/animalRoutes');
const usersRoutes = require('./routes/usersRouters');

const port = process.env.PORT || 3000;
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.disable('x-powered-by');
app.set('port', port);

// LLamando las rutas
animalRoutes(app);
usersRoutes(app);


// Dirección IP V4 de la máquina, consultar con ipconfig

<<<<<<< HEAD
server.listen(3000,  '192.168.101.9' || 'localhost', function() {

=======
server.listen(port, '192.168.128.11' || 'localhost', function() {
>>>>>>> d592dd2a8778249b3fa75450e1fd3356bf124f00
    console.log('Aplicación de NodeJS ' + process.pid + ' inicio en el puerto ' + port);
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del Backend');
});

// Error handler
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});