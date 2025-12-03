import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, Image } from 'react-native';

const logoImage = require('../assets/image.png'); 

export default function TaskDetailScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            
            <View style={styles.header}>
                <Image source={logoImage} style={styles.logoImage} />
                <Text style={styles.brandText}>CLEAR PATH</Text>
            </View>

            <View style={styles.bannerContainer}>
                <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>{'<'}</Text>
                </Pressable>
                <Text style={styles.bannerText}>TAREAS</Text>
                <View style={{width: 20}} />
            </View>

            <View style={styles.content}>
                
                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Tarea pendiente</Text>
                    <Text style={styles.cardText}>Escucha atentamente el{'\n'}siguiente audio-libro</Text>

                    <View style={styles.audioControls}>
                        <Text style={styles.controlIcon}>⏮</Text>
                        <Text style={styles.controlIconPlay}>🔊</Text>
                        <Text style={styles.controlIcon}>⏭</Text>
                    </View>
                </View>

                <View style={styles.actionButtons}>
                    <View style={styles.actionCircle}><Text>🔗</Text></View>
                    <View style={styles.actionCircle}><Text>💬</Text></View>
                    <View style={styles.actionCircle}><Text>📥</Text></View>
                </View>

            </View>

            <View style={styles.fakeBottomBar}>
                <View style={styles.barItem}><Text>👤</Text></View>
                <View style={styles.barItem}><Text>🗄️</Text></View>
                <View style={styles.barItem}><Text>🧘</Text></View>
                <View style={styles.barItem}><Text>☰</Text></View>
                <View style={[styles.barItem, styles.activeItem]}><Text>⚙️</Text></View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fff', justifyContent: 'space-between' },
    header: { alignItems: 'center', marginTop: 10, marginBottom: 10 },
    logoImage: { width: 200, height: 200, resizeMode: 'contain' },
    brandText: { fontSize: 12, color: '#FFAB91', letterSpacing: 2 },
    bannerContainer: { backgroundColor: '#FFCC80', paddingVertical: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 40 },
    bannerText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
    backButtonText: { fontSize: 24, fontWeight: 'bold' },
    content: { paddingHorizontal: 30, alignItems: 'center' },
    card: { backgroundColor: '#FBE9E7', borderRadius: 20, padding: 30, width: '100%', alignItems: 'center', marginBottom: 30 },
    cardTitle: { fontSize: 20, fontWeight: 'bold', color: '#000', marginBottom: 15 },
    cardText: { fontSize: 16, color: '#555', textAlign: 'center', marginBottom: 25 },
    audioControls: { flexDirection: 'row', backgroundColor: '#FF80AB', borderRadius: 25, paddingVertical: 10, paddingHorizontal: 30, alignItems: 'center', justifyContent: 'space-between', width: '80%' },
    controlIcon: { fontSize: 20, color: '#000' },
    controlIconPlay: { fontSize: 24, color: '#000' },
    actionButtons: { flexDirection: 'row', justifyContent: 'center', gap: 20 },
    actionCircle: { width: 50, height: 30, backgroundColor: '#FF80AB', borderRadius: 15, justifyContent: 'center', alignItems: 'center' },
    fakeBottomBar: { height: 60, backgroundColor: '#FFCC80', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' },
    barItem: { padding: 10 },
    activeItem: { backgroundColor: '#FF80AB', borderRadius: 20, padding: 12, marginTop: -15 }
});