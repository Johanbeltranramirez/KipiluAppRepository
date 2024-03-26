import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const FelinosScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Catálogo de gatos</Text>
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
  },
});

export default FelinosScreen;
