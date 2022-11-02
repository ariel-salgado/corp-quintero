import { createRouter } from '$lib/server/createRouter';
import { eventos } from '$lib/server/trpc/eventos';

export const router = createRouter().merge('eventos', eventos);

export type ApiRouter = typeof router;
