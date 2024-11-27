const mysql = require('mysql');
require('dotenv').config();

/**
 * Configuración de la base de datos utilizando variables de entorno.
 * @type {Object}
 */
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

module.exports = connection;