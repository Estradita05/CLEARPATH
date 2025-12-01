import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, SafeAreaView, Dimensions } from 'react-native';

// Asegúrate de que la ruta de tu logo sea correcta
const logoImage = require('../assets/adaptive-icon.png'); 

export default function WelcomeScreen({ navigation }) {
    
    // Función para ir al Login cuando presionan "EMPEZAR"
    const handleStart = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.container}>
            
            {/* 1. SECCIÓN SUPERIOR: LOGO */}
            <View style={styles.headerContainer}>
                <Image source={logoImage} style={styles.logoImage} />
                <Text style={styles.brandText}>CLEAR PATH</Text>
                <Text style={styles.sloganText}>APRENDER CON ESTILO</Text>
            </View>

            {/* 2. SECCIÓN CENTRAL: MENSAJE DE BIENVENIDA */}
            <View style={styles.contentContainer}>
                <Text style={styles.welcomeTitle}>¡Bienvenido!</Text>
                
                <Text style={styles.descriptionText}>
                    Tu guía personal para aprender{'\n'}con confianza.
                </Text>
            </View>

            {/* 3. SECCIÓN INFERIOR: BOTÓN EMPEZAR */}
            <View style={styles.buttonContainer}>
                <Pressable 
                    style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonPressed // Efecto visual al presionar
                    ]} 
                    onPress={handleStart}
                >
                    <Text style={styles.buttonText}>EMPEZAR</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between', // Distribuye espacio arriba, medio y abajo
        paddingVertical: 60, // Espacio arriba y abajo de la pantalla
    },
    
    // --- Header ---
    headerContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    logoImage: {
        width: 120, 
        height: 80,
        resizeMode: 'contain',
    },
    brandText: {
        fontSize: 18,
        color: '#FFAB91', // Tono salmón del logo
        letterSpacing: 3,
        fontWeight: '300',
        marginTop: 5,
    },
    sloganText: {
        fontSize: 10,
        color: '#DDD', // Texto muy clarito debajo del logo
        letterSpacing: 1,
        marginTop: 2,
    },

    // --- Contenido Central ---
    contentContainer: {
        alignItems: 'center',
        width: '80%',
    },
    welcomeTitle: {
        fontSize: 38, // Tamaño grande como en el PDF
        fontWeight: 'bold',
        color: '#FF80AB', // Color ROSA del diseño
        marginBottom: 20,
    },
    descriptionText: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        lineHeight: 26, // Espaciado entre líneas para mejor lectura
    },

    // --- Botón ---
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 40,
    },
    button: {
        backgroundColor: '#FFCC80', // Naranja claro/durazno del diseño
        paddingVertical: 20,
        paddingHorizontal: 60,
        borderRadius: 20, // Bordes muy redondeados
        width: '80%', // Ocupa el 80% del ancho
        alignItems: 'center',
        elevation: 3, // Sombra en Android
        shadowColor: '#000', // Sombra en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    buttonPressed: {
        backgroundColor: '#FFB74D', // Se oscurece un poco al presionar
        opacity: 0.9,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 22,
        fontWeight: 'bold',
        letterSpacing: 1,
        textTransform: 'uppercase',
    },
});