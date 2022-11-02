import { createRouter } from '$lib/server/createRouter';
import prismaClient from '$lib/server/prismaClient';
import { z } from 'zod';

export const eventos = createRouter().query(':all', {
	resolve: async () => {
		return prismaClient.evento.findMany();
	}
});
