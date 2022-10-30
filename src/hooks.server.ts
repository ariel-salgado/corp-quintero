import type { Handle } from '@sveltejs/kit';
import { createContext } from '$lib/server/createRouter';
import { router } from '$lib/server/trpc';
import { createTRPCHandle } from 'trpc-sveltekit';

export const handle: Handle = async ({ event, resolve }) => {
	const response = await createTRPCHandle({
		router,
		createContext,
		event,
		resolve
	});

	return response;
};
