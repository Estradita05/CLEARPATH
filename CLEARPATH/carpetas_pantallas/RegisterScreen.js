import React, { useState } from 'react';
import { View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Pressable, 
    SafeAreaView, 
    Image, 
    ScrollView,
    Alert,
    ActivityIndicator
} from 'react-native';

import { UsuarioController } from '../controllers/UsuarioController';

const logoImage = require('../assets/image.png'); 

export default function RegisterScreen({ navigation }) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    
    const [loading, setLoading] = useState(false);

    const controller = new UsuarioController();

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleRegister = async () => {
        if (nombre.trim() === '' || email.trim() === '' || password.trim() === '') {
            Alert.alert('Faltan datos', 'Por favor completa Nombre, Email y Contraseña.');
            return;
        }

        if (!isValidEmail(email)) {
            Alert.alert('Correo inválido', 'El formato del correo no es correcto.');
            return;
        }

        if (password.length < 6) {
            Alert.alert('Contraseña corta', 'La contraseña debe tener al menos 6 caracteres.');
            return;
        }

        setLoading(true); 

        try {
            await controller.registrar(
                nombre, 
                apellido, 
                email, 
                password, 
               
            );

            Alert.alert(
                '¡Bienvenido a Clear Path!', 
                'Tu cuenta ha sido creada exitosamente.',
                [
                    { 
                        text: "Iniciar Sesión", 
                        onPress: () => navigation.navigate('Login') 
                    }
                ]
            );

        } catch (error) {
            console.log("Error detectado:", error.message); 
           
            if (error.message && (error.message.includes('UNIQUE') || error.message.includes('constraint failed'))) {
                Alert.alert(
                    'Correo ya registrado', 
                    [
                        { text: "Entendido" },
                        { text: "Ir a Login", onPress: () => navigation.navigate('Login') }
                    ]
                );
            } else {
                // Cualquier otro error
                Alert.alert('Error', 'No se pudo crear la cuenta. Por favor intenta de nuevo.');
            }
        } finally {
            setLoading(false); 
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                
                <View style={styles.logoContainer}>
                    <Image source={logoImage} style={styles.logoImage} />
                  
                </View>

                <Text style={styles.title}>¡ÚNETE A CLEAR PATH!</Text>

                <View style={styles.formContainer}>
                    <Text style={styles.label}>Nombre *</Text>
                    <TextInput style={styles.input} value={nombre} onChangeText={setNombre} placeholder="Ej. Juan" />

                    <Text style={styles.label}>Apellido</Text>
                    <TextInput style={styles.input} value={apellido} onChangeText={setApellido} placeholder="Ej. Pérez" />

                    <Text style={styles.label}>E-mail *</Text>
                    <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" placeholder="ejemplo@correo.com" />

                    <Text style={styles.label}>Crear contraseña *</Text>
                    <TextInput style={styles.input} value={password} onChangeText={setPassword} secureTextEntry placeholder="Mínimo 6 caracteres" />

                    
                    <Pressable 
                        style={[styles.button, loading && styles.buttonDisabled]} 
                        onPress={handleRegister}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="#FFF" />
                        ) : (
                            <Text style={styles.buttonText}>CREAR CUENTA</Text>
                        )}
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fff' },
    scrollContainer: { alignItems: 'center', paddingBottom: 40 },
    logoContainer: { marginTop: 30, marginBottom: 10, alignItems: 'center' },
logoImage: { width: 200, height: 100, resizeMode: 'contain' },    brandText: { fontSize: 14, color: '#FFAB91', letterSpacing: 2, marginTop: 5, fontWeight: '300' },
    title: { fontSize: 22, fontWeight: 'bold', color: '#000', marginBottom: 30, marginTop: 10 },
    formContainer: { width: '85%' },
    label: { fontSize: 16, color: '#333', marginBottom: 8, fontWeight: '500' },
    input: { backgroundColor: '#F5F5F5', borderRadius: 25, paddingVertical: 12, paddingHorizontal: 20, marginBottom: 20, fontSize: 15, color: '#333', borderWidth: 1, borderColor: '#EEE' },
    button: { backgroundColor: '#FFCC80', paddingVertical: 15, borderRadius: 25, alignItems: 'center', marginTop: 20, elevation: 2 },
    buttonDisabled: { backgroundColor: '#FFE0B2' },
    buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold', textTransform: 'uppercase' },
});