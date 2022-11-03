import type { PageLoad } from './$types';
import trpc from '$lib/trpc';

export const load: PageLoad = async ({ params, fetch }) => {
	if (!Number(params.slug))
		return {
			status: 404,
			error: new Error('Not found')
		};

	const evento = await trpc(fetch).query('eventos:one', { id: Number(params.slug) });

	if (evento)
		return {
			status: 200,
			evento: evento
		};

	return {
		status: 404,
		error: new Error('Not found')
	};
};
