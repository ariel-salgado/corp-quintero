import { z } from 'zod';
import {
	persona_sexo,
	persona_talla,
	usuario_estado,
	evento_tipo,
	evento_estado
} from '@prisma/client';

export const persona = z.object({
	rut: z.string(),
	nombres: z.string(),
	apellidos: z.string(),
	telefono_personal: z.number().int(),
	telefono_contacto: z.number().int().nullish(),
	correo: z.string(),
	fecha_nacimiento: z.date(),
	direccion: z.string(),
	sexo: z.nativeEnum(persona_sexo),
	talla: z.nativeEnum(persona_talla)
});

export const usuario = z.object({
	rut: z.string(),
	nombre: z.string(),
	contrasena: z.string(),
	estado: z.nativeEnum(usuario_estado)
});

export const evento = z.object({
	id: z.number().int(),
	nombre: z.string(),
	tipo: z.nativeEnum(evento_tipo),
	cupo: z.number().int(),
	fecha_inicio: z.date(),
	fecha_termino: z.date(),
	hora_inicio: z.date(),
	hora_termino: z.date(),
	direccion: z.string(),
	descripcion: z.string().nullish(),
	requisitos: z.string().nullish(),
	estado: z.nativeEnum(evento_estado)
});

export const categoria_evento = z.object({
	id_evento: z.number().int(),
	categoria: z.string()
});

export const inscribe_evento = z.object({
	rut: z.string(),
	id_evento: z.number().int(),
	fecha: z.date(),
	categoria: z.string()
});
