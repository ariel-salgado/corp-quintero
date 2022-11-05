import { createRouter } from '$lib/server/createRouter';
import prismaClient from '$lib/server/prismaClient';
import { z } from 'zod';
import { InscriptionSchema } from '$utils/zod/validations';

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
	})
	.mutation(':inscription', {
		input: InscriptionSchema,
		resolve: async ({ input }) => {
			input['telefono_contacto'] =
				input['telefono_contacto'] === 0 ? null : input['telefono_contacto'];
			const { id, categoria, ...rest } = input;
			const inscripcion = await prismaClient.persona.upsert({
				where: {
					rut: rest.rut
				},
				update: {
					...rest,
					inscribe_evento: {
						upsert: {
							where: {
								rut_id_evento: {
									rut: rest.rut,
									id_evento: id
								}
							},
							update: {
								id_evento: id,
								fecha: new Date(),
								categoria: categoria
							},
							create: {
								id_evento: id,
								fecha: new Date(),
								categoria: categoria
							}
						}
					}
				},
				create: {
					...rest,
					inscribe_evento: {
						create: {
							id_evento: id,
							fecha: new Date(),
							categoria: categoria
						}
					}
				}
			});
			return inscripcion;
		}
	});
