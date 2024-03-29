const db = require('../config/config');

const Animal = {};

Animal.create = (animal, result) => {
  const sql = `
    INSERT INTO animales (
      Nombre,
      Raza,
      Sexo,
      Edad,
      ID_Estado,
      ID_Especie,
      Imagen
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      animal.nombre,
      animal.raza,
      animal.sexo,
      animal.edad,
      animal.ID_Estado,
      animal.ID_Especie, // Nuevo campo para la especie
      animal.imagen
    ],
    (err, res) => {
      if (err) {
        console.log('Error al crear el animal: ', err);
        result(err, null);
      } else {
        console.log('Id del nuevo animal: ', res.insertId);
        result(null, res.insertId);
      }
    }
  );
};

module.exports = Animal;
