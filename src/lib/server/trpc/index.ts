import { createRouter } from '$lib/server/createRouter';
import { eventos } from '$lib/server/trpc/eventos';
import { log } from '$src/lib/server/trpc/log';

export const router = createRouter().merge('eventos', eventos).merge('log', log);

export type ApiRouter = typeof router;
