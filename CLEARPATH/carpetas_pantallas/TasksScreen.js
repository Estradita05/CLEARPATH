
import React, { useState } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    Pressable, 
    ScrollView 
} from 'react-native';

export default function TaskScreen({ navigation }) {

    // Dummy data que luego conectaremos a SQLite
    const [tasks, setTasks] = useState([
        { id: 1, title: "Completar ruta básica", completed: false },
        { id: 2, title: "Revisar módulo de aprendizaje", completed: false },
        { id: 3, title: "Practicar lectura guiada", completed: true },
        { id: 4, title: "Explorar nuevo itinerario", completed: false },
    ]);

    const toggleTask = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

const logoImage = require('../assets/image.png'); 

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>

                {/* Encabezado */}
                <View style={styles.header}>
                    <Pressable onPress={() => navigation.goBack()}>
                        <Text style={styles.backButton}>{'<'}</Text>
                    </Pressable>
                    <Text style={styles.title}>MIS TAREAS</Text>
                    <View style={{ width: 20 }} />
                </View>

                {/* Lista de tareas */}
                {tasks.map(task => (
                    <Pressable 
                        key={task.id}
                        style={[
                            styles.taskItem,
                            task.completed && styles.completedTask
                        ]}
                        onPress={() => toggleTask(task.id)}
                    >
                        <Text style={styles.taskText}>
                            {task.completed ? "✔ " : "○ "} 
                            {task.title}
                        </Text>
                    </Pressable>
                ))}

            </ScrollView>

            {/* Fake Bottom Bar */}
            <View style={styles.fakeBottomBar}>
                <View style={styles.barItem}><Text>👤</Text></View>
                <View style={[styles.barItem, styles.activeItem]}><Text>🗄️</Text></View>
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
        backgroundColor: "#fff",
    },
    container: {
        paddingBottom: 80,
        paddingHorizontal: 20,
    },
    header: {
        backgroundColor: "#FFCC80",
        paddingVertical: 15,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
    },
    backButton: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#000",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
    },

    taskItem: {
        backgroundColor: "#FFE0B2",
        padding: 15,
        borderRadius: 15,
        marginBottom: 15,
    },
    completedTask: {
        backgroundColor: "#FFB3C1",
        borderLeftWidth: 5,
        borderLeftColor: "#FF80AB",
    },
    taskText: {
        fontSize: 16,
        color: "#000",
        fontWeight: "500",
    },

    fakeBottomBar: {
        height: 60,
        backgroundColor: "#FFCC80",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
        width: "100%",
    },
    barItem: {
        padding: 10,
    },
    activeItem: {
        backgroundColor: "#FF80AB",
        borderRadius: 20,
        padding: 12,
        marginTop: -15,
    },
});
