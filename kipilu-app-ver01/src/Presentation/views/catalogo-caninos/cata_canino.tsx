// CataFelinoScreen.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnimalsViewModel, { Animal } from './ViewModel'; // Importa el ViewModel y el tipo Animal

const CataCaninoScreen = () => {
  const navigation = useNavigation();
  const { fetchAnimals } = AnimalsViewModel();
  const [animals, setAnimals] = useState<Animal[]>([]); // Estado para almacenar los animales

  useEffect(() => {
    const getAnimals = async () => {
      const animalData = await fetchAnimals();
      setAnimals(animalData);
    }
    getAnimals();
  }, []);

  const handleAnimalPress = (animal: Animal) => {
    const screenName = 'formulario';
    console.log('Has hecho clic en el animal con ID:', animal.ID_Animal);
    navigation.navigate(screenName as never);
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.bienvenido}>Bienvenido al catálogo de felinos</Text>
          <Text style={styles.subtitulo}>Si estás interesado en alguno, simplemente haz clic sobre él.</Text>
        </View>
        
        {/* Renderizar las cartas de animales */}
        {animals.map((animal, index) => (
          <TouchableOpacity key={index} style={styles.carta} onPress={() => handleAnimalPress(animal)}>
            <Image
              source={{ uri: animal.Imagen }} // Usar la URL de la imagen del animal
              style={styles.imagenAnimal}
            />
            <View style={styles.datosAnimal}>
              <Text style={styles.textoAnimal}>Nombre: {animal.Nombre}</Text>
              <Text style={styles.textoAnimal}>Raza: {animal.Raza}</Text>
              <Text style={styles.textoAnimal}>Sexo: {animal.Sexo}</Text>
              <Text style={styles.textoAnimal}>Edad: {animal.Edad}</Text>
              <Text style={styles.textoAnimal}>ID: {animal.ID_Animal}</Text>
              <Text style={styles.textoAnimal}>Estado: {animal.ID_Estado === 1 ? 'Adoptado' : (animal.ID_Estado === 2 ? 'No adoptado' : 'En proceso')}</Text>
            </View>
          </TouchableOpacity>
        ))}

        <View style={{ height: 20 }}></View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bienvenido: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#CB8E46',
    marginBottom: 10,
  },
  subtitulo: {
    fontSize: 12,
    color: '#333',
    marginBottom: 20,
  },
  carta: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
  },
  imagenAnimal: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D6D5D5',
  },
  datosAnimal: {
    marginLeft: 20,
  },
  textoAnimal: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default CataCaninoScreen;
