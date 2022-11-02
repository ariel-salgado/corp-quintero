import type { PageLoad } from './$types';
import trpc from '$lib/trpc';

export const load: PageLoad = async ({ fetch }) => {
	const eventos = await trpc(fetch).query('eventos:all');
	return {
		eventos: eventos
	};
};
