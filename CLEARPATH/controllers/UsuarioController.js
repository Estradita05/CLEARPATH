import { Usuario } from '../models/Usuario';
import DatabaseService from '../database/DatabaseService';

export class UsuarioController {
    constructor() {
        this.listeners = [];
        this.initDB();
    }
    async initDB() {
        await DatabaseService.initialize();
    }
    async registrar(nombre, apellido, email, password, fechaNacimiento) {
        try {
            Usuario.validar(nombre, email, password);

            const insertId = await DatabaseService.registrarUsuario(
                nombre, apellido, email, password, fechaNacimiento
            );

            console.log(`Usuario registrado con ID: ${insertId}`);
            return true;
        } catch (error) {
            console.error('Error en controlador al registrar:', error);
            throw error; 
        }
    }

    async login(email, password) {
        try {
            const userRecord = await DatabaseService.loginUsuario(email, password);
            
            if (userRecord) {
                
                return new Usuario(
                    userRecord.id,
                    userRecord.nombre,
                    userRecord.apellido,
                    userRecord.email,
                    userRecord.password,
                    userRecord.fecha_nacimiento,
                    userRecord.fecha_creacion
                );
            } else {
                return null; 
            }
        } catch (error) {
            console.error('Error en controlador al hacer login:', error);
            throw error;
        }
    }
    
    async obtenerDatosUsuario(id) {
        const data = await DatabaseService.obtenerUsuarioPorId(id);
        if(data) {
             return new Usuario(
                data.id, data.nombre, data.apellido, data.email, 
                data.password, data.fecha_nacimiento, data.fecha_creacion
            );
        }
        return null;
    }
}