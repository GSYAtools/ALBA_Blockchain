/**
 * Clase que representa los datos de un sensor.
 */
class SensorData {
  /**
   * Crear un objeto de datos de sensor.
   * @param {number} id - El ID del dato del sensor.
   * @param {number} sensorId - El ID del sensor al que pertenecen los datos.
   * @param {number} value - El valor del dato del sensor.
   * @param {Date} timestamp - La marca de tiempo del dato del sensor.
   */
  constructor(id, sensorId, value, timestamp) {
    this._id = id;
    this._sensorId = sensorId;
    this._value = value;
    this._timestamp = timestamp;
  }

  // Getters
  /**
   * Obtener el ID del dato del sensor.
   * @return {number} El ID del dato del sensor.
   */
  get id() {
    return this._id;
  }

  /**
   * Obtener el ID del sensor al que pertenecen los datos.
   * @return {number} El ID del sensor.
   */
  get sensorId() {
    return this._sensorId;
  }

  /**
   * Obtener el valor del dato del sensor.
   * @return {number} El valor del dato del sensor.
   */
  get value() {
    return this._value;
  }

  /**
   * Obtener la marca de tiempo del dato del sensor.
   * @return {Date} La marca de tiempo del dato del sensor.
   */
  get timestamp() {
    return this._timestamp;
  }

  // Setters
  /**
   * Establecer el ID del dato del sensor.
   * @param {number} value - El nuevo ID del dato del sensor.
   */
  set id(value) {
    this._id = value;
  }

  /**
   * Establecer el ID del sensor al que pertenecen los datos.
   * @param {number} value - El nuevo ID del sensor.
   */
  set sensorId(value) {
    this._sensorId = value;
  }

  /**
   * Establecer el valor del dato del sensor.
   * @param {number} value - El nuevo valor del dato del sensor.
   */
  set value(value) {
    this._value = value;
  }

  /**
   * Establecer la marca de tiempo del dato del sensor.
   * @param {Date} value - La nueva marca de tiempo del dato del sensor.
   */
  set timestamp(value) {
    this._timestamp = value;
  }
}

module.exports = SensorData;