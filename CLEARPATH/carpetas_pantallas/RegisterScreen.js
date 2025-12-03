import React, { useState } from 'react';
import { 
    View, Text, StyleSheet, TextInput, Pressable,
    SafeAreaView, Image, ScrollView, Alert,
    ActivityIndicator,
} from 'react-native';

import db from '../database/db';
import { UsuarioController } from '../controllers/UsuarioController';

// Solo una vez
const logoImage = require('../assets/adaptive-icon.png');

export default function RegisterScreen({ navigation }) {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');
    
    const [loading, setLoading] = useState(false);


    

    const controller = new UsuarioController();

    const handleRegister = async () => {
        // Validaciones visuales rápidas
        if (!nombre || !email || !password) {
            Alert.alert('Campos incompletos', 'Por favor llena al menos Nombre, Email y Contraseña.');
            return;
        }

        setLoading(true); 
        try {
            
            await controller.registrar(
                nombre, 
                apellido, 
                email, 
                password, 
                fechaNacimiento
            );

            
            Alert.alert(
                '¡Cuenta Creada!', 
                'Tu usuario ha sido registrado exitosamente en la base de datos.',
                [
                    { 
                        text: "Ir a Iniciar Sesión", 
                        onPress: () => navigation.navigate('Login') 
                    }
                ]
            );

        } catch (error) {
            
            console.error(error);
            Alert.alert('Error al registrar', error.message || 'Ocurrió un problema desconocido.');
        } finally {
            setLoading(false); 
        }

    };

   return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                {/* LOGO */}
                <View style={styles.logoContainer}>
                    <Image source={logoImage} style={styles.logoImage} />
                    <Text style={styles.brandText}>CLEAR PATH</Text>
                </View>

                <Text style={styles.title}>¡ÚNETE A CLEAR PATH!</Text>

                <View style={styles.formContainer}>

                    <Text style={styles.label}>Nombre *</Text>
                    <TextInput 
                        style={styles.input} 
                        value={nombre}
                        onChangeText={setNombre}
                        placeholder="Ej. Juan"
                    />

                    <Text style={styles.label}>Apellido</Text>
                    <TextInput 
                        style={styles.input} 
                        value={apellido}
                        onChangeText={setApellido}
                        placeholder="Ej. Pérez"
                    />

                    <Text style={styles.label}>E-mail *</Text>
                    <TextInput 
                        style={styles.input} 
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                        placeholder="ejemplo@correo.com"
                    />

                    <Text style={styles.label}>Crear contraseña *</Text>
                    <TextInput 
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                        placeholder="Mínimo 6 caracteres"
                    />

                    <Text style={styles.label}>Fecha de nacimiento</Text>
                    <TextInput 
                        style={styles.input}
                        value={fechaNacimiento}
                        onChangeText={setFechaNacimiento}
                        placeholder="DD/MM/AAAA"
                    />

                    {/* BOTÓN */}
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
    safeArea: { 
        flex: 1, 
        backgroundColor: '#fff' 
    },
    scrollContainer: { 
        alignItems: 'center', 
        paddingBottom: 40 
    },
    logoContainer: { 
        marginTop: 30, 
        alignItems: 'center' },
    logoImage: { 
        width: 80, 
        height: 50, 
        resizeMode: 'contain' 
    },
    brandText: { 
        color: '#FFAB91', 
        letterSpacing: 2, 
        marginTop: 5 
    },
    title: { 
        fontSize: 22, 
        fontWeight: 'bold', 
        marginVertical: 20 
    },
    formContainer: { width: '85%' },
    label: { marginBottom: 5, fontWeight: '500' },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 25,
        padding: 12,
        marginBottom: 20
    },
    button: {

        backgroundColor: '#FFCC80',

        backgroundColor: '#FFCC80', 

        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center'
    },

    buttonText: { 
        color: '#fff', 
        fontWeight: 'bold', 
        fontSize: 16 },
    buttonDisabled: {
        backgroundColor: '#FFE0B2',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});