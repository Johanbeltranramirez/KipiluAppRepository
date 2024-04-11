const db = require('../config/config');

const formulario_delete = {};

// Método para eliminar un formulario por medio de su ID
formulario_delete.delete = (IdForm, result) => {
  const sql = `
    DELETE FROM formularios
    WHERE ID_Formulario = ?
  `;

  db.query(sql, [IdForm], (err, res) => {
    if (err) {
      console.log('Error al eliminar el formulario: ', err);
      result(err, null);
    } else {
      console.log('formulario eliminado correctamente');
      result(null, { message: 'formulario eliminado correctamente' });
    }
  });
};

module.exports = formulario_delete;