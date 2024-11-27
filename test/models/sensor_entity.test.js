const { Sensor, SensorTypes } = require('../../models/sensor_entity');

describe('Sensor', () => {
  test('should create a sensor with valid properties', () => {
    const sensor = new Sensor(1, 'Sensor1', SensorTypes.HUMIDITY, 'Location1');
    expect(sensor.id).toBe(1);
    expect(sensor.name).toBe('Sensor1');
    expect(sensor.type).toBe(SensorTypes.HUMIDITY);
    expect(sensor.location).toBe('Location1');
  });

  test('should throw an error for invalid sensor type', () => {
    expect(() => new Sensor(1, 'Sensor1', 'invalid_type', 'Location1')).toThrow('Invalid sensor type: invalid_type');
  });

  test('should set and get properties correctly', () => {
    const sensor = new Sensor(1, 'Sensor1', SensorTypes.HUMIDITY, 'Location1');
    sensor.id = 2;
    sensor.name = 'Sensor2';
    sensor.type = SensorTypes.TEMPERATURE;
    sensor.location = 'Location2';
    expect(sensor.id).toBe(2);
    expect(sensor.name).toBe('Sensor2');
    expect(sensor.type).toBe(SensorTypes.TEMPERATURE);
    expect(sensor.location).toBe('Location2');
  });
});