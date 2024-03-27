import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const RecomendacionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Recomendaciones</Text>
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
});

export default RecomendacionScreen;
