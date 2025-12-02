import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, SafeAreaView, ScrollView } from 'react-native';

const logoImage = require('../assets/adaptive-icon.png'); 

export default function HelpScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                
                {/* ENCABEZADO */}
                <View style={styles.header}>
                    <Image source={logoImage} style={styles.logoImage} />
                </View>

                {/* BANNER TÍTULO */}
                <View style={styles.bannerContainer}>
                    <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Text style={styles.backButtonText}>{'<'}</Text>
                    </Pressable>
                    <Text style={styles.bannerText}>AYUDA Y SOPORTE</Text>
                    <View style={{width: 20}} /> 
                </View>

                <View style={styles.content}>
                    
                    {/* SECCIÓN FAQ */}
                    <Text style={styles.sectionTitlePink}>Preguntas Frecuentes</Text>
                    
                    <View style={styles.faqItem}>
                        <Text style={styles.faqText}>¿Cómo inicio una nueva guía?</Text>
                    </View>
                    <View style={styles.faqItem}>
                        <Text style={styles.faqText}>¿Cómo reporto un problema?</Text>
                    </View>

                    {/* SECCIÓN CONTACTO */}
                    <Text style={styles.sectionTitlePink}>Contactar Soporte</Text>
                    <Text style={styles.description}>
                        Si no encuentras lo que buscas, contáctanos directamente.
                    </Text>

                    <Pressable style={styles.messageButton} onPress={() => console.log("Ir a Enviar Mensaje")}>
                        <Text style={styles.messageButtonText}>Enviar un Mensaje</Text>
                    </Pressable>

                    <Text style={styles.emailText}>O escribe a:{'\n'}soporte@clearpath.com</Text>

                    {/* FOOTER */}
                    <View style={styles.footerInfo}>
                        <Text style={styles.footerTitle}>Acerca de CLEAR PATH</Text>
                        <Text style={styles.footerText}>Versión: 1.0.0</Text>
                        <Text style={styles.footerText}>© 2025 CLEAR PATH.</Text>
                        <Text style={styles.footerText}>Todos los derechos reservados</Text>
                    </View>
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
    header: {
        alignItems: 'center', marginTop: 10, marginBottom: 10,
    },
    logoImage: {
        width: 60, height: 40, resizeMode: 'contain',
    },
    bannerContainer: {
        backgroundColor: '#FFCC80',
        paddingVertical: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    bannerText: {
        fontSize: 18, fontWeight: 'bold', color: '#000',
    },
    backButtonText: {
        fontSize: 24, fontWeight: 'bold', color: '#000',
    },
    content: {
        paddingHorizontal: 30,
    },
    sectionTitlePink: {
        color: '#FF80AB', fontSize: 18, fontWeight: 'bold', marginBottom: 15, marginTop: 10,
    },
    faqItem: {
        borderBottomWidth: 1, borderBottomColor: '#EEE', paddingVertical: 15,
    },
    faqText: {
        fontSize: 16, color: '#333',
    },
    description: {
        fontSize: 14, color: '#666', marginBottom: 20,
    },
    messageButton: {
        backgroundColor: '#FFCC80',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 20,
    },
    messageButtonText: {
        color: '#FFF', fontSize: 16, fontWeight: 'bold',
    },
    emailText: {
        textAlign: 'center', color: '#555', marginBottom: 40, fontSize: 14, lineHeight: 20,
    },
    footerInfo: {
        alignItems: 'center', marginBottom: 30,
    },
    footerTitle: {
        fontWeight: 'bold', marginBottom: 5, color: '#333',
    },
    footerText: {
        fontSize: 12, color: '#888', marginBottom: 2,
    }
});