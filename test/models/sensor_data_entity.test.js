const SensorData = require('../../models/sensor_data_entity');

describe('SensorData', () => {
  test('should create sensor data with valid properties', () => {
    const timestamp = new Date();
    const sensorData = new SensorData(1, 1, 100, timestamp);
    expect(sensorData.id).toBe(1);
    expect(sensorData.sensorId).toBe(1);
    expect(sensorData.value).toBe(100);
    expect(sensorData.timestamp).toBe(timestamp);
  });

  test('should set and get properties correctly', () => {
    const timestamp = new Date();
    const sensorData = new SensorData(1, 1, 100, timestamp);
    const newTimestamp = new Date();
    sensorData.id = 2;
    sensorData.sensorId = 2;
    sensorData.value = 200;
    sensorData.timestamp = newTimestamp;
    expect(sensorData.id).toBe(2);
    expect(sensorData.sensorId).toBe(2);
    expect(sensorData.value).toBe(200);
    expect(sensorData.timestamp).toBe(newTimestamp);
  });
});