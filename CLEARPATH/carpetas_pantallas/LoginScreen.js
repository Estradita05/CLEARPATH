import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Pressable, 
    KeyboardAvoidingView, 
    Platform, 
    Alert, 
    SafeAreaView, 
    Image, 
    ActivityIndicator 
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// IMPORTANTE: Asegúrate de que esta imagen exista en tu carpeta assets
const logoImage = require('../assets/adaptive-icon.png'); 

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);

    const handleLogin = async () => {
        // 1. Validaciones básicas
        if (email.trim() === '') {
            Alert.alert('Error', 'Por favor ingresa tu correo.');
            return;
        } 
        if (password.trim() === '') {
            Alert.alert('Error', 'Por favor ingresa tu contraseña.');
            return;
        }

        setLoading(true);

        try {
            // AQUÍ IRÁ TU LÓGICA DE BASE DE DATOS MÁS ADELANTE
            // Por ahora simulamos una espera de 1 segundo
            setTimeout(() => {
                setLoading(false);
                
                // Mensaje de éxito
                Alert.alert('¡Bienvenido!', 'Has iniciado sesión correctamente', [
                    { 
                        text: "CONTINUAR", 
                        onPress: () => {
                            // CORRECCIÓN: Ahora sí navega a la pantalla 'Welcome'
                            navigation.replace("Welcome"); 
                        }
                    }
                ]);
            }, 1500);

        } catch (error) {
            console.error("Error en login:", error);
            Alert.alert('Error', 'Hubo un problema al iniciar sesión');
            setLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.container}
            >
                {/* LOGO */}
                <View style={styles.logoContainer}>
                    <Image source={logoImage} style={styles.logoImage} />
                    <Text style={styles.brandText}>CLEAR PATH</Text>
                </View>

                {/* BANNER NARANJA */}
                <View style={styles.bannerContainer}>
                    <Text style={styles.bannerText}>INICIAR SESIÓN</Text>
                </View>

                <View style={styles.contentContainer}>
                    <Text style={styles.subTitle}>Ingresa tus datos</Text>

                    {/* FORMULARIO */}
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Correo Electrónico</Text>
                        <TextInput
                            style={styles.input}
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />

                        <Text style={styles.label}>Contraseña</Text>
                        <TextInput
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry={true}
                        />
                    </View>

                    {/* OLVIDASTE CONTRASEÑA */}
                    <Pressable onPress={() => console.log("Recuperar contraseña")} style={styles.forgotPassContainer}>
                        <Text style={styles.linkTextPink}>
                            ¿Olvidaste tu contraseña?
                        </Text>
                    </Pressable>

                    {/* BOTÓN INICIAR SESIÓN */}
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

                    {/* REGISTRARSE */}
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
        backgroundColor: '#fff',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
    },
    logoContainer: {
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
    },
    logoImage: {
        width: 100, 
        height: 60,
        resizeMode: 'contain',
    },
    brandText: {
        fontSize: 16,
        color: '#FFAB91', 
        letterSpacing: 2,
        marginTop: 5,
        fontWeight: '300',
    },
    bannerContainer: {
        width: '100%',
        backgroundColor: '#FFCC80', 
        paddingVertical: 10,
        alignItems: 'center',
        marginBottom: 30,
    },
    bannerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textTransform: 'uppercase',
    },
    contentContainer: {
        width: '85%',
        alignItems: 'center',
    },
    subTitle: {
        fontSize: 16,
        color: '#555',
        marginBottom: 20,
    },
    inputContainer: {
        width: '100%',
    },
    label: {
        fontSize: 14,
        color: '#333',
        marginBottom: 5,
        fontWeight: '500',
        marginLeft: 5,
    },
    input: {
        backgroundColor: '#F5F5F5', 
        borderRadius: 20, 
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        fontSize: 15,
        color: '#333',
    },
    forgotPassContainer: {
        alignSelf: 'flex-end',
        marginBottom: 30,
    },
    linkTextPink: {
        color: '#FF80AB', 
        fontSize: 14,
        fontWeight: '400',
    },
    button: {
        backgroundColor: '#FF9800', 
        paddingVertical: 15,
        borderRadius: 25, 
        width: '100%',
        alignItems: 'center',
        marginBottom: 20,
        elevation: 2,
    },
    buttonDisabled: {
        backgroundColor: '#FFCC80',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    footer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    footerText: {
        fontSize: 14,
        color: '#555',
    },
});