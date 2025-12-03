import React, { useState } from 'react';
import { 
    View, Text, StyleSheet, TextInput, Pressable,
    SafeAreaView, Image, ScrollView, Alert 
} from 'react-native';
import db from '../database/db'; 

const logoImage = require('../assets/adaptive-icon.png');

export default function RegisterScreen({ navigation }) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');

    const handleRegister = () => {
        if (!nombre || !apellido || !email || !password || !fechaNacimiento) {
            Alert.alert("Error", "Por favor llena todos los campos");
            return;
        }

        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO usuarios (nombre, apellido, email, password, fechaNacimiento)
                 VALUES (?, ?, ?, ?, ?);`,
                [nombre, apellido, email, password, fechaNacimiento],
                () => {
                    Alert.alert(
                        "Cuenta creada",
                        "Tu registro fue exitoso",
                        [{ text: "OK", onPress: () => navigation.goBack() }]
                    );
                },
                (txObj, error) => {
                    console.log(error);
                    Alert.alert("Error", "Este correo ya está registrado");
                }
            );
        });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                {/* LOGO */}
                <View style={styles.logoContainer}>
                    <Image source={logoImage} style={styles.logoImage} />
                    <Text style={styles.brandText}>CLEAR PATH</Text>
                </View>

                {/* TÍTULO */}
                <Text style={styles.title}>¡ÚNETE A CLEAR PATH!</Text>

                {/* FORMULARIO */}
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Nombre</Text>
                    <TextInput style={styles.input} value={nombre} onChangeText={setNombre} />

                    <Text style={styles.label}>Apellido</Text>
                    <TextInput style={styles.input} value={apellido} onChangeText={setApellido} />

                    <Text style={styles.label}>E-mail</Text>
                    <TextInput 
                        style={styles.input} 
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <Text style={styles.label}>Contraseña</Text>
                    <TextInput 
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <Text style={styles.label}>Fecha de nacimiento</Text>
                    <TextInput 
                        style={styles.input}
                        value={fechaNacimiento}
                        onChangeText={setFechaNacimiento}
                        placeholder="DD/MM/AAAA"
                    />

                    {/* BOTÓN REGISTRO */}
                    <Pressable style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>CREAR CUENTA</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fff' },
    scrollContainer: { alignItems: 'center', paddingBottom: 40 },
    logoContainer: { marginTop: 30, alignItems: 'center' },
    logoImage: { width: 80, height: 50, resizeMode: 'contain' },
    brandText: { color: '#FFAB91', letterSpacing: 2, marginTop: 5 },
    title: { fontSize: 22, fontWeight: 'bold', marginVertical: 20 },
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
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center'
    },
    buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});
