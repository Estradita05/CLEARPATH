import React from 'react';
import { View, Text, StyleSheet, Pressable, SafeAreaView, Image, ScrollView } from 'react-native';

const logoImage = require('../assets/image.png'); 

export default function SubjectsScreen({ navigation }) {
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
                    <Text style={styles.bannerText}>MATERIAS</Text>
                    <View style={{width: 20}} /> 
                </View>

                <View style={styles.subjectsContainer}>
                    <SubjectCard 
                        title="Español" 
                        color="#FBE9E7" 
                        textColor="#D84315" 
                        onPress={() => console.log("Ir a Español")}
                    />
                    <SubjectCard 
                        title="Ética empresarial" 
                        color="#FBE9E7"
                        textColor="#D84315"
                        onPress={() => console.log("Ir a Ética")}
                    />
                    <SubjectCard 
                        title="Comunicación" 
                        color="#FBE9E7"
                        textColor="#D84315"
                        onPress={() => console.log("Ir a Comunicación")}
                    />
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const SubjectCard = ({ title, color, textColor, onPress }) => (
    <Pressable 
        style={[styles.card, { backgroundColor: color }]} 
        onPress={onPress}
    >
        <Text style={[styles.cardText, { color: textColor || '#000' }]}>{title}</Text>
    </Pressable>
);

const styles = StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fff' },
    scrollContainer: { paddingBottom: 80 },
    header: { alignItems: 'center', marginTop: 10, marginBottom: 10 },
    logoImage: { width: 200, height: 100, resizeMode: 'contain' },
    bannerContainer: {
        backgroundColor: '#FFCC80', paddingVertical: 12, flexDirection: 'row',
        alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 30,
    },
    bannerText: { fontSize: 18, fontWeight: 'bold', color: '#000' },
    backButtonText: { fontSize: 24, fontWeight: 'bold', color: '#000' },
    subjectsContainer: { paddingHorizontal: 30, alignItems: 'center' },
    card: {
        width: '100%', paddingVertical: 35, borderRadius: 20, marginBottom: 25,
        alignItems: 'center', justifyContent: 'center',
        shadowColor: "#000", shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3,
    },
    cardText: { fontSize: 24, fontWeight: 'bold' },
});