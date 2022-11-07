import type { Actions, PageServerLoad } from './$types';
import { invalid, redirect } from '@sveltejs/kit';
import { LoginSchema } from '$src/utils/zod/validations';
import { ZodError } from 'zod';
import trpc from '$lib/trpc';

export const load: PageServerLoad = async ({ cookies }) => {
	if (cookies.get('session') === 'authenticated') {
		throw redirect(302, '/dashboard');
	}
};

export const actions: Actions = {
	default: async ({ cookies, request, fetch }) => {
		const formData = Object.fromEntries(await request.formData());

		try {
			const parse = LoginSchema.parse(formData);
			const result = await trpc(fetch).query('log:in', parse);

			if (result) {
				cookies.set('session', 'authenticated', {
					httpOnly: true,
					sameSite: 'strict',
					maxAge: 60 * 60 * 24
				});
				throw redirect(200, '/dashboard');
			}

			return invalid(400, { message: 'Credenciales inválidas' });
		} catch (err: unknown) {
			if (err instanceof ZodError) {
				const { fieldErrors: errors } = err.flatten();
				const { username, password, ...rest } = formData;
				return {
					data: rest,
					errors
				};
			}
		}
	}
};
