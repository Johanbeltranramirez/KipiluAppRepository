import React from 'react';
import { View, TextInput, KeyboardTypeOptions, TextInputProps } from 'react-native';

interface Props extends Omit<TextInputProps, 'onChangeText'> {
  placeholder: string;
  value: string;
  property: string;
  onChangeText: (property: string, value: string) => void;
  soloTextoConTilde?: boolean;
}

export const CustomTextInput = ({
  placeholder,
  value,
  secureTextEntry = false,
  property,
  onChangeText,
  maxLength,
  soloTextoConTilde = false,
  keyboardType = 'default', // Valor predeterminado para keyboardType
  ...rest // Esto permitirá que otros props se pasen a TextInput
}: Props) => {
  const handleChangeText = (text: string) => {
    // Filtrar solo letras con tilde y espacios si soloTextoConTilde es true
    const filteredText = soloTextoConTilde ? text.replace(/[^a-zA-ZáéíóúÁÉÍÓÚ\s]/g, '') : text;
    onChangeText(property, filteredText);
  };

  return (
    <View>
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType as KeyboardTypeOptions}
        value={value}
        onChangeText={handleChangeText}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
        {...rest} // Pasar otros props a TextInput
      />
    </View>
  );
};
