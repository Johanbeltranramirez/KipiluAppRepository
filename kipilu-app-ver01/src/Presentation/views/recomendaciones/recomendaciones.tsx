import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Image } from 'react-native-elements';

const RecomendacionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recomendaciones</Text>

       <Text style={styles.text}>
       El acto de adoptar es una gran compromiso y responsabilidad que puede oscilar entre los 15 y 20 años, 
       este es el promedio de vida de un gato y perro. Por eso es importante que estés listo y capacitado para 
       hacerte responsable de una nueva vida que dependerá de ti. Antes de hacer esto, un hecho que debes 
       analizar es el espacio que dispones en tu casa, el tiempo que puedes dedicarle para educarlo, 
       acompañarlo, darle la actividad física y cuidados que necesite. Comienza por revisar los costos de 
       alimentación, atención veterinaria, elementos para su adaptación en casa y precios de estadía cuando 
       estés fuera de casa.
           </Text>
        <Image source={require('../../../../assets/recomendaciones/señora_conperrito.png')} style={styles.image} />
         <Text style={styles.text}>
         También debes analizar las edades y tipos de comportamiento de los animales, no es lo mismo un 
         cachorro a un adulto mayor. Los cachorros son muy lindos y tiernos, pero requieren de mucho tiempo y 
         cuidado. Ellos deben alimentarse entre 3 y 4 veces al día, suelen llorar al quedarse solos, muerden 
         muchos objetos porque al igual que un bebé humano les molesta las encías y buscan cosas que les 
         ayuden a aliviar estas molestias. Hacen pipí y defecan en cualquier parte. El tamaño final no se 
         puede garantizar hasta que completen el año de edad. Serán fuente de amor y mucha actividad física 
         en la familia. Un perro adulto o adulto mayor ya está esterilizado, se puede sacar a la calle, tiene 
         un tamaño definido, se habitúa más fácil a la familia, son muy agradecidos y cariñosos con los 
         miembros de ella. Aceptan su espacio en la manada, y no requieren tanto trabajo pues suelen ser muy 
         calmados. Cuando ya son adultos mayores puede que no duren mucho tiempo pero hay ser consientes que 
         ellos merecen un hogar y son la mejor compañía.
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
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: '20%', // Si deseas usar un porcentaje para marginTop, asegúrate de que esté funcionando como se espera en tu diseño.
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },

});

export default RecomendacionScreen;
