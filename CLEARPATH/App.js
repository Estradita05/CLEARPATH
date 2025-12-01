import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from './carpetas_pantallas/WelcomeScreen';
import LoginScreen from './carpetas_pantallas/LoginScreen';
import RegisterScreen from './carpetas_pantallas/RegisterScreen';
import HomeScreen from './carpetas_pantallas/HomeScreen';
import ProfileScreen from './carpetas_pantallas/ProfileScreen'; // Nueva
import HelpScreen from './carpetas_pantallas/HelpScreen';       // Nueva

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login" 
        screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        
        <Stack.Screen name="Home" component={HomeScreen} />
        
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Help" component={HelpScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}