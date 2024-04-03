// ViewModel.ts
import axios from 'axios';

export interface Animal {
    ID_Animal: number;
    Nombre: string;
    Raza: string;
    Sexo: string;
    Edad: string;
    ID_Estado: number;
    Imagen: string;
}
  

const AnimalsViewModel = () => {
  const fetchAnimals = async () => {
    try {
      const response = await axios.get('http://192.168.128.3:3000/api/animales/especie/2');
      return response.data.data; // Retorna solo los datos de los animales
    } catch (error) {
      console.log('ERROR: ' + error);
      return []; // Retorna un array vacío en caso de error
    }
  }

  return {
    fetchAnimals,
  }
}

export default AnimalsViewModel;
