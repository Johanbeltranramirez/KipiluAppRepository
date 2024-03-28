import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native'; // Importamos NavigationContainerProps

// Pantallas
import CaninosScreen from "../views/catalogo-caninos/caninos";
import FelinosScreen from "../views/catalogo-felinos/felinos";
import RecomendacionScreen from '../views/recomendaciones/recomendaciones';
import FormularioScreen from '../views/formulario/formulario';
import CataFelinoScreen from '../views/catalogo-felinos/cata_felino';

// Iconos
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const HomeStackNavigator = createNativeStackNavigator();

const MyTack = () => {
    return (
        <HomeStackNavigator.Navigator>
          
          <HomeStackNavigator.Screen 
          name="felinos" 
          component={FelinosScreen} 
          options={{
            headerShown: false,
          }}
          />

          <HomeStackNavigator.Screen 
          name="cata_felino" 
          component={CataFelinoScreen}
          options={{
            headerTitle: '', 
        }}
          />


        </HomeStackNavigator.Navigator>
    );
  }

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="recomendaciones" 
        >

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
            name="caninos" 
            component={CaninosScreen} 
            options={{
                tabBarLabel: 'Cátalogo canino', 
                tabBarActiveTintColor:"#E8AD19", 
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome6 name="dog" size={30} color={color} />
                ),
                headerShown: false,

            }}
        />

        <Tab.Screen 
            name="felinos" 
            component={MyTack} 
            options={{
                tabBarLabel: 'Cátalogo felino', 
                tabBarActiveTintColor:"#19CFE8", 
                tabBarIcon: ({ color, size }) => (
                   <FontAwesome5 name="cat" size={30} color={color} />                
                ),

                headerShown: false,
            }}
        />

        <Tab.Screen 
            name="formulario" 
            component={FormularioScreen} 
            options={{
                tabBarLabel: 'Formulario', 
                tabBarActiveTintColor:"#6600cc", 
                tabBarIcon: ({ color, size }) => (
                   <FontAwesome5 name="cat" size={30} color={color} />                
                ),

                headerShown: false,
            }}
        />
        
        </Tab.Navigator>
    );
}

export default function Navigation() {
    // Especificamos children en las props
    const props: NavigationContainerProps = {
        children: <MyTabs />
    };

    return (
        <NavigationContainer {...props} />
    );
}

