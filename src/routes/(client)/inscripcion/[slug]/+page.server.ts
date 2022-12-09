import type { Actions } from './$types';
import { InscriptionSchemaParser } from '$utils/zod/validations';
import { ZodError } from 'zod';
import trpc from '$lib/trpc';

export const actions: Actions = {
	default: async ({ request, params, fetch }) => {
		const formData = Object.fromEntries(await request.formData());
		const query = Object.assign(formData, { id: Number(params.slug) });

		try {
			const parse = InscriptionSchemaParser.parse(query);
			const result = await trpc(fetch).mutation('eventos:inscription', parse);

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
