import { createRouter } from '$lib/server/createRouter';
import prismaClient from '$lib/server/prismaClient';
import { z } from 'zod';

export const eventos = createRouter()
	.query(':all', {
		resolve: async () => {
			return prismaClient.evento.findMany({
				where: {
					estado: 'Activo'
				},
				select: {
					id: true,
					nombre: true,
					descripcion: true
				}
			});
		}
	})
	.query(':one', {
		input: z.object({
			id: z.number()
		}),
		resolve: async ({ input }) => {
			return prismaClient.evento.findUnique({
				where: {
					id: input.id
				},
				select: {
					id: true,
					tipo: true,
					nombre: true,
					fecha_termino: true,
					hora_inicio: true,
					hora_termino: true,
					cupo: true,
					direccion: true,
					descripcion: true,
					requisitos: true,
					estado: true,
					categoria_evento: {
						select: {
							categoria: true
						}
					}
				}
			});
		}
	})
	.query(':inscription', {
		input: z.object({
			id: z.number()
		}),
		resolve: async ({ input }) => {
			return prismaClient.evento.findUnique({
				where: {
					id: input.id
				},
				select: {
					id: true,
					nombre: true,
					poleras: true,
					categoria_evento: {
						select: {
							categoria: true
						}
					}
				}
			});
		}
	});
