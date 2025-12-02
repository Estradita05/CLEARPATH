import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Pressable, 
    SafeAreaView, 
    Image, 
    ScrollView 
} from 'react-native';

const logoImage = require('../assets/adaptive-icon.png'); 

export default function RegisterScreen({ navigation }) {
    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fechaNacimiento, setFechaNacimiento] = useState('');

    const handleRegister = () => {
        // Aquí iría la lógica de registro con SQLite
        console.log("Registrando usuario...");
        navigation.goBack(); // Por ahora regresa al Login
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
                    <TextInput 
                        style={styles.input} 
                        value={nombre}
                        onChangeText={setNombre}
                    />

                    <Text style={styles.label}>Apellido</Text>
                    <TextInput 
                        style={styles.input} 
                        value={apellido}
                        onChangeText={setApellido}
                    />

                    <Text style={styles.label}>E-mail</Text>
                    <TextInput 
                        style={styles.input} 
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <Text style={styles.label}>Crear contraseña</Text>
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
                        placeholderTextColor="#AAA"
                    />

                    {/* BOTÓN CREAR CUENTA */}
                    <Pressable style={styles.button} onPress={handleRegister}>
                        <Text style={styles.buttonText}>CREAR CUENTA</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        alignItems: 'center',
        paddingBottom: 40,
    },
    logoContainer: {
        marginTop: 30,
        marginBottom: 10,
        alignItems: 'center',
    },
    logoImage: {
        width: 80, 
        height: 50,
        resizeMode: 'contain',
    },
    brandText: {
        fontSize: 14,
        color: '#FFAB91',
        letterSpacing: 2,
        marginTop: 5,
        fontWeight: '300',
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 30,
        marginTop: 10,
    },
    formContainer: {
        width: '85%',
    },
    label: {
        fontSize: 16,
        color: '#333',
        marginBottom: 8,
        fontWeight: '500',
    },
    input: {
        backgroundColor: '#F5F5F5',
        borderRadius: 25,
        paddingVertical: 12,
        paddingHorizontal: 20,
        marginBottom: 20,
        fontSize: 15,
        color: '#333',
        borderWidth: 1,
        borderColor: '#EEE',
    },
    button: {
        backgroundColor: '#FFCC80', // Naranja claro
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginTop: 20,
        elevation: 2,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },
});