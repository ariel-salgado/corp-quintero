/* CREATE DATABASE */

DROP DATABASE IF EXISTS tit;
CREATE DATABASE tit CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
SET GLOBAL time_zone = 'America/Santiago';
USE tit;

/* CREATE TABLES */

CREATE TABLE persona (
    rut VARCHAR(12) NOT NULL,
    nombres VARCHAR(50) NOT NULL,
    apellidos VARCHAR(50) NOT NULL,
    telefono_personal INT(9) NOT NULL,
    telefono_contacto INT(9) DEFAULT NULL,
    correo VARCHAR(50) NOT NULL,
    fecha_nacimiento DATE NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    sexo ENUM('M', 'F', 'N/A') NOT NULL,
    talla ENUM('S', 'M', 'L', 'XL', 'XXL') NOT NULL,
    PRIMARY KEY(rut)
);

CREATE TABLE evento (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    tipo ENUM('Abierto', 'Cerrado') NOT NULL,
    cupo INT(4) NOT NULL,
    fecha_inicio DATE NOT NULL,
    fecha_termino DATE NOT NULL,
    hora_inicio TIME NOT NULL,
    hora_termino TIME NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    descripcion TEXT,
    requisitos TEXT,
    poleras BOOLEAN NOT NULL DEFAULT FALSE,
    estado ENUM('Activo', 'Inactivo') DEFAULT 'Activo' NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE usuario (
    rut VARCHAR(12) NOT NULL,
    nombre VARCHAR(100) NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    estado ENUM('Activo', 'Inactivo') DEFAULT 'Activo' NOT NULL,
    PRIMARY KEY(rut),
    FOREIGN KEY(rut) REFERENCES persona(rut)
);

CREATE TABLE inscribe_evento (
    rut VARCHAR(12) NOT NULL,
    id_evento INT NOT NULL,
    fecha DATE NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    PRIMARY KEY(rut, id_evento),
    FOREIGN KEY(rut) REFERENCES persona(rut),
    FOREIGN KEY(id_evento) REFERENCES evento(id)
);

CREATE TABLE categoria_evento (
    id_evento INT NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    PRIMARY KEY(id_evento, categoria),
    FOREIGN KEY(id_evento) REFERENCES evento(id)
);

/* CREATE USER */
DROP USER IF EXISTS 'grupo6'@'localhost';
CREATE USER 'grupo6'@'localhost' IDENTIFIED BY '654rodrigo';

/* GRANT PRIVILEGES */

GRANT ALL PRIVILEGES ON tit.persona TO 'grupo6'@'localhost';
GRANT ALL PRIVILEGES ON tit.evento TO 'grupo6'@'localhost';
GRANT ALL PRIVILEGES ON tit.usuario TO 'grupo6'@'localhost';
GRANT ALL PRIVILEGES ON tit.inscribe_evento TO 'grupo6'@'localhost';
GRANT ALL PRIVILEGES ON tit.categoria_evento TO 'grupo6'@'localhost';

FLUSH PRIVILEGES;