import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const FelinosScreen = () => {
  const navigation = useNavigation(); // Obtener la función de navegación

  const handlePress = () => {
    // Obtener el nombre de la pantalla de manera independiente
    const screenName = 'cata_felino';
    // Navegar a la pantalla 'cata_felino' utilizando el nombre de la pantalla obtenido
    navigation.navigate(screenName as never);
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.container3}>
        <Image
          source={require('../../../../assets/catalogo-felinos/2.png')} 
          style={styles.imagenPortada}
        />
        <View style={styles.textContainer}>
          <Text style={styles.caracteristicasText}>Características:</Text>
          <View style={styles.additionalTextContainer}>
            <Text style={styles.additionalText}>
              <AntDesign 
                name="arrowright" 
                size={24} 
                color="#8DD8C3" 
              /> 
              Gatos de diferentes razas disponibles
            </Text>
            <Text style={styles.additionalText}>
              <AntDesign 
                name="arrowright" 
                size={24} 
                color="#8DD8C3" 
              /> 
              Información detallada sobre cada gato
            </Text>
            <Text style={styles.additionalText}>
              <AntDesign 
                name="arrowright" 
                size={24} 
                color="#8DD8C3" 
              /> 
              Opciones de adopción
            </Text>
          </View>
        </View>
        <LinearGradient
          colors={['#e6f1f1', '#afedf3', '#fdea95', '#f9a073']}
          style={styles.gradientLine}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />
      </View>

      {/* Nuevo View para los textos de mensaje*/}
      <View style={styles.mensaje}>
        <Text style={styles.mensajeText1}>ADOPTA, NO COMPRES</Text>
        <Text style={styles.mensajeText2}>Busca a tu amigo peludo que está en búsqueda de un hogar</Text>
      </View>

      {/* Botón circular grande y azul */}
      <TouchableOpacity onPress={handlePress} style={styles.boton}>
        <Text style={styles.botonText}>Ve adoptar!!</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  container3: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imagenPortada: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    marginTop: -410,
  },
  textContainer: {
    position: 'absolute',
    bottom: 40,
    left: 10,
    alignItems: 'flex-start',
  },
  caracteristicasText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
    color: '#47979F',
  },
  additionalTextContainer: {
    backgroundColor: '#E3F2F5',
    borderRadius: 10,
    padding: 10,
    alignItems: 'flex-start',
  },
  additionalText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  gradientLine: {
    position: 'absolute',
    left: 60,
    bottom: 10,
    width: '70%',
    height: 2,
  },
  mensaje: {
    alignItems: 'center',
    marginTop: 20,
  },
  mensajeText1: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#f9a073',
  },
  mensajeText2: {
    fontSize: 13,
    color: '#333',
  },
  boton: {
    backgroundColor: '#47979F',
    width: 120,
    height: 120,
    borderRadius: 90,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 20,
  },
  botonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  }
});

export default FelinosScreen;
