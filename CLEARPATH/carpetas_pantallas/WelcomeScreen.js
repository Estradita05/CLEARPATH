import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, SafeAreaView } from 'react-native';

const logoImage = require('../assets/image.png'); 
export default function WelcomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image source={logoImage} style={styles.logo} />
                <Text style={styles.title}>¡Bienvenido!</Text>
                <Text style={styles.subtitle}>Tu guía personal para aprender con confianza.</Text>
                
                <Pressable 
                    style={styles.button}
                    onPress={() => navigation.replace('Home')}
                >
                    <Text style={styles.buttonText}>EMPEZAR</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', justifyContent: 'center' },
    content: { alignItems: 'center', padding: 20 },
    logo: { width: 300, height: 70, resizeMode: 'contain', marginBottom: 20, width: 200, height: 100, resizeMode: 'contain' },
    title: { fontSize: 32, fontWeight: 'bold', color: '#FF80AB', marginBottom: 10 },
    subtitle: { fontSize: 18, textAlign: 'center', color: '#666', marginBottom: 40 },
    button: { backgroundColor: '#c4944cff', paddingVertical: 35, paddingHorizontal: 80, borderRadius: 30 },
    buttonText: { color: '#FFF', fontSize: 20, fontWeight: 'bold' }
});