
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import WelcomeScreen from './carpetas_pantallas/WelcomeScreen';
import LoginScreen from './carpetas_pantallas/LoginScreen';
import RegisterScreen from './carpetas_pantallas/RegisterScreen';
import HomeScreen from './carpetas_pantallas/HomeScreen';
import ProfileScreen from './carpetas_pantallas/ProfileScreen';
import HelpScreen from './carpetas_pantallas/HelpScreen';
import TasksScreen from './carpetas_pantallas/TasksScreen';
import SubjectsScreen from './carpetas_pantallas/SubjectsScreen';
import ResetPasswordScreen from './carpetas_pantallas/ResetPasswordScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, 
        tabBarActiveTintColor: '#FF80AB', 
        tabBarInactiveTintColor: '#555',  
        tabBarStyle: {
            backgroundColor: '#FFCC80',
            height: 80,
            paddingBottom: 8,
            paddingTop: 5,
            borderTopWidth: 0,
            elevation: 10
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Inicio') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Subjects') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'Tasks') {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }


          return <Ionicons name={iconName} size={28} color={color} />;
        },
        tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600'
        }
      })}
    >
      <Tab.Screen 
        name="Inicio" 
        component={HomeScreen} 
        options={{ title: 'Inicio' }} 
      />
      
      <Tab.Screen 
        name="Subjects" 
        component={SubjectsScreen} 
        options={{ title: 'Materias' }} 
      />
      
      <Tab.Screen 
        name="Tasks" 
        component={TasksScreen} 
        options={{ title: 'Tareas' }} 
      />
      
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ title: 'Perfil' }} 
      />

  
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />

        <Stack.Screen name="Register" component={RegisterScreen} />

        <Stack.Screen name="Registro" component={RegisterScreen} />
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
        
     
        <Stack.Screen name="Home" component={MainTabs} />
        
      
        <Stack.Screen name="Help" component={HelpScreen} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}


