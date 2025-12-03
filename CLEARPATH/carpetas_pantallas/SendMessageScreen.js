import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, SafeAreaView, Image, ScrollView, Alert } from 'react-native';

const logoImage = require('../assets/image.png'); 

export default function SendMessageScreen({ navigation }) {
    const [asunto, setAsunto] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleSend = () => {
        Alert.alert("Mensaje Enviado", "Gracias por ayudarnos a mejorar.", [
            { text: "OK", onPress: () => navigation.goBack() }
        ]);
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                
                <View style={styles.header}>
                    <Image source={logoImage} style={styles.logoImage} />
                    <Text style={styles.brandText}>CLEAR PATH</Text>
                </View>

                <View style={styles.bannerContainer}>
                    <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Text style={styles.backButtonText}>{'<'}</Text>
                    </Pressable>
                    <Text style={styles.bannerText}>ENVIAR MENSAJE</Text>
                    <View style={{width: 20}} />
                </View>

                <View style={styles.content}>
                    <View style={styles.alertIconContainer}>
                        <Text style={{fontSize: 60}}>⚠️</Text> 
                    </View>

                    <Text style={styles.title}>Reporta un problema</Text>
                    <Text style={styles.subtitle}>Ayúdanos a mejorar la aplicación</Text>

                    <Text style={styles.label}>Asunto</Text>
                    <TextInput style={styles.input} value={asunto} onChangeText={setAsunto} />

                    <Text style={styles.label}>Mensaje</Text>
                    <TextInput 
                        style={[styles.input, styles.textArea]} 
                        value={mensaje} 
                        onChangeText={setMensaje} 
                        placeholder="Describe tu problema..."
                        multiline
                        numberOfLines={4}
                    />

                    <Pressable style={styles.sendButton} onPress={handleSend}>
                        <Text style={styles.sendButtonText}>Enviar un Mensaje</Text>
                    </Pressable>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fff' },
    scrollContainer: { paddingBottom: 40 },
    header: { alignItems: 'center', marginTop: 10, marginBottom: 10 },
    logoImage: { width: 60, height: 40, resizeMode: 'contain' },
    brandText: { fontSize: 12, color: '#FFAB91', letterSpacing: 2 },
    bannerContainer: { backgroundColor: '#FFCC80', paddingVertical: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 20 },
    bannerText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
    backButtonText: { fontSize: 24, fontWeight: 'bold' },
    content: { paddingHorizontal: 30, alignItems: 'center' },
    alertIconContainer: { marginBottom: 10 },
    title: { fontSize: 22, fontWeight: 'bold', color: '#000', marginBottom: 5 },
    subtitle: { fontSize: 14, color: '#666', marginBottom: 30 },
    label: { alignSelf: 'flex-start', fontSize: 16, fontWeight: 'bold', marginBottom: 5, color: '#000' },
    input: { width: '100%', backgroundColor: '#F5F5F5', borderRadius: 15, padding: 15, marginBottom: 20, fontSize: 16 },
    textArea: { height: 100, textAlignVertical: 'top' },
    sendButton: { backgroundColor: '#FFCC80', paddingVertical: 15, borderRadius: 25, width: '100%', alignItems: 'center' },
    sendButtonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});