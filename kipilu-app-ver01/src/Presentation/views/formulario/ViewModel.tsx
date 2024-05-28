import React, { useState } from 'react';
import { ApiKipilu } from '../../Data/sources/remote/api/ApiKipilu';

interface Animal {
  ID_Animal: number;
}

interface FormValues {
  ID_Adoptante: number;
  P_Nombre: string;
  S_Nombre?: string;
  P_Apellido: string;
  S_Apellido?: string;
  Correo: string;
  Direccion: string;
  Telefono: string;
  Animal: Animal;
}

interface FormulariosData {
  Adoptante: number;  // Cambio aquí para el nombre de campo en la tabla Formularios
  Animal: number;     // Cambio aquí para el nombre de campo en la tabla Formularios
}

const RegisterViewModel = () => {
  const [values, setValues] = useState<FormValues>({
    ID_Adoptante: 0, // Asignar un valor inicial apropiado
    P_Nombre: '',
    S_Nombre: '',
    P_Apellido: '',
    S_Apellido: '',
    Correo: '',
    Direccion: '',
    Telefono: '',
    Animal: {
      ID_Animal: 0 // Asignar un valor inicial apropiado
    }
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  };

  const setAnimalId = (ID_Animal: number) => {
    setValues({ ...values, Animal: { ID_Animal } });
  };

  const formulario = async () => {
    try {
      // Desestructurar los valores para separar los datos del adoptante y el animal
      const { Animal, ...adoptanteData } = values;
  
      console.log(JSON.stringify(adoptanteData, null, 2));
  
      // Primera inserción para registrar un nuevo adoptante
      const ResponseAdoptante = await ApiKipilu.post('/users/adoptantes/create', adoptanteData);

      // Obtener el ID del adoptante desde la respuesta
      const adoptanteID = ResponseAdoptante.data.ID_Adoptante;
      const animalID = values.Animal.ID_Animal; // Obtener el ID del animal del estado
  
      console.log("ID del adoptante:", adoptanteID);
      console.log("ID del animal:", animalID);
  
      // Segunda inserción para crear un nuevo formulario
      const formulariosData: FormulariosData = {
        Adoptante: adoptanteID, // Utilizar el ID de adoptante obtenido de la respuesta
        Animal: animalID // Utilizar el ID del animal del estado
      };
  
      console.log(JSON.stringify(formulariosData, null, 2));
  
      // Segunda inserción para crear un nuevo formulario
      const ResponseFormulario = await ApiKipilu.post('/formularios/create', formulariosData);
      console.log('RESPONSE (formulario):' + JSON.stringify(ResponseFormulario));
    } catch (error) {
      console.log('ERROR:' + error);
    }

  };
  
  return {
    ...values,
    onChange,
    formulario,
    setAnimalId
  };
};

export default RegisterViewModel;