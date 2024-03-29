import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import useViewModel from './ViewModel';
import { CustomTextInput } from '../../components/components-formulario/CustomTextInput';
import { RoundedButton } from '../../components/components-formulario/RoundedButton'; 

export const FormularioScreen = () => {
  const { ID_Adoptante, P_Nombre, S_Nombre, P_Apellido, S_Apellido, Correo, Direccion, Telefono, ID_Animal, onChange, formulario } = useViewModel();
  
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}> 
        <View>
          <Text style={styles.bienvenid}>Bienvenid@</Text>
        </View>
        <View>
          <Text>En este formulario podrá ingresar sus datos para validar su petición...</Text>
        </View>
        <View style={styles.box}>
          <View style={styles.body}>
            <View>
              <Text style={styles.texts}>Primer Nombre</Text>
              <View style={styles.contentInput}>
              <CustomTextInput 
                placeholder='Primer Nombre'
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
                placeholder='Segundo Nombre'
                keyboardType='default'
                property='S_Nombre'
                onChangeText={onChange}
                value={S_Nombre}
              />
              </View>
            </View>
            <View>
              <Text style={styles.texts}>Primer Apellido</Text>
              <View style={styles.contentInput}>
              <CustomTextInput 
                placeholder='Primer Apellido'
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
                placeholder='Segundo Apellido'
                keyboardType='default'
                property='S_Apellido'
                onChangeText={onChange}
                value={S_Apellido}
              /></View>
            </View>
            <View>
              <Text style={styles.texts}>Cédula</Text>
              <View style={styles.contentInput}>
              <CustomTextInput 
                placeholder='Ejemplo: CC54262122'
                keyboardType='default'
                property='ID_Adoptante'
                onChangeText={onChange}
                value={ID_Adoptante}
              />
              </View>
            </View>
            <View>
              <Text style={styles.texts}>Correo</Text>
              <View style={styles.contentInput}>
              <CustomTextInput 
                placeholder='Ingrese su correo' 
                keyboardType='email-address'
                property='Correo'
                onChangeText={onChange}
                value={Correo}              
              /> 
              </View>
            </View> 
            <View>
              <Text style={styles.texts}>Dirección</Text>
              <View style={styles.contentInput}>
              <CustomTextInput 
                placeholder='Ingrese su dirección'
                keyboardType='default'
                property='Direccion'
                onChangeText={onChange}
                value={Direccion}
              />
              </View>
            </View>
            <View>
              <Text style={styles.texts}>Teléfono</Text>
              <View style={styles.contentInput}>
              <CustomTextInput 
                placeholder='Ingrese su N° telefónico o Cl' 
                keyboardType='numeric'
                property='Telefono'
                onChangeText={onChange}
                value={Telefono}
              />
              </View>
            </View>
            <View>
              <Text style={styles.texts}>ID Animal</Text>
              <View style={styles.contentInput}>
              <CustomTextInput 
                placeholder='Ejemplo: 1'
                keyboardType='default'
                property='ID_Animal'
                onChangeText={onChange}
                value={ID_Animal}
              />
              </View>
            </View>
            <View style={styles.btn}>
              <RoundedButton  text='Enviar' onPress={formulario} />
            </View>
            <View>
              <TouchableOpacity style={styles.btn2}>
                <Text style={styles.textBtn}>Volver al catálogo</Text>
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
    paddingTop: 20, 
    paddingHorizontal: 20, 
    marginBottom: 10, 
  }, 

  body: { 
    justifyContent: 'center', 
    alignItems: 'center', 
  }, 

  box:{ 
      justifyContent: 'center', 
      alignItems: 'center', 
      borderRadius: 10, 
      borderWidth: 1, 
      borderColor: '#996633', 
      marginBottom: 6, 
      marginTop: 8, 
      marginHorizontal: 2, 
  }, 

  bienvenid: { 
    fontSize: 20, 
    fontStyle: 'italic', 
    fontWeight: 'bold', 
    color: "black", 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 7, 
    textAlign: "center", 
  }, 

  contentInput:{ 
    width: 320,
    height: 38, 
    borderColor: "#996633", 
    borderWidth: 1, 
    borderRadius: 10, 
    justifyContent: "center", 
    paddingLeft: 5, 
    marginBottom: 8, 
    marginHorizontal: 10, 
    marginVertical: 5, 
  }, 


  texts:{ 
    color: "#4C73BF", 
    fontSize: 18, 
    marginBottom: 1,
    marginTop: 2, 
    marginHorizontal: 12, 
  }, 

  btn:{ 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#9999CC", 
    width: 120, 
    height: 50, 
    marginHorizontal: 15, 
    borderRadius: 10, 
    marginBottom: 8, 
    marginTop: 10, 
  }, 

  btn2:{ 
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#99CCCC", 
    width: 190, 
    height: 50, 
    marginHorizontal: 15, 
    marginBottom: 10, 
    borderRadius: 10, 
  }, 

  textBtn:{
    color: "#ffff", 
    fontSize: 18, 
    fontWeight: "500", 
  }, 
   
}); 

export default FormularioScreen;
