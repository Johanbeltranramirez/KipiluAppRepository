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
      Imagen
    ) VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      animal.nombre,
      animal.raza,
      animal.sexo,
      animal.edad,
      animal.ID_Estado,
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

Animal.findById = (id, result) => {
  const sql = `SELECT * FROM animales WHERE ID_Animal = ?`;
  db.query(sql, [id], (err, animal) => {
    if (err) {
      console.log('Error al consultar el animal: ', err);
      result(err, null);
    } else {
      console.log('Animal consultado: ', animal[0]);
      result(null, animal[0]);
    }
  });
};

Animal.getAll = (result) => {
  const sql = `SELECT * FROM animales`;
  db.query(sql, (err, animals) => {
    if (err) {
      console.log('Error al obtener los animales: ', err);
      result(err, null);
    } else {
      console.log('Animales obtenidos correctamente');
      result(null, animals);
    }
  });
};

Animal.updateById = (id, animal, result) => {
  const sql = `
    UPDATE animales
    SET Nombre = ?,
        Raza = ?,
        Sexo = ?,
        Edad = ?,
        ID_Estado = ?,
        Imagen = ?
    WHERE ID_Animal = ?
  `;
  const values = [
    animal.nombre,
    animal.raza,
    animal.sexo,
    animal.edad,
    animal.ID_Estado,
    animal.imagen,
    id
  ];

  db.query(sql, values, (err, res) => {
    if (err) {
      console.log('Error al actualizar el animal: ', err);
      result(err, null);
    } else {
      console.log('Animal actualizado correctamente');
      result(null, res);
    }
  });
};

Animal.deleteById = (id, result) => {
  const sql = `DELETE FROM animales WHERE ID_Animal = ?`;
  db.query(sql, [id], (err, res) => {
    if (err) {
      console.log('Error al eliminar el animal: ', err);
      result(err, null);
    } else {
      console.log('Animal eliminado correctamente');
      result(null, res);
    }
  });
};

module.exports = Animal;
