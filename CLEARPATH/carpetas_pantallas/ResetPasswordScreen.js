import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, Image, Alert } from 'react-native';

const logoImage = require('../assets/image.png'); // Usa tu logo

export default function ResetPasswordScreen({ navigation }) {
    const [email, setEmail] = useState('');

    const handleSearch = () => {
        if (email.trim() === '') {
            Alert.alert("Campo vacío", "Por favor ingresa tu correo.");
            return;
        }

        Alert.alert(
            "Restablecer contraseña",
            `Se envió el correo electrónico a ${email}. Si este correo está vinculado a una cuenta, podrás restablecer tu contraseña.`,
            [
                { text: "Volver a inicio", onPress: () => navigation.navigate("Login") }
            ]
        );
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                
                <View style={styles.header}>
                    <Image source={logoImage} style={styles.logoImage} />
                    <Text style={styles.brandText}>CLEAR PATH</Text>
                </View>

                <View style={styles.bannerContainer}>
                    <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Text style={styles.backButtonText}>{'<'}</Text>
                    </Pressable>
                    <Text style={styles.bannerText}>Restablecer contraseña</Text>
                    <View style={{width: 20}} />
                </View>

                <View style={styles.content}>
                    <Text style={styles.subtitle}>Encontremos tu cuenta CLEAR PATH</Text>
                    <Text style={styles.label}>¿Cuál es tu correo electrónico, nombre o nombre de usuario?</Text>
                    
                    <TextInput 
                        style={styles.input} 
                        placeholder="🔍 Buscar" 
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                    />

                    <Pressable style={styles.searchButton} onPress={handleSearch}>
                        <Text style={styles.searchButtonText}>Buscar</Text>
                    </Pressable>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fff' },
    container: { flex: 1, alignItems: 'center' },
    header: { alignItems: 'center', marginTop: 20, marginBottom: 20 },
    logoImage: { width: 80, height: 50, resizeMode: 'contain' },
    brandText: { fontSize: 14, color: '#FFAB91', letterSpacing: 2, marginTop: 5 },
    bannerContainer: { width: '100%', backgroundColor: '#FFCC80', paddingVertical: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 30 },
    bannerText: { fontSize: 16, fontWeight: 'bold', color: '#000' },
    backButtonText: { fontSize: 24, fontWeight: 'bold' },
    content: { width: '85%' },
    subtitle: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 10 },
    label: { fontSize: 14, color: '#666', marginBottom: 20 },
    input: { backgroundColor: '#F5F5F5', borderRadius: 25, paddingVertical: 12, paddingHorizontal: 20, marginBottom: 30, fontSize: 16, flexDirection: 'row', alignItems: 'center' },
    searchButton: { backgroundColor: '#FFCC80', paddingVertical: 15, borderRadius: 25, alignItems: 'center' },
    searchButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});