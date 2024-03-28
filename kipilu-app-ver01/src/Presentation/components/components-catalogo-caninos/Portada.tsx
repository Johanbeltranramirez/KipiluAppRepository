import React from 'react';
import { Image, StyleSheet } from 'react-native';

function Portada() {
  return (
    <Image
      source={require('../../../../assets/logo.png')}
      style={styles.logo}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
    marginRight: 19,
  },
});

export default Portada;
