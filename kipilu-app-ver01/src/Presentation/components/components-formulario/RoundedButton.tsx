import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
}

export const RoundedButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={styles.roundedButton}
      onPress={onPress}
    >
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  roundedButton: {
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#9999CC", 
    width: 300, 
    height: 50, 
    marginHorizontal: 15, 
    marginBottom: 10, 
    borderRadius: 10,
  },
  textButton: {
    color: "#ffff",
    fontSize: 16,
    fontWeight: "500",
  }
});
