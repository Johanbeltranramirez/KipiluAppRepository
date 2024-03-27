import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
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
        source={require('../../../../assets/catalogo-caninos/1.png')} // Ruta de la imagen
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
            -  Opciones de adopción.
            {'\n'} {/* Salto de línea */}
          </Text>
        </View>
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  image: {
    width: 400, // Ancho de la imagen
    height: 200, // Alto de la imagen
    resizeMode: 'cover', // Modo de redimensionamiento de la imagen
    marginBottom: 280, // Espacio debajo de la imagen
  },
  textoFlotante: {
    position: 'absolute',
    top: 220, // Altura desde la parte superior
    left: 0, // Espacio desde el borde izquierdo
    right: 120, // Para que ocupe todo el ancho disponible
    zIndex: 1, // Para que esté por encima de otras vistas
    alignItems: 'center', // Para centrar horizontalmente
  },  
  texto: {
    fontSize: 18,
    fontWeight: 'bold',
    right: 45, // Para que ocupe todo el ancho disponible
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
    backgroundColor: '#f0f0f0', // Color de fondo del contenedor de la segunda imagen y especificaciones
    borderRadius: 10, // Bordes redondeados del contenedor
    paddingHorizontal: 10, // Espacio horizontal en el contenedor
    paddingVertical: 15, // Espacio vertical en el contenedor
    width: '100%', // Ancho del contenedor
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
    color: '#333', // Color del texto de las especificaciones
  },
  additionalTextContainer: {
    marginLeft: 10, // Espacio desde el borde izquierdo para el texto adicional
    alignItems: 'flex-start', // Para alinear a la izquierda
  },
  additionalText: {
    marginLeft: 9, // Espacio para la viñeta
    textAlign: 'left', // Alinear el texto a la izquierda
  },
});

export default CaninosScreen;