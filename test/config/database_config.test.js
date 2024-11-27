const mysql = require('mysql');
const connection = require('../../config/database_config');

describe('Database Connection', () => {
  test('should connect to the database without errors', (done) => {
    connection.connect((err) => {
      if (err) {
        console.error('Error connecting to the database:', err);
      }
      expect(err).toBeNull();
      connection.end(done); // Cerrar la conexión después de la prueba
    });
  }, 10000); // Aumentar el tiempo de espera a 10 segundos
});