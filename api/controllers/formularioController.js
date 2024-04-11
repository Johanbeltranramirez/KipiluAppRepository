const Formulario_Get = require('../models/formulario_get'); // Renombramos el segundo módulo como Formulario_Get
const formulario_delete = require('../models/formulario_delete'); // Importamos el modelo formulario_delete
const formulario_update = require('../models/formulario_update'); // Importamos el modelo formulario_update

module.exports = {

  getAllforms(req, res) {
   Formulario_Get.getAll((err, forms) => { 
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Error al obtener los formularios',
          error: err
        });
      }
      return res.status(200).json({
        success: true,
        message: 'Formularios obtenidos correctamente',
        data: forms // Datos de todos los formularios
      });
    });
  },

  // Método para eliminar o desactivar un formulario por su ID
  deactivateFormulario(req, res) {
    const IdForm = req.params.id; // Obtén el ID de los parámetros de la solicitud
    formulario_delete.delete(IdForm, (err, result) => { // Desactiva el formulario utilizando el módulo formulario_delete
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Error al eliminar el formulario',
          error: err
        });
      }
      return res.status(200).json({
        success: true,
        message: result.message // Mensaje de éxito
      });
    });
  },

  // Método para actualizar un formulario por su ID
  updateFormulario(req, res) {
    const IdForm = req.params.id; // Obtén el ID  de los parámetros de la solicitud
    const newData = req.body; // Nuevos datos del formulario
    formulario_update.update(IdForm, newData, (err, result) => { // Actualiza el formulario utilizando el módulo formulario_update
      if (err) {
        return res.status(500).json({
          success: false,
          message: 'Error al actualizar el formulario',
          error: err
        });
      }
      return res.status(200).json({
        success: true,
        message: result.message // Mensaje de éxito
      });
    });
  }
};
