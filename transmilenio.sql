--this database is create in PostgreSql name = transmilenio

CREATE DATABASE transmilenio

USE DATABASE transmilenio

CREATE DATABASE transmilenio
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Colombia.1252'
    LC_CTYPE = 'Spanish_Colombia.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

--******************************************************************
--Table pasajero

CREATE TABLE IF NOT EXISTS pasajero(
	idPasajero SERIAL PRIMARY KEY,
	nombre VARCHAR(20) NOT NULL,
	documento INT NOT NULL,
	fecha_cumpleaños DATE NOT NULL,
	telefono INT NOT NULL	
)

DROP TABLE pasajero

INSERT INTO pasajero (nombre, documento, fecha_cumpleaños, telefono) VALUES
('Maria', 51149, '28-09-2021', 790),
('Alberto', 93081, '05-06-2021', 568),
('Miguel', 1087, '06-11-2021', 313),
('Carlos', 1026, '28-08-2021', 311),
('Juan', 1032, '24-09-2021', 315)

SELECT * FROM pasajero

--******************************************************************
--Table estacion

CREATE TABLE IF NOT EXISTS estacion(
	idEstacion SERIAL PRIMARY KEY,
	nombre VARCHAR(20) NOT NULL,
	direccion VARCHAR(30) NOT NULL
)
DROP TABLE estacion

INSERT INTO estacion (nombre, direccion) VALUES
('Molinos', 'Calle 8 sur N 14-89' ),
('40 sur', 'Calle 40 sur N 17-09' ),
('Restrepo', 'Calle 25 sur N 10-23' ),
('Profamilia', 'Calle 32 N 12-16' ),
('Marly', 'Calle 53 N 14-43' ),
('Flores', 'Calle 63 N 14-57' )

SELECT * FROM estacion

--******************************************************************
--Table Vehiculo

CREATE TABLE IF NOT EXISTS vehiculo(
	idVehiculo SERIAL PRIMARY KEY,
	marca VARCHAR(20) NOT NULL,
	placa VARCHAR(10) NOT NULL,
	capacidad INT NOT NULL
)

DROP TABLE vehiculo

INSERT INTO vehiculo (marca, placa, capacidad) VALUES
('Volvo', 'FNT458C', 220),
('Mercedez Benz', 'SDR458E', 200),
('Chevrolet', 'DFR458Q', 400)

SELECT * FROM vehiculo

--******************************************************************
--table viaje

CREATE TABLE IF NOT EXISTS viaje(
	idViaje SERIAL PRIMARY KEY,
	idPasajero INT NOT NULL,
	idVehiculo INT NOT NULL,
	Hora_inicio TIME NOT NULL,
	Hora_final TIME NOT NULL
)

DROP TABLE viaje

INSERT INTO viaje (idPasajero, idVehiculo, Hora_inicio, Hora_final) VALUES
(1, 2, '13:01:23', '15:23:56'),
(2, 1, '09:45:18', '10:01:03'),
(3, 3, '20:15:20', '22:45:06')

SELECT * FROM viaje

--******************************************************************
--table ruta

CREATE TABLE IF NOT EXISTS ruta(
	idRuta SERIAL PRIMARY KEY,
	nombre_Ruta VARCHAR(20) NOT NULL,
	idVehiculo INT NOT NULL,
	idEstacion INT NOT NULL
)

DROP TABLE ruta

INSERT INTO ruta (idVehiculo, nombre_Ruta, idEstacion) VALUES
(1,'C15',2),
(2,'D21',4),
(3,'B13',1)

SELECT * FROM ruta
