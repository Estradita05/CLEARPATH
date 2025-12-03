import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform, 
Alert,SafeAreaView, Image,ActivityIndicatr } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { UsuarioController } from '../controllers/UsuarioController';

const logoImage = require('../assets/Logo.jpeg'); 

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const controller = new UsuarioController();

    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleLogin = async () => {
        
        if (email.trim() === '' || password.trim() === '') {
            Alert.alert('Campos incompletos', 'Por favor ingresa tu correo y contraseña.');
            return;
        }

        if (!isValidEmail(email)) {
            Alert.alert('Correo inválido', 'Por favor ingresa un correo electrónico válido (ejemplo@correo.com).');
            return;
        }

        setLoading(true);

        try {
            const usuarioEncontrado = await controller.login(email, password);

            if (usuarioEncontrado) {
                console.log("Usuario autenticado:", usuarioEncontrado.nombre);
                
                await AsyncStorage.setItem('usuario_sesion', JSON.stringify(usuarioEncontrado));

                Alert.alert('¡Bienvenido!', `Hola de nuevo, ${usuarioEncontrado.nombre}`, [
                    { 
                        text: "CONTINUAR", 
                        onPress: () => {
                            setEmail('');
                            setPassword('');
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Welcome' }],
                            });
                        }
                    }
                ]);
            } else {
                Alert.alert('Acceso Denegado', 'El correo o la contraseña son incorrectos, o el usuario no está registrado.');
            }

        } catch (error) {
            console.error("Error en login:", error);
            Alert.alert('Error', 'Hubo un problema al intentar iniciar sesión.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                <View style={styles.logoContainer}>
                    <Image source={logoImage} style={styles.logoImage} />
                    <Text style={styles.brandText}>CLEAR PATH</Text>
                </View>

                <View style={styles.bannerContainer}>
                    <Text style={styles.bannerText}>INICIAR SESIÓN</Text>
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.subTitle}>Ingresa tus datos</Text>

                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Correo Electrónico</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            placeholder="ejemplo@correo.com"
                        />

                        <Text style={styles.label}>Contraseña</Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                            placeholder="********"
                        />
                    </View>

                    <Pressable onPress={() => Alert.alert("Info", "Contacta a soporte para recuperar tu cuenta.")} style={styles.forgotPassContainer}>
                        <Text style={styles.linkTextPink}>
                            ¿Olvidaste tu contraseña?
                        </Text>
                    </Pressable>

                    <Pressable 
                        style={[styles.button, loading && styles.buttonDisabled]} 
                        onPress={handleLogin}
                        disabled={loading}
                    >
                        {loading ? (
                            <ActivityIndicator color="#FFF" />
                        ) : (
                            <Text style={styles.buttonText}>Iniciar Sesión</Text>
                        )}
                    </Pressable>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>¿No tienes cuenta? </Text>
                        <Pressable onPress={() => navigation.navigate("Registro")}>
                            <Text style={styles.linkTextPink}> Registrate</Text>
                        </Pressable>
                    </View>
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { 
        flex: 1, 
        backgroundColor: '#fff' 
    },
    container: { 
        flex: 1, 
        alignItems: 'center', 
        width: '100%' 
    },
    logoContainer: { 
        marginTop: 40, 
        marginBottom: 20, 
        alignItems: 'center' 
    },
    // CAMBIO: Aumenté el tamaño del logo como pediste
    logoImage: { 
        width: 180, // Antes era 100
        height: 120, // Antes era 60
        resizeMode: 'contain' 
    },
    brandText: { 
        fontSize: 16, 
        color: '#FFAB91', 
        letterSpacing: 2, 
        marginTop: 5, 
        fontWeight: '300' 
    },
    bannerContainer: { 
        width: '100%', 
        backgroundColor: '#FFCC80', 
        paddingVertical: 10, 
        alignItems: 'center', 
        marginBottom: 30 
    },
    bannerText: { 
        fontSize: 18, 
        fontWeight: 'bold', 
        color: '#000', 
        textTransform: 'uppercase' 
    },
    contentContainer: { 
        width: '85%', 
        alignItems: 'center' 
    },
    subTitle: { 
        fontSize: 16, 
        color: '#555', 
        marginBottom: 20 
    },
    inputContainer: { 
        width: '100%' 
    },
    label: { 
        fontSize: 14, 
        color: '#333', 
        marginBottom: 5, 
        fontWeight: '500', 
        marginLeft: 5 
    },
    input: { 
        backgroundColor: '#F5F5F5', 
        borderRadius: 20, 
        paddingVertical: 10, 
        paddingHorizontal: 15, 
        marginBottom: 20, 
        fontSize: 15, 
        color: '#333' 
    },
    forgotPassContainer: { 
        alignSelf: 'flex-end', 
        marginBottom: 30 
    },
    linkTextPink: { 
        color: '#FF80AB', 
        fontSize: 14, 
        fontWeight: '400' 
    },
    button: { 
        backgroundColor: '#FF9800', 
        paddingVertical: 15, 
        borderRadius: 25, 
        width: '100%', 
        alignItems: 'center', 
        marginBottom: 20, 
        elevation: 2 
    },
    buttonDisabled: { 
        backgroundColor: '#FFCC80' 
    },
    buttonText: { 
        color: '#FFFFFF', 
        fontSize: 18, 
        fontWeight: 'bold' 
    },
    footer: { 
        flexDirection: 'row', 
        marginTop: 10 
    },
    footerText: { 
        fontSize: 14, 
        color: '#555' 
    },
});