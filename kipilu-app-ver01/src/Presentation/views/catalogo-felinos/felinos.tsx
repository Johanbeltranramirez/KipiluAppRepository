import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const FelinosScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../../assets/catalogo-felinos/2.png')} 
        style={styles.imagenPortada}
      />
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
  imagenPortada: {
    width: '100%', // Ajusta el ancho de la imagen según tus necesidades
    height: 200, // Ajusta la altura de la imagen según tus necesidades
    resizeMode: 'cover', // Ajusta el modo de redimensionamiento según tus necesidades
    marginTop: -410, // Ajusta el margen inferior de la imagen según tus necesidades
  },
  
});

export default FelinosScreen;
