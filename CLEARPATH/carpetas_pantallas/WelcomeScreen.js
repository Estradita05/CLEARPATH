import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    Pressable, 
    SafeAreaView, 
    Image,
    ScrollView 
} from 'react-native';

const logoImage = require('../assets/adaptive-icon.png'); 

export default function HomeScreen({ navigation }) {

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>

                {/* HEADER */}
                <View style={styles.header}>
                    <Image source={logoImage} style={styles.logoSmall} />
                    <Text style={styles.headerText}>CLEAR PATH</Text>
                </View>

                {/* TITULO BIENVENIDA */}
                <Text style={styles.title}>Tu espacio de aprendizaje</Text>
                <Text style={styles.subtitle}>
                    Elige una opción para continuar
                </Text>

                {/* MENÚ PRINCIPAL */}
                <View style={styles.menuContainer}>

                    {/* PERFIL */}
                    <Pressable 
                        style={styles.card} 
                        onPress={() => navigation.navigate("Perfil")}
                    >
                        <Text style={styles.cardTitle}>Perfil</Text>
                        <Text style={styles.cardDescription}>
                            Edita tu información personal
                        </Text>
                    </Pressable>

                    {/* CURSOS */}
                    <Pressable 
                        style={styles.card} 
                        onPress={() => navigation.navigate("Cursos")}
                    >
                        <Text style={styles.cardTitle}>Cursos</Text>
                        <Text style={styles.cardDescription}>
                            Explora cursos disponibles
                        </Text>
                    </Pressable>

                    {/* TAREAS */}
                    <Pressable 
                        style={styles.card} 
                        onPress={() => navigation.navigate("Tasks")}
                    >
                        <Text style={styles.cardTitle}>Tareas</Text>
                        <Text style={styles.cardDescription}>
                            Gestiona tus actividades diarias
                        </Text>
                    </Pressable>

                    {/* AJUSTES */}
                    <Pressable 
                        style={styles.card}
                        onPress={() => navigation.navigate("Ajustes")}
                    >
                        <Text style={styles.cardTitle}>Ajustes</Text>
                        <Text style={styles.cardDescription}>
                            Configura tu app
                        </Text>
                    </Pressable>

                </View>

                {/* BOTÓN PRINCIPAL */}
                <Pressable 
                    style={styles.bigButton}
                    onPress={() => navigation.navigate("Cursos")}
                >
                    <Text style={styles.bigButtonText}>CONTINUAR APRENDIENDO</Text>
                </Pressable>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        paddingVertical: 20,
        paddingHorizontal: 20,
    },

    // HEADER
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 25,
    },
    logoSmall: {
        width: 45,
        height: 30,
        resizeMode: "contain",
        marginRight: 10,
    },
    headerText: {
        fontSize: 20,
        color: "#FFAB91",
        fontWeight: "600",
        letterSpacing: 2,
    },

    // TITULOS
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FF80AB",
        textAlign: "center",
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        textAlign: "center",
        color: "#444",
        marginBottom: 25,
    },

    // CONTENEDOR DE LAS TARJETAS
    menuContainer: {
        marginBottom: 30,
    },

    // TARJETAS DEL MENÚ
    card: {
        backgroundColor: "#FFF",
        padding: 20,
        borderRadius: 20,
        marginBottom: 15,
        elevation: 3, // Android
        shadowColor: "#000", // iOS
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#FF80AB",
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 14,
        color: "#555",
    },

    // BOTÓN PRINCIPAL INFERIOR
    bigButton: {
        backgroundColor: "#FFCC80",
        paddingVertical: 18,
        borderRadius: 30,
        alignItems: "center",
        marginTop: 10,
        marginBottom: 40,
        elevation: 3,
    },
    bigButtonText: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold",
        letterSpacing: 1,
    },
});

