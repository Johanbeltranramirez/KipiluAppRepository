const db = require('../config/config');

const Animalid = {};

Animalid.selectAllBySpecies = (especieId, result) => {
  const sql = `
    SELECT Animales.*, Especies.Especie_Animal
    FROM Animales
    INNER JOIN Especies ON Animales.Especie_Animal = Especies.ID_Especie
    WHERE Animales.Especie_Animal = ?
    AND Animales.Estado_Animal != 1;
  `;

  db.query(sql, [especieId], (err, res) => {
    if (err) {
      console.log('Error al seleccionar los animales por especie: ', err);
      result(err, null);
    } else {
      console.log('Animales seleccionados por especie: ', res);
      result(null, res);
    }
  });
};

module.exports = Animalid;
