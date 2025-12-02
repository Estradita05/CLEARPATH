import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, ScrollView, Image } from 'react-native';

const logoImage = require('../assets/adaptive-icon.png'); 

export default function TasksScreen({ navigation }) {
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
                    <Text style={styles.bannerText}>TAREAS</Text>
                    <View style={{width: 20}} /> 
                </View>

                <View style={styles.tasksContainer}>
                    
                    <View style={styles.taskCard}>
                        <View style={styles.taskInfo}>
                            <Text style={styles.taskTitle}>Tarea 1</Text>
                            <Text style={styles.taskSubtitle}>Audio-libro</Text>
                        </View>
                        <View style={styles.taskActions}>
                            <View style={styles.statusBadge}>
                                <Text style={styles.statusText}>COMPLETADA</Text>
                            </View>
                            <Pressable style={styles.actionButton}>
                                <Text style={styles.actionButtonText}>REVISAR</Text>
                            </Pressable>
                        </View>
                    </View>

                    <View style={styles.taskCard}>
                        <View style={styles.taskInfo}>
                            <Text style={styles.taskTitle}>Tarea 2</Text>
                            <Text style={styles.taskSubtitle}>Ejercicios</Text>
                        </View>
                        <View style={styles.taskActions}>
                            <View style={styles.statusBadge}>
                                <Text style={styles.statusText}>COMPLETADA</Text>
                            </View>
                            <Pressable style={styles.actionButton}>
                                <Text style={styles.actionButtonText}>REVISAR</Text>
                            </Pressable>
                        </View>
                    </View>

                    <Pressable style={styles.newTaskCard} onPress={() => console.log("Crear nueva tarea")}>
                        <Text style={styles.newTaskText}>Nueva tarea</Text>
                        <View style={styles.plusButton}>
                            <Text style={styles.plusIcon}>+</Text>
                        </View>
                    </Pressable>

                </View>

            </ScrollView>

            <View style={styles.fakeBottomBar}>
                <View style={styles.barItem}><Text>👤</Text></View>
                <View style={styles.barItem}><Text>🗄️</Text></View>
                <View style={styles.barItem}><Text>🧘</Text></View>
                <View style={styles.barItem}><Text>☰</Text></View>
                {/* Icono de configuración activo en tu PDF */}
                <View style={[styles.barItem, styles.activeItem]}><Text>⚙️</Text></View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fff' },
    scrollContainer: { paddingBottom: 80 },
    header: { alignItems: 'center', marginTop: 10, marginBottom: 10 },
    logoImage: { width: 60, height: 40, resizeMode: 'contain' },
    bannerContainer: {
        backgroundColor: '#FFCC80', paddingVertical: 12, flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 20,
    },
    bannerText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
    backButtonText: { fontSize: 24, fontWeight: 'bold', color: '#000' },
    tasksContainer: { paddingHorizontal: 20 },
    
    // Estilos de Tarjeta de Tarea
    taskCard: {
        backgroundColor: '#F5F5F5', borderRadius: 15, padding: 15, marginBottom: 15,
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
        shadowColor: "#000", shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, elevation: 2,
    },
    taskInfo: { flex: 1 },
    taskTitle: { fontSize: 16, fontWeight: 'bold', color: '#000' },
    taskSubtitle: { fontSize: 14, color: '#555', marginTop: 5 },
    taskActions: { alignItems: 'flex-end' },
    statusBadge: {
        backgroundColor: '#2E7D32', // Verde oscuro
        paddingVertical: 4, paddingHorizontal: 10, borderRadius: 10, marginBottom: 8,
    },
    statusText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
    actionButton: {
        backgroundColor: '#00ACC1', // Cyan oscuro
        paddingVertical: 6, paddingHorizontal: 15, borderRadius: 15,
    },
    actionButtonText: { color: '#FFF', fontSize: 11, fontWeight: 'bold' },

    // Estilos Nueva Tarea
    newTaskCard: {
        backgroundColor: '#FBE9E7', borderRadius: 15, padding: 20,
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10,
    },
    newTaskText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
    plusButton: {
        width: 40, height: 40, borderRadius: 20, backgroundColor: '#BDBDBD',
        justifyContent: 'center', alignItems: 'center',
    },
    plusIcon: { fontSize: 24, color: '#000' },

    fakeBottomBar: {
        height: 60, backgroundColor: '#FFCC80', flexDirection: 'row',
        justifyContent: 'space-around', alignItems: 'center', position: 'absolute', bottom: 0, width: '100%',
    },
    barItem: { padding: 10 },
    activeItem: { backgroundColor: '#FF80AB', borderRadius: 20, padding: 12, marginTop: -15 }
});