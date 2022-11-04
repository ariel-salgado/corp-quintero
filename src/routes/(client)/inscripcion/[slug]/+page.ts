import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import trpc from '$lib/trpc';

export const load: PageLoad = async ({ params, fetch }) => {
	if (!Number(params.slug)) throw error(404, 'Not Found');

	const categorias = await trpc(fetch).query('eventos:inscription', { id: Number(params.slug) });

	if (!categorias) throw error(404, 'Not Found');

	return {
		categorias: categorias
	};
};
