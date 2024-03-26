import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/Presentation/components/Navigation';
import HeaderApp from './src/Presentation/components/HeaderApp'; // Asegúrate de que el nombre del archivo coincida

export default function App() {
  return (
    <View style={styles.container}>
      <HeaderApp />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
