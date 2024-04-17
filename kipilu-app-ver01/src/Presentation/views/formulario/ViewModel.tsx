import React, { useState } from 'react';
import { ApiKipilu } from '../../Data/sources/remote/api/ApiKipilu';

interface FormValues {
  ID_Adoptante: string; 
  P_Nombre: string;
  S_Nombre?: string;
  P_Apellido: string;
  S_Apellido?: string;
  Correo: string;
  Direccion: string;
  Telefono: string;
}

const RegisterViewModel = () => {
  const [values, setValues] = useState<FormValues>({
    ID_Adoptante: '',
    P_Nombre: '',
    S_Nombre: '',
    P_Apellido: '',
    S_Apellido: '',
    Correo: '',
    Direccion: '',
    Telefono: '',
  });

  const onChange = (property: string, value: any) => {
    setValues({ ...values, [property]: value });
  }

  const formulario = async () => {
    try {
        // Primera inserción para registrar un nuevo adoptante
        const ResponseAdoptante = await ApiKipilu.post('/users/adoptantes', values);
        console.log('RESPONSE (adoptante):' + JSON.stringify(ResponseAdoptante));
        
        // Segunda inserción para crear un nuevo formulario
        const ResponseFormulario = await ApiKipilu.post('/formularios/create', values);
        console.log('RESPONSE (formulario):' + JSON.stringify(ResponseFormulario));
    } catch (error) {
        console.log('ERROR:'+ error);
    }
};

  return {
    ...values,
    onChange,
    formulario
  }
}

export default RegisterViewModel;
