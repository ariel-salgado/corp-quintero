import { createRouter } from '$lib/server/createRouter';
import prismaClient from '$lib/server/prismaClient';
import { z } from 'zod';
import { CreateEventoSchema, UpdateEventoSchema } from '$utils/zod/schema';

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
	})
	.mutation(':create', {
		input: CreateEventoSchema,
		resolve: async ({ input }) => {
			const categorias = input.categoria.map((categoria) => {
				return { categoria: categoria.trim() };
			});

			const query = prismaClient.evento.create({
				data: {
					requisitos: input.requisitos,
					nombre: input.nombre,
					fecha_termino: input.fecha_termino,
					direccion: input.direccion,
					cupo: input.cupo,
					tipo: input.tipo,
					fecha_inicio: input.fecha_inicio,
					hora_inicio: input.hora_inicio,
					hora_termino: input.hora_termino,
					descripcion: input.descripcion,
					poleras: input.poleras,
					categoria_evento: {
						create: categorias
					}
				},
				include: {
					categoria_evento: true
				}
			});

			return query;
		}
	})
	.mutation(':update', {
		input: UpdateEventoSchema,
		resolve: async ({ input }) => {
			const categorias = input.categoria.map((categoria) => {
				return { categoria: categoria.trim() };
			});

			const query = await prismaClient.evento.update({
				where: {
					id: input.id
				},
				data: {
					requisitos: input.requisitos,
					nombre: input.nombre,
					fecha_termino: input.fecha_termino,
					direccion: input.direccion,
					cupo: input.cupo,
					tipo: input.tipo,
					fecha_inicio: input.fecha_inicio,
					hora_inicio: input.hora_inicio,
					hora_termino: input.hora_termino,
					descripcion: input.descripcion,
					poleras: input.poleras,
					categoria_evento: {
						deleteMany: {
							id_evento: input.id
						},
						createMany: {
							data: categorias
						}
					}
				}
			});

			return query;
		}
	})
	.query(':edit-evento', {
		input: z.object({
			id: z.number()
		}),
		resolve: async ({ input }) => {
			const evento = prismaClient.evento.findUnique({
				where: {
					id: input.id
				},
				select: {
					nombre: true,
					tipo: true,
					cupo: true,
					fecha_inicio: true,
					fecha_termino: true,
					hora_inicio: true,
					hora_termino: true,
					direccion: true,
					descripcion: true,
					requisitos: true,
					poleras: true,
					categoria_evento: {
						select: {
							categoria: true
						}
					}
				}
			});

			return evento;
		}
	})
	.mutation(':delete', {
		input: z.object({
			id: z.number()
		}),
		resolve: async ({ input }) => {
			const query = prismaClient.evento.update({
				where: {
					id: input.id
				},
				data: {
					estado: 'Inactivo'
				}
			});

			return query;
		}
	});
