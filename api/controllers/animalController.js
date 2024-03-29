const Animal = require('../models/animal');
const AnimalGet = require('../models/animalget'); // Renombramos el segundo módulo como AnimalGet

module.exports = {
  createAnimal(req, res) {
    const animal = req.body; // Datos del animal
    Animal.create(animal, (err, data) => {
      if (err) {
        return res.status(501).json({
          success: false,
          message: 'Error al crear el animal',
          error: err
        });
      }
      return res.status(201).json({
        success: true,
        message: 'Animal creado correctamente',
        data: data // Id del animal creado
      });
    });
  },

  getAllAnimals(req, res) {
    AnimalGet.getAll((err, animals) => { // Utilizamos AnimalGet en lugar de Animal
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Error al obtener los animales',
          error: err
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Animales obtenidos correctamente',
        data: animals // Datos de todos los animales
      });
    });
  }
};
