// Importar el módulo 'mysql' para la conexión a la base de datos
const mysql = require('mysql');
// Importar el módulo 'dotenv' para cargar las variables de entorno desde el archivo .env
require('dotenv').config();

/**
 * Configuración de la base de datos utilizando variables de entorno.
 * @type {Object}
 */
const dbConfig = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
};

/**
 * Crear una conexión a la base de datos MySQL.
 * @type {mysql.Connection}
 */
const connection = mysql.createConnection(dbConfig);

/**
 * Conectar a la base de datos.
 * @param {function} callback - Función de callback que se ejecuta después de intentar conectar.
 */
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.stack);
        return;
    }
    console.log('Connected to the database as id ' + connection.threadId);
});

// Exportar la conexión para que pueda ser utilizada en otras partes de la aplicación
module.exports = connection;