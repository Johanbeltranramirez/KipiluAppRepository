import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//import { createNativeStackNavigator } from '@react-navigation/native-stack'; despues usarlo
import { NavigationContainer, NavigationContainerProps } from '@react-navigation/native'; // Importamos NavigationContainerProps

// Pantallas
import CaninosScreen from "../views/catalogo-caninos/caninos";
import FelinosScreen from "../views/catalogo-felinos/felinos";
import RecomendacionScreen from '../views/recomendaciones/recomendaciones';
import FormularioScreen from '../views/formulario/formulario';

// Iconos
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';


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
                tabBarActiveTintColor:"#19CFE8", 
                tabBarIcon: ({ color, size }) => (
                    <FontAwesome6 name="dog" size={30} color={color} />
                ),
                headerShown: false,

            }}
        />

        <Tab.Screen 
            name="felinos" 
            component={FelinosScreen} 
            options={{
                tabBarLabel: 'Cátalogo felino', 
                tabBarActiveTintColor:"#E8AD19", 
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

