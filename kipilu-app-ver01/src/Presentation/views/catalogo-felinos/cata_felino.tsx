import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Image
} from 'react-native';

const animales = [
  {
    nombre: 'Yuky',
    raza: 'nose',
    sexo: 'Macho',
    edad: '2 años',
    id: 'FM-Yuky_01',
    estado: 'En proceso',
    imagen: require('../../../../assets/catalogo-felinos/1.jpg')
  },
  {
    nombre: 'Simba',
    raza: 'Persa',
    sexo: 'Macho',
    edad: '1 años',
    id: 'FM-Simba_02',
    estado: 'Disponible',
    imagen: require('../../../../assets/catalogo-felinos/2.jpg')
  },
  {
    nombre: 'Nala',
    raza: 'Maine Coon',
    sexo: 'Hembra',
    edad: '1 año',
    id: 'FH-Nala_03',
    estado: 'Disponible',
    imagen: require('../../../../assets/catalogo-felinos/3.jpg')
  },
  {
    nombre: 'Tiger',
    raza: 'Bengala',
    sexo: 'Macho',
    edad: '4 años',
    id: 'FH-Tiger_04',
    estado: 'Disponible',
    imagen: require('../../../../assets/catalogo-felinos/4.jpg')
  },
  {
    nombre: 'Mia',
    raza: 'Siamés',
    sexo: 'Hembra',
    edad: '2 años',
    id: 'FH-Mia_05',
    estado: 'En proceso',
    imagen: require('../../../../assets/catalogo-felinos/5.jpg')
  }
  // Agrega la información de los otros animales aquí
];

const CataFelinoScreen = () => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.bienvenid}>Bienvenid@ al cátalogo de felinos</Text>
          <View>
            <Text style={styles.sub}>Si estás interesado en alguno, simplemente haz clic sobre él.</Text>
            </View>
        </View>
        
        {/* Renderizar las cartas de animales */}
        {animales.map((animal, index) => (
          <View style={styles.carta}>
            <Image
              source={animal.imagen} 
              style={styles.imagenAnimal}
            />
            <View style={styles.datosAnimal}>
              <Text style={styles.estadoAnimal}>Nombre: {animal.nombre}</Text>
              <Text style={styles.estadoAnimal}>Raza: {animal.raza}</Text>
              <Text style={styles.estadoAnimal}>Sexo: {animal.sexo}</Text>
              <Text style={styles.estadoAnimal}>Edad: {animal.edad}</Text>
              <Text style={styles.estadoAnimal}>ID: {animal.id}</Text>
              <Text style={styles.estadoAnimal}>Estado: {animal.estado}</Text>
            </View>
          </View>
          
        ))}

       <View style={{ height: 20 }}></View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bienvenid: {
    fontSize: 18,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#47979F',
  },
  carta: {
    marginTop: 20,
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
  },
  imagenAnimal: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  datosAnimal: {
    marginLeft: 20,
  },
  estadoAnimal: {
    fontSize: 16,
    marginBottom: 5,
  },
  sub: {
    fontSize: 12,
  },
});

export default CataFelinoScreen;