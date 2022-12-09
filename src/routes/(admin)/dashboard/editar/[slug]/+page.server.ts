import type { PageServerLoad, Actions } from './$types';
import { error } from '@sveltejs/kit';
import { UpdateEventoSchemaParser } from '$utils/zod/validations';
import { ZodError } from 'zod';
import trpc from '$lib/trpc';

export const load: PageServerLoad = async ({ params, fetch }) => {
	if (!Number(params.slug)) throw error(404, 'Not Found');

	const evento = await trpc(fetch).query('dashboard:edit-evento', { id: Number(params.slug) });

	if (!evento) throw error(404, 'Not Found');

	return {
		evento: evento
	};
};

export const actions: Actions = {
	default: async ({ params, request, fetch }) => {
		if (!Number(params.slug)) throw error(404, 'Not Found');

		const data = await request.formData();
		const formData = Object.fromEntries(data);
		const query = Object.assign(formData, { id: Number(params.slug) });
		try {
			const parse = UpdateEventoSchemaParser.parse(query);
			const result = await trpc(fetch).mutation('dashboard:update', parse);

			if (!result)
				return {
					response: false
				};

			return {
				response: true
			};
		} catch (err: unknown) {
			if (err instanceof ZodError) {
				const { fieldErrors: errors } = err.flatten();
				const { ...rest } = formData;
				return {
					data: rest,
					errors
				};
			} else {
				throw err;
			}
		}
	}
};
