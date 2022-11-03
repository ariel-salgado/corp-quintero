import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import trpc from '$lib/trpc';

export const load: PageLoad = async ({ fetch }) => {
	const eventos = await trpc(fetch).query('eventos:all-actives');

	if (!eventos) throw error(404, 'Not Found');

	return {
		eventos: eventos
	};
};
