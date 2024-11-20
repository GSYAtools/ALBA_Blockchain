# Proyecto de Red Privada con EOS/EOSIO para Sensores

## Objetivo
Desarrollar un sistema que asegure la integridad y el no repudio de los datos transmitidos por sensores cada hora, utilizando una red privada con EOS/EOSIO, una base de datos MySQL y una API REST en Node.js.

## Arquitectura del Sistema

1. **Red privada EOS/EOSIO**: Implementar una blockchain privada para garantizar la inmutabilidad y trazabilidad de los datos.
2. **Capa de almacenamiento**: Utilizar MySQL para almacenar los datos detallados de los sensores.
3. **Capa de aplicación**: Desarrollar una API REST con Node.js para interactuar con la blockchain y la base de datos.

## Componentes Clave

### Contratos Inteligentes
- Desarrollar contratos inteligentes en C++ para EOS que registren los hashes de los datos de los sensores en la blockchain.
- Implementar funciones para verificar la integridad de los datos almacenados.

### Base de Datos
- Diseñar un esquema en MySQL para almacenar los datos de los sensores, incluyendo timestamps y metadatos relevantes.

### API REST
- Crear endpoints para recibir datos de los sensores, almacenarlos en MySQL y registrar sus hashes en la blockchain.
- Implementar endpoints para consultar y verificar la integridad de los datos.

## Flujo de Datos

1. Los sensores envían datos cada hora a la API REST.
2. La API almacena los datos en MySQL.
3. Se calcula un hash de los datos y se registra en la blockchain EOS mediante un contrato inteligente.
4. La API devuelve una confirmación que incluye el ID de la transacción en la blockchain.

## Seguridad y No Repudio

- Utilizar firmas digitales basadas en claves pública/privada para autenticar los sensores.
- Implementar un sistema de sellado de tiempo en la blockchain para asegurar la irrefutabilidad temporal de los datos.

## Verificación de Integridad

- Desarrollar un proceso que verifique periódicamente la integridad de los datos en MySQL comparando sus hashes con los registrados en la blockchain.

## Escalabilidad

- Diseñar el sistema para manejar un gran volumen de datos, considerando la frecuencia de las transmisiones de los sensores.
- Implementar un sistema de caché para optimizar las consultas frecuentes.

## Consideraciones Adicionales

- Implementar un sistema de gestión de claves para los sensores y usuarios del sistema.
- Desarrollar un panel de control para monitorear la salud del sistema y visualizar estadísticas.
- Considerar la implementación de un sistema de alertas para detectar anomalías en los datos o intentos de manipulación.

