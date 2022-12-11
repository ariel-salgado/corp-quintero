import { z } from 'zod';
import {
	persona_sexo,
	persona_talla,
	usuario_estado,
	evento_tipo,
	evento_estado
} from '@prisma/client';

export const personaZod = z.object({
	rut: z.string(),
	nombres: z.string(),
	apellidos: z.string(),
	telefono_personal: z.number().int(),
	telefono_contacto: z.number().int(),
	correo: z.string(),
	fecha_nacimiento: z.date(),
	direccion: z.string(),
	sexo: z.nativeEnum(persona_sexo),
	talla: z.nativeEnum(persona_talla)
});

export const usuarioZod = z.object({
	rut: z.string(),
	nombre: z.string(),
	contrasena: z.string(),
	estado: z.nativeEnum(usuario_estado)
});

export const eventoZod = z.object({
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

export const categoria_eventoZod = z.object({
	id_evento: z.number().int(),
	categoria: z.string()
});

export const inscribe_eventoZod = z.object({
	rut: z.string(),
	id_evento: z.number().int(),
	fecha: z.date(),
	categoria: z.string()
});

export const LoginSchema = z.object({
	username: z.string(),
	password: z.string()
});

export const InscriptionSchema = z.object({
	id: z.number(),
	categoria: z.string(),
	rut: z.string(),
	nombres: z.string(),
	apellidos: z.string(),
	telefono_personal: z.number(),
	telefono_contacto: z.number().nullish(),
	correo: z.string().email(),
	fecha_nacimiento: z
		.string()
		.min(1, { message: 'Debe ingresar una fecha' })
		.refine((val) => {
			return !Number.isNaN(Date.parse(val));
		}, 'Fecha inválida')
		.transform((val) => new Date(val))
		.or(z.date({ required_error: 'Debe ingresar una fecha' })),
	direccion: z.string(),
	sexo: z.nativeEnum(persona_sexo),
	talla: z.nativeEnum(persona_talla)
});

export const CreateEventoSchema = z.object({
	nombre: z.string(),
	tipo: z.nativeEnum(evento_tipo),
	categoria: z.string().array(),
	cupo: z.number(),
	fecha_inicio: z.preprocess((arg) => {
		if (typeof arg == 'string' || arg instanceof Date) {
			const date = new Date(arg);
			return new Date(date.getTime() - date.getTimezoneOffset() * -60000);
		}
	}, z.date({ required_error: 'Debe ingresar una fecha de inicio' })),
	fecha_termino: z.preprocess((arg) => {
		if (typeof arg == 'string' || arg instanceof Date) {
			const date = new Date(arg);
			return new Date(date.getTime() - date.getTimezoneOffset() * -60000);
		}
	}, z.date({ required_error: 'Debe ingresar una fecha de término' })),
	hora_inicio: z.preprocess((arg) => {
		if (typeof arg === 'string' && arg.length === 5) {
			const [hora, minutos] = arg.split(':');
			return new Date(new Date().setHours(Number(hora), Number(minutos), 0, 0));
		} else {
			const date = new Date(arg as string);
			return new Date(
				new Date(arg as string).setHours(date.getHours() - 3, date.getMinutes(), 0, 0)
			);
		}
	}, z.date({ required_error: 'Debe ingresar una hora de inicio' })),
	hora_termino: z.preprocess((arg) => {
		if (typeof arg === 'string' && arg.length === 5) {
			const [hora, minutos] = arg.split(':');
			return new Date(new Date().setHours(Number(hora), Number(minutos), 0, 0));
		} else {
			const date = new Date(arg as string);
			return new Date(
				new Date(arg as string).setHours(date.getHours() - 3, date.getMinutes(), 0, 0)
			);
		}
	}, z.date({ required_error: 'Debe ingresar una hora de término' })),
	direccion: z.string(),
	descripcion: z.string(),
	requisitos: z.string().nullish(),
	poleras: z.boolean()
});

export const UpdateEventoSchema = CreateEventoSchema.merge(
	z.object({
		id: z.number()
	})
);
