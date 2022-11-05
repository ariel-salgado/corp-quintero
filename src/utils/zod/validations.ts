import { z } from 'zod';
import { validaRut } from '$utils/validaRut';
import { persona_sexo, persona_talla } from '@prisma/client';

export const LoginSchema = z.object({
	username: z
		.string({ required_error: 'El usuario es obligatorio' })
		.min(1, { message: 'El usuario es obligatorio' })
		.max(50, { message: 'El usuario debe ser menor a 50 caracteres' })
		.trim(),
	password: z
		.string({ required_error: 'La contraseña es obligatoria' })
		.min(6, { message: 'La contraseña debe ser mayor a 6 caracteres' })
		.max(50, { message: 'La contraseña debe ser menor a 50 caracteres' })
		.trim()
});

export const InscriptionSchema = z.object({
	id: z.number({ required_error: 'Evento no encontrado' }),
	categoria: z.string({ required_error: 'Debe seleccionar una categoría' }),
	rut: z
		.string()
		.min(11, { message: 'El rut debe tener puntos y guión' })
		.max(12, { message: 'RUT inválido' })
		.superRefine((rut) => {
			if (!validaRut(rut)) {
				return {
					message: 'RUT inválido'
				};
			}
		}),
	nombres: z
		.string({ required_error: 'Debe ingresar un nombre' })
		.min(1, { message: 'Debe ingresar un nombre' })
		.max(50, { message: 'El nombre ingresado es muy largo' })
		.trim(),
	apellidos: z
		.string({ required_error: 'Debe ingresar un apellido' })
		.min(1, { message: 'Debe ingresar un apellido' })
		.max(50, { message: 'El apellido ingresado es muy largo' })
		.trim(),
	telefono_personal: z
		.string()
		.length(9, { message: 'El teléfono debe tener 9 dígitos' })
		.refine((val) => {
			return !Number.isNaN(Number(val));
		}, 'Teléfono inválido')
		.transform((val) => Number(val))
		.or(
			z
				.number({ required_error: 'Debe ingresar un teléfono' })
				.gte(99999999, { message: 'El teléfono debe tener 9 dígitos' })
				.lte(1000000000, { message: 'El teléfono debe tener 9 dígitos' })
		),
	telefono_contacto: z
		.string()
		.length(9, { message: 'El teléfono debe tener 9 dígitos' })
		.or(z.string().length(0))
		.refine((val) => {
			return !Number.isNaN(Number(val));
		}, 'Teléfono inválido')
		.transform((val) => Number(val))
		.or(
			z
				.number({ required_error: 'Debe ingresar un teléfono' })
				.gte(99999999, { message: 'El teléfono debe tener 9 dígitos' })
				.lte(1000000000, { message: 'El teléfono debe tener 9 dígitos' })
				.or(z.number().nullish())
		),
	correo: z
		.string()
		.min(1, { message: 'Debe ingresar un correo' })
		.email({ message: 'Correo inválido' })
		.trim(),
	fecha_nacimiento: z
		.string()
		.min(1, { message: 'Debe ingresar una fecha' })
		.refine((val) => {
			return !Number.isNaN(Date.parse(val));
		}, 'Fecha inválida')
		.transform((val) => new Date(val))
		.or(z.date({ required_error: 'Debe ingresar una fecha' })),
	direccion: z
		.string({ required_error: 'Debe ingresar una dirección' })
		.min(1, { message: 'Debe ingresar una dirección' })
		.trim(),
	sexo: z.nativeEnum(persona_sexo, { required_error: 'Debe seleccionar su sexo' }),
	talla: z.nativeEnum(persona_talla, { required_error: 'Debe seleccionar su talla' })
});
