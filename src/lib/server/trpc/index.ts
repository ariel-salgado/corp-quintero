import { createRouter } from '$lib/server/createRouter';
import { login } from '$lib/server/trpc/login';

export const apiRouter = createRouter().merge('login', login);

export type ApiRouter = typeof apiRouter;