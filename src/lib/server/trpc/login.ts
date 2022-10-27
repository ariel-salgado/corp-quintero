import { createRouter } from '$lib/server/createRouter';
import prismaClient from '$lib/server/prismaClient';
import { z } from 'zod';

export const login = createRouter().query('', {
	input: z.object({
		nombre: z.string(),
		contrasena: z.string()
	}),
	resolve: async ({ input: { nombre, contrasena } }) => {
		prismaClient.usuario.findUnique({
			where: {
				nombre: nombre,
				contrasena: contrasena,
				estado: 'Activo'
			}
		});
	}
});
