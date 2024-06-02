import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, ToastAndroid, Dimensions } from 'react-native';
import { CustomTextInput } from '../../components/components-formulario/CustomTextInput';
import { RoundedButton } from '../../components/components-formulario/RoundedButton';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import useViewModel from './ViewModel';
import { RootStackParamList } from '../../components/types';

const windowWidth = Dimensions.get('window').width;

type FormularioScreenRouteProp = RouteProp<RootStackParamList, 'formulario'>;

export const FormularioScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<FormularioScreenRouteProp>();
  const { ID_Animal } = route.params;

  const { adoptante, onChange, createAdoptante, setAnimalId } = useViewModel();

  useEffect(() => {
    setAnimalId(ID_Animal);
  }, [ID_Animal]);

  const handlePress = async () => {
    // Verificar que todos los campos requeridos estén llenos
    const { P_Nombre, P_Apellido, ID_Adoptante, Correo, Direccion, Telefono } = adoptante;
    if (!P_Nombre || !P_Apellido || !ID_Adoptante || !Correo || !Direccion || !Telefono) {
      ToastAndroid.show('Por favor, complete todos los campos obligatorios.', ToastAndroid.SHORT);
      return;
    }

    const success = await createAdoptante();
    if (success) {
      ToastAndroid.show('FORMULARIO ENVIADO...\nGRACIAS POR SU ADOPCIÓN!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Adoptante ya existente o error al enviar el formulario.', ToastAndroid.SHORT);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.bienvenido}>Bienvenido</Text>
        </View>
        <View>
          <Text>En este formulario podrá ingresar sus datos para validar su petición para adopción del animal seleccionado...</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.body}>
            <View>
              <Text style={styles.text}>Primer Nombre *</Text>
              <View style={styles.contentInput}>
                <CustomTextInput
                  placeholder='Digite su primer nombre *'
                  keyboardType='default'
                  property='P_Nombre'
                  onChangeText={onChange}
                  maxLength={20}
                  soloTextoConTilde={true}
                  value={adoptante?.P_Nombre || ''}
                />
              </View>
            </View>
            <View>
              <Text style={styles.text}>Segundo Nombre</Text>
              <View style={styles.contentInput}>
                <CustomTextInput
                  placeholder='Digite en caso de tener más nombres'
                  keyboardType='default'
                  property='S_Nombre'
                  onChangeText={onChange}
                  maxLength={20}
                  soloTextoConTilde={true}
                  value={adoptante?.S_Nombre || ''}
                />
              </View>
            </View>
            <View>
              <Text style={styles.text}>Primer Apellido *</Text>
              <View style={styles.contentInput}>
                <CustomTextInput
                  placeholder='Digite su primer apellido *'
                  keyboardType='default'
                  property='P_Apellido'
                  onChangeText={onChange}
                  maxLength={20}
                  soloTextoConTilde={true}
                  value={adoptante?.P_Apellido || ''}
                />
              </View>
            </View>
            <View>
              <Text style={styles.text}>Segundo Apellido</Text>
              <View style={styles.contentInput}>
                <CustomTextInput
                  placeholder='Digite su segundo apellido (opcional)'
                  keyboardType='default'
                  property='S_Apellido'
                  onChangeText={onChange}
                  maxLength={20}
                  soloTextoConTilde={true}
                  value={adoptante?.S_Apellido || ''}
                />
              </View>
            </View>
            <View>
              <Text style={styles.text}>Número de Identificación (Cédula de ciudadanía o extranjera) *</Text>
              <View style={styles.contentInput}>
                <CustomTextInput
                  placeholder='Digite el número de su cédula *'
                  keyboardType='numeric'
                  property='ID_Adoptante'
                  onChangeText={onChange}
                  maxLength={10}
                  value={adoptante?.ID_Adoptante.toString() || ''}
                />
              </View>
            </View>
            <View>
              <Text style={styles.text}>Correo electrónico personal o de contacto *</Text>
              <View style={styles.contentInput}>
                <CustomTextInput
                  placeholder='Digite su correo electrónico para contacto'
                  keyboardType='email-address'
                  property='Correo'
                  onChangeText={onChange}
                  maxLength={40}
                  value={adoptante?.Correo || ''}
                />
              </View>
            </View>
            <View>
              <Text style={styles.text}>Dirección de residencia actual *</Text>
              <View style={styles.contentInput}>
                <CustomTextInput
                  placeholder='Digite la dirección actual de su vivienda'
                  keyboardType='default'
                  property='Direccion'
                  onChangeText={onChange}
                  maxLength={30}
                  value={adoptante?.Direccion || ''}
                />
              </View>
            </View>
            <View>
              <Text style={styles.text}>Número telefónico móvil o fijo (Para contacto)</Text>
              <View style={styles.contentInput}>
                <CustomTextInput
                  placeholder='Ingrese el número de teléfono para contacto'
                  keyboardType='numeric'
                  property='Telefono'
                  onChangeText={onChange}
                  maxLength={10}
                  value={adoptante?.Telefono.toString() || ''}
                />
              </View>
            </View>
            <RoundedButton text='Enviar' onPress={handlePress} />
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
              <Text style={styles.buttonText}>Volver al inicio</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flex: 1,
    paddingTop: 0.03 * windowWidth,
    paddingHorizontal: 0.03 * windowWidth,
    marginBottom: 0.01 * windowWidth,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0.03 * windowWidth,
    borderWidth: 0.004 * windowWidth,
    borderColor: '#996633',
    marginBottom: 0.005 * windowWidth,
    marginTop: 0.006 * windowWidth,
    marginHorizontal: 0.02 * windowWidth,
  },
  bienvenido: {
    fontSize: 0.05 * windowWidth,
    fontWeight: 'bold',
    color: "#4C73BF",
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 0.02 * windowWidth,
    textAlign: "center",
  },
  contentInput: {
    width: 0.8 * windowWidth,
    height: 0.10 * windowWidth,
    borderColor: "#996633",
    borderWidth: 0.004 * windowWidth,
    borderRadius: 0.03 * windowWidth,
    justifyContent: "center",
    paddingLeft: 0.02 * windowWidth,
    marginBottom: 0.03 * windowWidth,
    marginHorizontal: 0.03 * windowWidth,
  },
  text: {
    color: "#4C73BF",
    fontSize: 0.04 * windowWidth,
    marginBottom: 1,
    marginTop: 0.002 * windowWidth,
    marginHorizontal: 0.04 * windowWidth,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#99CCCC",
    width: 300,
    height: 50,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffff",
    fontSize: 0.04 * windowWidth,
    fontWeight: "500",
  },
});

export default FormularioScreen;
