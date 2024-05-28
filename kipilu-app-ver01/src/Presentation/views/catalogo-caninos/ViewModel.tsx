// ViewModel.ts
import axios from 'axios';

export interface Animal {
  ID_Animal: number;
  Nombre_Animal: string;
  Raza: string; // Cambia el tipo de dato de Razas a string
  Sexo: string;
  ID_Estado: number;
  ID_Especie: number;
  Foto: string;
  Descripcion: string;
  Especie_Animal: string;
  Estado_Animal: string;
  Nombre_Raza: string; // Agrega la propiedad Nombre_Raza
}

const AnimalsViewModel = () => {
  const fetchAnimals = async () => {
    try {
      const response = await axios.get('https://kipilubackendrepository-2.onrender.com/api/animales/especie/1');
      const animalsData = response.data.data.map((animal: any) => {
        return {
          ...animal,
          // Agrega el nombre de la raza a cada animal
          Raza: animal.Nombre_Raza // Asumiendo que la propiedad con el nombre de la raza es "Nombre_Raza"
        };
      });
      return animalsData;
    } catch (error) {
      console.log('ERROR: ' + error);
      return [];
    }
  }

  return {
    fetchAnimals,
  }
}

export default AnimalsViewModel;
