import { createRouter } from '$lib/server/createRouter';
import { eventos } from '$lib/server/trpc/eventos';
import { log } from '$src/lib/server/trpc/log';
import { dashboard } from '$lib/server/trpc/dashboard';

export const router = createRouter()
	.merge('eventos', eventos)
	.merge('log', log)
	.merge('dashboard', dashboard);

export type ApiRouter = typeof router;
