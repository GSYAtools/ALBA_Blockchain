CREATE TABLE alba_blockchain.sensors(
	id INT AUTO_INCREMENT,
	sensor_name VARCHAR(50),
	sensor_type ENUM('temperature', 'humidity'),
	CONSTRAINT pk_sensors PRIMARY KEY (id)
);

CREATE INDEX idx_sensor_name ON alba_blockchain.sensors (sensor_name);

CREATE TABLE alba_blockchain.temperature_data(
	id INT AUTO_INCREMENT,
	sensor_id INT,
	data_value FLOAT,
	CONSTRAINT pk_temperature_data PRIMARY KEY (id),
	CONSTRAINT fk_temp_sensor_id FOREIGN KEY (sensor_id) REFERENCES sensors(id)
);

CREATE INDEX idx_temp_sensor_id ON alba_blockchain.temperature_data (sensor_id);

CREATE TABLE alba_blockchain.humidity_data(
	id INT AUTO_INCREMENT,
	sensor_id INT,
	data_value FLOAT,
	CONSTRAINT pk_humidity_data PRIMARY KEY (id),
	CONSTRAINT fk_hum_sensor_id FOREIGN KEY (sensor_id) REFERENCES sensors(id)
);

CREATE INDEX idx_hum_sensor_id ON alba_blockchain.humidity_data (sensor_id);