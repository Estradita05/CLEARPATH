// navigation/AppNavigator.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View } from 'react-native';
import { useEffect } from 'react';
import { initDatabase } from './database/db';

// IMPORTACIÓN DE PANTALLAS
import WelcomeScreen from '../carpetas_pantallas/WelcomeScreen';
import LoginScreen from '../carpetas_pantallas/LoginScreen';
import RegisterScreen from '../carpetas_pantallas/RegisterScreen';
import HomeScreen from '../carpetas_pantallas/HomeScreen';
import ProfileScreen from '../carpetas_pantallas/ProfileScreen';
import TaskScreen from '../carpetas_pantallas/TaskScreen';
import LearnScreen from '../carpetas_pantallas/LearnScreen';
import MenuScreen from '../carpetas_pantallas/MenuScreen';
import SettingsScreen from '../carpetas_pantallas/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    initDatabase()
      .then(() => console.log("BD lista"))
      .catch(err => console.log("Error BD:", err));
  }, []);

  return <AppNavigator />;
}


// ----------------------------------------------------
//  NAVIGATION DE TABS (BARRA INFERIOR OFICIAL)
// ----------------------------------------------------

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: '#FF80AB', // ROSA
        tabBarInactiveTintColor: '#000',  // NEGRO
        tabBarStyle: {
          backgroundColor: '#FFCC80',  // DURAZNO
          height: 70,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        }
      }}
    >

      <Tab.Screen 
        name="Perfil" 
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Text style={{ fontSize: 22 }}>👤</Text>
        }}
      />

      <Tab.Screen 
        name="Tareas" 
        component={TaskScreen}
        options={{
          tabBarIcon: () => <Text style={{ fontSize: 22 }}>🗄️</Text>
        }}
      />

      <Tab.Screen 
        name="Aprender" 
        component={LearnScreen}
        options={{
          tabBarIcon: () => <Text style={{ fontSize: 22 }}>🧘</Text>
        }}
      />

      <Tab.Screen 
        name="Menú" 
        component={MenuScreen}
        options={{
          tabBarIcon: () => <Text style={{ fontSize: 22 }}>☰</Text>
        }}
      />

      <Tab.Screen 
        name="Ajustes" 
        component={SettingsScreen}
        options={{
          tabBarIcon: () => <Text style={{ fontSize: 22 }}>⚙️</Text>
        }}
      />

    </Tab.Navigator>
  );
}



// ----------------------------------------------------
//  NAVIGATION PRINCIPAL (STACK)
// ----------------------------------------------------

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">

        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />

        {/* Pantalla que abre la barra inferior */}
        <Stack.Screen name="HomeTabs" component={HomeTabs} />

        {/* Si quieres usar HomeScreen dentro de tabs después, la movemos */}
        <Stack.Screen name="Home" component={HomeScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
