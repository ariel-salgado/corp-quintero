export const prerender = false;

import type { Actions } from './$types';

export const actions: Actions = {
  default: async ({ request }) => {
    const formData = Object.fromEntries(await request.formData());
		console.log(formData);
  }
}