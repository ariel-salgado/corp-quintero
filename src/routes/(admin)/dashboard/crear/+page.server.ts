import type { Actions } from './$types';
import { UpsertEventoSchema } from '$utils/zod/validations';
import { ZodError } from 'zod';
import trpc from '$lib/trpc';

export const actions: Actions = {
	default: async ({ request, fetch }) => {
		const data = await request.formData();
		//const file: File = data.get('foto') as File;
		const formData = Object.fromEntries(data);
		delete formData.foto;
		try {
			const parse = UpsertEventoSchema.parse(formData);
			const result = await trpc(fetch).mutation('dashboard:upsert', parse);

			if (!result)
				return {
					response: false
				};

			//const upload = await trpc(fetch).mutation('dashboard:upload', file);

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
