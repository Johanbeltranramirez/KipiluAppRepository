import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';

const App = () => {
  const [animales, setAnimales] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.2.11:3000/api/animales');
        setAnimales(response.data);
      } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        setAnimales([]); // Inicializa animales con un arreglo vacío en caso de error
      }
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Nombre</DataTable.Title>
          <DataTable.Title>Raza</DataTable.Title>
          <DataTable.Title>Sexo</DataTable.Title>
          <DataTable.Title>Edad</DataTable.Title>
          <DataTable.Title>ID_Estado</DataTable.Title>
          <DataTable.Title>Imagen</DataTable.Title>
          <DataTable.Title>ID_Especie</DataTable.Title>
        </DataTable.Header>
        {animales.map((animal, id) => (
          <DataTable.Row key={id}>
            <DataTable.Cell>{animal.Nombre}</DataTable.Cell>
            <DataTable.Cell>{animal.Raza}</DataTable.Cell>
            <DataTable.Cell>{animal.Sexo}</DataTable.Cell>
            <DataTable.Cell>{animal.Edad}</DataTable.Cell>
            <DataTable.Cell>{animal.ID_Estado}</DataTable.Cell>
            <DataTable.Cell>{animal.Imagen}</DataTable.Cell>
            <DataTable.Cell>{animal.ID_Especie}</DataTable.Cell>
          </DataTable.Row>
        ))}
      </DataTable>
    </View>
  );
};

export default App;
