// CataFelinoScreen.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AnimalsViewModel, { Animal } from './ViewModel';

const CataFelinoScreen = () => {
  const navigation = useNavigation();
  const { fetchAnimals } = AnimalsViewModel();
  const [animals, setAnimals] = useState<Animal[]>([]);

  useEffect(() => {
    const getAnimals = async () => {
      const animalData = await fetchAnimals();
      setAnimals(animalData);
    }
    getAnimals();
  }, []);

  const handleAnimalPress = (estado: string) => {
    if (parseInt(estado) !== 3) { // Permitir la navegación solo si el estado no es 'En proceso'
      const screenName = 'formulario';
      navigation.navigate(screenName as never);
    }
  }

  const getBorderColor = (estado: string) => {
    switch (parseInt(estado)) {
      case 2:
        return '#96EEFE'; // Azul si no está adoptado
      case 3:
        return '#FEF896'; // Amarillo si está en proceso
      default:
        return '#000'; // Otro color por defecto
    }
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.bienvenido}>Bienvenido al catálogo de felinos</Text>
          <Text style={styles.subtitulo}>Si estás interesado en alguno, simplemente haz clic sobre él.{'\n'}{'\n'}
          Si una animal se muestra en una tarjeta con borde amarillo, significa que está en proceso con otra persona y no está disponible para adopción hasta que cambie su estado.</Text>
        </View>
        
        {animals.map((animal, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.carta, { borderColor: getBorderColor(animal.Estado_Animal) }]} 
            onPress={() => handleAnimalPress(animal.Estado_Animal)}
            disabled={parseInt(animal.Estado_Animal) === 3} // Deshabilitar la tarjeta si está en proceso
          >
            <Image
              source={{ uri: animal.Foto }}
              style={styles.imagenAnimal}
            />
            <View style={styles.datosAnimal}>
              <Text style={styles.textoAnimal}>Nombre: {animal.Nombre_Animal}</Text>
              <Text style={styles.textoAnimal}>Raza: {animal.Raza}</Text>
              <Text style={styles.textoAnimal}>Sexo: {parseInt(animal.Sexo) === 1 ? 'Hembra' : 'Macho'}</Text>
              <Text style={styles.textoAnimal}>Descripción: {animal.Descripcion}</Text>
              <Text style={styles.textoAnimal}>Estado: {parseInt(animal.Estado_Animal) === 1 ? 'Adoptado' : (parseInt(animal.Estado_Animal) === 2 ? 'No adoptado' : 'En proceso')}</Text>
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
    textAlign: 'justify',
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
    borderWidth: 2, // Ancho del borde
  },
  imagenAnimal: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#D6D5D5',
  },
  datosAnimal: {
    marginLeft: 20,
    flex: 1, // Para ocupar todo el espacio disponible horizontalmente
    maxWidth: '70%', // Ajusta este valor según tus preferencias
  },
  textoAnimal: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'justify', // Para justificar el texto
  },
});

export default CataFelinoScreen;
