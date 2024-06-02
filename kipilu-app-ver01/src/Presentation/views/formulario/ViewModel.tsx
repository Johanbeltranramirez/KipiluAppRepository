import React, { useState } from 'react';
import { ApiKipilu } from '../../Data/sources/remote/api/ApiKipilu';

interface Adoptante {
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

const useViewModel = () => {
  const [adoptante, setAdoptante] = useState<Adoptante>({
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

  const onChange = (property: string, value: string | number) => {
    setAdoptante({ ...adoptante, [property]: value });
  };

  const createAdoptante = async () => {
    try {
      const response = await ApiKipilu.post('/users/adoptantes/create', adoptante);
      console.log('Respuesta de crear adoptante:', response.data);
      return true;
    } catch (error) {
      console.log('ERROR al crear adoptante:', error);
      return false;
    }
  };

  const setAnimalId = (animalId: number) => {
    setAdoptante({ ...adoptante, ID_Animal: animalId });
  };

  return {
    adoptante,
    onChange,
    createAdoptante,
    setAnimalId
  };
};

export default useViewModel;
