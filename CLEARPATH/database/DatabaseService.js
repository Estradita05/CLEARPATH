import { Platform } from 'react-native';
import * as SQLite from 'expo-sqlite';

class DatabaseService {
    constructor() {
        this.db = null;
    }

    async initialize() {
        if (Platform.OS === 'web') {
            console.log('Usando LocalStorage para web (no soportado completamente en este demo)');
        } else {
            try {
                this.db = await SQLite.openDatabaseAsync('clearpath.db');
                
                await this.db.execAsync(`
                    CREATE TABLE IF NOT EXISTS usuarios (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        nombre TEXT NOT NULL,
                        apellido TEXT,
                        email TEXT NOT NULL UNIQUE,
                        password TEXT NOT NULL,
                        fecha_nacimiento TEXT,
                        fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP
                    );
                `);
                console.log('Base de datos inicializada correctamente');
            } catch (error) {
                console.error('Error al inicializar la BD:', error);
            }
        }
    }

    async registrarUsuario(nombre, apellido, email, password, fechaNacimiento) {
        try {
            const result = await this.db.runAsync(
                'INSERT INTO usuarios (nombre, apellido, email, password, fecha_nacimiento) VALUES (?, ?, ?, ?, ?)',
                [nombre, apellido, email, password, fechaNacimiento]
            );
            return result.lastInsertRowId;
        } catch (error) {
            console.error('Error al registrar usuario en BD:', error);
            throw error;
        }
    }

    async loginUsuario(email, password) {
        try {
            const usuario = await this.db.getFirstAsync(
                'SELECT * FROM usuarios WHERE email = ? AND password = ?',
                [email, password]
            );
            return usuario;
        } catch (error) {
            console.error('Error en login BD:', error);
            throw error;
        }
    }

    async obtenerUsuarioPorId(id) {
        try {
            return await this.db.getFirstAsync('SELECT * FROM usuarios WHERE id = ?', [id]);
        } catch (error) {
            console.error('Error al obtener usuario:', error);
            return null;
        }
    }
}

export default new DatabaseService();