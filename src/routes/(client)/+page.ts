import type { PageLoad } from './$types';
import trpc from '$lib/trpc';

export const load: PageLoad = async ({ fetch }) => {
	const message = await trpc(fetch).query('login', { nombre: 'foo', contrasena: 'bar' });
	return {
		message: message
	};
};
