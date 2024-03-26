import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

function HeaderApp() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Hogar de rescate</Text>
      <LinearGradient
        colors={['#e6f1f1', '#afedf3', '#fdea95', '#f9a073']}
        style={styles.gradientLine}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 90,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingLeft: 10,
    marginTop: 30,
    position: 'relative',
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 19,
  },
  text: {
    color: '#af3a11',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: 24,
  },
  gradientLine: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '120%',
    height: 4,
  },
});

export default HeaderApp;
