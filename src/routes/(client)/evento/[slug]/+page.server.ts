import type { PageServerLoad } from './$types';
import prismaClient from '$lib/server/prismaClient';

export const load: PageServerLoad = async ({ params }) => {
	if (!Number(params.slug))
		return {
			status: 404,
			error: new Error('Not found')
		};

	const evento = await prismaClient.evento.findUnique({
		where: {
			id: Number(params.slug)
		}
	});

	if (evento)
		return {
			evento: evento
		};

	return {
		status: 404,
		error: new Error('Not found')
	};
};
