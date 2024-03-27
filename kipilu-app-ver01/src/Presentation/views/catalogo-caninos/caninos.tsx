import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const CaninosScreen = () => {
  const navigateToNextPage = () => {
    // Aquí puedes navegar a la siguiente página
    // navigation.navigate('NombreDeLaSiguientePágina');
    // Por ejemplo:
    // navigation.navigate('DetallePerro');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/catalogo-caninos/1.png')}
        style={styles.image}
      />

      {/* Texto flotante */}
      <View style={styles.textoFlotante}>
        <Text style={styles.texto}>Características</Text>
        <LinearGradient
          colors={['#e6f1f1', '#afedf3', '#fdea95', '#f9a073']}
          style={styles.gradientLine}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        />

        {/* Texto adicional */}
        <View style={styles.additionalTextContainer}>
          <Text style={styles.additionalText}>
            - Perros de diferentes razas disponibles.
          </Text>
          <Text style={styles.additionalText}>
            - Información detallada sobre cada perro.
          </Text>
          <Text style={styles.additionalText}>
            - Opciones de adopción.
            {'\n'} {/* Salto de línea */}
          </Text>
        </View>
      </View>
     {/* Texto de bajo de la linea */}
     <View style={styles.adoptaContainer}>
          <Text style={styles.adoptaText}>
            ADOPTA, NO COMPRES
          </Text>
          <Text style={styles.buscaAmigoText}>
            Busca a tu amigo peludo que está en búsqueda de un hogar
          </Text>
        </View>


      
      {/* Segunda imagen y especificaciones */}
      <TouchableOpacity onPress={navigateToNextPage}>
        <View style={styles.dogContainer}>
          <Image
            source={require('../../../../assets/catalogo-caninos/perro2.jpg')}
            style={styles.smallImage}
          />
          <View style={styles.specifications}>
            <Text style={styles.specText}>Nombre: Rex</Text>
            <Text style={styles.specText}>Edad: 3 años</Text>
            <Text style={styles.specText}>Raza: Labrador</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 400,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 280,
  },
  textoFlotante: {
    position: 'absolute',
    top: 220,
    left: 0,
    right: 120,
    zIndex: 1,
    alignItems: 'center',
  },
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    right: 34,
    color: '#CB8E46',
    marginBottom: 10,
  },
  gradientLine: {
    position: 'absolute',
    left: 29,
    bottom: 0,
    width: '120%',
    height: 4,
  },
  dogContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 15,
    width: '100%',
  },
  smallImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    marginRight: 10,
  },
  specifications: {
    flex: 1,
  },
  specText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  additionalTextContainer: {
    marginLeft: 10,
    alignItems: 'flex-start',
  },
  additionalText: {
    marginLeft: 9,
    textAlign: 'left',
    marginTop: 5, // Añadir un espacio superior
  },
  adoptaContainer: {
    alignItems: 'center', // Para centrar horizontalmente
  },
  adoptaText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#CB8E46',
    textAlign: 'center', // Para centrar el texto horizontalmente
  },
  buscaAmigoText: {
    fontSize: 10, // Tamaño de letra más pequeño
    color: '#CB8E46',
  },
});

export default CaninosScreen;
