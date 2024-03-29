const animalController = require('../controllers/animalController');

module.exports = (app) => {
  // Ruta para crear un animal
  app.post('/api/animales/create', animalController.createAnimal);
  
  // Ruta para obtener todos los animales
  app.get('/api/animales', animalController.getAllAnimals);

  // Ruta para obtener animales por especie
  app.get('/api/animales/especie/:especieId', animalController.getAllAnimalsBySpecies);
};
