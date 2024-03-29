import React from 'react';
import { View, TextInput, StyleSheet, KeyboardType } from 'react-native';

interface Props {
  placeholder: string;
  value: string;
  keyboardType: KeyboardType;
  secureTextEntry?: boolean;
  property: string;
  onChangeText: (property: string, value: string) => void;
}

export const CustomTextInput = ({
  placeholder,
  value,
  keyboardType,
  secureTextEntry = false,
  property,
  onChangeText
}: Props) => {
  return (
    <View >
      <TextInput
        
        placeholder={placeholder}
        keyboardType={keyboardType}
        value={value}
        onChangeText={(text: string) => onChangeText(property, text)}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};



 

