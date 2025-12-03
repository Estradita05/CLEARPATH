import { openDatabaseSync } from "expo-sqlite";

const db = openDatabaseSync("clearpath.db");


// Crear tablas al iniciar
db.transaction((tx) => {
    tx.executeSql(
        `CREATE TABLE IF NOT EXISTS usuarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT,
            apellido TEXT,
            email TEXT UNIQUE,
            password TEXT,
            fechaNacimiento TEXT
        );`
    );
});

export default db;


