const db = require('../config/config');

const Animalid = {};

Animalid.selectAllBySpecies = (especieId, result) => {
  const sql = `
    SELECT animales.*, Especies.Nombre_Especie
    FROM animales
    INNER JOIN Especies ON animales.ID_Especie = Especies.ID_Especie
    WHERE animales.ID_Especie = ?
    AND animales.ID_Estado != 1;
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
