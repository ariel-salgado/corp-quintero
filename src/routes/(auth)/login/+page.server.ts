import type { Action, Actions, PageServerLoad } from './$types';
import { invalid, redirect } from '@sveltejs/kit';
import { LoginSchema } from '$src/utils/zod/validations';
import { ZodError } from 'zod';
import trpc from '$lib/trpc';

export const load: PageServerLoad = async ({ cookies }) => {
	if (cookies.get('session') === 'authenticated') {
		throw redirect(302, '/dashboard');
	}
};

export const login: Action = async ({ cookies, request, fetch }) => {
	const formData = Object.fromEntries(await request.formData());

	try {
		const parse = LoginSchema.parse(formData);
		const result = await trpc(fetch).query('log:in', parse);

		if (!result) return invalid(400, { credentials: true });

		cookies.set('session', 'authenticated', {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			maxAge: 60 * 60 * 24 * 7
		});

		throw redirect(302, '/dashboard');
	} catch (err: unknown) {
		if (err instanceof ZodError) {
			const { fieldErrors: errors } = err.flatten();
			const { ...rest } = formData;
			return {
				data: rest,
				errors
			};
		}
	}
};

export const actions: Actions = { login };
