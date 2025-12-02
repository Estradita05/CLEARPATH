import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, Image } from 'react-native';

const logoImage = require('../assets/adaptive-icon.png'); 

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            
            {/* ENCABEZADO */}
            <View style={styles.header}>
                <Image source={logoImage} style={styles.logoImage} />
                <Text style={styles.brandText}>CLEAR PATH</Text>
            </View>

            {/* BANNER TÍTULO */}
            <View style={styles.bannerContainer}>
                <Text style={styles.bannerText}>MENÚ PRINCIPAL</Text>
            </View>

            {/* BOTONES DEL MENÚ */}
            <View style={styles.menuContainer}>
                
                {/* 1. Botón MI PERFIL */}
                <MenuButton 
                    title="Mi perfil" 
                    iconName="user" 
                    onPress={() => navigation.navigate('Profile')} 
                />

                {/* 2. Botón HISTORIAL */}
                <MenuButton 
                    title="Historial de rutas" 
                    iconName="history" 
                    onPress={() => console.log("Navegar a Historial")}
                />

                {/* 3. Botón AJUSTES */}
                <MenuButton 
                    title="Ajustes" 
                    iconName="settings" 
                    onPress={() => console.log("Navegar a Ajustes")}
                />

                {/* 4. Botón AYUDA */}
                <MenuButton 
                    title="Ayuda y soporte" 
                    iconName="help" 
                    onPress={() => navigation.navigate('Help')} 
                />

            </View>

            {/* BARRA INFERIOR SIMULADA */}
            <View style={styles.fakeBottomBar}>
                <View style={styles.barItem}><Text>👤</Text></View>
                <View style={styles.barItem}><Text>🗄️</Text></View>
                <View style={styles.barItem}><Text>🧘</Text></View>
                <View style={[styles.barItem, styles.activeItem]}><Text>☰</Text></View>
                <View style={styles.barItem}><Text>⚙️</Text></View>
            </View>

        </SafeAreaView>
    );
}

// Componente auxiliar para los botones
const MenuButton = ({ title, onPress }) => (
    <Pressable style={styles.menuButton} onPress={onPress}>
        <View style={styles.iconPlaceholder} /> 
        <Text style={styles.menuButtonText}>{title}</Text>
    </Pressable>
);

const styles = StyleSheet.create({
    safeArea: {
        flex: 1, backgroundColor: '#fff', justifyContent: 'space-between',
    },
    header: {
        alignItems: 'center', marginTop: 10, marginBottom: 10,
    },
    logoImage: {
        width: 80, height: 50, resizeMode: 'contain',
    },
    brandText: {
        fontSize: 12, color: '#FFAB91', letterSpacing: 2,
    },
    bannerContainer: {
        backgroundColor: '#FFCC80', paddingVertical: 12, alignItems: 'center', marginBottom: 40,
    },
    bannerText: {
        fontSize: 18, fontWeight: 'bold', color: '#000',
    },
    menuContainer: {
        paddingHorizontal: 30, flex: 1,
    },
    menuButton: {
        backgroundColor: '#FF80AB', borderRadius: 15, paddingVertical: 15, paddingHorizontal: 20, marginBottom: 20,
        flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
        shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5,
    },
    iconPlaceholder: {
        width: 20, height: 20, borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.2)', marginRight: 15, position: 'absolute', left: 20
    },
    menuButtonText: {
        color: '#FFF', fontSize: 18, fontWeight: '400',
    },
    fakeBottomBar: {
        height: 60, backgroundColor: '#FFCC80', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    },
    barItem: { padding: 10 },
    activeItem: {
        backgroundColor: '#FF80AB', borderRadius: 20, padding: 12, marginTop: -15,
    }
});