import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TextInput,
    TouchableOpacity, 
    ScrollView,
    /*Platform*/ } from 'react-native';


const FormularioScreen = () => {
  return (
    <ScrollView>
    <SafeAreaView style={styles.container}>
        <View style={styles.body}>
            <View>
                 <Text style={styles.bienvenid}>Bienvenid@</Text>
            </View>
            <View>
                 <Text >En este formulario podrá ingresar sus datos para validar su petición...</Text>
            </View>
            <View>
            <Text style={styles.texts}>Primer Nombre</Text>
              <View style={styles.contentInput}>
                 <TextInput placeholder='Primer Nombre'/>
              </View>
              <Text style={styles.texts}>Segundo Nombre</Text>
              <View style={styles.contentInput}>
                 <TextInput placeholder='Segundo Nombre'/>
              </View>
              <Text style={styles.texts}>Primer Apellido</Text>
              <View style={styles.contentInput}>
                 <TextInput placeholder='Primer Apellido'/>
              </View>
              <Text style={styles.texts}>Segundo Apellido</Text>
              <View style={styles.contentInput}>
                 <TextInput placeholder='Segundo Apellido'/>
              </View>
                <Text style={styles.texts}>Cédula</Text>
                <Text>Ejemplo: CC54262122</Text>
              <View style={styles.contentInput}>
                 <TextInput placeholder='Digitar tal y como se muetra en el ejemplo'/>
              </View>
              <Text style={styles.texts}>Correo</Text>
              <View style={styles.contentInput}>
                 
                 <TextInput placeholder='Ingrese su correo' keyboardType='email-address'/>
              </View>
              <Text style={styles.texts}>Dirección</Text>
              <View style={styles.contentInput}>
                 <TextInput placeholder='Ingrese su dirección'/>
              </View>
              <Text style={styles.texts}>Télefono</Text>
              <View style={styles.contentInput}>
                 <TextInput placeholder='Ingrese su N° telefonico o Cl' keyboardType='phone-pad'/>
              </View>                 
                 <Text style={styles.texts}>ID_animal</Text>
                 <Text>Ejemplo: CH-Canela_12</Text>
              <View style={styles.contentInput}>
                 <TextInput placeholder='ID del animal a adoptar'/>
              </View>
              <View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.textBtn}>Enviar</Text>
                </TouchableOpacity>
              </View>
              <View>
                <TouchableOpacity style={styles.btn2}>
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
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  body: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bienvenid: {
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
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
  },
  texts:{
    color: "#000033",
    fontSize: 15,
    marginBottom: 3,
    marginTop: 2,
  },
  btn:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9999CC",
    width: "90%",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 8,
  },
  btn2:{
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#99CCCC",
    width: "90%",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 10,
  },
  textBtn:{
    color: "#ffff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default FormularioScreen;