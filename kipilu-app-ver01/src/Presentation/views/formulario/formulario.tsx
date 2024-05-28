import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
  Dimensions
} from 'react-native';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/components-formulario/CustomTextInput';
import { RoundedButton } from '../../components/components-formulario/RoundedButton';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../components/types';

const windowWidth = Dimensions.get('window').width;

type FormularioScreenRouteProp = RouteProp<RootStackParamList, 'formulario'>;

export const FormularioScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<FormularioScreenRouteProp>();
  const { ID_Animal } = route.params;

  const { ID_Adoptante, P_Nombre, S_Nombre, P_Apellido, S_Apellido, Correo, Direccion, Telefono, onChange, formulario, setAnimalId } = useViewModel();

  useEffect(() => {
    setAnimalId(ID_Animal);
  }, [ID_Animal]);

  const handlePress = () => {
    const screenName = 'recomendaciones';
    navigation.navigate(screenName as never);
  }

  return (
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <View>
            <Text style={styles.bienvenid}>Bienvenid@</Text>
          </View>
          <View>
            <Text>En este formulario podrá ingresar sus datos para validar su petición para adopcion del animal seleccionado...</Text>

          </View>
          <View style={styles.box}>
            <View style={styles.body}>
              <View>
                <Text style={styles.texts}>Primer Nombre *</Text>
                <View style={styles.contentInput}>
                  <CustomTextInput
                      placeholder='Digite su primer nombre *'
                      keyboardType='default'
                      property='P_Nombre'
                      onChangeText={onChange}
                      value={P_Nombre}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.texts}>Segundo Nombre</Text>
                <View style={styles.contentInput}>
                  <CustomTextInput
                      placeholder='Digite en caso de tener mas nombres'
                      keyboardType='default'
                      property='S_Nombre'
                      onChangeText={onChange}
                      value={S_Nombre ? S_Nombre.toString() : ''}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.texts}>Primer Apellido *</Text>
                <View style={styles.contentInput}>
                  <CustomTextInput
                      placeholder='Digite su primer apellido *'
                      keyboardType='default'
                      property='P_Apellido'
                      onChangeText={onChange}
                      value={P_Apellido}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.texts}>Segundo Apellido</Text>
                <View style={styles.contentInput}>
                  <CustomTextInput
                      placeholder='digite su segundo apellido (opcional)'
                      keyboardType='default'
                      property='S_Apellido'
                      onChangeText={onChange}
                      value={S_Apellido ? S_Apellido.toString() : ''}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.texts}>Número de Identidicacion (Cédula de ciudadania o extrangera)</Text>
                <View style={styles.contentInput}>
                  <CustomTextInput
                      placeholder='Digite el número de su cédula *'
                      keyboardType='default'
                      property='ID_Adoptante'
                      onChangeText={onChange}
                      value={ID_Adoptante.toString()}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.texts}>Correo electrónico personal o de contacto *</Text>
                <View style={styles.contentInput}>
                  <CustomTextInput
                      placeholder='Digite su correo electrónico para contacto'
                      keyboardType='email-address'
                      property='Correo'
                      onChangeText={onChange}
                      value={Correo}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.texts}>Dirección de recidencia actual *</Text>
                <View style={styles.contentInput}>
                  <CustomTextInput
                      placeholder='Digite la dirección actual de su vivienda'
                      keyboardType='default'
                      property='Direccion'
                      onChangeText={onChange}
                      value={Direccion}
                  />
                </View>
              </View>
              <View>
                <Text style={styles.texts}>Número telefónico móvil o fijo (Para contacto)</Text>
                <View style={styles.contentInput}>
                  <CustomTextInput
                      placeholder='Ingrese el número de telefono para contacto'
                      keyboardType='numeric'
                      property='Telefono'
                      onChangeText={onChange}
                      value={Telefono.toString()}
                  />
                </View>
              </View>

              <RoundedButton
                  text='Enviar'
                  onPress={() => {
                    formulario(); // Llama a la función formulario
                    ToastAndroid.show('FORMULARIO ENVIADO...\nGRACIAS POR SU ADOPCIÓN!', ToastAndroid.SHORT);
                  }}
              />
              <View>
                <TouchableOpacity onPress={handlePress} style={styles.btn2}>
                  <Text style={styles.textBtn}>Volver al inicio</Text>
                </TouchableOpacity>
              </View>
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
  bienvenid: {
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
  texts: {
    color: "#4C73BF",
    fontSize: 0.04 * windowWidth,
    marginBottom: 1,
    marginTop: 0.002 * windowWidth,
    marginHorizontal: 0.04 * windowWidth,
  },
  btn2: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#99CCCC",
    width: 300,
    height: 50,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  textBtn: {
    color: "#ffff",
    fontSize: 0.04 * windowWidth,
    fontWeight: "500",
  },
});

export default FormularioScreen;
