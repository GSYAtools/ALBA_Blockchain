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
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get type() {
        return this._type;
    }

    get location() {
        return this._location;
    }

    // Setters
    set id(value) {
        this._id = value;
    }

    set name(value) {
        this._name = value;
    }

    set type(value) {
        if (!Object.values(SensorTypes).includes(value)) {
            throw new Error(`Invalid sensor type: ${value}`);
        }
        this._type = value;
    }

    set location(value) {
        this._location = value;
    }
}

module.exports = Sensor;
module.exports = SensorTypes;