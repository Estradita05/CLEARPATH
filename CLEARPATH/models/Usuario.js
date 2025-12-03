export class Usuario {
    constructor(id, nombre, apellido, email, password, fechaNacimiento, fechaCreacion) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.fechaNacimiento = fechaNacimiento;
        this.fechaCreacion = fechaCreacion || new Date().toISOString();
    }

    static validar(nombre, email, password) {
        if (!nombre || nombre.trim().length === 0) {
            throw new Error('El nombre no puede estar vacío');
        }
        if (!email || !email.includes('@')) {
            throw new Error('El correo electrónico no es válido');
        }
        if (!password || password.length < 6) {
            throw new Error('La contraseña debe tener al menos 6 caracteres');
        }
        return true;
    }
}