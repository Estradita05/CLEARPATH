import React from 'react';
import { View, Text, StyleSheet, Image, Pressable, SafeAreaView, ScrollView } from 'react-native';

const logoImage = require('../assets/adaptive-icon.png'); 

export default function ProfileScreen({ navigation }) {

    const handleLogout = () => {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                
                <View style={styles.header}>
                    <Image source={logoImage} style={styles.logoImage} />
                </View>

                <View style={styles.bannerContainer}>
                    <Pressable onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Text style={styles.backButtonText}>{'<'}</Text>
                    </Pressable>
                    <Text style={styles.bannerText}>MI PERFIL</Text>
                    <View style={{width: 20}} /> {/* Espacio para centrar el texto */}
                </View>

                <View style={styles.profileInfo}>
                    {/* Icono de usuario grande */}
                    <View style={styles.avatarContainer}>
                        <View style={styles.avatarPlaceholder}>
                            <Text style={{fontSize: 50}}>👤</Text>
                        </View>
                    </View>

                    <Text style={styles.userName}>Eduardo Garcia</Text>
                    <Text style={styles.userEmail}>EduardoG@gmail.com</Text>

                    <Pressable style={styles.editButton} onPress={() => console.log("Ir a Editar Perfil")}>
                        <Text style={styles.editButtonText}>Editar Perfil</Text>
                    </Pressable>
                </View>

                <View style={styles.statsContainer}>
                    <Text style={styles.sectionTitle}>Estadísticas de uso</Text>
                    
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel}>Rutas Completadas:</Text>
                        <Text style={styles.statValue}>25</Text>
                    </View>
                    
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel}>Distancia Total:</Text>
                        <Text style={styles.statValue}>120KM</Text>
                    </View>
                    
                    <View style={styles.statRow}>
                        <Text style={styles.statLabel}>Tiempo de Guía:</Text>
                        <Text style={styles.statValue}>10hrs</Text>
                    </View>
                </View>

                <Pressable style={styles.logoutButton} onPress={handleLogout}>
                    <Text style={styles.logoutButtonText}>Cerrar sesión</Text>
                </Pressable>

            </ScrollView>

            <View style={styles.fakeBottomBar}>
                 {/* El ícono de perfil está activo (fondo rosa) */}
                <View style={[styles.barItem, styles.activeItem]}><Text>👤</Text></View>
                <View style={styles.barItem}><Text>🗄️</Text></View>
                <View style={styles.barItem}><Text>🧘</Text></View>
                <View style={styles.barItem}><Text>☰</Text></View>
                <View style={styles.barItem}><Text>⚙️</Text></View>
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollContainer: {
        paddingBottom: 80,
    },
    header: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
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
    profileInfo: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatarContainer: {
        marginBottom: 15,
    },
    avatarPlaceholder: {
        width: 100, height: 100, borderRadius: 50, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center'
    },
    userName: {
        fontSize: 22, fontWeight: 'bold', color: '#000',
    },
    userEmail: {
        fontSize: 16, color: '#777', marginBottom: 15,
    },
    editButton: {
        backgroundColor: '#FFCC80',
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 20,
    },
    editButtonText: {
        color: '#FFF', fontWeight: 'bold', fontSize: 16,
    },
    statsContainer: {
        paddingHorizontal: 30,
        marginBottom: 30,
    },
    sectionTitle: {
        fontSize: 18, fontWeight: 'bold', marginBottom: 15, color: '#000',
    },
    statRow: {
        flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12,
    },
    statLabel: {
        fontSize: 16, color: '#555',
    },
    statValue: {
        fontSize: 16, color: '#000', fontWeight: '500',
    },
    logoutButton: {
        backgroundColor: '#FFCC80', // Naranja claro según diseño
        marginHorizontal: 40,
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    logoutButtonText: {
        color: '#FFF', fontSize: 18, fontWeight: 'bold',
    },
    fakeBottomBar: {
        height: 60,
        backgroundColor: '#FFCC80',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        position: 'absolute', bottom: 0, width: '100%',
    },
    barItem: { padding: 10 },
    activeItem: {
        backgroundColor: '#FF80AB', borderRadius: 20, padding: 12, marginTop: -15,
    }
});