import React, { useState } from 'react';
import { ApiKipilu } from '../../Data/sources/remote/api/ApiKipilu';

interface FormValues {
  ID_Adoptante: number; 
  P_Nombre: string;
  S_Nombre?: string;
  P_Apellido: string;
  S_Apellido?: string;
  Correo: string;
  Direccion: string;
  Telefono: number;
  ID_Animal: number;
}

const RegisterViewModel = () => {
  const [values, setValues] = useState<FormValues>({
    ID_Adoptante: 0,
    P_Nombre: '',
    S_Nombre: '',
    P_Apellido: '',
    S_Apellido: '',
    Correo: '',
    Direccion: '',
    Telefono: 0,
    ID_Animal: 0 
  });

  const onChange = (property: string, value: string) => {
    setValues({ ...values, [property]: value });
  }

  const formulario = async () => {
    try {
    const response = await ApiKipilu.post('/users/adoptantes', values);
    console.log('RESPONSE: ' + JSON.stringify(response));
   
    } catch (error) {
    console.log('ERROR: ' + error);
    }
    } 

  return {
    ...values,
    onChange,
    formulario
  }
}

export default RegisterViewModel;
