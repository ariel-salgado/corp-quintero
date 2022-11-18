import { createRouter } from '$lib/server/createRouter';
import prismaClient from '$lib/server/prismaClient';
import { z } from 'zod';
import { InscriptionSchema } from '$utils/zod/validations';

export const dashboard = createRouter()
	.query(':actives', {
		resolve: async () => {
			const eventos = prismaClient.evento.findMany({
				where: {
					estado: 'Activo'
				},
				select: {
					id: true,
					nombre: true,
					fecha_termino: true,
					direccion: true,
					cupo: true,
					_count: {
						select: {
							inscribe_evento: true
						}
					}
				}
			});
			return (await eventos).map(({ _count, ...eventos }) => ({
				...eventos,
				cupos_totales: eventos.cupo,
				cupos_disponibles: Number(eventos.cupo) - Number(_count.inscribe_evento)
			}));
		}
	})
	.query(':all', {
		resolve: async () => {
			const eventos = prismaClient.evento.findMany({
				select: {
					id: true,
					nombre: true,
					fecha_termino: true,
					direccion: true,
					cupo: true,
					_count: {
						select: {
							inscribe_evento: true
						}
					}
				}
			});
			return (await eventos).map(({ _count, ...eventos }) => ({
				...eventos,
				cupos_totales: eventos.cupo,
				cupos_disponibles: Number(eventos.cupo) - Number(_count.inscribe_evento)
			}));
		}
	});
