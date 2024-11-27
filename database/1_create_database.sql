CREATE DATABASE alba_blockchain;
ALTER USER 'alarcos'@'localhost' IDENTIFIED WITH mysql_native_password BY 'alarcos123';
GRANT ALL PRIVILEGES ON alba_blockchain.* TO 'alarcos'@'localhost';
FLUSH PRIVILEGES;