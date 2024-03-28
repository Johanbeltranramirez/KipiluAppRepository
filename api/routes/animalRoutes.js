const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

// Rutas para la creación, actualización, eliminación y obtención de animales
router.post('/create', animalController.createAnimal);
router.get('/:id', animalController.getAnimalById);
router.get('/', animalController.getAllAnimals);
router.put('/:id', animalController.updateAnimal);
router.delete('/:id', animalController.deleteAnimal);

module.exports = router;
