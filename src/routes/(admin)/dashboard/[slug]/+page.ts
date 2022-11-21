import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import trpc from '$lib/trpc';

export const load: PageLoad = async ({ params, fetch }) => {
	if (!Number(params.slug)) throw error(404, 'Not Found');

	const evento = await trpc(fetch).query('dashboard:evento', { id: Number(params.slug) });

	if (!evento) throw error(404, 'Not Found');

	return {
		evento: evento
	};
};
