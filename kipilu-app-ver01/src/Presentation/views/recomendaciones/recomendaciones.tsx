import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native'; // Cambiado TouchableOpacity a ScrollView
import { Image } from 'react-native-elements';

const RecomendacionScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}> {/* Cambiado View a ScrollView */}
      <Text style={styles.title}>Recomendaciones</Text> {/* Agregado el título */}

      <Text style={styles.text}>
      El acto de adoptar es un compromiso serio que implica responsabilidad por un período de 15 a 20 años, 
      la esperanza de vida promedio de un gato o un perro. Es esencial estar preparado y capacitado para 
      cuidar de una nueva vida que depende de ti. Antes de adoptar, debes considerar el espacio disponible 
      en tu hogar, el tiempo que puedes dedicar para educar, acompañar y brindarle cuidados físicos y médicos. 
      Además, es importante revisar los costos asociados, como la alimentación, atención veterinaria y otros 
      gastos relacionados con el cuidado del animal.
      </Text>

      <Image source={require('../../../../assets/recomendaciones/señora_conperrito.png')} style={styles.image} />

      <Text style={styles.text}>
      Es esencial considerar la edad y comportamiento al adoptar. Los cachorros son adorables pero demandan 
      tiempo y cuidado, requieren alimentación frecuente y pueden tener comportamientos no deseados. Los perros 
      adultos, en cambio, están esterilizados, habituados a la familia y son más calmados y agradecidos. Aunque 
      su vida puede ser más corta, merecen un hogar y son excelentes compañeros. Es importante tener en cuenta 
      estos aspectos al decidir adoptar un perro, ya que cada etapa de la vida del animal presenta desafíos y 
      recompensas diferentes.
      </Text>

      <Image source={require('../../../../assets/recomendaciones/perritocon_gato.png')} style={styles.image} />

      <Text style={styles.text}>
        Si tu decisión es sí y te sientes listo para recibir un nuevo integrante en la familia, estos son 
        los pasos a seguir:

        🐾 Debes llenar el formulario de adopción en su totalidad, este formulario se encuentra en la parte 
        del catálogo, cuando le das "click" en el botón "Iniciar adopción" que está en cada información del 
        animal.

        🐾 Si tu formulario es aprobado te contactaremos por medio de correo para programar una entrevista 
        virtual de adopción, en donde tendremos una charla de tenencia responsable y esperamos conocerte más
        a fondo; al igual que ver el espacio donde viviría el animal.

        🐾 Los adoptantes deben asumir los gastos básicos como los son: esterilización, vacunas y 
        desparasitación.
      </Text>

      <Image source={require('../../../../assets/recomendaciones/perrito_solo.png')} style={styles.image} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Arial', 
    marginBottom: 20, // Agregado espacio debajo del título
  },
  text: {
    fontSize: 16,
    textAlign: 'justify', // Justificado el texto
    fontFamily: 'Arial',
    marginHorizontal: 20, // Margen horizontal para el texto
    marginBottom: 10, // Agregado espacio debajo del texto
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20, // Aumentado el espacio debajo de las imágenes
  },
});

export default RecomendacionScreen;
