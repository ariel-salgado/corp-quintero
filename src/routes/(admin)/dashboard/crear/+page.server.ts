import type { Actions } from './$types';
import { CreateEventoSchemaParser } from '$utils/zod/validations';
import { ZodError } from 'zod';
import trpc from '$lib/trpc';

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		const formData = Object.fromEntries(data);

		try {
			const parse = CreateEventoSchemaParser.parse(formData);
			const result = await trpc(fetch).mutation('dashboard:create', parse);

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
