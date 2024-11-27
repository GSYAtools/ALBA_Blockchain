const connection = require('../config/database_config');
const Sensor = require('../models/sensor_entity');

/**
 * Clase que maneja la interacción con la base de datos para los sensores.
 */
class SensorDAO {
  /**
   * Guardar un nuevo sensor en la base de datos.
   * @param {Sensor} sensor - El sensor a guardar.
   * @param {function} callback - Función de callback que se ejecuta después de intentar guardar.
   */
  static create(sensor, callback) {
    if (!(sensor instanceof Sensor)) {
      return callback(new Error('El parámetro sensor debe ser una instancia de la clase Sensor'));
    }

    const query = 'INSERT INTO sensors (name, type, location) VALUES (?, ?, ?)';
    connection.query(query, [sensor.name, sensor.type, sensor.location], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results.insertId);
    });
  }

  /**
   * Obtener un sensor por su ID.
   * @param {number} id - El ID del sensor.
   * @param {function} callback - Función de callback que se ejecuta después de intentar obtener el sensor.
   */
  static getById(id, callback) {
    const query = 'SELECT * FROM sensors WHERE id = ?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        return callback(err);
      }
      const result = results[0];
      const sensor = new Sensor(result.id, result.name, result.type, result.location);
      callback(null, sensor);
    });
  }

  /**
   * Actualizar un sensor en la base de datos.
   * @param {Sensor} sensor - El sensor a actualizar.
   * @param {function} callback - Función de callback que se ejecuta después de intentar actualizar.
   */
  static update(sensor, callback) {
    if (!(sensor instanceof Sensor)) {
      return callback(new Error('El parámetro sensor debe ser una instancia de la clase Sensor'));
    }

    const query = 'UPDATE sensors SET name = ?, type = ?, location = ? WHERE id = ?';
    connection.query(query, [sensor.name, sensor.type, sensor.location, sensor.id], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  }

  /**
   * Eliminar un sensor por su ID.
   * @param {number} id - El ID del sensor.
   * @param {function} callback - Función de callback que se ejecuta después de intentar eliminar el sensor.
   */
  static deleteById(id, callback) {
    const query = 'DELETE FROM sensors WHERE id = ?';
    connection.query(query, [id], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  }
}

module.exports = SensorDAO;