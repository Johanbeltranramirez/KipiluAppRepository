const Animal = require('../models/animal');

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

  getAnimalById(req, res) {
    const id = req.params.id; // ID del animal a buscar
    Animal.findById(id, (err, animal) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Error al obtener el animal',
          error: err
        });
      }
      if (!animal) {
        return res.status(404).json({
          success: false,
          message: 'Animal no encontrado'
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Animal encontrado',
        data: animal
      });
    });
  },

  getAllAnimals(req, res) {
    Animal.getAll((err, animals) => {
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
        data: animals
      });
    });
  },

  updateAnimal(req, res) {
    const id = req.params.id;
    const animal = req.body;
    Animal.updateById(id, animal, (err, data) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Error al actualizar el animal',
          error: err
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Animal actualizado correctamente',
        data: data
      });
    });
  },

  deleteAnimal(req, res) {
    const id = req.params.id;
    Animal.deleteById(id, (err, data) => {
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Error al eliminar el animal',
          error: err
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Animal eliminado correctamente',
        data: data
      });
    });
  }
};
