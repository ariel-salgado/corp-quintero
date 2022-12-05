-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: mysql
-- Tiempo de generación: 05-12-2022 a las 22:42:14
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tit`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria_evento`
--

CREATE TABLE `categoria_evento` (
  `id_evento` int NOT NULL,
  `categoria` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categoria_evento`
--

INSERT INTO `categoria_evento` (`id_evento`, `categoria`) VALUES
(1, 'Categoria 1'),
(1, 'Categoria 2'),
(2, 'Categoria 1'),
(2, 'Categoria 3'),
(3, 'Categoria 2'),
(3, 'Categoria 3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `evento`
--

CREATE TABLE `evento` (
  `id` int NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tipo` enum('Abierto','Cerrado') COLLATE utf8mb4_unicode_ci NOT NULL,
  `cupo` int NOT NULL,
  `fecha_inicio` date NOT NULL,
  `fecha_termino` date NOT NULL,
  `hora_inicio` time NOT NULL,
  `hora_termino` time NOT NULL,
  `direccion` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `requisitos` text COLLATE utf8mb4_unicode_ci,
  `poleras` tinyint(1) NOT NULL DEFAULT '0',
  `estado` enum('Activo','Inactivo') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Activo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `evento`
--

INSERT INTO `evento` (`id`, `nombre`, `tipo`, `cupo`, `fecha_inicio`, `fecha_termino`, `hora_inicio`, `hora_termino`, `direccion`, `descripcion`, `requisitos`, `poleras`, `estado`) VALUES
(1, 'Evento 1', 'Abierto', 10, '2022-11-01', '2022-11-02', '11:00:00', '21:00:00', 'Calle falsa 123', 'Descripcion del evento 1', 'Requisitos del evento 1', 1, 'Activo'),
(2, 'Evento 2', 'Abierto', 10, '2022-11-01', '2022-11-02', '11:00:00', '21:00:00', 'Calle falsa 123', 'Descripcion del evento 2', 'Requisitos del evento 2', 1, 'Activo'),
(3, 'Evento 3', 'Abierto', 10, '2022-11-01', '2022-11-02', '11:00:00', '21:00:00', 'Calle falsa 123', 'Descripcion del evento 3', 'Requisitos del evento 3', 0, 'Activo'),
(4, 'Evento 4', 'Cerrado', 10, '2022-11-01', '2022-11-02', '11:00:00', '21:00:00', 'Calle falsa 123', 'Descripcion del evento 4', 'Requisitos del evento 4', 0, 'Activo'),
(5, 'Evento 5', 'Cerrado', 10, '2022-11-01', '2022-11-02', '11:00:00', '21:00:00', 'Calle falsa 123', 'Descripcion del evento 5', 'Requisitos del evento 5', 0, 'Activo'),
(50, 'Evento 6', 'Abierto', 20, '2022-12-21', '2022-12-22', '10:30:00', '16:15:00', 'Calle Siempre Viva 1234', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum', '', 1, 'Activo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `inscribe_evento`
--

CREATE TABLE `inscribe_evento` (
  `rut` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `id_evento` int NOT NULL,
  `fecha` date NOT NULL,
  `categoria` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `inscribe_evento`
--

INSERT INTO `inscribe_evento` (`rut`, `id_evento`, `fecha`, `categoria`) VALUES
('19.337.065-9', 1, '2022-11-23', 'Categoria 1'),
('19.590.710-2', 1, '2022-11-16', 'Categoria 1'),
('44444444-4', 1, '2022-11-01', 'Categoria 1'),
('55555555-5', 2, '2022-11-01', 'Categoria 3'),
('66666666-6', 3, '2022-11-01', 'Categoria 2'),
('77777777-7', 4, '2022-11-01', 'Categoria 1'),
('88888888-8', 5, '2022-11-01', 'Categoria 3');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

CREATE TABLE `persona` (
  `rut` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombres` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono_personal` int NOT NULL,
  `telefono_contacto` int DEFAULT NULL,
  `correo` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `direccion` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `sexo` enum('M','F','N/A') COLLATE utf8mb4_unicode_ci NOT NULL,
  `talla` enum('S','M','L','XL','XXL') COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `persona`
--

INSERT INTO `persona` (`rut`, `nombres`, `apellidos`, `telefono_personal`, `telefono_contacto`, `correo`, `fecha_nacimiento`, `direccion`, `sexo`, `talla`) VALUES
('11111111-1', 'Juan', 'Perez', 123456789, 123456789, 'juan.perez@example.com', '1990-01-01', 'Calle falsa 123', 'M', 'S'),
('19.337.065-9', 'Hector', 'Delgado', 123456789, NULL, 'qwe@qwe.qwe', '2022-07-13', 'LECOFQ', 'N/A', 'S'),
('19.590.710-2', 'Ariel', 'Salgado', 977256376, NULL, 'ariel.salgado@alumnos.uv.cl', '1997-04-30', 'Mi direccion', 'M', 'M'),
('22222222-2', 'Maria', 'Gonzalez', 123456789, 123456789, 'maria.gonzalez@example.com', '1990-01-01', 'Calle falsa 123', 'F', 'M'),
('33333333-3', 'Pedro', 'Gonzalez', 123456789, 123456789, 'pedro.gonzalez@example.com', '1990-01-01', 'Calle falsa 123', 'M', 'L'),
('44444444-4', 'Jose', 'Perez', 123456789, 123456789, 'jose.perez@example.com', '1990-01-01', 'Calle falsa 123', 'M', 'S'),
('55555555-5', 'Maria', 'Perez', 123456789, 123456789, 'maria.perez@example.com', '1990-01-01', 'Calle falsa 123', 'F', 'M'),
('66666666-6', 'Pedro', 'Perez', 123456789, 123456789, 'pedro.perez@example.com', '1990-01-01', 'Calle falsa 123', 'M', 'L'),
('77777777-7', 'Jose', 'Gonzalez', 123456789, 123456789, 'jose.gonzalez@example.com', '1990-01-01', 'Calle falsa 123', 'M', 'S'),
('88888888-8', 'Carla', 'Gonzalez', 123456789, 123456789, 'carla.gonzalez@example.com', '1990-01-01', 'Calle falsa 123', 'F', 'M'),
('99999999-9', 'Carla', 'Perez', 123456789, 123456789, 'carla.perez@example.com', '1990-01-01', 'Calle falsa 123', 'F', 'L');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `rut` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `contrasena` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estado` enum('Activo','Inactivo') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'Activo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`rut`, `nombre`, `contrasena`, `estado`) VALUES
('11111111-1', 'juan', '123456', 'Activo'),
('22222222-2', 'maria', '123456', 'Activo'),
('33333333-3', 'pedro', '123456', 'Activo');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria_evento`
--
ALTER TABLE `categoria_evento`
  ADD PRIMARY KEY (`id_evento`,`categoria`);

--
-- Indices de la tabla `evento`
--
ALTER TABLE `evento`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `inscribe_evento`
--
ALTER TABLE `inscribe_evento`
  ADD PRIMARY KEY (`rut`,`id_evento`),
  ADD KEY `id_evento` (`id_evento`);

--
-- Indices de la tabla `persona`
--
ALTER TABLE `persona`
  ADD PRIMARY KEY (`rut`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`rut`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `evento`
--
ALTER TABLE `evento`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categoria_evento`
--
ALTER TABLE `categoria_evento`
  ADD CONSTRAINT `categoria_evento_ibfk_1` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id`);

--
-- Filtros para la tabla `inscribe_evento`
--
ALTER TABLE `inscribe_evento`
  ADD CONSTRAINT `inscribe_evento_ibfk_1` FOREIGN KEY (`rut`) REFERENCES `persona` (`rut`),
  ADD CONSTRAINT `inscribe_evento_ibfk_2` FOREIGN KEY (`id_evento`) REFERENCES `evento` (`id`);

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `usuario_ibfk_1` FOREIGN KEY (`rut`) REFERENCES `persona` (`rut`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
