/**
 * Enumeración de los tipos de sensores.
 * @readonly
 * @enum {string}
 */
const SensorTypes = {
    HUMIDITY: 'humidity',
    TEMPERATURE: 'temperature'
  };
  
  /**
   * Clase que representa un sensor.
   */
  class Sensor {
    /**
     * Crear un sensor.
     * @param {number} id - El ID del sensor.
     * @param {string} name - El nombre del sensor.
     * @param {string} type - El tipo de sensor.
     * @param {string} location - La ubicación del sensor.
     * @throws {Error} Si el tipo de sensor no es válido.
     */
    constructor(id, name, type, location) {
      if (!Object.values(SensorTypes).includes(type)) {
        throw new Error(`Invalid sensor type: ${type}`);
      }
      this._id = id;
      this._name = name;
      this._type = type;
      this._location = location;
    }
  
    // Getters
  
    /**
     * Obtener el ID del sensor.
     * @return {number} El ID del sensor.
     */
    get id() {
      return this._id;
    }
  
    /**
     * Obtener el nombre del sensor.
     * @return {string} El nombre del sensor.
     */
    get name() {
      return this._name;
    }
  
    /**
     * Obtener el tipo del sensor.
     * @return {string} El tipo del sensor.
     */
    get type() {
      return this._type;
    }
  
    /**
     * Obtener la ubicación del sensor.
     * @return {string} La ubicación del sensor.
     */
    get location() {
      return this._location;
    }
  
    // Setters
  
    /**
     * Establecer el ID del sensor.
     * @param {number} value - El nuevo ID del sensor.
     */
    set id(value) {
      this._id = value;
    }
  
    /**
     * Establecer el nombre del sensor.
     * @param {string} value - El nuevo nombre del sensor.
     */
    set name(value) {
      this._name = value;
    }
  
    /**
     * Establecer el tipo del sensor.
     * @param {string} value - El nuevo tipo del sensor.
     * @throws {Error} Si el tipo de sensor no es válido.
     */
    set type(value) {
      if (!Object.values(SensorTypes).includes(value)) {
        throw new Error(`Invalid sensor type: ${value}`);
      }
      this._type = value;
    }
  
    /**
     * Establecer la ubicación del sensor.
     * @param {string} value - La nueva ubicación del sensor.
     */
    set location(value) {
      this._location = value;
    }
  }
  
  module.exports = Sensor;
  module.exports.SensorTypes = SensorTypes;