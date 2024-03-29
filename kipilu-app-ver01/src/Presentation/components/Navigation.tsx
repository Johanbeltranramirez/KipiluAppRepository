import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialIcons, FontAwesome6, FontAwesome5 } from '@expo/vector-icons';

// Importaciones de las pantallas
import CaninosScreen from '../views/catalogo-caninos/caninos';
import FelinosScreen from '../views/catalogo-felinos/felinos';
import RecomendacionScreen from '../views/recomendaciones/recomendaciones';
import CataFelinoScreen from '../views/catalogo-felinos/cata_felino';
import CataCaninoScreen from '../views/catalogo-caninos/cata_canino';
import FormularioScreen from '../views/formulario/formulario'

// Creación del navegador de pilas (stack navigator) para las pantallas de los catálogos
const CatalogStackNavigator = createNativeStackNavigator();

// Componente para el catálogo de caninos
const CaninosStack = () => {
  return (
    <CatalogStackNavigator.Navigator>
      <CatalogStackNavigator.Screen 
        name="caninosCatalog" 
        component={CaninosScreen} 
        options={{ headerShown: false }}
      />
      <CatalogStackNavigator.Screen 
        name="cata_canino" 
        component={CataCaninoScreen}
        options={{ headerTitle: '' }}
      />
    </CatalogStackNavigator.Navigator>
  );
}

// Componente para el catálogo de felinos
const FelinosStack = () => {
  return (
    <CatalogStackNavigator.Navigator>
      <CatalogStackNavigator.Screen 
        name="felinosCatalog" 
        component={FelinosScreen} 
        options={{ headerShown: false }}
      />
      <CatalogStackNavigator.Screen 
        name="cata_felino" 
        component={CataFelinoScreen}
        options={{ headerTitle: '' }}
      />
      <CatalogStackNavigator.Screen 
        name="formulario" 
        component={FormularioScreen}
        options={{ headerTitle: '' }}
      />
    </CatalogStackNavigator.Navigator>
  );
}

// Creación del navegador de pestañas (bottom tab navigator)
const Tab = createBottomTabNavigator();

// Componente para las pestañas de navegación
const MyTabs = () => {
  return (
    <Tab.Navigator initialRouteName="recomendaciones">
      <Tab.Screen 
        name="recomendaciones" 
        component={RecomendacionScreen} 
        options={{
          tabBarLabel: 'Recomendación',
          tabBarActiveTintColor:"#33FFA5", 
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="tips-and-updates" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="caninosTab" 
        component={CaninosStack} 
        options={{
          tabBarLabel: 'Catálogo canino', 
          tabBarActiveTintColor:"#E8AD19", 
          tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="dog" size={30} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen 
        name="felinosTab" 
        component={FelinosStack} 
        options={{
          tabBarLabel: 'Catálogo felino', 
          tabBarActiveTintColor:"#19CFE8", 
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="cat" size={30} color={color} />                
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

// Componente de navegación principal
const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

export default Navigation;
