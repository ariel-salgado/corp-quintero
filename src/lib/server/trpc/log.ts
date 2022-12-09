import { createRouter } from '$lib/server/createRouter';
import prismaClient from '$lib/server/prismaClient';
import { LoginSchema } from '$utils/zod/schema';

export const log = createRouter().query(':in', {
	input: LoginSchema,
	resolve: async ({ input }) => {
		return prismaClient.usuario.count({
			where: {
				nombre: input.username,
				contrasena: input.password,
				estado: 'Activo'
			}
		});
	}
});
