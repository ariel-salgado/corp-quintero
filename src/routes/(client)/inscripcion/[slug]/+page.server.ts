import type { Actions } from './$types';
import { InscriptionSchema } from '$utils/zod/validations';
import { ZodError } from 'zod';
import trpc from '$lib/trpc';

export const actions: Actions = {
	default: async ({ request, params, fetch }) => {
		const formData = Object.fromEntries(await request.formData());
		const query = Object.assign(formData, { id: Number(params.slug) });

		try {
			const parse = InscriptionSchema.parse(query);
			const result = await trpc(fetch).mutation('eventos:inscription', parse);

			if (result)
				return {
					response: true
				};

			return {
				response: false
			};
		} catch (err: unknown) {
			if (err instanceof ZodError) {
				const { fieldErrors: errors } = err.flatten();
				const { username, password, ...rest } = formData;
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
