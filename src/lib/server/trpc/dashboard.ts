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
				cupos_disponibles: Number(eventos.cupo) - Number(_count.inscribe_evento)
			}));
		}
	})
	.query(':evento', {
		input: z.object({
			id: z.number()
		}),
		resolve: async ({ input }) => {
			const evento = prismaClient.evento.findUnique({
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
					poleras: true,
					estado: true,
					categoria_evento: {
						select: {
							categoria: true
						}
					},
					inscribe_evento: {
						select: {
							categoria: true,
							persona: {
								select: {
									rut: true,
									nombres: true,
									apellidos: true,
									sexo: true,
									fecha_nacimiento: true,
									telefono_personal: true,
									telefono_contacto: true,
									correo: true,
									talla: true
								}
							}
						}
					}
				}
			});

			return evento;
		}
	});
