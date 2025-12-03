import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, Image } from 'react-native';

const logoImage = require('../assets/image.png'); 

export default function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={styles.safeArea}>
            
            <View style={styles.header}>
                <Image source={logoImage} style={styles.logoImage} />
            </View>

            <View style={styles.bannerContainer}>
                <Text style={styles.bannerText}>MENÚ PRINCIPAL</Text>
            </View>

            <View style={styles.menuContainer}>
                
                <MenuButton 
                    title="Mi perfil" 
                    iconName="user" 
                    onPress={() => navigation.navigate('Profile')} 
                />

                <MenuButton 
                    title="Materias" 
                    iconName="history" 
                    onPress={() => navigation.navigate('Subjects')} 
                />

                <MenuButton 
                    title="Ajustes" 
                    iconName="settings" 
                    onPress={() => console.log("Ajustes")} 
                />

                <MenuButton 
                    title="Ayuda y soporte" 
                    iconName="help" 
                    onPress={() => navigation.navigate('Help')} 
                />

            </View>
            

        </SafeAreaView>
    );
}

const MenuButton = ({ title, onPress }) => (
    <Pressable style={styles.menuButton} onPress={onPress}>
        <View style={styles.iconPlaceholder} /> 
        <Text style={styles.menuButtonText}>{title}</Text>
    </Pressable>
);

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fff' },
    header: { alignItems: 'center', marginTop: 10, marginBottom: 10 },
    logoImage: { width: 200, height: 100, resizeMode: 'contain' },
    bannerContainer: { backgroundColor: '#FFCC80', paddingVertical: 12, alignItems: 'center', marginBottom: 40 },
    bannerText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
    menuContainer: { paddingHorizontal: 30, flex: 1 },
    menuButton: { backgroundColor: '#FF80AB', borderRadius: 15, paddingVertical: 15, paddingHorizontal: 20, marginBottom: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', elevation: 5 },
    iconPlaceholder: { width: 20, height: 20, borderRadius: 10, backgroundColor: 'rgba(0,0,0,0.2)', marginRight: 15, position: 'absolute', left: 20 },
    menuButtonText: { color: '#FFF', fontSize: 20, fontWeight: '700' }
});