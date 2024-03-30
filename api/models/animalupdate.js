const db = require('../config/config');

const AnimalUpdate = {};

// Método para actualizar un animal por su ID
AnimalUpdate.update = (animalId, animalData, result) => {
  const { nombre, raza, sexo, edad, ID_Estado, ID_Especie, imagen } = animalData;
  
  const sql = `
    UPDATE animales
    SET 
      Nombre = ?,
      Raza = ?,
      Sexo = ?,
      Edad = ?,
      ID_Estado = ?,
      ID_Especie = ?,
      Imagen = ?
    WHERE ID_Animal = ?
  `;

  db.query(sql, [nombre, raza, sexo, edad, ID_Estado, ID_Especie, imagen, animalId], (err, res) => {
    if (err) {
      console.log('Error al actualizar el animal: ', err);
      result(err, null);
    } else {
      console.log('Animal actualizado correctamente');
      result(null, { message: 'Animal actualizado correctamente' });
    }
  });
};

module.exports = AnimalUpdate;
