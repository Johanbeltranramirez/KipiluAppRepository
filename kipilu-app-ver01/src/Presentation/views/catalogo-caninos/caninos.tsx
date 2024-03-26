import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CaninosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Catálogo de perros</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: '20%', // Si deseas usar un porcentaje para marginTop, asegúrate de que esté funcionando como se espera en tu diseño.
    fontFamily: 'Arial',
  },
});

export default CaninosScreen;
