import { z } from 'zod';

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
